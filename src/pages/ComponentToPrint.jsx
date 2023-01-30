import React from "react";

// Using a class component, everything works without issue
export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div style={{ maxWidth: "1000px", padding: "30px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ fontWeight: "400" }}>SOLICITUD DE MANTENIMIENTO</h1>
          <div>
            <p>jueves, 25 de agosto de 2016</p>
            <p>11:41:34 a.m.</p>
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "center" }}>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              N DE SOLICITUD
            </h5>
            <h5>6</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>NOMBRE</h5>
            <h5>DANTE</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              PRIMER APELLIDO
            </h5>
            <h5>VICTORIOSO</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              SEGUNDO APELLIDO
            </h5>
            <h5>HEROE</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              CEDULA DE IDENTIDAD
            </h5>
            <h5>0009898</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              CATEG DE LICENCIA
            </h5>
            <h5>A</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              VENCIMIENTO
            </h5>
            <h5>6</h5>
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "center" }}>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              N DE SOLICITUD
            </h5>
            <h5>6</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>NOMBRE</h5>
            <h5>DANTE</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              PRIMER APELLIDO
            </h5>
            <h5>VICTORIOSO</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              SEGUNDO APELLIDO
            </h5>
            <h5>HEROE</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              CEDULA DE IDENTIDAD
            </h5>
            <h5>0009898</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              CATEG DE LICENCIA
            </h5>
            <h5>A</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              VENCIMIENTO
            </h5>
            <h5>6</h5>
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "center" }}>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              N DE SOLICITUD
            </h5>
            <h5>6</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>NOMBRE</h5>
            <h5>DANTE</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              PRIMER APELLIDO
            </h5>
            <h5>VICTORIOSO</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              SEGUNDO APELLIDO
            </h5>
            <h5>HEROE</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              CEDULA DE IDENTIDAD
            </h5>
            <h5>0009898</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              CATEG DE LICENCIA
            </h5>
            <h5>A</h5>
          </div>
          <div>
            <h5 style={{ border: "1px solid red", padding: "5px" }}>
              VENCIMIENTO
            </h5>
            <h5>6</h5>
          </div>
        </div>
        <hr />
        <br />
        <br />

        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h4>_____________________________________</h4>
            <h4>FIRMA DE AUTORIZACIÓN</h4>
          </div>
          <div>
            <h4>_____________________________________</h4>
            <h4>FIRMA DE SOLICITANTE</h4>
          </div>
        </div>
      </div>
    );
  }
}
