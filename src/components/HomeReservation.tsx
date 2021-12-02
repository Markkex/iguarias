import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TimePicker from "@mui/lab/TimePicker";

const HomeReservation = () => {
  const [date, setDate] = useState(null);
  const [hours, setHours] = useState<Date | number | null>(Date.now());
  const [seats, setSeats] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const success = true;
  const request = (e: any) => {
    e.preventDefault();

    if (
      date === null &&
      seats === "" &&
      name === "" &&
      phone === "" &&
      email === ""
    ) {
      alert("You need to complete all fields to validate your reservation.");
    } else {
      emailjs
        .sendForm(
          "service_kg3dj7f",
          "template_x8wrl8w",
          e.target,
          "user_zyIcfYksaJu9L0t7MGJJA"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setDate(null);
      setHours(Date.now());
      setSeats("");
      setName("");
      setPhone("");
      setEmail("");
      setNotes("");

      alert(
        "In a few minutes you will receive a message confirming your reservation."
      );
    }
  };

  return (
    <div className="home-reservation" id="reservations">
      <div className="home-reservation-content">
        <div className="reservation-title">
          <h1>RESERVATIONS</h1>
        </div>
        <div className="home-form">
          <form onSubmit={request} className="home-form">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} name="date" />}
              />

              <br />
              <br />
              <TimePicker
                label="Hours"
                value={hours}
                onChange={setHours}
                renderInput={(params) => <TextField {...params} name="hours" />}
              />
            </LocalizationProvider>
            <br />
            <br />
            <input
              placeholder="Seats"
              value={seats}
              name="seats"
              onChange={(e) => {
                setSeats(e.target.value);
              }}
              className="input"
            />
            <br />
            <br />
            <input
              placeholder="Name"
              className="input"
              value={name}
              name="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              placeholder="Phone"
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
              placeholder="E-mail"
              className="input"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              placeholder="Notes"
              className="input"
              value={notes}
              name="notes"
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            />
            <br />
            <br />
            <Button variant="contained" type="submit">
              Reservation
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeReservation;
