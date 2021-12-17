import './App.css';
import { Container, Spinner, Table } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <p>Stocks</p>
        <Spinner animation="border" variant="info" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Table striped bordered={false}></Table>
      </Container>
    </div>
  );
}

export default App;
