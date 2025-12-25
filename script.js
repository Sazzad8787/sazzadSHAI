// ===== WEBSITE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🤖 AI Specialist Portfolio Initialized 🚀', 'color: #3a86ff; font-size: 18px; font-weight: bold;');
    console.log('%cWelcome to the future of web development!', 'color: #8338ec; font-size: 14px;');
    console.log('%cExplore advanced AI features and cinematic UI.', 'color: #ff006e; font-size: 12px;');
    
    // Initialize all components
    initializeLoadingScreen();
    initializeTheme();
    initializeLanguage();
    initializeNavigation();
    initializeTypingAnimation();
    initializeParticles();
    initializeSkills();
    initializeServices();
    initializeAIModels();
    initializeChatAssistant();
    initializeCodeAssistant();
    initializePromptLab();
    initializeFunZone();
    initializeMiniGames();
    initializePortfolio();
    initializeContactForm();
    initializeVisitorCounter();
    initializeBackToTop();
    initializeKeyboardShortcuts();
    initializeSettingsPanel();
    
    // Console Easter Egg
    console.log(
        "%c🔮 Discover hidden features with keyboard shortcuts:\n" +
        "D - Toggle Dark Mode\n" +
        "L - Toggle Language\n" +
        "S - Open Settings\n" +
        "M - Toggle Music\n",
        "color: #06d6a0; font-size: 12px; font-family: monospace;"
    );
});

// ===== LOADING SCREEN =====
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        // Remove from DOM after animation
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000);
}

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const footerThemeToggle = document.getElementById('footer-theme-toggle');
    const themeSelect = document.getElementById('theme-select');
    
    // Get saved theme or default to auto
    const savedTheme = localStorage.getItem('theme') || 'auto';
    themeSelect.value = savedTheme;
    
    // Apply theme based on saved preference
    applyTheme(savedTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', toggleTheme);
    footerThemeToggle.addEventListener('click', toggleTheme);
    
    // Change theme on select change
    themeSelect.addEventListener('change', function() {
        const theme = this.value;
        localStorage.setItem('theme', theme);
        applyTheme(theme);
    });
}

function applyTheme(theme) {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (theme === 'auto' && isDarkMode)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon(false);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('theme-select').value = newTheme;
    updateThemeIcon(newTheme === 'dark');
}

function updateThemeIcon(isDark) {
    const icons = document.querySelectorAll('.theme-toggle i');
    icons.forEach(icon => {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// ===== LANGUAGE MANAGEMENT =====
function initializeLanguage() {
    const langToggle = document.getElementById('lang-toggle');
    const footerLangToggle = document.getElementById('footer-lang-toggle');
    const languageSelect = document.getElementById('language-select');
    
    // Get saved language or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    document.documentElement.setAttribute('data-lang', savedLang);
    languageSelect.value = savedLang;
    
    // Update language on page load
    updateLanguage(savedLang);
    
    // Toggle language on button click
    langToggle.addEventListener('click', toggleLanguage);
    footerLangToggle.addEventListener('click', toggleLanguage);
    
    // Change language on select change
    languageSelect.addEventListener('change', function() {
        const lang = this.value;
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('data-lang', lang);
        updateLanguage(lang);
    });
}

function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('data-lang');
    const newLang = currentLang === 'en' ? 'bn' : 'en';
    
    document.documentElement.setAttribute('data-lang', newLang);
    localStorage.setItem('language', newLang);
    document.getElementById('language-select').value = newLang;
    updateLanguage(newLang);
}

function updateLanguage(lang) {
    // Update language toggle button
    const langToggles = document.querySelectorAll('.lang-toggle span');
    if (lang === 'bn') {
        langToggles[0].style.color = '';
        langToggles[1].style.color = '#3a86ff';
    } else {
        langToggles[0].style.color = '#3a86ff';
        langToggles[1].style.color = '';
    }
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[key][lang];
            } else {
                element.textContent = translations[key][lang];
            }
        }
    });
}

