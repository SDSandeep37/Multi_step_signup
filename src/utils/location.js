export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));

      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    });
  });
}

export async function reverseGeocode(latitude, longitude) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(
      latitude,
    )}&lon=${encodeURIComponent(longitude)}&addressdetails=1`,
  );

  if (!response.ok) {
    throw new Error("Unable to retrieve your address.");
  }

  const data = await response.json();

  return {
    address: data.display_name || "",
    city:
      data.address?.city || data.address?.town || data.address?.village || "",
    state: data.address?.state || "",
    country: data.address?.country || "",
    postalCode: data.address?.postcode || "",
  };
}
