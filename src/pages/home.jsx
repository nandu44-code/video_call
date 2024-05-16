import React,{useState,useCallback} from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {

    const [value,setValue] = useState()
    const navigate = useNavigate()
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    },[navigate,value])
    return (
    <div>
      <p>this is home page</p>
      <input 
      type='text' 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      placeholder='Enter room code'
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  )
}

export default Home
