import {
  RxEnvelopeClosed,
  RxAvatar,
  RxPlusCircled
} from 'react-icons/rx'
import { useUserContext } from '../ctx/UserContext'


export default function Aside() {
  const { currUser } = useUserContext()
  

  return (
    <aside className="flex items-center justify-around pt-4 gap-4 border-r border-dark bg-dark-gray fixed bottom-0 w-full text-3xl text-gray-300 py-2 md:top-[70px] md:w-16 md:flex-col md:justify-start">
        <a href={`/profile/${currUser.data._id}`}>
          <div className='flex flex-col gap-1 items-center hover:text-gray-400'>
            <img src={currUser.data.userImage} className='w-8 rounded-full hover:opacity-80 ' style={{border: `1px solid ${currUser.data.userColor}`}}/>
            <p className='text-sm text-zinc-900'>Profile</p>
          </div>
        </a>

        <a href="/chats">
          <div className='flex flex-col gap-1 items-center hover:text-gray-400'>
            <RxEnvelopeClosed/>
            <p className='text-sm text-zinc-900'>Chats</p>
          </div>
        </a>

        <a href="/addfriend">
          <div className='flex flex-col gap-1 items-center hover:text-gray-400'>
            <RxPlusCircled/>
            <p className='text-sm text-center text-zinc-900'>Friend</p>
          </div>
        </a>

    </aside>
  )
}