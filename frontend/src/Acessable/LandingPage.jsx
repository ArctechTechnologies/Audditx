import React from 'react'

const Landingpage = () => {
  return (
    <>
    <div className=' w-screen  h-screen   lg:h-screen   grid  grid-rows-2 gap-5 '>
      <div className='grid w-full h-fit justify-items-center  '>
        <div className=' w-full   lg:flex  items-center '>

        <div className='font-head2 text-5xl w-full text-center lg:text-start '>AUDDITX</div>
      
        <ul className='  grid-flow-col gap-2  lg:grid-cols-5 lg:text-lg font-letter lg:text-gray-500  md:gap-0 w-full grid justify-items-center text-xs '>
                <li className='hover:border-b cursor-pointer  border-black'>HOME</li>
                <li className='hover:border-b cursor-pointer  border-black'>CONTACT</li>
                <li className='hover:border-b cursor-pointer  border-black'>ABOUT US</li>
                <li className='hover:border-b cursor-pointer  border-black'>FREE SERVICES</li>
                <li className='hover:border-b cursor-pointer  border-black  '>SIGN IN</li>
            </ul> 
        
        </div>
<div className='grid lg:grid-cols-2 gap-5 mt-5'>
        <div className='font-bold9  text-5xl lg:text-7xl row-span-1'>Accelerate your business with us </div> 
   
        <div className='w-full h-full row-span-2 ' >
            <img src='./conference.png'></img>
        </div>
        <div className='font-letter row-span-1'>
        we offer a range of business solutions for micro,small and medium enterprises for very less to free of cost .
        To make business easy and affordable services and products like Accounting Software , Online Store , Tax filling are provided for free
         and  to help businesses maintain cash flow and grow rapidly we provide them services like :- 
         buy now pay later , colletral and intrest free working capital finance and business loans . 


            </div>
     
            <div className='text-letter  grid justify-items-center gap-5 '>
                <div className='text-start  font-bold9'>provide us your email or phone to strat your journey </div>
                <form class="w-full max-w-sm grid justify-items-center  gap-5 ">
  <div class="flex items-center border-b border-blue-700 py-2 ">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Contact or Phone" aria-label="Full name"/>
    <button class="flex-shrink-0 bg-blue-700 hover:bg-blue-700 border-blue-700 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Sign Up
    </button>

   
  </div>
  
  </form>
  <button type='submit' className=" lg:w-1/3 bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mb-4 "
                              > have a referal code ?</button> 
  

            
           
        </div> 
         </div>
         
      </div>

    </div>
    </>
  )
}

export default Landingpage