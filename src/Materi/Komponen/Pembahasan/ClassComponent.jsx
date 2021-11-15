import React from "react";

const green = '#39D1B4';
const yellow = '#FFD712';
class ClassComponent extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            color: green
        }
        this.changeColor= this.changeColor.bind(this)
    }
        changeColor() {
            //const newColor = this.changeColor = green ? yellow : green;
            this.setState({color : this.state.color ===  green ? yellow : green})
        }
    
    render(){
        return(
        <div style={{background: this.state.color}}>
      <h1>Ubah warna</h1>
      <button onClick={this.changeColor}>Click</button>
      </div>
        )
    }
}
export default ClassComponent