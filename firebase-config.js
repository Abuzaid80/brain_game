// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "brain-quiz-xxxxx.firebaseapp.com",
    databaseURL: "https://brain-quiz-xxxxx-default-rtdb.firebaseio.com",
    projectId: "brain-quiz-xxxxx",
    storageBucket: "brain-quiz-xxxxx.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdefghijklmnop"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get database reference
const database = firebase.database();
const leaderboardRef = database.ref('leaderboard'); 