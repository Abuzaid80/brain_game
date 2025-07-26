// Firebase configuration


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get database reference
const database = firebase.database();
const leaderboardRef = database.ref('leaderboard'); 
