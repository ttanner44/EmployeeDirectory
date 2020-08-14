import React from "react";
import "./style.css";

function employee (props) {
  return (
    <div>
      {props.employeeList.length ? (
        <ul>
          {props.employeeList.map(result => (
            <li key={result.id}>
              <div> {result.image} </div>
              <div> {result.name} </div>
              <div> Occupation: {result.occupation} </div>             
              <div> Location: {result.location} </div>
              <div> email: {result.email} </div>
            </li>
          ))}
        </ul >
      ) : (
          <h3>No Matches</h3>
        )}
    </div>
  )
}

export default employee;