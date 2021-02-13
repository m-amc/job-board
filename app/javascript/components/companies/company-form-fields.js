import React from 'react';
import {
  FormField,
  FIELD_TYPE
} from '../common/form-fields/form-field';
import { COUNTRY_OPTIONS, STATE_OPTIONS} from '../constants'

export const CompanyFormFields = ({isSignUp}) => (
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
      options={STATE_OPTIONS}
    />

    <FormField
      fieldType={FIELD_TYPE.select}
      name="country_code"
      id="country_code"
      label="Country"
      options={COUNTRY_OPTIONS}
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

    {
      !isSignUp && (
        <>
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
            cols="30"
          />
        </>
      )
    }
  </>
)

export const CompanySignUpFormFields = () => (
  <>
    <CompanyFormFields isSignUp/>
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
      label="Email Address"
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