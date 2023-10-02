import React, { Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import ItemList from './components/ItemComponent';
import './App.css';
import { Items } from './shared/items';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: Items
    };
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
            <NavbarBrand href="/">E-Commerce</NavbarBrand>
        </Navbar>
        <ItemList items = {this.state.items}/>
      </div>
    );
  }
}

export default App;
