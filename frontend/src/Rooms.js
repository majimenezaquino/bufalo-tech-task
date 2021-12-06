import React from 'react';

import axios from 'axios';
let setColor =(value)=>{
  console.log("color",value)
  if(value=='*') return {backgroundColor:'#ff0'}
  if(value=='1') return {backgroundColor:'#000'}
  if(value=='0') return {backgroundColor:'#ffa'}
}
const LineComponet =({arr,index}) =>{
  return ( <div className="line" key={index} >
          { arr.map((item,key)=>  <div key={item} className="room" style={setColor(item)}>{item}</div>)}
        </div> )
    
  
}
export default class Rooms extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/datates`)
      .then(res => {
        const persons = res.data;
        console.log(res.data)
        this.setState({ persons });
      })
  }

  render() {
    return (
      <>
        { this.state.persons.map((record,index)=>  <LineComponet arr = {record} key={index} />)}
      </>
    )
  }
}

