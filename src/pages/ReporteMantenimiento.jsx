import React from "react";
import { useParams } from "react-router-dom";

export const ReporteMantenimiento = () => {
  const { id } = useParams();
  // console.log(v);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ fontWeight: 500 }}>
          REPORTE DE MANTENIMIENTO POR VEHÍCULO
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // justifyItems: "center",
          textAlign: "center",
          width: "100%",
          background: "#ddd",
          gap: "10px",
        }}
      >
        <div style={{ background: "transparent", display: "inline-block" }}>
          <h5
            style={{
              border: "1px solid red",
              padding: "5px",
            }}
          >
            N DE SOLICITUD
          </h5>
          <h5>{id}</h5>
        </div>
        <div style={{ background: "transparent", display: "inline-block" }}>
          <h5
            style={{
              border: "1px solid red",
              padding: "5px",
            }}
          >
            N DE SOLICITUD
          </h5>
          <h5>{id}</h5>
        </div>
      </div>
    </div>
  );
};
