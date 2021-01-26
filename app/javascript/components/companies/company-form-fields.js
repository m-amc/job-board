import React from 'react';
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

export const CompanyFormFields = () => (
  <>
    <FormField
      fieldType={FIELD_TYPE.input}
      name="name"
      id="name"
      label="Name"
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
      name="country_code"
      id="country_code"
      label="Country"
      options={countryOptions}
    />

    <FormField
      fieldType={FIELD_TYPE.input}
      name="contact_number"
      id="contact_number"
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
  </>
)

export const CompanySignUpFormFields = () => (
  <>
    <CompanyFormFields />
    <FormField
      fieldType={FIELD_TYPE.input}
      type="password"
      name="password"
      id="password"
      label="Password"
    />
  </>
)

export const CompanyLoginFormFields = () => (
  <>
    <FormField
      fieldType={FIELD_TYPE.input}
      type="email"
      name="email"
      id="email"
      label="Email"
    />
    <FormField
      fieldType={FIELD_TYPE.input}
      type="password"
      name="password"
      id="password"
      label="Password"
    />
  </>
)