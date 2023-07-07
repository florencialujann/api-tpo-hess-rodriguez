import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  fortalezas,
  idiomas,
  certificaciones,
  formacion,
  aptitudes,
} from "../../content_option";
import { contactConfig } from "../../content_option";
import { Link } from "react-router-dom";


export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Acerca de Mí | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Acerca de Mí</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="7">
            <h3 className="color_sec py-4">Datos Personales</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
          <p>
            <strong>Nombre y Apellido: </strong>{" "}
            <a>{contactConfig.YOUR_NAME}</a>
          </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
          <p>
            <strong>Correo: </strong>{" "}
            <a href="mailto:">{contactConfig.YOUR_EMAIL}</a>
          </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
          <p>
            <strong>Linkedin:  </strong>{" "}
            <Link><a href="https://linkedin.com/in/florencia-luján-rodríguez-757a551a"> Florencia Rodríguez</a>
            </Link>
          </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
          <p>
          <strong>Localidad:  </strong>{" "}
            <a>
              {contactConfig.YOUR_LOCALIDAD}
            </a>
            </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                  <p>
                    <strong>Teléfono:  </strong> {contactConfig.YOUR_FONE}
                  </p>
                ) : (
                  ""
                )}
          </Col>



        </Row>
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4"> Un poco acerca de mi</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>


        <Row className=" sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Experiencia</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                      <td>{data.tareas}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="8">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      {/* <div className="progress-value">{data.value}</div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Fotalezas</h3>
                  <p>
                    {fortalezas.fortaleza1}
                  </p>
                  <p>
                    {fortalezas.fortaleza2}
                  </p>
                  <p>
                    {fortalezas.fortaleza3}
                  </p>                           
          </Col>
          
          <Col lg="3">
            <h3 className="color_sec py-4">Idiomas</h3>
                  <p>
                    {idiomas.idioma1}
                  </p>
                  <p>
                    {idiomas.idioma2}
                  </p>
                  <p>
                    {idiomas.idioma3}
                  </p>                           
          </Col>
          <Col lg="3">
            <h3 className="color_sec py-4">Aptitudes</h3>
                  <p>
                    {aptitudes.aptitud1}
                  </p>
                  <p>
                  {aptitudes.aptitud2}
                  </p>
                  <p>
                  {aptitudes.aptitud3}
                  </p>                           
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certificaciones</h3>
                  <p>
                    {certificaciones.titulo}
                  </p>
                  <p>
                    {certificaciones.institucion}
                  </p>
                  <p>
                    {certificaciones.year}
                  </p>                           
          </Col>
          
          <Col lg="3">
            <h3 className="color_sec py-4">Formación</h3>
                  <p>
                    {formacion.titulo}
                  </p>
                  <p>
                  {formacion.institucion}
                  </p>
                  <p>
                  {formacion.year}
                  </p>                           
          </Col>
        </Row>
        <Row className=" sec_sp">
        </Row>        
      </Container>
    </HelmetProvider>
  );
};
