import React from "react";

export const FormCrearSolicitud = () => {
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
        <select name="df">
          <option value="df">Vake</option>
          <option value="ddf">Vdake</option>
          <option value="dadf">Vakse</option>
          <option value="ddaf">Vdake</option>
        </select>

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
