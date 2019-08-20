import React,{Component} from 'react'
import {connect} from "react-redux"
import {changeValue} from "../../actions/counterActions"

class Counter extends Component {

    handleIncrement=()=>{
        const newCount = this.props.count + 1 ;
        this.props.changeValue(newCount);
    }
    handleDecrement=()=>{
        const newCount = this.props.count - 1 ;
        this.props.changeValue(newCount);
    }
 
 render(){
     return(
        <div>
            <h1>Counter</h1>
            <button onClick={this.handleIncrement}>+</button>
            <span>{this.props.count}</span>
            <button onClick={this.handleDecrement}>-</button>
        </div>
     )
 }

}
  
const mapStateToProps=({counter})=> {
 return   {
        count: counter.count
    
    }
}

  export default connect(mapStateToProps,{changeValue})(Counter)