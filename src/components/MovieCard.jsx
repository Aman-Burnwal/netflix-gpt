const MovieCard = ({ photoURL, alt }) => {
  return (
    <div className="min-w-28 h-48 overflow-hidden">
      <img
        
        className=" w-28 h-48"
        src={photoURL}
        alt={alt}
      />
    </div>
  )
}
export default MovieCard;