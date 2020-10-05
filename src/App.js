import React, { Component } from 'react';
import Footer from './components/FooterComponent';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Header from './components/HeaderComponent';
import { Switch, Route, Link, Redirect, BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Fade, Stagger } from 'react-animation-components';
import './App.css';


const LEEDDATA = [
  {
    id: 0,
    category: "Integrative Process",
    credit: "Integrative Process",
    options: [
      {
        name: "Avoidance of Sensitive land",
        requirements: ["Don't build on prime farmland.", "Don't build on habitat for endangered species.", " Don't build near wetlands."] 
      },
      {
        name: "Floodzone Area",
        requirements: ["Don't build in a Flood Hazard Area", "Build in accordance with local flood provisions"]
      }
    ],
    image: <img src="/assets/images/IP_color.png" />
  },
  {
    id: 1,
    category: "Location and Transportation",
    credit: "Site Selection",
    options: [
      {
        name: "Avoidance of Sensitive land",
        requirements: ["Don't build on prime farmland.", "Don't build on habitat for endangered species.", " Don't build near wetlands."] 
      },
      {
        name: "Floodzone Area",
        requirements: ["Don't build in a Flood Hazard Area", "Build in accordance with local flood provisions"]
      }
    ],
    image: <img src="/assets/images/LT_color.png" />,
  },
  {
    id: 2,
    category: "Sustainable Sites",
    credit: "Heat Island Reduction",
    options: [
      {
        name: "Avoidance of Sensitive land",
        requirements: ["Don't build on prime farmland.", "Don't build on habitat for endangered species.", " Don't build near wetlands."] 
      },
      {
        name: "Floodzone Area",
        requirements: ["Don't build in a Flood Hazard Area", "Build in accordance with local flood provisions"]
      }
    ],
    image: <img src="/assets/images/SS_color.png" />
  },
  {
    id: 3,
    category: "Water Efficiency",
    credit: "Outdoor Water Use",
    options: [
      {
        name: "Avoidance of Sensitive land",
        requirements: ["Don't build on prime farmland.", "Don't build on habitat for endangered species.", " Don't build near wetlands."] 
      },
      {
        name: "Floodzone Area",
        requirements: ["Don't build in a Flood Hazard Area", "Build in accordance with local flood provisions"]
      }
    ],
    image: <img src="/assets/images/WE_color.png"/>
  },

];

function Categories(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <h1>LEED Credit Categories</h1>
            <Card>
              {props.leedData.map(leed => (
                <CardBody key={leed.id}>
                  <Link to={`/leed/${leed.id}`} >
                    <CardTitle>
                      {leed.image}
                    </CardTitle>
                    <CardText>
                      {leed.category}
                    </CardText>
                  </Link>
                </CardBody>
              ))}
            </Card>
          </div>
        </div>
    </div>
  );
}


function MyNav() {
  return (
    <div>
      <Link to='/leed'>LEED Credit Category</Link>
    </div>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leedData: LEEDDATA
    };
  };

  render() {
    const CategoryInfo = ({match}) => {
      const leed = this.state.leedData.filter(leed => leed.id === +match.params.leedId)[0];
      return (
        <Stagger in>
          <Fade>
            <div className="container">
              <div className="row">
                <div className="col-md m-1">
                  <strong>Leed Credit:</strong>  {leed.credit} <br/> <strong>Credit Option:</strong> {leed.options.name} <br/> <strong>Requirement:</strong> {leed.options.requirements}
                </div>
              </div>
            </div>
          </Fade>
        </Stagger>
      );
    };

    return (
      <Switch>
        <Route path='/leed/:leedId' component={CategoryInfo}/>
        <Route exact path='/leed' render={() => <Categories leedData={this.state.leedData} />} />
      </Switch>
    )
  }

}


function App() {
  return (
    <div>
      <Header />
      <MyNav />
        <br />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;