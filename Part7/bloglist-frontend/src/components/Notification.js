import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    display: notification === "" ? "none" : "block",
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div style={style} className="notification">
      {notification}
    </div>
  );
};

export default Notification;
