'use server';
import NodeCache from 'node-cache';

// Initialize NodeCache with an indefinite TTL (set TTL to 0 for no expiration)
const cache = new NodeCache({ stdTTL: 0, checkperiod: 120 });

// Define the cache key
const cacheKey = 'cmsData';

// Function to clear the cache if needed
export const clearCache = () => {
  cache.del(cacheKey);
  console.log('Cache cleared');
};
// You can call getContent() to fetch and cache the data.
// To clear the cache, call clearCache().
export default async function getContent() {
  try {
    // Check if data is already cached
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log('Returning cached data');
      return cachedData;
    }

    // If not cached, fetch data from the API
    const res = await fetch('https://script.google.com/macros/s/AKfycbyaxUMs2p8pVX3xZhVjqw7huP5HzRW-c94k1KklkXGHKw9ws9ESv4utGLZe24G0b4HNnA/exec');
    const data = await res.json();

    if (Array.isArray(data)) {
      //cnsole.log('Fetched data:', data);

      // Store the fetched data in the cache
      cache.set(cacheKey, data);
      return data;
    } else {
      console.error('Data is not an array:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

