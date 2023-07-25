import  {data}  from "../helper/data";
import StarRatingComponent from "react-star-rating-component";
import {useState } from "react";

const Main = () => {
    // console.log(data);
    const [index, setIndex] = useState(0)

  return (
    <main className="container my-5  p-5 shadow bg-body-tertiary rounded">
        <section className="d-flex gap-4 m-3">
            {data.map(({date}, i)=><h3 onClick={()=>setIndex(i)} role="button" className={i==index?"text-danger border-bottom border-danger border-5 bg-secondary-subtle w-25 m-auto" :"text-secondary bg-secondary-subtle w-25 m-auto"}
            key={i}>{date}</h3>
            )}

        </section>
        <article className="text-start mx-5">
            <h1 className="text-warning">{data?.[index].title}</h1>
            <p>{data?.[index].body}</p>
            <h6 className="text-danger">{data?.[index].tags.join("/")}</h6>
            <div className="d-flex align-items-start gap-2">
            <StarRatingComponent className="fs-5"
              name="data?.[0].rate"
              starCount={10}
              value={Math.round(data?.[index].rate)}
              editing={true}
            />
            <h4 className="fs-4">{data?.[index].rate.toFixed(2)}/10</h4>
            </div>
        </article>
    </main>
    
  )
}

export default Main