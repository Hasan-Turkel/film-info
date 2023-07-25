import  {data}  from "../helper/data";
import StarRatingComponent from "react-star-rating-component";

const Main = () => {
    // console.log(data);

  return (
    <main className="container my-5  p-5 shadow bg-body-tertiary rounded">
        <section className="d-flex gap-4 m-3">
            {data.map(({date}, i)=><h3 role="button" className="text-secondary bg-secondary-subtle w-25 m-auto" key={i}>{date}</h3>
            )}

        </section>
        <article className="text-start mx-5">
            <h1 className="text-warning">{data?.[0].title}</h1>
            <p>{data?.[0].body}</p>
            <h6 className="text-danger">{data?.[0].tags.join("/")}</h6>
            <div className="d-flex align-items-start gap-2">
            <StarRatingComponent className="fs-5"
              name="data?.[0].rate"
              starCount={10}
              value={Math.round(data?.[0].rate)}
            //   editing={true}
            />

            <h4 className="fs-4">{data?.[0].rate.toFixed(2)}/10</h4>
            </div>


        </article>
    </main>
    
  )
}

export default Main