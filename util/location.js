



function getMapPreview(lat, lng) {
  const base = 'https://maps.googleapis.com/maps/api/staticmap';
const api_key = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
  const params = [
    `center=${lat},${lng}`,
    `zoom=14`,
    `size=400x400`,
    `maptype=roadmap`,                                     // or 'terrain', 'satellite', etc.
    `markers=color:red%7Clabel:A%7C${lat},${lng}`,        // red pin labeled A
    `key=${api_key}`
  ];
  return `${base}?${params.join('&')}`;
}

export default getMapPreview;