// Translations object
const translations = {
    // Navigation
    "home": { "en": "Home", "bn": "হোম" },
    "about": { "en": "About", "bn": "সম্পর্কে" },
    "skills": { "en": "Skills", "bn": "দক্ষতা" },
    "services": { "en": "Services", "bn": "সেবাসমূহ" },
    "portfolio": { "en": "Portfolio", "bn": "পোর্টফোলিও" },
    "blog": { "en": "Blog", "bn": "ব্লগ" },
    "contact": { "en": "Contact", "bn": "যোগাযোগ" },
    "more": { "en": "More", "bn": "আরও" },
    
    // More Menu
    "ai_features": { "en": "AI Features", "bn": "এআই বৈশিষ্ট্য" },
    "ai_fun_zone": { "en": "AI Fun Zone", "bn": "এআই মজার অঞ্চল" },
    "mini_games": { "en": "Mini Games", "bn": "মিনি গেমস" },
    "testimonials": { "en": "Testimonials", "bn": "প্রশংসাপত্র" },
    "achievements": { "en": "Achievements", "bn": "অর্জনসমূহ" },
    "faq": { "en": "FAQ", "bn": "সচরাচর জিজ্ঞাসা" },
    "settings": { "en": "Settings", "bn": "সেটিংস" },
    
    // Hero Section
    "bio_english": { "en": "AI Specialist & Full-Stack Developer specializing in automation, chatbot systems, and cutting-edge web solutions. Transforming businesses with intelligent technology.", "bn": "এআই বিশেষজ্ঞ ও ফুল-স্ট্যাক ডেভেলপার, অটোমেশন, চ্যাটবোট সিস্টেম এবং আধুনিক ওয়েব সমাধানে বিশেষজ্ঞ। বুদ্ধিমান প্রযুক্তি দিয়ে ব্যবসায় রূপান্তর।" },
    "bio_bangla": { "en": "", "bn": "এআই বিশেষজ্ঞ ও ফুল-স্ট্যাক ডেভেলপার, অটোমেশন, চ্যাটবোট সিস্টেম এবং আধুনিক ওয়েব সমাধানে বিশেষজ্ঞ। বুদ্ধিমান প্রযুক্তি দিয়ে ব্যবসায় রূপান্তর।" },
    "contact_me": { "en": "Contact Me", "bn": "যোগাযোগ করুন" },
    "view_services": { "en": "View Services", "bn": "সেবা দেখুন" },
    "explore_ai": { "en": "Explore AI Features", "bn": "এআই বৈশিষ্ট্য অন্বেষণ করুন" },
    
    // About Section
    "about_me": { "en": "About Me", "bn": "আমার সম্পর্কে" },
    "personal_info": { "en": "Personal Information", "bn": "ব্যক্তিগত তথ্য" },
    "full_name": { "en": "Full Name", "bn": "পূর্ণ নাম" },
    "village": { "en": "Village", "bn": "গ্রাম" },
    "thana": { "en": "Thana", "bn": "থানা" },
    "district": { "en": "District", "bn": "জেলা" },
    "country": { "en": "Country", "bn": "দেশ" },
    "education": { "en": "Education", "bn": "শিক্ষা" },
    "school": { "en": "School", "bn": "বিদ্যালয়" },
    "college": { "en": "College", "bn": "কলেজ" },
    "group": { "en": "Group", "bn": "গ্রুপ" },
    "professional_bio": { "en": "Professional Bio", "bn": "পেশাগত জীবনবৃত্তান্ত" },
    "bio_full": { "en": "As an AI Specialist and Full-Stack Web Developer, I specialize in creating intelligent automation systems, AI-powered chatbots, and responsive web applications. With expertise in both frontend and backend technologies, I build scalable solutions that help businesses streamline operations and enhance user engagement. My focus is on implementing cutting-edge AI technologies to solve real-world problems and create impactful digital experiences.", "bn": "একজন এআই বিশেষজ্ঞ এবং ফুল-স্ট্যাক ওয়েব ডেভেলপার হিসাবে, আমি বুদ্ধিমান অটোমেশন সিস্টেম, এআই-চালিত চ্যাটবট এবং প্রতিক্রিয়াশীল ওয়েব অ্যাপ্লিকেশন তৈরিতে বিশেষজ্ঞ। ফ্রন্টএন্ড এবং ব্যাকএন্ড প্রযুক্তি উভয় ক্ষেত্রে দক্ষতা নিয়ে, আমি স্কেলযোগ্য সমাধান তৈরি করি যা ব্যবসায়িক অপারেশনকে প্রবাহিত করতে এবং ব্যবহারকারীর সম্পৃক্ততা বাড়াতে সাহায্য করে। বাস্তব বিশ্বের সমস্যা সমাধান এবং প্রভাবশালী ডিজিটাল অভিজ্ঞতা তৈরি করতে আমি অত্যাধুনিক এআই প্রযুক্তি বাস্তবায়নে মনোনিবেশ করি।" },
    
    // Skills Section
    "my_skills": { "en": "My Skills", "bn": "আমার দক্ষতা" },
    
    // Services Section
    "services_title": { "en": "Services", "bn": "সেবাসমূহ" },
    "order_now": { "en": "Order Now", "bn": "অর্ডার করুন" },
    "learn_more": { "en": "Learn More", "bn": "আরও জানুন" },
    
    // AI Features
    "ai_features_title": { "en": "AI Models Playground", "bn": "এআই মডেল খেলার মাঠ" },
    "ai_features_sub": { "en": "Explore the world's leading AI models and their capabilities", "bn": "বিশ্বের শীর্ষস্থানীয় এআই মডেল এবং তাদের ক্ষমতা অন্বেষণ করুন" },
    "best_for": { "en": "Best for", "bn": "সেরা জন্য" },
    "try_demo": { "en": "Try Demo", "bn": "ডেমো চেষ্টা করুন" },
    "visit_ai": { "en": "Visit AI", "bn": "এআই দেখুন" },
    
    // AI Chat Assistant
    "ai_chat_demo": { "en": "AI Chat Assistant Demo", "bn": "এআই চ্যাট সহকারী ডেমো" },
    "coding_mode": { "en": "Coding Mode", "bn": "কোডিং মোড" },
    "study_mode": { "en": "Study Mode", "bn": "অধ্যয়ন মোড" },
    "writing_mode": { "en": "Writing Mode", "bn": "লেখার মোড" },
    "automation_mode": { "en": "Automation Mode", "bn": "অটোমেশন মোড" },
    "fun_mode": { "en": "Fun Mode", "bn": "মজার মোড" },
    "select_personality": { "en": "Select AI Personality", "bn": "এআই ব্যক্তিত্ব নির্বাচন করুন" },
    "professional": { "en": "Professional", "bn": "পেশাদার" },
    "friendly": { "en": "Friendly", "bn": "বন্ধুত্বপূর্ণ" },
    "teacher": { "en": "Teacher", "bn": "শিক্ষক" },
    "hacker": { "en": "Hacker", "bn": "হ্যাকার" },
    "chat_placeholder": { "en": "Type your message...", "bn": "আপনার বার্তা টাইপ করুন..." },
    "send": { "en": "Send", "bn": "প্রেরণ করুন" },
    
    // AI Code Assistant
    "code_assistant": { "en": "AI Code Assistant", "bn": "এআই কোড সহকারী" },
    "code_placeholder": { "en": "Paste your code here...", "bn": "আপনার কোড এখানে পেস্ট করুন..." },
    "explain_code": { "en": "Explain Code", "bn": "কোড ব্যাখ্যা করুন" },
    "optimize_code": { "en": "Optimize Code", "bn": "কোড অপ্টিমাইজ করুন" },
    "fix_errors": { "en": "Fix Errors", "bn": "ত্রুটি ঠিক করুন" },
    
    // Prompt Engineering Lab
    "prompt_lab": { "en": "Prompt Engineering Lab", "bn": "প্রম্পট ইঞ্জিনিয়ারিং ল্যাব" },
    "website_generator": { "en": "Website Generator", "bn": "ওয়েবসাইট জেনারেটর" },
    "business_idea": { "en": "Business Idea Generator", "bn": "ব্যবসায়িক আইডিয়া জেনারেটর" },
    "study_helper": { "en": "Study Helper", "bn": "অধ্যয়ন সাহায্যকারী" },
    "resume_builder": { "en": "Resume Builder", "bn": "রিজিউম বিল্ডার" },
    "tone": { "en": "Tone", "bn": "সুর" },
    "casual": { "en": "Casual", "bn": "আনুষ্ঠানিক" },
    "academic": { "en": "Academic", "bn": "শৈক্ষিক" },
    "length": { "en": "Length", "bn": "দৈর্ঘ্য" },
    "short": { "en": "Short", "bn": "সংক্ষিপ্ত" },
    "medium": { "en": "Medium", "bn": "মাধ্যমিক" },
    "long": { "en": "Long", "bn": "দীর্ঘ" },
    "language": { "en": "Language", "bn": "ভাষা" },
    "copy_prompt": { "en": "Copy Prompt", "bn": "প্রম্পট কপি করুন" },
    
    // AI Fun Zone
    "joke_generator": { "en": "AI Joke Generator", "bn": "এআই জোক জেনারেটর" },
    "joke_placeholder": { "en": "Click the button for a joke!", "bn": "জোকের জন্য বাটনে ক্লিক করুন!" },
    "get_joke": { "en": "Get AI Joke", "bn": "এআই জোক পান" },
    "fun_facts": { "en": "Random Tech Fun Facts", "bn": "এলোমেলো টেক মজার তথ্য" },
    "fact_placeholder": { "en": "Discover interesting tech facts!", "bn": "মজাদার টেক তথ্য আবিষ্কার করুন!" },
    "get_fact": { "en": "Get New Fact", "bn": "নতুন তথ্য পান" },
    "quote_generator": { "en": "AI Quote Generator", "bn": "এআই উক্তি জেনারেটর" },
    "quote_placeholder": { "en": "Get inspired with AI-generated quotes!", "bn": "এআই-জেনারেটেড উদ্ধৃতির সাথে অনুপ্রাণিত হন!" },
    "get_quote": { "en": "Generate Quote", "bn": "উক্তি তৈরি করুন" },
    "mood_selector": { "en": "Mood Selector", "bn": "মুড সিলেক্টর" },
    "mood_placeholder": { "en": "Select your mood above", "bn": "উপরে আপনার মুড নির্বাচন করুন" },
    
    // Mini Games
    "guess_instructions": { "en": "I'm thinking of a number between 1 and 100. Try to guess it!", "bn": "আমি ১ থেকে ১০০ এর মধ্যে একটি সংখ্যা ভাবছি। এটি অনুমান করার চেষ্টা করুন!" },
    "submit_guess": { "en": "Submit Guess", "bn": "অনুমান জমা দিন" },
    "reset_game": { "en": "Reset Game", "bn": "গেম রিসেট করুন" },
    "reaction_instructions": { "en": "Click the button as soon as it turns green. Wait for the red light first!", "bn": "বাটনটি সবুজ হওয়ার সাথে সাথে ক্লিক করুন। প্রথমে লাল আলোর জন্য অপেক্ষা করুন!" },
    "click_when_green": { "en": "Wait for Green...", "bn": "সবুজের জন্য অপেক্ষা করুন..." },
    "best_time": { "en": "Best Time", "bn": "সেরা সময়" },
    "start_test": { "en": "Start Test", "bn": "পরীক্ষা শুরু করুন" },
    
    // Portfolio
    "live_preview": { "en": "Live Preview", "bn": "লাইভ প্রিভিউ" },
    "view_code": { "en": "View Code", "bn": "কোড দেখুন" },
    
    // Blog
    "knowledge_blog": { "en": "Knowledge & Blog", "bn": "জ্ঞান ও ব্লগ" },
    "blog_title_1": { "en": "How AI Can Automate Your Business", "bn": "কিভাবে এআই আপনার ব্যবসা স্বয়ংক্রিয় করতে পারে" },
    "blog_excerpt_1": { "en": "Discover practical ways to implement AI automation in your business to save time and increase efficiency.", "bn": "সময় বাঁচাতে এবং দক্ষতা বাড়াতে আপনার ব্যবসায় এআই অটোমেশন বাস্তবায়নের ব্যবহারিক উপায় আবিষ্কার করুন।" },
    "blog_title_2": { "en": "Complete Website Development Guide 2024", "bn": "সম্পূর্ণ ওয়েবসাইট ডেভেলপমেন্ট গাইড ২০২৪" },
    "blog_excerpt_2": { "en": "A comprehensive guide to modern web development covering everything from planning and design to deployment and maintenance.", "bn": "আধুনিক ওয়েব ডেভেলপমেন্টের একটি সম্পূর্ণ গাইড যা পরিকল্পনা এবং ডিজাইন থেকে স্থাপনা এবং রক্ষণাবেক্ষণ পর্যন্ত সবকিছু কভার করে।" },
    "blog_title_3": { "en": "Top AI Tools for Beginners in 2024", "bn": "২০২৪ সালে初学者দের জন্য শীর্ষ এআই সরঞ্জাম" },
    "blog_excerpt_3": { "en": "Explore the most accessible and powerful AI tools for beginners.", "bn": "শুরুকারীদের জন্য সবচেয়ে অ্যাক্সেসযোগ্য এবং শক্তিশালী এআই সরঞ্জাম অন্বেষণ করুন।" },
    "read_more": { "en": "Read More →", "bn": "আরও পড়ুন →" },
    
    // Contact
    "get_in_touch": { "en": "Get In Touch", "bn": "যোগাযোগ করুন" },
    "phone": { "en": "Phone", "bn": "ফোন" },
    "email": { "en": "Email", "bn": "ইমেইল" },
    "whatsapp_message": { "en": "Send Message", "bn": "বার্তা প্রেরণ করুন" },
    "send_message": { "en": "Send Message", "bn": "বার্তা প্রেরণ করুন" },
    "name_placeholder": { "en": "Your Name", "bn": "আপনার নাম" },
    "email_placeholder": { "en": "Your Email", "bn": "আপনার ইমেইল" },
    "message_placeholder": { "en": "Your Message", "bn": "আপনার বার্তা" },
    
    // Footer
    "footer_tagline": { "en": "Building the future with AI & Web Technology", "bn": "এআই ও ওয়েব প্রযুক্তি দিয়ে ভবিষ্যত গড়া" },
    "quick_links": { "en": "Quick Links", "bn": "দ্রুত লিঙ্ক" },
    "ai_models": { "en": "AI Models", "bn": "এআই মডেল" },
    "connect": { "en": "Connect", "bn": "সংযোগ" },
    "visitors": { "en": "Visitors", "bn": "দর্শক" },
    "all_rights_reserved": { "en": "All Rights Reserved", "bn": "সমস্ত অধিকার সংরক্ষিত" },
    
    // Settings
    "auto": { "en": "Auto", "bn": "স্বয়ংক্রিয়" },
    "light": { "en": "Light", "bn": "হালকা" },
    "dark": { "en": "Dark", "bn": "গাঢ়" },
    "music": { "en": "Background Music", "bn": "পটভূমি সংগীত" },
    "animations": { "en": "Animations", "bn": "অ্যানিমেশন" },
    "font_size": { "en": "Font Size", "bn": "ফন্ট আকার" },
    "close": { "en": "Close", "bn": "বন্ধ করুন" }
};

