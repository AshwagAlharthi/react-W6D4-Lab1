import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [inc, setInc] = useState(0);
  // const [dec, setDec] = useState(0);
  const [show, setShow] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      }
      );
  }, [show])

  return (
    <div className='h-full w-full bg-white flex justify-evenly items-center flex-wrap gap-4 mt-5'>
      {info.map((item, index) => {
        return (
          <div className=' h-[60vh] w-[20vw] max-sm:w-[40%] max-sm:h-[40vh]'>
            <div id={index} className='flex flex-col justify-evenly items-center text-center w-full h-full rounded-3xl bg-slate-300 text-black '>
              <div className='flex justify-center items-center'>
                <img className='w-[10vw] h-[20vh] max-sm:h[7vh]' src={item.image} />
              </div>
              <h1>Category: {item.category}</h1>
              <p>{item.title}</p>
              <p className='font-bold'>{item.price} SAR</p>
            </div>
          </div>

        )
      })}
    </div>
  )
}

export default App
