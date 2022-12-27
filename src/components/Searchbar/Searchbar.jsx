// import  React  from "react";
import { Formik, Form, Field } from "formik";


export const Searchbar = ({ onSubmit }) => {
  
  const handleSubmit = (values, actions) => {
    onSubmit(values)
    actions.resetForm();

  }
  return <Formik
    initialValues={{ imagesSearch: '' }}
    onSubmit={handleSubmit}
  >
    <Form>
      <button type="submit" className="button">
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
</Formik>
};