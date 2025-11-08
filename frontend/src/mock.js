// Mock data for The Chanakya Guru Academy

export const mockNotices = [
  {
    id: 1,
    title: "NEET 2026 Batch Admissions Open",
    description: "Limited seats available for 2-year integrated NEET program. Early bird discount till 31st March.",
    date: "2025-03-15",
    priority: "high"
  },
  {
    id: 2,
    title: "JEE Foundation Course Starting Soon",
    description: "Class 9th & 10th foundation batches commence from April 1st, 2025.",
    date: "2025-03-10",
    priority: "medium"
  },
  {
    id: 3,
    title: "UPSC Prelims Test Series Available",
    description: "Comprehensive test series for UPSC 2025 aspirants now available.",
    date: "2025-03-05",
    priority: "medium"
  }
];

export const mockCourses = [
  {
    id: "neet",
    title: "NEET",
    subtitle: "Medical Entrance Coaching",
    description: "Comprehensive NEET preparation with in-depth Physics, Chemistry, and Biology coverage, regular tests, and doubt-solving sessions.",
    durations: ["1 Year", "2 Years", "4 Years"],
    subjects: ["Physics", "Chemistry", "Biology"],
    features: [
      "Concept-based learning approach",
      "Regular mock tests and assessments",
      "Dedicated doubt-solving sessions",
      "Study materials and practice papers",
      "Expert faculty guidance",
      "Previous year question analysis"
    ],
    icon: "activity"
  },
  {
    id: "jee",
    title: "JEE",
    subtitle: "Engineering Entrance Coaching",
    description: "Rigorous preparation for JEE Main & Advanced with concept-based lectures, problem-solving practice, and test series.",
    durations: ["1 Year", "2 Years", "4 Years"],
    subjects: ["Physics", "Chemistry", "Mathematics"],
    features: [
      "JEE Main & Advanced focused curriculum",
      "Problem-solving workshops",
      "Weekly test series",
      "Comprehensive study modules",
      "IIT alumni mentorship",
      "Performance tracking system"
    ],
    icon: "rocket"
  },
  {
    id: "foundation",
    title: "Foundation",
    subtitle: "Class 9th to 10th",
    description: "Concept-building for school curriculum and early preparation for NEET/JEE/NTSE/Olympiads.",
    durations: ["Annual Program"],
    subjects: ["Science", "Mathematics"],
    features: [
      "Strong conceptual foundation",
      "School board exam preparation",
      "Early NEET/JEE exposure",
      "NTSE & Olympiad training",
      "Regular parent-teacher meetings",
      "Personality development sessions"
    ],
    icon: "book-open"
  },
  {
    id: "upsc",
    title: "UPSC",
    subtitle: "Civil Services Coaching",
    description: "Complete foundation course covering GS, CSAT, Essay, and optional subjects with guidance for Prelims and Mains.",
    durations: ["1 Year", "Integrated Batches"],
    subjects: ["General Studies", "CSAT", "Essay", "Optional Subjects"],
    features: [
      "Comprehensive GS coverage",
      "Current affairs analysis",
      "Answer writing practice",
      "Prelims & Mains guidance",
      "Interview preparation",
      "Study material and notes"
    ],
    icon: "landmark"
  }
];

export const mockFaculty = [
  {
    id: 1,
    name: "Mr. Gajraj Singh",
    qualification: "M.Tech IIT Madras",
    subject: "Physics",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Mr. Rajkumar Rastogi",
    qualification: "M.E. DU",
    subject: "Chemistry",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Mr. Bhupendra Singh",
    qualification: "M.Sc. IIT Indore",
    subject: "Mathematics",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Mr. Rajan Pal",
    qualification: "M.Sc. IIT Patna",
    subject: "Biology",
    experience: "9+ years",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Miss Akankesha",
    qualification: "M.Sc. MJPU",
    subject: "Chemistry",
    experience: "7+ years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  }
];

export const mockAchievements = [
  {
    id: 1,
    value: "500+",
    label: "Students Trained"
  },
  {
    id: 2,
    value: "95%",
    label: "Success Rate"
  },
  {
    id: 3,
    value: "50+",
    label: "NEET Selections"
  },
  {
    id: 4,
    value: "30+",
    label: "JEE Qualifiers"
  }
];

export const mockGallery = [
  {
    id: 1,
    title: "Classroom Learning",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    category: "classes"
  },
  {
    id: 2,
    title: "Rank Holders Celebration",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    category: "events"
  },
  {
    id: 3,
    title: "Lab Sessions",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    category: "classes"
  },
  {
    id: 4,
    title: "Award Ceremony",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    category: "events"
  },
  {
    id: 5,
    title: "Study Material Distribution",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    category: "events"
  },
  {
    id: 6,
    title: "Interactive Session",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    category: "classes"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "NEET 2024",
    rank: "AIR 1250",
    text: "The faculty at Chanakya Guru Academy helped me build strong concepts. The regular tests and doubt sessions were extremely helpful.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Rohit Kumar",
    course: "JEE Main 2024",
    rank: "AIR 890",
    text: "Best coaching institute in the region. The study materials and teaching methodology are excellent. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Anjali Verma",
    course: "Foundation Course",
    rank: "98% in Boards",
    text: "The foundation course gave me a strong base. Now I'm confident about cracking NEET. Thank you Chanakya Guru Academy!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  }
];

export const mockEnquiries = [
  {
    id: 1,
    name: "Rahul Singh",
    email: "rahul@example.com",
    phone: "9876543210",
    course: "NEET",
    class: "12th Pass",
    message: "Want to know about 1-year crash course",
    date: "2025-03-15",
    status: "pending"
  },
  {
    id: 2,
    name: "Sneha Patel",
    email: "sneha@example.com",
    phone: "9876543211",
    course: "JEE",
    class: "11th",
    message: "Interested in 2-year program",
    date: "2025-03-14",
    status: "contacted"
  }
];

export const mockStudyMaterials = [
  {
    id: 1,
    title: "Physics Module - Class XI",
    course: "NEET/JEE",
    chapters: ["Mechanics", "Thermodynamics", "Waves"],
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Chemistry Module - Class XII",
    course: "NEET/JEE",
    chapters: ["Organic Chemistry", "Physical Chemistry", "Inorganic Chemistry"],
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Biology Module - Botany",
    course: "NEET",
    chapters: ["Plant Kingdom", "Cell Biology", "Genetics"],
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Mathematics Module - Class IX",
    course: "Foundation",
    chapters: ["Algebra", "Geometry", "Trigonometry"],
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "UPSC General Studies Module - I",
    course: "UPSC",
    chapters: ["History", "Geography", "Polity"],
    downloadUrl: "#"
  }
];
