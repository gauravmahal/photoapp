import React, { Component } from "react";
import Title from './Title';
import PhotoWall from './PhotoWall';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
        this.removePhoto = this.removePhoto.bind(this)
        console.log('constructor')
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }
    // called after components is inserted into the Dom 
    componentDidMount() {
        const data = SimulateFetchFromDatabase();
        this.setState({
            posts: data
        })
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        // alert('re-render')
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        console.log('render')
        return <div>
            <Title title={"Photowall"} />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </div>
    }
}

function SimulateFetchFromDatabase() {
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
    }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://www.science.org/do/10.1126/science.aax3525/full/Iridium52_16x9.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}

export default Main

//https://www.science.org/do/10.1126/science.aax3525/full/Iridium52_16x9.jpg
//https://img.wallpapersafari.com/desktop/1600/900/45/75/oC157f.jpg