const Cards = ({image,title , subtitle,link}) => {
  return (
    <a href={link} target='_blank' className="m-4 block max-w-sm overflow-hidden rounded-lg">
        <section className="relative hover:scale-105 transition-all ">
            <img src={image} className="w-full" alt={title}/>
            <section className="flex flex-col justify-between p-4 text-white">
                <h2 className="mb-2 text-2xl font-bold">{title}</h2>
                <p className="mb-4 text-sm font-medium">{subtitle}</p>
            </section>
        </section>
    </a>
  )
}

export default Cards