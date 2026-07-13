// ===== MOCK DATA ===== 
const mockJobs = [
    {
        id: 1,
        title: "Senior Java Developer",
        company: "Tech Corp",
        location: "Bangalore",
        salary: "12-18",
        description: "Looking for experienced Java developer with 5+ years experience",
        tags: ["Java", "Spring Boot", "Microservices"],
        requirements: "Java, Spring Boot, Microservices Architecture"
    },
    {
        id: 2,
        title: "Junior Python Developer",
        company: "Web Solutions",
        location: "Remote",
        salary: "5-8",
        description: "Fresher friendly role to learn and grow",
        tags: ["Python", "Django", "REST API"],
        requirements: "Python, Django, Basic REST API knowledge"
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Design Studio",
        location: "Mumbai",
        salary: "8-12",
        description: "Create beautiful and user-friendly interfaces",
        tags: ["Figma", "UI Design", "UX"],
        requirements: "Figma, Prototyping, User Research"
    },
    {
        id: 4,
        title: "QA Engineer",
        company: "Quality Assurance Inc",
        location: "Hyderabad",
        salary: "6-10",
        description: "Ensure quality of software products",
        tags: ["Testing", "Automation", "Selenium"],
        requirements: "Manual Testing, Selenium, Test Planning"
    }
];

const mockExams = [
    {
        id: 1,
        title: "Java Basics",
        category: "fresher",
        duration: 60,
        questions: 50,
        difficulty: "easy",
        description: "Learn Java fundamentals"
    },
    {
        id: 2,
        title: "Data Structures & Algorithms",
        category: "technical",
        duration: 120,
        questions: 100,
        difficulty: "hard",
        description: "Advanced DSA concepts"
    },
    {
        id: 3,
        title: "Aptitude Test",
        category: "aptitude",
        duration: 90,
        questions: 75,
        difficulty: "medium",
        description: "Logical reasoning and quantitative aptitude"
    },
    {
        id: 4,
        title: "Interview Preparation",
        category: "interview",
        duration: 45,
        questions: 30,
        difficulty: "medium",
        description: "Common interview questions"
    }
];

const mockScores = [
    {
        id: 1,
        examName: "Java Basics",
        score: 85,
        totalScore: 100,
        date: "2024-07-09",
        status: "Passed",
        duration: "45 minutes"
    },
    {
        id: 2,
        examName: "Aptitude Test",
        score: 72,
        totalScore: 100,
        date: "2024-07-08",
        status: "Passed",
        duration: "85 minutes"
    },
    {
        id: 3,
        examName: "Data Structures & Algorithms",
        score: 60,
        totalScore: 100,
        date: "2024-07-07",
        status: "Failed",
        duration: "120 minutes"
    }
];

// ===== LOGIN FUNCTIONALITY ===== 
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', email.split('@')[0]);
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        });
    }
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name);
            alert('Account created successfully!');
            window.location.href = 'dashboard.html';
        });
    }
    
    // Load dashboard content
    loadDashboard();
    loadJobs();
    loadExams();
    loadScorecards();
});

// ===== SOCIAL LOGIN ===== 
function loginWithLinkedIn() {
    alert('LinkedIn login integration would be implemented here');
    localStorage.setItem('userEmail', 'user@linkedin.com');
    localStorage.setItem('userName', 'LinkedIn User');
    window.location.href = 'dashboard.html';
}

function loginWithFacebook() {
    alert('Facebook login integration would be implemented here');
    localStorage.setItem('userEmail', 'user@facebook.com');
    localStorage.setItem('userName', 'Facebook User');
    window.location.href = 'dashboard.html';
}

function loginWithTwitter() {
    alert('Twitter login integration would be implemented here');
    localStorage.setItem('userEmail', 'user@twitter.com');
    localStorage.setItem('userName', 'Twitter User');
    window.location.href = 'dashboard.html';
}

function loginWithInstagram() {
    alert('Instagram login integration would be implemented here');
    localStorage.setItem('userEmail', 'user@instagram.com');
    localStorage.setItem('userName', 'Instagram User');
    window.location.href = 'dashboard.html';
}

// ===== LOGOUT ===== 
function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    alert('Logged out successfully!');
}

