import { login } from "../../services/userService";
import { useDispatch } from "react-redux";
import { saveUser } from "../../store/states/user";
import { PrivateRoutes } from "../../models";
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
    navigate(`/${PrivateRoutes.PRIVATE}`);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name='email' type='text' />
        <label>Password</label>
        <input name='password' type='text' />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
