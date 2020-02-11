import React from "react";
import { Form, Field } from "formik";
import {
  AntDatePicker,
  AntInput,
  AntSelect,
  AntTimePicker,
  AntInputNumber,
  AntRadioGroup,
  AntCheckbox,
  AntCheckboxGroup
} from "../CreateAntFields/CreateAntFields";
import { dateFormat, timeFormat } from "../FieldFormats/FieldFormats";
import {
  validateDate,
  validateEmail,
  isRequired
} from "../ValidateFields/ValidateFields";

const radioOptions = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
  { label: "Banana", value: "Banana" }
];

const checkboxGroupOptions = ["Apple", "Pear", "Orange", "Banana"];

export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      name="email"
      type="email"
      label="Email"
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntDatePicker}
      name="bookingDate"
      label="Booking Date"
      defaultValue={values.bookingDate}
      format={dateFormat}
      validate={validateDate}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntTimePicker}
      name="bookingTime"
      label="Booking Time"
      defaultValue={values.bookingTime}
      format={timeFormat}
      hourStep={1}
      minuteStep={5}
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
      use12Hours
    />
    <Field
      component={AntSelect}
      name="bookingClient"
      label="Client"
      defaultValue={values.bookingClient}
      selectOptions={values.selectOptions}
      validate={isRequired}
      submitCount={submitCount}
      tokenSeparators={[","]}
      style={{ width: 200 }}
      hasFeedback
    />

    <Field
      component={AntInputNumber}
      name="bookingClientCount"
      label="Count"
      defaultValue={values.bookingClientCount}
      submitCount={submitCount}
      style={{ width: 200 }}
      hasFeedback
    />

    <Field
      component={AntRadioGroup}
      radioOptions={radioOptions}
      name="bookingClientRadio"
      label="Radio Options"
      defaultValue={values.bookingClientRadio}
      submitCount={submitCount}
      style={{ width: 200 }}
      hasFeedback
    />

    <Field
      component={AntCheckbox}
      name="bookingCheck"
      label="Is Ok"
      checked={values.bookingCheck}
      submitCount={submitCount}
      style={{ width: 200 }}
      hasFeedback
    />

    <Field
      component={AntCheckboxGroup}
      radioOptions={checkboxGroupOptions}
      name="chkList"
      label="Check Options"
      defaultValue={values.chkList}
      submitCount={submitCount}
      style={{ width: 200 }}
      hasFeedback
    />

    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit">
        Submit
      </button>
    </div>
  </Form>
);
