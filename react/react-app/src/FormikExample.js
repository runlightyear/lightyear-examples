import { useState } from "react";
import { Formik, Field, Form } from "formik";

export function FormikExample() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h1>Formik Example</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={async (values) => {
          const { url, firstName, lastName } = values;

          await fetch(url, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({ firstName, lastName }),
          });

          setSubmitted(true);
        }}
      >
        <Form>
          <div className={"form-field"}>
            <label htmlFor="url">
              Endpoint URL for the Receive Form Submission webhook
            </label>
            <Field
              id="url"
              name="url"
              placeholder="https://app.runlightyear.com/api/v1/endpoints/..."
            />
          </div>

          <div className={"form-field"}>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
          </div>

          <div className={"form-field"}>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />
          </div>

          <button type="submit" disabled={submitted}>
            {submitted ? "Submitted" : "Submit"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
