// Data soal quiz (100 soal)
const quizData = [
    {
        question: "Gunung tertinggi di dunia adalah...",
        options: ["Kilimanjaro", "Everest", "Fuji", "Denali"],
        correct: 1
    },
    {
        question: "Sungai terpanjang di dunia adalah...",
        options: ["Amazon", "Nil", "Yangtze", "Mississippi"],
        correct: 1
    },
    {
        question: "Laut terluas di dunia adalah...",
        options: ["Laut Mediterania", "Laut Cina Selatan", "Laut Karibia", "Laut Pasifik"],
        correct: 3
    },
    {
        question: "Hewan terbesar di dunia adalah...",
        options: ["Gajah", "Paus Biru", "Jerapah", "Hiu Paus"],
        correct: 1
    },
    {
        question: "Hutan hujan terbesar di dunia adalah...",
        options: ["Hutan Kongo", "Hutan Amazon", "Hutan Borneo", "Hutan Sumatra"],
        correct: 1
    },
    {
        question: "Gurun terbesar di dunia adalah...",
        options: ["Gurun Sahara", "Gurun Gobi", "Gurun Arab", "Gurun Kalahari"],
        correct: 0
    },
    {
        question: "Danau terdalam di dunia adalah...",
        options: ["Danau Toba", "Danau Baikal", "Danau Victoria", "Danau Superior"],
        correct: 1
    },
    {
        question: "Negara dengan keanekaragaman hayati tertinggi adalah...",
        options: ["Indonesia", "Brasil", "Australia", "India"],
        correct: 1
    },
    {
        question: "Fenomena alam ketika bulan menutupi matahari disebut...",
        options: ["Gerhana Bulan", "Gerhana Matahari", "Supermoon", "Blood Moon"],
        correct: 1
    },
    {
        question: "Lapisan atmosfer terdekat dengan bumi adalah...",
        options: ["Stratosfer", "Troposfer", "Mesosfer", "Termosfer"],
        correct: 1
    },
    {
        question: "Gempa bumi terjadi karena pergeseran...",
        options: ["Lempeng tektonik", "Pasang surut air laut", "Aktivitas gunung berapi", "Angin topan"],
        correct: 0
    },
    {
        question: "Hewan yang dapat berubah warna untuk kamuflase adalah...",
        options: ["Bunglon", "Ular", "Katak", "Kupu-kupu"],
        correct: 0
    },
    {
        question: "Proses penguapan air dari tumbuhan disebut...",
        options: ["Evaporasi", "Transpirasi", "Kondensasi", "Presipitasi"],
        correct: 1
    },
    {
        question: "Gunung berapi aktif tertinggi di Indonesia adalah...",
        options: ["Merapi", "Kerinci", "Semeru", "Rinjani"],
        correct: 1
    },
    {
        question: "Terumbu karang terbesar di dunia adalah...",
        options: ["Karang Penghalang Belize", "Great Barrier Reef", "Karang Togean", "Karang Raja Ampat"],
        correct: 1
    },
    {
        question: "Lapisan bumi yang paling panas adalah...",
        options: ["Kerak", "Mantel", "Inti luar", "Inti dalam"],
        correct: 3
    },
    {
        question: "Proses pembentukan batuan karena pendinginan magma disebut...",
        options: ["Sedimentasi", "Metamorfosis", "Kristalisasi", "Erosi"],
        correct: 2
    },
    {
        question: "Angin yang bertiup dari laut ke darat disebut...",
        options: ["Angin darat", "Angin laut", "Angin gunung", "Angin lembah"],
        correct: 1
    },
    {
        question: "Tumbuhan yang hidup di gurun biasanya memiliki daun...",
        options: ["Lebar", "Kecil atau berduri", "Berbulu", "Berwarna cerah"],
        correct: 1
    },
    {
        question: "Negara dengan jumlah gunung berapi terbanyak adalah...",
        options: ["Jepang", "Indonesia", "Amerika Serikat", "Islandia"],
        correct: 1
    },
    {
        question: "Lapisan ozon melindungi bumi dari...",
        options: ["Sinar inframerah", "Sinar ultraviolet", "Sinar gamma", "Sinar X"],
        correct: 1
    },
    {
        question: "Hewan yang tidur dengan posisi bergantung terbalik adalah...",
        options: ["Koala", "Kelelawar", "Sloth", "Tupai"],
        correct: 1
    },
    {
        question: "Danau terbesar di Afrika adalah...",
        options: ["Danau Victoria", "Danau Tanganyika", "Danau Malawi", "Danau Chad"],
        correct: 0
    },
    {
        question: "Proses pelapukan batuan oleh air, angin, atau es disebut...",
        options: ["Erosi", "Sedimentasi", "Abrasi", "Korosi"],
        correct: 0
    },
    {
        question: "Burung yang tidak bisa terbang adalah...",
        options: ["Elang", "Penguin", "Rajawali", "Merpati"],
        correct: 1
    },
    {
        question: "Sungai yang mengalir melalui Mesir adalah...",
        options: ["Sungai Amazon", "Sungai Nil", "Sungai Eufrat", "Sungai Gangga"],
        correct: 1
    },
    {
        question: "Fenomena pasang surut air laut disebabkan oleh...",
        options: ["Rotasi bumi", "Gravitasi bulan", "Pemanasan global", "Arus laut"],
        correct: 1
    },
    {
        question: "Hewan yang memiliki belalai adalah...",
        options: ["Badak", "Gajah", "Jerapah", "Zebra"],
        correct: 1
    },
    {
        question: "Pegunungan terpanjang di dunia adalah...",
        options: ["Pegunungan Himalaya", "Pegunungan Andes", "Pegunungan Rocky", "Pegunungan Alpen"],
        correct: 1
    },
    {
        question: "Tumbuhan yang memakan serangga disebut...",
        options: ["Kaktus", "Kantong semar", "Bambu", "Pakis"],
        correct: 1
    },
    {
        question: "Negara kepulauan terbesar di dunia adalah...",
        options: ["Filipina", "Indonesia", "Jepang", "Maladewa"],
        correct: 1
    },
    {
        question: "Lapisan es di kutub disebut...",
        options: ["Gletser", "Iceberg", "Tundra", "Permafrost"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki cangkang keras adalah...",
        options: ["Ular", "Kura-kura", "Katak", "Burung"],
        correct: 1
    },
    {
        question: "Proses perubahan wujud dari gas ke cair disebut...",
        options: ["Menguap", "Mencair", "Mengembun", "Membeku"],
        correct: 2
    },
    {
        question: "Gunung berapi di Jepang yang terkenal adalah...",
        options: ["Fuji", "Kilimanjaro", "Vesuvius", "Krakatau"],
        correct: 0
    },
    {
        question: "Hewan yang bermigrasi terjauh adalah...",
        options: ["Burung Unta", "Albatros", "Kupu-kupu Monarch", "Paus"],
        correct: 2
    },
    {
        question: "Danau terbesar di Amerika Utara adalah...",
        options: ["Danau Superior", "Danau Michigan", "Danau Huron", "Danau Ontario"],
        correct: 0
    },
    {
        question: "Proses fotosintesis menghasilkan...",
        options: ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"],
        correct: 0
    },
    {
        question: "Negara dengan garis pantai terpanjang di dunia adalah...",
        options: ["Australia", "Kanada", "Indonesia", "Rusia"],
        correct: 1
    },
    {
        question: "Fenomena alam yang ditandai dengan angin berputar kencang adalah...",
        options: ["Tornado", "Topan", "Siklon", "Badai pasir"],
        correct: 0
    },
    {
        question: "Hewan yang hidup di air dan darat disebut...",
        options: ["Reptil", "Amfibi", "Mamalia", "Burung"],
        correct: 1
    },
    {
        question: "Gunung berapi yang meletus di Indonesia tahun 1883 adalah...",
        options: ["Merapi", "Krakatau", "Tambora", "Sinabung"],
        correct: 1
    },
    {
        question: "Benua terkecil di dunia adalah...",
        options: ["Eropa", "Australia", "Antartika", "Afrika"],
        correct: 1
    },
    {
        question: "Lapisan bumi tempat hidup makhluk hidup adalah...",
        options: ["Litosfer", "Hidrosfer", "Atmosfer", "Biosfer"],
        correct: 3
    },
    {
        question: "Tumbuhan yang menyimpan air di batangnya adalah...",
        options: ["Bambu", "Kaktus", "Pakis", "Lumut"],
        correct: 1
    },
    {
        question: "Sungai yang mengalir melalui India adalah...",
        options: ["Sungai Nil", "Sungai Gangga", "Sungai Amazon", "Sungai Yangtze"],
        correct: 1
    },
    {
        question: "Hewan yang memiliki punuk adalah...",
        options: ["Kuda", "Unta", "Zebra", "Rusa"],
        correct: 1
    },
    {
        question: "Fenomena alam ketika suhu udara sangat dingin dan membekukan air disebut...",
        options: ["Hujan es", "Salju", "Frost", "Kabut"],
        correct: 2
    },
    {
        question: "Gunung tertinggi di Afrika adalah...",
        options: ["Kilimanjaro", "Everest", "Elbrus", "Aconcagua"],
        correct: 0
    },
    {
        question: "Tumbuhan yang tumbuh di air adalah...",
        options: ["Teratai", "Kaktus", "Bambu", "Pinus"],
        correct: 0
    },
    {
        question: "Negara dengan hutan hujan terbesar kedua setelah Brasil adalah...",
        options: ["Indonesia", "Kongo", "Peru", "Kolombia"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki kemampuan ekolokasi adalah...",
        options: ["Kelelawar", "Burung hantu", "Lumba-lumba", "Anjing"],
        correct: 0
    },
    {
        question: "Sungai terpanjang di Asia adalah...",
        options: ["Sungai Yangtze", "Sungai Mekong", "Sungai Gangga", "Sungai Indus"],
        correct: 0
    },
    {
        question: "Danau terbesar di Amerika Selatan adalah...",
        options: ["Danau Titicaca", "Danau Maracaibo", "Danau Poopó", "Danau Buenos Aires"],
        correct: 0
    },
    {
        question: "Proses pembentukan awan disebut...",
        options: ["Evaporasi", "Kondensasi", "Presipitasi", "Transpirasi"],
        correct: 1
    },
    {
        question: "Hewan yang memiliki cakar terkuat adalah...",
        options: ["Singa", "Elang", "Beruang", "Harimau"],
        correct: 1
    },
    {
        question: "Gunung berapi paling aktif di dunia adalah...",
        options: ["Kilauea", "Etna", "Merapi", "Stromboli"],
        correct: 0
    },
    {
        question: "Fenomena alam ketika matahari terbit tengah malam terjadi di...",
        options: ["Kutub Utara", "Ekuator", "Gurun Sahara", "Pegunungan Alpen"],
        correct: 0
    },
    {
        question: "Tumbuhan yang dapat hidup di air asin adalah...",
        options: ["Bakau", "Bambu", "Kelapa", "Pinus"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki lidah terpanjang dibandingkan tubuhnya adalah...",
        options: ["Jerapah", "Trenggiling", "Bunglon", "Katak"],
        correct: 2
    },
    {
        question: "Gunung tertinggi di Amerika Selatan adalah...",
        options: ["Aconcagua", "Chimborazo", "Cotopaxi", "Huascarán"],
        correct: 0
    },
    {
        question: "Fenomena alam ketika air laut naik ke daratan disebut...",
        options: ["Tsunami", "Banjir", "Badai", "Gelombang pasang"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki gigi terpanjang adalah...",
        options: ["Gajah", "Walrus", "Narwhal", "Babi hutan"],
        correct: 1
    },
    {
        question: "Sungai yang mengalir melalui Baghdad adalah...",
        options: ["Sungai Nil", "Sungai Tigris", "Sungai Eufrat", "Sungai Indus"],
        correct: 1
    },
    {
        question: "Lapisan bumi yang berupa batuan padat adalah...",
        options: ["Inti", "Mantel", "Kerak", "Litosfer"],
        correct: 2
    },
    {
        question: "Tumbuhan yang dapat menghasilkan minyak atsiri adalah...",
        options: ["Lavender", "Bambu", "Kelapa", "Jagung"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki tanduk terpanjang adalah...",
        options: ["Banteng", "Kambing", "Rusa", "Kerbau"],
        correct: 2
    },
    {
        question: "Fenomena alam ketika angin berputar di laut disebut...",
        options: ["Tornado", "Topan", "Siklon", "Hurricane"],
        correct: 2
    },
    {
        question: "Gunung berapi di Italia yang pernah menghancurkan Pompeii adalah...",
        options: ["Etna", "Vesuvius", "Stromboli", "Krakatau"],
        correct: 1
    },
    {
        question: "Tumbuhan yang dapat hidup di gurun adalah...",
        options: ["Kaktus", "Pakis", "Lumut", "Bambu"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki kulit berduri adalah...",
        options: ["Trenggiling", "Landak", "Kadal", "Ular"],
        correct: 1
    },
    {
        question: "Danau terbesar di Eropa adalah...",
        options: ["Danau Ladoga", "Danau Onega", "Danau Vänern", "Danau Geneva"],
        correct: 0
    },
    {
        question: "Proses pembentukan tanah dari batuan disebut...",
        options: ["Erosi", "Pelapukan", "Sedimentasi", "Abrasi"],
        correct: 1
    },
    {
        question: "Hewan yang dapat berenang dan terbang adalah...",
        options: ["Penguin", "Kelelawar", "Lumba-lumba", "Angsa"],
        correct: 3
    },
    {
        question: "Gunung tertinggi di Eropa adalah...",
        options: ["Mont Blanc", "Elbrus", "Matterhorn", "Olympus"],
        correct: 1
    },
    {
        question: "Fenomena alam ketika suhu udara sangat panas dan kering disebut...",
        options: ["Gelombang panas", "Kekeringan", "Badai pasir", "Angin kencang"],
        correct: 0
    },
    {
        question: "Tumbuhan yang memiliki bunga terbesar adalah...",
        options: ["Rafflesia", "Bunga Matahari", "Anggrek", "Teratai"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki leher terpanjang adalah...",
        options: ["Jerapah", "Unta", "Kuda nil", "Badak"],
        correct: 0
    },
    {
        question: "Sungai yang mengalir melalui Rusia adalah...",
        options: ["Sungai Volga", "Sungai Yenisei", "Sungai Lena", "Sungai Ob"],
        correct: 0
    },
    {
        question: "Lapisan atmosfer tempat terjadinya aurora adalah...",
        options: ["Troposfer", "Stratosfer", "Mesosfer", "Termosfer"],
        correct: 3
    },
    {
        question: "Hewan yang memiliki kemampuan regenerasi adalah...",
        options: ["Bintang laut", "Ular", "Katak", "Kadal"],
        correct: 0
    },
    {
        question: "Gunung berapi di Islandia yang meletus tahun 2010 adalah...",
        options: ["Hekla", "Eyjafjallajökull", "Katla", "Grimsvötn"],
        correct: 1
    },
    {
        question: "Tumbuhan yang dapat menangkap serangga dengan daunnya adalah...",
        options: ["Venus Flytrap", "Bambu", "Kelapa", "Pinus"],
        correct: 0
    },
    {
        question: "Fenomena alam ketika es mencair di kutub disebut...",
        options: ["Pemanasan global", "Efek rumah kaca", "El Niño", "La Niña"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki kemampuan berjalan di air adalah...",
        options: ["Kadal Basilisk", "Katak", "Ular", "Laba-laba"],
        correct: 0
    },
    {
        question: "Gunung tertinggi di Amerika Utara adalah...",
        options: ["Denali", "Whitney", "Rainier", "Logan"],
        correct: 0
    },
    {
        question: "Sungai yang mengalir melalui Cina adalah...",
        options: ["Sungai Yangtze", "Sungai Mekong", "Sungai Kuning", "Sungai Pearl"],
        correct: 0
    },
    {
        question: "Lapisan bumi yang berupa logam cair adalah...",
        options: ["Inti luar", "Inti dalam", "Mantel", "Kerak"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki gigi taring terpanjang adalah...",
        options: ["Harimau", "Singa", "Macan tutul", "Cheetah"],
        correct: 0
    },
    {
        question: "Fenomena alam ketika angin berputar sangat kencang di Amerika disebut...",
        options: ["Tornado", "Topan", "Siklon", "Hurricane"],
        correct: 0
    },
    {
        question: "Tumbuhan yang dapat hidup di daerah dingin adalah...",
        options: ["Lumut", "Kaktus", "Bambu", "Kelapa"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki cangkang spiral adalah...",
        options: ["Siput", "Kerang", "Kura-kura", "Kepiting"],
        correct: 0
    },
    {
        question: "Gunung berapi di Filipina yang terkenal adalah...",
        options: ["Mayon", "Pinatubo", "Taal", "Apo"],
        correct: 1
    },
    {
        question: "Fenomena alam ketika air laut surut jauh disebut...",
        options: ["Tsunami", "Gelombang pasang", "Air pasang", "Air surut"],
        correct: 3
    },
    {
        question: "Hewan yang memiliki kemampuan mengubah warna kulit adalah...",
        options: ["Gurita", "Bunglon", "Ular", "Katak"],
        correct: 0
    },
    {
        question: "Sungai yang mengalir melalui Thailand adalah...",
        options: ["Sungai Mekong", "Sungai Chao Phraya", "Sungai Salween", "Sungai Irrawaddy"],
        correct: 1
    },
    {
        question: "Lapisan bumi tempat lempeng tektonik berada adalah...",
        options: ["Litosfer", "Astenosfer", "Mesosfer", "Inti"],
        correct: 0
    },
    {
        question: "Tumbuhan yang dapat hidup di air payau adalah...",
        options: ["Bakau", "Teratai", "Bambu", "Kelapa"],
        correct: 0
    },
    {
        question: "Hewan yang memiliki tanduk di hidung adalah...",
        options: ["Badak", "Rusa", "Kambing", "Banteng"],
        correct: 0
    },
    {
        question: "Fenomena alam ketika bumi berada di antara matahari dan bulan disebut...",
        options: ["Gerhana bulan", "Gerhana matahari", "Supermoon", "Blood Moon"],
        correct: 0
    }
];

// Variabel global
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let playerName = '';
let playerLocation = '';

// Leaderboard variables
let currentPage = 1;
let itemsPerPage = 10;
let filteredLeaderboard = [];
let allLeaderboardData = [];
let isOnline = false;
let syncStatus = 'checking'; // checking, online, offline

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    leaderboard: document.getElementById('leaderboard-screen')
};

// Event Listeners
document.getElementById('player-form').addEventListener('submit', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('play-again-btn').addEventListener('click', resetQuiz);
document.getElementById('view-leaderboard-btn').addEventListener('click', showLeaderboard);
document.getElementById('back-to-home-btn').addEventListener('click', showWelcome);
document.getElementById('get-location-btn').addEventListener('click', getCurrentLocation);
document.getElementById('refresh-leaderboard-btn').addEventListener('click', showLeaderboard);
document.getElementById('filter-location').addEventListener('change', filterLeaderboard);
document.getElementById('filter-date').addEventListener('change', filterLeaderboard);
document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
document.getElementById('next-page').addEventListener('click', () => changePage(1));
document.getElementById('view-full-leaderboard-btn').addEventListener('click', showLeaderboard);
document.getElementById('sync-leaderboard-btn').addEventListener('click', manualSync);

// Fungsi untuk memulai quiz
function startQuiz(e) {
    e.preventDefault();
    
    playerName = document.getElementById('player-name').value.trim();
    playerLocation = document.getElementById('player-location').value.trim();
    
    if (!playerName || !playerLocation) {
        alert('Mohon isi nama dan lokasi Anda!');
        return;
    }
    
    // Acak 50 soal dari 100 soal
    currentQuestions = shuffleArray([...quizData]).slice(0, 50);
    currentQuestionIndex = 0;
    score = 0;
    
    showScreen('quiz');
    displayQuestion();
    updateProgress();
}

// Fungsi untuk mengacak array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Fungsi untuk menampilkan soal
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('next-btn').disabled = true;
}

// Fungsi untuk memilih jawaban
function selectOption(selectedIndex) {
    const options = document.querySelectorAll('.option');
    const correctAnswer = currentQuestions[currentQuestionIndex].correct;
    
    // Disable semua opsi
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Tandai jawaban yang dipilih dan jawaban yang benar
    options.forEach((option, index) => {
        if (index === selectedIndex) {
            option.classList.add('selected');
        }
        if (index === correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    // Update skor
    if (selectedIndex === correctAnswer) {
        score++;
        document.getElementById('current-score').textContent = score;
    }
    
    document.getElementById('next-btn').disabled = false;
}

// Fungsi untuk pertanyaan berikutnya
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

// Fungsi untuk update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

// Fungsi untuk menampilkan hasil
function showResults() {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('result-name').textContent = playerName;
    document.getElementById('result-location').textContent = playerLocation;
    document.getElementById('percentage').textContent = percentage;
    
    // Pesan performa berdasarkan skor
    let performanceText = '';
    if (percentage >= 90) {
        performanceText = 'Luar biasa! Anda sangat menguasai pengetahuan alam! 🌟';
    } else if (percentage >= 80) {
        performanceText = 'Bagus sekali! Pengetahuan alam Anda sangat baik! 👍';
    } else if (percentage >= 70) {
        performanceText = 'Bagus! Anda memiliki pemahaman yang baik tentang alam! 😊';
    } else if (percentage >= 60) {
        performanceText = 'Cukup baik! Terus belajar untuk meningkatkan pengetahuan! 📚';
    } else if (percentage >= 50) {
        performanceText = 'Perlu belajar lagi! Jangan menyerah, terus berlatih! 💪';
    } else {
        performanceText = 'Jangan khawatir! Belajar lagi dan coba lagi! 📖';
    }
    
    document.getElementById('performance-text').textContent = performanceText;
    
    // Simpan skor ke leaderboard
    saveScore(playerName, playerLocation, score, percentage);
    
    showScreen('results');
}

// Fungsi untuk menyimpan skor
function saveScore(name, location, score, percentage) {
    const newScore = {
        name: name,
        location: location,
        score: score,
        percentage: percentage,
        date: new Date().toLocaleDateString('id-ID'),
        timestamp: Date.now(),
        timeString: new Date().toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        }),
        playerId: generatePlayerId()
    };
    
    // Save to local storage
    saveToLocalStorage(newScore);
    
    // Save to global database if online
    if (isOnline && typeof firebase !== 'undefined') {
        saveToGlobalDatabase(newScore);
    }
    
    // Update mini leaderboard jika di welcome screen
    if (document.getElementById('welcome-screen').classList.contains('active')) {
        loadMiniLeaderboard();
    }
}

// Function to save to local storage
function saveToLocalStorage(newScore) {
    const leaderboard = JSON.parse(localStorage.getItem('brainQuizLeaderboard') || '[]');
    leaderboard.push(newScore);
    
    // Sort by score (highest first), then by timestamp (newest first)
    leaderboard.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return b.timestamp - a.timestamp;
    });
    
    // Keep only top 100 scores
    const topScores = leaderboard.slice(0, 100);
    localStorage.setItem('brainQuizLeaderboard', JSON.stringify(topScores));
}

// Function to save to global database
function saveToGlobalDatabase(newScore) {
    if (typeof firebase !== 'undefined' && firebase.database) {
        const database = firebase.database();
        const leaderboardRef = database.ref('leaderboard');
        
        // Save new score
        leaderboardRef.push(newScore)
            .then(() => {
                console.log('Score saved to global database');
                showSyncStatus('Skor berhasil disimpan ke database global', 'success');
            })
            .catch((error) => {
                console.error('Error saving to global database:', error);
                showSyncStatus('Gagal menyimpan ke database global', 'error');
            });
    }
}

// Function to generate unique player ID
function generatePlayerId() {
    return 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Function to load global leaderboard
function loadGlobalLeaderboard() {
    if (typeof firebase !== 'undefined' && firebase.database) {
        const database = firebase.database();
        const leaderboardRef = database.ref('leaderboard');
        
        leaderboardRef.once('value')
            .then((snapshot) => {
                const globalData = [];
                snapshot.forEach((childSnapshot) => {
                    globalData.push(childSnapshot.val());
                });
                
                // Sort global data
                globalData.sort((a, b) => {
                    if (b.score !== a.score) {
                        return b.score - a.score;
                    }
                    return b.timestamp - a.timestamp;
                });
                
                // Merge with local data and update
                mergeAndUpdateLeaderboard(globalData);
                
                console.log('Global leaderboard loaded:', globalData.length, 'entries');
            })
            .catch((error) => {
                console.error('Error loading global leaderboard:', error);
                showSyncStatus('Gagal memuat data global', 'error');
            });
    }
}

// Function to merge local and global data
function mergeAndUpdateLeaderboard(globalData) {
    const localData = JSON.parse(localStorage.getItem('brainQuizLeaderboard') || '[]');
    
    // Create a map of existing scores by playerId to avoid duplicates
    const existingScores = new Map();
    
    // Add local scores
    localData.forEach(score => {
        if (score.playerId) {
            existingScores.set(score.playerId, score);
        }
    });
    
    // Add global scores (will overwrite local if newer)
    globalData.forEach(score => {
        if (score.playerId) {
            const existing = existingScores.get(score.playerId);
            if (!existing || score.timestamp > existing.timestamp) {
                existingScores.set(score.playerId, score);
            }
        }
    });
    
    // Convert back to array and sort
    const mergedData = Array.from(existingScores.values());
    mergedData.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return b.timestamp - a.timestamp;
    });
    
    // Keep only top 100
    const topScores = mergedData.slice(0, 100);
    
    // Update local storage
    localStorage.setItem('brainQuizLeaderboard', JSON.stringify(topScores));
    
    // Update global variables
    allLeaderboardData = topScores;
    
    // Update displays
    if (document.getElementById('welcome-screen').classList.contains('active')) {
        loadMiniLeaderboard();
    }
    
    showSyncStatus('Data global berhasil disinkronkan', 'success');
}

// Function to sync local data to global database
function syncLocalData() {
    const localData = JSON.parse(localStorage.getItem('brainQuizLeaderboard') || '[]');
    
    if (localData.length > 0 && typeof firebase !== 'undefined' && firebase.database) {
        const database = firebase.database();
        const leaderboardRef = database.ref('leaderboard');
        
        // Upload local data to global database
        localData.forEach(score => {
            if (score.playerId) {
                leaderboardRef.child(score.playerId).set(score);
            }
        });
        
        console.log('Local data synced to global database');
        showSyncStatus('Data lokal berhasil disinkronkan', 'success');
    }
}

// Function for manual sync
function manualSync() {
    const syncBtn = document.getElementById('sync-leaderboard-btn');
    const originalText = syncBtn.innerHTML;
    
    // Show loading state
    syncBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Syncing...';
    syncBtn.disabled = true;
    
    if (isOnline && typeof firebase !== 'undefined') {
        // Load global data and sync
        loadGlobalLeaderboard();
        
        // Re-enable button after sync
        setTimeout(() => {
            syncBtn.innerHTML = originalText;
            syncBtn.disabled = false;
        }, 2000);
    } else {
        showSyncStatus('Tidak dapat sync - Periksa koneksi internet', 'error');
        syncBtn.innerHTML = originalText;
        syncBtn.disabled = false;
    }
}

// Fungsi untuk menampilkan leaderboard
function showLeaderboard() {
    allLeaderboardData = JSON.parse(localStorage.getItem('brainQuizLeaderboard') || '[]');
    currentPage = 1;
    
    // Update top winners
    updateTopWinners();
    
    // Update statistics
    updateStatistics();
    
    // Update location filter options
    updateLocationFilter();
    
    // Apply filters and show data
    filterLeaderboard();
    
    showScreen('leaderboard');
}

// Fungsi untuk update top 3 winners
function updateTopWinners() {
    const top3 = allLeaderboardData.slice(0, 3);
    
    // First place
    if (top3[0]) {
        document.getElementById('first-name').textContent = top3[0].name;
        document.getElementById('first-location').textContent = top3[0].location;
        document.getElementById('first-score').textContent = top3[0].score;
    } else {
        document.getElementById('first-name').textContent = '-';
        document.getElementById('first-location').textContent = '-';
        document.getElementById('first-score').textContent = '0';
    }
    
    // Second place
    if (top3[1]) {
        document.getElementById('second-name').textContent = top3[1].name;
        document.getElementById('second-location').textContent = top3[1].location;
        document.getElementById('second-score').textContent = top3[1].score;
    } else {
        document.getElementById('second-name').textContent = '-';
        document.getElementById('second-location').textContent = '-';
        document.getElementById('second-score').textContent = '0';
    }
    
    // Third place
    if (top3[2]) {
        document.getElementById('third-name').textContent = top3[2].name;
        document.getElementById('third-location').textContent = top3[2].location;
        document.getElementById('third-score').textContent = top3[2].score;
    } else {
        document.getElementById('third-name').textContent = '-';
        document.getElementById('third-location').textContent = '-';
        document.getElementById('third-score').textContent = '0';
    }
}

// Fungsi untuk update statistics
function updateStatistics() {
    const totalPlayers = allLeaderboardData.length;
    const avgScore = totalPlayers > 0 ? Math.round(allLeaderboardData.reduce((sum, entry) => sum + entry.score, 0) / totalPlayers) : 0;
    const perfectScores = allLeaderboardData.filter(entry => entry.score === 50).length;
    
    document.getElementById('total-players').textContent = totalPlayers;
    document.getElementById('avg-score').textContent = avgScore;
    document.getElementById('perfect-scores').textContent = perfectScores;
}

// Fungsi untuk update location filter options
function updateLocationFilter() {
    const locationSelect = document.getElementById('filter-location');
    const locations = [...new Set(allLeaderboardData.map(entry => entry.location))].sort();
    
    // Clear existing options except the first one
    locationSelect.innerHTML = '<option value="">Semua Lokasi</option>';
    
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });
}

// Fungsi untuk filter leaderboard
function filterLeaderboard() {
    const locationFilter = document.getElementById('filter-location').value;
    const dateFilter = document.getElementById('filter-date').value;
    
    filteredLeaderboard = allLeaderboardData.filter(entry => {
        // Location filter
        if (locationFilter && entry.location !== locationFilter) {
            return false;
        }
        
        // Date filter
        if (dateFilter) {
            const entryDate = new Date(entry.timestamp);
            const now = new Date();
            
            switch (dateFilter) {
                case 'today':
                    return entryDate.toDateString() === now.toDateString();
                case 'week':
                    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                    return entryDate >= weekAgo;
                case 'month':
                    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    return entryDate >= monthAgo;
            }
        }
        
        return true;
    });
    
    // Reset to first page
    currentPage = 1;
    
    // Display filtered data
    displayLeaderboardPage();
}

// Fungsi untuk menampilkan halaman leaderboard
function displayLeaderboardPage() {
    const tbody = document.getElementById('leaderboard-body');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredLeaderboard.slice(startIndex, endIndex);
    
    tbody.innerHTML = '';
    
    if (pageData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px;">Tidak ada data yang ditemukan</td></tr>';
    } else {
        pageData.forEach((entry, index) => {
            const globalIndex = startIndex + index;
            const row = document.createElement('tr');
            
            // Format time
            const entryTime = new Date(entry.timestamp);
            const timeString = entryTime.toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit'
            });
            
            row.innerHTML = `
                <td>${globalIndex + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.location}</td>
                <td>${entry.score}/50</td>
                <td>${entry.percentage}%</td>
                <td>${entry.date}</td>
                <td>${timeString}</td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Update pagination
    updatePagination();
}

// Fungsi untuk update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredLeaderboard.length / itemsPerPage);
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;
    
    pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages || 1}`;
}

// Fungsi untuk change page
function changePage(direction) {
    const totalPages = Math.ceil(filteredLeaderboard.length / itemsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        displayLeaderboardPage();
    }
}

// Fungsi untuk load mini leaderboard
function loadMiniLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('brainQuizLeaderboard') || '[]');
    
    // Update mini top 3 winners
    updateMiniTopWinners(leaderboard);
    
    // Update mini statistics
    updateMiniStatistics(leaderboard);
    
    // Update mini leaderboard table
    updateMiniLeaderboardTable(leaderboard);
}

// Fungsi untuk update mini top 3 winners
function updateMiniTopWinners(leaderboard) {
    const top3 = leaderboard.slice(0, 3);
    
    // First place
    if (top3[0]) {
        document.getElementById('mini-first-name').textContent = top3[0].name;
        document.getElementById('mini-first-location').textContent = top3[0].location;
        document.getElementById('mini-first-score').textContent = top3[0].score;
    } else {
        document.getElementById('mini-first-name').textContent = '-';
        document.getElementById('mini-first-location').textContent = '-';
        document.getElementById('mini-first-score').textContent = '0';
    }
    
    // Second place
    if (top3[1]) {
        document.getElementById('mini-second-name').textContent = top3[1].name;
        document.getElementById('mini-second-location').textContent = top3[1].location;
        document.getElementById('mini-second-score').textContent = top3[1].score;
    } else {
        document.getElementById('mini-second-name').textContent = '-';
        document.getElementById('mini-second-location').textContent = '-';
        document.getElementById('mini-second-score').textContent = '0';
    }
    
    // Third place
    if (top3[2]) {
        document.getElementById('mini-third-name').textContent = top3[2].name;
        document.getElementById('mini-third-location').textContent = top3[2].location;
        document.getElementById('mini-third-score').textContent = top3[2].score;
    } else {
        document.getElementById('mini-third-name').textContent = '-';
        document.getElementById('mini-third-location').textContent = '-';
        document.getElementById('mini-third-score').textContent = '0';
    }
}

// Fungsi untuk update mini statistics
function updateMiniStatistics(leaderboard) {
    const totalPlayers = leaderboard.length;
    const avgScore = totalPlayers > 0 ? Math.round(leaderboard.reduce((sum, entry) => sum + entry.score, 0) / totalPlayers) : 0;
    
    document.getElementById('mini-total-players').textContent = totalPlayers;
    document.getElementById('mini-avg-score').textContent = avgScore;
}

// Fungsi untuk update mini leaderboard table
function updateMiniLeaderboardTable(leaderboard) {
    const tbody = document.getElementById('mini-leaderboard-body');
    const top5 = leaderboard.slice(0, 5);
    
    tbody.innerHTML = '';
    
    if (top5.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 15px; color: #666;">Belum ada skor yang tersimpan</td></tr>';
    } else {
        top5.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}/50</td>
                <td>${entry.location}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Fungsi untuk reset quiz
function resetQuiz() {
    document.getElementById('player-name').value = '';
    document.getElementById('player-location').value = '';
    showScreen('welcome');
    
    // Update mini leaderboard setelah kembali ke welcome screen
    setTimeout(() => {
        loadMiniLeaderboard();
    }, 100);
}

// Fungsi untuk kembali ke welcome screen
function showWelcome() {
    showScreen('welcome');
}

// Fungsi untuk menampilkan screen tertentu
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// Load leaderboard saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Reset form jika ada data tersimpan
    const savedName = localStorage.getItem('brainQuizPlayerName');
    const savedLocation = localStorage.getItem('brainQuizPlayerLocation');
    
    if (savedName) {
        document.getElementById('player-name').value = savedName;
    }
    if (savedLocation) {
        document.getElementById('player-location').value = savedLocation;
    }
    
    // Check internet connection and initialize Firebase
    checkInternetConnection();
    
    // Load mini leaderboard
    loadMiniLeaderboard();
    
    // Additional protection: Disable debugging
    disableDebugging();
});

// Function to check internet connection
function checkInternetConnection() {
    if (navigator.onLine) {
        isOnline = true;
        syncStatus = 'online';
        initializeFirebase();
        showSyncStatus('Terhubung ke internet - Data global aktif', 'success');
    } else {
        isOnline = false;
        syncStatus = 'offline';
        showSyncStatus('Mode offline - Data lokal saja', 'warning');
    }
    
    // Listen for online/offline events
    window.addEventListener('online', () => {
        isOnline = true;
        syncStatus = 'online';
        initializeFirebase();
        showSyncStatus('Terhubung ke internet - Data global aktif', 'success');
        syncLocalData();
    });
    
    window.addEventListener('offline', () => {
        isOnline = false;
        syncStatus = 'offline';
        showSyncStatus('Mode offline - Data lokal saja', 'warning');
    });
}

// Function to show sync status
function showSyncStatus(message, type) {
    // Create status element if it doesn't exist
    let statusElement = document.getElementById('sync-status');
    if (!statusElement) {
        statusElement = document.createElement('div');
        statusElement.id = 'sync-status';
        statusElement.className = 'sync-status';
        document.querySelector('.header').appendChild(statusElement);
    }
    
    statusElement.textContent = message;
    statusElement.className = `sync-status ${type}`;
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        statusElement.style.opacity = '0';
    }, 5000);
}

// Function to initialize Firebase
function initializeFirebase() {
    if (typeof firebase !== 'undefined' && firebase.database) {
        // Firebase is available
        loadGlobalLeaderboard();
    } else {
        console.log('Firebase not available, using local storage only');
        isOnline = false;
        syncStatus = 'offline';
    }
}

// Function to disable debugging
function disableDebugging() {
    // Disable console methods
    const noop = function() {};
    const methods = ['log', 'info', 'warn', 'error', 'debug', 'trace', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'clear', 'profile', 'profileEnd'];
    
    methods.forEach(method => {
        console[method] = noop;
    });
    
    // Disable debugger statement
    setInterval(() => {
        debugger;
    }, 100);
    
    // Disable eval
    window.eval = function() {
        return false;
    };
    
    // Disable Function constructor
    window.Function = function() {
        return function() {};
    };
}

// Simpan nama dan lokasi saat form disubmit
document.getElementById('player-form').addEventListener('submit', () => {
    const name = document.getElementById('player-name').value.trim();
    const location = document.getElementById('player-location').value.trim();
    
    if (name) localStorage.setItem('brainQuizPlayerName', name);
    if (location) localStorage.setItem('brainQuizPlayerLocation', location);
});

// Fungsi untuk mendapatkan lokasi saat ini
function getCurrentLocation() {
    const locationBtn = document.getElementById('get-location-btn');
    const locationStatus = document.getElementById('location-status');
    const locationInput = document.getElementById('player-location');
    
    // Disable tombol dan tampilkan loading
    locationBtn.disabled = true;
    locationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    locationStatus.textContent = 'Mendeteksi lokasi...';
    locationStatus.className = 'location-status loading';
    
    // Cek apakah browser mendukung geolocation
    if (!navigator.geolocation) {
        showLocationError('Browser Anda tidak mendukung deteksi lokasi');
        return;
    }
    
    // Dapatkan lokasi
    navigator.geolocation.getCurrentPosition(
        // Success callback
        async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                const location = await reverseGeocode(latitude, longitude);
                
                if (location) {
                    locationInput.value = location;
                    locationStatus.textContent = 'Lokasi berhasil dideteksi!';
                    locationStatus.className = 'location-status success';
                    
                    // Simpan ke localStorage
                    localStorage.setItem('brainQuizPlayerLocation', location);
                } else {
                    showLocationError('Tidak dapat menentukan lokasi');
                }
            } catch (error) {
                showLocationError('Gagal mendapatkan informasi lokasi');
            }
        },
        // Error callback
        (error) => {
            let errorMessage = 'Gagal mendeteksi lokasi';
            
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Izin lokasi ditolak. Silakan izinkan akses lokasi di browser Anda.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Informasi lokasi tidak tersedia';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Waktu deteksi lokasi habis';
                    break;
            }
            
            showLocationError(errorMessage);
        },
        // Options
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        }
    );
}

