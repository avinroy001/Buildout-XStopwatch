import { useState ,useEffect } from 'react'

import './App.css'

function App() {
  const [sec, setSec] = useState(0);
  const [min,setMin]=useState(0);
  const [start,setStart]=useState(false);
  // const [reset,setReset]=useState(false);
  // const [stop,setStop]=useState(true);
  const [buttonText,setButtonText]=useState('Start')

  const startStop=()=>{
    if(start==true){
      setStart(false);
    }else{
      setStart(true);
    }
  }
  
  var timer;
  useEffect(()=>{
    // var timer;
    if(start==true){
      setButtonText('Stop');
    timer=setInterval(()=>{
      setSec(sec+1);

      if(sec==60){
        setMin(min+1);
        setSec(0);
      }
    },1000)
    }else{
      ()=>clearInterval(timer);
      setButtonText('Start');
      // setSec(0);
      // setMin(0);
    }
    return ()=>clearInterval(timer);
  })

  const resett=()=>{
    setStart(false);
    clearInterval(timer);
    setSec(0);
    setMin(0);
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <h3>Time: {min}:{sec<10?"0"+sec : sec}</h3>
      <br/>
      <button onClick={()=>{startStop()}}>{buttonText}</button> 
      <button onClick={()=>{resett()}}>Reset</button>  
    </>
  )
}

export default App
