// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  //   console.log(moviesList)
  //   const settings = {
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //   }
  return (
    <>
      <Slider>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieItem={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
