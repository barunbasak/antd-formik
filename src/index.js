import React from "react";
import { render } from "react-dom";
import BookingForm from "./containers/BookingForm/BookingForm";
import "antd/dist/antd.css";
import "./styles.css";

render(
  <div className="container">
    <h1>Booking Form</h1>
    <BookingForm />
  </div>,
  document.getElementById("root")
);
