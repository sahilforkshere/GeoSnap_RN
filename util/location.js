const GOOGLE_API_KEY = 'AIzaSyCy4ULcsSC6aaOOggI0Etywil9i6ahQujQ';

function getMapPreview(lat, lng) {
  const base = 'https://maps.googleapis.com/maps/api/staticmap';
  const params = [
    `center=${lat},${lng}`,
    `zoom=14`,
    `size=400x400`,
    `maptype=roadmap`,                                     // or 'terrain', 'satellite', etc.
    `markers=color:red%7Clabel:A%7C${lat},${lng}`,        // red pin labeled A
    `key=${GOOGLE_API_KEY}`
  ];
  return `${base}?${params.join('&')}`;
}

export default getMapPreview;
