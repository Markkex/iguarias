import React, { useState } from "react";
import { Button } from "@mui/material";
import emailjs from "emailjs-com";

const HomeReservation = () => {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [seats, setSeats] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const request = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setDate("");
    setHours("");
    setSeats("");
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
  };

  return (
    <div className="home-reservation">
      <div className="home-reservation-content">
        <div className="reservation-title">
          <h1>RESERVATIONS</h1>
        </div>
        <div className="home-form">
          <form onSubmit={request} className="home-form">
            <input
              className="input"
              value={date}
              name="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              placeholder="date"
            />
            <br />
            <br />
            <input
              className="input"
              value={hours}
              name="hours"
              onChange={(e) => {
                setHours(e.target.value);
              }}
              placeholder="hours"
            />
            <br />
            <br />
            <input
              value={seats}
              name="seats"
              onChange={(e) => {
                setSeats(e.target.value);
              }}
              placeholder="seats"
              className="input"
            />
            <br />
            <br />
            <input
              placeholder="name"
              className="input"
              value={name}
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              placeholder="Phone Number"
              className="input"
              value={phone}
              name="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              placeholder="email"
              className="input"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <textarea
              placeholder="notes"
              className="input"
              value={notes}
              name="notes"
              onChange={(e) => {
                setNotes(e.target.value);
              }}
              rows={4}
            />
            <br />
            <br />
            <Button variant="contained" onClick={request}>
              Reservation
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeReservation;
