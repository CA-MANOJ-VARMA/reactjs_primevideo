// Write your code here
import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  console.log(movieItem.thumbnailUrl)
  return (
    <div>
      <img
        src={movieItem.thumbnailUrl}
        alt="thumbnail"
        className="css-thumbanil-image"
      />
    </div>
  )
}

export default MovieItem
