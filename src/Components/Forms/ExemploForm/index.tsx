import { Field, Form, Formik, FormikErrors } from "formik";
import React from "react";

import { schemaExemploForm } from "./Validations/SchemaExemploForm";

type TypeValue = object | FormikErrors<object>;

interface ValuesFormExemplo extends FormikErrors<TypeValue> {
  firstName: string;
  lastName: string;
  email: string;
}

const ExemploForm: React.FC<ValuesFormExemplo> = (initialValue) => {
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={schemaExemploForm}
        onSubmit={(values: ValuesFormExemplo) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstName">First Name: </label>
            <Field id="firstName" name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name: </label>
            <Field id="lastName" name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label htmlFor="email">Email: </label>
            <Field id="email" name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExemploForm;
