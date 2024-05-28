import axios from 'axios'

const searchImages = async (query) => {
  try{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID c0EFAthnFLIXv1G6dVgSsYocNExhIR-bVhOd1GXfvGg'
      },
      params: {
        query
      },
    })
    return response.data
  } catch(error){
    console.log(error)
  }

    
}

export default searchImages