import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null
        };
    }

    onCategorySelect(category) {
        this.setState({selectedCategory: category});
    }

    renderSelectedCategory(category) {
        if (category) {
            return (
                <Card>
                    <CardImg top src={category.image} alt={category.credit} />
                    <CardBody>
                        <CardTitle>{category.credit}</CardTitle>
                        <CardText>
                            {category.option}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.category.map(category => {
            return (
                <div key={category.id} className="col-md-3 m-1">
                    <Card>
                        <Link to={`/directory/${category.id}`}>
                            <CardImg  src={category.image} alt={category.credit} />
                            <CardImgOverlay>
                                <CardTitle>{category.credit}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCategory(this.state.selectedCategory)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;