import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";

export const SolcitudMantenimiento = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // const componentRef = useRef();
  // console.log(componentRef);
  return (
    <div
      style={{
        maxWidth: "1200px",
        // alignItems: "center",
        // justifySelf: "center",
        // justifyItems: "center",
        margin: "0 auto",
        border: "1px solid black",
      }}
    >
      <div>SolcitudMantenimiento</div>
      {/* <button onClick={() => window.print()}>IMPRIMIR SOLICITUD</button> */}

      <div
      // style={{
      //   margin: "0 auto",
      // }}
      >
        {/* <ReactToPrint
          trigger={() => <button>IMPRIMIR SOLICITUD</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} /> */}
        <button onClick={handlePrint}>IMPRIMIR SOLICITUD</button>
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={componentRef} />
        </div>
      </div>
    </div>
  );
};
