import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export const addMaterial = async values => {
  const API_KEY = '31276153-bbebebed3806edcc66ad5b8b4';
  let page = 1;
  let per_page = 12;
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${values.imagesSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;
  const response = await axios.get(url);
  return response.data.hits;
};