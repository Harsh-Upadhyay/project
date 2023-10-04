import React from "react";
import ItemDetail from "./ItemDetailPage";
import { Card , CardBody , CardTitle , CardSubtitle , CardText} from "reactstrap";

class ItemList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null
    }
  }

  onItemSelect(item) {
    this.setState({selectedItem: item});
  }

  renderItem(item) {
    if (item != null){
      return(
        <div>
          <Card>
            <img alt={item.name} src={item.image}/>
            <CardBody style={{"text-align":"left"}}>
                <CardTitle><strong className='h5 text-nowrap' >{item.name}</strong></CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h5" ><b>${item.price}</b></CardSubtitle>
                <CardText>{item.description}</CardText>
              </CardBody>
          </Card>
          {/* <ItemDetail item = {item}/> */}
        </div>
      );
    }else{
      return(
        <div></div>
      );
    }
  }

  render(){

    const itemslist = this.props.items.map((item)=>{
      return (
        <div key={item.id} className="col-4 col-md-3 mt-2">
          <Card onClick={() => this.onItemSelect(item)}>
            <img alt={item.name} src={item.image}/>
            <CardBody style={{"text-align":"left"}}>
              <CardTitle><strong className='h5 text-nowrap' >{item.name}</strong></CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h5" ><b>${item.price}</b></CardSubtitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    
    return(
      <div className="container">
        <div className="row">
          {itemslist}
        </div>
        <div className="row">
          {this.renderItem(this.state.selectedItem)}
        </div>
      </div>
    );
  }
}

export default ItemList;