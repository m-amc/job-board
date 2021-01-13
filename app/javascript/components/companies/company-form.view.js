import React from 'react';
import {
  Form,
} from 'formik';
import {
  FormField,
  FIELD_TYPE
} from '../common/form-fields/form-field';

// Temporary: state and country data will be moved to the backend
const stateOptions = [
  { name: 'Select State or Province', value: '' },
  { name: 'Ontario', value: 'ON' },
  { name: 'British Columbia', value: 'BC' }
]

const countryOptions = [
  { name: 'Select Country', value: '' },
  { name: 'Canada', value: 'CA' },
  { name: 'USA', value: 'US' }
]

export const CompanyForm = () => (
  <Form>
    <FormField
      fieldType={FIELD_TYPE.input}
      name="name"
      id="name"
      label="Name"
      disabled
    />

    <FormField
      fieldType={FIELD_TYPE.input}
      name="address"
      id="address"
      label="Address"
    />

    <FormField
      fieldType={FIELD_TYPE.input}
      name="city"
      id="city"
      label="City"
    />

    <FormField
      fieldType={FIELD_TYPE.select}
      name="state"
      id="state"
      label="State"
      options={stateOptions}
    />

    <FormField
      fieldType={FIELD_TYPE.select}
      name="country"
      id="country"
      label="Country"
      options={countryOptions}
    />

    <FormField
      fieldType={FIELD_TYPE.input}
      name="phone"
      id="phone"
      label="Phone"
    />

    <FormField
      fieldType={FIELD_TYPE.input}
      type="email"
      name="email"
      id="email"
      label="Email"
    />

    <FormField
      fieldType={FIELD_TYPE.input}
      name="website"
      id="website"
      label="Website"
    />

    <FormField
      fieldType={FIELD_TYPE.textArea}
      name="about"
      id="about"
      label="About"
      rows="10"
      cols="50"
    />

    <button type="submit">Update</button>
  </Form>
)