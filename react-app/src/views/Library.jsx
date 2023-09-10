import React, { useState } from "react";
import Main from "../layouts/Main";
import { Table, Row, Col } from "react-bootstrap";
const Library = () => {
  const Libraries = [
    {
      title: "Atomic Habbits",
      author: "James Klinton",
      isbn: "84851878828484",
      category: "biography",
      publishDate: "10/06/2005",
      status: "Checked out",
    },
    {
      title: "Wings of Fire: An Autobiography",
      author: "Abdul Kalam",
      isbn: "52615898455184",
      category: "biography",
      publishDate: "10/06/1999",
      status: "Available",
    },
  ];
  const [library] = useState([Libraries]);
  return (
    <>
      <Main>
        <Row className="mt-5">
          <Col>
            <h2>Library</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN</th>
                  <th>Category</th>
                  <th>Publish Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Libraries.map((library, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{library.title}</td>
                    <td>{library.author}</td>
                    <td>{library.isbn}</td>
                    <td>{library.category}</td>
                    <td>{library.publishDate}</td>
                    <td>{library.status}</td>
                  </tr>
                ))}
                {library.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center">
                      NO RECORDS FOUND!
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Main>
    </>
  );
};
export default Library;
