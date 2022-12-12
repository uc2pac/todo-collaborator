import React from 'react';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import Container from '@mui/material/Container';

import '@aws-amplify/ui-react/styles.css';

import Header from './components/Header';
import TodoList from './components/TodoList';

function App({ signOut, user }) {
  return (
    <>
      <Header signOut={signOut} />
      <Container>
        <Heading level={1}>Hello {user.username}</Heading>
        <TodoList user={user} />
      </Container>
    </>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);
