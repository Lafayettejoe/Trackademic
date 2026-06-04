/* ===== NIGERIAN UNIVERSITIES ===== */
const NIGERIAN_UNIVERSITIES = [
  'University of Ibadan, Ibadan',
  'University of Lagos, Lagos',
  'Ahmadu Bello University, Zaria',
  'University of Nigeria, Nsukka',
  'Obafemi Awolowo University, Ile-Ife',
  'University of Benin, Benin City',
  'University of Ilorin, Ilorin',
  'University of Jos, Jos',
  'University of Calabar, Calabar',
  'University of Maiduguri, Maiduguri',
  'University of Port Harcourt, Port Harcourt',
  'University of Uyo, Uyo',
  'Nnamdi Azikiwe University, Awka',
  'Bayero University, Kano',
  'Lagos State University, Ojo',
  'Federal University of Technology, Akure',
  'Federal University of Technology, Owerri',
  'Federal University of Technology, Minna',
  'Federal University of Agriculture, Abeokuta',
  'Federal University of Petroleum Resources, Effurun',
  'Alex Ekwueme Federal University, Ndufu-Alike',
  'Federal University, Dutsin-Ma',
  'Federal University, Dutse',
  'Federal University, Gashua',
  'Federal University, Gusau',
  'Federal University, Kashere',
  'Federal University, Lafia',
  'Federal University, Lokoja',
  'Federal University, Oye-Ekiti',
  'Federal University, Wukari',
  'Federal University, Birnin Kebbi',
  'National Open University of Nigeria, Lagos',
  'Nigerian Defence Academy, Kaduna',
  'Olabisi Onabanjo University, Ago-Iwoye',
  'Adekunle Ajasin University, Akungba-Akoko',
  'Ekiti State University, Ado-Ekiti',
  'Tai Solarin University of Education, Ijebu-Ode',
  'Rivers State University, Port Harcourt',
  'Delta State University, Abraka',
  'Ambrose Alli University, Ekpoma',
  'Enugu State University of Science and Technology, Enugu',
  'Imo State University, Owerri',
  'Abia State University, Uturu',
  'Chukwuemeka Odumegwu Ojukwu University, Uli',
  'Akwa Ibom State University, Ikot-Akpaden',
  'Cross River University of Technology, Calabar',
  'Benue State University, Makurdi',
  'Niger Delta University, Yenagoa',
  'Adamawa State University, Mubi',
  'Gombe State University, Gombe',
  'Kogi State University, Anyigba',
  'Kaduna State University, Kaduna',
  'Nasarawa State University, Keffi',
  'Plateau State University, Bokkos',
  'Sokoto State University, Sokoto',
  'Taraba State University, Jalingo',
  'Umaru Musa Yar\'Adua University, Katsina',
  'Yobe State University, Damaturu',
  'Zamfara State University, Talata-Mafara',
  'Kwara State University, Malete',
  'Ondo State University of Science and Technology, Okitipupa',
  'Borno State University, Maiduguri',
  'Osun State University, Osogbo',
  'Ibrahim Badamasi Babangida University, Lapai',
  'Sule Lamido University, Kafin Hausa',
  'Babcock University, Ilishan-Remo',
  'Covenant University, Ota',
  'Bowen University, Iwo',
  'Pan-Atlantic University, Lagos',
  'American University of Nigeria, Yola',
  'Afe Babalola University, Ado-Ekiti',
  'Benson Idahosa University, Benin City',
  'Madonna University, Okija',
  'Redeemer\'s University, Ede',
  'Crescent University, Abeokuta',
  'Baze University, Abuja',
  'Nile University, Abuja',
  'Elizade University, Ilara-Mokin',
  'Landmark University, Omu-Aran',
  'Lead City University, Ibadan',
  'Ajayi Crowther University, Oyo',
  'Joseph Ayo Babalola University, Ikeji-Arakeji',
  'Wellspring University, Benin City',
  'Caritas University, Enugu',
  'Paul University, Awka',
  'Edwin Clark University, Kiagbodo',
  'Tansian University, Umunya',
  'Veritas University, Abuja',
  'Al-Hikmah University, Ilorin',
  'Oduduwa University, Ile-Ife',
  'Western Delta University, Oghara',
  'Mountain Top University, Magboro',
  'McPherson University, Ijebu-Ode',
  'Chrisland University, Abeokuta',
  'Ritman University, Ikot-Ekpene',
  'Hallmark University, Ijebu-Itele',
  'Kings University, Ode-Omu',
  'Trinity University, Lagos',
  'Novena University, Ogume',
  'Coal City University, Enugu',
  'Precious Cornerstone University, Ibadan',
  'Dominion University, Ibadan',
  'Anchor University, Lagos',
  'Arthur Jarvis University, Akpabuyo',
  'Clifford University, Owerrinta',
  'Dominican University, Ibadan',
  'Topfaith University, Mkpatak',
  'Southwestern University, Ogun',
  'Spiritan University, Nneochi',
  'Summit University, Offa',
  'Hezekiah University, Umudi',
  'Skyline University, Kano',
  'Thomas Adewumi University, Oko-Irese',
];

const DEPARTMENTS = [
  'Computer Science',
  'Medicine and Surgery',
  'Pharmacy',
  'Nursing Science',
  'Medical Laboratory Science',
  'Physiology',
  'Anatomy',
  'Dentistry',
  'Veterinary Medicine',
  'Law',
  'Accounting',
  'Business Administration',
  'Economics',
  'Mass Communication',
  'Political Science',
  'Psychology',
  'Sociology',
  'Public Administration',
  'Banking and Finance',
  'Marketing',
  'Civil Engineering',
  'Mechanical Engineering',
  'Electrical / Electronics Engineering',
  'Chemical Engineering',
  'Computer Engineering',
  'Agricultural Engineering',
  'Petroleum Engineering',
  'Biomedical Engineering',
  'Architecture',
  'Quantity Surveying',
  'Estate Management',
  'Building Technology',
  'Surveying and Geoinformatics',
  'Urban and Regional Planning',
  'Biochemistry',
  'Microbiology',
  'Biotechnology',
  'Zoology',
  'Botany',
  'Environmental Biology',
  'Chemistry',
  'Physics',
  'Mathematics',
  'Statistics',
  'Geology',
  'Geophysics',
  'Metallurgical and Materials Engineering',
  'Food Science and Technology',
  'Nutrition and Dietetics',
  'Home Economics',
  'English Language',
  'History and International Studies',
  'Linguistics',
  'Philosophy',
  'Religious Studies',
  'Theatre Arts',
  'Fine and Applied Arts',
  'Music',
  'Library and Information Science',
  'French',
  'Arabic and Islamic Studies',
  'Education (various specialisations)',
  'Agricultural Science',
  'Fisheries and Aquaculture',
  'Forestry and Wildlife Management',
  'Animal Science',
  'Crop Science',
  'Soil Science',
  'Agricultural Extension',
];

const SEMESTERS = [
  '100L S1', '100L S2', '200L S1', '200L S2',
  '300L S1', '300L S2', '400L S1', '400L S2',
];

const GRADE_MAP = [
  { min: 70, max: 100, letter: 'A', point: 5 },
  { min: 60, max: 69, letter: 'B', point: 4 },
  { min: 50, max: 59, letter: 'C', point: 3 },
  { min: 45, max: 49, letter: 'D', point: 2 },
  { min: 40, max: 44, letter: 'E', point: 1 },
  { min: 0,  max: 39, letter: 'F', point: 0 },
];

const STORAGE_KEY = 'trackademic-data';

/* ===== GRADING LOGIC ===== */
function getGrade(score) {
  const clamped = Math.round(score);
  return GRADE_MAP.find(g => clamped >= g.min && clamped <= g.max);
}

function calcQualityPoints(course) {
  const grade = getGrade(course.score);
  return grade.point * course.creditUnits;
}

function calcGPA(courses) {
  if (!courses || courses.length === 0) return null;
  const totalQP = courses.reduce((sum, c) => sum + calcQualityPoints(c), 0);
  const totalCU = courses.reduce((sum, c) => sum + c.creditUnits, 0);
  if (totalCU === 0) return null;
  return totalQP / totalCU;
}

