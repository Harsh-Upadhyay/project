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

  render(){

    const itemslist = this.props.items.map((item)=>{
      return (
        <div key={item.id} className="col-6 col-md-3 mt-2" >
          <Card onClick={() => this.onItemSelect(item)} style={{"text-align":"left"}}>
            <img alt={item.name} src={item.image}/>
            <CardBody>
              <CardTitle style={{"overflow":"hidden", "text-overflow":"ellipsis", "white-space":"nowrap"}}><strong className='h5'>{item.name}</strong></CardTitle>
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
        <ItemDetail item = {this.state.selectedItem}/>
      </div>
    );
  }
}

export default ItemList;