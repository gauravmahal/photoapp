import React, { Component } from 'react';
// Renders our web page 
// import ReactDom from 'react-dom';
// React 18 
import { createRoot } from 'react-dom/client';
// if needed auto relading feature then will require Babel Watch or Node Mon 

// /////////////// Elements 
// const tasks = ["take out trash", "shovel the driveway", "walk the dog"];

// // it gets complicated when we try to scale that's why we use JSX in place of it 
// const element = React.createElement("ol", null,
//     tasks.map((task, index) => React.createElement('li', { key: index }, task))
// );

// // it is hardcoded list 
// const element = <ol>
//     <li>{tasks[0]}</li>
//     <li>{tasks[1]}</li>
//     <li>{tasks[2]}</li>
// </ol>;

// ////////////// JSX expression 
// // div tag - is used for wrapping jsx element in enclosing tag
// const element =
//     <div>
//         <h1> Task List</h1>
//         <ol>
//             {tasks.map((task, index) => <li key={index}>{task}</li>)}
//         </ol>
//     </div>

// ////////// Components 
// // ES6 class used for declaring components 
// // render should return react elements on what should appers on screen 
// class List extends Component {
//     render() {
//         return (<ol>
//             {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
//         </ol>)
//     }
// }

// class Title extends Component {
//     render() {
//         return <h1> {this.props.title}</h1>
//     }
// }

// class Main extends Component {
//     render() {
//         return <div>
//             <Title title={"To Do's"} />
//             <List tasks={['Mown the lawn', 'walk the dog']} />
//             <List tasks={['house the driveway', 'finish the laundry']} />
//         </div>
//     }
// }

//////////// Refactoring 
import Main from './Components/Main';

// // Deprecated in react 18 
// ReactDom.render(element, document.getElementById('root'))
const root = createRoot(document.getElementById('root'));
root.render(<Main />)