import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export const API = {
  page: 1,
  per_page: 12,
  API_KEY: '31276153-bbebebed3806edcc66ad5b8b4',

  increasePage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  async addMaterial(query) {
    console.log(query);
    const url = `https://pixabay.com/api/?key=${this.API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.per_page}`;
    const response = await axios.get(url);
    return response.data.hits;
  },
};

// export const addMaterial = async values => {
//   const url = `https://pixabay.com/api/?key=${API.API_KEY}&q=${values.imagesSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${API.page}&per_page=${API.per_page}`;
//   const response = await axios.get(url);
//   return response.data.hits;
// };

// export const addLoad = async value => {
//   // console.log(imagesSearch);
//   page += 1;
//   const url = `https://pixabay.com/api/?key=${API_KEY}&q=${value.imagesSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;
//   const response = await axios.get(url);
//   return response.data.hits;
// };
