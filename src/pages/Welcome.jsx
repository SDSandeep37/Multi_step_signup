import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Detail({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <p className="text-xs uppercase tracking-wider text-zinc-600">{label}</p>

      <p className="mt-1 wrap-break-words text-sm font-medium text-zinc-200">
        {value || "Not provided"}
      </p>
    </div>
  );
}

const Welcome = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const saved = sessionStorage.getItem("signupProfile");

    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (error) {
        console.error("Invalid signup profile:", error);
        sessionStorage.removeItem("signupProfile");
      }
    }

    setLoading(false);
  }, []);
  // Wait until sessionStorage has been checked
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <p className="text-zinc-500">Loading...</p>
      </main>
    );
  }
  if (!profile) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-4xl">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Welcome, {profile.fullName}!
          </h1>

          <p className="mt-2 text-zinc-500">
            Your signup has been completed successfully.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl sm:p-8">
          <h2 className="mb-5 text-lg font-semibold">Your details</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Detail label="Full name" value={profile.fullName} />

            <Detail label="Username" value={`@${profile.username}`} />

            <Detail label="Email" value={profile.email} />

            <Detail label="Date of birth" value={profile.dateOfBirth} />

            <Detail label="Age" value={`${profile.age} years`} />

            <Detail
              label="Email verification"
              value={profile.emailVerified ? "Verified" : "Not verified"}
            />
          </div>

          <div className="mt-4">
            <Detail label="Full address" value={profile.location.address} />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Detail label="Latitude" value={profile.location.latitude} />

            <Detail label="Longitude" value={profile.location.longitude} />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Detail label="City" value={profile.location.city} />

            <Detail label="State" value={profile.location.state} />

            <Detail label="Country" value={profile.location.country} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
