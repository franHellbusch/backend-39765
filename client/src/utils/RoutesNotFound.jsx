import { Route, Routes } from "react-router-dom";

const RoutesNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path='/*' element={<>Not Found</>} />
    </Routes>
  );
};

export default RoutesNotFound;
