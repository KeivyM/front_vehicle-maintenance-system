import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "../components/ComponentToPrint";
import { FormCrearSolicitud } from "../components/FormCrearSolicitud";

export const SolcitudMantenimiento = () => {
  const componentRef = useRef();
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const navegar = () => {
    const response = window.prompt(
      "Por favor ingrese el Nº de Placa del vehículo para generar el reporte"
    );
    console.log(response);
    const nr = response.trim();
    navigate(`/reporte_mantenimiento_vehiculo/${nr}`);
  };
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px",
        // border: "1px solid black",
      }}
    >
      {/* <h2>SOLICITUD DE MANTENIMIENTO</h2> */}
      {/* <button onClick={() => window.print()}>IMPRIMIR SOLICITUD</button> */}

      {/* <ReactToPrint
          trigger={() => <button>IMPRIMIR SOLICITUD</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} /> */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button>AGREGAR NUEVA SOLICITUD</button>
        <button onClick={handlePrint}>IMPRIMIR SOLICITUD</button>
        <button>gUARDAR</button>
        <button onClick={navegar}>REPORTE DE MANTENIMIENTO POR VEHICULO</button>
      </div>
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </div>
      <FormCrearSolicitud />
    </div>
  );
};
