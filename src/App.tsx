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
 * EDUBRIDGE OFFLINE SUITE - ULTIMATE MASTER EXCELLENCE EDITION
 * ==============================================================================================
 * Developed by: IBRAHIM ISAH YAMTA (IB TECHIFIED) 3MTT FELLOW. FE/23/86231210. 
 * Support Email: ib.techified.consults.africa@gmail.com
 * ==============================================================================================
 */

// --- DATA: COMPREHENSIVE NIGERIAN NATIONAL CURRICULUM (100% RESTORED) ---
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
    { subject: 'Mathematics', topics: 'Number Bases: Denary (Base 10) conversions. LCM and HCF: Advanced applications. Fractions, Decimals, and Percentages. Basic Algebra: Expressions and variable substitution. Geometry: Construction of angles and triangles. Statistics: Average and Range.' },
    { subject: 'English', topics: 'Parts of Speech intensive: Mastery of Nouns, Verbs, Pronouns, Adverbs, and Adjectives. Sentence Structure: Subject, Predicate, and Object. Narrative and Descriptive essay writing. Literature genres: Drama, Prose, and Poetry. Figures of speech.' },
    { subject: 'Basic Science', topics: 'Matter: Exploration of States, Properties, Physical and Chemical changes. Living things: Systematic classification. Family Health: Puberty, hygiene, and reproductive health. Force, Energy, and Power.' },
    { subject: 'Computer Science', topics: 'History of Computing: Abacus to modern 5th generation. Generations of Computers. Basic Hardware Components. Data and Information processing cycle. Computer Ethics.' }
  ],
  'JSS 2': [
    { subject: 'Mathematics', topics: 'Linear Equations and Inequalities. Pythagorean Theorem. Area and Volume of Cylinders and Prisms. Probability. Statistics: Frequency distribution tables and Pie charts.' },
    { subject: 'English', topics: 'Figures of Speech: Simile, Metaphor, Personification. Tenses: Perfect and Continuous forms. Clauses and Phrases. Summary writing techniques. Drama analysis.' },
    { subject: 'Basic Science', topics: 'Kinetic Theory of Matter. Thermal Energy: Conduction, Convection, Radiation. Human Brain and Nervous System. Ecology: Food chains and webs. Environmental Pollution.' },
    { subject: 'Computer Science', topics: 'System Software vs Application Software. Operating Systems: Windows, Android, iOS. Word Processing: Microsoft Word formatting. Storage devices hierarchy. Logic Circuits: Simple AND/OR gates.' }
  ],
  'JSS 3': [
    { subject: 'Mathematics', topics: 'Quadratic Equations: Factorization method. Simultaneous Equations: Substitution and Elimination. Trigonometry: SOH CAH TOA. Compound Interest and Depreciation. Variations.' },
    { subject: 'English', topics: 'Complex Sentence Structures. Argumentative writing and Debating skills. Novel review and literary analysis. Preparations for Junior WAEC/BECE. Word register for commerce and modern technology.' },
    { subject: 'Basic Science', topics: 'Radioactivity: Natural and Artificial sources. Space Travel history. Drug abuse: Scientific effects. Genetic variation and heredity. Ethics in Science. Metabolism.' },
    { subject: 'Computer Science', topics: 'The Internet and World Wide Web (WWW). Search Engines. Basic HTML. Computer Ethics and Cybersecurity. Spreadsheet introduction.' }
  ],
  'SS 1': [
    { subject: 'Mathematics', topics: 'Indices and Logarithms. Sets and Venn Diagrams. Quadratic Equations: Formula method. Modular Arithmetic. Geometry Theorems. Coordinate Geometry. Surds.' },
    { subject: 'English', topics: 'Lexis and Structure. Word Registers: Legal, Medical, Technical. Narrative and Descriptive Essays. Phonetics: Vowels and Diphthongs. Word stress and intonation.' },
    { subject: 'Biology', topics: 'Cell structure and functions. Classification of Living organisms. Nutrition: Photosynthesis and Digestion. Respiration. Basic Ecology. Support and movement.' },
    { subject: 'Physics', topics: 'Measurements and Units. Motion: Speed, Velocity, Acceleration. Work, Energy, and Power. Heat Energy. Fluid at rest: Pressure and Archimedes principle.' },
    { subject: 'Chemistry', topics: 'Nature of Matter. Atoms, Molecules, and Ions. Chemical Symbols, Formulas, and Valency. Separating techniques. Kinetic theory of matter and Gas Laws.' }
  ],
  'SS 2': [
    { subject: 'Mathematics', topics: 'Trigonometry: Sine and Cosine Rules. Sequences and Series (AP/GP). Circle Geometry proofs. Statistics: Mean Deviation, Variance, and Standard Deviation. Linear inequalities. Logic.' },
    { subject: 'English', topics: 'Expository Essays. Complex Clauses. Advanced Register: Judiciary and Government. Speech writing. Phonetics: Consonant sounds. Summary: Drafting techniques.' },
    { subject: 'Biology', topics: 'Excretion and Osmoregulation. Nervous and Hormonal Coordination. Reproductive System. Plant transport and skeletal support. Adaptation, Selection, and Evolution basics. Regulation.' },
    { subject: 'Physics', topics: 'Light Waves: reflection and Refraction. Sound Waves: Characteristics and ultrasound. Electric Field: Ohm’s Law. Gas Laws. Gravitational fields.' },
    { subject: 'Chemistry', topics: 'Periodic Table trends. Chemical Bonding. REDOX reactions. Electrolysis. Carbon and its Compounds. Energetics, Entropy, and Chemical Equilibrium.' }
  ],
  'SS 3': [
    { subject: 'Mathematics', topics: 'Calculus: Fundamental Differentiation and Integration basics. Matrices and Determinants: Operations and Cramer’s rule. Vector Analysis in 2D space. Longitude and Latitude: Calculating great circle distances on Earth. Number bases review and conversion. Practical Statistics: Advanced work with large data sets and probability distributions for final exams. Financial math: Annuities and Amortization.' },
    { subject: 'English', topics: 'WAEC/NECO Examination Prep: Intensive analysis of past questions and marking schemes. Formal Letters and Job Applications: Professional correspondence. Oral English: Stress, Rhythm, and Intonation patterns for effective communication. Summary Skills: Extracting and rephrasing main points from dense texts. Word register of Science, Technology, and Media. Creative composition for final exams.' },
    { subject: 'Biology', topics: 'Genetics and Heredity: Mendelian laws, monohybrid/dihybrid crosses, and sex-linked traits. Evolution and Variation: Theories of evolution. Ecology: Detailed Population Dynamics, Succession, and Environmental Conservation. Nervous system review: Sensory organs and complex reflex actions. Biology of survival in harsh environments.' },
    { subject: 'Physics', topics: 'Atomic Physics: Radioactivity and X-rays. Electronics: Diodes and Logic Gates. Magnetic Fields: Force calculation on moving charges. Electromagnetic Induction: Transformers, Motors, and Generators. Alternating current (AC) circuits: Reactance and Impedance. Quantum mechanics basics.' },
    { subject: 'Chemistry', topics: 'Organic Chemistry: Detailed study of Hydrocarbons, Alcohols, and Organic Acids. Qualitative Analysis: Identification of salts and gases in lab environments. Chemical Equilibrium: Applying Le Chatelier’s principle. Fats and Oils: Saponification. Nuclear chemistry: Fission, Fusion, and applications. Chemistry in industry: Plastics and Soaps.' }
  ]
};

