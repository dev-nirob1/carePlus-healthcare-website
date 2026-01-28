import React from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaChild,
  FaBrain,
  FaNotesMedical,
  FaMicroscope,
  FaStethoscope,
  FaAmbulance,
  FaFilePrescription,
  FaHospitalUser,
} from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    slug: "general-practice",
    title: "General Practice",
    shortDescription:
      "Comprehensive primary care for individuals and families. We focus on prevention, diagnosis, and treatment.",
    fullDescription:
      "Our General Practice department provides a wide range of medical services for patients of all ages. We believe in building long-term relationships with our patients to provide personalized and continuous care. From routine check-ups to managing chronic conditions, our experienced GPs are here for you.",
    icon: <FaUserMd />,
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800&auto=format&fit=crop",
    features: [
      {
        title: "Annual Checkups",
        desc: "Comprehensive physical exams to monitor your overall health.",
      },
      {
        title: "Immunizations",
        desc: "Protecting you and your family from preventable diseases.",
      },
      {
        title: "Chronic Disease Management",
        desc: "Expert care for diabetes, hypertension, and more.",
      },
      {
        title: "Health Screenings",
        desc: "Early detection services for various health conditions.",
      },
    ],
    details: [
      "No appointment necessary for urgent cases during clinic hours.",
      "Electronic health records for seamless care coordination.",
      "Same-day appointments often available for acute illnesses.",
      "Integrated laboratory and imaging services for quick diagnosis.",
    ],
  },
  {
    id: 2,
    slug: "cardiology",
    title: "Cardiology",
    shortDescription:
      "Expert heart care using state-of-the-art diagnostic and therapeutic procedures.",
    fullDescription:
      "Our Cardiology department is dedicated to the prevention, diagnosis, and treatment of heart and vascular diseases. We use the latest technology to provide comprehensive care, from non-invasive screenings to advanced interventional procedures.",
    icon: <FaHeartbeat />,
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop",
    features: [
      {
        title: "Heart Screenings",
        desc: "Advanced tests to assess your cardiovascular health.",
      },
      {
        title: "ECG & EKG",
        desc: "Precise measurement of heart electrical activity.",
      },
      {
        title: "Blood Pressure",
        desc: "Comprehensive management of hypertension.",
      },
      {
        title: "Rehabilitation",
        desc: "Guided recovery programs for post-cardiac events.",
      },
    ],
    details: [
      "Specialized chest pain units for rapid assessment.",
      "Non-invasive stress testing and echocardiography.",
      "Holter monitoring for long-term heart rhythm assessment.",
      "Collaboration with leading cardiovascular surgeons if needed.",
    ],
  },
  {
    id: 3,
    slug: "pediatrics",
    title: "Pediatrics",
    shortDescription:
      "Dedicated healthcare for infants, children, and adolescents in a friendly environment.",
    fullDescription:
      "We understand that children have unique healthcare needs. Our Pediatrics department provides compassionate care in a child-friendly environment, ensuring your little ones feel safe and comfortable during their visit.",
    icon: <FaChild />,
    image:
      "https://images.unsplash.com/photo-1632053001835-512c011e5a87?q=80&w=800&auto=format&fit=crop",
    features: [
      {
        title: "Well-child Visits",
        desc: "Regular growth and development monitoring.",
      },
      {
        title: "Vaccinations",
        desc: "Essential immunization programs for all ages.",
      },
      {
        title: "Screenings",
        desc: "Hearing, vision, and developmental assessments.",
      },
      {
        title: "Acute Care",
        desc: "Prompt treatment for common childhood illnesses.",
      },
    ],
    details: [
      "Separate waiting areas for sick and well children.",
      "Developmental counseling and support for parents.",
      "Adolescent medicine focusing on teen-specific health issues.",
      "Nutritional guidance for healthy childhood growth.",
    ],
  },
  {
    id: 4,
    slug: "neurology",
    title: "Neurology",
    shortDescription:
      "Advanced care for disorders of the nervous system, including the brain and spinal cord.",
    fullDescription:
      "Our Neurology department specializes in the diagnosis and treatment of complex neurological conditions. We use advanced diagnostic tools to provide accurate assessments and personalized treatment plans for our patients.",
    icon: <FaBrain />,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    features: [
      {
        title: "Stroke Care",
        desc: "Rapid response and rehabilitative neurological care.",
      },
      {
        title: "Migraine Mgmt",
        desc: "Specialized treatment for chronic headaches.",
      },
      {
        title: "Epilepsy",
        desc: "Advanced diagnostics and seizure management.",
      },
      {
        title: "Memory Clinic",
        desc: "Assessment and support for dementia and Alzheimer's.",
      },
    ],
    details: [
      "Neurodiagnostic testing including EEG and EMG.",
      "Multidisciplinary approach to neuromuscular disorders.",
      "Pain management strategies for neurological conditions.",
      "Support groups for patients and their families.",
    ],
  },
  {
    id: 5,
    slug: "dermatology",
    title: "Dermatology",
    shortDescription:
      "Specialized care for skin, hair, and nail conditions, both medical and cosmetic.",
    fullDescription:
      "Healthy skin is vital to your overall well-being. Our Dermatology department offers a full range of services, from cancer screenings to laser treatments, all delivered by board-certified specialists.",
    icon: <FaNotesMedical />,
    image:
      "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800&auto=format&fit=crop",
    features: [
      {
        title: "Skin Cancer",
        desc: "Comprehensive screenings and surgical treatments.",
      },
      {
        title: "Acne Treatment",
        desc: "Advanced solutions for clear and healthy skin.",
      },
      {
        title: "Eczema Mgmt",
        desc: "Expert care for chronic skin conditions.",
      },
      {
        title: "Cosmetic",
        desc: "Safe and effective rejuvenation procedures.",
      },
    ],
    details: [
      "Full-body skin examinations for moles and lesions.",
      "Phototherapy for psoriasis and other conditions.",
      "Pediatric dermatology for our youngest patients.",
      "Biopsy services and on-site dermatopathology.",
    ],
  },
  {
    id: 6,
    slug: "diagnostics",
    title: "Diagnostics & Imaging",
    shortDescription:
      "High-quality imaging and laboratory services for accurate diagnosis.",
    fullDescription:
      "Accurate diagnosis is the first step toward effective treatment. Our Diagnostics and Imaging department is equipped with the latest technology to provide rapid and precise results for all our medical departments.",
    icon: <FaMicroscope />,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    features: [
      {
        title: "X-Ray & MRI",
        desc: "High-resolution imaging for internal health assessment.",
      },
      { title: "Blood Tests", desc: "Comprehensive laboratory screenings." },
      {
        title: "Ultrasound",
        desc: "Non-invasive diagnostic imaging procedures.",
      },
      {
        title: "Pathology",
        desc: "Detailed analysis of tissue and blood samples.",
      },
    ],
    details: [
      "State-of-the-art MRI and CT scanning equipment.",
      "Rapid turnaround times for most laboratory results.",
      "Digital imaging for easy sharing with your specialists.",
      "Comfortable and private testing environments.",
    ],
  },
];
