import React, {Component} from 'react';
//import axios from 'axios';
import {B} from '../storage.js';
import './AllEmployees.css';

class AllEmployees extends Component {
  constructor(props){
    super(props);
    this.state={
    employees:[
      {id: '', fname: '', lname: '', hire: '', role: 'ceo', joke: '', quote: ''}
    ]
    };

  }



componentDidMount(){
    /*const url = 'http://localhost:3001/api/employees';
        axios({ method: 'get', url: `${url}` })
          .then(response =>{
            var employee = JSON.stringify(response.data.newEmployee);
            console.log("From all emp"+JSON.stringify(response.data.newEmployee));
            this.setState({data: employee})
          });*/
          const employee = B();
          console.log("This is from component will mount " +employee);
          var empID = employee[6].split(":");
          var name1 = employee[0].split(":");
          var name2 = employee[2].split(":");
          var hd = employee[1].split(":");
          var r = employee[5].split(":");
          var j = employee[4].split(":");
          var q = employee[3].split(":");
          this.setState({
            employees: [
            {id: empID[1],
            fname: name1[1],
            lname: name2[1],
            hire: hd[1],
            role: r[1],
            joke: j[1],
            quote: q[1]}
          ]
          })
}

renderTableHeader() {
     let header = Object.keys(this.state.employees[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.employees.map((employee, index) => {
        const { id, fname, lname, hire, role, joke, quote } = employee //destructuring
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{fname}</td>
              <td>{lname}</td>
              <td>{hire}</td>
              <td>{role}</td>
              <td>{joke}</td>
              <td>{quote}</td>
           </tr>
        )
     })
  }

  render() {
       return (
          <div>
             <h1 id='title'>Employee Table</h1>
             <table id='employees'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }


export default AllEmployees
