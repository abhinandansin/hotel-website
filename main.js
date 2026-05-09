import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";


// FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "AIzaSyBijpCUnaDwp0d3FrZPAAszFFitIY6D-Hk",

  authDomain: "hotel-booking-931c8.firebaseapp.com",

  projectId: "hotel-booking-931c8",

  storageBucket: "hotel-booking-931c8.firebasestorage.app",

  messagingSenderId: "124572598877",

  appId: "1:124572598877:web:f947c1fdcf4169907343b4"
};


// INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// MENU BUTTON CODE

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line"
  );
});

navLinks.addEventListener("click", () => {

  navLinks.classList.remove("open");

  menuBtnIcon.setAttribute("class", "ri-menu-line");

});


// SCROLL REVEAL

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


// HEADER

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});


// ABOUT

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});


// ROOM

ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});


// SERVICE

ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});


// BOOKING FORM

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const checkIn =
    document.getElementById("check-in").value;

  const checkOut =
    document.getElementById("check-out").value;

  const guest =
    document.getElementById("guest").value;

  try {

    await addDoc(collection(db, "bookings"), {

      checkIn: checkIn,

      checkOut: checkOut,

      guest: guest,

      createdAt: new Date(),

    });

    alert("Booking Saved Successfully!");

    bookingForm.reset();

  } catch (error) {

    console.error(error);

    alert("Error saving booking");

  }

});
