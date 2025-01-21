import axiosInstance from './axiosInstance';  // Correct the typo

// Get data (GET request)
export const getData = async (url: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('API GET Error:', error);
    throw error;  // Re-throw the error to be handled by the caller
  }
};

// POST request function
export const postData = async (url: string, data: any): Promise<any> => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data; // Return the response data
  } catch (error) {
    console.error('API POST Error:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// PUT request function
export const putData = async (url: string, data: any): Promise<any> => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data; // Return the response data
  } catch (error) {
    console.error('API PUT Error:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// DELETE request function
export const deleteData = async (url: string): Promise<any> => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data; // Return the response data
  } catch (error) {
    console.error('API DELETE Error:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
