import React from "react";

import "../styles/Registration.css";

const Registration = () => {
  return (
    <div className='registration'>
      <div>
        <h1>Registration</h1>
        <table>
          <tr>
            <th>Category</th>
            <th>Indian Delegates</th>
            <th>Foreign Delegates</th>
          </tr>
          <tr>
            <td>Student(IEEE)</td>
            <td>3900 INR</td>
            <td>150 USD</td>
          </tr>
          <tr>
            <td>Student(Non-IEEE)</td>
            <td>4900 INR</td>
            <td>200 USD</td>
          </tr>
          <tr>
            <td>Faculty</td>
            <td>6900 INR</td>
            <td>250 USD</td>
          </tr>
          <tr>
            <td>Industrty</td>
            <td>7900 INR</td>
            <td>300 USD</td>
          </tr>
        </table>
      </div>
      <div>
        <h1>Payment Detail</h1>
      </div>
      <table>
        <tr>
          <th>Account Name</th>
          <th>ICICAT-2023 (Buddha Institute of Technology, Gorakhpur)</th>
        </tr>
        <tr>
          <td>Account Number</td>
          <td>182010100105667</td>
        </tr>
        <tr>
          <td>Bank Name</td>
          <td>Union Bank of India</td>
        </tr>
        <tr>
          <td>Branch</td>
          <td>Sahjanwa, Gorakhpur</td>
        </tr>
        <tr>
          <td>InIFSC Codeustry</td>
          <td>UBIN0818208</td>
        </tr>
      </table>
    </div>
  );
};

export default Registration;
