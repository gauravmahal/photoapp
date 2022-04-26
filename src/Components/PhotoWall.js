import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// anchor tag and href attribute for navigating between pages  
function PhotoWall(props) {
    return <div>
        <Link className='add-icon' to='/AddPhotos' > </Link>
        {/* <a className='add-icon' href='#AddPhotos' onClick={props.onNavigate}> </a> */}
        <div className='photo-grid'>
            {props.posts
                .sort((x, y) => y.id - x.id)
                .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
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