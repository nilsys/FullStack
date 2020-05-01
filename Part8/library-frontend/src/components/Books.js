import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from "../query/queries";

const Books = (props) => {
  const result = useQuery(ALL_BOOKS);
  let books = [];

  if (!props.show) {
    return null;
  }

  if (!result.loading) {
    books = result.data.allBooks;
  }

  if (props.books) {
    books = props.books;
  }

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;