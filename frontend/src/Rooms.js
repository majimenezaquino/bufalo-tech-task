import React from 'react';

import axios from 'axios';

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
      <div>
        { 
        this.state.persons.map((value,i)=> {
          for(let index in value){
           console.log("is",value[index])
            return <div key={parseInt(index+i)} className="room">{value[index]}</div>
          }
        })}
      </div>
    )
  }
}