import { Navigate, Route, Routes } from "react-router-dom";
import { BarraNavegacion } from "./components/BarraNavegacion";
import { ReporteMantenimiento } from "./pages/ReporteMantenimiento";

import { SolcitudMantenimiento } from "./pages/SolcitudMantenimiento";

export const AppRoutes = () => {
  return (
    <>
      <BarraNavegacion />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/solicitud_mantenimiento`} />}
        />
        <Route
          path="/solicitud_mantenimiento"
          element={<SolcitudMantenimiento />}
        />
        <Route
          path="/reporte_mantenimiento_vehiculo/:id"
          element={<ReporteMantenimiento />}
        />
        <Route
          path="/*"
          element={<Navigate to={`/solicitud_mantenimiento`} />}
        />
      </Routes>
    </>
  );
};
