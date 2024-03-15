import './Header.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Components/Assets/logo.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import TopPart from '../TopPart/TopPart';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Header = () => {

  const [show, setShow] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Navbar expand="lg" className="header-part border-bottom border-4 border-primary">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/"><img src={Logo} alt="" className='header-logo' /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-list me-auto">
              <Nav.Link >關於</Nav.Link>
              <Nav.Link  className='mx-lg-3'>挖寶</Nav.Link>
              <Nav.Link >我有個大膽的想法</Nav.Link>
            </Nav>
            <ButtonGroup>
              <Button variant="primary" onClick={handleShow} className='btn text-dark' >登入</Button>

              <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>登入</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form className='w-100'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlAccout">
                      <Form.Label className='fw-bold fs-16'>帳號</Form.Label>
                      <Form.Control className='bg-light-gray border-0 radius-4' type="text" placeholder="enter account" autoFocus/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
                      <Form.Label className='fw-bold fs-16'>密碼</Form.Label>
                      <Form.Control className='bg-light-gray border-0 radius-4' type="password" placeholder="enter password"/>
                    </Form.Group>
                  </Form>
                  <p className='text-dark my-2'>忘記密碼？</p>
                </Modal.Body>
                <Modal.Footer className='border-0 mt-0 pt-0'>
                  <Button variant="secondary" onClick={handleClose} className='bg-primary fw-bold w-100 radius-26 border-0'>
                  登入
                  </Button>
                  <p className='mx-auto text-dark fs-14'>還沒有帳號？<span className='text-light-pink'>註冊一個帳號</span></p>
                </Modal.Footer>
              </Modal>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline-dark" className='btn ms-3'>註冊</Button>
            </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      
      <div className='d-flex text-start justify-content-start'  style={{background: '#F8F9FA'}}>
        <Container>
          <TopPart/>
        </Container>
      </div>
    </div>
  )
}

export default Header