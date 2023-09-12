import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useUserContext } from "../ctx/UserContext"
import Button from 'react-bootstrap/Button';
import { Header } from  '../components'
import Aside from '../components/Aside'

const ChatPage = () => {
  const [ chats, setChats ] = useState([])






  const { currUser } = useUserContext()



  const fetchChats = async () => {
    const data = await fetch('/api/chat')
    const result = await data.json()
    console.log(result.payload)
    setChats(result.payload)
    
  }

  useEffect(() => {
    fetchChats()
  }, [])

  if ( currUser.status === 'searching') {
    return (
      <>
      </>
    )
  } else if ( currUser.status === "notfound" ) {
    window.location.href = '/landing'
    return ( 
      <>
      </>
    )
  } else {

  return (
    // <div className="chat">
    //       <Button variant="primary">Primary</Button>

    //   <div>{chats.map((chat)=> (
    //     <div key={chat._id}>{chat.chatName}</div>
    //   ))}</div>
    // </div>
    <div className="h-screen flex flex-col">

      <Header />

      <div className="flex h-full">
        <Aside />

        <div className="flex flex-grow ml-16 mt-[70px]">

          <div className="flex-grow p-6 overflow-auto bg-dark-gray">
            {/* Message and Friends Box */}
            <div className="flex h-full">
              {/* Message Box */}
              <div className=" bg-zinc-700 shadow-lg rounded-lg p-4 flex-grow flex flex-col justify-between h-full">
                {/* Messages */}
                <div className="messages bg-zinc-500 p-2 rounded-lg h-full" style={{ overflowY: 'auto'}}>
                  <p className="message-text bg-blue-200 text-blue-800 py-2 px-4 rounded-lg mb-2">
                    Hello, how can I help you?
                  </p>

                  <p className=" bg-green-200 text-green-800 py-2 px-4 rounded-lg mb-2">
                    I have a question about your services.
                  </p>
    
                </div>

                {/* Input and Button */}
                <div className="mt-4">
                  <input type="text" placeholder="Type your message..." className="w-full border border-gray-400 rounded-lg flex-grow py-2 px-4 input bg-gray-200" />
                  <button className=" text-black rounded-lg py-2 px-4 mt-2 w-full" style={{backgroundColor: `${currUser.data.userColor}`}}>Send</button>
                </div>
              </div>

              {/* Friends Box */}
              {/* <div className="friends-box bg-white shadow-lg rounded-lg p-4 ml-4 flex-grow">
                <h2 className="text-lg font-medium mb-2">Friends</h2>
                <ul className="friend-list">
                  <li className="friend">Friend 1</li>
                  <li className="friend">Friend 2</li>
                  <li className="friend">Friend 3</li> */}
                  {/* Add more friends */}
                {/* </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default ChatPage