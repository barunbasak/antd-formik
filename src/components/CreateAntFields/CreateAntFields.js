import React from "react";
import {
  DatePicker,
  Form,
  Input,
  TimePicker,
  Select,
  InputNumber,
  Radio,
  Checkbox
} from "antd";

const FormItem = Form.Item;
const { Option } = Select;

const getOnChange = (fieldType, form, field, e) => {
  switch (fieldType) {
    case "TEXT":
    case "RADIO":
      form.setFieldValue(field.name, e.target.value);
      break;

    case "CHK":
      form.setFieldValue(field.name, e.target.checked);
      break;

    default:
      form.setFieldValue(field.name, e);
      break;
  }
};

const CreateAntField = (AntComponent, fieldType) => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  radioOptions,
  submitCount,
  type,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;

  const onBlur = () => form.setFieldTouched(field.name, true);

  return (
    <div className="field-container">
      <FormItem
        label={label}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <AntComponent
          {...field}
          {...props}
          onBlur={onBlur}
          // onChange={
          //   type === "CHK" ? onCheckChange : type ? onInputChange : onChange
          // }
          onChange={e => getOnChange(fieldType, form, field, e)}
          options={radioOptions}
        >
          {selectOptions &&
            selectOptions.map(name => <Option key={name}>{name}</Option>)}
        </AntComponent>
      </FormItem>
    </div>
  );
};

export const AntSelect = CreateAntField(Select, "");
export const AntDatePicker = CreateAntField(DatePicker, "");
export const AntInput = CreateAntField(Input, "TEXT");
export const AntTimePicker = CreateAntField(TimePicker, "");
export const AntInputNumber = CreateAntField(InputNumber, "");
export const AntRadioGroup = CreateAntField(Radio.Group, "RADIO");
export const AntCheckbox = CreateAntField(Checkbox, "CHK");
export const AntCheckboxGroup = CreateAntField(Checkbox.Group, "");
