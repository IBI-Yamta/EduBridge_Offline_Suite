import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, Download, Save, UserPlus, Calculator, FileSpreadsheet, 
  AlertCircle, CheckCircle2, RotateCcw, FilePlus2, History, ArrowRight, 
  Settings2, FolderOpen, Search, Clock, Calendar, BookOpen, HelpCircle, 
  Trophy, Cpu, Mail, Copy, ChevronRight, LayoutGrid, Info, Monitor,
  BookMarked, ChevronLeft, GraduationCap, MessageSquare, Presentation,
  Smartphone, HardDrive, Keyboard, Wand2, FileText, ShieldCheck, School,
  ListChecks, Book, ArrowUpRight, Edit3, Camera, Image as ImageIcon, X,
  FileDown, Printer, FileCode, Lightbulb, Upload, Database, Zap, MousePointer2,
  Lock, Unlock, User, KeyRound, Phone, MessageCircle, LifeBuoy, ShieldCheck as Shield,
  Users
} from 'lucide-react';

/**
 * ==============================================================================================
 * EDUBRIDGE OFFLINE SUITE - ULTIMATE MASTER EDITION
 * ==============================================================================================
 * Developed by: IB TECHIFIED
 * Updates: 
 * 1. ARCHIVE TIMESTAMPS: Added "Last Modified" to EduCalc register cards.
 * 2. VAULT TIMESTAMPS: Added "Last Modified" indicators to lesson note cards.
 * 3. EXPORT AS DOC: Professional Microsoft Word export added to workspace.
 * 4. CLEAN UI: Removed all version tags.
 * 5. REGISTRY & STABLE NAVIGATION PRESERVED.
 * ==============================================================================================
 */

