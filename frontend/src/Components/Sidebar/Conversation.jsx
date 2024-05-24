
import useConverstion from "../../Zustand/useConversation.js"
import { useSocketContext } from "../../context/SocketContext.jsx"

const Conversation = ({conversation , lastIdx , emoji}) => {

 const {selectedConversation , setSelectedConversation} =  useConverstion();

 

 const isSelected = selectedConversation?._id === conversation._id;
 const {onlineUsers} = useSocketContext();
 const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
     <div className={`flex gap-2 items-center hover:bg-violet-500 rounded p-2 py-1 cursor-pointer
       ${ isSelected ? 'bg-violet-500' : ""}
     `}
       onClick={()=>setSelectedConversation(conversation)}
     >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
     </div>

     {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation



// starer code for Conversation.jsx
// const Conversation = () => {
//     return (
//       <>
//        <div className='flex gap-2 items-center hover:bg-violet-500 rounded p-2 py-1 cursor-pointer'>
//           <div className='avatar  online'>
//               <div className='w-12 rounded-full'>
//                   <img src="" alt="user avatar" />
//               </div>
//           </div>
//           <div className='flex flex-col flex-1'>
//               <div className='flex gap-3 justify-between'>
//                   <p className='font-bold text-gray-200'>Preethiviraj</p>
//                   <span className='text-xl'>🐼</span>
//               </div>
//           </div>
//        </div>
  
//        <div className='divider my-0 py-0 h-1'/>
//       </>
//     )
//   }
  
//   export default Conversation