// Fungsi untuk reverse geocoding menggunakan Nominatim API
async function reverseGeocode(latitude, longitude) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&accept-language=id`
        );
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.address) {
            const address = data.address;
            let location = '';
            
            // Coba dapatkan kota dan provinsi
            if (address.city) {
                location = address.city;
            } else if (address.town) {
                location = address.town;
            } else if (address.village) {
                location = address.village;
            } else if (address.county) {
                location = address.county;
            }
            
            if (address.state) {
                location += location ? `, ${address.state}` : address.state;
            } else if (address.province) {
                location += location ? `, ${address.province}` : address.province;
            }
            
            // Jika masih kosong, gunakan nama tempat
            if (!location && address.name) {
                location = address.name;
            }
            
            return location || 'Lokasi tidak diketahui';
        }
        
        return null;
    } catch (error) {
        console.error('Error in reverse geocoding:', error);
        return null;
    }
}

// Fungsi untuk menampilkan error lokasi
function showLocationError(message) {
    const locationBtn = document.getElementById('get-location-btn');
    const locationStatus = document.getElementById('location-status');
    
    locationBtn.disabled = false;
    locationBtn.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
    locationStatus.textContent = message;
    locationStatus.className = 'location-status error';
    
    // Reset status setelah 5 detik
    setTimeout(() => {
        locationStatus.textContent = '';
        locationStatus.className = 'location-status';
    }, 5000);
} 