// ===== NAVIGATION =====
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown > .nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = dropdown.parentElement;
                parent.classList.toggle('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===== TYPING ANIMATION =====
function initializeTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const titles = [
        "AI Specialist",
        "Full-Stack Web Developer", 
        "Automation Expert",
        "ChatBot Developer",
        "Web Solution Architect"
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Typing text
            typingText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Check if we're done typing the current title
        if (!isDeleting && charIndex === currentTitle.length) {
            // Pause at the end
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next title
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing animation after a short delay
    setTimeout(type, 1000);
}

// ===== PARTICLE BACKGROUND =====
function initializeParticles() {
    // Create a simple particle system
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    const container = document.getElementById('particles-js');
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0, radius: 100 };
    
    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    }
    
    // Create particles
    function createParticles() {
        particles = [];
        const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 150)}, 255, ${Math.random() * 0.5 + 0.2})`
            });
        }
    }
    
    // Draw particles
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off walls
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Draw connections between nearby particles
            particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 * (1 - distance/100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            });
            
            // Interaction with mouse
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                // Push particle away from mouse
                const force = (mouse.radius - distance) / mouse.radius;
                const directionX = dx / distance;
                const directionY = dy / distance;
                
                particle.x -= directionX * force * 5;
                particle.y -= directionY * force * 5;
            }
        });
        
        requestAnimationFrame(drawParticles);
    }
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    // Initialize
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
    
    resizeCanvas();
    createParticles();
    drawParticles();
}

// ===== SKILLS =====
function initializeSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    const skills = [
        { name: "AI Automation", percentage: 95, icon: "fas fa-robot" },
        { name: "Web Development", percentage: 90, icon: "fas fa-code" },
        { name: "E-commerce Website", percentage: 88, icon: "fas fa-shopping-cart" },
        { name: "College/School Website", percentage: 85, icon: "fas fa-school" },
        { name: "Portfolio Website", percentage: 92, icon: "fas fa-briefcase" },
        { name: "AI Chatbot Integration", percentage: 93, icon: "fas fa-comments" },
        { name: "WhatsApp & Messenger Automation", percentage: 87, icon: "fab fa-whatsapp" },
        { name: "API Integration", percentage: 89, icon: "fas fa-network-wired" }
    ];
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card glass';
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <div class="skill-name">${skill.name}</div>
            </div>
            <div class="skill-progress">
                <div class="progress-bar" style="width: 0%" data-percentage="${skill.percentage}"></div>
            </div>
            <div class="skill-percentage">0%</div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
    
    // Animate progress bars when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                const percentages = entry.target.querySelectorAll('.skill-percentage');
                
                progressBars.forEach((bar, index) => {
                    const percentage = bar.getAttribute('data-percentage');
                    bar.style.width = `${percentage}%`;
                    
                    // Animate percentage counter
                    let current = 0;
                    const increment = percentage / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= percentage) {
                            current = percentage;
                            clearInterval(timer);
                        }
                        percentages[index].textContent = `${Math.round(current)}%`;
                    }, 20);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsGrid);
}

// ===== SERVICES =====
function initializeServices() {
    const servicesGrid = document.querySelector('.services-grid');
    
    const services = [
        { 
            name: "Personal Website", 
            price: "$99", 
            icon: "fas fa-user",
            features: ["Responsive Design", "SEO Optimized", "Contact Form", "Social Media Integration"]
        },
        { 
            name: "Business Website", 
            price: "$299", 
            icon: "fas fa-briefcase",
            features: ["Up to 10 Pages", "CMS Integration", "Email System", "Analytics Dashboard"]
        },
        { 
            name: "E-commerce Website", 
            price: "$599", 
            icon: "fas fa-shopping-cart",
            features: ["Product Management", "Payment Gateway", "Order Tracking", "Inventory System"]
        },
        { 
            name: "College/School Website", 
            price: "$499", 
            icon: "fas fa-school",
            features: ["Student Portal", "Notice Board", "Result System", "Admin Dashboard"]
        },
        { 
            name: "Coaching Center Website", 
            price: "$399", 
            icon: "fas fa-chalkboard-teacher",
            features: ["Course Management", "Online Payment", "Student Login", "Batch Scheduling"]
        },
        { 
            name: "NGO Website", 
            price: "$349", 
            icon: "fas fa-hands-helping",
            features: ["Donation System", "Event Calendar", "Volunteer Registration", "Gallery"]
        },
        { 
            name: "Political Member Website", 
            price: "$449", 
            icon: "fas fa-landmark",
            features: ["Campaign Platform", "News Updates", "Contact Representative", "Event Management"]
        },
        { 
            name: "News Portal", 
            price: "$699", 
            icon: "fas fa-newspaper",
            features: ["Article Management", "Category System", "Author Dashboard", "Comment System"]
        },
        { 
            name: "Blog Website", 
            price: "$199", 
            icon: "fas fa-blog",
            features: ["Blog Management", "Comment System", "Social Sharing", "SEO Tools"]
        },
        { 
            name: "Landing Page", 
            price: "$149", 
            icon: "fas fa-rocket",
            features: ["Single Page Design", "Lead Capture", "Fast Loading", "Mobile Responsive"]
        },
        { 
            name: "AI Powered Website", 
            price: "$799", 
            icon: "fas fa-brain",
            features: ["AI Chatbot", "Personalization", "Predictive Analytics", "Automation Tools"]
        }
    ];
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card glass';
        
        const featuresHTML = service.features.map(feature => 
            `<li><i class="fas fa-check"></i> ${feature}</li>`
        ).join('');
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.name}</h3>
            <div class="service-price">${service.price}</div>
            <ul class="service-features">
                ${featuresHTML}
            </ul>
            <div class="service-actions">
                <button class="btn btn-primary" data-i18n="order_now">Order Now</button>
                <button class="btn btn-outline" data-i18n="learn_more">Learn More</button>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
    
    // Add click handlers for service buttons
    servicesGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            alert('This would redirect to a service order page. In a real implementation, this would connect to a payment system.');
        } else if (e.target.classList.contains('btn-outline')) {
            alert('This would show more details about the service. In a real implementation, this would open a modal with detailed information.');
        }
    });
}

// ===== AI MODELS =====
function initializeAIModels() {
    const aiModelsGrid = document.querySelector('.ai-models-grid');
    
    const aiModels = [
        { 
            name: "ChatGPT", 
            description: "Advanced conversational AI for creative tasks, coding, and general assistance.",
            strengths: ["Creative Writing", "Code Generation", "General Knowledge"],
            icon: "fas fa-comment-dots",
            iconColor: "#10a37f",
            link: "https://chat.openai.com/"
        },
        { 
            name: "DeepSeek", 
            description: "Specialized in logical reasoning, mathematics, and coding challenges.",
            strengths: ["Logical Reasoning", "Mathematics", "Problem Solving"],
            icon: "fas fa-brain",
            iconColor: "#3a86ff",
            link: "https://www.deepseek.com/"
        },
        { 
            name: "GitHub Copilot", 
            description: "AI pair programmer that suggests code completions and entire functions.",
            strengths: ["Code Completion", "Syntax Suggestions", "Multi-language"],
            icon: "fab fa-github",
            iconColor: "#333333",
            link: "https://github.com/features/copilot"
        },
        { 
            name: "Google Gemini", 
            description: "Multimodal AI that understands text, images, audio, and video.",
            strengths: ["Multimodal", "Research", "Real-time Info"],
            icon: "fas fa-gem",
            iconColor: "#4285f4",
            link: "https://gemini.google.com/"
        },
        { 
            name: "Perplexity AI", 
            description: "AI-powered search engine with source citations for research tasks.",
            strengths: ["Research", "Citations", "Up-to-date Info"],
            icon: "fas fa-search",
            iconColor: "#10a37f",
            link: "https://www.perplexity.ai/"
        },
        { 
            name: "Claude AI", 
            description: "AI assistant focused on safe, helpful conversations and long-form content.",
            strengths: ["Long Context", "Writing", "Safety"],
            icon: "fas fa-cloud",
            iconColor: "#d4a574",
            link: "https://claude.ai/"
        }
    ];
    
    aiModels.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'ai-model-card glass';
        
        const strengthsHTML = model.strengths.map(strength => 
            `<span class="strength-tag">${strength}</span>`
        ).join('');
        
        modelCard.innerHTML = `
            <div class="ai-model-header">
                <div class="ai-model-icon" style="background: ${model.iconColor}">
                    <i class="${model.icon}"></i>
                </div>
                <div class="ai-model-title">${model.name}</div>
            </div>
            <div class="ai-model-description">${model.description}</div>
            <div class="ai-model-strengths">
                ${strengthsHTML}
            </div>
            <div class="ai-model-actions">
                <button class="demo-btn" data-i18n="try_demo">Try Demo</button>
                <a href="${model.link}" target="_blank" class="visit-btn" data-i18n="visit_ai">Visit AI</a>
            </div>
        `;
        
        aiModelsGrid.appendChild(modelCard);
    });
    
    // Add click handlers for demo buttons
    aiModelsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('demo-btn')) {
            const modelName = e.target.closest('.ai-model-card').querySelector('.ai-model-title').textContent;
            alert(`This would launch a demo of ${modelName}. In a real implementation, this would connect to the AI's API for a live demo.`);
        }
    });
}