function calcCGPA(semesters) {
  const allCourses = Object.values(semesters).flat();
  if (allCourses.length === 0) return null;
  const totalQP = allCourses.reduce((sum, c) => sum + calcQualityPoints(c), 0);
  const totalCU = allCourses.reduce((sum, c) => sum + c.creditUnits, 0);
  if (totalCU === 0) return null;
  return totalQP / totalCU;
}

function getDegreeClass(cgpa) {
  if (cgpa === null || cgpa === undefined) return null;
  if (cgpa >= 4.50) return { label: 'First Class', color: 'green' };
  if (cgpa >= 3.50) return { label: '2nd Class Upper', color: 'blue' };
  if (cgpa >= 2.40) return { label: '2nd Class Lower', color: 'yellow' };
  if (cgpa >= 1.50) return { label: 'Third Class', color: 'orange' };
  if (cgpa >= 1.00) return { label: 'Pass', color: 'gray' };
  return { label: 'Fail', color: 'red' };
}

function getProgressBarColor(cgpa) {
  if (cgpa === null || cgpa === undefined) return 'var(--slate-600)';
  if (cgpa >= 4.50) return 'var(--success)';
  if (cgpa >= 3.50) return 'var(--primary)';
  if (cgpa >= 2.40) return 'var(--warning)';
  return 'var(--danger)';
}

function formatGPA(value) {
  if (value === null || value === undefined) return '\u2014';
  return value.toFixed(2);
}

/* ===== STATE ===== */
function createInitialSemesters() {
  const obj = {};
  SEMESTERS.forEach(s => { obj[s] = []; });
  return obj;
}

const DEFAULT_STATE = {
  page: 'landing',
  dashboardPage: 'overview',
  user: null,
  school: null,
  department: null,
  semesters: createInitialSemesters(),
  activeSemester: '100L S1',
};

let state = { ...DEFAULT_STATE };

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/* ===== LOCAL STORAGE ===== */
function saveState() {
  try {
    const data = {
      user: state.user,
      school: state.school,
      department: state.department,
      semesters: state.semesters,
      activeSemester: state.activeSemester,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.user = parsed.user || null;
      state.school = parsed.school || null;
      state.department = parsed.department || null;
      state.semesters = parsed.semesters || createInitialSemesters();
      state.activeSemester = parsed.activeSemester || '100L S1';
    }
  } catch {}
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
  state = { ...DEFAULT_STATE, semesters: createInitialSemesters() };
}

/* ===== ROUTER ===== */
function navigate(page) {
  state.page = page;
  renderPage();
}

function navigateDashboard(dashPage) {
  state.dashboardPage = dashPage;
  renderPage();
}

/* ===== DOM REF ===== */
const $ = id => document.getElementById(id);
const app = $('app');

/* ===== SVG ICONS ===== */
const ICONS = {
  dashboard: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>',
  courses: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  logout: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  trendingUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  target: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  print: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  school: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
};

/* ===== LANDING PAGE ===== */
function renderLanding() {
  app.innerHTML = `
    <div class="landing">
      <section class="hero">
        <div class="hero-grid"></div>
        <div class="hero-content">
          <div class="hero-badge">${ICONS.school} <span>NUC 5-Point Grading Scale</span></div>
          <h1>Know Your <span>Numbers</span>. Own Your Results.</h1>
          <p class="hero-sub">Track your GPA, CGPA, and degree class across all semesters. Built for Nigerian students, using the NUC 5-point grading system.</p>
          <div class="hero-actions">
            <button class="btn-primary" onclick="navigate('signup')">${ICONS.arrowRight} Get Started Free</button>
            <button class="btn-ghost" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">Learn More</button>
          </div>
          <div class="hero-stats-row">
            <div class="hero-stat">
              <div class="hero-stat-num">100+</div>
              <div class="hero-stat-label">Nigerian Universities</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">8</div>
              <div class="hero-stat-label">Semesters Tracked</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">5.0</div>
              <div class="hero-stat-label">Max GPA Scale</div>
            </div>
          </div>
        </div>
        <div class="scroll-indicator">${ICONS.chevronDown}</div>
      </section>

      <section class="section" id="features">
        <div class="features-header">
          <p class="section-label">Features</p>
          <h2 class="section-title">Everything you need to ace your grades</h2>
          <p class="section-desc">Trackademic simplifies grade tracking so you can focus on what matters — your studies.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">${ICONS.trendingUp}</div>
            <h3>Visual Dashboard</h3>
            <p>See your GPA, CGPA, and progress toward your target degree class at a glance with beautiful charts and stats.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">${ICONS.book}</div>
            <h3>Semester-by-Semester</h3>
            <p>Track courses across all 8 semesters from 100L to 400L. No more messy spreadsheets.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">${ICONS.target}</div>
            <h3>Grade Goals</h3>
            <p>Know exactly how far you are from First Class and what it takes to get there.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">${ICONS.award}</div>
            <h3>Degree Classification</h3>
            <p>Automatic degree class calculation using the NUC 5-point scale — First Class to Pass.</p>
          </div>
        </div>
      </section>

      <section class="section how-section">
        <div class="how-header">
          <p class="section-label">How It Works</p>
          <h2 class="section-title">Start tracking in minutes</h2>
          <p class="section-desc">Three simple steps to take control of your academic performance.</p>
        </div>
        <div class="how-steps">
          <div class="how-step">
            <div class="how-step-num">1</div>
            <h3>Create Your Account</h3>
            <p>Sign up with your name and email. Tell us your school and department to get started.</p>
          </div>
          <div class="how-step">
            <div class="how-step-num">2</div>
            <h3>Add Your Courses</h3>
            <p>Enter your course name, score, and credit units for each semester. We calculate the rest.</p>
          </div>
          <div class="how-step">
            <div class="how-step-num">3</div>
            <h3>Monitor Your Progress</h3>
            <p>Watch your GPA and CGPA update in real time. See how close you are to your target class.</p>
          </div>
        </div>
      </section>

      <section class="section testimonials-section">
        <div class="testimonials-header">
          <p class="section-label">Testimonials</p>
          <h2 class="section-title">What students are saying</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-stars">\u2605\u2605\u2605\u2605\u2605</div>
            <blockquote>"Finally, a grade tracker built for Nigerian students. The NUC scale is spot on."</blockquote>
            <div class="testimonial-author">— Chidi O.</div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">\u2605\u2605\u2605\u2605\u2605</div>
            <blockquote>"I love that I can see my CGPA across all semesters. It keeps me motivated to push harder."</blockquote>
            <div class="testimonial-author">— Amina B.</div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">\u2605\u2605\u2605\u2605\u2605</div>
            <blockquote>"So much better than manual calculation. Trackademic saves me hours every semester."</blockquote>
            <div class="testimonial-author">— Tunde A.</div>
          </div>
        </div>
      </section>

      <section class="section" style="padding-bottom:0">
        <div class="cta-banner">
          <h2>Ready to take control of your grades?</h2>
          <p>Join thousands of Nigerian students tracking their academic performance.</p>
          <button class="btn-primary" onclick="navigate('signup')">${ICONS.arrowRight} Get Started Free</button>
        </div>
      </section>

      <footer class="landing-footer">
        <div class="footer-brand">Trackademic</div>
        <div class="footer-links">
          <a href="#" onclick="event.preventDefault();navigate('login')">Sign In</a>
          <a href="#" onclick="event.preventDefault();document.getElementById('features').scrollIntoView({behavior:'smooth'})">Features</a>
        </div>
        <div class="footer-copy">&copy; ${new Date().getFullYear()} Trackademic</div>
      </footer>
    </div>
  `;
}

