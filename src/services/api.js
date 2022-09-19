import axios from 'axios';
const API_KEY = '28247101-24b63c3c82da89bc4099ab93b';
const BASE_URL = 'https://pixabay.com/api';

export async function getImages(query, page) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 12,
    });
    try {
        const response = await axios.get(`${BASE_URL}/?${searchParams}`);
        return response.data;
    } catch(error) {
    new Error(`There is no image with name ${query}`);
}
};