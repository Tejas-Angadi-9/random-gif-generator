import Random from './components/Random'
import Tag from './components/Tag'
import toast, { Toaster } from 'react-hot-toast';


export default function App() {

  return(
    <div className='w-full h-full flex flex-col background relative items-center'>
      <h1 className="bg-white text-center mt-[30px] 
       px-10 py-2 text-[30px] font-bold
       md:bg-white rounded-md w-11/12
       text-4xl mx-auto">RANDOM GIFS</h1>

      <div className="flex flex-col flex-wrap w-[100%] items-center gap-y-10 mt-[30px] mb-10">
        <Random />
        <Tag />
        <Toaster />
      </div>
    </div>
  )
}
