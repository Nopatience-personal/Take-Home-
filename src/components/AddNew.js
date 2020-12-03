import React, {Component} from 'react';
import axios from 'axios';
import {A} from '../storage.js';
import './AddNew.css';

class AddNew extends Component {
constructor(props){
  super(props);
  this.state={
    fname: '',
    lname: '',
    hire: '',
    role: 'ceo',
    joke: '',
    quote: ''
  };
}

componentDidMount(){
  const url2 = "https://quotes.rest/qod";
  axios({ method: 'get', url: `${url2}` })
    .then(response =>{
      var quoteRes = JSON.stringify(response.data.contents.quotes.[0].quote);
      this.setState({
        quote: quoteRes
      })
    });

    const url1 = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    axios({ method: 'get', url: `${url1}` })
      .then(response =>{
        var jokeRes = JSON.stringify(response.data.[0]);
        this.setState({
          joke: jokeRes
        })
      });


}



handleChange({ target }) {
  this.setState({
    [target.name]: target.value,
  })
}

handleSubmit(event){
  event.preventDefault();
  const newEmp = [];
  const { v4: uuidv4 } = require('uuid');
  var id = uuidv4();
  newEmp.push(id);
  const firstName = this.state.fname;
  newEmp.push(firstName);
  const lastName = this.state.lname;
  newEmp.push(lastName);
  const hireDate = this.state.hire;
  newEmp.push(hireDate);
  const position = this.state.role;
  newEmp.push(position);
  const joke1 = this.state.joke;
  newEmp.push(joke1);
  const quote1 = this.state.quote;
  newEmp.push(quote1);
  console.log(newEmp);
  A(newEmp);


  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'

  }
  const postUrl = 'http://localhost:3001/api/employees';
  axios({
    method: 'post',
    url: postUrl,
    data: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      hireDate: hireDate,
      role: position,
      joke: joke1,
      quote: quote1
    },
    headers: headers
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.request);
    console.log(error);
  });


}

render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
       <label htmlFor="fname"> First Name: </label>
       <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange.bind(this)} />
       <br />
       <label htmlFor="lname"> Last Name: </label>
       <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange.bind(this)}/>
       <br />
       <label htmlFor="hire"> Hire Date: </label>
       <input type="date" name="hire" value={this.state.hire} onChange={this.handleChange.bind(this)}/>
       <br />
       <label htmlFor="role"> Role: </label>
       <select name="role" value={this.state.role} onChange={this.handleChange.bind(this)}>
         <option value="ceo">CEO</option>
         <option value="vp">VP</option>
         <option value="manager">Manager</option>
         <option value="lackey">Lackey</option>
       </select>
       <br />
      <button> Submit </button>
     </form>
    );
  }
}

export default AddNew