// ===== AI CHAT ASSISTANT =====
function initializeChatAssistant() {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-chat');
    const chatHistory = document.getElementById('chat-history');
    const modeButtons = document.querySelectorAll('.chat-mode-btn');
    const personalitySelect = document.getElementById('personality-select');
    
    let currentMode = 'coding';
    let currentPersonality = 'professional';
    
    // Set up mode buttons
    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentMode = button.getAttribute('data-mode');
        });
    });
    
    // Set up personality select
    personalitySelect.addEventListener('change', () => {
        currentPersonality = personalitySelect.value;
    });
    
    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessageToChat('user', message);
        chatInput.value = '';
        
        // Simulate AI thinking
        const thinkingMessage = addMessageToChat('ai', 'Thinking...');
        
        // Generate AI response after delay
        setTimeout(() => {
            thinkingMessage.querySelector('.message-content').innerHTML = 
                `<strong>AI Assistant (${currentPersonality}):</strong> ${generateAIResponse(message, currentMode, currentPersonality)}`;
        }, 1000 + Math.random() * 1000);
    }
    
    // Add message to chat
    function addMessageToChat(sender, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'AI Assistant'}:</strong> ${content}`;
        
        messageDiv.appendChild(contentDiv);
        chatHistory.appendChild(messageDiv);
        
        // Scroll to bottom
        chatHistory.scrollTop = chatHistory.scrollHeight;
        
        return messageDiv;
    }
    
    // Generate AI response based on mode and personality
    function generateAIResponse(message, mode, personality) {
        const responses = {
            coding: {
                professional: "Based on your code query, I recommend implementing a modular approach with proper error handling. Consider using async/await for better readability.",
                friendly: "Hey! That's an interesting coding problem. Let me help you break it down step by step. First, let's think about the data structure...",
                teacher: "To understand this coding concept, let's start with the fundamentals. The key principle here is separation of concerns. Would you like me to explain with an example?",
                hacker: "// Solution initiated\nconst hackThePlanet = () => {\n  console.log('Access granted!');\n  // Your code here...\n}"
            },
            study: {
                professional: "For effective studying, I recommend the Pomodoro technique: 25 minutes of focused study followed by a 5-minute break.",
                friendly: "Studying can be tough! Try breaking your material into smaller chunks and use mnemonics to remember key concepts.",
                teacher: "Let me explain this concept in detail. First, we need to understand the basic principles, then we can move to more complex applications.",
                hacker: "Study mode activated. Injecting knowledge directly into brain... just kidding! Try spaced repetition for optimal learning."
            },
            writing: {
                professional: "For professional writing, ensure your content has a clear structure: introduction, body, and conclusion. Use active voice for impact.",
                friendly: "Writing is all about expressing your thoughts clearly. Don't worry about perfection on the first draft - just get your ideas down!",
                teacher: "Good writing follows the 'show, don't tell' principle. Instead of saying someone is angry, describe their clenched fists and red face.",
                hacker: "Writing algorithm engaged. Deploying persuasive vocabulary and rhetorical devices. Your document will be optimized for maximum impact."
            },
            automation: {
                professional: "For automation, identify repetitive tasks first. Consider using Python with libraries like Selenium or BeautifulSoup for web automation.",
                friendly: "Automation is like teaching your computer to do your chores! Start with simple tasks like file organization or data entry.",
                teacher: "Automation follows a simple pattern: identify input, define process, specify output. Let me walk you through a practical example.",
                hacker: "Initiating automation sequence. Bypassing manual protocols. Your workflow will be optimized for maximum efficiency in 3...2...1..."
            },
            fun: {
                professional: "For entertainment purposes, I can generate creative content, tell jokes, or discuss interesting facts about technology.",
                friendly: "Fun mode activated! Want to hear a tech joke? Why do programmers prefer dark mode? Because light attracts bugs! 😄",
                teacher: "Did you know? The first computer bug was an actual moth found in the Harvard Mark II computer in 1947!",
                hacker: "Entertaining user with optimized humor algorithms. Generating laugh.exe... Done! Why don't programmers like nature? It has too many bugs."
            }
        };
        
        return responses[mode][personality] || "I'm here to help! How can I assist you today?";
    }
    
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// ===== AI CODE ASSISTANT =====
function initializeCodeAssistant() {
    const codeInput = document.getElementById('code-input');
    const codeOutput = document.getElementById('code-output');
    const codeButtons = document.querySelectorAll('.code-btn');
    const languageSelect = document.getElementById('code-language');
    
    // Sample code for different languages
    const sampleCode = {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
    <style>
        body { font-family: Arial; }
        .container { max-width: 800px; margin: 0 auto; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome</h1>
        <p>This is a sample HTML page.</p>
    </div>
    <script>
        console.log('Page loaded');
    </script>
</body>
</html>`,
        
        css: `.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 20px;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.button {
    background: #3a86ff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}`,
        
        javascript: `// Function to calculate factorial
function factorial(n) {
    if (n < 0) return 'Error: Negative number';
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to fetch data with error handling
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Event listener example
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready');
});`,
        
        python: `# Function to check if a number is prime
def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# Class example
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

# List comprehension example
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]`
    };
    
    // Set initial code based on selected language
    codeInput.value = sampleCode[languageSelect.value];
    
    // Update code when language changes
    languageSelect.addEventListener('change', () => {
        codeInput.value = sampleCode[languageSelect.value] || '';
    });
    
    // Handle code action buttons
    codeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const code = codeInput.value;
            const language = languageSelect.value;
            
            let output = '';
            
            switch(action) {
                case 'explain':
                    output = explainCode(code, language);
                    break;
                case 'optimize':
                    output = optimizeCode(code, language);
                    break;
                case 'fix':
                    output = fixCode(code, language);
                    break;
            }
            
            codeOutput.textContent = output;
            codeOutput.style.display = 'block';
        });
    });
    
    // Code explanation function
    function explainCode(code, language) {
        return `Explanation of ${language.toUpperCase()} code:

1. Overall Structure: This code appears to be a ${language} program with typical syntax patterns.
2. Key Functions: The code contains functions/methods that perform specific operations.
3. Complexity: ${code.length > 100 ? 'Medium to high complexity' : 'Low complexity'}
4. Best Practices: ${code.includes('//') || code.includes('#') ? 'Comments found - good practice' : 'Consider adding comments for clarity'}
5. Suggestions: Use meaningful variable names and break complex functions into smaller ones.

Note: This is a simulated explanation. In a real AI system, this would provide detailed line-by-line analysis.`;
    }
    
    // Code optimization function
    function optimizeCode(code, language) {
        return `Optimized ${language.toUpperCase()} code suggestions:

1. Performance: ${code.includes('for(') || code.includes('for ') ? 'Consider using more efficient algorithms for loops' : 'Code structure looks efficient'}
2. Readability: ${code.length > 200 ? 'Break into smaller functions/modules' : 'Code is reasonably readable'}
3. Memory: No obvious memory leaks detected in this snippet
4. Security: ${code.includes('eval(') || code.includes('exec(') ? 'WARNING: Avoid eval/exec for security' : 'No obvious security vulnerabilities'}
5. Modern Features: Consider using newer ${language} features if available

Optimized version would include:
- Better error handling
- More descriptive variable names
- Separation of concerns principle
- Proper documentation`;
    }
    
    // Code fixing function
    function fixCode(code, language) {
        return `Potential issues found in ${language.toUpperCase()} code:

1. Syntax: ${code.includes('  ') ? 'Multiple spaces detected - consider consistent indentation' : 'Syntax appears correct'}
2. Logic: Review loop conditions and boundary cases
3. Error Handling: ${code.includes('try') || code.includes('catch') || code.includes('except') ? 'Error handling present' : 'Consider adding error handling'}
4. Edge Cases: Test with boundary values and invalid inputs
5. Best Practices: Follow ${language} style guide for consistency

Suggested fixes:
1. Add input validation
2. Include comprehensive error handling
3. Add comments for complex logic
4. Consider edge cases in algorithms
5. Optimize resource usage`;
    }
}

