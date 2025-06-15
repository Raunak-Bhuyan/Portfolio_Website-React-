import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A full-stack developer honing my skills over three years, I've built scalable web applications using React, Node.js, and PostgreSQL. As a B.Tech CSE student at NIT Silchar, I'm continuously expanding my expertise. Discover more of my work on my GitHub page.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Research Intern",
    company: "Satyendra Nath Bose Summer Research programme",
    description: `Conducted a comparative study of U-Net and transfer learning models (ResNet, VGG, EfficientNet) for image segmentation using IoU, Dice coefficient, and pixel accuracy metrics.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Technical Wing member",
    company: "Computer Science Society, NIT Silchar",
    description: `Successfully orchestrated Abacus, the annual flagship event of the Computer Science Society, NIT Silchar, ensuring seamless execution and coordination.`,
    technologies: ["Leadership", "Teamwork", "Management"],
  },
];

export const PROJECTS = [
  {
    title: "Breast Cancer Classification",
    image: project1,
    description:
      "This project utilized Logistic Regression to achieve breast cancer detection from a real-world dataset. The prediction of tumor malignancy was accomplished using nine independent variables, with correlations being thoroughly analyzed via odds ratios and confidence intervals.",
    technologies: ["Python", "Google Colab", "NumPy", "Neural Networks"],
  },
  {
    title: "Expense Management App",
    image: project2,
    description:
      "An application for managing expenses, with features such as user registration/login, adding/deleting/editing transactions.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer motion"],
  },
  {
    title: "U-Net architecture for image segmentation",
    image: project4,
    description:
      "U-Net architectures designed specifically for image segmentation, can be trained from scratch, offering tailored solutions. Achieved Validation accuracy of 96.2%",
    technologies: ["python", "spyder IDE", "Tensorflow"],
  },
];

export const CONTACT = {
  email: "raunakbhuyan66@gmail.com",
  linkedin: "https://www.linkedin.com/in/raunak-bhuyan-434738257/",
  github: "https://github.com/Raunak-Bhuyan",
  instagram: "https://www.instagram.com/raunak_bhuyan",
  top: "Back to Top"
};

