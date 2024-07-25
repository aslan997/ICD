import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/slices/authSlice";
import LoginFooter from "./LoginFooter";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "Password must be alphanumeric"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      dispatch(loginUser(values));
      navigate("/objective/form");
    },
  });

  return (
    <div className="min-h-screen bg-loginScreenBg flex flex-col items-center justify-center bg-cover bg-no-repeat p-2">
      <div className="max-w-md w-full p-6 bg-white rounded-inputsm shadow-lg">
        <div className="text-center">
          <a href="" className="block my-4">
            {/* <img src={logoDark} className="mx-auto h-8" alt="logo-dark" />*/}
            <img
              src="https://icd.gov.ae/wp-content/themes/ICD/assets/images/logo.png"
              className="mx-auto h-8"
              alt="logo-light"
            />
          </a>
        </div>
        <div className="text-center mb-6">
          <p className="text-14">Sign in to continue.</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4 mb-6">
          <div>
            <label htmlFor="username" className="block text-14">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-inputsm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-14"
              placeholder="Enter username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block text-14">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-inputsm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-14"
              placeholder="Enter password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="customControlInline"
                className="form-check-input accent-gold h-4 w-4 transition duration-150 ease-in-out"
              />
              <label
                htmlFor="customControlInline"
                className="ml-2 block text-14"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-auto bg-gold text-white py-2 px-4 rounded-inputsm text-14"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </div>
          {/* <div className="text-start">
            <a
              href="pages-recoverpw.html"
              className="text-14 hover:text-gray-900"
            >
              <i className="mdi mdi-lock"></i> Forgot your password?
            </a>
          </div> */}
        </form>
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </div>
      <LoginFooter />
    </div>
  );
};

export default LoginForm;
