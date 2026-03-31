/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vivek's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vivek Kumar Portfolio",
    type: "website",
    url: "http://github.com/",
  },
};

//Home Page
const greeting = {
  title: "Vivek Kumar",
  logo_name: "VivekKumar",
  nickname: "vivek",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "https://drive.google.com",
  portfolio_repository: "https://github.com/vivekkumar012/masterPortfolio",
  githubProfile: "https://github.com/vivekkumar012",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vivekkumar012",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vivekumar7510/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:vivekumar7510@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/i__vivek_07",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/i__vivek_07/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, NextJS.",
        "⚡ Having 2+ years of experience in full stack development",
        "⚡ Creating application backend in Node, Express with MongoDB and PostgreSQL database",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon-round",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "devicon:nextjs",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "JAVA",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "devicon:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Coder_X_Vivek/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/i_vivek_07",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/i_vivek_07",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/i_vivek",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@i_vivek",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru Ghasidas Vishwavidyalaya Bilaspur",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "GGV-logo.webp",
      alt_name: "GGV",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Data Structures, BlockChain, Cloud Computing and Full Stack Development.",
        "⚡ I have also done some projects on these subjects. These projects include implementation of algorithms, creating websites and android applications.",
      ],
      website_link: "http://ggu.ac.in",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "160 Days of Coding",
      subtitle: "- GeeksforGeeks",
      logo_path: "gfg-logo.webp",
      certificate_link: "https://www.geeksforgeeks.org",
      alt_name: "GFG 160 Days Coding Streak",
      color_code: "#2F8D4699",
    },
    {
      title: "Odoo Hackathon Finalist",
      subtitle: "- CGC Jhajjeri",
      logo_path: "odoo-logo.webp",
      certificate_link: "",
      alt_name: "Odoo Hackathon Finalist",
      color_code: "#71482899",
    },
    {
      title: "HackWithUttarPradesh Finalist",
      subtitle: "- HackWithUttarPradesh",
      logo_path: "hackwithup.webp",
      certificate_link:
        "https://unstop.com/certificate-preview/331cbcac-9690-456b-bfd8-ff506f56049b",
      alt_name: "HackWithUttarPradesh Finalist",
      color_code: "#0C9D5899",
    },
    {
      title: "HackTheFlame Finalist",
      subtitle: "- HackTheFlame",
      logo_path: "hackflame-logo.webp",
      certificate_link:
        "https://unstop.com/certificate-preview/a3d11e66-7a13-4555-af5a-b099033d9fa8",
      alt_name: "HackTheFlame Hackathon Finalist",
      color_code: "#E6394699",
    },
    {
      title: "Hackatron Participant",
      subtitle: "- Hackatron",
      logo_path: "hackatrone.webp",
      certificate_link:
        "https://unstop.com/certificate-preview/921e094d-5e7c-4a4f-903f-c823b829972a",
      alt_name: "Hackatron Hackathon Participant",
      color_code: "#1F407899",
    },
    {
      title: "HackForImpact Hackathon",
      subtitle: "- IIIT Delhi",
      logo_path: "iiitdelhi-logo.webp",
      certificate_link:
        "https://unstop.com/certificate-preview/bbc75796-cfa6-4540-9354-f292901ede09",
      alt_name: "HackForImpact IIIT Delhi",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with startups as Software Developer, Designer and Software Architect. I have also participated in many hackathons. I love to building innovative solutions that create impact.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Machine Learning Engineer",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "June 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Zuper Tech Ltd.",
          company_url: "https://www.zupertechltd.com/",
          logo_path: "zuper-tech.jpg",
          duration: "Jan 2026 - Mar 2026",
          location: "Remote",
          description:
            "Building and maintaining their B2B SaaS product. Experience working on the backend of the product using NodeJS and ExpressJS. Involved in designing the database schema and API endpoints for the product.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Open Source & CP Team Lead",
          company: "Google Developer Groups on Campus - GGV",
          company_url: "https://gdg.community.dev/",
          logo_path: "google_logo.png",
          duration: "Oct 2025 - Present",
          location: "GGV, Bilaspur, Chhattisgarh",
          description:
            "Leading the Open Source and Competitive Programming team at Google Developer Groups on Campus, GGV. Organising coding contests, CP workshops, and open source contribution drives for students. Mentoring peers in problem-solving, data structures, and algorithms while fostering a strong developer community on campus.",
          color: "#4285F4",
        },
        {
          title: "AI/ML Team Lead",
          company: "GeeksForGeeks Student Chapter - GGV",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "gfg-logo.webp",
          duration: "Oct 2025 - Present",
          location: "GGV, Bilaspur, Chhattisgarh",
          description:
            "Leading the AI/ML team of the GeeksForGeeks Student Chapter at GGV. Conducting sessions, hands-on workshops, and project-based learning activities focused on Machine Learning, Deep Learning, and Artificial Intelligence. Guiding students in building real-world AI/ML projects and preparing for industry-level challenges.",
          color: "#2F8D46",
        },
        {
          title: "NSS Volunteer",
          company: "National Service Scheme - GGV",
          company_url: "https://nss.gov.in/",
          logo_path: "nss_logo.webp",
          duration: "Oct 2023 - Present",
          location: "GGV, Bilaspur, Chhattisgarh",
          description:
            "Actively participating as an NSS volunteer, contributing to community service activities, social awareness campaigns, and outreach programs. Engaged in initiatives promoting education, health, and environmental awareness in the surrounding communities as part of the National Service Scheme.",
          color: "#E63946",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Applications and deploy them to the cloud using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack Development, AI, Cloud and Opensource Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Koni Bilaspur, Chhattisgarh, India",
    locality: "Bilaspur",
    country: "India",
    region: "Chhattisgarh",
    postalCode: "495001",
    streetAddress: "koni",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
