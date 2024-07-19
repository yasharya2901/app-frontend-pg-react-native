import axiosInstance from './axiosInstance';


// read
export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


// create or update
export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(`${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};


// update
export const deleteData = async (endpoint, id) => {
  try {
    const response = await axiosInstance.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}