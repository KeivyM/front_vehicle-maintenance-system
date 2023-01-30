import { Navigate, Route, Routes } from "react-router-dom";
import { ReportreMantenimiento } from "./pages/ReportreMantenimiento";
// import { NavBar } from "../components/NavBar";

import { SolcitudMantenimiento } from "./pages/SolcitudMantenimiento";

export const AppRoutes = () => {
  return (
    <>
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
          path="/reporte_mantenimiento_vehiculo"
          element={<ReportreMantenimiento />}
        />

        {/* <Route path="/solicitud_mantenimiento" element={<ProfilePage />} /> */}
        {/* <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/post" element={<PostPage type="new" />} />
            <Route path="/post/:id" element={<PostPage type="update" />} /> */}
        {/* <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostsDetailsPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
};
