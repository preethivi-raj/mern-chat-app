import useConversation from "../../Zustand/useConversation";
import  {useAuthContext}  from "../../context/AuthContext"


const Message = ({message}) => {
       
    const { authUser } = useAuthContext();
    const {selectedConversation}=useConversation()
    const fromMe = message.senderId === authUser._id;

 

    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic  = fromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleColor  = fromMe ? "bg-violet-500" : "bg-pink-500";
    const shakeClass = message.shouldShake ? "shake" : "";

  

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs text-black flex gap-1 items-center'>
          {message.createdAt.split("T")[1].split(".")[0]}
        </div>
    </div>
  )
}

export default Message