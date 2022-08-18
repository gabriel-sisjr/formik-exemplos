import { FormikErrors, useFormik } from "formik";
import React from "react";

import { schemaExemploForm2 } from "./Validations/SchemaExemploForm2";

type TypeValue = object | FormikErrors<object>;

interface ValuesForm2Exemplo extends FormikErrors<TypeValue> {
  firstName: string;
  lastName: string;
  email: string;
}

const ExemploForm2: React.FC<ValuesForm2Exemplo> = (values) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: schemaExemploForm2,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExemploForm2;