// ===== DASHBOARD FUNCTIONS ===== 
function loadDashboard() {
    const userName = localStorage.getItem('userName') || 'User';
    const userNameElements = document.querySelectorAll('#userName');
    userNameElements.forEach(el => {
        el.textContent = 'Welcome, ' + userName;
    });
}

// ===== PROFILE FUNCTIONS ===== 
const profileForm = document.getElementById('profileForm');
if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Profile saved successfully!');
        // Save to localStorage
        const formData = new FormData(this);
        for (let [key, value] of formData.entries()) {
            localStorage.setItem('profile_' + key, value);
        }
    });
}

// Photo upload
const photoInput = document.getElementById('photoInput');
if (photoInput) {
    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('profilePhoto').src = event.target.result;
                localStorage.setItem('profilePhoto', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

// ===== JOBS FUNCTIONS ===== 
function loadJobs() {
    const container = document.getElementById('jobsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    mockJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p class="job-company">${job.company}</p>
            <p class="job-location">📍 ${job.location}</p>
            <p class="job-salary">₹${job.salary} LPA</p>
            <p class="job-description">${job.description}</p>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="btn btn-small" onclick="viewJobDetails(${job.id})">View Details</button>
        `;
        container.appendChild(jobCard);
    });
}

function viewJobDetails(jobId) {
    const job = mockJobs.find(j => j.id === jobId);
    const modal = document.getElementById('jobModal');
    const jobDetails = document.getElementById('jobDetails');
    
    if (modal && jobDetails) {
        jobDetails.innerHTML = `
            <h2>${job.title}</h2>
            <p class="job-company">${job.company}</p>
            <p class="job-location">📍 ${job.location}</p>
            <p class="job-salary">₹${job.salary} LPA</p>
            <h3>Job Description</h3>
            <p>${job.description}</p>
            <h3>Requirements</h3>
            <p>${job.requirements}</p>
            <h3>Skills Required</h3>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        modal.style.display = 'block';
        localStorage.setItem('selectedJob', JSON.stringify(job));
    }
}

function closeJobModal() {
    document.getElementById('jobModal').style.display = 'none';
}

function filterJobs() {
    alert('Jobs filtered! (Filter functionality would be fully implemented)');
}

function applyForJob() {
    alert('Redirecting to application form...');
    window.location.href = 'apply.html';
}

// ===== MOCK EXAM FUNCTIONS ===== 
function loadExams() {
    const container = document.getElementById('examsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    mockExams.forEach(exam => {
        const examCard = document.createElement('div');
        examCard.className = 'exam-card';
        const difficultyClass = 'difficulty-' + exam.difficulty;
        examCard.innerHTML = `
            <h3>${exam.title}</h3>
            <p class="exam-duration">⏱️ ${exam.duration} minutes</p>
            <p class="exam-questions">📝 ${exam.questions} questions</p>
            <span class="exam-difficulty ${difficultyClass}">${exam.difficulty.toUpperCase()}</span>
            <p>${exam.description}</p>
            <button class="btn btn-small" onclick="startExam(${exam.id})">Start Exam</button>
        `;
        container.appendChild(examCard);
    });
}

function filterExams(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const container = document.getElementById('examsContainer');
    container.innerHTML = '';
    
    const filtered = category === 'all' ? mockExams : mockExams.filter(e => e.category === category);
    
    filtered.forEach(exam => {
        const examCard = document.createElement('div');
        examCard.className = 'exam-card';
        const difficultyClass = 'difficulty-' + exam.difficulty;
        examCard.innerHTML = `
            <h3>${exam.title}</h3>
            <p class="exam-duration">⏱️ ${exam.duration} minutes</p>
            <p class="exam-questions">📝 ${exam.questions} questions</p>
            <span class="exam-difficulty ${difficultyClass}">${exam.difficulty.toUpperCase()}</span>
            <p>${exam.description}</p>
            <button class="btn btn-small" onclick="startExam(${exam.id})">Start Exam</button>
        `;
        container.appendChild(examCard);
    });
}

function startExam(examId) {
    const exam = mockExams.find(e => e.id === examId);
    localStorage.setItem('currentExam', JSON.stringify(exam));
    alert(`Starting exam: ${exam.title}\n\nDuration: ${exam.duration} minutes\nQuestions: ${exam.questions}\n\n(Full exam interface would be implemented here)`);
}

function closeExamModal() {
    document.getElementById('examModal').style.display = 'none';
}

// ===== SCORECARD FUNCTIONS ===== 
function loadScorecards() {
    const container = document.getElementById('scorecardsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    mockScores.forEach(score => {
        const scorecard = document.createElement('div');
        scorecard.className = 'scorecard';
        const statusClass = score.status === 'Passed' ? 'status-passed' : 'status-failed';
        const percentage = Math.round((score.score / score.totalScore) * 100);
        scorecard.innerHTML = `
            <h3>${score.examName}</h3>
            <div class="score-value">${score.score}/${score.totalScore}</div>
            <div class="score-percentage">${percentage}%</div>
            <span class="score-status ${statusClass}">${score.status}</span>
            <p class="score-date">📅 ${score.date}</p>
            <p class="score-duration">⏱️ ${score.duration}</p>
            <button class="btn btn-small" onclick="viewScoreDetails(${score.id})">View Details</button>
        `;
        container.appendChild(scorecard);
    });
}

