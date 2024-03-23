import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import NavBar from "../Shared/NavBar/NavBar";
import Cookies from "js-cookie";
// import Circle from "../../components/Circle/Circle";


const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess }] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const userInfo = {
      email,
      password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.token);

    console.log(user);
    Cookies.set("softy_user_id", user.email._id, { expires: 7 });
    dispatch(setUser({ email: res.email, token: res.token }));
  };
  if (isSuccess) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login successfully !",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  }

  return (
    <div>
    <div className="bg-[#40C7F4] text-white">
    <NavBar />
  </div>
      <div className="signupWrap">
      <h3 className="mb-5 text-3xl font-bold text-center">Welcome to Back !</h3>
        <div className="text-center">
          <span>
            Sign In SoftyPy or{" "}
            <Link to="/signup">
              {" "}
              <b className="text-[#40C7F4]">
                Create an account{" "}
              </b>
            </Link>
          </span>
        </div>
        <form className="businessFormWrap" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
            <TextField
              {...register("email")}
              id="email"
              className="signupInput"
              label="Email "
              size="small"
              
            />
          </div>
          <div className="mb-5">
            <TextField
              {...register("password")}
              id="password"
              className="signupInput"
              label="Password "
              size="small"
            />
          </div>
          <button
            type="submit"
            className="  bg-[#40C7F4] w-[310px] h-10 text-white businessBtn"
          >
            Login{" "}
          </button>

        
        </form>
       
      </div>
    </div>
  );
};

export default Login;
