/*import { getStudents } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useGetStudents = (offset, pageLimit, country) => {
  return useQuery({
    queryKey: ['students', offset, pageLimit, country],
    queryFn: async () => getStudents(offset, pageLimit, country)
  });
};
*/

export async function getLeads() {
  try {
    const response = await fetch('/api/leads'); // Make a GET request to the API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json(); // Extract JSON data from the response
    console.log('Fetched data:', data);
    // Now you can use the fetched data as needed
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
