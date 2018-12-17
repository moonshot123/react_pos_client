import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageMain from './manage/ManageMain';
import OrderMain from './order/OrderMain';
import SaleMain from './sale/SaleMain';
import NoMatch from './NoMatch'

class Main extends React.Component{
    render(){
        return(
            <Router>
            <div className="App">
              main  
            <div>
              <Switch>
                <Route path="/manage" component={ManageMain}/>
                <Route path="/order" component={OrderMain}/>
                <Route path="/sale" component={SaleMain}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
            </div>
            </Router>
        )
    }
}

export default Main