// ===== PROMPT ENGINEERING LAB =====
function initializePromptLab() {
    const promptTemplates = document.querySelectorAll('.prompt-template');
    const toneSelect = document.getElementById('tone-select');
    const lengthSelect = document.getElementById('length-select');
    const promptLangSelect = document.getElementById('prompt-lang-select');
    const promptOutput = document.getElementById('prompt-output');
    const copyButton = document.querySelector('.copy-btn');
    
    const templates = {
        website: {
            en: {
                short: "Create a responsive website homepage with hero section, features, and contact form.",
                medium: "Design a modern, responsive website homepage for a tech startup. Include: 1) Hero section with headline and CTA, 2) Features grid with icons, 3) Testimonials carousel, 4) Contact form with validation. Use clean design with blue color scheme.",
                long: "Comprehensive website design brief: Create a fully responsive website for a technology consulting company. The design should be professional, modern, and user-friendly. Key sections: 1) Navigation bar with logo and menu, 2) Hero section with animated background, headline, subheadline, and primary CTA button, 3) Services section with 3-4 service cards including icons, titles, and descriptions, 4) Portfolio/Projects gallery with filtering options, 5) Team section with profile cards, 6) Testimonials slider, 7) Contact section with form and company details, 8) Footer with social links and newsletter signup. Design requirements: Use a blue/gray color scheme, implement smooth scrolling, ensure mobile responsiveness, include hover effects, and maintain consistent typography. Provide both desktop and mobile mockups."
            },
            bn: {
                short: "হিরো সেকশন, বৈশিষ্ট্য এবং যোগাযোগ ফর্ম সহ একটি প্রতিক্রিয়াশীল ওয়েবসাইট হোমপেজ তৈরি করুন।",
                medium: "একটি টেক স্টার্টআপের জন্য একটি আধুনিক, প্রতিক্রিয়াশীল ওয়েবসাইট হোমপেজ ডিজাইন করুন। অন্তর্ভুক্ত করুন: 1) হেডলাইন এবং সিটিএ সহ হিরো সেকশন, 2) আইকন সহ বৈশিষ্ট্য গ্রিড, 3) প্রশংসাপত্র ক্যারousel, 4) বৈধতা সহ যোগাযোগ ফর্ম। নীল রঙের স্কিম সহ পরিষ্কার ডিজাইন ব্যবহার করুন।",
                long: "সম্পূর্ণ ওয়েবসাইট ডিজাইন ব্রিফ: একটি প্রযুক্তি পরামর্শদাতা কোম্পানির জন্য একটি সম্পূর্ণ প্রতিক্রিয়াশীল ওয়েবসাইট তৈরি করুন। ডিজাইনটি পেশাদার, আধুনিক এবং ব্যবহারকারী-বান্ধব হওয়া উচিত। মূল বিভাগ: 1) লোগো এবং মেনু সহ নেভিগেশন বার, 2) অ্যানিমেটেড ব্যাকগ্রাউন্ড, হেডলাইন, সাবহেডলাইন এবং প্রাথমিক সিটিএ বাটন সহ হিরো সেকশন, 3) আইকন, শিরোনাম এবং বিবরণ সহ ৩-৪টি পরিষেবা কার্ড সহ পরিষেবা বিভাগ, 4) ফিল্টারিং বিকল্প সহ পোর্টফোলিও/প্রকল্প গ্যালারি, 5) প্রোফাইল কার্ড সহ টিম বিভাগ, 6) প্রশংসাপত্র স্লাইডার, 7) ফর্ম এবং কোম্পানি বিবরণ সহ যোগাযোগ বিভাগ, 8) সামাজিক লিঙ্ক এবং নিউজলেটার সাইনআপ সহ ফুটার। ডিজাইন প্রয়োজনীয়তা: একটি নীল/ধূসর রঙের স্কিম ব্যবহার করুন, মসৃণ স্ক্রোলিং প্রয়োগ করুন, মোবাইল প্রতিক্রিয়াশীলতা নিশ্চিত করুন, হভার ইফেক্ট অন্তর্ভুক্ত করুন এবং সামঞ্জস্যপূর্ণ টাইপোগ্রাফি বজায় রাখুন। ডেস্কটপ এবং মোবাইল মকআপ উভয়ই প্রদান করুন।"
            }
        },
        business: {
            en: {
                short: "Generate a unique business idea for an online service.",
                medium: "Create a business idea for a subscription-based service targeting millennials. Include: target audience, value proposition, revenue model, and marketing strategy.",
                long: "Develop a comprehensive business plan for a technology startup. Include: 1) Executive summary, 2) Problem statement and market need, 3) Solution description and unique value proposition, 4) Target market analysis (size, demographics, psychographics), 5) Competitive analysis and differentiation, 6) Revenue model and pricing strategy, 7) Marketing and customer acquisition plan, 8) Operational requirements and key resources, 9) Financial projections for 3 years, 10) Risks and mitigation strategies, 11) Team structure and hiring plan, 12) Milestones and timeline for first 18 months."
            },
            bn: {
                short: "একটি অনলাইন পরিষেবার জন্য একটি অনন্য ব্যবসায়িক ধারণা তৈরি করুন।",
                medium: "মিলেনিয়ালদের লক্ষ্য করে একটি সাবস্ক্রিপশন-ভিত্তিক পরিষেবার জন্য একটি ব্যবসায়িক ধারণা তৈরি করুন। অন্তর্ভুক্ত করুন: লক্ষ্য দর্শক, মূল্য প্রস্তাব, রাজস্ব মডেল এবং বিপণন কৌশল।",
                long: "একটি প্রযুক্তি স্টার্টআপের জন্য একটি বিস্তৃত ব্যবসায়িক পরিকল্পনা তৈরি করুন। অন্তর্ভুক্ত করুন: 1) নির্বাহী সারাংশ, 2) সমস্যা বিবৃতি এবং বাজার প্রয়োজন, 3) সমাধান বর্ণনা এবং অনন্য মূল্য প্রস্তাব, 4) লক্ষ্য বাজার বিশ্লেষণ (আকার, জনসংখ্যাতত্ত্ব, মনস্তাত্ত্বিক), 5) প্রতিযোগিতামূলক বিশ্লেষণ এবং পৃথকীকরণ, 6) রাজস্ব মডেল এবং মূল্য কৌশল, 7) বিপণন এবং গ্রাহক অধিগ্রহণ পরিকল্পনা, 8) অপারেশনাল প্রয়োজনীয়তা এবং মূল সম্পদ, 9) 3 বছরের জন্য আর্থিক অনুমান, 10) ঝুঁকি এবং প্রশমন কৌশল, 11) টিম কাঠামো এবং নিয়োগ পরিকল্পনা, 12) প্রথম 18 মাসের জন্য মাইলফলক এবং সময়সূচী।"
            }
        },
        study: {
            en: {
                short: "Create a study plan for learning web development.",
                medium: "Design a 30-day study plan for learning frontend web development. Include daily topics, resources, and practice projects.",
                long: "Comprehensive 6-month study plan for becoming a full-stack web developer. Month 1: HTML5, CSS3, and responsive design fundamentals. Projects: Personal portfolio page. Month 2: JavaScript fundamentals, DOM manipulation, and ES6+ features. Projects: Interactive quiz app. Month 3: Frontend frameworks (React or Vue), component-based architecture, state management. Projects: Todo app with advanced features. Month 4: Backend development with Node.js and Express, REST APIs, database concepts. Projects: CRUD API with authentication. Month 5: Database implementation (MongoDB or PostgreSQL), authentication/authorization, deployment. Projects: Full-stack blog application. Month 6: Advanced topics (testing, performance optimization, security), portfolio development, job preparation. Include weekly milestones, recommended resources (free and paid), practice exercises, and portfolio project ideas."
            },
            bn: {
                short: "ওয়েব ডেভেলপমেন্ট শেখার জন্য একটি অধ্যয়ন পরিকল্পনা তৈরি করুন।",
                medium: "ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট শেখার জন্য একটি 30-দিনের অধ্যয়ন পরিকল্পনা ডিজাইন করুন। দৈনিক বিষয়, সম্পদ এবং অনুশীলন প্রকল্প অন্তর্ভুক্ত করুন।",
                long: "একটি ফুল-স্ট্যাক ওয়েব ডেভেলপার হওয়ার জন্য সম্পূর্ণ 6-মাসের অধ্যয়ন পরিকল্পনা। মাস 1: HTML5, CSS3, এবং প্রতিক্রিয়াশীল ডিজাইন মূলনীতি। প্রকল্প: ব্যক্তিগত পোর্টফোলিও পৃষ্ঠা। মাস 2: জাভাস্ক্রিপ্ট মূলনীতি, DOM ম্যানিপুলেশন, এবং ES6+ বৈশিষ্ট্য। প্রকল্প: ইন্টারেক্টিভ কুইজ অ্যাপ। মাস 3: ফ্রন্টএন্ড ফ্রেমওয়ার্ক (React বা Vue), কম্পোনেন্ট-ভিত্তিক আর্কিটেকচার, স্টেট ম্যানেজমেন্ট। প্রকল্প: উন্নত বৈশিষ্ট্য সহ টোডো অ্যাপ। মাস 4: Node.js এবং Express সহ ব্যাকএন্ড ডেভেলপমেন্ট, REST API, ডাটাবেস ধারণা। প্রকল্প: প্রমাণীকরণ সহ CRUD API। মাস 5: ডাটাবেস বাস্তবায়ন (MongoDB বা PostgreSQL), প্রমাণীকরণ/অনুমোদন, স্থাপনা। প্রকল্প: ফুল-স্ট্যাক ব্লগ অ্যাপ্লিকেশন। মাস 6: উন্নত বিষয় (পরীক্ষা, কর্মক্ষমতা অপ্টিমাইজেশন, নিরাপত্তা), পোর্টফোলিও ডেভেলপমেন্ট, চাকরি প্রস্তুতি। সাপ্তাহিক মাইলফলক, প্রস্তাবিত সম্পদ (বিনামূল্যে এবং প্রদত্ত), অনুশীলন অনুশীলন, এবং পোর্টফোলিও প্রকল্প ধারণা অন্তর্ভুক্ত করুন।"
            }
        },
        resume: {
            en: {
                short: "Create a professional resume template.",
                medium: "Design a modern resume template for a software developer. Include sections for skills, experience, education, and projects.",
                long: "Create a comprehensive ATS-friendly resume template for a mid-level software developer. Include: 1) Clean header with name, title, contact information, and links (LinkedIn, GitHub, portfolio), 2) Professional summary highlighting 5+ years of experience and key skills, 3) Technical Skills section organized by categories (Programming Languages, Frameworks, Tools, etc.) with proficiency indicators, 4) Work Experience in reverse chronological order with bullet points emphasizing achievements using the STAR method (Situation, Task, Action, Result), 5) Education section with degrees, institutions, and graduation dates, 6) Projects portfolio with descriptions, technologies used, and links to live demos/code, 7) Certifications and additional training, 8) Optional: Languages spoken, publications, or volunteer experience. Design should be clean, professional, and optimized for both human readers and Applicant Tracking Systems. Use appropriate white space, consistent formatting, and action-oriented language."
            },
            bn: {
                short: "একটি পেশাদার রিজিউম টেম্পলেট তৈরি করুন।",
                medium: "একটি সফটওয়্যার ডেভেলপারের জন্য একটি আধুনিক রিজিউম টেম্পলেট ডিজাইন করুন। দক্ষতা, অভিজ্ঞতা, শিক্ষা এবং প্রকল্পের জন্য বিভাগ অন্তর্ভুক্ত করুন।",
                long: "একটি মিড-লেভেল সফটওয়্যার ডেভেলপারের জন্য একটি সম্পূর্ণ ATS-বান্ধব রিজিউম টেম্পলেট তৈরি করুন। অন্তর্ভুক্ত করুন: 1) নাম, শিরোনাম, যোগাযোগের তথ্য এবং লিঙ্ক (LinkedIn, GitHub, পোর্টফোলিও) সহ পরিষ্কার হেডার, 2) 5+ বছরের অভিজ্ঞতা এবং মূল দক্ষতা হাইলাইট করে পেশাদার সারাংশ, 3) প্রযুক্তিগত দক্ষতা বিভাগ বিভাগ দ্বারা সংগঠিত (প্রোগ্রামিং ভাষা, ফ্রেমওয়ার্ক, সরঞ্জাম, ইত্যাদি) দক্ষতা সূচক সহ, 4) বিপরীত কালানুক্রমিক ক্রমে কাজের অভিজ্ঞতা বুলেট পয়েন্ট সহ STAR পদ্ধতি (Situation, Task, Action, Result) ব্যবহার করে অর্জন জোর দিয়ে, 5) ডিগ্রি, প্রতিষ্ঠান এবং স্নাতকের তারিখ সহ শিক্ষা বিভাগ, 6) বর্ণনা, ব্যবহৃত প্রযুক্তি এবং লাইভ ডেমো/কোডের লিঙ্ক সহ প্রকল্পের পোর্টফোলিও, 7) সার্টিফিকেশন এবং অতিরিক্ত প্রশিক্ষণ, 8) ঐচ্ছিক: কথিত ভাষা, প্রকাশনা, বা স্বেচ্ছাসেবক অভিজ্ঞতা। ডিজাইনটি পরিষ্কার, পেশাদার এবং মানব পাঠক এবং আবেদনকারী ট্র্যাকিং সিস্টেম উভয়ের জন্য অপ্টিমাইজ করা উচিত। উপযুক্ত সাদা স্থান, সামঞ্জস্যপূর্ণ ফরম্যাটিং এবং কর্ম-ভিত্তিক ভাষা ব্যবহার করুন।"
            }
        }
    };
    
    // Generate prompt based on selections
    function generatePrompt(template, tone, length, language) {
        if (!templates[template] || !templates[template][language] || !templates[template][language][length]) {
            return "Template not available in selected language/length combination.";
        }
        
        let prompt = templates[template][language][length];
        
        // Add tone instruction if not short
        if (length !== 'short') {
            const toneInstructions = {
                professional: "Use professional, formal language suitable for business contexts.",
                casual: "Use casual, conversational language that's easy to understand.",
                friendly: "Use warm, approachable language that builds rapport.",
                academic: "Use precise, academic language with proper citations where applicable."
            };
            
            if (toneInstructions[tone]) {
                prompt = `${toneInstructions[tone]}\n\n${prompt}`;
            }
        }
        
        return prompt;
    }
    
    // Update prompt when template is clicked
    promptTemplates.forEach(template => {
        template.addEventListener('click', () => {
            const templateType = template.getAttribute('data-template');
            const tone = toneSelect.value;
            const length = lengthSelect.value;
            const language = promptLangSelect.value;
            
            promptOutput.value = generatePrompt(templateType, tone, length, language);
        });
    });
    
    // Update prompt when any setting changes
    toneSelect.addEventListener('change', updatePrompt);
    lengthSelect.addEventListener('change', updatePrompt);
    promptLangSelect.addEventListener('change', updatePrompt);
    
    function updatePrompt() {
        const activeTemplate = document.querySelector('.prompt-template:active') || 
                              document.querySelector('.prompt-template.active');
        
        if (activeTemplate) {
            const templateType = activeTemplate.getAttribute('data-template');
            const tone = toneSelect.value;
            const length = lengthSelect.value;
            const language = promptLangSelect.value;
            
            promptOutput.value = generatePrompt(templateType, tone, length, language);
        }
    }
    
    // Set first template as active and generate initial prompt
    if (promptTemplates.length > 0) {
        promptTemplates[0].classList.add('active');
        updatePrompt();
    }
    
    // Copy to clipboard
    copyButton.addEventListener('click', () => {
        promptOutput.select();
        document.execCommand('copy');
        
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        copyButton.style.background = '#06d6a0';
        
        setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.style.background = '';
        }, 2000);
    });
}

