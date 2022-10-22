import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse;
  if(Array.isArray(data)){
      const gifs = data.map(image => {
      const {images, title, id} = image;
      const {url} = images.downsized_medium
      return {title, id, url}
    });
    return gifs
  }
  return []
}

export default function getFavsGifs({ids}){
    console.log(`ids ${ids}`);
    
    const apiURL = `${API_URL}/gifs?api_key=${API_KEY}&ids=${ids}`;

    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
}