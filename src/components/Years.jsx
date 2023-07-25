

const Years = ({data, index, setIndex}) => {
  return (
    <section className="d-flex gap-4 m-3">
    {data?.map(({date}, i)=><h3 onClick={()=>setIndex(i)} role="button" className={i===index?"text-danger border-bottom border-danger border-5 bg-secondary-subtle w-25 m-auto" :"text-secondary bg-secondary-subtle w-25 m-auto"}
    key={i}>{date}</h3>

    )}
</section>
  )
}

export default Years