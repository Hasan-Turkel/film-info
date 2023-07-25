import  {data}  from "../helper/data";
import StarRatingComponent from "react-star-rating-component";

const Main = () => {
    // console.log(data);
  return (
    <main>
        <section>
            {data.map(({date}, i)=><h3 key={i}>{date}</h3>
            )}
        </section>
        <article>
            <h2>{data?.[0].title}</h2>
            <p>{data?.[0].body}</p>
            <h4>{data?.[0].tags.join("/")}</h4>
            <div>
            <StarRatingComponent
              name="data?.[0].rate"
              starCount={5}
              value={Math.round(data?.[0].rate / 2)}
            //   editing={true}
            />

            <h2>{data?.[0].rate.toFixed(2)} / 10</h2>
            </div>


        </article>
    </main>
    
  )
}

export default Main