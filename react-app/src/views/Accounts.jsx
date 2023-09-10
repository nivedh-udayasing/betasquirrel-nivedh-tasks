import React, { useState } from "react";
import Main from "../layouts/Main";
import { Table, Row, Col } from "react-bootstrap";
const Accounts = () => {
  const accounts = [
    {
      date: "10/25/2022",
      description: "academic fee",
      amount: "50000/-",
      type: "income",
      accountNumber: "798956136445454518448",
    },
  ];
  const [account] = useState([accounts]);
  return (
    <>
      <Main>
        <Row className="mt-5">
          <Col>
            <h2>Accounts</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Transaction Id</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>AccountNumber</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{account.date}</td>
                    <td>{account.description}</td>
                    <td>{account.amount}</td>
                    <td>{account.type}</td>
                    <td>{account.accountNumber}</td>
                  </tr>
                ))}
                {account.length === 0 ? (
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
export default Accounts;
