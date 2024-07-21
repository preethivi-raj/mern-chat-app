import Messages from "./Messages"
import MessageInput from "./MessageInput"

import { TiMessages } from "react-icons/ti";
import useConversation from "../../Zustand/useConversation.js";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";

const MessageContainer = () => {
    const  {selectedConversation , setSelectedConversation}=useConversation()

    useEffect(()=>{
      return ()=>setSelectedConversation(null);
    },[setSelectedConversation])

  return (
    <div className='md:min-w-[450px]  flex flex-col'>
        {!selectedConversation ? <NoChatSelected/> : (
            <>
            <div className='px-4 py-2 mb-2 bg-transparent'>
              <span className='label-text text-black font-bold text-xl'>TO :</span>
              <span className='text-white text-xl uppercase p-2 font-semibold '>{selectedConversation.fullName}</span>
              <div className='divider  my-0 py-0 h-1'/>
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
  const {authUser}=useAuthContext();
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-violet-950 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋🏻 {authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}