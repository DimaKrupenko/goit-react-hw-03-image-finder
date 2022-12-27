// import  React  from "react";
import { Formik, Form, Field } from "formik";


export const Searchbar = ({ onSubmit,  }) => {
  
  const handleSubmit = (values, actions) => {
    onSubmit(values).then(() => actions.setSubmitting(false))
    actions.resetForm();

  }
  return <Formik
    initialValues={{ imagesSearch: '' }}
    onSubmit={handleSubmit}
  >
    {props => {
      return (
         <Form>
      <button type="submit" className="button" disabled={props.isSubmitting}>
       <span className="button-label">Search</span>
     </button>
      <Field
        name='imagesSearch'
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        /* value={this.state.imagesSearch}
        onChange={this.handleChange} */

      >
      </Field>
  </Form>
      )
   }}
</Formik>
};