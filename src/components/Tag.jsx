import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import toast, { Toaster } from 'react-hot-toast';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  // we use useState hook. As we will be changing the UI 
  const [tag, setTag] = useState("");
  const [gif,setGif] = useState('');
  const [loading, setLoading] = useState(false);  
  
  async function fetchData(){

    try{

      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=E7bbhsISGoE2lPd9BJnvNy5QA3iy6MPQ&tag=${tag}`;
      const {data} = await axios.get(url);  // this returns a promise and we are destructing using {data} 
      // as we have data 2 times
      
      // this is the way to get the data from the api response
      var imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false)
    }
    catch(err){
      // alert("Cannot find")
      toast.error("Gif not found")
      console.log("Error")
      setTimeout(() => {
        window.location.reload(true)
      },700)
    }
  }

  function enterHandler(e){
    console.log('User pressed: ', e.key);

    if(e.key === 'Enter'){
      e.target.blur();  // this hides the keyboard after search button
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  },[]) 

  return (
    <div className='w-[300px] bg-green-400 rounded-md border border-black flex flex-col items-center
    gap-y-5 mt-[15px] md:w-1/2'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold text-center'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="gif" width="450" height="250" className='px-3' loading='lazy'/>)
      }

      <input 
        className='w-10/12 rounded-lg text-lg py-2 mb-[3px] text-center'
        onChange={(e) => setTag(e.target.value)}  
        onKeyDown={enterHandler}
        value={tag}
        placeholder='Enter the category'
      />
      
      <button onClick={() => fetchData()}
      className='w-10/12 bg-green-100 rounded-lg text-lg py-1 mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Tag
