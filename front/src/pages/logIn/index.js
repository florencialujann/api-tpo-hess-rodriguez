import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { meta} from "../../content_option";
import { Container, Row, Modal, Col} from "react-bootstrap";
import "./style.css";
import login from "../../api/login.api";
import {useNavigate} from 'react-router-dom';
import register from "../../api/register";



export const Login = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  

  const [newregister_name, setNewName] = useState('');
  const [newregister_lastname, setNewLastname] = useState('');
  const [newregister_email, setNewNewEmail] = useState('');
  const [newregister_password, setNewPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    let response = await login(email,password);
    if (response.status === 200) { 
      sessionStorage.setItem("access-token",response.token); 
      navigate("/mail")
    } 
    else {
      setShowErrorModal(true);
      setEmail('');
      setPassword('');
    }
      
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleShowErrorModal = () => {
    setShowErrorModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  /* const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }; */



  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNewLastnameChange = (e) => {
    setNewLastname(e.target.value);
  };
  const handleNewEmailChange = (e) => {
    setNewNewEmail(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let response = await register(newregister_name,newregister_lastname,newregister_email,newregister_password);
    console.log("Registrando usuario:", newregister_name,newregister_lastname,newregister_email,newregister_password);
    if (response.message === 200) {
      setShowModal("Usuario Registrado con exito");
    }
    else {
      setShowModal("Error, usuario ya existe");
    }
    
    setNewName("");
    setNewLastname("");
    setNewNewEmail("");
    setNewPassword(""); 
    setShowModal(false) //cierra el modal
}



  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Login</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h1 className="fluidz-48 mb-2x">Inicio de Sesión</h1>
                <h3 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: ["Ingresa tu usuario y contraseña"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h3>
                <div className="intro_btn-action pb-5">
                  <Row>
                    <div className="login-form">
                      <form onSubmit={handleSubmit} className="contact__form w-100">
                        <Row className="mt-3">
                        <Col lg="6" className="form-group">
                        <input
                          className="form-control"
                          type="email" 
                          value={email} 
                          onChange={handleEmailChange}
                          placeholder="Email"
                          required
                        />
                        </Col>
                        <Col lg="6" className="form-group">
                        <input
                          className="form-control"
                          type="password" 
                          value={password} 
                          onChange={handlePasswordChange}
                          placeholder="Contraseña"
                          required
                        />
                        </Col>
                        
                        </Row>
                        {/* <p className="mb-1x">{introdata.inicio}</p> */}
                      <div className="intro_btn-action "></div>
                        <button type="submit" id="button_p" className="ac_btn btn">
                          Iniciar Sesión
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </button>
                        <button onClick={handleShowModal} id="button_h" className="ac_btn btn">
                          Registrarse
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </button>
                      </form>
                    </div>
                  </Row>                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
          <Modal.Header closeButton>
            <h5>Error</h5>
          </Modal.Header>
          <Modal.Body>
            <p>{showErrorModal}</p>
            <p>Por favor, intente nuevamente</p>
          </Modal.Body>
          <Modal.Footer>
          <button  onClick={handleCloseErrorModal} id="button_h">
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <h5>Registrarse</h5>
          </Modal.Header>
          <Modal.Body>
          <div className="intro_btn-action pb-5">
            <Row>
            <div className="register-form">
            <form onSubmit={handleRegisterSubmit}>
              <Row className="mt-3">
                <Col lg="10" className="form-group">
                <input
                  className="form-control"
                  type="name" 
                  value={newregister_name} 
                  onChange={handleNewNameChange}
                  placeholder="Name"
                  required   
                  />
                </Col>
              </Row>
              <Row className="mt-3">
              <Col lg="10" className="form-group">
                <input
                  className="form-control"
                  type="lastname" 
                  value={newregister_lastname} 
                  onChange={handleNewLastnameChange}
                  placeholder="Lastame"
                  required   
                  />
                </Col>
              </Row>
              <Row className="mt-3">
              <Col lg="10" className="form-group">
                <input
                  className="form-control"
                  type="email" 
                  value={newregister_email} 
                  onChange={handleNewEmailChange}
                  placeholder="Email"
                  required   
                  />
                </Col>
              </Row>
              <Row className="mt-3">
              <Col lg="10" className="form-group">
                <input
                  className="form-control"
                  type="password" 
                  value={newregister_password} 
                  onChange={handleNewPasswordChange}
                  placeholder="Contraseña"
                  required   
                  />
                </Col>
              </Row>
                    

            </form>
            </div>
            </Row>
            </div>
            
          </Modal.Body>
          <Modal.Footer>
          
          <button  onClick={handleCloseModal} id="button_h">
              Cerrar
            </button>
            <button  onClick={handleRegisterSubmit} id="button_p">
              Registrarse
            </button>
            

          </Modal.Footer>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
