import React, { PureComponent } from "react";
import { Formik } from "formik";
import DisplayBookingForm from "../../components/DisplayBookingForm/DisplayBookingForm";
import {
  dateFormat,
  timeFormat
} from "../../components/FieldFormats/FieldFormats";
import moment from "moment";

const initialValues = {
  bookingClient: "",
  bookingDate: moment(Date.now()),
  bookingTime: moment(Date.now()),
  selectOptions: ["Mark", "Bob", "Anthony"],
  bookingClientCount: 10,
  bookingCheck: true,
  chkList: ["Apple", "Orange"]
};

export default class BookingForm extends PureComponent {
  handleSubmit = formProps => {
    const {
      bookingClient,
      bookingDate,
      bookingTime,
      email,
      bookingClientCount,
      bookingClientRadio,
      bookingCheck,
      chkList
    } = formProps;
    const selectedDate = moment(bookingDate).format(dateFormat);
    const selectedTime = moment(bookingTime).format(timeFormat);
    alert(
      `Email: ${email} \n
      Selected Date: ${selectedDate} \n
      Selected Time: ${selectedTime}\n
      Selected Client: ${bookingClient}\n
      bookingClientCount: ${bookingClientCount}\n
      bookingClientRadio: ${bookingClientRadio}\n
      bookingCheck: ${bookingCheck}\n
      chkList: ${chkList}`
    );
  };

  render = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      render={DisplayBookingForm}
    />
  );
}
