import { githubAuth, googleAuth, login } from "@/services/userService";
import { useDispatch } from "react-redux";
import { saveUser } from "@/store/states/user";
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData);

    const response = await login(user);
    dispatch(saveUser(response.payload));
    navigate(`/${PublicRoutes.HOME}`);
  };

  const handleGoogleAuth = async () => {
    const response = await googleAuth();
    dispatch(saveUser(response.payload));
    navigate(`/${PublicRoutes.HOME}`);
  };

  const handleGithubAuth = async () => {
    const response = await githubAuth();
    dispatch(saveUser(response.payload));
    navigate(`/${PublicRoutes.HOME}`);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name='email' type='text' />
        <label>Password</label>
        <input type='password' name='password' placeholder='••••••••' required />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => navigate(`/${PublicRoutes.REGISTER}`)}>Go to register</button>
      <br />
      <button onClick={handleGoogleAuth}>Sign in with google</button>
      <button onClick={handleGithubAuth}>Sign in with github</button>
    </>
  );
};

export default Login;