/* ===== AUTH PAGES ===== */
function renderSignup() {
  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-logo">Trackademic</div>
        <h1 class="auth-title">Create your account</h1>
        <p class="auth-sub">Start tracking your grades in minutes</p>
        <form id="signup-form" novalidate>
          <div class="form-group">
            <label for="signup-name">Full Name</label>
            <input id="signup-name" type="text" placeholder="e.g. Chidi Okonkwo" required />
            <p class="form-error" id="error-signup-name"></p>
          </div>
          <div class="form-group">
            <label for="signup-email">Email Address</label>
            <input id="signup-email" type="email" placeholder="you@example.com" required />
            <p class="form-error" id="error-signup-email"></p>
          </div>
          <div class="form-group">
            <label for="signup-password">Password (min. 6 characters)</label>
            <input id="signup-password" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" minlength="6" required />
            <p class="form-error" id="error-signup-password"></p>
          </div>
          <button type="submit" class="btn-submit">Create Account</button>
        </form>
        <p class="auth-switch">Already have an account? <a href="#" onclick="event.preventDefault();navigate('login')">Sign In</a></p>
      </div>
    </div>
  `;
  document.getElementById('signup-form').addEventListener('submit', handleSignup);
  document.getElementById('signup-form').addEventListener('input', handleSignupInput);
}

function renderLogin() {
  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-logo">Trackademic</div>
        <h1 class="auth-title">Welcome back</h1>
        <p class="auth-sub">Sign in to continue tracking your grades</p>
        <form id="login-form" novalidate>
          <div class="form-group">
            <label for="login-email">Email Address</label>
            <input id="login-email" type="email" placeholder="you@example.com" required />
            <p class="form-error" id="error-login-email"></p>
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required />
            <p class="form-error" id="error-login-general" style="text-align:center;font-weight:600"></p>
          </div>
          <button type="submit" class="btn-submit">Sign In</button>
        </form>
        <p class="auth-switch">Don't have an account? <a href="#" onclick="event.preventDefault();navigate('signup')">Create One</a></p>
      </div>
    </div>
  `;
  document.getElementById('login-form').addEventListener('submit', handleLogin);
}

/* ===== ONBOARDING PAGES ===== */
function renderOnboardingSchool() {
  const step = state.user ? 1 : 0;
  app.innerHTML = `
    <div class="onboarding-page">
      <div class="onboarding-card">
        <div class="auth-logo">Trackademic</div>
        <div class="onboarding-progress">
          <div class="dot active"></div>
          <div class="dot"></div>
        </div>
        <h1 class="auth-title">Select your school</h1>
        <p class="auth-sub">Choose your university from the list of Nigerian universities.</p>
        <div class="form-group">
          <label for="school-search">Search for your university</label>
          <div class="searchable-select" id="school-select">
            <input id="school-search" type="text" placeholder="Type to search universities..." autocomplete="off" />
            <div class="dropdown" id="school-dropdown"></div>
          </div>
          <div id="selected-school-display"></div>
          <p class="form-error" id="error-school"></p>
        </div>
        <div class="onboarding-actions">
          <button class="btn-back" onclick="navigate('signup')">Back</button>
          <button class="btn-submit" id="btn-school-next">Continue</button>
        </div>
      </div>
    </div>
  `;
  setupSearchableSelect('school-search', 'school-dropdown', NIGERIAN_UNIVERSITIES, 'selected-school-display');
  document.getElementById('btn-school-next').addEventListener('click', handleSchoolNext);
}

function renderOnboardingDepartment() {
  app.innerHTML = `
    <div class="onboarding-page">
      <div class="onboarding-card">
        <div class="auth-logo">Trackademic</div>
        <div class="onboarding-progress">
          <div class="dot done"></div>
          <div class="dot active"></div>
        </div>
        <h1 class="auth-title">Select your department</h1>
        <p class="auth-sub">Choose your course of study or department.</p>
        <div class="form-group">
          <label for="dept-search">Search for your department</label>
          <div class="searchable-select" id="dept-select">
            <input id="dept-search" type="text" placeholder="Type to search departments..." autocomplete="off" />
            <div class="dropdown" id="dept-dropdown"></div>
          </div>
          <div id="selected-dept-display"></div>
          <p class="form-error" id="error-dept"></p>
        </div>
        <div class="onboarding-actions">
          <button class="btn-back" onclick="navigate('onboarding-school')">Back</button>
          <button class="btn-submit" id="btn-dept-next">Start Tracking</button>
        </div>
      </div>
    </div>
  `;
  setupSearchableSelect('dept-search', 'dept-dropdown', DEPARTMENTS, 'selected-dept-display');
  document.getElementById('btn-dept-next').addEventListener('click', handleDeptNext);
}

/* ===== SEARCHABLE SELECT ===== */
function setupSearchableSelect(inputId, dropdownId, items, displayId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  let selectedValue = '';
  let highlightedIdx = -1;
  let filteredItems = [...items];

  function openDropdown() {
    dropdown.classList.add('open');
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    highlightedIdx = -1;
  }

  function renderDropdown(filter) {
    const q = filter.toLowerCase().trim();
    filteredItems = q ? items.filter(item => item.toLowerCase().includes(q)) : items;
    if (filteredItems.length === 0) {
      dropdown.innerHTML = '<div class="no-results">No results found. Try a different search.</div>';
    } else {
      dropdown.innerHTML = filteredItems.map((item, idx) => {
        const cls = idx === highlightedIdx ? 'dropdown-item highlighted' : 'dropdown-item';
        const sel = item === selectedValue ? ' selected' : '';
        return `<div class="${cls}${sel}" data-value="${item}">${item}</div>`;
      }).join('');
    }
    openDropdown();
  }

  input.addEventListener('input', () => {
    selectedValue = '';
    const display = document.getElementById(displayId);
    if (display) display.innerHTML = '';
    document.getElementById('error-school') && (document.getElementById('error-school').textContent = '');
    document.getElementById('error-dept') && (document.getElementById('error-dept').textContent = '');
    renderDropdown(input.value);
  });

  input.addEventListener('focus', () => {
    renderDropdown(input.value);
  });

  input.addEventListener('blur', () => {
    setTimeout(closeDropdown, 200);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlightedIdx = Math.min(highlightedIdx + 1, filteredItems.length - 1);
      renderDropdown(input.value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlightedIdx = Math.max(highlightedIdx - 1, -1);
      renderDropdown(input.value);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIdx >= 0 && highlightedIdx < filteredItems.length) {
        selectItem(filteredItems[highlightedIdx]);
      }
    }
  });

  dropdown.addEventListener('mousedown', (e) => {
    const item = e.target.closest('.dropdown-item');
    if (item) {
      selectItem(item.dataset.value);
    }
  });

  function selectItem(value) {
    selectedValue = value;
    input.value = value;
    const display = document.getElementById(displayId);
    if (display) {
      display.innerHTML = `<div class="selected-item">${ICONS.check} ${value}</div>`;
    }
    closeDropdown();
    const errInput = inputId === 'school-search' ? 'error-school' : 'error-dept';
    const err = document.getElementById(errInput);
    if (err) err.textContent = '';
  }

  renderDropdown('');
}