function viewScoreDetails(scoreId) {
    const score = mockScores.find(s => s.id === scoreId);
    const modal = document.getElementById('scoreModal');
    const scoreDetails = document.getElementById('scoreDetails');
    
    if (modal && scoreDetails) {
        const percentage = Math.round((score.score / score.totalScore) * 100);
        scoreDetails.innerHTML = `
            <h2>${score.examName}</h2>
            <div style="text-align: center; margin: 20px 0;">
                <div style="font-size: 48px; color: #667eea; font-weight: bold;">${score.score}</div>
                <div style="font-size: 24px; color: #999;">${percentage}%</div>
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Status:</strong> ${score.status}</p>
                <p><strong>Date:</strong> ${score.date}</p>
                <p><strong>Duration:</strong> ${score.duration}</p>
                <p><strong>Total Questions:</strong> 100</p>
                <p><strong>Correct Answers:</strong> ${Math.round((score.score / 100) * 100)}</p>
            </div>
            <h3>Performance Analysis</h3>
            <p>You scored ${percentage}% in this exam. Keep practicing to improve your score!</p>
        `;
        modal.style.display = 'block';
    }
}

function closeScoreModal() {
    document.getElementById('scoreModal').style.display = 'none';
}

function downloadScorecard() {
    alert('Scorecard download initiated. (PDF generation would be implemented here)');
}

// ===== APPLICATION FORM ===== 
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Application submitted successfully!');
        // Reset form
        this.reset();
        // Redirect after submission
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    });
}

// File upload handlers
const resumeInput = document.getElementById('resume');
if (resumeInput) {
    resumeInput.addEventListener('change', function(e) {
        const fileName = e.target.files[0]?.name || 'No file selected';
        const resumeStatus = document.getElementById('resumeStatus');
        if (resumeStatus) {
            resumeStatus.textContent = fileName;
        }
    });
}

const photoInput2 = document.getElementById('photo');
if (photoInput2) {
    photoInput2.addEventListener('change', function(e) {
        const fileName = e.target.files[0]?.name || 'No file selected';
        const photoStatus = document.getElementById('photoStatus');
        if (photoStatus) {
            photoStatus.textContent = fileName;
        }
    });
}

// ===== MODAL CLOSE ON OUTSIDE CLICK ===== 
window.addEventListener('click', function(event) {
    const jobModal = document.getElementById('jobModal');
    const examModal = document.getElementById('examModal');
    const scoreModal = document.getElementById('scoreModal');
    
    if (event.target === jobModal) jobModal.style.display = 'none';
    if (event.target === examModal) examModal.style.display = 'none';
    if (event.target === scoreModal) scoreModal.style.display = 'none';
});

// ===== SALARY SLIDER ===== 
const salaryFilter = document.getElementById('salaryFilter');
if (salaryFilter) {
    salaryFilter.addEventListener('input', function() {
        document.getElementById('salaryValue').textContent = 'Upto ' + this.value + ' LPA';
    });
}