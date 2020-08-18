import React, { Component } from 'react';
import Employee from "./components/employee"
import Form from "./components/form"
import Header from "./components/header"
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
	
		this.setState({
		  [name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		let findName= new Array(...employeeList)
		console.log(findName)
		let filtersReturnNewArrays= findName.filter(employee=>{
			return employee.name.includes(this.state.name)
		})

		//setState 
		this.setState({sorted:filtersReturnNewArrays})
		this.setState({name: ""});
	};

	sortName = ()=>{
		let unsorted = new Array(...employeeList)
		console.log(unsorted)
		let sortof= unsorted.sort((a,b)=>{
			return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
		})
		console.log(sortof)
		this.setState({sorted:sortof})
	};

	render(){
		return( 			
		<div>
			<div className="container">
				<Header />
				<Form name={this.state.name} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />  
				<br></br>
				<button className="sort" onClick={this.sortName}>Sort</button><span>  Click to sort alphabetically</span>
				<p></p>
				<Employee employeeList={this.state.sorted}/>
			</div>
		</div>
	);
}}

export default App;
