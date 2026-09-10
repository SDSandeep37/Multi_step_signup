import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import StepHeader from "../StepHeader";
import { getCurrentPosition, reverseGeocode } from "../../../utils/location";

const LocationStep = ({ location, setLocation, onComplete, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function detectLocation() {
    setLoading(true);
    setError("");

    try {
      const position = await getCurrentPosition();

      const latitude = position.coords.latitude;

      const longitude = position.coords.longitude;

      const address = await reverseGeocode(latitude, longitude);

      setLocation({
        latitude,
        longitude,
        ...address,
      });
    } catch (err) {
      console.error(err);

      if (err?.code === 1) {
        setError(
          "Location permission was denied. Please allow location access in your browser settings.",
        );
      } else if (err?.code === 2) {
        setError("Your location could not be determined.");
      } else if (err?.code === 3) {
        setError("Location request timed out. Please try again.");
      } else {
        setError(err?.message || "Unable to retrieve your location.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <StepHeader
        title="Where are you?"
        description="Allow location access so we can determine your current address."
      />

      {!location.latitude ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 text-3xl">
            <IoLocation className="text-(--color-text)" size={40} />
          </div>

          <h2 className="font-semibold text-white">Location access</h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            We'll use your browser location to determine your current address.
          </p>

          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

          <button
            type="button"
            onClick={detectLocation}
            disabled={loading}
            className="mt-6 steps_button w-full rounded-xl px-5 py-3 font-semibold text-(--color-text) transition-all duration-300"
          >
            {loading ? "Detecting location..." : "Allow location"}
          </button>
        </div>
      ) : (
        <div>
          <div className="rounded-2xl border border-(--color-subtext) bg-(--color-bg) p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                ✓
              </div>

              <div>
                <p className="font-semibold text-(--color-text)">
                  Location detected
                </p>

                <p className="text-sm text-(--color-subtext)">
                  Your current location was found.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div>
                <p className="text-(--color-subtext)">Address</p>

                <p className="mt-1 text-(--color-text)">{location.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-(--color-subtext)">Latitude</p>

                  <p className="mt-1 text-(--color-text)">
                    {location.latitude}
                  </p>
                </div>

                <div>
                  <p className="text-(--color-subtext)">Longitude</p>

                  <p className="mt-1 text-(--color-text)">
                    {location.longitude}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 rounded-xl border border-(--color-subtext) px-5 py-3 font-semibold text-(--color-text) hover:bg-zinc-900"
            >
              Back
            </button>

            <button
              type="button"
              onClick={() => onComplete(location)}
              className="flex-1 steps_button rounded-xl px-5 py-3 font-semibold text-(--color-text) transition-all duration-300"
            >
              Complete signup
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default LocationStep;
