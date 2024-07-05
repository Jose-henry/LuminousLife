'use server';

export default async function getContent() {
  try {
    // Fetch data from the API
    const res = await fetch('https://script.google.com/macros/s/AKfycbwbWflJrCnUSG1rynO77Sc2TGgMIvLaPgKeDbScqo0loxn4xTfTSbNB5ennCp5uxcGToQ/exec'/* , { cache: 'no-store' } */);
    const data = await res.json();

    if (Array.isArray(data)) {
      return data;
    } else {
      console.error('Data is not an array:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return null;
  }
}
