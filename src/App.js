
import { useRef } from 'react';
import './App.css';

function App() {
  let divref=useRef(null);
  const data=[
    {
      label:"Iam first section",
      style:{
      width:"100Vw",
      height:"400px",
      backgroundColor:"red"
      }
    },
    {
      label:"Iam Second section",
      style:{
      width:"100Vw",
      height:"400px",
      backgroundColor:"green"
      }
    },
    {
      label:"Iam third section",
      style:{
      width:"100Vw",
      height:"400px",
      backgroundColor:"blue"
      }
    },
    {
      label:"Iam fourth section",
      style:{
      width:"100Vw",
      height:"400px",
      backgroundColor:"yellow",
      
      }
    }
  ]
  function handleSection(){
    let position = divref.current.getBoundingClientRect().top;
window.scrollTo({ top: position, behavior: "smooth" });

  }
  return (
    <div className="App">
      <h1>Scroll to Particular section</h1>
      <button onClick={handleSection}>Scroll To Section</button>
      { // custom index so that goto the required section
        data.map((item,index)=><div style={item.style} ref={index===3?divref:null}>
         <p>{item.label}</p>
          </div>)
      }
    </div>
  );
}

export default App;
