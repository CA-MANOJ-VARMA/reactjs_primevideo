// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
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
          <MoviesSlider moviesList={moviesList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
