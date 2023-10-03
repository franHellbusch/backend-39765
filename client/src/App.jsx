import { Navigate, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthGuard from "./guards/auth.guard";
import { PublicRoutes, PrivateRoutes } from "./models";
import { Private } from "./pages/private";
import { RoutesNotFound } from "./utils";
import { Suspense, lazy, useEffect } from "react";
import { Navbar } from "./components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theme";
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { currentUser } from "./services/userService";
import { saveUser } from "./store/states/user";
import NoAuthGuard from "./guards/noauth.guard";
import { ProductDetailContainer } from "./pages";

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword/ForgotPassword"));
const RestorePassword = lazy(() => import("./pages/RestorePassword/RestorePassword"));

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((store) => store.user);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const response = await currentUser();
      dispatch(saveUser(response.payload));
      navigate(`/${PublicRoutes.HOME}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!userState.email) {
      getUserInfo();
    }
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Suspense fallback={<>Loading...</>}>
        <Navbar />
        <RoutesNotFound>
          <Route path='/' element={<Navigate to={`/${PrivateRoutes.PRIVATE}`} />} />
          <Route path={`/${PublicRoutes.HOME}`} element={<Home />} />
          <Route
            path={`/${PublicRoutes.PRODUCT_DETAIL}/:productId`}
            element={<ProductDetailContainer />}
          />
          <Route element={<NoAuthGuard />}>
            <Route path={`/${PublicRoutes.LOGIN}`} element={<Login />} />
            <Route path={`/${PublicRoutes.REGISTER}`} element={<Register />} />
            <Route path={`/${PublicRoutes.FORGOT_PASSWORD}`} element={<ForgotPassword />} />
            <Route path={`/${PublicRoutes.RESTORE}`} element={<RestorePassword />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route path={`/${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesNotFound>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
