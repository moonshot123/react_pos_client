import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './components/Main'
import NoMatch from './components/NoMatch'
import ManageMain from './components/manage/ManageMain';
import OrderMain from './components/order/OrderMain';
import SaleMain from './components/sale/SaleMain';

class App extends Component {
  render() {
    return (
    <div className="col-md-10">
    <Router>         
      <div className="MainRouter">  
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/manage" component={ManageMain}/>
          <Route path="/order" component={OrderMain}/>
          <Route path="/sale" component={SaleMain}/>           
          <Route component={NoMatch}/>
      </Switch>
      <button type="button" className="btn btn-primary">test</button>
      <Link to="/manage"><button type="button" className="btn btn-primary">관리하기</button></Link>
      <Link to="/order"><button type="button" className="btn btn-primary">주문하기</button></Link>
      <Link to="/sale"><button type="button" className="btn btn-primary">판매정보</button></Link>
      </div>
      
  </Router>
  </div>
    );
  }
}


export default App;
