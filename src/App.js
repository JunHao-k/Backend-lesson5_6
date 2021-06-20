import React from 'react'
import axios from 'axios'

export default class App extends React.Component{
  state = {
    name: "",
    ticker: "",
    price: 0
  }
  
  //Shortcut: [event.target.name] refers to the name parameter in the <input type = 'text' name = 'ticker' .....
  //This allows us to target each form field using one function instead of creating 4 setstates for each form field
  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addStock = async () => {
    let res = await axios.post('http://localhost:8888/stocks' , {
      "name": this.state.name,
      "ticker": this.state.ticker,
      "price": this.state.price
    })
    console.log(res.data)
  }

  render(){
    return(
      <div className = 'App'>
        <div>
          <label>Name</label>
          <input type = 'text' name = 'name' value = {this.state.name} onChange = {this.updateFormField}/>
        </div>
        <div>
          <label>Ticker</label>
          <input type = 'text' name = 'ticker' value = {this.state.ticker} onChange = {this.updateFormField}/>
        </div>
        <div>
          <label>Price</label>
          <input type = 'text' name = 'price' value = {this.state.price} onChange = {this.updateFormField}/>
        </div>
        <button onCLick = {this.addStock}>Submit</button>
      </div>
    )
  }
}

