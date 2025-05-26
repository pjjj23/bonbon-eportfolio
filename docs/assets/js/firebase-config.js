document.addEventListener('DOMContentLoaded', function() {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAT2BKiyAGY_8O2sChuFEvR7DxCjvS72VY",
    authDomain: "pj-bonbon.firebaseapp.com",
    databaseURL: "https://pj-bonbon-default-rtdb.firebaseio.com",
    projectId: "pj-bonbon",
    storageBucket: "pj-bonbon.firebasestorage.app",
    messagingSenderId: "811730169698",
    appId: "1:811730169698:web:c56f8654410a8b5601063b",
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;

    // Create current date and formatted timestamp
    const now = new Date();
    const formattedTimestamp = formatTimestamp(now);

    // Create a reference to UsersContactMe with a new UID
    const userContactRef = database.ref("UsersContactMe").push();

    // Set the data with both timestamp formats
    userContactRef
      .set({
        Name: name,
        Email: email,
        Message: message,
        TimeStamp: firebase.database.ServerValue.TIMESTAMP,
        FormattedTimeStamp: formattedTimestamp,
      })
      .then(() => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("There was an error sending your message. Please try again.");
      });
  });

  // Function to format timestamp as "May 05, 2025 2:20 PM"
  function formatTimestamp(date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
  }
});