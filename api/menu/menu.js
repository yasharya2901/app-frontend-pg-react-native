import { fetchData, postData, deleteData } from '../crud';


// get this week's menu
const getThisWeeksMenu = async () => {
  const response = await fetchData('menu/week');
  return response;
}

const getTodayMenu = async () => {
  const response = await fetchData('menu/today');
  return response;
}


export { getThisWeeksMenu, getTodayMenu };