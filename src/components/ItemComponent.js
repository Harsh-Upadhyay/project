import React from "react";
import { Card , CardImg , CardBody , CardTitle , CardSubtitle , CardText} from "reactstrap";

class ItemList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render(){

    const itemslist = this.props.items.map((item)=>{
      return (
        <div key={item.id} className="col-4 col-md-3 mt-2">
          <Card>
            <img
              alt={item.name}
              src={item.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                {item.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
              ${item.price}
              </CardSubtitle>
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
      </div>
    );
  }
}

export default ItemList;