// import React from 'react';
import React, {Component} from 'react'; //importing from react lib
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

//CLASS COMPONENT
class App extends Component{
  constructor(){
    super(); //allows us to use all properties of this Component class including state object. It calls React.Component's constructor()
    this.state = {
      // string:"Abhishek Das",
      monsters: [], 
      searchField: ""
    }

    //ES5
    // this.handleChange= this.handleChange.bind(this);
     //binding the 'this' keyword binded to our app component so that it can work with handleChange function defined below.
  }

  //Life Cycle Method
  componentDidMount(){
    //lets make an API request to the given URL
    fetch('https://jsonplaceholder.typicode.com/users') //fetch return a promise object
    .then(response => response.json())//response is an object returned by the fetch statement. A response contain body of the c=actua response caan be obtained. but we need it in JSON format.
    //the ABove statement return another promise.
    //.then(users => console.log(users));//this will get the array we want, the actual data.
    .then(users =>  this.setState({monsters: users}))
    
  }

  //in the LIFECYCLE METHOD above we did not needed to context our this keyword as it is prebuilt with component class. 

  //ES5
  // handleChange(e){
  //   this.setState({searchField: e.target.value});
  // }  (here the 'this' keyword has to be contexted in the constructor method.)

  //ES6
  handleChange = (e) => {
      this.setState({searchField: e.target.value});
    }//this arrow function binds any reference to this inside of it to the contextin which it was defined i.e our app component. 

  render(){//we get render() from Component property of React Library

    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App Outer-container">
        <SearchBox 
        placeholder="Search Monsters..."
        handleChange = {this.handleChange}></SearchBox>
        <CardList monsters = {filteredMonsters }> </CardList>
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.string}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload  now.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
       <button onClick={() => this.setState({ string : "Abhijit Das" })}>Change name</button> 
        </header> */}
      </div>
    );
  }
}


//FUNCTIONAL COMPONENT
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload  now.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
