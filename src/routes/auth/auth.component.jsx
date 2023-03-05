import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Input } from "./auth.styles";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../store/user/user.action";
import Button from "../../components/button/button.component";
import Error from "../../components/error/error.component";
import FadeLoader from "react-spinners/FadeLoader";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

function Auth() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLogIn, setIsLogIn] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(
    (state) => state.user?.currentUser?.user || state.user?.currentUser
  );
  const isLoading = useSelector((state) => state.user?.isLoading);

  const from = location.state?.from || "/dashboard";
  const message = location.state?.message;

  if (user) {
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogIn) {
      dispatch(signUp(formFields));
    } else {
      dispatch(signIn(formFields));
    }

    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const switchLogIn = () => {
    setIsLogIn(!isLogIn);
  };

  return (
    <Container>
      {message && <Error>{message}</Error>}
      <h2>{isLogIn ? "Sign Up" : "Sign In"}</h2>
      <form className="form__content" onSubmit={handleSubmit}>
        {isLogIn && (
          <>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              id="username"
              placeholder="Full name"
              name="name"
              required
              value={formFields.name}
              onChange={handleChange}
            />
          </>
        )}

        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          placeholder="Email address"
          name="email"
          required
          value={formFields.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          required
          minLength="7"
          value={formFields.password}
          onChange={handleChange}
        />
        <Button color="black" type="submit">
          {isLogIn ? "Sign Up" : "Sign In"}
        </Button>
        <button className="btn" type="button" onClick={switchLogIn}>
          {isLogIn
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
        {error.length > 0 && <Error>{error[0]?.message}</Error>}
      </form>
      {isLoading ? <FadeLoader /> : ""}
    </Container>
  );
}

export default Auth;
