import React from "react";
import {
  UserOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  FileOutlined,
  PaperClipOutlined,
  TeamOutlined,
  StarOutlined,
  LockOutlined,
  ShopOutlined,
  TransactionOutlined,
  BankOutlined,
} from "@ant-design/icons";

export const services = [
  {
    id: 1,
    title: "Government Service",
    description:
      "All types of government services such as passport, driving license, birth registration, etc.",
    icon: <UserOutlined />,
  },
  {
    id: 2,
    title: "Expatriate Service",
    description:
      "Comprehensive expatriate services including visa processing, work permits, and documentation.",
    icon: <CheckCircleOutlined />,
  },
  {
    id: 3,
    title: "Job Application",
    description:
      "Professional job application services including CV preparation and interview coaching.",
    icon: <ClockCircleOutlined />,
  },
  {
    id: 4,
    title: "Traveling Abroad",
    description:
      "Complete travel services including visa applications, travel insurance, and itinerary planning.",
    icon: <EnvironmentOutlined />,
  },
  {
    id: 5,
    title: "Health Services",
    description:
      "Medical services including check-ups, vaccinations, and health insurance processing.",
    icon: <FileOutlined />,
  },
  {
    id: 6,
    title: "Education Services",
    description:
      "Education consulting including school admissions, scholarships, and study abroad programs.",
    icon: <PaperClipOutlined />,
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "All applications",
    highlight: "The only solution",
    description: "From government services to jobs, traveling abroad...",
    image:
      "https://plus.unsplash.com/premium_photo-1714265042273-9664e4537f7d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Government Services",
    highlight: "Made easy",
    description: "Passport, driving license, and other services...",
    image:
      "https://images.unsplash.com/photo-1745972036912-3e7ccc236922?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Traveling Abroad",
    highlight: "Explore the world",
    description: "Visa applications, travel insurance, and more...",
    image:
      "https://images.unsplash.com/photo-1744878150591-6ebf3a050d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Health Services",
    highlight: "Your health matters",
    description: "Health insurance, medical services, and more...",
    image:
      "https://images.unsplash.com/photo-1747356826558-4f1d97261978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const stats = [
  {
    id: 1,
    value: "10M+",
    label: "Satisfied Clients",
    icon: <UserOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 2,
    value: "99%",
    label: "Success Rate",
    icon: <CheckCircleOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 3,
    value: "24/7",
    label: "Service Support",
    icon: <ClockCircleOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 4,
    value: "500+",
    label: "Service Centers",
    icon: <EnvironmentOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 5,
    value: "100+",
    label: "Service Types",
    icon: <FileOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 6,
    value: "1M+",
    label: "Applications",
    icon: <PaperClipOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 7,
    value: "50+",
    label: "Employees",
    icon: <TeamOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 8,
    value: "100%",
    label: "Customer Satisfaction",
    icon: <StarOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 9,
    value: "5+",
    label: "Years of Experience",
    icon: <ClockCircleOutlined className="text-blue-500 text-3xl" />,
  },
  {
    id: 10,
    value: "100%",
    label: "Data Security",
    icon: <LockOutlined className="text-blue-500 text-3xl" />,
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Government Service",
    description: "Comprehensive government services with streamlined processes",
    items: [
      "Passport application and renewal",
      "Driving license processing",
      "Birth and marriage registration",
      "National ID card services",
      "Tax registration and filing",
    ],
    images: [
      "https://images.unsplash.com/photo-1581092921461-39b2f2aa99d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z292ZXJubWVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z292ZXJubWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    cta: "Explore Services",
  },
  {
    id: 2,
    title: "Expatriate Service",
    description: "Complete solutions for expatriates and overseas workers",
    items: [
      "Work visa processing",
      "Employment contract verification",
      "Overseas employment registration",
      "Document attestation",
      "Repatriation services",
    ],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwYXRyaWF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwYXRyaWF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Job Services",
    description: "Efficient job placement services for job seekers",
    items: [
      "CV writing and optimization",
      "Job search assistance",
      "Interview coaching",
      "Resume review and optimization",
      "Career guidance",
    ],
    images: [
      "https://images.unsplash.com/photo-1507679790980-4b43c1a3d1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517436072-4b9e7c5e6d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    cta: "Apply Now",
  },
  {
    id: 4,
    title: "Education Services",
    description:
      "Comprehensive support for students and educational institutions",
    items: [
      "University application assistance",
      "Scholarship guidance",
      "Document verification",
      "Student visa processing",
      "Career counseling",
    ],
    images: [
      "https://images.unsplash.com/photo-1507679790980-4b43c1a3d1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517436072-4b9e7c5e6d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    cta: "Learn More",
  },
  {
    id: 5,
    title: "E-Booking Services",
    description:
      "Online booking services for various applications and appointments",
    items: [
      "Appointment scheduling",
      "Document submission",
      "Payment processing",
      "Application tracking",
      "Feedback and support",
    ],
    images: [
      "https://images.unsplash.com/photo-1507679790980-4b43c1a3d1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517436072-4b9e7c5e6d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    cta: "Book Now",
  },
  {
    id: 6,
    title: "Skill Development",
    description:
      "Programs and resources to enhance your skills and career prospects",
    items: [
      "Online courses and certifications",
      "Workshops and seminars",
      "Career coaching and mentoring",
      "Resume building and interview preparation",
      "Soft skills training",
    ],
    images: [
      "https://images.unsplash.com/photo-1507679790980-4b43c1a3d1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbGwlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517436072-4b9e7c5e6d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbGwlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    cta: "Explore Programs",
  },
  {
    id: 7,
    title: "Healthcare Services",
    description: "Assistance and support for health-related needs",
    items: [
      "Health insurance",
      "Medical consultations",
      "Dental care",
      "Pharmacy services",
      "Wellness programs",
    ],
    images: [
      "https://images.unsplash.com/photo-1507679790980-4b43c1a3d1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbGNoJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517436072-4b9e7c5e6d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbGNoJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    cta: "Get Help",
  },
];

export const videos = [
  {
    id: 1,
    title: "Easy way to get government services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mi eget risus euismod congue eu sit amet purus. Sed scelerisque est eu vulputate sollicitudin. Etiam suscipit purus a neque vulputate, sit amet finibus felis euismod. Suspendisse fringilla diam risus, non dignissim leo aliquet in.",
    videoId: "VIDEO_ID_1",
  },
  {
    id: 2,
    title: "Application for a driving license",
    description: "Complete process of getting a driving license in Bangladesh",
    videoId: "VIDEO_ID_2",
  },
  {
    id: 3,
    title: "Preparing for work abroad",
    description:
      "How to prepare for work abroad Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mi eget risus euismod congue eu sit amet purus. Sed scelerisque est eu vulputate sollicitudin. Etiam suscipit purus a neque vulputate, sit amet finibus felis euismod. Suspendisse fringilla diam risus, non dignissim leo aliquet in.",
    videoId: "VIDEO_ID_3",
  },
  {
    id: 4,
    title: "Apply for a job online",
    description: "How to successfully apply for a job online",
    videoId: "VIDEO_ID_4",
  },
  {
    id: 5,
    title: "Complete guide to passport application",
    description: "All steps for applying for a new passport",
    videoId: "VIDEO_ID_5",
  },
  {
    id: 6,
    title: "Birth registration correction",
    description: "Easy method to correct birth registration",
    videoId: "VIDEO_ID_6",
  },
  {
    id: 7,
    title: "How to get a marriage certificate",
    description: "Step-by-step guide to obtaining a marriage certificate",
    videoId: "VIDEO_ID_7",
  },
  {
    id: 8,
    title: "Health services explained",
    description: "Overview of health services available",
    videoId: "VIDEO_ID_8",
  },
  {
    id: 9,
    title: "Traveling abroad made easy",
    description: "Tips and tricks for traveling abroad",
    videoId: "VIDEO_ID_9",
  },
  {
    id: 10,
    title: "Education services overview",
    description: "Understanding education services and how to apply",
    videoId: "VIDEO_ID_10",
  },
  {
    id: 11,
    title: "E-Booking services explained",
    description: "How to use e-booking services for applications",
    videoId: "VIDEO_ID_11",
  },
  {
    id: 12,
    title: "Skill development programs",
    description:
      "Overview of skill development programs available and how to apply for them online or in person at a center",
    videoId: "VIDEO_ID_12",
  },
  {
    id: 13,
    title: "Document verification process",
    description: "How to verify documents for various services",
    videoId: "VIDEO_ID_13",
  },
  {
    id: 14,
    title: "Job placement services",
    description: "Understanding job placement services and how to apply",
    videoId: "VIDEO_ID_14",
  },
  {
    id: 15,
    title: "Expatriate services overview",
    description: "Overview of expatriate services available",
    videoId: "VIDEO_ID_15",
  },
  {
    id: 16,
    title: "Government services explained16",
    description: "Understanding government services and how to apply",
    videoId: "VIDEO_ID_16",
  },
  {
    id: 17,
    title: "Travel insurance explained 17",
    description: "Understanding travel insurance and its benefits",
    videoId: "VIDEO_ID_17",
  },
  {
    id: 18,
    title: "Online application process",
    description: "How to apply for services online",
    videoId: "VIDEO_ID_18",
  },
  {
    id: 19,
    title: "Customer support services",
    description: "Understanding customer support services available",
    videoId: "VIDEO_ID_19",
  },
  {
    id: 20,
    title: "Feedback and support20",
    description: "How to provide feedback and get support",
    videoId: "VIDEO_ID_20",
  },
];

export const images = [
  {
    id: 1,
    title: "Image 1",
    description:
      "Description for image 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mi eget risus euismod congue eu sit amet purus. Sed scelerisque est eu vulputate sollicitudin. Etiam suscipit purus a neque vulputate, sit amet finibus felis euismod. Suspendisse fringilla diam risus, non dignissim leo aliquet in.",
    url: "https://images.unsplash.com/photo-1742836531226-a5c750d5a1fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Image 2",
    description: "Description for image 2",
    url: "https://images.unsplash.com/photo-1745933229147-68202b50274b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Image 3",
    description:
      "Description for image 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mi eget risus euismod congue eu sit amet purus. Sed scelerisque est eu vulputate sollicitudin. Etiam suscipit purus a neque vulputate, sit amet finibus felis euismod. Suspendisse fringilla diam risus, non dignissim leo aliquet in.",
    url: "https://images.unsplash.com/photo-1745933121819-576063018cbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Image 4",
    description: "Description for image 4",
    url: "images/image4.jpg",
  },
  {
    id: 5,
    title: "Image 5",
    description: "Description for image 5",
    url: "images/image5.jpg",
  },
  {
    id: 6,
    title: "Image 6",
    description: "Description for image 6",
    url: "images/image6.jpg",
  },
  {
    id: 7,
    title: "Image 7",
    description: "Description for image 7",
    url: "images/image7.jpg",
  },
  {
    id: 8,
    title: "Image 8",
    description: "Description for image 8",
    url: "images/image8.jpg",
  },
  {
    id: 9,
    title: "Image 9",
    description: "Description for image 9",
    url: "images/image9.jpg",
  },
  {
    id: 10,
    title: "Image 10",
    description: "Description for image 10",
    url: "images/image10.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Mohammad Rahman",
    role: "Government Service Applicant",
    content:
      "The passport application process was incredibly smooth. I got my passport within 10 days without any hassle.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    role: "Expatriate Service User",
    content:
      "Their overseas employment services helped me secure a job in Malaysia. The entire visa process was handled professionally.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Rajesh Sharma",
    role: "Education Service Client",
    rating: 5,
    content:
      "Thanks to their university application service, I got admission to my dream university abroad with a scholarship.",
    avatar:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fatima Noor",
    role: "Job Seeker",
    rating: 5,
    content:
      "The job placement service was a game-changer for me. I landed my dream job within weeks!",
    avatar:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Ali Ahmed",
    role: "Expatriate Service User",
    content:
      "I received excellent support for my work visa application. Highly recommend their services!",
    rating: 4,
    avatar:
      "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const partnerCategories = [
  {
    title: "Our Business Partner",
    partners: [
      {
        name: "Sunday",
        logo: "https://yt3.googleusercontent.com/mlpgwXLtJbOdJ_xm_UcEUxVCFISOxHywUqj7nwnRVS_EjmkMIZ_DGZiXP19AmsfaN9Yk1zTEkxU=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Airtel",
        logo: "https://yt3.googleusercontent.com/mlpgwXLtJbOdJ_xm_UcEUxVCFISOxHywUqj7nwnRVS_EjmkMIZ_DGZiXP19AmsfaN9Yk1zTEkxU=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Teletalk",
        logo: "https://yt3.googleusercontent.com/mlpgwXLtJbOdJ_xm_UcEUxVCFISOxHywUqj7nwnRVS_EjmkMIZ_DGZiXP19AmsfaN9Yk1zTEkxU=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Grameenphone",
        logo: "https://yt3.googleusercontent.com/mlpgwXLtJbOdJ_xm_UcEUxVCFISOxHywUqj7nwnRVS_EjmkMIZ_DGZiXP19AmsfaN9Yk1zTEkxU=s900-c-k-c0x00ffffff-no-rj",
      },
    ],
    icon: <ShopOutlined className="text-green-500" />,
  },
  {
    title: "Our payment partners",
    partners: [
      {
        name: "Cash",
        logo: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/08/84/62f92578037f0.png",
      },
      {
        name: "ShurjoPay",
        logo: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/08/84/62f92578037f0.png",
      },
      {
        name: "Upay",
        logo: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/08/84/62f92578037f0.png",
      },
      {
        name: "Bkash",
        logo: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/08/84/62f92578037f0.png",
      },
    ],
    icon: <TransactionOutlined className="text-purple-500" />,
  },
];

export const faqs = [
  {
    id: 1,
    category: "application",
    question: "What services do you provide?",
    answer:
      "We offer comprehensive services including government documentation, expatriate services, job placement, education consulting, and more.",
  },
  {
    id: 2,
    category: "application",
    question: "How can I track my application status?",
    answer:
      "You can track your application status through our online portal using your application reference number.",
  },
  {
    id: 3,
    category: "application",
    question: "What documents are typically required?",
    answer:
      "Required documents vary by service but generally include identification proofs, photographs, and supporting documents specific to each service.",
  },
  {
    id: 4,
    category: "payment",
    question: "Do you offer expedited processing?",
    answer:
      "Yes, we offer expedited processing for most services at an additional fee.",
  },
  {
    id: 5,
    category: "payment",
    question: "How long does processing usually take?",
    answer:
      "Processing times vary by service type and government processing times. Typical durations are listed with each service.",
  },
  {
    id: 6,
    category: "payment",
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, and online banking.",
  },
  {
    id: 7,
    category: "support",
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support via email, phone, or through our online chat service.",
  },
  {
    id: 8,
    category: "support",
    question: "What if I need to cancel my application?",
    answer:
      "Cancellation policies vary by service. Please refer to our cancellation policy on the website or contact customer support for assistance.",
  },
  {
    id: 9,
    category: "support",
    question: "Can I change my appointment date?",
    answer:
      "Yes, you can reschedule your appointment through our online portal or by contacting customer support.",
  },
  {
    id: 10,
    category: "support",
    question: "What if I have a complaint?",
    answer:
      "We take complaints seriously. Please contact our customer support with details, and we will address your concerns promptly.",
  },
];

export const partners = [
  {
    id: 1,
    name: "Ministry of Education",
    logo: "/images/partners/education-ministry.png",
  },
  {
    id: 2,
    name: "Bangladesh Bank",
    logo: "/images/partners/bangladesh-bank.png",
  },
  {
    id: 3,
    name: "Ministry of Foreign Affairs",
    logo: "/images/partners/foreign-affairs-ministry.png",
  },
  {
    id: 4,
    name: "Ministry of Home Affairs",
    logo: "/images/partners/home-affairs-ministry.png",
  },
  {
    id: 5,
    name: "Ministry of Health",
    logo: "/images/partners/health-ministry.png",
  },
];

export const navLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Government Services", path: "/government" },
  { id: 3, title: "Expatriate Services", path: "/expatriate" },
  { id: 4, title: "Job Services", path: "/jobs" },
  { id: 5, title: "Education Services", path: "/education" },
  { id: 6, title: "E-Services", path: "/eservices" },
  { id: 7, title: "Tracking", path: "/tracking" },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Government Service", link: "#" },
      { name: "Expatriate Service", link: "#" },
      { name: "Job Service", link: "#" },
      { name: "Education Service", link: "#" },
      { name: "E-Book Service", link: "#" },
      { name: "Skill Development", link: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Home", link: "#" },
      { name: "About Us", link: "#" },
      { name: "Agent Login", link: "#" },
      { name: "Contact", link: "#" },
      { name: "FAQ", link: "#" },
      { name: "Privacy Policy", link: "#" },
    ],
  },
];

export const contactInfo = {
  address: "123 Business Avenue, Dhaka 1212, Bangladesh",
  phone: "+880 1234 567890",
  email: "info@allapply.com",
  hours: "Mon-Fri: 9AM - 6PM",
  social: {
    facebook: "https://facebook.com/allapply",
    twitter: "https://twitter.com/allapply",
    linkedin: "https://linkedin.com/company/allapply",
  },
};
