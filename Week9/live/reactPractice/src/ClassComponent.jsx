import React, { Component } from 'react'

export class ClassComponent extends Component {
   state = { count: 0 } 

   increment = () => {
      this.setState({ count: this.state.count + 1})
   }

   render = () => {
      return (
         <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
         </div>
      )
   }
}