import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  // we use useState hook. As we will be changing the UI 
  const [gif,setGif] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  async function fetchData(){

      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=E7bbhsISGoE2lPd9BJnvNy5QA3iy6MPQ`;
      const {data} = await axios.get(url);  // this returns a promise and we are destructing using {data} 
        // as we have data 2 times

      // this is the way to get the data from the api response
      var imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false)
  }

  function clickHandler(){
    fetchData();  // as this calls the api and sets the gif
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className='w-[300px] bg-blue-400 rounded-md border border-black flex flex-col items-center
    gap-y-5 mx-auto  mt-[15px]
    md:w-1/2'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold text-center'>Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="gif" width="450" height="250" className='px-3' loading='lazy'/>)
      }
      
      <button onClick={clickHandler}
      className='w-10/12 bg-blue-100 rounded-lg text-lg py-2 mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Random
