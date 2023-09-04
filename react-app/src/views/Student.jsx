import React, { useState } from "react";
import Main from "../layouts/Main";
import { Table, Row, Col } from "react-bootstrap";
const Student = () => {
  const [students, setStudents] = useState([]);
  setTimeout(() => {
    setStudents([
      { name: "Nivedh", email: "nivedh@gmail.com" },
      { name: "damu", email: "damu@gmail.com" },
      { name: "vasu", email: "vasu@gmail.com" },
    ]);
  }, 5000);

  return (
    <>
      <Main>
        <Row className="mt-2">
          <Col>
            <h2>Students</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
                {students.length === 0 ? (
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
export default Student;
