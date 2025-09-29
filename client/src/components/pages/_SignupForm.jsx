import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { volunteerForTask } from "../../api";

const SignupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().max(300, "Max 300 characters"),
});

export default function SignupForm({ taskId = null, currentUser, onDone = () => {} }) {
  if (!currentUser) {
    return <div>Please log in to volunteer for tasks.</div>;
  }

  return (
    <Formik
      initialValues={{ message: "" }}
      validationSchema={Yup.object({
        message: Yup.string().max(300, "Max 300 characters"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await volunteerForTask(taskId, currentUser.id, values.message);
          setSubmitting(false);
          resetForm();
          onDone();
          alert("Successfully volunteered for the task!");
        } catch (error) {
          setSubmitting(false);
          alert(error.message);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-card">
          <p><strong>Name:</strong> {currentUser.name}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>

          <label>Short message (optional)</label>
          <Field as="textarea" name="message" rows="3" placeholder="Why are you interested?" />
          <ErrorMessage name="message" component="div" className="error" />

          <div style={{ marginTop: 10 }}>
            <button className="btn primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Volunteering..." : "Volunteer"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
