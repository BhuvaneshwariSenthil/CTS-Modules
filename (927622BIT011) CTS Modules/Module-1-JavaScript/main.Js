// Task 1: JavaScript Basics & Setup
console.log("Welcome to the Community Portal");

window.onload = () => {
  alert("Page fully loaded");
  displayEvents();
};

// Task 2: Syntax, Data Types, and Operators
const events = [
  {
    name: "Music Night",
    date: new Date("2025-06-01"),
    seats: 5,
    category: "Music"
  },
  {
    name: "Tech Meetup",
    date: new Date("2025-05-20"),
    seats: 0,
    category: "Technology"
  },
  {
    name: "Art Workshop",
    date: new Date("2025-07-10"),
    seats: 10,
    category: "Art"
  }
];

// Task 3: Conditionals, Loops, and Error Handling
function displayEvents() {
  const now = new Date();
  const list = document.getElementById("eventList");
  list.innerHTML = "";

  events.forEach((event, index) => {
    if (event.date > now && event.seats > 0) {
      const card = document.createElement("div");
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date.toDateString()}</p>
        <p>Seats Available: ${event.seats}</p>
        <button onclick="register(${index})">Register</button>
        <hr>
      `;
      list.appendChild(card);
    }
  });
}

function register(index) {
  try {
    if (events[index].seats > 0) {
      events[index].seats--;
      alert(`Registered for ${events[index].name}!`);
      displayEvents();
    } else {
      throw new Error("No seats left");
    }
  } catch (error) {
    alert("Registration failed: " + error.message);
  }
}