/* ===== AUTH HANDLERS ===== */
function handleSignupInput(e) {
  const input = e.target;
  if (input.id === 'signup-name') {
    const err = document.getElementById('error-signup-name');
    if (input.value.trim()) { err.textContent = ''; input.classList.remove('input-error'); }
  }
  if (input.id === 'signup-email') {
    const err = document.getElementById('error-signup-email');
    if (input.value.includes('@')) { err.textContent = ''; input.classList.remove('input-error'); }
  }
  if (input.id === 'signup-password') {
    const err = document.getElementById('error-signup-password');
    if (input.value.length >= 6) { err.textContent = ''; input.classList.remove('input-error'); }
  }
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  let valid = true;

  const errName = document.getElementById('error-signup-name');
  const errEmail = document.getElementById('error-signup-email');
  const errPass = document.getElementById('error-signup-password');

  if (!name) { errName.textContent = 'Please enter your name'; document.getElementById('signup-name').classList.add('input-error'); valid = false; }
  else { errName.textContent = ''; document.getElementById('signup-name').classList.remove('input-error'); }

  if (!email || !email.includes('@')) { errEmail.textContent = 'Please enter a valid email'; document.getElementById('signup-email').classList.add('input-error'); valid = false; }
  else { errEmail.textContent = ''; document.getElementById('signup-email').classList.remove('input-error'); }

  if (!password || password.length < 6) { errPass.textContent = 'Password must be at least 6 characters'; document.getElementById('signup-password').classList.add('input-error'); valid = false; }
  else { errPass.textContent = ''; document.getElementById('signup-password').classList.remove('input-error'); }

  if (!valid) return;

  state.user = { name, email, password };
  saveState();
  navigate('onboarding-school');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const stored = loadStateRaw();
  const errGeneral = document.getElementById('error-login-general');

  if (!stored || !stored.user) {
    errGeneral.textContent = 'No account found. Please sign up first.';
    return;
  }

  if (email !== stored.user.email) {
    errGeneral.textContent = 'No account found with this email.';
    return;
  }

  if (stored.user.password && password !== stored.user.password) {
    errGeneral.textContent = 'Incorrect password. Try again.';
    return;
  }

  state.user = stored.user;
  state.school = stored.school || null;
  state.department = stored.department || null;
  state.semesters = stored.semesters || createInitialSemesters();
  state.activeSemester = stored.activeSemester || '100L S1';

  if (!state.school || !state.department) {
    navigate('onboarding-school');
  } else {
    navigate('dashboard');
  }
}

function loadStateRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

/* ===== ONBOARDING HANDLERS ===== */
function handleSchoolNext() {
  const input = document.getElementById('school-search');
  const err = document.getElementById('error-school');
  const val = input.value.trim();

  if (!val || !NIGERIAN_UNIVERSITIES.includes(val)) {
    err.textContent = 'Please select a valid university from the list';
    return;
  }

  state.school = val;
  saveState();
  navigate('onboarding-department');
}

function handleDeptNext() {
  const input = document.getElementById('dept-search');
  const err = document.getElementById('error-dept');
  const val = input.value.trim();

  if (!val || !DEPARTMENTS.includes(val)) {
    err.textContent = 'Please select a valid department from the list';
    return;
  }

  state.department = val;
  saveState();
  navigate('dashboard');
}

/* ===== DASHBOARD ===== */
function renderDashboard() {
  const user = state.user || { name: 'Student', email: '' };
  const initial = user.name.charAt(0).toUpperCase();
  const dashPage = state.dashboardPage || 'overview';
  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: ICONS.dashboard },
    { id: 'courses', label: 'CGPA Tracker', icon: ICONS.courses },
    { id: 'settings', label: 'Settings', icon: ICONS.settings },
  ];

  const headerTitles = {
    overview: { title: 'Dashboard', sub: 'Your academic performance at a glance' },
    courses: { title: 'CGPA Tracker', sub: `Track and calculate your CGPA \u2022 ${state.activeSemester}` },
    settings: { title: 'Settings', sub: 'Manage your profile and preferences' },
  };

  const h = headerTitles[dashPage] || headerTitles.overview;

  app.innerHTML = `
    <div class="dashboard-layout">
      <nav class="sidebar">
        <div class="sidebar-brand">
          <a href="#" onclick="event.preventDefault();navigateDashboard('overview')">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#1A56DB"/><text x="16" y="22" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="white">T</text></svg>
            <span>Trackademic</span>
          </a>
        </div>
        <div class="sidebar-nav">
          ${navItems.map(item => `
            <button class="sidebar-nav-item${dashPage === item.id ? ' active' : ''}" onclick="navigateDashboard('${item.id}')">
              ${item.icon}
              <span>${item.label}</span>
            </button>
          `).join('')}
          <div class="sidebar-divider"></div>
          <button class="sidebar-nav-item" onclick="handleLogout()">
            ${ICONS.logout}
            <span>Sign Out</span>
          </button>
        </div>
        <div class="sidebar-footer">
          <button class="sidebar-user" onclick="navigateDashboard('settings')">
            <div class="sidebar-user-avatar">${initial}</div>
            <div class="sidebar-user-info">
              <div class="sidebar-user-name">${user.name}</div>
              <div class="sidebar-user-school">${state.school || 'Set school'}</div>
            </div>
          </button>
        </div>
      </nav>
      <main class="main-content">
        <header class="main-header">
          <div class="main-header-left">
            <h1>${h.title}</h1>
            <p>${h.sub}</p>
          </div>
          <div class="main-header-right">
            ${state.school ? `<span class="school-badge">${ICONS.school} ${state.school.split(',')[0]}</span>` : ''}
          </div>
        </header>
        <div class="main-body" id="dashboard-body">
          ${dashPage === 'overview' ? renderOverview() : ''}
          ${dashPage === 'courses' ? renderGradeTrackerShell() : ''}
          ${dashPage === 'settings' ? renderSettings() : ''}
        </div>
      </main>
    </div>
  `;

  if (dashPage === 'courses') {
    initCoursesPage();
  }
  if (dashPage === 'settings') {
    initSettingsPage();
  }
}

/* ===== GPA TREND HELPERS ===== */
function getSemesterGPA(sem) {
  const courses = state.semesters[sem] || [];
  if (!courses.length) return null;
  const totalQP = courses.reduce((sum, c) => sum + calcQualityPoints(c), 0);
  const totalCU = courses.reduce((sum, c) => sum + c.creditUnits, 0);
  return totalCU > 0 ? totalQP / totalCU : null;
}

function getGradeDistribution(courses) {
  const dist = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  courses.forEach(c => {
    const grade = getGrade(c.score);
    if (grade) dist[grade.letter]++;
  });
  return dist;
}

function getAchievements() {
  const allCourses = Object.values(state.semesters).flat();
  const cgpa = calcCGPA(state.semesters);
  const degree = getDegreeClass(cgpa);
  const items = [];
  if (allCourses.length === 0) return items;
  if (cgpa !== null && cgpa >= 4.50) items.push({ icon: '\uD83C\uDFC6', label: 'First Class Star', desc: 'Outstanding academic performance!' });
  if (allCourses.length >= 30) items.push({ icon: '\uD83D\uDCAA', label: 'Course Crusher', desc: `You've tracked ${allCourses.length} courses!` });
  else if (allCourses.length >= 10) items.push({ icon: '\uD83D\uDCAA', label: 'Getting Serious', desc: `${allCourses.length} courses tracked and counting!` });
  const tracked = SEMESTERS.filter(s => (state.semesters[s] || []).length > 0).length;
  if (tracked >= 6) items.push({ icon: '\uD83D\uDCC8', label: 'Consistency King', desc: `Active across ${tracked} semesters!` });
  else if (tracked >= 3) items.push({ icon: '\uD83D\uDCC8', label: 'On a Roll', desc: `${tracked} semesters with courses!` });
  if (allCourses.length > 0 && cgpa !== null && cgpa < 4.50) items.push({ icon: '\uD83D\uDE80', label: 'On the Rise', desc: 'Every course is a step closer to First Class!' });
  if (degree && degree.label === 'First Class') items.push({ icon: '\uD83C\uDF1F', label: 'Top Performer', desc: 'You\u2019re in the highest degree class!' });
  return items;
}

