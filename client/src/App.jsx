import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages";
import { Provider } from "react-redux";
import store from "./store/store";
import AuthGuard from "./guards/auth.guard";
import { PublicRoutes, PrivateRoutes } from "./models";
import { Private } from "./pages/private";
import { RoutesNotFound } from "./utils";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesNotFound>
          <Route path='/' element={<Navigate to={`/${PrivateRoutes.PRIVATE}`} />} />
          <Route path={`/${PublicRoutes.LOGIN}`} element={<Login />} />
          <Route path={`/${PublicRoutes.REGISTER}`} element={<Register />} />
          <Route element={<AuthGuard />}>
            <Route path={`/${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesNotFound>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
