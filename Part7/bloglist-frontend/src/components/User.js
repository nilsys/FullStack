import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@material-ui/core";

const User = () => {
  const users = useSelector((state) => state.users);
  const userById = (id) => users.find((a) => a.id === id);
  const userId = useParams().id;

  if (!users) {
    return null;
  }

  const user = userById(userId);
  console.log("From User: ", user.blogs);
  return (
    <Card>
      <CardContent>
        <h3>{user.name}</h3>
        <b>Added Blogs</b>
        <ul>
          {user.blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default User;