/* ===== OVERVIEW PAGE ===== */
function renderOverview() {
  const allCourses = Object.values(state.semesters).flat();
  const totalQP = allCourses.reduce((sum, c) => sum + calcQualityPoints(c), 0);
  const totalCU = allCourses.reduce((sum, c) => sum + c.creditUnits, 0);
  const cgpa = totalCU > 0 ? totalQP / totalCU : null;

  const semesterCourses = state.semesters[state.activeSemester] || [];
  const semQP = semesterCourses.reduce((sum, c) => sum + calcQualityPoints(c), 0);
  const semCU = semesterCourses.reduce((sum, c) => sum + c.creditUnits, 0);
  const semGPA = semCU > 0 ? semQP / semCU : null;

  const degree = getDegreeClass(cgpa);
  const barColor = getProgressBarColor(cgpa);
  const barWidth = cgpa !== null ? Math.min((cgpa / 5) * 100, 100) : 0;
  const awayFromFirst = cgpa !== null && cgpa < 4.50 ? (4.50 - cgpa).toFixed(2) : null;

  const totalCoursesAll = allCourses.length;
  const totalCoursesSem = semesterCourses.length;

  const dist = getGradeDistribution(allCourses);
  const distTotal = Object.values(dist).reduce((a, b) => a + b, 0);
  const distColors = { A: '#0E9F6E', B: '#1A56DB', C: '#F59E0B', D: '#F97316', E: '#E02424', F: '#991B1B' };
  const distGrad = distTotal > 0 ? Object.entries(dist).filter(([_, v]) => v > 0).map(([k, v]) => `${distColors[k]} ${(v / distTotal) * 100}%`).join(', ') : '';

  const achievements = getAchievements();

  const earnedLabels = { A: '70\u2013100', B: '60\u201369', C: '50\u201359', D: '45\u201349', E: '40\u201344', F: '0\u201339' };

  let quote = '';
  const quotes = [
    '"Success is the sum of small efforts repeated day in and day out." \u2014 Robert Collier',
    '"The beautiful thing about learning is that no one can take it away from you." \u2014 B.B. King',
    '"Your GPA does not define you, but your effort does."',
    '"Education is the most powerful weapon you can use to change the world." \u2014 Nelson Mandela',
    '"Push yourself, because no one else is going to do it for you."',
  ];
  if (allCourses.length > 0) quote = quotes[Math.floor(Math.random() * quotes.length)];

  const semesterGPAs = SEMESTERS.map(sem => {
    const gpa = getSemesterGPA(sem);
    return { sem, gpa, hasData: gpa !== null };
  });
  const maxGPA = Math.max(5, ...semesterGPAs.filter(s => s.hasData).map(s => s.gpa));
  const chartMax = Math.ceil(Math.max(maxGPA, 5));

  return `
    <div class="overview-greeting">
      <h2>Good ${new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 17 ? 'afternoon' : 'evening'}, ${(state.user?.name || 'Student').split(' ')[0]}! <span class="wave-emoji">\uD83D\uDC4B</span></h2>
      <p>${state.school ? state.school.split(',')[0] : ''} ${state.department ? '\u2022 ' + state.department : ''}</p>
    </div>

    <div class="overview-stats">
      <div class="overview-stat-card cgpa-card ${cgpa !== null ? cgpa >= 4.5 ? 'card-first' : cgpa >= 3.5 ? 'card-upper' : cgpa >= 2.4 ? 'card-lower' : '' : ''}">
        <div class="ov-stat-icon">${ICONS.trendingUp}</div>
        <div class="overview-stat-label">CGPA</div>
        <div class="overview-stat-value">${formatGPA(cgpa)}</div>
        <div class="overview-stat-sub">Cumulative</div>
      </div>
      <div class="overview-stat-card">
        <div class="ov-stat-icon" style="color:var(--primary)">${ICONS.book}</div>
        <div class="overview-stat-label">Semester GPA</div>
        <div class="overview-stat-value">${formatGPA(semGPA)}</div>
        <div class="overview-stat-sub">${state.activeSemester}</div>
      </div>
      <div class="overview-stat-card">
        <div class="ov-stat-icon" style="color:${degree ? degree.color === 'green' ? 'var(--success)' : degree.color === 'blue' ? 'var(--primary)' : degree.color === 'yellow' ? 'var(--warning)' : 'var(--danger)' : 'var(--slate-400)'}">${ICONS.award}</div>
        <div class="overview-stat-label">Degree Class</div>
        <div class="overview-stat-value" style="font-size:1.2rem">${degree ? degree.label : '\u2014'}</div>
        <div class="overview-stat-sub">${degree ? 'NUC 5-Point Scale' : 'Add courses to begin'}</div>
      </div>
      <div class="overview-stat-card">
        <div class="ov-stat-icon" style="color:var(--success)">${ICONS.target}</div>
        <div class="overview-stat-label">Courses Tracked</div>
        <div class="overview-stat-value">${totalCoursesAll}</div>
        <div class="overview-stat-sub">${totalCoursesSem} in ${state.activeSemester}</div>
      </div>
    </div>

    <div class="info-card progress-card">
      <div class="info-card-title">${ICONS.target} Progress to First Class</div>
      <div class="progress-section">
        <div class="progress-bar-track" style="background:var(--slate-100);height:12px;border-radius:999px">
          <div class="progress-bar-fill" style="width:${barWidth}%;height:12px;background:${barColor};border-radius:999px;transition:width 0.8s cubic-bezier(0.22,1,0.36,1),background 0.4s"></div>
        </div>
        <div class="progress-labels" style="margin-top:0.35rem">
          <span style="font-size:0.7rem;color:var(--slate-400)">0.00 \u2014 Fail</span>
          <span style="font-size:0.7rem;color:var(--slate-400)">1.00 \u2014 Pass</span>
          <span style="font-size:0.7rem;color:var(--slate-400)">2.40 \u2014 2nd Class Lower</span>
          <span style="font-size:0.7rem;color:var(--slate-400)">3.50 \u2014 2nd Class Upper</span>
          <span style="font-size:0.7rem;color:var(--slate-400)">4.50 \u2014 First Class</span>
          <span style="font-size:0.7rem;color:var(--slate-400)">5.00</span>
        </div>
      </div>
      ${awayFromFirst ? `<p class="progress-msg">\uD83D\uDE80 You're <strong>${awayFromFirst}</strong> away from First Class \u2014 keep pushing!</p>` : ''}
      ${cgpa !== null && cgpa >= 4.50 ? `<p class="progress-msg success-msg">\uD83C\uDFC6 You're on First Class \u2014 maintain the momentum!</p>` : ''}
      ${!cgpa ? `<p class="progress-msg">\uD83D\uDCDD Add courses in the CGPA Tracker to see your progress.</p>` : ''}
    </div>

    ${distTotal > 0 ? `
    <div class="overview-two-col">
      <div class="info-card chart-card">
        <div class="info-card-title">${ICONS.trendingUp} GPA Trend Across Semesters</div>
        <div class="bar-chart">
          ${semesterGPAs.map(s => `
            <div class="bar-chart-item">
              <div class="bar-chart-bar-wrapper">
                <div class="bar-chart-bar${s.hasData ? '' : ' empty'}" style="${s.hasData ? `height:${(s.gpa / chartMax) * 100}%` : 'height:4px'};${s.hasData ? `background:${getProgressBarColor(s.gpa)}` : ''}" title="${s.sem}: ${formatGPA(s.gpa)}">
                  ${s.hasData ? `<span class="bar-chart-value">${formatGPA(s.gpa)}</span>` : ''}
                </div>
              </div>
              <span class="bar-chart-label">${s.sem.replace('L ', '\u2022')}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="info-card chart-card">
        <div class="info-card-title">\uD83D\uDCCA Grade Distribution</div>
        <div class="grade-dist">
          <div class="dist-pie" style="background:conic-gradient(${distGrad})">
            <div class="dist-pie-center">${distTotal}<br><span>grades</span></div>
          </div>
          <div class="dist-legend">
            ${Object.entries(dist).filter(([_, v]) => v > 0).map(([k, v]) => `
              <div class="dist-legend-item">
                <span class="dist-dot" style="background:${distColors[k]}"></span>
                <span class="dist-label">${k}</span>
                <span class="dist-count">${v}</span>
                <span class="dist-pct">(${Math.round((v / distTotal) * 100)}%)</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    ` : ''}

    <div class="overview-two-col">
      <div class="info-card">
        <div class="info-card-title">${ICONS.book} ${state.activeSemester} Summary</div>
        ${semesterCourses.length === 0 ? '<p style="font-size:0.85rem;color:var(--slate-400);padding:0.5rem 0">No courses added yet. Head to the CGPA Tracker to get started!</p>' : `
          <div class="info-card-row">
            <span class="info-card-row-label">Total Credit Units</span>
            <span class="info-card-row-value">${semCU}</span>
          </div>
          <div class="info-card-row">
            <span class="info-card-row-label">Total Quality Points</span>
            <span class="info-card-row-value">${semQP}</span>
          </div>
          <div class="info-card-row">
            <span class="info-card-row-label">Semester GPA</span>
            <span class="info-card-row-value">${formatGPA(semGPA)}</span>
          </div>
          <div class="info-card-row">
            <span class="info-card-row-label">Courses</span>
            <span class="info-card-row-value">${semesterCourses.length}</span>
          </div>
        `}
      </div>
      <div class="info-card">
        <div class="info-card-title">\uD83C\uDFC6 Achievements</div>
        ${achievements.length === 0 ? '<p style="font-size:0.85rem;color:var(--slate-400);padding:0.5rem 0">Start adding courses to unlock achievements!</p>' : `
          <div class="achievement-grid">
            ${achievements.map(a => `
              <div class="achievement-item">
                <span class="achievement-icon">${a.icon}</span>
                <div class="achievement-info">
                  <div class="achievement-label">${a.label}</div>
                  <div class="achievement-desc">${a.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>

    ${quote ? `<div class="quote-card"><span class="quote-icon">\uD83D\uDCD6</span> ${quote}</div>` : ''}

    <div class="quick-actions-bar">
      <span class="quick-actions-bar-label">Quick Actions</span>
      <div class="quick-actions-bar-btns">
        <button class="qa-btn" onclick="navigateDashboard('courses')">${ICONS.plus} Add Course</button>
        <button class="qa-btn" onclick="navigateDashboard('courses')">${ICONS.courses} CGPA Tracker</button>
        <button class="qa-btn" onclick="window.print()">${ICONS.print} Export PDF</button>
      </div>
    </div>
  `;
}

/* ===== GRADE TRACKER PAGE ===== */
function renderGradeTrackerShell() {
  const allCourses = Object.values(state.semesters).flat();
  const dist = getGradeDistribution(allCourses);
  const distTotal = Object.values(dist).reduce((a, b) => a + b, 0);
  const distColors = { A: '#0E9F6E', B: '#1A56DB', C: '#F59E0B', D: '#F97316', E: '#E02424', F: '#991B1B' };

  let distBarHtml = '';
  if (distTotal > 0) {
    distBarHtml = `
      <div class="gt-dist-bar">
        ${Object.entries(dist).filter(([_, v]) => v > 0).map(([k, v]) => `
          <div class="gt-dist-seg" style="flex:${v};background:${distColors[k]}" title="${k}: ${v} (${Math.round((v / distTotal) * 100)}%)">
            <span>${k}</span>
          </div>
        `).join('')}
        <span class="gt-dist-total">${distTotal} grades</span>
      </div>
    `;
  }

  const activeCourses = state.semesters[state.activeSemester] || [];
  const activeGPA = calcGPA(activeCourses);

  const semGPA = calcGPA(activeCourses);
  const semCU = activeCourses.reduce((s, c) => s + c.creditUnits, 0);
  const semQP = activeCourses.reduce((s, c) => s + calcQualityPoints(c), 0);
  const allGPA = calcCGPA(state.semesters);
  const degree = getDegreeClass(allGPA);

  return `
    <div id="add-course-form"></div>
    <div id="course-table"></div>
    <div id="semester-summary"></div>

    <div class="gt-cards-row gt-cards-row-3">
      <div class="gt-card">
        <div class="gt-card-header">${state.activeSemester} \u2014 At a Glance</div>
        <div class="gt-card-stats">
          <div class="gt-card-stat">
            <span class="gt-card-stat-label">GPA</span>
            <span class="gt-card-stat-val">${formatGPA(semGPA)}</span>
          </div>
          <div class="gt-card-stat">
            <span class="gt-card-stat-label">Courses</span>
            <span class="gt-card-stat-val">${activeCourses.length}</span>
          </div>
          <div class="gt-card-stat">
            <span class="gt-card-stat-label">CU</span>
            <span class="gt-card-stat-val">${semCU}</span>
          </div>
          <div class="gt-card-stat">
            <span class="gt-card-stat-label">QP</span>
            <span class="gt-card-stat-val">${semQP}</span>
          </div>
          <div class="gt-card-stat">
            <span class="gt-card-stat-label">CGPA</span>
            <span class="gt-card-stat-val">${formatGPA(allGPA)}</span>
          </div>
          <div class="gt-card-stat">
            <span class="gt-card-stat-label">Class</span>
            <span class="gt-card-stat-val gt-class-badge" style="${degree ? `color:${degree.color === 'green' ? 'var(--success)' : degree.color === 'blue' ? 'var(--primary)' : degree.color === 'yellow' ? 'var(--warning)' : 'var(--danger)'}` : ''}">${degree ? degree.label : '\u2014'}</span>
          </div>
        </div>
      </div>

      <div class="gt-card">
        <div class="gt-card-header">Grade Distribution</div>
        ${distBarHtml || '<p style="font-size:0.85rem;color:var(--slate-400);padding:0.5rem 0">Add courses to see your grade distribution</p>'}
      </div>

      <div class="gt-card">
        <div class="gt-card-header">What If?</div>
        <p class="gt-whatif-desc">See how a new course would affect your GPA</p>
        <div class="gt-whatif-form">
          <div class="gt-whatif-inline">
            <div class="gt-whatif-field">
              <label>Score</label>
              <input type="number" id="whatif-score" placeholder="0\u2013100" min="0" max="100" />
            </div>
            <div class="gt-whatif-field">
              <label>CU</label>
              <select id="whatif-cu">
                <option value="2">2</option>
                <option value="3" selected>3</option>
                <option value="4">4</option>
              </select>
            </div>
            <button class="gt-whatif-btn" id="whatif-btn">Calculate</button>
          </div>
          <div id="whatif-result" class="gt-whatif-result"></div>
        </div>
      </div>
    </div>

    <div class="gt-cards-row">
      <div class="gt-card gt-card-semesters">
        <div class="gt-card-header">All Semesters</div>
        <div class="gt-sem-grid">
          ${SEMESTERS.map(sem => {
            const gpa = getSemesterGPA(sem);
            const isActive = sem === state.activeSemester;
            return `<button class="gt-sem-btn${isActive ? ' active' : ''}" data-semester="${sem}">
              <span class="gt-sem-label">${sem.replace('L ', 'L\u2022')}</span>
              <span class="gt-sem-gpa">${gpa !== null ? formatGPA(gpa) : '\u2014'}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
    </div>
    <div class="gt-cards-row">
      <div id="stats-header" class="gt-card"></div>
    </div>
  `;
}

let prevSemGPA = null;
let prevCGPA = null;
let animFrame = null;

function animateStat(el, targetValue, prevValue) {
  const start = (prevValue !== null && prevValue !== undefined) ? prevValue : 0;
  const diff = targetValue - start;
  const duration = 400;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = formatGPA(start + diff * progress);
    if (progress < 1) animFrame = requestAnimationFrame(tick);
  }
  if (animFrame) cancelAnimationFrame(animFrame);
  animFrame = requestAnimationFrame(tick);
}

function renderForm() {
  const formEl = document.getElementById('add-course-form');
  if (!formEl) return;
  formEl.innerHTML = `
    <form class="form-card" id="course-form" novalidate>
      <div class="form-row">
        <div class="form-group">
          <label for="course-name">Course Name</label>
          <input id="course-name" type="text" placeholder="e.g. MTH 101" required />
          <p class="form-error" id="error-name"></p>
        </div>
        <div class="form-group">
          <label for="course-score">Score</label>
          <input id="course-score" type="number" placeholder="0\u2013100" min="0" max="100" required />
          <p class="form-error" id="error-score"></p>
        </div>
        <div class="form-group">
          <div class="credit-unit-label">Credit Units</div>
          <div class="credit-unit-group" id="cu-group">
            <button type="button" class="cu-btn" data-cu="2">2</button>
            <button type="button" class="cu-btn active" data-cu="3">3</button>
            <button type="button" class="cu-btn" data-cu="4">4</button>
          </div>
        </div>
        <button type="submit" class="btn-add">
          ${ICONS.plus}
          Add Course
        </button>
      </div>
    </form>
  `;
}

function renderTable() {
  const tableEl = document.getElementById('course-table');
  if (!tableEl) return;
  const courses = state.semesters[state.activeSemester] || [];

  if (!courses || courses.length === 0) {
    tableEl.innerHTML = `
      <div class="table-wrapper" style="border:1px solid var(--slate-200);padding:2.5rem 1.5rem;text-align:center">
        <div class="empty-state-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
        </div>
        <p style="font-size:0.85rem;color:var(--slate-400);margin-top:0.75rem">No courses yet \u2014 add your first course above</p>
      </div>
    `;
    return;
  }

  tableEl.innerHTML = `
    <div class="table-wrapper">
      <table class="course-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Score</th>
            <th>Grade</th>
            <th>CU</th>
            <th>QP</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="table-body">
          ${courses.map((course, idx) => {
            const grade = getGrade(course.score);
            const qp = calcQualityPoints(course);
            return `
              <tr class="course-row" data-id="${course.id}">
                <td>${idx + 1}</td>
                <td>${course.name}</td>
                <td>${course.score}</td>
                <td><span class="grade-pill grade-pill-${grade.letter}">${grade.letter}</span></td>
                <td>${course.creditUnits}</td>
                <td>${qp}</td>
                <td><button class="delete-btn" data-id="${course.id}" aria-label="Delete ${course.name}">\u2715</button></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderSummary() {
  const summaryEl = document.getElementById('semester-summary');
  if (!summaryEl) return;
  const courses = state.semesters[state.activeSemester] || [];

  if (!courses || courses.length === 0) {
    summaryEl.innerHTML = '';
    return;
  }

  const totalCU = courses.reduce((sum, c) => sum + c.creditUnits, 0);
  const totalQP = courses.reduce((sum, c) => sum + calcQualityPoints(c), 0);
  const gpa = calcGPA(courses);

  summaryEl.innerHTML = `
    <div class="summary-item">
      <div class="summary-label">Total CU</div>
      <div class="summary-value">${totalCU}</div>
    </div>
    <div class="summary-item">
      <div class="summary-label">Total QP</div>
      <div class="summary-value">${totalQP}</div>
    </div>
    <div class="summary-item">
      <div class="summary-label">Semester GPA</div>
      <div class="summary-value">${formatGPA(gpa)}</div>
    </div>
  `;
}

function initCoursesPage() {
  renderForm();
  renderTable();
  renderSummary();
  renderGTStats();
  bindCoursesEvents();
}

function renderGTStats() {
  const statsEl = document.getElementById('stats-header');
  if (!statsEl) return;
  const allCourses = Object.values(state.semesters).flat();
  const totalQP = allCourses.reduce((sum, c) => sum + calcQualityPoints(c), 0);
  const totalCU = allCourses.reduce((sum, c) => sum + c.creditUnits, 0);
  const cgpa = totalCU > 0 ? totalQP / totalCU : null;
  const degree = getDegreeClass(cgpa);
  const barColor = getProgressBarColor(cgpa);
  const barWidth = cgpa !== null ? Math.min((cgpa / 5) * 100, 100) : 0;
  const numCourses = allCourses.length;

  statsEl.innerHTML = `
    <div class="gt-card-header">CGPA Overview</div>
    <div class="gt-card-stats" style="grid-template-columns:repeat(4,1fr)">
      <div class="gt-card-stat">
        <span class="gt-card-stat-label">CGPA</span>
        <span class="gt-card-stat-val">${formatGPA(cgpa)}</span>
      </div>
      <div class="gt-card-stat">
        <span class="gt-card-stat-label">Class</span>
        <span class="gt-card-stat-val gt-class-badge" style="font-size:0.7rem;${degree ? `color:${degree.color === 'green' ? 'var(--success)' : degree.color === 'blue' ? 'var(--primary)' : degree.color === 'yellow' ? 'var(--warning)' : 'var(--danger)'}` : ''}">${degree ? degree.label : '\u2014'}</span>
      </div>
      <div class="gt-card-stat">
        <span class="gt-card-stat-label">Progress</span>
        <span class="gt-card-stat-val" style="font-size:0.9rem">
          <div style="height:5px;background:var(--slate-100);border-radius:999px;overflow:hidden;margin-top:0.2rem">
            <div style="height:100%;width:${barWidth}%;background:${barColor};border-radius:999px;transition:width 0.5s"></div>
          </div>
          <span style="font-size:0.6rem;font-weight:500;color:var(--slate-400)">0 \u2014\u2014\u2014\u2014\u2014 5</span>
        </span>
      </div>
      <div class="gt-card-stat">
        <span class="gt-card-stat-label">Courses</span>
        <span class="gt-card-stat-val">${numCourses}</span>
      </div>
    </div>
  `;
}

function bindCoursesEvents() {
  const formEl = document.getElementById('add-course-form');
  const tableEl = document.getElementById('course-table');

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.gt-sem-btn');
    if (!btn) return;
    const sem = btn.dataset.semester;
    if (sem === state.activeSemester) return;
    state.activeSemester = sem;
    saveState();
    renderForm();
    renderTable();
    renderSummary();
    renderGTStats();
    document.querySelectorAll('.gt-sem-btn').forEach(b => b.classList.toggle('active', b.dataset.semester === sem));
    const sub = document.querySelector('.main-header-left p');
    if (sub) sub.textContent = `Track and calculate your CGPA \u2022 ${sem}`;
    const headerEl = document.querySelector('.gt-card-header');
    if (headerEl) headerEl.textContent = `${sem} \u2014 At a Glance`;
    const activeCourses = state.semesters[sem] || [];
    const activeGPA = calcGPA(activeCourses);
    const semCU = activeCourses.reduce((s, c) => s + c.creditUnits, 0);
    const semQP = activeCourses.reduce((s, c) => s + calcQualityPoints(c), 0);
    const statValEls = document.querySelectorAll('.gt-card-stat-val');
    if (statValEls.length >= 4) {
      statValEls[0].textContent = formatGPA(activeGPA);
      statValEls[1].textContent = activeCourses.length;
      statValEls[2].textContent = semCU;
      statValEls[3].textContent = semQP;
    }
  });

  const whatifBtn = document.getElementById('whatif-btn');
  if (whatifBtn) {
    whatifBtn.addEventListener('click', () => {
      const scoreInput = document.getElementById('whatif-score');
      const cuSelect = document.getElementById('whatif-cu');
      const resultEl = document.getElementById('whatif-result');
      const score = parseInt(scoreInput.value, 10);
      const cu = parseInt(cuSelect.value, 10);
      if (isNaN(score) || score < 0 || score > 100) {
        resultEl.innerHTML = '<span style="color:var(--danger)">Enter a valid score (0\u2013100)</span>';
        return;
      }
      const activeCourses = state.semesters[state.activeSemester] || [];
      const currentQP = activeCourses.reduce((s, c) => s + calcQualityPoints(c), 0);
      const currentCU = activeCourses.reduce((s, c) => s + c.creditUnits, 0);
      const grade = getGrade(score);
      const newQP = currentQP + (grade.point * cu);
      const newCU = currentCU + cu;
      const newGPA = newQP / newCU;
      const currentGPA = currentCU > 0 ? currentQP / currentCU : null;
      const diff = currentGPA !== null ? (newGPA - currentGPA) : newGPA;
      const diffStr = diff >= 0 ? `+${diff.toFixed(2)}` : diff.toFixed(2);
      resultEl.innerHTML = `
        <div class="whatif-result-card">
          <div class="whatif-row">
            <span>New GPA</span>
            <span class="whatif-val">${formatGPA(newGPA)}</span>
          </div>
          <div class="whatif-row">
            <span>Change</span>
            <span class="whatif-val ${diff >= 0 ? 'whatif-up' : 'whatif-down'}">${diffStr}</span>
          </div>
          <div class="whatif-row">
            <span>Grade</span>
            <span class="whatif-grade grade-pill-A">${grade.letter}</span>
          </div>
        </div>
      `;
    });
  }

  if (formEl) {
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const nameInput = document.getElementById('course-name');
      const scoreInput = document.getElementById('course-score');
      const errName = document.getElementById('error-name');
      const errScore = document.getElementById('error-score');
      const name = nameInput.value.trim();
      const scoreVal = scoreInput.value;
      let valid = true;

      if (!name) {
        errName.textContent = 'Please enter a course name';
        nameInput.classList.add('input-error');
        valid = false;
      } else {
        errName.textContent = '';
        nameInput.classList.remove('input-error');
      }

      if (scoreVal === '' || scoreVal === null || scoreVal === undefined) {
        errScore.textContent = 'Please enter a score';
        scoreInput.classList.add('input-error');
        valid = false;
      } else {
        const n = Number(scoreVal);
        if (isNaN(n) || n < 0 || n > 100) {
          errScore.textContent = 'Score must be between 0 and 100';
          scoreInput.classList.add('input-error');
          valid = false;
        } else {
          errScore.textContent = '';
          scoreInput.classList.remove('input-error');
        }
      }

      if (!valid) return;

      const activeCu = document.querySelector('#cu-group .cu-btn.active');
      const creditUnits = activeCu ? parseInt(activeCu.dataset.cu, 10) : 3;

      const course = {
        id: crypto.randomUUID(),
        name,
        score: Number(scoreVal),
        creditUnits,
      };

      state.semesters[state.activeSemester].push(course);
      saveState();

      nameInput.value = '';
      scoreInput.value = '';
      document.querySelectorAll('#cu-group .cu-btn').forEach(b => b.classList.remove('active'));
      const defaultCu = document.querySelector('#cu-group .cu-btn[data-cu="3"]');
      if (defaultCu) defaultCu.classList.add('active');

      renderTable();
      renderSummary();
      refreshGTCards();
    });

    formEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.cu-btn');
      if (!btn) return;
      document.querySelectorAll('#cu-group .cu-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });

    formEl.addEventListener('input', (e) => {
      const input = e.target;
      if (input.id === 'course-name') {
        const err = document.getElementById('error-name');
        if (input.value.trim()) {
          err.textContent = '';
          input.classList.remove('input-error');
        }
      }
      if (input.id === 'course-score') {
        const err = document.getElementById('error-score');
        const n = Number(input.value);
        if (input.value !== '' && !isNaN(n) && n >= 0 && n <= 100) {
          err.textContent = '';
          input.classList.remove('input-error');
        } else if (input.value !== '') {
          err.textContent = 'Score must be between 0 and 100';
          input.classList.add('input-error');
        } else {
          err.textContent = '';
          input.classList.remove('input-error');
        }
      }
    });
  }

  if (tableEl) {
    tableEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.delete-btn');
      if (!btn) return;
      const id = btn.dataset.id;
      const row = document.querySelector(`.course-table tr[data-id="${id}"]`);
      if (row) {
        row.classList.remove('course-row');
        row.classList.add('deleting');
        setTimeout(() => {
          state.semesters[state.activeSemester] = state.semesters[state.activeSemester].filter(c => c.id !== id);
          saveState();
          renderTable();
          renderSummary();
          refreshGTCards();
        }, 200);
      } else {
        state.semesters[state.activeSemester] = state.semesters[state.activeSemester].filter(c => c.id !== id);
        saveState();
        renderTable();
        renderSummary();
        refreshGTCards();
      }
    });
  }
}

function refreshGTCards() {
  renderGTStats();
  const allCourses = Object.values(state.semesters).flat();
  const dist = getGradeDistribution(allCourses);
  const distTotal = Object.values(dist).reduce((a, b) => a + b, 0);
  const distColors = { A: '#0E9F6E', B: '#1A56DB', C: '#F59E0B', D: '#F97316', E: '#E02424', F: '#991B1B' };

  const distCard = document.querySelector('.gt-cards-row-3 .gt-card:nth-child(2)');
  if (distCard) {
    if (distTotal > 0) {
      distCard.innerHTML = `
        <div class="gt-card-header">Grade Distribution</div>
        <div class="gt-dist-bar">
          ${Object.entries(dist).filter(([_, v]) => v > 0).map(([k, v]) => `
            <div class="gt-dist-seg" style="flex:${v};background:${distColors[k]}" title="${k}: ${v} (${Math.round((v / distTotal) * 100)}%)">
              <span>${k}</span>
            </div>
          `).join('')}
        </div>
        <span class="gt-dist-total">${distTotal} grades</span>
      `;
    } else {
      distCard.innerHTML = `
        <div class="gt-card-header">Grade Distribution</div>
        <p style="font-size:0.85rem;color:var(--slate-400);padding:0.5rem 0">Add courses to see your grade distribution</p>
      `;
    }
  }

  const activeCourses = state.semesters[state.activeSemester] || [];
  const activeGPA = calcGPA(activeCourses);
  const semCU = activeCourses.reduce((s, c) => s + c.creditUnits, 0);
  const semQP = activeCourses.reduce((s, c) => s + calcQualityPoints(c), 0);
  const allGPA = calcCGPA(state.semesters);
  const degree = getDegreeClass(allGPA);

  const statVals = document.querySelectorAll('.gt-card-stat-val');
  if (statVals.length >= 4) {
    statVals[0].textContent = formatGPA(activeGPA);
    statVals[1].textContent = activeCourses.length;
    statVals[2].textContent = semCU;
    statVals[3].textContent = semQP;
  }
  document.querySelectorAll('.gt-sem-btn').forEach(b => b.classList.toggle('active', b.dataset.semester === state.activeSemester));
  document.querySelectorAll('.gt-sem-btn').forEach(b => {
    const sem = b.dataset.semester;
    const gpa = getSemesterGPA(sem);
    const gpaEl = b.querySelector('.gt-sem-gpa');
    if (gpaEl) gpaEl.textContent = gpa !== null ? formatGPA(gpa) : '\u2014';
  });
}

/* ===== SETTINGS PAGE ===== */
function renderSettings() {
  const user = state.user || { name: 'Student', email: '' };
  return `
    <div class="settings-section">
      <div class="settings-section-title">Profile</div>
      <div class="settings-row">
        <span class="settings-row-label">Name</span>
        <span class="settings-row-value">${user.name}</span>
      </div>
      <div class="settings-row">
        <span class="settings-row-label">Email</span>
        <span class="settings-row-value">${user.email}</span>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-section-title">Academic Info</div>
      <div class="settings-row">
        <span class="settings-row-label">University</span>
        <span class="settings-row-value">${state.school || 'Not set'}</span>
      </div>
      <div class="settings-row">
        <span class="settings-row-label">Department</span>
        <span class="settings-row-value">${state.department || 'Not set'}</span>
      </div>
      <div class="settings-row">
        <span class="settings-row-label">Current Semester</span>
        <span class="settings-row-value">${state.activeSemester}</span>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-section-title">Data</div>
      <div class="settings-row">
        <span class="settings-row-label">Courses Tracked</span>
        <span class="settings-row-value">${Object.values(state.semesters).flat().length}</span>
      </div>
      <div style="margin-top:1rem;display:flex;gap:0.75rem;flex-wrap:wrap">
        <button class="btn-logout" onclick="handleLogout()">${ICONS.logout} Sign Out</button>
      </div>
    </div>
  `;
}

function initSettingsPage() {}

/* ===== LOGOUT ===== */
function handleLogout() {
  clearState();
  navigate('landing');
}

/* ===== PAGE RENDERER ===== */
function renderPage() {
  const page = state.page;
  if (!page) return;

  if (page === 'landing') return renderLanding();
  if (page === 'signup') return renderSignup();
  if (page === 'login') return renderLogin();
  if (page === 'onboarding-school') return renderOnboardingSchool();
  if (page === 'onboarding-department') return renderOnboardingDepartment();
  if (page === 'dashboard') return renderDashboard();
}

/* ===== INIT ===== */
function init() {
  loadState();

  if (state.user) {
    if (!state.school) {
      state.page = 'onboarding-school';
    } else if (!state.department) {
      state.page = 'onboarding-department';
    } else {
      state.page = 'dashboard';
    }
  } else {
    state.page = 'landing';
  }

  renderPage();
}

init();
