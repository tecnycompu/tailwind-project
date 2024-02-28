const Card=({food, imageUrl, title, grade, restaurant, price})=>{
    return(

       <div className="bg-white w-70 h-70 rounded-lg"> 
        <figure className="relative mb-2 w-full">
            <spam className="absolute text-lg font-bold text-green-600 mt-4 px-3 py-3 bg-white/60 rounded-lg"> {food} </spam>
            <img className="w-full h-full" src={imageUrl} alt={title}/>
            <div className="absolute flex justify-center">{grade}</div>
        </figure>
        <p>
            <span className="text-sm font-medium">{restaurant}</span>
            <span className="text-sm font-light">{price}</span>
        </p>

       </div> 
    )

}

export default Card