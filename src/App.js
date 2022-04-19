import './App.css';
import { Container, ListGroup, Badge, Form, Button, Offcanvas, Row, Col } from 'react-bootstrap';
import { BsList } from "react-icons/bs";
import React, { useState } from 'react';

const stockList = [
  {
    stockSymbol: 'PRVU',
    stockName: 'Prabhu Bank',
    price: '300',
    differenceFromYesterday: '1',
    closingLTP: '301',
    isUp: false
  },
  {
    stockSymbol: 'PRVU',
    stockName: 'Prabhu Banker',
    price: '315',
    differenceFromYesterday: '10',
    closingLTP: '305',
    isUp: true
  }
]
function getTodayDate() {
  const today = new Date();
  return today.toDateString();
}
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="app">
      <Container fluid className="p-4">
        <Row>
          <Col md={2}>
            <Button variant="primary" onClick={handleShow} className="d-none d-sm-block d-md-none">
              <BsList />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                sidebar
              </Offcanvas.Body>
            </Offcanvas>
            sidebar
          </Col>
          <Col>
            <h2>Stocks</h2>
            <h6>{ getTodayDate() }</h6>
            <Form.Control type="text" placeholder="Search" />
            <ListGroup variant="flush" className="pt-4 pb-4">
              {
                stockList.map(stock => (
                  <ListGroup.Item key={stock.stockName}
                    className="border-top pt-3 pb-3 d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{stock.stockSymbol}</div>
                        {stock.stockName}
                      </div>
                      <div className="ms-2">
                        <div className="fw-bold">{stock.price}</div>
                        <Badge bg={stock.isUp ? 'success' : stock.isUp == null ? 'info' : 'danger'}>
                          {`${stock.isUp ? '+' : '-'} ${stock.differenceFromYesterday}`}
                        </Badge>
                      </div>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
        </Row>
        
        
      </Container>
    </div>
  );
}

export default App;
