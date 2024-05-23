import Messages from "./Messages"
import MessageInput from "./MessageInput"

import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? <NoChatSelected/> : (
            <>
            <div className='px-4 py-2 mb-2 bg-transparent'>
              <span className='label-text'>To:</span>
              <span className='text-pink-900 font-bold'>Preethiviraj</span>
              <div className='divider my-0 py-0 h-1'/>
            </div>
            <Messages/>
            <MessageInput/>
          </>
        )}
    </div>
  )
}

export default MessageContainer



const NoChatSelected = () => {
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-violet-950 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋🏻 Preethiviraj</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}