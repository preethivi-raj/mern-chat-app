
import Conversation from './Conversation'
import  useGetConversations  from '../../Hooks/useGetConversations.js'
import { getRandomEmoji } from '../../utils/emojis.js';

const Conversations = () => {

  const {loading , conversations}=useGetConversations();
 
   

  return (
    <div className='py-2 flex flex-col overflow-auto' >
       {conversations.map((conversation)=>(
         <Conversation 
         key={conversation._id}
         conversation={conversation}
         emoji ={getRandomEmoji()}
         lastIdx={conversations-1}
         />
       ))}
       {loading ? <span className='loading loading-spinner mx-auto'></span> : null }
    </div>
  )
}

export default Conversations




// starter code for Conversations.jsx
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto' >
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations