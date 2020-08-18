import React from "react";
import "./style.css";

function Form (props) {
    return (
      <div className="container">
        <form>          
          <input value={props.name} name="name" onChange={props.handleInputChange} type="text" placeholder="Filter by letter(s)"/>
          <button onClick={props.handleFormSubmit}>Submit</button>
        </form>
    </div>
    );
}

export default Form;