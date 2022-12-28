// import  React  from "react";
import { Formik, Form, Field } from "formik";
import Styles from './Searchbar.module.css'


export const Searchbar = ({ onSubmit,  }) => {
  
  const handleSubmit = (values, actions) => {
    onSubmit(values).then(() => actions.setSubmitting(false))
    actions.resetForm();

  }
  return <div className={Styles.Searchbar}><Formik
    
    initialValues={{ imagesSearch: '' }}
    onSubmit={handleSubmit}
  >
    {props => {
      return (
         <Form className={Styles.SearchForm}>
          <button type="submit" className={Styles.SearchFormButton} disabled={props.isSubmitting}>
       <span className={Styles.SearchFormButtonLabel}>Search</span>
     </button>
      <Field
        name='imagesSearch'
        className={Styles.SearchFormInput}
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
</Formik></div>
};