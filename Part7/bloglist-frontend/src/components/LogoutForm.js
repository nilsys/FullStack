import React from "react";
import { useDispatch } from "react-redux";
import { clearLoggedUser } from "../reducers/loginReducer";

const Logout = () => {
  // useDispatch hook
  const dispatch = useDispatch();

  // Logout
  const handleLogout = async (event) => {
    try {
      event.preventDefault();
      console.log("Logging Out!");
      dispatch(clearLoggedUser());
    } catch (exception) {
      console.log(exception);
    }
  };

  return <b onClick={handleLogout}>Logout</b>;
};

export default Logout;
