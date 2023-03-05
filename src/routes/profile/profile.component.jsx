import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Container, DetailsContainer, Details } from "./profile.styles";
import { Input } from "../auth/auth.styles";
import Button from "../../components/button/button.component";
import { useDispatch, useSelector } from "react-redux";
import {
  //getProfile,
  updateProfile,
  deleteProfile,
} from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";
import Error from "../../components/error/error.component";
import FadeLoader from "react-spinners/FadeLoader";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { getProfile } from "../../api";

function Profile() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    avatar: null,
  });
  const { name, email, password, age } = formFields ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const error = useSelector((state) => state.error);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    async function getProfileDetails() {
      try {
        setLoading(true);
        const { data } = await getProfile();
        console.log(data);
        setLoading(false);
        setFormFields(data);
      } catch (error) {
        console.log(error);
        setErrorText(error.message);
      }
    }
    getProfileDetails();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProfile(formFields));
    setIsOpen(false);
  };

  const deleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to perform this action? This will delete your account and associated data with it."
      )
    ) {
      dispatch(deleteProfile());
      setTimeout(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <Container>
      {loading && <FadeLoader color="#36d7b7" />}
      <div>
        <DetailsContainer>
          <Details>
            <h2>
              My Profile{" "}
              <PersonOutlineIcon style={{ margin: "0.4em 0 0 0.6em" }} />
            </h2>
            <p>Name: {formFields.name}</p>
            <p>Email: {formFields.email}</p>
            <p>Age: {formFields.age}</p>
            <div>
              Avatar: <br />
              {formFields.avatar ? (
                <img width="200px" src={formFields.avatar} alt="avatar" />
              ) : (
                "No image chosen"
              )}
            </div>
          </Details>
          <EditIcon className="icon" onClick={() => setIsOpen(true)} />
        </DetailsContainer>
        <Button margin="0 0 0 1em" onClick={deleteAccount}>
          Delete account
        </Button>
      </div>
      <div>
        {isOpen && (
          <form onSubmit={handleSubmit}>
            {formFields.avatar ? "Change" : "Upload"} Avatar:{" "}
            <FileBase
              type="file"
              name="avatar"
              accept="image/*"
              onDone={({ base64 }) =>
                setFormFields({ ...formFields, avatar: base64 })
              }
            />
            {formFields.avatar && (
              <Button
                className="avatar-btn"
                onClick={() => setFormFields({ ...formFields, avatar: "" })}
              >
                <DeleteIcon /> avatar
              </Button>
            )}
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
            />
            <Button type="submit">Save</Button>
            <Button type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </form>
        )}
        {(errorText || error.length > 0) && (
          <Error>
            {error[0].message || "Something went wrong. Please try again later"}
          </Error>
        )}
      </div>
    </Container>
  );
}

export default Profile;
