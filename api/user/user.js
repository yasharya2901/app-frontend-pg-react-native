import { fetchData, postData, deleteData } from "../crud";


// post user data
const createUser = async (data) => {
    const response = await postData('user', data);
    return response;
}

export { createUser };