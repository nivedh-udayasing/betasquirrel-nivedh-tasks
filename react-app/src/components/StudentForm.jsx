import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function StudentForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    admissionNumber: "",
    dateOfAdmission: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    religion: "",
    address: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., send data to an API or perform validation.
    console.log(formData);
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Admission Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="admissionNumber" className="mb-3">
              <Form.Label>Admission Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter admission number"
                name="admissionNumber"
                value={formData.admissionNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="dateOfAdmission" className="mb-3">
              <Form.Label>Date of Admission</Form.Label>
              <Form.Control
                type="date"
                name="dateOfAdmission"
                value={formData.dateOfAdmission}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="mobileNumber" className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <div>
                <div className="d-inline-block mr">
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="d-inline-block mr">
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="d-inline-block mr">
                  <Form.Check
                    type="radio"
                    label="Other"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="religion" className="mb-3">
              <Form.Label>Religion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter religion"
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="address" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              className="float-end"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StudentForm;
