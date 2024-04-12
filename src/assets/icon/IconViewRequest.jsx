import React, { useState, useEffect, useReducer, Fragment } from "react";
// import parse from 'html-react-parser';
// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.css';
// // import 'bootstrap-icons/font/bootstrap-icons.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import styles from './IconViewRequest.module.css'; // Import css modules stylesheet as styles

const IconViewRequest = ({ width, height, color, opacity, className }) => {
  // console.log(title)
  // console.log(color);
  // console.log(className);
  const [fillColor, setfillColor] = useState("#0b7c84");

  React.useEffect(() => {}, []);
  return (
    <Fragment>
      <svg
        id="Group_4033"
        data-name="Group 4033"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="16"
        viewBox="0 0 14 16"
        onMouseOver={(e) => {
          console.log("oveeeer");
          setfillColor("#000000");
        }}
        onMouseOut={(e) => {
          console.log("outttt");
          setfillColor("#0b7c84");
        }}
      >
        <g id="Group_4030" data-name="Group 4030" clipPath="url(#clip-path)">
          <path
            id="Path_3796"
            data-name="Path 3796"
            d="M12.665,0H9.034l0,.021A2.028,2.028,0,0,1,8.43,1.467a2.03,2.03,0,0,1-2.86,0A2.031,2.031,0,0,1,4.965.021l0-.021H1.335A1.335,1.335,0,0,0,0,1.335V6.378a.734.734,0,0,0,1.467.005V1.467H3.818A3.5,3.5,0,0,0,7,3.523a3.5,3.5,0,0,0,3.182-2.056h2.352V14.533H10.171a3.488,3.488,0,0,0-6.342,0H1.467V13.3L7.61,8.1v.967a.733.733,0,1,0,1.466,0V6.382a.733.733,0,0,0-.733-.733H5.658a.733.733,0,0,0,0,1.466h.8L.282,12.34a.725.725,0,0,0-.218.351c-.007.017-.009.035-.015.052a.776.776,0,0,0-.027.134.824.824,0,0,0-.022.11v1.678A1.335,1.335,0,0,0,1.335,16h3.63a2.036,2.036,0,0,1,4.071,0h3.629A1.335,1.335,0,0,0,14,14.665V1.335A1.335,1.335,0,0,0,12.665,0"
            // fill={`${fillColor}`}
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default IconViewRequest;
