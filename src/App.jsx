import './App.css';
import { Container } from '@mui/material';
import { ProjectContainer } from './components/containers';

function App() {
  return (
    <Container maxWidth='lg' sx={{ py: 5 }}>
      <ProjectContainer />
    </Container>
  );
}

export default App;
