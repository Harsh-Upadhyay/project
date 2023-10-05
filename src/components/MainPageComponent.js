import React, { Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import ItemList from './ItemComponent';
import ItemDetail from './ItemDetailPage';
import { Items } from '../shared/items';



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: Items,
      selectedItem: null
    };
  }

  onItemSelect(itemId) {
    this.setState({selectedItem: itemId});
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
            <NavbarBrand href="/">E-Commerce</NavbarBrand>
        </Navbar>
        <ItemList items = {this.state.items} onClick={({itemId}) => this.onItemSelect(itemId)}/>
        <ItemDetail
          item = {this.state.items.filter((item) => item.id === this.state.selectedItem)[0]}
        />
      </div>
    );
  }
}

export default Main;
