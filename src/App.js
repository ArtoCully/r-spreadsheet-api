import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import UserForm from './components/User/UserForm';
import './App.css';

function App() {
  return (
    <Container fluid className="container">
      <Header as='h2'>Google Sheets Form</Header>
      <UserForm />
    </Container>
  )
}

export default App;
