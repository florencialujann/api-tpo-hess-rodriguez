import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import postContact from "../../api/contactar.api"; //integracion
import { Modal } from "react-bootstrap";


export const ContactUs = () => {
  
  const [mail_name, setMail_Name] = useState('');
  const [mail_phone, setMail_Phone] = useState('');
  const [mail_email, setMail_Email] = useState('');
  const [mail_message, setMail_Message] = useState('');
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleMailNameChange = (e) => {
    setMail_Name(e.target.value);
  };
  const handleMailPhoneChange = (e) => {
    setMail_Phone(e.target.value);
  };
  const handleMailEmailChange = (e) => {
    setMail_Email(e.target.value);
  };
  const handleMailMessageChange = (e) => {
    setMail_Message(e.target.value);
  };

  const handleContactarSubmit = async (e) => {
    
    e.preventDefault();
    let response = await postContact(mail_name, mail_phone, mail_email, mail_message);
    console.log(""+response.message);
    if (response.message === 'Created!') {
      
      setShowModal(true);
      
    }
    

    
    setMail_Name("");
    setMail_Phone("");
    setMail_Email("");
    setMail_Message(""); 
     //cierra el modal
}
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
      phone: formData.phone,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            loading: false,
            alertmessage: "Enviado! Gracias por contactarte con nosotros.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            alertmessage: `Error al enviar!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


//CONTACTAME
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contacto</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contactame</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          {/* <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col> */}
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Ponete en contacto</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Teléfono:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
              <strong>Localidad:</strong>{" "}
              <a>
                {contactConfig.YOUR_LOCALIDAD}
              </a>
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleContactarSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  type="name" 
                  value={mail_name} 
                  onChange={handleMailNameChange}
                  placeholder="Nombre y Apellido"
                  required
                  />
                </Col>
                <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  type="phone" 
                  value={mail_phone} 
                  onChange={handleMailPhoneChange}
                  placeholder="Teléfono"
                  required
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="12" className="form-group">
                <input
                  className="form-control"
                  type="email" 
                  value={mail_email} 
                  onChange={handleMailEmailChange}
                  placeholder="Email"
                  required
                  />
                </Col>
              </Row>
              <textarea
                
                className="form-control"
                type="message" 
                value={mail_message} 
                onChange={handleMailMessageChange}
                placeholder="Dejanos tu mensaje..."
                required
                
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button  className="btn ac_btn" type="submit">
                     Enviar
                  </button>
                </Col>
              </Row>

            </form>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <h5>Estado del mensaje</h5>
          </Modal.Header>
          <Modal.Body>
            <p>{showModal}</p>
            <p>El mensaje fue enviado correctamente</p>
          </Modal.Body>
          <Modal.Footer>
          <button  onClick={handleCloseModal} id="button_h">
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>

      </Container>
      {/* <div className={formData.loading ? "loading-bar" : "d-none"}></div> */}
    </HelmetProvider>
  );
};
