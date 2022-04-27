import { database } from "../database/config"
import { ref, update, onValue } from "firebase/database";

export function startAddingPost(post) {
    return (dispatch) => {
        return update(ref(database, 'posts'), { [post.id]: post }).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost() {
    return (dispatch) => {
        return onValue(ref(database, 'posts'), (snapshot) => {
            let posts = [];
            snapshot.forEach((childsnapshot) => {
                posts.push(childsnapshot.val());
            });
            dispatch(loadPosts(posts));
        }, {
            onlyOnce: true
        })
    }
}

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

// adding post

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}