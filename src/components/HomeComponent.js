import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.credit} />
            <CardBody>
                <CardTitle>{item.credit}</CardTitle>
                <CardText>{item.option}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.category} />
                </div>
            </div>
        </div>
    );
}



export default Home;