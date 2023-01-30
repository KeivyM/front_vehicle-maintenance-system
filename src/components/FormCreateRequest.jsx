import React from "react";

export const FormCreateRequest = () => {
  return (
    <div>
      <form>
        <h5
          style={{
            border: "1px solid red",
            padding: "5px",
            display: "inline-block",
          }}
        >
          Nº DE SOLICITUD:
        </h5>
        <input type="number" />

        <h5
          style={{
            border: "1px solid red",
            padding: "5px",
            display: "inline-block",
          }}
        >
          FECHA DE SOLICITUD
        </h5>
        <input type="number" />

        <div
          style={{
            border: "1px solid #000",
            margin: "20px",
            padding: "0px 10px",
          }}
        >
          <div>
            <h5
              style={{
                border: "1px solid red",
                padding: "5px",
                display: "inline",
              }}
            >
              ID VEHÍCULO
            </h5>
            <input type="number" />
          </div>
        </div>
      </form>
    </div>
  );
};
