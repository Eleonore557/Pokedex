import React, { Component } from 'react';
import Pokedex from './pokedex.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostList from './PostList.js'




class App extends Component {
  render() {
    return (
    
    <div>
          <div className="post card" key={postMessage.id}>
          <img src={Pokedex} alt="Pokedex" />
          </div>
          <div className="button">
            <PostList />
          </div>
    </div>
    );
  }
  
}





export default App;
