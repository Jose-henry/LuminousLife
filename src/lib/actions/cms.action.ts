'use server';
import NodeCache from 'node-cache';

// Define the data type for content items
interface ContentItem {
  id: string;
  title: string;
  content: string;
  category: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  image10?: string;
}

// Initialize NodeCache with an indefinite TTL (set TTL to 0 for no expiration)
const cache = new NodeCache({ stdTTL: 0, checkperiod: 120 });

// Define the cache key
const cacheKey = 'cmsData';

// Function to clear the cache if needed
export const clearCache = () => {
  cache.del(cacheKey);
  console.log('Cache cleared');
};

// Function to fetch content by ID with caching mechanism
export default async function getContentById(id: string): Promise<ContentItem | null> {
  try {
    // Check if data is already cached
    const cachedData = cache.get<ContentItem[]>(cacheKey);

    if (cachedData) {
      console.log('Returning cached data');
      const content = cachedData.find(item => item.id === id);
      return content || null;
    }

    // If not cached, fetch data from the API
    const res = await fetch('https://script.google.com/macros/s/AKfycbz83dxhIzX0ZmawbxFx_jaS0fT_yl1usZkHFHsWFNl0f5AwsVbw4sU8utXlPbO399XVng/exec');
    const data = await res.json();

    if (Array.isArray(data)) {
      //console.log('Fetched data:', data);

      // Store the fetched data in the cache
      cache.set(cacheKey, data);

      const content = data.find((item: ContentItem) => item.id === id);
      return content || null;
    } else {
      console.error('Data is not an array:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Example usage:
// Uncomment the lines below to test the function.
// const targetId = '2'; // Replace with the desired ID
// getContentById(targetId).then(content => {
//   if (content) {
//     console.log('Content found:', content);
//     // Now you can use the retrieved content
//   } else {
//     console.log('Content not found for ID:', targetId);
//   }
// });
