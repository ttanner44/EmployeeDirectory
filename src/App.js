import React, { Component } from 'react';
import Employee from "./components/employee"
import Form from "./components/form"
import employeeList from "./data/employeeList"

class App extends Component {
	state = {
		sorted: employeeList,
		name: ""
  }
  
	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		let value = event.target.value;
		const name = event.target.name;
	
		// Updating the input's state
		this.setState({
		  [name]: value
		});
	  };

	  handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
	
		// Using this.state; Make a if/else statement to do the following
		// If first or last name is empty alert the user that they are empty
		// Else if both have values alert the user to say "Hi firstName and lastName" 
		
		//sort a deep copy of the list
		//WRONG: this.state.property=value
		//RIGHT: this.setState({propert:value})
		let findName= new Array(...employeeList)
		console.log(findName)
		let filtersReturnNewArrays= findName.filter(employee=>{
			console.log(employee.name)
			console.log(this.state.name)
			console.log(employee.name.includes(this.state.name))
			return employee.name.includes(this.state.name)
		})
		console.log(filtersReturnNewArrays)
		//setState 
		this.setState({sorted:filtersReturnNewArrays})
		  
	
		this.setState({
		  name: ""
		});
	  };
	  sortName = ()=>{
		  let unsorted = new Array(...employeeList)
		  console.log(unsorted)
		  let sortof= unsorted.sort((a,b)=>{
			  console.log(a.name, b.name)
			  console.log(b.name - a.name)
			  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
			})
		  console.log(sortof)
		  this.setState({sorted:sortof})
	  }

	render(){
		return( 
			
		<div>
      <Form 
      name={this.state.name}
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
      />  
      
      <button className="sort" onClick={this.sortName}>Sort</button>
      
      <Employee employeeList={this.state.sorted}/>
		
		</div>
	)
}}

export default App;
