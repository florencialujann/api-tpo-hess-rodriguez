import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {meta,} from "../../content_option";
import {useNavigate} from 'react-router-dom';
import getContacts from "../../api/contactos";
import { useEffect, useState } from "react";

export const Mail = () => {
  
  const [contactos, setContacts] = useState([]);
  const accessToken = sessionStorage.getItem('access-token')//Guardo el token del login
  console.log(accessToken)
  useEffect(() => {
    getContacts(accessToken,setContacts);
  }, [setContacts,accessToken]);
  

  const logout = () => {
    sessionStorage.removeItem("access-token");
    navigate('/home'); //redirecciona a la pagina home
  };
  const handleLogout = () => {
    logout();
  };
  const navigate = useNavigate();

  return (
    <HelmetProvider>

      <Container className="About-header">

        <Helmet>
          <meta charSet="utf-8" />
          <title> Contactos | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="10">
            <h1 className="display-4 mb-4">Contactos</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="2">
            <button className="ac_btn btn" id="button_p" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </Col>
        
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Contactos</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {contactos.map((data, i) => {
                  
                  return (  
                    <tr key={i}>
                      <th scope="row">{data.name}</th>
                      <td>{data.telefono}</td>
                      <td>{data.email}</td>
                      <td>{data.mensaje}</td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