// ===== AI FUN ZONE =====
function initializeFunZone() {
    // Joke Generator
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why do Java developers wear glasses? Because they don't C#!",
        "What's a programmer's favorite place in the house? The PHP (living room)!",
        "Why did the programmer quit his job? He didn't get arrays!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Why do Python programmers need glasses? Because they can't C!",
        "What do you call a programmer from Finland? Nerdic!",
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
        "What's the object-oriented way to become wealthy? Inheritance!",
        "Why did the developer go broke? Because he used up all his cache!"
    ];
    
    document.getElementById('generate-joke').addEventListener('click', () => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        document.getElementById('joke-display').innerHTML = `<p>"${randomJoke}"</p>`;
    });
    
    // Tech Fun Facts
    const facts = [
        "The first computer bug was an actual moth found in the Harvard Mark II computer in 1947.",
        "The world's first computer programmer was Ada Lovelace in the 1840s.",
        "The original name for Windows was 'Interface Manager'.",
        "The first website ever created is still online: http://info.cern.ch",
        "The first computer mouse was made of wood.",
        "The QWERTY keyboard layout was designed to slow typists down to prevent typewriter jams.",
        "There are more lines of code in a car than in the Windows 95 operating system.",
        "The first 1GB hard drive weighed over 500 pounds and cost $40,000 in 1980.",
        "The '@' symbol in email addresses was chosen by Ray Tomlinson because it meant 'at' the specified institution.",
        "The first smartphone was invented in 1992 by IBM, called 'Simon Personal Communicator'."
    ];
    
    document.getElementById('generate-fact').addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById('fact-display').innerHTML = `<p>${randomFact}</p>`;
    });
    
    // Quote Generator
    const quotes = [
        "The best way to predict the future is to invent it. - Alan Kay",
        "Software is eating the world. - Marc Andreessen",
        "The computer was born to solve problems that did not exist before. - Bill Gates",
        "The future is already here — it's just not very evenly distributed. - William Gibson",
        "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
        "The most dangerous phrase in the language is 'We've always done it this way.' - Grace Hopper",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past. - Tim Berners-Lee",
        "The question of whether computers can think is like the question of whether submarines can swim. - Edsger Dijkstra",
        "First, solve the problem. Then, write the code. - John Johnson"
    ];
    
    document.getElementById('generate-quote').addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote-display').innerHTML = `<p>"${randomQuote}"</p>`;
    });
    
    // Mood Selector
    const moodButtons = document.querySelectorAll('.mood-btn');
    const moodResponses = {
        happy: ["Great to see you're happy! Keep that positive energy going! 😊", 
                "Your happiness is contagious! Spread those good vibes! 🌟",
                "When you're happy, you're more productive! Use this energy! 🚀"],
        neutral: ["A neutral mood is perfect for focused work. Time to be productive! 💼",
                  "Neutral moods are great for logical thinking and problem-solving. 🧠",
                  "Balance is key. Use this calm state to plan your next move. ⚖️"],
        sad: ["Even the darkest clouds pass. Remember that tough times don't last. ☁️➡️☀️",
              "It's okay to not be okay. Take a break and practice self-care. 💖",
              "Every expert was once a beginner. Every master was once a disaster. Keep going! 🌈"]
    };
    
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            const responses = moodResponses[mood];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            document.getElementById('mood-response').innerHTML = `<p>${randomResponse}</p>`;
        });
    });
}

