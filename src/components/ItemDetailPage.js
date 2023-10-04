import React from "react";
import { Card , CardBody , CardTitle , CardSubtitle , CardText} from "reactstrap";

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(){
      return(
        <div>
          <Card>
            <img alt={this.props.item.name} src={this.props.item.image}/>
            <CardBody style={{"text-align":"left"}}>
                <CardTitle><strong className='h5 text-nowrap' >{this.props.item.name}</strong></CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h5" ><b>${this.props.item.price}</b></CardSubtitle>
                <CardText>{this.props.item.description}</CardText>
              </CardBody>
          </Card>
        </div>
      );
  }
}

export default ItemDetail;