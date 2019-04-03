import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import itemList from './itemList';
import ItemList from './itemList';

class ItemsDetails extends Component {
    constructor(props)
    {
        super();
        this.state = {cart:[]};
        this.clickAdd = this.clickAdd.bind(this);
    }

    clickAdd (id) 
    {  
        var list=[];
        list = this.props.details;
        list.count=0;

        if(list.count==0)
        {
            list.count=1;
        }

        this.setState({ cart: list}, function() {
            console.log(this.state.cart);
        });
       
     
    }

    clickRemove (id) 
    {  
        var list=[];
        list = this.props.details;
        list.count=1;

        if(list.count==1)
        {
            list.count=0;
        }

        this.setState({ cart: list}, function() {
            console.log(this.state.cart);
        });
       
      
    }

  render() {

    
     
    return (
       
      <div className='App'>
     
      <div className='card'>
      <div className='card-img'>
      <img height='100' width='80' src={this.props.details.image_url}/>
      </div>
      <div className='card-content'>
      <h4>{this.props.details.name} </h4>
      <p>{this.props.details.price}rs <a href=''>( 3 offers)</a></p>
      <span className='btn' onClick={(e)=>{this.clickAdd(this.props.details.id);}} >Add</span> <span className='btn'  onClick={(e)=>{this.clickRemove(this.props.details.id);}}>remove</span>
     <ItemList cart={this.state.cart}></ItemList>
      </div>
      </div>
      </div>
    );
  }
}

export default ItemsDetails;