import React from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'

function UserForm() {
  const [formState, setFormState] = React.useState({
    name: '',
    age: '',
    salary: '',
    hobby: '',
  });

  const changeHandler = (e) => {
    console.log('e.target.name', e.target.name);
    console.log('e.target.value', e.target.value);
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
    // TODO: Update this to trigger straight to google sheets
    const url = `https://sheet.best/api/sheets/${process.env.REACT_APP_GOOGLE_SHEET}`;
    axios.post(url, formState)
      .then((response) => {
        console.log('Success posting', response);
      })
      .catch((error) => {
        console.log('Error posting', error);
      });
  }

  return (
    <Form className="form" onSubmit={submitHandler}>
      <Form.Field>
        <label>Name</label>
        <input
          type="text"
          placeholder='Enter your name'
          name="name"
          value={formState.name}
          onChange={changeHandler} />
      </Form.Field>
      <Form.Field>
        <label>Age</label>
        <input
          type="number"
          placeholder='Enter your age'
          name="age"
          value={formState.age}
          onChange={changeHandler} />
      </Form.Field>
      <Form.Field>
        <label>Salary</label>
        <input
          type="number"
          placeholder='Enter your salary'
          name="salary"
          value={formState.salary}
          onChange={changeHandler} />
      </Form.Field>
      <Form.Field>
        <label>Hobby</label>
        <input
          type="text"
          placeholder='Enter your hobby'
          name="hobby"
          value={formState.hobby}
          onChange={changeHandler} />
      </Form.Field>

      <Button color="blue" type='submit'>Submit</Button>
    </Form>
  )
}

export default UserForm;