const NIGERIAN_SCHEMES = {
  'Pri 1': [
    { subject: 'Mathematics', topics: 'Numbers 1-100: Comprehensive identification, sequential counting, and proper writing techniques using number lines. Simple addition operations of single digits within the 1-20 range using concrete objects. Simple subtraction operations through practical take-away activities. Identification and properties of 2D shapes: Circle, Square, Triangle, and Rectangle. Basic concept of length: Differentiating between Long and Short through classroom measurements. Basic concept of mass: Differentiating between Heavy and Light objects. Concept of Capacity: Full and Empty.' },
    { subject: 'English', topics: 'Phonics: Mastery of A-Z letter sounds, vowel identification, and consonant blending. Letter formation and penmanship exercises using four-line guides. Simple greetings and essential classroom commands for daily interaction. Naming words (Nouns): Categorizing persons, places, and things in the immediate environment. Simple action words (Verbs) through role-play. Introduction to short stories, nursery rhymes, and simple poems to develop oral expression and listening skills.' },
    { subject: 'Basic Science', topics: 'The Human Body: Detailed identification of external body parts and their specific sensory functions. Personal hygiene: Understanding the critical importance of washing hands, brushing teeth, and regular bathing routines. Living and Non-living things: Clear identification and listing of distinct characteristics such as movement and feeding. Soil: Common uses in agriculture and building, and identifying types found in the school environment (Sand, Clay, Loam).' },
    { subject: 'Social Studies', topics: 'The Family: Comprehensive definition and exploration of types (Nuclear and Extended). Roles and responsibilities of different family members in maintaining harmony. Developing respect for elders and established authorities in the community. Home safety rules: Identifying household hazards and prevention of common accidents. The immediate environment: Practical steps for keeping the home and school surroundings clean and healthy to prevent disease.' }
  ],
  'Pri 2': [
    { subject: 'Mathematics', topics: 'Place Value: Deep understanding of Units, Tens, and a formal introduction to Hundreds. Addition and Subtraction of 2-digit numbers involving carry-over and borrowing techniques. Multiplication introduced as repeated addition (Focus on 2x, 3x, 5x, and 10x tables). Telling time: Accurate reading of the analog clock face in full hours and half hours. Measurement of length using non-standard units such as hand-span, footsteps, and sticks. Basic division as equal sharing.' },
    { subject: 'English', topics: 'Sentence formation and strict adherence to basic punctuation rules (Capital letters, full stops, question marks). Effective use of articles: a, an, and the. Introduction to the past tense of regular verbs through storytelling. Reading comprehension skills: Techniques for answering direct questions from a simple text. Identifying opposites (Antonyms) and similar words (Synonyms). Correct use of pronouns (I, You, He, She, It) in constructing simple and clear sentences.' },
    { subject: 'Basic Science', topics: 'Plants: Detailed study of types of plants, primary parts of a plant (Root, Stem, Leaf), and essential needs for healthy growth (Sunlight, Water, Soil). Animals: Classification based on habitat (Land, Water) and modes of movement (Fly, Walk, Swim). Energy: Identification of common sources of light and sound found in a typical home. The Five Senses: Deep dive into Sight, Smell, Hearing, Taste, and Touch, and how they interact to protect the body.' },
    { subject: 'Social Studies', topics: 'The School: Detailed identification of members of the school community and their specific professional roles. Community leaders: Understanding the functions of traditional rulers, religious leaders, and local government chairmen. Basic manners and social rules for appropriate public behavior and etiquette. Public places in the community: Exploring the functions of Markets, Hospitals, Post Offices, and Places of Worship.' }
  ],
  'Pri 3': [
    { subject: 'Mathematics', topics: 'Numbers up to 1000: Mastering place value, expansion, and ordering. Multi-digit multiplication (2-digit numbers by 1-digit). Long Division basics: Introduction to sharing and grouping. Introduction to Fractions: Conceptual understanding of 1/2, 1/4, 3/4 and addition of like fractions. Measurement: Standard units of mass in Kilograms and capacity in Liters. Plane shapes: Exploring the unique properties of triangles, squares, and different quadrilaterals.' },
    { subject: 'English', topics: 'Pronouns and Adjectives: Detailed types and their strategic usage in descriptive sentences. Regular and Irregular verbs: Mastering past tense forms for effective storytelling. Punctuation: Effective use of full stops, commas, and question marks in complex sentences. Informal letter writing: Understanding the five parts of a letter (Address, Date, Salutation, Body, Conclusion). Writing narrative and descriptive essays on familiar community topics and events.' },
    { subject: 'Basic Science', topics: 'Soil Classification: Exploring Clay, Sand, and Loam properties through practical observation and water retention tests. Water: Analysis of sources, diverse uses, and critical purification methods (Boiling, Filtering, Chlorination). Introduction to the Solar System: The relationship between the Sun, Moon, and Planets. Weather conditions: Understanding types of weather and their direct effects on human agricultural activities and dressing.' },
    { subject: 'Social Studies', topics: 'Our Culture: Exploring the rich diversity of Food, Dress, and Language across the different ethnic groups in Nigeria. Civic rights and responsibilities of children within the legal and school framework. Saving money: The economic importance of thrift and an introduction to basic banking services and currency. Road safety rules: Comprehensive understanding of traffic lights, pedestrian signs, and road usage for safe walking.' }
  ],
  'Pri 4': [
    { subject: 'Mathematics', topics: 'Decimals and Percentages: Fundamental conversions and simple classroom calculations. Area of Plane Shapes: Formulas and calculations for the area of Rectangles and Squares. Volume: Understanding the space occupied by Cubes and Cuboids. Data handling: Construction of frequency tables, Bar charts, and the calculation of Mean and Mode for simple data sets. Roman Numerals: Mastery up to 100. Introduction to simple Angles (Right, Acute, Obtuse).' },
    { subject: 'English', topics: 'Adverbs and Conjunctions: Using parts of speech to link complex ideas and describe actions in sentences. Direct and Indirect Speech: Basic rules of transformation. Formal letter writing: Format for official applications, petitions, and requests. Creative writing: Techniques for developing an engaging plot and relatable characters. Use of Prefixes and Suffixes to expand vocabulary. Word registers: Specialized vocabulary for school, hospital, marketplace, and travel.' },
    { subject: 'Basic Science', topics: 'The Human Skeletal System: Detailed classification of bones and major joints in the body and their functions. Blood Circulation: Comprehensive introduction to the Heart, Blood vessels, and the flow of blood. Simple Machines: Mechanics of Levers, Pulleys, and Inclined planes. Ecosystems: Understanding the interdependence of living things in local habitats. States of matter: Investigating the properties of Solids, Liquids, and Gases through experiments.' },
    { subject: 'Social Studies', topics: 'Government: Definition, the three levels (Local, State, Federal), and the three arms of government (Executive, Legislative, Judicial). Rule of Law and social justice in the Nigerian context. Natural Resources: Identification, types, and geographic location across Nigeria. Citizenship and National Identity: Deep dive into national symbols (Flag, Coat of Arms) and their historical meanings. Introduction to the concept of Democracy.' }
  ],
  'Pri 5': [
    { subject: 'Mathematics', topics: 'Ratio and Proportion: Calculation and real-life economic applications. Introduction to Algebra: Solving open sentences and simple linear equations. Geometry: Understanding the Circumference and Area of a Circle. Speed, Distance, and Time: Fundamental physics-based calculations. Working with Roman Numerals up to 1000. Temperature: Reading and interpreting the Celsius and Fahrenheit scales. Binary numbers: Addition and subtraction in base 2.' },
    { subject: 'English', topics: 'Prepositions and Interjections: Enhancing sentence structure and emotional depth. Idioms and Proverbs: Understanding and using cultural expressions. Advanced Comprehension and Summary skills: Techniques for condensing information without losing meaning. Argumentative Essays: Researching and developing logical points for debate. Active and Passive voice: Usage in formal and informal writing. Vocabulary: Systematic word building using greek and latin roots.' },
    { subject: 'Basic Science', topics: 'The Human Digestive System: Organs involved and the biological process of digestion. Reproduction in Plants: Detailed study of pollination, fertilization, and seed dispersal. Magnetism and Electricity basics: Properties of magnets and simple circuit construction. Environmental Pollution Control: Modern methods of waste management and recycling. Basic Technology: Identification and use of Woodwork and Metalwork tools and safety precautions.' },
    { subject: 'Social Studies', topics: 'Inter-ethnic relationships in Nigeria: Historical perspectives on promoting unity in diversity. National symbols: Protocols for respecting the Flag and the National Anthem. Drug abuse education: Scientific prevention and the social consequences of abuse. Global warming: Causes, effects, and environmental protection strategies. State Government: Detailed functions and executive responsibilities of the Governor and State Assembly.' }
  ],
  'JSS 1': [
    { subject: 'Mathematics', topics: 'Number Bases: Mastery of Binary (Base 2) and Denary (Base 10) conversions. LCM and HCF: Advanced applications in complex problem solving. Fractions, Decimals, and Percentages: Comparisons, ordering, and arithmetic operations. Basic Algebra: Simplification of algebraic expressions and variable substitution. Geometry: Precise construction of angles and triangles using a pair of compasses and ruler. Statistics: Concept of Average and Range.' },
    { subject: 'English', topics: 'Parts of Speech intensive: Mastery of Nouns, Verbs, Pronouns, Adverbs, and Adjectives in context. Sentence Structure: Detailed analysis of Subject, Predicate, and Object. Active and Passive voice introduction. Narrative and Descriptive essay writing: Focus on vivid imagery and flow. Literature: Detailed introduction to the three genres—Drama, Prose, and Poetry. Figures of speech: Simile and Metaphor.' },
    { subject: 'Basic Science', topics: 'Matter: Exploration of States, Properties, and the difference between Physical and Chemical changes. Living things: Systematic classification and characteristics of major biological kingdoms. Family Health: Comprehensive study of Puberty, Personal hygiene, and reproductive health education. Force, Energy, and Power: Definitions, units, and fundamental physics calculations. Basic tech: Tools for measurement.' },
    { subject: 'Computer Science', topics: 'History of Computing: Evolution from the Abacus to the 5th generation of modern computers. Generations of Computers: Distinguishing features. Basic Hardware Components: Detailed study of Input, Output, and Processing units. Basic keyboard skills and a professional introduction to word processing. Data and Information: Understanding the differences and the processing cycle. Computer Ethics.' }
  ],
  'JSS 2': [
    { subject: 'Mathematics', topics: 'Linear Equations and Inequalities: Solving and graphing on a number line. Pythagorean Theorem: Applications in solving for missing sides of right-angled triangles. Area and Volume: Calculating the surface area and volume of Cylinders and Prisms. Probability: Calculating theoretical outcomes for simple random events. Statistics: Practical data collection, Frequency distribution tables, and the construction of Pie charts. Directed Numbers.' },
    { subject: 'English', topics: 'Figures of Speech: Advanced Simile, Metaphor, and Personification in literature. Tenses: Mastering Perfect and Continuous forms for professional writing. Clauses and Phrases: Identification, types, and usage in complex sentences. Summary writing techniques: How to eliminate irrelevant details. Drama analysis: Elements of a play, characterization, and stagecraft terminology. Oral English: Vowels and Consonants.' },
    { subject: 'Basic Science', topics: 'Kinetic Theory of Matter: Explaining molecular behavior in different states. Thermal Energy: Investigating the mechanisms of Conduction, Convection, and Radiation. The Human Brain and Nervous System: Detailed anatomy and coordination. Ecology: Detailed study of food chains, food webs, and the flow of energy through different trophic levels. Environmental Pollution: Causes and scientific mitigation. Chemicals in society.' },
    { subject: 'Computer Science', topics: 'System Software vs Application Software: Definitions, functions, and key differences. Operating Systems: Detailed functions and examples (Windows, Android, iOS). Word Processing: Professional formatting and document editing techniques in Microsoft Word. Storage devices: Understanding the hierarchy of Primary and Secondary storage units and capacities. Logic Circuits: Simple AND/OR gates.' }
  ],
  'JSS 3': [
    { subject: 'Mathematics', topics: 'Quadratic Equations: Factorization method and introduction to quadratic graphs. Simultaneous Equations: Mastery of Substitution and Elimination methods. Trigonometry: Real-world applications of SOH CAH TOA. Compound Interest and Depreciation: Mathematical models for finance. Geometry: Calculating the sum of interior and exterior angles in various Polygons. Variations: Direct, Inverse, and Joint variations. Area of sectors.' },
    { subject: 'English', topics: 'Complex Sentence Structures: Using Coordination and Subordination effectively. Argumentative writing and Debating skills: Rhetorical strategies. Novel review and literary analysis: Deep dive into set texts. Preparations for Junior WAEC/BECE: Past question drills. Word register: Exploring vocabulary specific to commerce, industry, and modern technology. Formal vs Informal registers.' },
    { subject: 'Basic Science', topics: 'Radioactivity: Understanding Natural and Artificial sources of nuclear energy. Space Travel: History and the physics of Satellite technology. Drug abuse: Scientific effects on the human central nervous system. Genetic variation and heredity: Introduction to DNA and traits. Ethics in Science: The social and environmental responsibility of modern scientists. Metabolism in the human body.' },
    { subject: 'Computer Science', topics: 'The Internet and World Wide Web (WWW): Protocols and navigation. Search Engines: Advanced techniques for effective academic research. Basic HTML: Building simple webpages using tags. Computer Ethics and Cybersecurity: Strategies for protecting digital data. Spreadsheet introduction: Microsoft Excel basics, formulas, and data visualization. Graphic packages intro.' }
  ],
  'SS 1': [
    { subject: 'Mathematics', topics: 'Indices and Logarithms: Mastery of laws and complex applications. Sets and Venn Diagrams: Operations, cardinality, and solving 3-set problems. Quadratic Equations: Mastery of the Formula method and Completing the Square. Modular Arithmetic. Geometry Theorems: Detailed proofs for Triangles and Circles. Coordinate Geometry: Distance formula and midpoint. Surds: Addition, subtraction, and rationalization.' },
    { subject: 'English', topics: 'Lexis and Structure: Advanced grammar and sophisticated vocabulary development. Word Registers: In-depth study of Legal, Medical, and Technical terminology. Narrative and Descriptive Essays: Using stylistic devices and tone. Phonetics: Detailed study of Pure Vowels and Diphthongs. Consonant clusters, word stress, and intonation patterns for public speaking. Comprehension: Drawing inferences.' },
    { subject: 'Biology', topics: 'Cell structure and functions: Comparison of plant and animal cells. Classification of Living organisms: Detailed study of Kingdoms and Phyla. Nutrition: Chemical process of Photosynthesis and the Human Digestive system. Respiration: Aerobic and Anaerobic processes at the cellular level. Basic Ecology: Study of Biomes, energy flow, and local ecosystems. Support and movement in organisms.' },
    { subject: 'Physics', topics: 'Measurements and Units: Distinction between Scalar and Vector quantities. Motion: In-depth Speed, Velocity, and Acceleration calculations. Work, Energy, and Power: Forms of energy and the law of conservation. Heat Energy: Accurate temperature measurement and the study of Thermal expansion in solids and liquids. Fluid at rest: Pressure, Archimedes principle, and Upthrust.' },
    { subject: 'Chemistry', topics: 'Nature of Matter: The particulate nature of matter. Atoms, Molecules, and Ions: Fundamental building blocks. Chemical Symbols, Formulas, and Valency: Writing and balancing equations. Separating techniques: Distillation, Chromatography, and Fractional Crystallization. Kinetic theory of matter and Gas Laws (Boyle’s, Charles’s, and Avogadro’s). Structure of the Atom.' }
  ],
  'SS 2': [
    { subject: 'Mathematics', topics: 'Trigonometry: Mastery of Sine and Cosine Rules for non-right triangles. Sequences and Series: Advanced Arithmetic and Geometric Progressions (AP/GP). Circle Geometry: In-depth proofs for Chord and Tangent theorems. Statistics: Calculation of Mean Deviation, Variance, and Standard Deviation. Linear inequalities in two variables. Logic: Statements, connectives, and truth tables.' },
    { subject: 'English', topics: 'Expository Essays: Developing structure, clarity, and authority. Complex Clauses: Advanced Noun, Adjectival, and Adverbial clauses. Advanced Register of Judiciary and Government. Speech writing: Techniques for Formal and Informal occasions. Phonetics: Mastery of Consonant sounds and complex intonation patterns for effective communication. Summary: Drafting techniques for long reports.' },
    { subject: 'Biology', topics: 'Excretion and Osmoregulation: Biological mechanisms in humans and plants. Nervous and Hormonal Coordination: Detailed study of the Brain, Spinal cord, and Endocrine glands. Reproductive System: Anatomy and physiology in Animals and Plants. Plant transport and skeletal support systems. Adaptation, Selection, and Evolution basics. Regulation of internal environment.' },
    { subject: 'Physics', topics: 'Light Waves: reflection and Refraction through mirrors and lenses. Sound Waves: Characteristics, applications, and ultrasound. Electric Field: In-depth Current, Resistance, and Ohm’s Law. Gas Laws: The Universal gas equation and kinetic molecular theory. Gravitational fields: Newton’s law of universal gravitation. Wave-Particle paradox introduction.' },
    { subject: 'Chemistry', topics: 'Periodic Table: Systematic study of groupings and periodic trends. Chemical Bonding: Detailed Ionic, Covalent, and Metallic bonding. Oxidation and Reduction (REDOX) reactions. Electrolysis: Principles and Faraday’s laws of electrolysis. Carbon and its Compounds: Organic chemistry introduction. Energetics, Entropy, and Chemical Equilibrium. Nitrogen compounds.' }
  ],
  'SS 3': [
    { subject: 'Mathematics', topics: 'Calculus: Fundamental Differentiation and Integration basics. Matrices and Determinants: Operations and Cramer’s rule. Vector Analysis in 2D space. Longitude and Latitude: Calculating great circle distances on Earth. Number bases review and conversion. Practical Statistics: Advanced work with large data sets and probability distributions for final exams. Financial math: Annuities and Amortization.' },
    { subject: 'English', topics: 'WAEC/NECO Examination Prep: Intensive analysis of past questions and marking schemes. Formal Letters and Job Applications: Professional correspondence. Oral English: Stress, Rhythm, and Intonation patterns for effective communication. Summary Skills: Extracting and rephrasing main points from dense texts. Word register of Science, Technology, and Media. Creative composition for final exams.' },
    { subject: 'Biology', topics: 'Genetics and Heredity: Mendelian laws, monohybrid/dihybrid crosses, and sex-linked traits. Evolution and Variation: Theories of evolution. Ecology: Detailed Population Dynamics, Succession, and Environmental Conservation. Nervous system review: Sensory organs and complex reflex actions. Biology of survival in harsh environments.' },
    { subject: 'Physics', topics: 'Atomic Physics: Radioactivity, X-rays, and Nuclear structure. Electronics: Diodes, Transistors, and Logic Gates (AND, OR, NOT). Magnetic Fields: Force calculation on moving charges. Electromagnetic Induction: Transformers, Motors, and Generators. Alternating current (AC) circuits: Reactance and Impedance. Quantum mechanics basics.' },
    { subject: 'Chemistry', topics: 'Organic Chemistry: Detailed study of Hydrocarbons, Alcohols, and Organic Acids. Qualitative Analysis: Identification of salts and gases in lab environments. Chemical Equilibrium: Applying Le Chatelier’s principle. Fats and Oils: Saponification. Nuclear chemistry: Fission, Fusion, and applications. Chemistry in industry: Plastics and Soaps.' }
  ]
};

