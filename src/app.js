/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import validator from "validator";

window.onload = function() {
  let form = document.getElementById("formulario");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Event");

    let card = document.getElementById("card");
    if (validator.isEmpty(card.value) || validator.isCreditCard(card.value)) {
      card.style.backgroundColor = "pink";
    } else {
      card.style.backgroundColor = "white";
    }

    let cvc = document.getElementById("cvc");
    if (validator.isEmpty(cvc.value) || !validator.isInt(cvc.value)) {
      cvc.style.backgroundColor = "pink";
    } else {
      cvc.style.backgroundColor = "white";
    }

    let amount = document.getElementById("amount");
    if (
      validator.isEmpty(amount.value) ||
      !validator.isCurrency(amount.value)
    ) {
      amount.style.backgroundColor = "pink";
    } else {
      amount.style.backgroundColor = "white";
    }

    let firstName = document.getElementById("firstName");
    if (validator.isEmpty(firstName.value)) {
      firstName.style.backgroundColor = "pink";
    } else {
      firstName.style.backgroundColor = "white";
    }

    let lastName = document.getElementById("lastName");
    if (validator.isEmpty(lastName.value)) {
      lastName.style.backgroundColor = "pink";
    } else {
      lastName.style.backgroundColor = "white";
    }

    let city = document.getElementById("city");
    if (validator.isEmpty(city.value)) {
      city.style.backgroundColor = "pink";
    } else {
      city.style.backgroundColor = "white";
    }

    let state = document.getElementById("state");
    if (
      validator.isEmpty(state.value) ||
      validator.equals(state.value, "Pick a state")
    ) {
      state.style.backgroundColor = "pink";
    } else {
      state.style.backgroundColor = "white";
    }

    let postalCode = document.getElementById("postalCode");
    if (
      validator.isEmpty(postalCode.value) ||
      validator.isPostalCode(postalCode.value, "US")
    ) {
      postalCode.style.backgroundColor = "pink";
    } else {
      postalCode.style.backgroundColor = "white";
    }

    let msg = document.getElementById("msg");
    if (validator.isEmpty(msg.value)) {
      msg.style.backgroundColor = "pink";
    } else {
      msg.style.backgroundColor = "white";
    }
  });
};
