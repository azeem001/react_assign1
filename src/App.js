import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsList from './itemList';

class App extends Component {

  constructor(props)
    {
        super();

        this.state={searchQuery:''};
        //this.handleSearchClick =  this.handleSearchClick.bind(this);
        this.handleChnage = this.handleChnage.bind(this);
    }
    
    handleChnage(data)
    {
      console.log(data);
      let currentState=this.state;
      currentState.searchQuery= data;
      this.setState(currentState);
    }
    
    

  render() {

  /*  let url ='http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=cars';

fetch(url,{mode: 'no-cors'}).then(res => res.json()).then((out) => {
  console.log('Checkout this JSON! ', out);
}).catch(err => { throw err });
*/


    return (
      <div className='App'>
    
      <input id='search' placeholder='search products' onChange={(e)=>{this.handleChnage(e.target.value);}}></input>
      
      <ItemsList search={this.state.searchQuery}></ItemsList>
     </div>
    );
  }
}

export default App;
