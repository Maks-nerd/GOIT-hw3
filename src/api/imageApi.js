// Модули
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '22320158-241d603601ee22cf546972c18';

const fetchImages = (searchQuery, page) => {
  return axios.get(
    `/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

const imageApi = {
	fetchImages
}

export default imageApi;
