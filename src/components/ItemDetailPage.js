import React from "react";
import { Card , CardBody , CardTitle , CardSubtitle , CardText} from "reactstrap";

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(){
    if(this.props.item != null){
      return(
        <div className="row mt-5">
          <div key={this.props.item.id} className="col-12 col-md-4 mt-2">
            <Card>
              <img alt={this.props.item.name} src={this.props.item.image}/>
            </Card>
          </div>
          <div className="col-12 col-md-6 mt-4 m-2" style={{"text-align":"left"}} >
            <div className="row">
              <strong className="h3">{this.props.item.name}</strong>
            </div>
            <div className="row align-items-end">
              <strong className="h1 col-2 mb-1">${this.props.item.price}</strong>
              <del className="h4 col-2 mx-2 mb-2 text-muted">$10</del>
            </div>
            <div className="row mt-4">
              <span className="">{this.props.item.description}</span>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div></div>
      );
    }
  }
}

export default ItemDetail;