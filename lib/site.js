export const site = {
  name: "Deem Hospital",
  tagline: "Trusted Specialists for Every Medical Need",
  description:
    "Deem Hospital is a multi-specialty hospital delivering consultant-led care, 24/7 emergency response and advanced diagnostics under one roof.",
  phone: "+234 700 333 6600",
  emergency: "+234 800 911 0911",
  email: "care@deemhospital.com",
  address: "18 Ribadu Road, Ikoyi, Lagos, Nigeria",
  hours: "Clinics 8:00am – 8:00pm · Emergency 24/7",
  url: "https://deem-hospital.vercel.app",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "30M+", label: "Patients treated" },
  { value: "30%", label: "Lower wait times" },
  { value: "$100M", label: "Invested in care" },
  { value: "60+", label: "Consultants on staff" },
];

export const services = [
  {
    slug: "cardiology",
    name: "Cardiology",
    tag: "Heart & vascular",
    blurb:
      "Consultant-led heart care, from ECG and echo to interventional cardiology and cardiac rehabilitation.",
    image: "/images/heart-hologram.jpg",
    icon: "heart",
    price: "From ₦45,000",
    treatments: [
      "Echocardiography & stress testing",
      "24-hour Holter and BP monitoring",
      "Angiography and angioplasty",
      "Heart failure and hypertension clinics",
      "Post-operative cardiac rehabilitation",
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    tag: "Brain & nerves",
    blurb:
      "Expert in treating disorders of the nervous system, including the brain, spinal cord and peripheral nerves.",
    image: "/images/ai-surgeon.jpg",
    icon: "brain",
    price: "From ₦55,000",
    treatments: [
      "Stroke assessment and thrombolysis",
      "Epilepsy and seizure management",
      "EEG and nerve conduction studies",
      "Headache and migraine clinic",
      "Movement disorder follow-up",
    ],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    tag: "Digestive system",
    blurb:
      "Specialises in the digestive system — diagnosis and day-case endoscopy with same-week reporting.",
    image: "/images/lab.jpg",
    icon: "flask",
    price: "From ₦40,000",
    treatments: [
      "Upper GI endoscopy & colonoscopy",
      "Liver clinic and hepatitis care",
      "IBS and IBD management",
      "Ulcer and reflux treatment",
      "Nutritional counselling",
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    tag: "Skin health",
    blurb:
      "Treats skin-related issues, from chronic eczema and acne to mole mapping and minor skin surgery.",
    image: "/images/health-shield.jpg",
    icon: "shield",
    price: "From ₦30,000",
    treatments: [
      "Acne and eczema programmes",
      "Dermoscopy and mole mapping",
      "Minor skin surgery",
      "Paediatric dermatology",
      "Cosmetic dermatology",
    ],
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    tag: "Children's health",
    blurb:
      "A dedicated children's wing with immunisation, growth monitoring and a paediatric emergency bay.",
    image: "/images/scrubs-heart.jpg",
    icon: "baby",
    price: "From ₦25,000",
    treatments: [
      "Newborn and well-baby checks",
      "Full immunisation schedule",
      "Asthma and allergy care",
      "Growth and nutrition clinic",
      "Paediatric emergency bay",
    ],
  },
  {
    slug: "diagnostics",
    name: "Diagnostics & Imaging",
    tag: "Labs & scans",
    blurb:
      "CT, MRI, ultrasound and a full pathology lab on site, with most results released within 24 hours.",
    image: "/images/pharma-dna.jpg",
    icon: "scan",
    price: "From ₦18,000",
    treatments: [
      "CT and MRI scanning",
      "Digital X-ray and ultrasound",
      "Full blood and chemistry panels",
      "Histopathology and cytology",
      "Corporate health screening",
    ],
  },
];

export const doctors = [
  {
    slug: "adaeze-okonkwo",
    name: "Dr. Adaeze Okonkwo",
    role: "Consultant Cardiologist",
    speciality: "cardiology",
    image: "/images/doctor-portrait.jpg",
    years: 14,
    bio: "Dr. Okonkwo leads the heart and vascular unit at Deem Hospital. She trained in interventional cardiology in Lagos and London and has performed over 1,800 catheter procedures.",
    languages: ["English", "Igbo", "French"],
    days: "Mon · Wed · Fri",
  },
  {
    slug: "samuel-adeyemi",
    name: "Dr. Samuel Adeyemi",
    role: "Consultant Neurologist",
    speciality: "neurology",
    image: "/images/ai-surgeon.jpg",
    years: 18,
    bio: "A stroke and epilepsy specialist, Dr. Adeyemi built the hospital's 24-hour stroke pathway and supervises the neurophysiology lab.",
    languages: ["English", "Yoruba"],
    days: "Tue · Thu",
  },
  {
    slug: "grace-mensah",
    name: "Dr. Grace Mensah",
    role: "Consultant Gastroenterologist",
    speciality: "gastroenterology",
    image: "/images/lab.jpg",
    years: 11,
    bio: "Dr. Mensah runs the endoscopy day unit and the liver clinic, with a special interest in inflammatory bowel disease in young adults.",
    languages: ["English", "Twi"],
    days: "Mon · Thu",
  },
  {
    slug: "ibrahim-bello",
    name: "Dr. Ibrahim Bello",
    role: "Consultant Dermatologist",
    speciality: "dermatology",
    image: "/images/health-shield.jpg",
    years: 9,
    bio: "Dr. Bello focuses on chronic skin disease and skin cancer screening, and leads the hospital's dermoscopy service.",
    languages: ["English", "Hausa", "Arabic"],
    days: "Wed · Sat",
  },
  {
    slug: "chiamaka-eze",
    name: "Dr. Chiamaka Eze",
    role: "Consultant Paediatrician",
    speciality: "paediatrics",
    image: "/images/scrubs-heart.jpg",
    years: 12,
    bio: "Dr. Eze oversees the children's wing, the immunisation programme and the paediatric emergency bay.",
    languages: ["English", "Igbo"],
    days: "Mon – Fri",
  },
  {
    slug: "tunde-afolabi",
    name: "Dr. Tunde Afolabi",
    role: "Head of Radiology",
    speciality: "diagnostics",
    image: "/images/pharma-dna.jpg",
    years: 16,
    bio: "Dr. Afolabi reports across CT, MRI and ultrasound, and set the 24-hour turnaround standard the imaging unit now runs on.",
    languages: ["English", "Yoruba"],
    days: "Mon – Sat",
  },
];

export const posts = [
  {
    slug: "know-your-numbers",
    title: "Know your numbers: the four readings every adult should track",
    excerpt:
      "Blood pressure, fasting glucose, cholesterol and BMI tell you more about your next ten years than almost anything else.",
    image: "/images/health-shield.jpg",
    date: "2026-08-14",
    readingTime: "6 min read",
    category: "Prevention",
    body: [
      "Most of the conditions we treat at Deem Hospital do not arrive suddenly. They build quietly over years, and they announce themselves in four numbers long before they announce themselves in symptoms.",
      "Blood pressure is the first. A reading consistently above 130/80 is worth a conversation, not a panic — but it is worth the conversation now rather than in five years. Untreated hypertension is still the single largest driver of stroke admissions in our emergency department.",
      "Fasting glucose and HbA1c together tell you how your body is handling sugar. Pre-diabetes is reversible for most people through diet and movement alone, which is exactly why catching it early matters so much.",
      "Cholesterol is not one number but a panel. The ratio between LDL and HDL matters more than the total, and it responds well to changes you can start this week.",
      "Finally, body composition. BMI is a blunt instrument, so we pair it with waist circumference, which correlates far more closely with cardiac risk.",
      "Our corporate and individual screening packages cover all four in a single visit, with a consultant walking you through the results the same day.",
    ],
  },
  {
    slug: "inside-our-cardiac-unit",
    title: "Inside the cardiac unit: what happens in the first 90 minutes",
    excerpt:
      "From the ambulance bay to the cath lab, a look at the pathway that gives heart attack patients their best odds.",
    image: "/images/heart-hologram.jpg",
    date: "2026-07-02",
    readingTime: "8 min read",
    category: "Cardiology",
    body: [
      "In a heart attack, muscle dies by the minute. The international standard is to open the blocked artery within 90 minutes of arrival — what clinicians call door-to-balloon time.",
      "At Deem Hospital, the clock starts in the ambulance. Our paramedics transmit a 12-lead ECG ahead of arrival, so the cath lab team is assembling while the patient is still on the road.",
      "On arrival, the patient bypasses general triage entirely. Bloods, aspirin and a second ECG happen in the resuscitation bay in under ten minutes.",
      "The interventional cardiologist then threads a catheter from the wrist to the coronary artery, finds the blockage on live imaging, and opens it with a balloon and stent.",
      "Recovery begins immediately afterwards in the coronary care unit, and continues in our outpatient cardiac rehabilitation programme for twelve weeks.",
      "Our median door-to-balloon time last year was 62 minutes.",
    ],
  },
  {
    slug: "when-to-visit-emergency",
    title: "When to come to A&E — and when a clinic visit is enough",
    excerpt:
      "A practical guide to the symptoms that need an ambulance tonight, and the ones that can wait for a morning appointment.",
    image: "/images/ward.jpg",
    date: "2026-06-18",
    readingTime: "5 min read",
    category: "Emergency",
    body: [
      "Emergency departments work best when they are used for emergencies. Knowing the difference protects you and the patient in the next bed.",
      "Come immediately, or call an ambulance, for: chest pain or pressure lasting more than a few minutes, sudden weakness or drooping on one side of the face, difficulty breathing, uncontrolled bleeding, a first seizure, or a head injury with confusion or vomiting.",
      "For a child, add: a rash that does not fade under pressure, breathing that pulls in at the ribs, or unresponsiveness.",
      "A same-week clinic appointment is usually right for: persistent cough without breathlessness, most fevers in otherwise well adults, joint pain, rashes, and long-standing digestive symptoms.",
      "When in doubt, our 24-hour nurse line is staffed by triage-trained clinicians who will tell you honestly which door to walk through.",
    ],
  },
  {
    slug: "imaging-in-24-hours",
    title: "Why we report every scan within 24 hours",
    excerpt:
      "Waiting on results is its own kind of harm. Here is the workflow that lets our radiology team turn scans around the same day.",
    image: "/images/lab.jpg",
    date: "2026-05-09",
    readingTime: "4 min read",
    category: "Diagnostics",
    body: [
      "Anxiety while waiting for a scan result is not a minor inconvenience. It delays treatment decisions and it takes a real toll on patients and families.",
      "We restructured radiology around a single commitment: every routine scan reported within 24 hours, every urgent scan within two.",
      "That required three changes. Reporting radiologists now work in protected blocks with no clinic interruptions. Images route automatically to the sub-specialist best placed to read them. And results publish to the patient portal the moment they are signed off.",
      "The referring consultant gets a push alert at the same time, so the follow-up call happens the same day rather than at the next appointment.",
      "It is not a technology story so much as a scheduling one — but for patients, the difference is a week of their life back.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "I arrived at 2am with chest pain and was in the cath lab before 3. The team never once made me feel rushed or like a number.",
    name: "Ngozi A.",
    detail: "Cardiology patient",
  },
  {
    quote:
      "My daughter's asthma was managed in three different places before Deem. One paediatrician, one plan, and she has not been admitted since.",
    name: "Bolaji T.",
    detail: "Parent, paediatrics",
  },
  {
    quote:
      "Scan on Tuesday morning, results in the portal Tuesday evening, consultant on the phone Wednesday. That is how it should work everywhere.",
    name: "Ifeanyi O.",
    detail: "Diagnostics patient",
  },
];

export const faqs = [
  {
    q: "Do I need a referral to book an appointment?",
    a: "No. You can book directly with any of our consultants through the appointment form, by phone, or at the front desk. If you do have a referral letter, bring it — it helps your consultant get to the point faster.",
  },
  {
    q: "Which health insurance plans do you accept?",
    a: "We are on the panel of all major HMOs operating in Nigeria, including AXA Mansard, Hygeia, Reliance and Leadway. Bring your card and a valid ID to your first visit and our front desk will verify cover before you are seen.",
  },
  {
    q: "What are your emergency department hours?",
    a: "The emergency department is open 24 hours a day, every day of the year, including public holidays. Outpatient clinics run 8:00am to 8:00pm Monday to Saturday.",
  },
  {
    q: "How quickly will I get my test results?",
    a: "Routine laboratory results are released within 24 hours and most imaging is reported the same day. Urgent investigations requested from the emergency department are turned around in under two hours.",
  },
  {
    q: "Can I see my records online?",
    a: "Yes. Every patient gets a secure portal account at registration, where results, discharge summaries and upcoming appointments are available as soon as they are signed off.",
  },
];

export const departmentsQuickFacts = [
  { label: "Beds", value: "180" },
  { label: "Theatres", value: "6" },
  { label: "ICU beds", value: "22" },
  { label: "Ambulances", value: "9" },
];
