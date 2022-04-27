import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
    const post = props.post;
    return <figure className='figure'>
        <img className='photo' src={post.imageLink} alt={post.description} />
        <figcaption> <p> {post.description}</p></figcaption>
        <div className='button-container'>
            <button onClick={() => {
                props.startRemovingPost(props.index, post.id)
            }}>Remove</button>
        </div>
    </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

//////////// To inject store into Photo component
// function mapStateToProps(state) {
//     return {
//         posts: state
//     }
// }
// export default connect(mapStateToProps)(Photo)

// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//         return <figure className='figure'>
//             <img className='photo' src={post.imageLink} alt={post.description} />
//             <figcaption> <p> {post.description}</p></figcaption>
//             <div className='button-container'>
//                 <button className='remove-button'>Remove</button>
//             </div>
//         </figure>
//     }
// }

export default Photo