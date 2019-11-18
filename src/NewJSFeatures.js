import React, {Component} from "react" // {Component} here is a kind of destructuring

// class NewJSFeatures extends Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//     }
    
//     increment() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
       
//     decrement() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count - 1
//             }
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increment}>+</button>
//                 <button onClick={this.decrement}>-</button>
//             </div>    
//         )
//     }
// }

// or    

    class NewJSFeatures extends Component {
      // we have an ability to have class fields in our classes
      // all this really means is that we can do a variable like this.state
      // outside of a constructor now, especially if using arrow functions for methods, since 
      // we then wont need a constructor to bind methods
      // adding more things to state for the destructuring example at the end
      state = {
        count: 0,
        greeting: "Howdy",
        age: 42
      }

          // this.increment = this.increment.bind(this) // not need because of arrow function line 68
          // this.decrement = this.decrement.bind(this) // not need because of arrow function line 71
      
      
    // arrow function use a lexical this, which means it wont create it's own this context
    // which means it will automatically adopt the this from the class as it is found in
    // arrow functions also have an implicit return so you may not need to use "return" key word
    // if you start the return value on the same line as the arrow function begins, see example at bottom.
    // Things get tricky with an object because an object starts with a curly brace. A curly brace says it is
    // beginning the functions body, so make sure to surround object in another set of parenthesis () so that
    // it recognizes the object

    //compare with line 13
      increment = () => {
          this.setState(prevState => ({ count: prevState.count + 1 }))               
      }
         
      decrement = () => {
          this.setState(prevState => ({ count: prevState.count - 1 }))
      }
      
      render() {
        // destructuring
        // const then name of property 
        // I want the count property from this.state "const {count} = this.state" see age and greeting
        const { greeting, age } = this.state
        const { count: number } = this.state
        // so now on the <h1> below we can just use count instead of this.state.count
        // and if the component were receiving props we could do the exact same thing with props
        // if we have a state with multiple properties we can pull them out the same way see <h2>

          return (
              <div>
                  <h1>{number}</h1>
                  <button onClick={this.increment}>+</button>
                  <button onClick={this.decrement}>-</button>
                  <h2>{greeting} {age}</h2>                                 
              </div>    
          )
      }
  } 
  
  // see new code with out comments starting line 100

export default NewJSFeatures

// import React, {Component} from "react"

// class NewJSFeatures extends Component {
//     state = {
//         count: 0,
//         greeting: "Howdy",
//         age: 42
//     }
    
//     increment = () => {
//         this.setState(prevState => ({ count: prevState.count + 1}))
//     }
    
//     decrement = () => {
//         this.setState(prevState => ({ count: prevState.count - 1 }))
//     }
    
//     render() {
//         const {count: number, greeting, age} = this.state
//         return (
//             <div>
//                 <h1>{number}</h1>
//                  <button onClick={this.increment}>+</button>
//                  <button onClick={this.decrement}>-</button>
//                 <h2>{greeting} {age}</h2>         
//             </div>    
//         )
//     }
// }

// export default NewJSFeatures