// ===== MINI GAMES =====
function initializeMiniGames() {
    const gameTabs = document.querySelectorAll('.game-tab');
    const gameContents = document.querySelectorAll('.game-content');
    
    // Tab switching
    gameTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const game = tab.getAttribute('data-game');
            
            // Update active tab
            gameTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding game content
            gameContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${game}-game`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Guess the Number Game
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guessesLeft = 10;
    let gameOver = false;
    
    const guessInput = document.getElementById('guess-input');
    const guessSubmit = document.getElementById('guess-submit');
    const guessFeedback = document.getElementById('guess-feedback');
    const guessHistory = document.getElementById('guess-history');
    const guessesLeftElement = document.getElementById('guesses-left');
    const guessReset = document.getElementById('guess-reset');
    
    function checkGuess() {
        if (gameOver) return;
        
        const guess = parseInt(guessInput.value);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            guessFeedback.textContent = "Please enter a valid number between 1 and 100.";
            guessFeedback.style.color = "var(--warning-color)";
            return;
        }
        
        guessesLeft--;
        guessesLeftElement.textContent = guessesLeft;
        
        // Add to history
        const historyItem = document.createElement('div');
        historyItem.textContent = `Guess #${11 - guessesLeft}: ${guess}`;
        guessHistory.appendChild(historyItem);
        
        if (guess === secretNumber) {
            guessFeedback.textContent = `🎉 Congratulations! You guessed the number ${secretNumber} in ${10 - guessesLeft} tries!`;
            guessFeedback.style.color = "var(--success-color)";
            gameOver = true;
            guessSubmit.disabled = true;
        } else if (guessesLeft === 0) {
            guessFeedback.textContent = `😔 Game Over! The number was ${secretNumber}.`;
            guessFeedback.style.color = "var(--danger-color)";
            gameOver = true;
            guessSubmit.disabled = true;
        } else {
            const hint = guess < secretNumber ? "Too low! 📈" : "Too high! 📉";
            guessFeedback.textContent = `${hint} You have ${guessesLeft} guesses left.`;
            guessFeedback.style.color = "var(--primary-color)";
        }
        
        guessInput.value = '';
        guessInput.focus();
    }
    
    function resetGuessGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        guessesLeft = 10;
        gameOver = false;
        
        guessesLeftElement.textContent = guessesLeft;
        guessFeedback.textContent = '';
        guessHistory.innerHTML = '';
        guessSubmit.disabled = false;
        guessInput.value = '';
        
        guessFeedback.textContent = "New game started! Guess a number between 1 and 100.";
        guessFeedback.style.color = "var(--text-primary)";
    }
    
    guessSubmit.addEventListener('click', checkGuess);
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkGuess();
    });
    guessReset.addEventListener('click', resetGuessGame);
    
    // Tic Tac Toe Game
    const tttBoard = document.getElementById('ttt-board');
    const tttStatus = document.getElementById('ttt-status');
    const tttReset = document.getElementById('ttt-reset');
    
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    
    // Create board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'ttt-cell';
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', handleTicTacToeClick);
        tttBoard.appendChild(cell);
    }
    
    function handleTicTacToeClick(e) {
        const index = parseInt(e.target.getAttribute('data-index'));
        
        if (gameBoard[index] !== '' || !gameActive) return;
        
        gameBoard[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        e.target.classList.add(currentPlayer.toLowerCase());
        
        if (checkTicTacToeWinner()) {
            tttStatus.textContent = `Player ${currentPlayer} Wins! 🎉`;
            gameActive = false;
            return;
        }
        
        if (gameBoard.every(cell => cell !== '')) {
            tttStatus.textContent = "Game Draw! 🤝";
            gameActive = false;
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        tttStatus.textContent = `Player ${currentPlayer}'s Turn`;
    }
    
    function checkTicTacToeWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        
        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }
    
    function resetTicTacToe() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        
        tttStatus.textContent = "Player X's Turn";
        
        document.querySelectorAll('.ttt-cell').forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
    }
    
    tttReset.addEventListener('click', resetTicTacToe);
    
    // Reaction Test Game
    const reactionLight = document.getElementById('reaction-light');
    const reactionBtn = document.getElementById('reaction-btn');
    const reactionTimeElement = document.getElementById('reaction-time');
    const bestTimeElement = document.getElementById('best-time');
    const reactionStart = document.getElementById('reaction-start');
    
    let startTime;
    let timer;
    let waitingForGreen = false;
    let bestTime = localStorage.getItem('bestReactionTime') || 0;
    bestTimeElement.textContent = bestTime;
    
    function startReactionTest() {
        reactionBtn.textContent = "Wait for Green...";
        reactionBtn.classList.remove('ready');
        reactionLight.style.background = "var(--danger-color)";
        waitingForGreen = false;
        
        // Random delay between 2-5 seconds
        const delay = Math.random() * 3000 + 2000;
        
        setTimeout(() => {
            reactionLight.style.background = "var(--success-color)";
            reactionLight.classList.add('green');
            reactionBtn.textContent = "CLICK NOW!";
            reactionBtn.classList.add('ready');
            startTime = Date.now();
            waitingForGreen = true;
        }, delay);
    }
    
    function recordReactionTime() {
        if (!waitingForGreen) {
            reactionTimeElement.textContent = "Too soon! Wait for green.";
            reactionTimeElement.style.color = "var(--danger-color)";
            clearTimeout(timer);
            return;
        }
        
        const reactionTime = Date.now() - startTime;
        reactionTimeElement.textContent = reactionTime;
        reactionTimeElement.style.color = "var(--success-color)";
        
        if (bestTime === 0 || reactionTime < bestTime) {
            bestTime = reactionTime;
            bestTimeElement.textContent = bestTime;
            localStorage.setItem('bestReactionTime', bestTime);
        }
        
        waitingForGreen = false;
        reactionLight.classList.remove('green');
        reactionBtn.textContent = "Wait for Green...";
        reactionBtn.classList.remove('ready');
    }
    
    reactionBtn.addEventListener('click', recordReactionTime);
    reactionStart.addEventListener('click', startReactionTest);
    
    // Initialize all games
    resetGuessGame();
    resetTicTacToe();
}