const SUBJECT_LISTS = {
  'Primary': ['Mathematics', 'English', 'Basic Science', 'Social Studies', 'PHE', 'CCA', 'Hausa', 'Arabic', 'Home Economics'],
  'Junior': ['Mathematics', 'English', 'Basic Science', 'Pre-Vocational', 'National Value', 'CCA', 'Business Studies', 'Computer Science'],
  'Senior': ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'Civic Education', 'Economics', 'Government', 'Agriculture', 'Literature', 'Islamic Studies', 'Commerce']
};

// --- NORMALIZATION & DETECTION HELPERS ---
const normalizeClass = (name) => name?.trim().toLowerCase().replace(/\s+/g, '') || "";

const detectCategory = (className) => {
  const n = normalizeClass(className);
  if (n.startsWith('pri') || n.startsWith('grade')) return 'Primary';
  if (n.startsWith('jss')) return 'Junior';
  if (n.startsWith('ss')) return 'Senior';
  return 'Senior';
};

export default function App() {
  // --- AUTH & PROFILE STATE ---
  const [userProfile, setUserProfile] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  const [setupName, setSetupName] = useState("");
  const [setupPass, setSetupPass] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // --- NAVIGATION STATE ---
  const [currentModule, setCurrentModule] = useState('hub');
  
  // --- STUDENT DATABASE STATE ---
  const [globalStudents, setGlobalStudents] = useState([]);
  const [dbSearch, setDbSearch] = useState("");

  // --- EDUCALC DATA STATE ---
  const [calcId, setCalcId] = useState(null);
  const [students, setStudents] = useState([]);
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [registers, setRegisters] = useState([]);

  // --- EDUNOTE STATE ---
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null); 
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [currentNote, setCurrentNote] = useState("");
  const [noteTopic, setNoteTopic] = useState("");
  const [noteImage, setNoteImage] = useState(null); 
  const [noteArchives, setNoteArchives] = useState({}); 

  // --- UI STATE ---
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isPrinting, setIsPrinting] = useState(false);

  // --- STABLE NAVIGATION LOGIC ---
  const changeView = (module, data = {}) => {
    if (module === currentModule && 
        (data.subj === selectedSubject || data.subj === undefined) &&
        (data.level === selectedLevel || data.level === undefined)) return;

    setCurrentModule(module);
    if (data.category !== undefined) setSelectedCategory(data.category);
    if (data.subj !== undefined) setSelectedSubject(data.subj);
    if (data.level !== undefined) setSelectedLevel(data.level);
    if (data.calcId !== undefined) setCalcId(data.calcId);
    if (data.students !== undefined) setStudents(data.students);
    if (data.subject !== undefined) setSubject(data.subject);
    if (data.className !== undefined) setClassName(data.className);

    window.history.pushState({ 
      module, 
      category: data.category ?? selectedCategory,
      subj: data.subj ?? selectedSubject,
      level: data.level ?? selectedLevel,
      calcId: data.calcId ?? calcId,
      students: data.students ?? students,
      subject: data.subject ?? subject,
      className: data.className ?? className
    }, "");
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setCurrentModule('hub');
    }
  };

  useEffect(() => {
    if (!window.history.state) window.history.replaceState({ module: 'hub' }, "");
    const handlePopState = (event) => {
      if (event.state) {
        const s = event.state;
        setCurrentModule(s.module || 'hub');
        setSelectedCategory(s.category || null);
        setSelectedSubject(s.subj || null);
        setSelectedLevel(s.level || null);
        setCalcId(s.calcId || null);
        setStudents(s.students || []);
        setSubject(s.subject || "");
        setClassName(s.className || "");
      } else {
        setCurrentModule('hub');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- LOCAL PERSISTENCE ---
  useEffect(() => {
    try {
      const savedRegs = localStorage.getItem('edubridge_regs_vfinal');
      const savedNotes = localStorage.getItem('edubridge_notes_vfinal');
      const savedProfile = localStorage.getItem('edubridge_user_profile');
      const savedDB = localStorage.getItem('edubridge_global_students_vfinal');
      if (savedRegs) setRegisters(JSON.parse(savedRegs));
      if (savedNotes) setNoteArchives(JSON.parse(savedNotes));
      if (savedProfile) setUserProfile(JSON.parse(savedProfile));
      if (savedDB) setGlobalStudents(JSON.parse(savedDB));
    } catch (e) { console.error("Storage load error."); }
  }, []);

  useEffect(() => {
    localStorage.setItem('edubridge_regs_vfinal', JSON.stringify(registers));
    localStorage.setItem('edubridge_notes_vfinal', JSON.stringify(noteArchives));
    localStorage.setItem('edubridge_global_students_vfinal', JSON.stringify(globalStudents));
    if (userProfile) localStorage.setItem('edubridge_user_profile', JSON.stringify(userProfile));
  }, [registers, noteArchives, userProfile, globalStudents]);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // --- AUTH LOGIC ---
  const handleSetup = () => {
    if (!setupName || !setupPass) return triggerToast("Fill all fields");
    setUserProfile({ name: setupName, password: setupPass, created: new Date().toLocaleDateString() });
    setIsLocked(false);
    triggerToast("Profile Created!");
  };

  const handleLogin = () => {
    if (loginPass === userProfile.password) {
      setIsLocked(false);
      triggerToast(`Welcome back, ${userProfile.name}`);
    } else triggerToast("Incorrect Password");
  };

  // --- DATABASE LOGIC ---
  const addToDatabase = (name, targetClass) => {
    if(!name || !targetClass) return triggerToast("Fill both fields");
    setGlobalStudents([{ id: Date.now(), name: name.toUpperCase(), className: targetClass.toUpperCase() }, ...globalStudents]);
    triggerToast("Added to Registry");
  };

  // --- EDUCALC LOGIC ---
  const handleStartRegister = () => {
    if (!subject || !className) return triggerToast("Fill both fields.");
    const existing = registers.find(r => normalizeClass(r.subject) === normalizeClass(subject) && normalizeClass(r.className) === normalizeClass(className));
    if (existing) loadRegister(existing);
    else { 
      const matching = globalStudents
        .filter(gs => normalizeClass(gs.className) === normalizeClass(className))
        .map(gs => ({ id: gs.id, name: gs.name, ca1:0, ca2:0, exam:0, total:0, grade:"F" }));
      if(matching.length > 0) triggerToast(`Imported ${matching.length} Students from Registry`);
      changeView('educalc_register', { calcId: null, students: matching });
    }
  };

  const saveRegister = () => {
    if (!subject || !className) return triggerToast("Subject/Class missing");
    const id = calcId || Date.now();
    const entry = { id, subject, className, students, lastSaved: new Date().toLocaleString([], { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }) };
    setRegisters([entry, ...registers.filter(r => r.id !== id)]);
    setCalcId(id);
    triggerToast("Work Saved Locally!");
  };

  const loadRegister = (record) => {
    changeView('educalc_register', { calcId: record.id, students: record.students || [], subject: record.subject, className: record.className });
  };

  const updateStudent = (id, field, value) => {
    setStudents(students.map(s => {
      if (s.id === id) {
        const newData = { ...s, [field]: value };
        if (['ca1', 'ca2', 'exam'].includes(field)) {
          const tot = Number(field === 'ca1' ? value : s.ca1) + Number(field === 'ca2' ? value : s.ca2) + Number(field === 'exam' ? value : s.exam);
          newData.total = tot;
          newData.grade = tot >= 70 ? "A" : tot >= 60 ? "B" : tot >= 50 ? "C" : tot >= 45 ? "D" : tot >= 40 ? "E" : "F";
        }
        return newData;
      } return s;
    }));
  };

  const exportToCSV = () => {
    if(!students.length) return triggerToast("No data to export");
    let csv = "S/N,Student Name,CA 1,CA 2,Exam,Total,Grade\n" + students.map((s,i) => `${i+1},${s.name},${s.ca1},${s.ca2},${s.exam},${s.total},${s.grade}`).join("\n");
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${subject}_${className}_Records.csv`;
    a.click();
  };

  const handleSetupNoteSave = () => {
    if (!noteTopic || !currentNote) return triggerToast("Content missing");
    const key = `${selectedSubject}_${selectedLevel}`;
    const archives = noteArchives[key] || [];
    const idx = archives.findIndex(n => n.week === selectedWeek);
    const newNote = { week: selectedWeek, topic: noteTopic, content: currentNote, image: noteImage, date: new Date().toLocaleString([], { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }) };
    const updated = idx > -1 ? archives.map((n, i) => i === idx ? newNote : n) : [newNote, ...archives];
    setNoteArchives({ ...noteArchives, [key]: updated });
    triggerToast("Saved to Vault!");
  };

  // --- DOC EXPORT LOGIC ---
  const downloadSingleNoteDoc = () => {
    if (!noteTopic || !currentNote) return triggerToast("Nothing to download");
    let htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${noteTopic}</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; line-height: 1.6; color: #333; }
        h1 { color: #2563EB; text-align: center; border-bottom: 2px solid #2563EB; padding-bottom: 10px; font-size: 24px; text-transform: uppercase; }
        .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 10px; margin-bottom: 30px; }
        .meta-item { font-weight: bold; color: #475569; margin-bottom: 5px; font-size: 14px; }
        .content { white-space: pre-wrap; font-size: 16px; color: #1e293b; margin-top: 20px; }
        .footer { margin-top: 60px; font-size: 10px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 10px; font-style: italic; }
      </style>
      </head>
      <body>
        <h1>EDUBRIDGE LESSON NOTE</h1>
        <div class="meta-box">
          <div class="meta-item">PREPARED BY: ${userProfile.name}</div>
          <div class="meta-item">SUBJECT: ${selectedSubject}</div>
          <div class="meta-item">CLASS: ${selectedLevel}</div>
          <div class="meta-item">WEEK: ${selectedWeek}</div>
          <div class="meta-item">TOPIC: ${noteTopic.toUpperCase()}</div>
          <div class="meta-item">DATE: ${new Date().toLocaleDateString()}</div>
        </div>
        <div class="content">${currentNote}</div>
        <div class="footer">Digitally Prepared via IB TECHIFIED Offline Suite • Kano 2026</div>
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${noteTopic.replace(/\s+/g, '_')}_LessonNote.doc`;
    a.click();
    URL.revokeObjectURL(url);
    triggerToast("Note exported as Word DOC!");
  };

  const renderView = () => {
    if (!userProfile) return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl space-y-8 text-center border dark:border-slate-800 animate-in zoom-in-95">
           <div className="bg-blue-600 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto text-white shadow-xl"><User size={40} /></div>
           <div><h2 className="text-3xl font-black dark:text-slate-100 uppercase tracking-tight">App Setup</h2><p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest leading-relaxed">Create your teacher profile.</p></div>
           <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={setupName} onChange={(e) => setSetupName(e.target.value)} />
              <input type="password" placeholder="Master Password" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={setupPass} onChange={(e) => setSetupPass(e.target.value)} />
              <button onClick={handleSetup} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-black uppercase tracking-widest shadow-xl">Start Suite</button>
           </div>
        </div>
      </div>
    );

    if (isLocked) return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl space-y-8 border dark:border-slate-800 animate-in zoom-in-95">
           <div className="bg-slate-900 dark:bg-slate-100 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto text-white dark:text-slate-900 shadow-xl"><KeyRound size={40} /></div>
           <h2 className="text-3xl font-black dark:text-slate-100 uppercase tracking-tight">Locked</h2>
           <input type="password" placeholder="Password" autoFocus className="w-full p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none font-bold text-center dark:text-slate-100 shadow-inner text-xl tracking-widest" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} />
           <button onClick={handleLogin} className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 p-5 rounded-2xl font-black shadow-xl uppercase tracking-widest">Unlock Hub</button>
        </div>
      </div>
    );

    if (isPrinting) return (
      <div className="bg-white text-slate-900 p-12 min-h-screen animate-in fade-in">
        <div className="border-b-4 border-blue-600 pb-4 mb-8 text-center">
          <h1 className="text-4xl font-black uppercase text-blue-600 tracking-tighter">EduBridge Digital Note</h1>
          <p className="mt-4 font-bold text-slate-500 uppercase">Teacher: {userProfile.name} • {selectedSubject} • {selectedLevel} • Week {selectedWeek}</p>
        </div>
        {noteImage && <img src={noteImage} className="w-full h-auto rounded-xl mb-8 border" alt="Note attachment" />}
        <div className="text-xl leading-relaxed whitespace-pre-wrap text-slate-800">{currentNote}</div>
        <p className="mt-20 border-t pt-4 text-center text-xs text-slate-400 italic">IB TECHIFIED Offline Suite • Prepared by {userProfile.name}</p>
      </div>
    );

    switch(currentModule) {
      case 'hub': return (
        <div className="max-w-5xl mx-auto pt-16 px-4 space-y-12 animate-in fade-in pb-10 text-center">
          <div className="space-y-4">
            <div className="bg-blue-600 w-24 h-24 rounded-[2.5rem] flex items-center justify-center mx-auto text-white shadow-2xl relative"><Monitor size={48} /><button onClick={() => changeView('how_to_use')} className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 p-3 rounded-full shadow-lg animate-bounce"><Lightbulb size={24} /></button></div>
            <h1 className="text-5xl font-black text-slate-800 dark:text-slate-100 tracking-tight leading-none uppercase">EduBridge <span className="text-blue-600">Offline</span></h1>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mt-2">HELLO, {userProfile.name.toUpperCase()}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <button onClick={() => changeView('educalc_setup')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-blue-500 transition-all">
              <Calculator size={28} className="text-blue-600 mb-6" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase">EduCalc</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest">Grading & Results</p>
            </button>
            <button onClick={() => changeView('edunote_home')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-emerald-500 transition-all">
              <FileText size={28} className="text-emerald-600 mb-6" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase">EduNote</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest">Lesson Vault</p>
            </button>
            <button onClick={() => changeView('student_db')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-orange-500 transition-all">
              <Users size={28} className="text-orange-600 mb-6" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase">Registry</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest">Student Database</p>
            </button>
            <button onClick={() => changeView('techhow')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-purple-500 transition-all">
              <BookMarked size={28} className="text-purple-600 mb-6" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase">Tech-How</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest">Digital Skills</p>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => changeView('backup_center')} className="flex items-center gap-3 bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl border shadow-sm group transition-all active:scale-95"><Database className="text-blue-500" size={24} /><span className="text-sm font-black dark:text-slate-200 uppercase tracking-widest">Master Backup</span></button>
            <button onClick={() => changeView('support_hub')} className="flex items-center gap-3 bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl border shadow-sm group transition-all active:scale-95"><LifeBuoy className="text-indigo-500" size={24} /><span className="text-sm font-black dark:text-slate-200 uppercase tracking-widest">Support Hub</span></button>
            <button onClick={() => { setIsLocked(true); setLoginPass(""); }} className="flex items-center gap-3 bg-red-50 dark:bg-red-950/20 px-8 py-4 rounded-2xl border border-red-100 shadow-sm transition-all active:scale-95"><Lock className="text-red-500" size={24} /><span className="text-sm font-black text-red-700 uppercase tracking-widest">Lock Data</span></button>
          </div>
        </div>
      );

      case 'student_db': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest">
          <div className="flex items-center justify-between"><button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold"><ChevronLeft size={18} /> Hub</button><h2 className="text-xl font-black dark:text-slate-100 uppercase tracking-tight">Student Registry</h2></div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border dark:border-slate-800 space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-1"><label className="text-[9px] text-slate-400 font-bold ml-4">Full Name</label><input id="db_name_in" type="text" placeholder="ADAMU MUSA" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" /></div>
               <div className="space-y-1"><label className="text-[9px] text-slate-400 font-bold ml-4">Class (e.g. SS1)</label><input id="db_class_in" type="text" placeholder="SS 1" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" /></div>
            </div>
            <button onClick={() => { const n = document.getElementById('db_name_in').value; const c = document.getElementById('db_class_in').value; if(n && c) { addToDatabase(n, c); document.getElementById('db_name_in').value = ""; document.getElementById('db_class_in').value = ""; } }} className="w-full bg-orange-600 text-white p-5 rounded-2xl font-black shadow-xl uppercase tracking-widest text-[10px]">Add to Registry</button>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border overflow-hidden text-left">
            <div className="p-4 border-b bg-slate-50 dark:bg-slate-800"><input type="text" placeholder="Search Database..." className="w-full bg-white dark:bg-slate-900 p-3 rounded-xl border-none outline-none font-bold" value={dbSearch} onChange={e => setDbSearch(e.target.value)} /></div>
            <table className="w-full"><thead className="bg-slate-50 dark:bg-slate-800 text-[9px] font-black uppercase text-slate-400"><tr><th className="px-8 py-4 text-left">Name</th><th className="px-8 py-4 text-left">Class</th><th className="px-8 py-4 text-right">Action</th></tr></thead>
              <tbody className="divide-y dark:divide-slate-800">{globalStudents.filter(s => s.name.toLowerCase().includes(dbSearch.toLowerCase()) || s.className.toLowerCase().includes(dbSearch.toLowerCase())).map(s => (
                  <tr key={s.id} className="text-xs font-bold dark:text-slate-100"><td className="px-8 py-4">{s.name}</td><td className="px-8 py-4">{s.className}</td><td className="px-8 py-4 text-right"><button onClick={() => setGlobalStudents(globalStudents.filter(x => x.id !== s.id))} className="text-red-400"><Trash2 size={16}/></button></td></tr>
                ))}</tbody></table>
          </div>
        </div>
      );

      case 'how_to_use':
        return (
          <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest">
            <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold leading-none uppercase"><ChevronLeft size={18} /> Hub</button>
            <div className="grid grid-cols-1 gap-6 text-left">
              <div className="bg-blue-600 p-10 rounded-[3.5rem] text-white shadow-xl flex items-center gap-8"><Lightbulb size={60} /><div><h3 className="text-3xl font-black uppercase leading-tight">User Manual</h3><p className="text-blue-100 uppercase font-bold tracking-widest text-xs mt-3 opacity-80 leading-relaxed">Master your digital toolkit with IB TECHIFIED.</p></div></div>
              {[{t: "EduCalc Automation", d: "Set Subject and Class. Use 'Add Student' to create rows. Input CA1, CA2 and Exam; results sum automatically using standard logic. Save to device or export as CSV for office reports."}, {t: "EduNote 12-Week Vault", d: "Follow the hierarchy: Category > Subject > Level. Use the 12 dedicated week slots to build your term plan. Workspace allows full text editing and image attachments for board photos. Save as professional PDF or Word Doc."}, {t: "Tech-How Mastery", d: "Digital skills library. Learn computer care, projector setup, and copy expert AI prompts for lesson architecting and exam generation. Essential for 21st-century teachers."}, {t: "Privacy Lock & Backup", d: "EduBridge protects your data. Use the Lock button to secure student records. Use the Backup center weekly to download a master state file that can be restored on any device if your phone is lost."}].map(g => (
                <div key={g.t} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-4"><h3 className="text-xl font-black text-slate-800 dark:text-slate-100 border-b dark:border-slate-800 pb-4 uppercase tracking-tight leading-none">{g.t}</h3><p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">• {g.d}</p></div>
              ))}
            </div>
          </div>
        );

      case 'support_hub':
        const chs = [
          { t: 'Voice Call', d: '+234 703 038 554', i: <Phone className="text-blue-600" />, l: 'tel:+234703038554', b: 'Open Dialer' },
          { t: 'Text Message', d: '+234 703 038 554', i: <MessageSquare className="text-emerald-600" />, l: 'sms:+234703038554', b: 'Send SMS' },
          { t: 'Official Email', d: 'ib.techified.consults.africa@gmail.com', i: <Mail className="text-orange-500" />, l: 'mailto:ib.techified.consults.africa@gmail.com', b: 'Compose Mail' },
          { t: 'WhatsApp Chat', d: '+234 703 038 554', i: <MessageCircle className="text-green-500" />, l: 'https://wa.me/234703038554', b: 'Start Chat' }
        ];
        return (
          <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest">
            <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold"><ChevronLeft size={18} /> Hub</button>
            <div className="bg-indigo-600 p-10 rounded-[3.5rem] text-white shadow-xl flex items-center gap-8 text-left relative overflow-hidden">
                <LifeBuoy size={120} className="absolute -right-5 -bottom-5 opacity-10" />
                <div className="p-5 bg-white rounded-[2rem] text-indigo-600 shadow-inner"><MessageCircle size={40} /></div>
                <div><h3 className="text-3xl font-black uppercase leading-tight">Support Hub</h3><p className="text-indigo-100 uppercase font-bold tracking-widest text-xs mt-2 opacity-80 leading-none tracking-widest uppercase">Direct connection to IB TECHIFIED assistance</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {chs.map(ch => (
                 <a key={ch.t} href={ch.l} target="_blank" className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border shadow-sm space-y-6 text-center hover:border-indigo-400 transition-all block group">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">{ch.i}</div>
                    <div><h3 className="text-xl font-black dark:text-slate-100 uppercase">{ch.t}</h3><p className="text-[10px] font-bold text-slate-400 mt-2 break-all uppercase leading-none">{ch.d}</p></div>
                    <div className="w-full bg-slate-800 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg group-hover:bg-black transition-colors">{ch.b}</div>
                 </a>
               ))}
            </div>
          </div>
        );

      case 'educalc_setup': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest">
          <div className="flex items-center justify-between"><button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border active:scale-95 shadow-sm text-xs font-bold"><ChevronLeft size={18} /> Hub</button><h2 className="text-xl font-black dark:text-slate-100 uppercase tracking-tight">EduCalc Setup</h2></div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left">
             <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border dark:border-slate-800 space-y-6">
                <h3 className="text-sm font-black dark:text-slate-100 uppercase tracking-widest leading-none"><FilePlus2 size={18} className="text-blue-600 inline mr-2" /> Class Entry</h3>
                <div className="space-y-4 pt-4">
                  <div className="space-y-1"><label className="text-[9px] text-slate-400 font-bold ml-4">Subject</label><input type="text" placeholder="Subject Name" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={subject} onChange={(e) => setSubject(e.target.value)} /></div>
                  <div className="space-y-1">
                    <label className="text-[9px] text-slate-400 font-bold ml-4">Class (e.g. ss 1)</label>
                    <input type="text" placeholder="Class Name" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={className} onChange={(e) => setClassName(e.target.value)} />
                    {className && <div className="mt-2 text-[9px] font-black text-blue-600 px-4 flex items-center gap-1"><Zap size={10} /> {detectCategory(className).toUpperCase()} SCHEME DETECTED</div>}
                  </div>
                  <button onClick={handleStartRegister} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-black shadow-xl uppercase tracking-widest text-[10px]">Open Register</button>
                </div>
             </div>
             <div className="lg:col-span-3 space-y-6">
                <h3 className="text-sm font-black dark:text-slate-100 uppercase tracking-widest px-4 leading-none"><History size={18} className="text-blue-600 inline mr-2" /> Archives</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {registers.length === 0 ? <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed text-slate-300 font-black text-[9px]">No local records</div> :
                    registers.map(r => (
                      <div key={r.id} onClick={() => loadRegister(r)} className="bg-white dark:bg-slate-900 p-7 rounded-[3rem] border shadow-sm hover:border-blue-400 transition-all cursor-pointer group flex justify-between items-center">
                        <div className="space-y-1.5">
                          <h4 className="font-black dark:text-slate-100 uppercase text-lg leading-none">{r.subject}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{r.className} • {r.students?.length} Students</p>
                          <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-black italic uppercase mt-2 leading-none">
                            <Clock size={10} /> Mod: {r.lastSaved}
                          </div>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"><ArrowRight size={20} /></div>
                      </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      );

      case 'educalc_register': return (
        <div className="max-w-6xl mx-auto pt-10 px-4 space-y-6 animate-in slide-in-from-bottom-10 pb-20 text-center uppercase tracking-widest">
          <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-left">
             <div className="flex items-center gap-5"><button onClick={goBack} className="bg-white/20 p-3 rounded-2xl text-white active:scale-95"><ChevronLeft size={24} /></button><div><h1 className="text-3xl font-black uppercase tracking-tighter leading-none">{subject}</h1><p className="text-blue-100 text-[10px] font-bold uppercase tracking-[0.3em] mt-3 opacity-80">{className}</p></div></div>
             <div className="flex gap-2"><button onClick={saveRegister} className="bg-white text-blue-600 px-6 py-3 rounded-2xl text-[10px] font-black uppercase shadow-lg active:scale-95">Save</button><button onClick={exportToCSV} className="bg-green-500 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase shadow-lg active:scale-95">Excel</button></div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-sm border dark:border-slate-800 overflow-hidden text-left">
             <div className="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 px-10"><h3 className="font-black text-slate-800 dark:text-slate-100 uppercase text-xs flex items-center gap-2"><FileSpreadsheet size={18} className="text-blue-600" /> Records</h3><button onClick={() => setStudents([...students, {id:Date.now(), name:"", ca1:0, ca2:0, exam:0, total:0, grade:"F"}])} className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl text-xs font-black flex items-center gap-2 shadow-xl hover:bg-blue-700 active:scale-95 transition-all uppercase leading-none tracking-widest"><Plus size={20} /> Add Student</button></div>
             <div className="overflow-x-auto"><table className="w-full border-collapse">
               <thead><tr className="bg-slate-50 dark:bg-slate-800 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b dark:border-slate-800"><th className="px-10 py-6 text-left">Name</th><th className="px-2 py-6 text-center">CA 1 (20)</th><th className="px-2 py-6 text-center">CA 2 (20)</th><th className="px-2 py-6 text-center">EXAM (60)</th><th className="px-2 py-6 text-center text-blue-600">TOTAL</th><th className="px-2 py-6 text-center">GRADE</th><th className="px-10 py-6 text-center">X</th></tr></thead>
               <tbody className="divide-y dark:divide-slate-800">
                 {students.map(s => (
                   <tr key={s.id} className="hover:bg-blue-50/20 transition-colors uppercase">
                     <td className="px-10 py-4 font-bold"><input type="text" className="w-full bg-transparent border-none outline-none font-black text-slate-700 dark:text-slate-100 placeholder:opacity-30 uppercase" value={s.name} onChange={(e) => updateStudent(s.id, 'name', e.target.value)} /></td>
                     <td className="px-2 py-4"><input type="number" className="w-16 text-center mx-auto bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-3 font-black text-blue-600" value={s.ca1 || ""} onChange={(e) => updateStudent(s.id, 'ca1', e.target.value)} /></td>
                     <td className="px-2 py-4"><input type="number" className="w-16 text-center mx-auto bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-3 font-black text-blue-600" value={s.ca2 || ""} onChange={(e) => updateStudent(s.id, 'ca2', e.target.value)} /></td>
                     <td className="px-2 py-4"><input type="number" className="w-16 text-center mx-auto bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-3 font-black text-blue-600" value={s.exam || ""} onChange={(e) => updateStudent(s.id, 'exam', e.target.value)} /></td>
                     <td className="px-2 py-4 text-center font-black"><span className={`text-sm px-4 py-1.5 rounded-full ${s.total >= 40 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>{s.total}</span></td>
                     <td className="px-2 py-4 text-center font-black dark:text-slate-100">{s.grade}</td>
                     <td className="px-10 py-4 text-center"><button onClick={() => setStudents(students.filter(x => x.id !== s.id))} className="text-slate-300 hover:text-red-500"><Trash2 size={18}/></button></td>
                   </tr>
                 ))}
               </tbody>
             </table></div>
          </div>
        </div>
      );

      // --- EDUNOTE MODULES ---
      case 'edunote_home': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest">
          <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold leading-none"><ChevronLeft size={18} /> Hub</button>
          <div className="grid grid-cols-1 gap-6 text-left">
            {['Primary', 'Junior', 'Senior'].map(cat => (
              <button key={cat} onClick={() => changeView('edunote_subjects', { category: cat })} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border-2 border-transparent hover:border-emerald-500 shadow-sm flex items-center justify-between group transition-all">
                <div className="flex items-center gap-6"><div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors"><GraduationCap size={24}/></div><h3 className="text-2xl font-black dark:text-slate-100">{cat} School</h3></div>
                <ChevronRight />
              </button>
            ))}
          </div>
        </div>
      );

      case 'edunote_subjects': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest">
           <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border active:scale-95 shadow-sm text-xs font-bold leading-none"><ChevronLeft size={18} /> Back</button>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {SUBJECT_LISTS[selectedCategory]?.map(s => (
               <button key={s} onClick={() => changeView('edunote_levels', { subj: s })} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border-2 border-transparent hover:border-blue-600 transition-all font-black text-slate-700 dark:text-slate-200 text-xs shadow-sm active:scale-95">{s}</button>
             ))}
           </div>
        </div>
      );

      case 'edunote_levels': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest">
          <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border active:scale-95 shadow-sm text-xs font-bold leading-none"><ChevronLeft size={18} /> Back</button>
          <div className="flex flex-wrap justify-center gap-6">
            {(selectedCategory === 'Primary' ? ['Pri 1', 'Pri 2', 'Pri 3', 'Pri 4', 'Pri 5'] : selectedCategory === 'Junior' ? ['JSS 1', 'JSS 2', 'JSS 3'] : ['SS 1', 'SS 2', 'SS 3']).map(lvl => (
              <button key={lvl} onClick={() => changeView('edunote_view', { level: lvl })} className="bg-white dark:bg-slate-900 w-32 h-32 rounded-[2.5rem] border-2 border-transparent hover:border-emerald-500 transition-all flex flex-col items-center justify-center font-black text-xl text-slate-800 dark:text-slate-100 shadow-md active:scale-95"><span className="text-[9px] text-slate-400 mb-1">Class</span>{lvl}</button>
            ))}
          </div>
        </div>
      );

      case 'edunote_view': return (
        <div className="max-w-7xl mx-auto pt-10 px-4 space-y-8 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest">
          <div className="sticky top-4 z-50 flex items-center justify-between bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-[2rem] border shadow-xl">
             <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-2xl active:scale-95 text-xs font-bold"><ChevronLeft size={18} /> Back</button>
             <div className="flex gap-2">
                <button onClick={() => { setIsPrinting(true); setTimeout(() => { window.print(); setIsPrinting(false); }, 500); }} className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase shadow-lg active:scale-95 transition-all"><Printer size={16} className="inline mr-2"/> PDF</button>
                <button onClick={downloadSingleNoteDoc} className="bg-indigo-600 text-white px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase shadow-lg active:scale-95 transition-all"><FileCode size={16} className="inline mr-2"/> Word Doc</button>
                <button onClick={handleSetupNoteSave} className="bg-emerald-600 text-white px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase shadow-lg active:scale-95 transition-all"><Save size={16} className="inline mr-2"/> Save</button>
             </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4 text-left">
             <div className="space-y-6">
                <div className="bg-blue-600 text-white p-8 rounded-[3.5rem] shadow-xl space-y-6">
                   <h3 className="text-xs font-black uppercase tracking-widest">Curriculum</h3>
                   <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {NIGERIAN_SCHEMES[selectedLevel]?.filter(s => s.subject === selectedSubject).map((item, i) => (
                        <div key={i} className="bg-white/10 p-5 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                          <p className="text-[10px] font-bold leading-relaxed italic text-white/90">"{item.topics}"</p>
                          <button onClick={() => { setNoteTopic(item.topics); setCurrentNote(`Subject: ${selectedSubject}\nWeek: ${selectedWeek}\nTopic: ${item.topics}\n\nObjectives:\n1.\n\nContent:\n-`); }} className="mt-4 text-[9px] font-black uppercase bg-white text-blue-600 px-4 py-2.5 rounded-xl w-full active:scale-95 shadow-md">Load as Draft</button>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border dark:border-slate-800 space-y-6">
                <div className="flex items-center justify-between border-b dark:border-slate-800 pb-4"><h3 className="text-[10px] font-black dark:text-slate-100 uppercase tracking-widest"><Edit3 size={18} className="text-emerald-600 inline mr-2" /> Workspace</h3><div className="grid grid-cols-6 md:grid-cols-12 gap-1">{[1,2,3,4,5,6,7,8,9,10,11,12].map(w => <button key={w} onClick={() => setSelectedWeek(w)} className={`px-2 py-1 rounded text-[10px] font-black ${selectedWeek === w ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}>{w}</button>)}</div></div>
                <div className="space-y-4">
                   <input type="text" placeholder="Topic Title..." className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold shadow-inner dark:text-slate-100" value={noteTopic} onChange={e => setNoteTopic(e.target.value)} />
                   <textarea placeholder="Type lesson content here..." className="w-full p-6 bg-slate-50 dark:bg-slate-800 border-none rounded-3xl outline-none dark:text-slate-300 font-medium h-[400px] leading-relaxed resize-none shadow-inner" value={currentNote} onChange={e => setCurrentNote(e.target.value)} />
                </div>
             </div>
             <div className="space-y-6">
                <h3 className="text-[10px] font-black dark:text-slate-100 uppercase tracking-widest px-4"><History size={18} className="text-emerald-600 inline mr-2" /> Vault</h3>
                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map(wk => {
                    const saved = (noteArchives[`${selectedSubject}_${selectedLevel}`] || []).find(n => n.week === wk);
                    return (
                      <div key={wk} className={`bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border shadow-sm transition-all ${saved ? 'border-emerald-200 cursor-pointer hover:border-emerald-500' : 'opacity-40'}`} onClick={() => saved && (setCurrentNote(saved.content), setNoteTopic(saved.topic), setSelectedWeek(saved.week), setNoteImage(saved.image || null))}>
                         <div className="flex justify-between items-start">
                            <span className="text-[9px] font-black px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600 uppercase">Week {wk}</span>
                            {saved && <button onClick={(e) => { e.stopPropagation(); const key = `${selectedSubject}_${selectedLevel}`; const upd = (noteArchives[key] || []).filter(x => x.week !== wk); setNoteArchives({...noteArchives, [key]: upd}); }} className="text-red-300 hover:text-red-500"><Trash2 size={12}/></button>}
                         </div>
                         <h4 className="font-black dark:text-slate-100 uppercase text-[10px] mt-2 leading-tight">{saved ? saved.topic : 'Empty Slot'}</h4>
                         {saved && <div className="mt-3 pt-2 border-t dark:border-slate-800 text-[8px] text-slate-400 font-black flex items-center gap-1 uppercase tracking-tighter"><Clock size={8}/> Mod: {saved.date}</div>}
                      </div>
                    );
                  })}
                </div>
             </div>
          </div>
        </div>
      );

      case 'techhow': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-left uppercase tracking-widest">
           <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border active:scale-95 shadow-sm text-xs font-bold leading-none"><ChevronLeft size={18} /> Hub</button>
           <h2 className="text-xl font-black uppercase text-center dark:text-slate-100 tracking-tight">Tech-How Mastery</h2>
           <div className="grid grid-cols-1 gap-6">
             {[{t: "OS: Vital Shortcuts", d: "Ctrl+C to Copy, Ctrl+V to Paste, Ctrl+Z to Undo. Ctrl+S to save frequently while working."}, {t: "AI: Lesson Architect", d: "Act as an expert Nigerian teacher. Generate a lesson plan for [CLASS] on [TOPIC]. Include quiz and answer key."}, {t: "Hardware: Computer Basics", d: "Always shutdown via Start menu. Keep laptops on flat surfaces. Keep battery between 20-80% for longevity."}].map(g => (
               <div key={g.t} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border shadow-sm space-y-4"><h3 className="text-xl font-black text-slate-800 dark:text-slate-100 border-b pb-4 uppercase leading-none">{g.t}</h3><p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 leading-relaxed uppercase tracking-widest">• {g.d}</p><button onClick={() => { const el = document.createElement('textarea'); el.value = g.d; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el); triggerToast("Copied to Clipboard!"); }} className="bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase shadow-lg active:scale-95">Copy Content</button></div>
             ))}
           </div>
        </div>
      );

      case 'backup_center': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest">
           <button onClick={goBack} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm"><ChevronLeft size={18} /> Hub</button>
           <div className="bg-blue-600 p-10 rounded-[3.5rem] text-white shadow-xl flex items-center gap-8 text-left"><div className="p-5 bg-white rounded-[2rem] text-blue-600 shadow-inner"><Database size={40} /></div><div><h3 className="text-3xl font-black uppercase leading-tight">Backup Center</h3><p className="text-blue-100 font-bold tracking-widest text-xs mt-2 opacity-80 leading-none uppercase tracking-widest">Permanent Data Export</p></div></div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button onClick={() => { const blob = new Blob([JSON.stringify({registers, notes: noteArchives, profile: userProfile, db: globalStudents}, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `EduBridge_Backup_${new Date().toLocaleDateString()}.json`; a.click(); triggerToast("Backup Exported!"); }} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border shadow-sm text-center font-black text-xs uppercase text-slate-700 dark:text-slate-100 hover:border-blue-500 transition-all">Download Backup</button>
              <label className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border shadow-sm text-center font-black text-xs uppercase text-slate-700 dark:text-slate-100 cursor-pointer hover:border-blue-500 transition-all">Restore From File<input type="file" accept=".json" className="hidden" onChange={(e) => { const reader = new FileReader(); reader.onload = (ev) => { const d = JSON.parse(ev.target.result); if(d.registers) setRegisters(d.registers); if(d.notes) setNoteArchives(d.notes); if(d.db) setGlobalStudents(d.db); triggerToast("Restore Successful!"); }; reader.readAsText(e.target.files[0]); }} /></label>
           </div>
        </div>
      );

      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans pb-24 selection:bg-blue-100 text-slate-800 transition-colors duration-300">
      {renderView()}
      <div className="fixed bottom-6 left-0 right-0 pointer-events-none text-center print:hidden z-0">
         <p className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.3em] italic leading-none">IBRAHIM YAMTA (IB TECHIFIED) FE/23/86231210 • KANO NIGERIA • 2026</p>
      </div>
      {showToast && !isPrinting && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-5 rounded-[2.5rem] shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300 z-[9999] border dark:border-slate-800 font-black uppercase text-[10px] tracking-widest leading-none">
          <CheckCircle2 className="text-green-400" size={24} />
          {toastMsg}
        </div>
      )}
    </div>
  );
}