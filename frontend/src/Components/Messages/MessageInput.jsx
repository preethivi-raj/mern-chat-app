import { BiSolidSend } from "react-icons/bi";

const MessageInput = () => {
  return (
      <form className='px-4 my-3'>
         <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-pink-50 opacity-50 text-neutral-950' 
            placeholder='Send a message'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <BiSolidSend />
            </button>
         </div>
      </form>
  )
}

export default MessageInput