// ===== PORTFOLIO =====
function initializePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    const portfolioItems = [
        {
            title: "AI-Powered E-commerce Platform",
            description: "Full-stack e-commerce solution with AI recommendations, chatbot support, and automated inventory management.",
            technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Educational Portal with AI Tutor",
            description: "Online learning platform featuring an AI-powered virtual tutor, interactive lessons, and progress tracking.",
            technologies: ["Vue.js", "Python", "PostgreSQL", "OpenAI API"],
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Healthcare Automation System",
            description: "Medical practice management software with appointment scheduling, patient records, and AI-powered diagnostics assistance.",
            technologies: ["Angular", "Java", "MySQL", "Healthcare AI"],
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Smart Home Mobile App",
            description: "Cross-platform mobile application for controlling IoT devices with voice commands and AI automation routines.",
            technologies: ["React Native", "Firebase", "IoT", "Voice AI"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Financial Analytics Dashboard",
            description: "Real-time financial data visualization platform with predictive analytics and AI-powered investment insights.",
            technologies: ["D3.js", "Express.js", "Redis", "Machine Learning"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Travel Planning AI Assistant",
            description: "Intelligent travel planning application that uses AI to create personalized itineraries based on user preferences.",
            technologies: ["Next.js", "Node.js", "Maps API", "Recommendation AI"],
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ];
    
    portfolioItems.forEach(item => {
        const portfolioCard = document.createElement('div');
        portfolioCard.className = 'portfolio-card glass';
        
        const technologiesHTML = item.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        portfolioCard.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="portfolio-tech">
                    ${technologiesHTML}
                </div>
                <div class="portfolio-actions">
                    <button class="btn btn-primary" data-i18n="live_preview">Live Preview</button>
                    <button class="btn btn-outline" data-i18n="view_code">View Code</button>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioCard);
    });
    
    // Add click handlers for portfolio buttons
    portfolioGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            alert('This would open a live preview of the project. In a real implementation, this would link to the deployed application.');
        } else if (e.target.classList.contains('btn-outline')) {
            alert('This would open the source code repository. In a real implementation, this would link to GitHub or similar platform.');
        }
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        
        // Simple validation
        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // In a real implementation, this would send the data to a server
        // For demo purposes, we'll just show a success message
        showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
        
        // Simulate form submission
        console.log('Contact form submitted:', { name, email, message });
    });
    
    function showFormMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// ===== VISITOR COUNTER =====
function initializeVisitorCounter() {
    const visitorCount = document.getElementById('visitor-count');
    
    // Get current count from localStorage or start at a random number for demo
    let count = localStorage.getItem('visitorCount') || Math.floor(Math.random() * 1000) + 500;
    
    // Increment count
    count++;
    localStorage.setItem('visitorCount', count);
    
    // Animate counting up
    let current = parseInt(visitorCount.textContent);
    const increment = Math.ceil(count / 50);
    const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
            current = count;
            clearInterval(timer);
        }
        visitorCount.textContent = current;
    }, 30);
}

// ===== BACK TO TOP =====
function initializeBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== KEYBOARD SHORTCUTS =====
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger shortcuts when user is typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch(e.key.toLowerCase()) {
            case 'd':
                toggleTheme();
                break;
            case 'l':
                toggleLanguage();
                break;
            case 's':
                toggleSettingsPanel();
                break;
            case 'm':
                toggleMusic();
                break;
            case 'h':
                // Toggle hamburger menu
                document.getElementById('hamburger').click();
                break;
            case 'escape':
                closeSettingsPanel();
                break;
        }
    });
}

// ===== SETTINGS PANEL =====
function initializeSettingsPanel() {
    const settingsToggle = document.querySelector('.settings-toggle');
    const settingsPanel = document.getElementById('settings-panel');
    const closeSettings = document.querySelector('.close-settings');
    const musicToggle = document.getElementById('music-toggle');
    const animationsToggle = document.getElementById('animations-toggle');
    const fontSizeSlider = document.getElementById('font-size');
    
    // Toggle settings panel
    if (settingsToggle) {
        settingsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSettingsPanel();
        });
    }
    
    // Close settings panel
    closeSettings.addEventListener('click', closeSettingsPanel);
    
    // Background music toggle
    const bgMusic = document.getElementById('bg-music');
    musicToggle.addEventListener('change', () => {
        if (musicToggle.checked) {
            bgMusic.volume = 0.3;
            bgMusic.play().catch(e => console.log('Autoplay prevented:', e));
        } else {
            bgMusic.pause();
        }
    });
    
    // Animations toggle
    animationsToggle.addEventListener('change', () => {
        document.body.classList.toggle('no-animations', !animationsToggle.checked);
    });
    
    // Font size control
    fontSizeSlider.addEventListener('input', () => {
        document.documentElement.style.fontSize = `${fontSizeSlider.value}px`;
        localStorage.setItem('fontSize', fontSizeSlider.value);
    });
    
    // Load saved font size
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        fontSizeSlider.value = savedFontSize;
        document.documentElement.style.fontSize = `${savedFontSize}px`;
    }
}

function toggleSettingsPanel() {
    const settingsPanel = document.getElementById('settings-panel');
    settingsPanel.classList.toggle('active');
}

function closeSettingsPanel() {
    const settingsPanel = document.getElementById('settings-panel');
    settingsPanel.classList.remove('active');
}

// ===== MUSIC TOGGLE =====
function toggleMusic() {
    const musicToggle = document.getElementById('music-toggle');
    musicToggle.checked = !musicToggle.checked;
    musicToggle.dispatchEvent(new Event('change'));
}

// ===== CURRENT YEAR =====
document.getElementById('current-year').textContent = new Date().getFullYear();