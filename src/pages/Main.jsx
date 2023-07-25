import  {data}  from "../helper/data";
import {useState } from "react";
import Years from "../components/Years";
import Card from "../components/Card";

const Main = () => {
    // console.log(data);
    const [index, setIndex] = useState(0)

  return (
    <main className="container my-5  p-5 shadow bg-body-tertiary rounded">
       <Years data={data} index={index} setIndex={setIndex}/>
        <Card data={data} index={index}/>
    </main>
    
  )
}

export default Main