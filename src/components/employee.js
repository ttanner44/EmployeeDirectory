import React from "react";
import "./style.css";

function employee (props) {
  return (
    <div>
      <table class="table table-boarderless">
        {props.employeeList.length ? (
          <tbody>
            {props.employeeList.map(result => (
              <tr key={result.id}>
                <th scope="row"></th>
                <th><img src={result.image} className="img-responsive img-fluid" alt="headshot"></img></th>
                <th> {result.name} </th>
                <th> Occupation: {result.occupation} </th>             
                <th> Location: {result.location} </th>
                <th> email: {result.email} </th>
              </tr>
            ))}
          </tbody >
        ) : (
            <h3>No Matches</h3>
          )}
      </table>
    </div>
  )
}

export default employee;