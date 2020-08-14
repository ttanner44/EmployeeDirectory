import React from "react";
import "./style.css";

function Form (props) {
    return (
      <div>
       <h2>Employee Directory</h1>
       {/* <h3>Click</h3>         */}
       <div>
        <form>          
          <input
            value={props.name}
            name="name"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Filter by letter(s)"
          />
         <br></br>
          <button onClick={props.handleFormSubmit}>Submit</button>
        </form>
        </div>
      </div>
    );
}

export default Form;