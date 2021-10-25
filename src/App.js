import React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

function App() {
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
  }

  return (
    <Container fluid className="container">
      <Header as='h2'>Google Sheets Form</Header>
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
    </Container>
  )
}

export default App;
