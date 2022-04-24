import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
// anchor tag and href attribute for navigating between pages  
function PhotoWall(props) {
    return <div>
        <a className='add-icon' href='#AddPhotos' onClick={props.onNavigate}> </a>
        {/* <button className='add-icon'> </button> */}
        <div className='photo-grid'>
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// class PhotoWall extends Component {
//     render() {
//         return <div className='photo-grid'>
//             {this.props.posts.map((post, index) => <Photo key={index} post={post} />)}
//         </div>
//     }
// }

export default PhotoWall