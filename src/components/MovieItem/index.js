// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  console.log(movieItem.thumbnailUrl)
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img
              src={movieItem.thumbnailUrl}
              alt="thumbnail"
              className="css-thumbanil-image"
            />
          </button>
        }
      >
        {close => (
          <div className="css-reactPlayer-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose data-testid="closeButton" />
            </button>
            <ReactPlayer url={movieItem.videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
