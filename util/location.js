


const api_key = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
function getMapPreview(lat, lng) {
    const base = 'https://maps.googleapis.com/maps/api/staticmap';

    const params = [
        `center=${lat},${lng}`,
        `zoom=14`,
        `size=400x400`,
        `maptype=roadmap`,
        `markers=color:red%7Clabel:A%7C${lat},${lng}`,
        `key=${api_key}`
    ];
    return `${base}?${params.join('&')}`;
}

export async function getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${api_key}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch address');
    }

    const data = await res.json();
    const address = data.results[0].formatted_address;
    return address;
}


export default getMapPreview;
