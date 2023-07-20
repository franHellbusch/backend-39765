import { register } from "@/services/userService";
import { useDispatch } from "react-redux";
import { saveUser } from "@/store/states/user";
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData);

    const response = await register(user);
    dispatch(saveUser(response.payload));
    navigate(`/${PublicRoutes.HOME}`);
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name</label>
            <input type='text' name='name' placeholder='name' required />
          </div>
          <div>
            <label>LastName</label>
            <input type='text' name='lastName' placeholder='lastName' required />
          </div>
        </div>
        <div>
          <label>Age</label>
          <input type='number' name='age' required />
        </div>
        <div>
          <label>Email</label>
          <input type='email' name='email' required />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' placeholder='••••••••' required />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => navigate(`/${PublicRoutes.LOGIN}`)}>Go to login</button>
    </>
  );
};

export default Register;