const SUBJECT_LISTS = {
  'Primary': ['Mathematics', 'English', 'Basic Science', 'Social Studies', 'PHE', 'CCA', 'Hausa', 'Arabic', 'Home Economics'],
  'Junior': ['Mathematics', 'English', 'Basic Science', 'Pre-Vocational', 'National Value', 'CCA', 'Business Studies', 'Computer Science'],
  'Senior': ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'Civic Education', 'Economics', 'Government', 'Agriculture', 'Literature', 'Islamic Studies', 'Commerce']
};

// --- HELPER LOGIC ---
const normS = (s) => s ? s.trim().toLowerCase().replace(/\s+/g, '') : "";

const detectCategory = (className) => {
  if (!className) return "Senior";
  const n = normS(className);
  if (n.startsWith('pri') || n.startsWith('grade')) return 'Primary';
  if (n.startsWith('jss')) return 'Junior';
  if (n.startsWith('ss')) return 'Senior';
  return 'Senior';
};

export default function App() {
  // --- AUTH & SETUP STATE ---
  const [userProfile, setUserProfile] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  const [setupName, setSetupName] = useState("");
  const [setupPass, setSetupPass] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // --- TOP LEVEL NAVIGATION ---
  const [currentModule, setCurrentModule] = useState('hub');
  
  // --- STUDENT REGISTRY ---
  const [globalStudents, setGlobalStudents] = useState([]);
  const [dbSearch, setDbSearch] = useState("");

  // --- MODULE DATA ---
  const [calcId, setCalcId] = useState(null);
  const [students, setStudents] = useState([]);
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [registers, setRegisters] = useState([]);
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
    setCurrentModule(module);
    if (data.category !== undefined) setSelectedCategory(data.category);
    if (data.subj !== undefined) setSelectedSubject(data.subj);
    if (data.level !== undefined) setSelectedLevel(data.level);
    if (data.calcId !== undefined) setCalcId(data.calcId);
    if (data.students !== undefined) setStudents(data.students);
    if (data.subject !== undefined) setSubject(data.subject);
    if (data.className !== undefined) setClassName(data.className);
    
    // Ensure back button support
    window.history.pushState({ module, ...data }, "");
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
      } else setCurrentModule('hub');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- PERSISTENCE ---
  useEffect(() => {
    try {
      const r = localStorage.getItem('eb_regs_vfinal');
      const n = localStorage.getItem('eb_notes_vfinal');
      const p = localStorage.getItem('eb_user_profile');
      const d = localStorage.getItem('eb_db_vfinal');
      if (r) setRegisters(JSON.parse(r));
      if (n) setNoteArchives(JSON.parse(n));
      if (p) setUserProfile(JSON.parse(p));
      if (d) setGlobalStudents(JSON.parse(d));
    } catch (e) {}
  }, []);

  useEffect(() => {
    localStorage.setItem('eb_regs_vfinal', JSON.stringify(registers));
    localStorage.setItem('eb_notes_vfinal', JSON.stringify(noteArchives));
    localStorage.setItem('eb_db_vfinal', JSON.stringify(globalStudents));
    if (userProfile) localStorage.setItem('eb_user_profile', JSON.stringify(userProfile));
  }, [registers, noteArchives, userProfile, globalStudents]);

  const triggerToast = (msg) => {
    setToastMsg(msg); setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // --- LOGIC ---
  const handleSetup = () => {
    if (!setupName || !setupPass) return triggerToast("Fill all fields");
    setUserProfile({ name: setupName, password: setupPass, created: new Date().toLocaleDateString() });
    setIsLocked(false);
  };

  const handleLogin = () => {
    if (loginPass === userProfile.password) { setIsLocked(false); triggerToast(`Welcome Back, ${userProfile.name}`); }
    else triggerToast("Incorrect Password");
  };

  const handleStartEduCalc = () => {
    if (!subject || !className) return triggerToast("Fill missing fields.");
    const existing = registers.find(r => normS(r.subject) === normS(subject) && normS(r.className) === normS(className));
    if (existing) {
      setCalcId(existing.id); setStudents(existing.students || []); setSubject(existing.subject); setClassName(existing.className);
      setCurrentModule('educalc_register');
    } else { 
      const matching = globalStudents
        .filter(gs => normS(gs.className) === normS(className))
        .map(gs => ({ id: gs.id, name: gs.name, ca1:0, ca2:0, exam:0, total:0, grade:"F" }));
      if(matching.length > 0) triggerToast(`Imported ${matching.length} Students`);
      setStudents(matching);
      setCalcId(null);
      setCurrentModule('educalc_register');
    }
  };

  const saveEduCalc = () => {
    if (!subject || !className) return triggerToast("Data missing");
    const ts = new Date().toLocaleString([], { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
    const id = calcId || Date.now();
    setRegisters([{ id, subject, className, students, lastSaved: ts }, ...registers.filter(r => r.id !== id)]);
    setCalcId(id);
    triggerToast("Record Saved!");
  };

  const updateStudent = (id, field, value) => {
    setStudents(students.map(s => {
      if (s.id === id) {
        const newData = { ...s, [field]: value };
        if (['ca1', 'ca2', 'exam'].includes(field)) {
          const tot = Number(newData.ca1||0) + Number(newData.ca2||0) + Number(newData.exam||0);
          newData.total = tot;
          newData.grade = tot >= 70 ? "A" : tot >= 60 ? "B" : tot >= 50 ? "C" : tot >= 45 ? "D" : tot >= 40 ? "E" : "F";
        }
        return newData;
      } return s;
    }));
  };

  const saveLessonNote = () => {
    if (!noteTopic || !currentNote) return triggerToast("Note details missing");
    const key = `${selectedSubject}_${selectedLevel}`;
    const ts = new Date().toLocaleString([], { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
    const newNote = { week: selectedWeek, topic: noteTopic, content: currentNote, image: noteImage, date: ts };
    const updated = (noteArchives[key] || []).filter(n => n.week !== selectedWeek);
    setNoteArchives({ ...noteArchives, [key]: [newNote, ...updated] });
    triggerToast(`Week ${selectedWeek} Saved!`);
  };

  const exportDoc = () => {
    if (!noteTopic || !currentNote) return triggerToast("No content");
    let imageHtml = noteImage ? `<div style="text-align:center; margin-bottom:20px;"><img src="${noteImage}" style="max-width:550px; border:1px solid #ddd; border-radius:10px;"/></div>` : "";
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><style>body{font-family:sans-serif;padding:40px;line-height:1.6;}h1{color:#2563EB;text-align:center;} .meta{background:#f8fafc;padding:15px;border-radius:10px;margin-bottom:20px; border:1px solid #ddd;}</style></head><body><h1>EDUBRIDGE LESSON NOTE</h1><div class="meta"><b>PREPARED BY:</b> ${userProfile.name}<br/><b>SUBJECT:</b> ${selectedSubject}<br/><b>CLASS:</b> ${selectedLevel}<br/><b>WEEK:</b> ${selectedWeek}<br/><b>TOPIC:</b> ${noteTopic.toUpperCase()}</div>${imageHtml}<div style="white-space:pre-wrap">${currentNote}</div><p style="margin-top:50px;font-size:10px;color:#888;">IB TECHIFIED Offline Suite • Kano 2026</p></body></html>`;
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['\ufeff', html], { type: 'application/msword' }));
    a.download = `${noteTopic.replace(/\s+/g, '_')}_LessonNote.doc`; a.click();
    triggerToast("MS Word Export Ready");
  };

  const addToDatabase = (name, targetClass) => {
    if(!name || !targetClass) return triggerToast("Fill fields");
    setGlobalStudents([{ id: Date.now(), name: name.toUpperCase(), className: targetClass.toUpperCase() }, ...globalStudents]);
    triggerToast("Added to Registry");
  };

  // --- RENDER ---
  const renderView = () => {
    if (!userProfile) return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center animate-in zoom-in-95">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl space-y-8 border dark:border-slate-800">
           <div className="bg-blue-600 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto text-white shadow-xl"><User size={40} /></div>
           <h2 className="text-3xl font-black dark:text-slate-100 uppercase tracking-tight leading-none">App Setup</h2>
           <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={setupName} onChange={(e) => setSetupName(e.target.value)} />
              <input type="password" placeholder="Master Password" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={setupPass} onChange={(e) => setSetupPass(e.target.value)} />
              <button onClick={handleSetup} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-black shadow-xl uppercase tracking-widest text-[11px] transition-all active:scale-95">Start Suite</button>
           </div>
        </div>
      </div>
    );

    if (isLocked) return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center animate-in zoom-in-95">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-2xl space-y-8 border dark:border-slate-800">
           <div className="bg-slate-900 dark:bg-slate-100 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto text-white dark:text-slate-900 shadow-xl"><KeyRound size={40} /></div>
           <h2 className="text-3xl font-black dark:text-slate-100 uppercase tracking-tight leading-none">Locked</h2>
           <input type="password" placeholder="Password" autoFocus className="w-full p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none font-bold text-center dark:text-slate-100 text-xl shadow-inner" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} />
           <button onClick={handleLogin} className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 p-5 rounded-2xl font-black shadow-xl uppercase tracking-widest text-[11px] transition-all active:scale-95">Unlock Hub</button>
        </div>
      </div>
    );

    if (isPrinting) return (
      <div className="bg-white text-black p-10 min-h-screen font-sans border border-black m-4">
        <div className="text-center border-b-2 border-black pb-4 mb-8">
          <h1 className="text-4xl font-bold tracking-[0.2em] uppercase">EDUBRIDGE</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-y-3 mb-10 text-[11px] font-bold uppercase pb-4 border-b border-slate-100">
           <div className="text-slate-600">TEACHER: <span className="text-black">{userProfile.name}</span></div>
           <div className="text-right text-slate-600">DATE: <span className="text-black">{new Date().toLocaleDateString()}</span></div>
           <div className="text-slate-600">CLASS: <span className="text-black">{selectedLevel}</span></div>
           <div className="text-right text-slate-600">WEEK: <span className="text-black">{selectedWeek}</span></div>
           <div className="col-span-2 text-slate-600 mt-1">SUBJECT: <span className="text-black">{selectedSubject}</span></div>
        </div>

        <div className="mb-10">
           <h2 className="text-2xl font-black uppercase underline decoration-black underline-offset-8">TOPIC: {noteTopic}</h2>
        </div>

        {noteImage && (
          <div className="mb-10 text-center rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <img src={noteImage} className="max-w-full h-auto object-contain mx-auto" alt="Board Attachment" />
          </div>
        )}

        <div className="text-xl leading-[1.6] whitespace-pre-wrap text-black font-normal normal-case">
          {currentNote}
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
           IB TECHIFIED Offline Suite • Prepared for the 21st-Century Nigerian Classroom
        </div>
      </div>
    );

    switch(currentModule) {
      case 'hub': return (
        <div className="max-w-5xl mx-auto pt-16 px-4 space-y-12 animate-in fade-in pb-10 text-center">
          <div className="space-y-4">
            <div className="bg-blue-600 w-24 h-24 rounded-[2.5rem] flex items-center justify-center mx-auto text-white shadow-2xl relative transition-transform hover:scale-105 active:scale-95"><Monitor size={48} /><button onClick={() => setCurrentModule('how_to_use')} className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 p-3 rounded-full animate-bounce shadow-lg"><Lightbulb size={24} /></button></div>
            <h1 className="text-5xl font-black text-slate-800 dark:text-slate-100 tracking-tight leading-none uppercase">EduBridge <span className="text-blue-600">Offline</span></h1>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">HELLO, {userProfile.name.toUpperCase()}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <button onClick={() => setCurrentModule('educalc_setup')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-blue-500 transition-all group active:scale-[0.98]">
              <Calculator size={32} className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase leading-none">EduCalc</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest leading-none">Results & Grading</p>
            </button>
            <button onClick={() => setCurrentModule('edunote_home')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-emerald-500 transition-all group active:scale-[0.98]">
              <FileText size={32} className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase leading-none">EduNote</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest leading-none">Lesson Vault</p>
            </button>
            <button onClick={() => setCurrentModule('student_db')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-orange-500 transition-all group active:scale-[0.98]">
              <Users size={32} className="text-orange-600 mb-6 group-hover:scale-110 transition-transform" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase leading-none">Registry</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest leading-none">Central DB</p>
            </button>
            <button onClick={() => setCurrentModule('techhow')} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border-2 border-transparent hover:border-purple-500 transition-all group active:scale-[0.98]">
              <BookMarked size={32} className="text-purple-600 mb-6 group-hover:scale-110 transition-transform" /><h2 className="text-2xl font-black dark:text-slate-100 uppercase leading-none">Tech-How</h2><p className="text-slate-500 text-[10px] mt-3 font-bold uppercase tracking-widest leading-none">Digital mastery</p>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setCurrentModule('backup_center')} className="flex items-center gap-3 bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl border shadow-sm group active:scale-95 transition-all leading-none"><Database className="text-blue-500" size={24} /><span className="text-sm font-black dark:text-slate-200 uppercase tracking-widest leading-none">Master Backup</span></button>
            <button onClick={() => setCurrentModule('support_hub')} className="flex items-center gap-3 bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl border shadow-sm group active:scale-95 transition-all leading-none"><LifeBuoy className="text-indigo-500" size={24} /><span className="text-sm font-black dark:text-slate-200 uppercase tracking-widest leading-none">Support Hub</span></button>
            <button onClick={() => { setIsLocked(true); setLoginPass(""); }} className="flex items-center gap-3 bg-red-50 dark:bg-red-950/20 px-8 py-4 rounded-2xl border border-red-100 shadow-sm active:scale-95 transition-all leading-none"><Lock className="text-red-500" size={24} /><span className="text-sm font-black text-red-700 uppercase tracking-widest leading-none">Lock Data</span></button>
          </div>
        </div>
      );

      case 'student_db': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest">
          <div className="flex items-center justify-between"><button onClick={() => setCurrentModule('hub')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold transition-all leading-none"><ChevronLeft size={18} /> Hub</button><h2 className="text-xl dark:text-slate-100 uppercase tracking-tight leading-none">Student Registry</h2></div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border dark:border-slate-800 space-y-6 text-left font-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 leading-none">
               <div className="space-y-1"><label className="text-[9px] text-slate-400 font-bold ml-4 uppercase leading-none">Full Name</label><input id="db_name_in" type="text" placeholder="ADAMU MUSA" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" /></div>
               <div className="space-y-1"><label className="text-[9px] text-slate-400 font-bold ml-4 uppercase leading-none">Class (e.g. SS1)</label><input id="db_class_in" type="text" placeholder="SS 1" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" /></div>
            </div>
            <button onClick={() => { const n = document.getElementById('db_name_in').value; const c = document.getElementById('db_class_in').value; if(n && c) { setGlobalStudents([{ id: Date.now(), name: n.toUpperCase(), className: c.toUpperCase() }, ...globalStudents]); document.getElementById('db_name_in').value = ""; document.getElementById('db_class_in').value = ""; triggerToast("Added to Registry"); } }} className="w-full bg-orange-600 text-white p-5 rounded-2xl font-black shadow-xl uppercase tracking-widest text-[10px] active:scale-95 transition-all leading-none">Add to Registry</button>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border overflow-hidden text-left font-black leading-none">
            <div className="p-4 border-b bg-slate-50 dark:bg-slate-800"><input type="text" placeholder="Search Database..." className="w-full bg-white dark:bg-slate-900 p-3 rounded-xl border-none outline-none font-bold shadow-inner" value={dbSearch} onChange={e => setDbSearch(e.target.value)} /></div>
            <table className="w-full leading-none font-black"><thead className="bg-slate-50 dark:bg-slate-800 text-[9px] font-black uppercase text-slate-400 border-b dark:border-slate-800"><tr><th className="px-8 py-4 text-left">Name</th><th className="px-8 py-4 text-left">Class</th><th className="px-8 py-4 text-right">Action</th></tr></thead>
              <tbody className="divide-y dark:divide-slate-800">{globalStudents.filter(s => s.name.toLowerCase().includes(dbSearch.toLowerCase()) || s.className.toLowerCase().includes(dbSearch.toLowerCase())).map(s => (
                  <tr key={s.id} className="text-xs font-bold dark:text-slate-100 hover:bg-slate-50 transition-colors"><td className="px-8 py-4">{s.name}</td><td className="px-8 py-4">{s.className}</td><td className="px-8 py-4 text-right"><button onClick={() => setGlobalStudents(globalStudents.filter(x => x.id !== s.id))} className="text-red-400 hover:text-red-600 transition-colors leading-none"><Trash2 size={16}/></button></td></tr>
                ))}</tbody></table>
          </div>
        </div>
      );

      case 'support_hub':
        const chs = [
          { t: 'Voice Call', d: '+234 703 038 554', i: <Phone className="text-blue-600"/>, l: 'tel:+234703038554' },
          { t: 'WhatsApp Chat', d: '+234 703 038 554', i: <MessageCircle className="text-green-500"/>, l: 'https://wa.me/234703038554' },
          { t: 'Official Email', d: 'ib.techified.consults.africa@gmail.com', i: <Mail className="text-orange-500"/>, l: 'mailto:ib.techified.consults.africa@gmail.com' },
          { t: 'SMS Support', d: '+234 703 038 554', i: <MessageSquare className="text-purple-600"/>, l: 'sms:+234703038554' }
        ];
        return (
          <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest font-black leading-none">
            <button onClick={() => setCurrentModule('hub')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold transition-all leading-none"><ChevronLeft size={18} /> Hub</button>
            <div className="bg-indigo-600 p-10 rounded-[3.5rem] text-white shadow-xl flex items-center gap-8 text-left relative overflow-hidden">
                <LifeBuoy size={120} className="absolute -right-5 -bottom-5 opacity-10" />
                <div className="p-5 bg-white rounded-[2rem] text-indigo-600 shadow-inner"><MessageCircle size={40} /></div>
                <div><h3 className="text-3xl font-black uppercase leading-tight leading-none">Support Hub</h3><p className="text-indigo-100 uppercase font-bold tracking-widest text-xs mt-2 opacity-80 uppercase leading-none tracking-widest">IB TECHIFIED assistance</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {chs.map(ch => (
                 <a key={ch.t} href={ch.l} target="_blank" className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border shadow-sm space-y-6 text-center hover:border-indigo-400 transition-all block group active:scale-95">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform font-black leading-none">{ch.i}</div>
                    <div><h3 className="text-xl font-black dark:text-slate-100 uppercase leading-none">{ch.t}</h3><p className="text-[10px] font-bold text-slate-400 mt-2 break-all uppercase leading-none tracking-widest">{ch.d}</p></div>
                    <div className="w-full bg-slate-800 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg group-hover:bg-black transition-colors leading-none">Contact Help</div>
                 </a>
               ))}
            </div>
          </div>
        );

      case 'techhow':
        return (
          <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-left uppercase tracking-widest font-black leading-none">
            <button onClick={() => setCurrentModule('hub')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border active:scale-95 shadow-sm text-xs font-bold transition-all leading-none"><ChevronLeft size={18} /> Hub</button>
            <h2 className="text-xl font-black uppercase text-center dark:text-slate-100 tracking-tight leading-none">Tech-How Hub</h2>
            <div className="grid grid-cols-1 gap-6 leading-none">
              {[
                { t: "Hardware: Computer Basics", i: <Monitor className="text-blue-600"/>, s: ["Shutdown: Start > Power menu.", "Battery: 20% to 80% range.", "Cleaning: Soft dry cloth only."], p: "Ensure device is on a flat surface to prevent cooling issues." },
                { t: "Hardware: Projector Setup", i: <Presentation className="text-red-500"/>, s: ["Connect HDMI before powering up.", "Press Windows + P on keyboard.", "Select 'Duplicate' to share."], p: "No Signal? Cycle inputs using 'Source' button on remote." },
                { t: "OS: Vital Shortcuts", i: <Keyboard className="text-emerald-600"/>, s: ["Copy: Ctrl+C | Paste: Ctrl+V.", "Undo: Ctrl+Z | Save: Ctrl+S.", "Shortcuts save 1hr weekly."], p: "Saving frequently prevents data loss during unexpected reset." },
                { t: "AI: Lesson Architect", i: <Wand2 className="text-purple-600"/>, s: ["Open AI tool (Gemini/ChatGPT).", "Copy the specialized prompt.", "Edit [CLASS] and [TOPIC]."], p: "Act as expert Nigerian Teacher. Generate detailed 40min lesson plan for [CLASS] on [TOPIC]. Include evaluation quiz." }
              ].map(g => (
                <div key={g.t} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border shadow-sm space-y-4 group transition-all hover:border-purple-400 leading-none">
                  <div className="flex items-center gap-4 border-b dark:border-slate-800 pb-4 leading-none"><div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl leading-none">{g.i}</div><h3 className="text-xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight leading-none">{g.t}</h3></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2 text-slate-600 dark:text-slate-400 font-black">{g.s.map((s, idx) => <p key={idx} className="text-[10px] font-bold">• {s}</p>)}</div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700 shadow-inner">
                       <pre className="text-[9px] text-slate-600 dark:text-slate-300 font-mono italic whitespace-pre-wrap mb-3 leading-relaxed">{g.p}</pre>
                       <button onClick={() => { const el = document.createElement('textarea'); el.value = g.p; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el); triggerToast("Copied Content!"); }} className="w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white p-3 rounded-xl text-[9px] font-black uppercase shadow-lg active:scale-95 transition-all leading-none">Copy Prompt</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'how_to_use':
        return (
          <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest leading-none font-black">
            <button onClick={() => setCurrentModule('hub')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold leading-none uppercase transition-all"><ChevronLeft size={18} /> Hub</button>
            <div className="grid grid-cols-1 gap-6 text-left leading-none font-black">
              <div className="bg-blue-600 p-10 rounded-[3.5rem] text-white shadow-xl flex items-center gap-8"><Lightbulb size={60} /><div><h3 className="text-3xl font-black uppercase leading-tight leading-none">User Manual</h3><p className="text-blue-100 uppercase font-bold tracking-widest text-xs mt-3 opacity-80 leading-relaxed leading-none">Master your digital toolkit with IB TECHIFIED.</p></div></div>
              {[{t: "EduCalc Automation", d: "Set Subject and Class. Students from your Registry auto-populate based on normalized names ('ss1' = 'ss 1'). Results sum automatically using standard grading logic. Archives track mod time."}, {t: "EduNote Workspace", d: "Prepare notes with full Curriculum support. Attach board photos using the Camera icon. Export as professional PDF or Word Doc. Entries display exact modification timestamps."}, {t: "Registry & Backup", d: "Add names to Registry once. Normalization logic ensures consistency across all classes. Use Backup Center weekly to download master JSON file for data portability across devices."}].map(g => (
                <div key={g.t} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-4 transition-all hover:border-blue-400 leading-none"><h3 className="text-xl font-black text-slate-800 dark:text-slate-100 border-b dark:border-slate-800 pb-4 uppercase leading-none leading-none">{g.t}</h3><p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">• {g.d}</p></div>
              ))}
            </div>
          </div>
        );

      case 'educalc_setup': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest font-black leading-none">
          <div className="flex items-center justify-between"><button onClick={() => setCurrentModule('hub')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold transition-all leading-none"><ChevronLeft size={18} /> Hub</button><h2 className="text-xl dark:text-slate-100 uppercase tracking-tight leading-none">EduCalc Setup</h2></div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left leading-none font-black">
             <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border dark:border-slate-800 space-y-6">
                <h3 className="text-sm dark:text-slate-100 uppercase tracking-widest leading-none"><FilePlus2 size={18} className="text-blue-600 inline mr-2" /> Class Entry</h3>
                <div className="space-y-4 pt-4">
                  <div className="space-y-1"><label className="text-[9px] text-slate-400 font-bold ml-4 uppercase tracking-widest leading-none">Subject</label><input type="text" placeholder="Mathematics" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={subject} onChange={(e) => setSubject(e.target.value)} /></div>
                  <div className="space-y-1">
                    <label className="text-[9px] text-slate-400 font-bold ml-4 uppercase tracking-widest leading-none">Class</label>
                    <input type="text" placeholder="e.g. SS 1" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold dark:text-slate-100 shadow-inner" value={className} onChange={(e) => setClassName(e.target.value)} />
                    {className.length > 0 && <div className="mt-2 text-[9px] font-black text-blue-600 px-4 flex items-center gap-1 leading-none"><Zap size={10} /> {detectCategory(className).toUpperCase()} SCHEME DETECTED</div>}
                  </div>
                  <button onClick={handleStartEduCalc} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-black shadow-xl uppercase tracking-widest text-[10px] active:scale-95 transition-all leading-none">Open Register</button>
                </div>
             </div>
             <div className="lg:col-span-3 space-y-6">
                <h3 className="text-sm dark:text-slate-100 uppercase tracking-widest px-4 leading-none"><History size={18} className="text-blue-600 inline mr-2" /> Local Archives</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {registers.length === 0 ? <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed text-slate-300 font-black text-[9px] uppercase tracking-widest leading-none shadow-inner">No local records</div> :
                    registers.map(r => (
                      <div key={r.id} onClick={() => loadRegister(r)} className="bg-white dark:bg-slate-900 p-7 rounded-[3rem] border shadow-sm hover:border-blue-400 transition-all cursor-pointer group flex justify-between items-center text-left">
                        <div className="space-y-1.5 leading-none"><h4 className="font-black dark:text-slate-100 uppercase text-lg leading-none">{r.subject}</h4><p className="text-[10px] font-bold text-slate-400 uppercase mt-2 leading-none">{r.className} • {r.students?.length} Students</p><div className="flex items-center gap-1.5 text-[8px] text-slate-400 font-black italic uppercase mt-2 leading-none"><Clock size={10} /> Mod: {r.lastSaved}</div></div>
                        <div className="p-3 bg-blue-50 dark:bg-slate-800 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"><ArrowRight size={20} /></div>
                      </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      );

      case 'educalc_register': return (
        <div className="max-w-6xl mx-auto pt-10 px-4 space-y-6 animate-in slide-in-from-bottom-10 pb-20 text-center uppercase tracking-widest font-black leading-none">
          <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-left relative overflow-hidden leading-none">
             <div className="flex items-center gap-5 z-10 leading-none"><button onClick={() => setCurrentModule('educalc_setup')} className="bg-white/20 p-3 rounded-2xl text-white active:scale-95 transition-all leading-none"><ChevronLeft size={24} /></button><div><h1 className="text-3xl font-black uppercase tracking-tighter leading-none">{subject}</h1><p className="text-blue-100 text-[10px] font-bold uppercase tracking-[0.3em] mt-3 opacity-80 leading-none">{className}</p></div></div>
             <div className="flex gap-2 z-10 leading-none"><button onClick={saveEduCalc} className="bg-white text-blue-600 px-6 py-3 rounded-2xl text-[10px] font-black uppercase shadow-lg active:scale-95 transition-all leading-none">Save</button><button onClick={() => { if(!students.length) return triggerToast("No data"); let csv = "S/N,Student Name,CA 1,CA 2,Exam,Total,Grade\n" + students.map((s,i) => `${i+1},${s.name},${s.ca1},${s.ca2},${s.exam},${s.total},${s.grade}`).join("\n"); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = `${subject}_Report.csv`; a.click(); }} className="bg-green-500 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase shadow-lg active:scale-95 transition-all leading-none">Excel</button></div>
             <Calculator className="absolute -right-10 -bottom-10 opacity-10 text-white leading-none" size={200} />
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-sm border dark:border-slate-800 overflow-hidden text-left leading-none font-black">
             <div className="p-8 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 px-10 leading-none"><h3 className="font-black text-slate-800 dark:text-slate-100 uppercase text-xs flex items-center gap-2 leading-none"><FileSpreadsheet size={18} className="text-blue-600 leading-none" /> Records</h3><button onClick={() => setStudents([...students, {id:Date.now(), name:"", ca1:0, ca2:0, exam:0, total:0, grade:"F"}])} className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl text-xs font-black flex items-center gap-2 shadow-xl hover:bg-blue-700 active:scale-95 transition-all uppercase leading-none tracking-widest leading-none"><Plus size={20} /> Add Student</button></div>
             <div className="overflow-x-auto px-4 leading-none"><table className="w-full border-collapse leading-none font-black">
               <thead><tr className="bg-slate-50 dark:bg-slate-800 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b dark:border-slate-800 leading-none"><th className="px-10 py-6 text-left min-w-[300px] leading-none">Name</th><th className="px-2 py-6 text-center leading-none">CA 1</th><th className="px-2 py-6 text-center leading-none">CA 2</th><th className="px-2 py-6 text-center leading-none">EXAM</th><th className="px-2 py-6 text-center text-blue-600 leading-none">TOTAL</th><th className="px-2 py-6 text-center leading-none">GRADE</th><th className="px-10 py-6 text-center leading-none">X</th></tr></thead>
               <tbody className="divide-y dark:divide-slate-800 leading-none font-black">
                 {students.map(s => (
                   <tr key={s.id} className="hover:bg-blue-50/20 transition-colors uppercase leading-none font-black">
                     <td className="px-10 py-4 font-bold leading-none"><input type="text" className="w-full bg-transparent border-none outline-none font-black text-slate-700 dark:text-slate-100 placeholder:opacity-30 uppercase leading-none" value={s.name} onChange={(e) => updateStudent(s.id, 'name', e.target.value)} /></td>
                     <td className="px-2 py-4 leading-none"><input type="number" className="w-16 text-center mx-auto bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-3 font-black text-blue-600 leading-none" value={s.ca1 || ""} onChange={(e) => updateStudent(s.id, 'ca1', e.target.value)} /></td>
                     <td className="px-2 py-4 leading-none"><input type="number" className="w-16 text-center mx-auto bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-3 font-black text-blue-600 leading-none" value={s.ca2 || ""} onChange={(e) => updateStudent(s.id, 'ca2', e.target.value)} /></td>
                     <td className="px-2 py-4 leading-none"><input type="number" className="w-16 text-center mx-auto bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-3 font-black text-blue-600 leading-none" value={s.exam || ""} onChange={(e) => updateStudent(s.id, 'exam', e.target.value)} /></td>
                     <td className="px-2 py-4 text-center font-black leading-none"><span className={`text-sm px-4 py-1.5 rounded-full ${s.total >= 40 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'} leading-none`}>{s.total}</span></td>
                     <td className="px-2 py-4 text-center font-black dark:text-slate-100 leading-none">{s.grade}</td>
                     <td className="px-10 py-4 text-center leading-none"><button onClick={() => setStudents(students.filter(x => x.id !== s.id))} className="text-slate-300 hover:text-red-500 transition-colors leading-none"><Trash2 size={12}/></button></td>
                   </tr>
                 ))}
               </tbody>
             </table></div>
          </div>
        </div>
      );

      case 'edunote_home': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest font-black leading-none">
          <div className="flex items-center justify-between"><button onClick={() => setCurrentModule('hub')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold leading-none"><ChevronLeft size={18} /> Hub</button><h2 className="text-xl dark:text-slate-100 uppercase tracking-tight leading-none">Category</h2></div>
          <div className="grid grid-cols-1 gap-6 text-left font-black">
            {['Primary', 'Junior', 'Senior'].map(cat => (
              <button key={cat} onClick={() => changeView('edunote_subjects', { category: cat })} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border-2 border-transparent hover:border-emerald-500 shadow-sm flex items-center justify-between group transition-all active:scale-[0.98]">
                <div className="flex items-center gap-6 font-black"><div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm"><GraduationCap size={24}/></div><h3 className="text-2xl text-slate-800 dark:text-slate-100">{cat} School</h3></div>
                <ChevronRight className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      );

      case 'edunote_subjects': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest font-black">
           <div className="flex items-center justify-between"><button onClick={() => setCurrentModule('edunote_home')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold leading-none"><ChevronLeft size={18} /> Back</button><div className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-black text-[9px] shadow-md uppercase leading-none">{selectedCategory} SCHOOL</div></div>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
             {SUBJECT_LISTS[selectedCategory]?.map(s => (
               <button key={s} onClick={() => changeView('edunote_levels', { subj: s })} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border-2 border-transparent hover:border-blue-600 transition-all font-black text-slate-700 dark:text-slate-200 text-xs shadow-sm active:scale-95 uppercase tracking-widest leading-none">{s}</button>
             ))}
           </div>
        </div>
      );

      case 'edunote_levels': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest font-black">
          <div className="flex items-center justify-between"><button onClick={() => setCurrentModule('edunote_subjects')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border active:scale-95 shadow-sm text-xs font-bold leading-none"><ChevronLeft size={18} /> Back</button><div className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-black text-[9px] shadow-md uppercase leading-none">{selectedSubject}</div></div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 font-black">
            {(selectedCategory === 'Primary' ? ['Pri 1', 'Pri 2', 'Pri 3', 'Pri 4', 'Pri 5'] : selectedCategory === 'Junior' ? ['JSS 1', 'JSS 2', 'JSS 3'] : ['SS 1', 'SS 2', 'SS 3']).map(lvl => (
              <button key={lvl} onClick={() => changeView('edunote_view', { level: lvl })} className="bg-white dark:bg-slate-900 w-32 h-32 rounded-[2.5rem] border-2 border-transparent hover:border-emerald-500 transition-all flex flex-col items-center justify-center font-black text-xl text-slate-800 dark:text-slate-100 shadow-md active:scale-95 transition-all leading-none"><span className="text-[9px] text-slate-400 mb-1 uppercase tracking-widest leading-none">Class</span>{lvl}</button>
            ))}
          </div>
        </div>
      );

      case 'edunote_view': 
        const scheme_L = (NIGERIAN_SCHEMES[selectedLevel] || []).filter(s => s.subject.toLowerCase() === selectedSubject?.toLowerCase());
        const note_V = noteArchives[`${selectedSubject}_${selectedLevel}`] || [];
        return (
        <div className="max-w-7xl mx-auto pt-10 px-4 space-y-8 animate-in slide-in-from-right-10 pb-20 text-center uppercase tracking-widest font-black">
          <div className="sticky top-4 z-50 flex items-center justify-between bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-[2rem] border shadow-xl">
             <button onClick={() => setCurrentModule('edunote_levels')} className="flex items-center gap-2 text-slate-500 bg-slate-50 dark:bg-slate-800 px-5 py-2.5 rounded-2xl active:scale-95 text-xs font-bold transition-all leading-none"><ChevronLeft size={18} /> Back</button>
             <div className="flex gap-2">
                <button onClick={() => { setIsPrinting(true); setTimeout(() => { window.print(); setIsPrinting(false); }, 1200); }} className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase shadow-lg active:scale-95 transition-all leading-none"><Printer size={16} className="inline mr-2"/> PDF</button>
                <button onClick={exportDoc} className="bg-indigo-600 text-white px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase shadow-lg active:scale-95 transition-all leading-none"><FileCode size={16} className="inline mr-2"/> Word Doc</button>
                <button onClick={saveLessonNote} className="bg-emerald-600 text-white px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase shadow-lg active:scale-95 transition-all leading-none"><Save size={16} className="inline mr-2"/> Save</button>
             </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4 text-left font-black">
             <div className="space-y-6">
                <div className="bg-blue-600 text-white p-8 rounded-[3.5rem] shadow-xl space-y-6 relative overflow-hidden">
                   <h3 className="text-xs uppercase tracking-widest z-10 relative leading-none">Curriculum Library</h3>
                   <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar z-10 relative">
                      {scheme_L.map((item, i) => (
                        <div key={i} className="bg-white/10 p-5 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                          <p className="text-[10px] font-bold leading-relaxed italic text-white/90">"{item.topics}"</p>
                          <button onClick={() => { setNoteTopic(item.topics); setNoteImage(null); setCurrentNote(`Subject: ${selectedSubject}\nWeek: ${selectedWeek}\nTopic: ${item.topics}\n\nObjectives:\n1.\n\nContent Presentation:\n-`); }} className="mt-4 text-[9px] font-black uppercase bg-white text-blue-600 px-4 py-2.5 rounded-xl w-full shadow-md active:scale-95 transition-all leading-none">Load Draft</button>
                        </div>
                      ))}
                      {!scheme_L.length && <p className="text-[10px] text-white/50 text-center uppercase py-4 leading-relaxed font-bold leading-none">No data</p>}
                   </div>
                   <GraduationCap className="absolute -right-5 -bottom-5 opacity-10 text-white" size={150} />
                </div>
             </div>
             <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-xl border dark:border-slate-800 space-y-6 text-center font-black">
                <div className="flex items-center justify-between border-b dark:border-slate-800 pb-4"><h3 className="text-[10px] font-black dark:text-slate-100 uppercase tracking-widest leading-none"><Edit3 size={18} className="text-emerald-600 inline mr-2" /> Workspace</h3><div className="grid grid-cols-6 md:grid-cols-12 gap-1">{[1,2,3,4,5,6,7,8,9,10,11,12].map(w => <button key={w} onClick={() => setSelectedWeek(w)} className={`px-2 py-1 rounded text-[10px] font-black ${selectedWeek === w ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-white'}`}>{w}</button>)}</div></div>
                <div className="space-y-4 font-black">
                   <div className="text-left space-y-1"><label className="text-[8px] text-slate-400 font-black ml-4 uppercase tracking-widest leading-none">Lesson Topic</label><input type="text" placeholder="Lesson Topic..." className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl outline-none font-bold shadow-inner dark:text-slate-100" value={noteTopic} onChange={e => setNoteTopic(e.target.value)} /></div>
                   {!noteImage ? (
                    <div className="border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl p-8 text-center bg-slate-50/50 dark:bg-slate-800/20 hover:bg-emerald-50 transition-all group cursor-pointer relative"><Camera size={32} className="mx-auto text-slate-200 mb-3 group-hover:scale-110 transition-transform"/><p className="text-[9px] text-slate-400 font-bold uppercase mb-4 leading-none tracking-widest">Attach Board Photo</p><label className="inline-block bg-white dark:bg-slate-800 border px-6 py-2 rounded-xl text-[9px] font-black cursor-pointer shadow-sm active:scale-95 uppercase tracking-widest leading-none transition-all">Select Image<input type="file" accept="image/*" className="hidden" onChange={(e) => { const r = new FileReader(); r.onloadend = () => { setNoteImage(r.result); triggerToast("Image Attached!"); }; if(e.target.files[0]) r.readAsDataURL(e.target.files[0]); }} /></label></div>
                   ) : (
                    <div className="relative rounded-3xl overflow-hidden shadow-lg group"><img src={noteImage} className="w-full h-auto max-h-[300px] object-cover" alt="note attach" /><button onClick={() => setNoteImage(null)} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-xl hover:scale-110 active:scale-90 transition-transform leading-none"><X size={18} /></button></div>
                   )}
                   <div className="text-left space-y-1"><label className="text-[8px] text-slate-400 font-black ml-4 uppercase tracking-widest leading-none">Note Content</label><textarea placeholder="Type lesson content here..." className="w-full p-6 bg-slate-50 dark:bg-slate-800 border-none rounded-3xl outline-none dark:text-slate-300 font-medium h-[400px] leading-relaxed resize-none shadow-inner" value={currentNote} onChange={e => setCurrentNote(e.target.value)} /></div>
                </div>
             </div>
             <div className="space-y-6">
                <h3 className="text-[10px] font-black dark:text-slate-100 uppercase tracking-widest px-4 leading-none"><History size={18} className="text-emerald-600 inline mr-2" /> 12-Week Vault</h3>
                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map(wk => {
                    const saved = note_V.find(n => n.week === wk);
                    return (
                      <div key={wk} className={`bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border shadow-sm transition-all ${saved ? 'border-emerald-200 cursor-pointer hover:border-emerald-500' : 'opacity-40'}`} onClick={() => saved && (setCurrentNote(saved.content), setNoteTopic(saved.topic), setSelectedWeek(saved.week), setNoteImage(saved.image || null))}>
                         <div className="flex justify-between items-start leading-none">
                            <span className="text-[9px] font-black px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600 uppercase leading-none">Week {wk}</span>
                            {saved && <button onClick={(e) => { e.stopPropagation(); const key = `${selectedSubject}_${selectedLevel}`; const upd = note_V.filter(x => x.week !== wk); setNoteArchives({...noteArchives, [key]: upd}); }} className="text-red-300 hover:text-red-600 transition-colors leading-none"><Trash2 size={12}/></button>}
                         </div>
                         <h4 className="font-black dark:text-slate-100 uppercase text-[10px] mt-2 leading-tight">{saved ? saved.topic : 'Empty Slot'}</h4>
                         {saved && <div className="mt-3 pt-2 border-t dark:border-slate-800 text-[8px] text-slate-400 font-black flex items-center gap-1 uppercase tracking-tighter leading-none"><Clock size={8}/> Mod: {saved.date}</div>}
                      </div>
                    );
                  })}
                </div>
             </div>
          </div>
        </div>
      );

      case 'backup_center': return (
        <div className="max-w-4xl mx-auto pt-10 px-4 space-y-10 animate-in fade-in pb-20 text-center uppercase tracking-widest font-black leading-none">
           <button onClick={() => setCurrentModule('hub')} className="flex items-center gap-2 text-slate-500 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-2xl border shadow-sm active:scale-95 text-xs font-bold transition-all leading-none"><ChevronLeft size={18} /> Hub</button>
           <div className="bg-blue-600 p-10 rounded-[3.5rem] text-white shadow-xl flex items-center gap-8 text-left relative overflow-hidden leading-none font-black"><Database size={120} className="absolute -right-5 -bottom-5 opacity-10" /><div className="p-5 bg-white rounded-[2rem] text-blue-600 shadow-inner"><Database size={40} /></div><div><h3 className="text-3xl font-black uppercase leading-tight leading-none font-black">Backup Center</h3><p className="text-blue-100 font-bold tracking-widest text-xs mt-2 opacity-80 leading-none uppercase tracking-widest">Permanent Data Export</p></div></div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-none font-black">
              <button onClick={() => { const blob = new Blob([JSON.stringify({registers, notes: noteArchives, profile: userProfile, db: globalStudents}, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `EduBridge_Backup.json`; a.click(); triggerToast("Backup Exported!"); }} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border shadow-sm text-center font-black text-xs uppercase text-slate-700 dark:text-slate-100 hover:border-blue-500 transition-all leading-none active:scale-95 leading-none font-black">Download Backup</button>
              <label className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border shadow-sm text-center font-black text-xs uppercase text-slate-700 dark:text-slate-100 cursor-pointer hover:border-blue-500 transition-all leading-none active:scale-95 leading-none font-black">Restore Data<input type="file" accept=".json" className="hidden" onChange={(e) => { const r = new FileReader(); r.onload = (ev) => { try { const d = JSON.parse(ev.target.result); if(d.registers) setRegisters(d.registers); if(d.notes) setNoteArchives(d.notes); if(d.db) setGlobalStudents(d.db); if(d.profile) setUserProfile(d.profile); triggerToast("Restored!"); } catch(e){ triggerToast("Invalid File"); } }; if(e.target.files[0]) r.readAsText(e.target.files[0]); }} /></label>
           </div>
        </div>
      );

      default: return null;
    }
  };

  const copyToClipboard = (text) => {
    const el = document.createElement('textarea'); el.value = text; document.body.appendChild(el); el.select();
    document.execCommand('copy'); document.body.removeChild(el); triggerToast("Copied Content!");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans pb-24 selection:bg-blue-100 text-slate-800 transition-colors duration-300">
      {renderView()}
      <div className="fixed bottom-6 left-0 right-0 pointer-events-none text-center print:hidden z-0 font-black">
         <p className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.3em] italic leading-none font-black">IBRAHIM I.I. YAMTA • 3MTT • FE/23/86231210 • KANO NIGERIA • 2026</p>
      </div>
      {showToast && !isPrinting && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-5 rounded-[2.5rem] shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300 z-[9999] border dark:border-slate-800 font-black uppercase text-[10px] tracking-widest leading-none font-black">
          <CheckCircle2 className="text-green-400 leading-none font-black" size={24} />
          {toastMsg}
        </div>
      )}
    </div>
  );
}