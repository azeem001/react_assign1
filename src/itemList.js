import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsDetails from './itemsDetails';

class ItemList extends Component {
    constructor(props)
    {
        super();
        
        this.state = {"items":[{"id":1,"name":"Fastract watch","price":120,"image_url":"https://images-na.ssl-images-amazon.com/images/I/81B6oYdNCYL._UY445_.jpg","production_house":"India X","rating":4,"type":"Drama","language":"Hindi","date":"2019-01-30T18:30:00.000Z"},{"id":2,"name":"Dragon war thor","price":840,"image_url":"https://images-na.ssl-images-amazon.com/images/I/81PBkciE0ML._SY606_.jpg","production_house":"India X","rating":4,"type":"Drama","language":"Hindi","date":"2019-01-30T18:30:00.000Z"},{"id":3,"name":"Jordan Air shoes","price":2500,"image_url":"https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/8/0/805882_2.jpg","production_house":"India X","rating":4,"type":"Drama","language":"Hindi","date":"2019-01-30T18:30:00.000Z"},{"id":4,"name":"American Tourister","price":1800,"image_url":"https://rukminim1.flixcart.com/image/832/832/jggv53k0/backpack/m/k/z/amt-fizz-sch-bag-02-black-ff9-0-09-002-backpack-american-original-imaf4ghyfkaucydj.jpeg?q=70","production_house":"India X","rating":4,"type":"Drama","language":"Hindi","date":"2019-01-30T18:30:00.000Z"}]};
       
        }

  render() {
    let listOfItems='';

    let searchWord =this.props.search;

    if (searchWord=='')
    {
       
        listOfItems = this.state.items.map((item,index) => {

            return <ItemsDetails key={index} details={item}/>
        })
    }
    else 
    {
       let filterItems = this.state.items.filter((item,index)=>{
            return item.name.includes(this.props.search);
        });
        listOfItems = filterItems.map((item,index) => {

            return <ItemsDetails key={index} details={item}/>
        })
    }


    return (
      <div className='App'>
    
      {listOfItems}
      </div>
    );
  }
}

export default ItemList;