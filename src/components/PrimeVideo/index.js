// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const comedyList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    const actionsList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )

    return (
      <div className="css-bg-container">
        <div className="css-banner-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="css-bannerImage-itself"
          />
        </div>
        <div className="css-moviesSlider-container">
          <h1>Action Movies</h1>
          <MoviesSlider moviesList={actionsList} />
          <h1>Comedy Movies</h1>
          <MoviesSlider moviesList={comedyList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
