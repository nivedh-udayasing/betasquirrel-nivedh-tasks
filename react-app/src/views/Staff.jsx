import React, { useState } from "react";
import Main from "../layouts/Main";
import { Table, Row, Col } from "react-bootstrap";
const Staff = () => {
  const staffs = [
    {
      firstName: "Nivedh",
      lastName: "Udayasing",
      mobileNumber: "8818267456",
      email: "nivedh@gmail.com",
      place: "Thrissur",
      joinDate: "18/02/2021",
      salary: "20000/-",
      role: "Physics Teacher",
    },
  ];
  const [staff] = useState([staffs]);
  return (
    <>
      <Main>
        <Row className="mt-5">
          <Col>
            <h2>Staff</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sl.no.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Join Date</th>
                  <th>Role</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {staffs.map((staff, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{staff.firstName}</td>
                    <td>{staff.lastName}</td>
                    <td>{staff.mobileNumber}</td>
                    <td>{staff.email}</td>
                    <td>{staff.place}</td>
                    <td>{staff.joinDate}</td>
                    <td>{staff.role}</td>
                    <td>{staff.salary}</td>
                  </tr>
                ))}
                {staff.length === 0 ? (
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
export default Staff;
