import React from "react";
import { Card , CardImg , CardImgOverlay , CardTitle } from "reactstrap";

class ItemList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render(){

    const itemslist = this.props.items.map((item)=>{
      return (
        <div key={item.id} className="col-6 col-md-3">
          <Card tag='li' className="row">
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
              <CardTitle heading>{item.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    
    return(
      <div className="container">
        <div className="row">
          {itemslist}
        </div>
      </div>
    );
  }
}

export default ItemList;