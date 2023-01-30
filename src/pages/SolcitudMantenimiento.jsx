import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "../components/ComponentToPrint";
import { FormCreateRequest } from "../components/FormCreateRequest";

export const SolcitudMantenimiento = () => {
  const componentRef = useRef();
  const naviagate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const navegar = () => {
    naviagate("/reporte_mantenimiento_vehiculo");
  };
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        border: "1px solid black",
      }}
    >
      <h2>SOLICITUD DE MANTENIMIENTO</h2>
      {/* <button onClick={() => window.print()}>IMPRIMIR SOLICITUD</button> */}

      {/* <ReactToPrint
          trigger={() => <button>IMPRIMIR SOLICITUD</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} /> */}
      <button>AGREGAR NUEVA SOLICITUD</button>
      <button onClick={handlePrint}>IMPRIMIR SOLICITUD</button>
      <button>gUARDAR</button>
      <button onClick={navegar}>REPORTE DE MANTENIMIENTO POR VEHICULO</button>
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </div>
      <FormCreateRequest />
    </div>
  );
};
