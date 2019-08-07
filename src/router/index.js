import React,{Component} from 'react'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import First from '../components/first'
import Second from '../components/second'
class RouterIndex extends Component{
    render(){
        return (
            <Router>
                <div>
                   <ul>
                      <Link to="/first">路由1</Link>
                      <Link to="/second">路由2</Link>
                   </ul>
                   <Route path="/first" component={First}/>
                   <Route path="/second" component={Second}/>
                </div>
            </Router>
       )
    }
}
export default RouterIndex;