import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AuthGuard from "./guards/auth.guard";
import { PublicRoutes, PrivateRoutes } from "./models";
import { Private } from "./pages/private";
import { RoutesNotFound } from "./utils";
import { Suspense, lazy } from "react";
import { Navbar } from "./components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theme";

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <RoutesNotFound>
              <Route path='/' element={<Navigate to={`/${PrivateRoutes.PRIVATE}`} />} />
              <Route path={`/${PublicRoutes.HOME}`} element={<Home />} />
              <Route path={`/${PublicRoutes.LOGIN}`} element={<Login />} />
              <Route path={`/${PublicRoutes.REGISTER}`} element={<Register />} />
              <Route element={<AuthGuard />}>
                <Route path={`/${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;