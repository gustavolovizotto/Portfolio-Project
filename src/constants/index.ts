// Types and Interfaces
export interface NavLink {
  name: string;
  link: string;
}

export interface Word {
  text: string;
  imgPath: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

export interface LogoIcon {
  imgPath: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface TechStack {
  path: string;
  name: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  imgPath: string;
  company: string;
}

export interface ExpLogo {
  name: string;
  imgPath: string;
}

export interface SocialImg {
  imgPath: string;
  altText: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    name: "Projetos",
    link: "#work",
  },
  {
    name: "Experiência",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testemunhas",
    link: "#testimonials",
  },
];

const words: Word[] = [
  { text: "ReactJS", imgPath: "/images/reactIcon.png" },
  { text: "TypeScript", imgPath: "/images/tsIcon.png" },
  { text: "JavaScript", imgPath: "/images/jsIcon.png" },
  { text: "React Native", imgPath: "/images/reactIcon.png" },
  { text: "NodeJS", imgPath: "/images/nodeIcon.png" },
  { text: "NextJS", imgPath: "/images/nextjsIcon.png" },
  { text: "SQL", imgPath: "/images/mysqlIcon.png" },
  { text: "NestJS", imgPath: "/images/nestIcon.png" },
];

const logoIconsList: LogoIcon[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities: FeatureCard[] = [
  {
    icon: "/images/seo.png",
    title: "Foco na Qualidade",
    description: "Entregando resultados de alta qualidade com atenção a cada detalhe.",
  },
  {
    icon: "/images/chat.png",
    title: "Comunicação Clara e Atenciosa",
    description: "Mantendo você atualizado em cada etapa para garantir transparência, clareza e satisfação na entrega.",
  },
  {
    icon: "/images/time.png",
    title: "Entregas no Prazo",
    description: "Garantindo que os projetos sejam concluídos dentro do prazo, com qualidade e atenção aos detalhes.",
  },
];

const techStackImgs: TechStack[] = [
  {
    path: "/images/logos/react.png",
    name: "React",
  },
  {
    path: "/images/logos/react.png",
    name: "React Native",
  },
  {
    path: "/images/logos/node.png",
    name: "Node.js",
  },
  {
    path: "/images/logos/three.png",
    name: "TypeScript",
  },
  {
    path: "/images/logos/git.svg",
    name: "MySQL",
  },
];

const techStackIcons: TechStack[] = [
  {
    path: "/models/react_logo-transformed.glb",
    name: "React",
  },
  {
    path: "/models/react_logo-transformed.glb", 
    name: "React Native",
  },
  {
    path: "/images/Node3dIcon.glb",
    name: "Node.js",
  },
  {
    path: "/images/Type3dIcon.glb",
    name: "TypeScript",
  },
  {
    path: "/images/Sql3dIcon.glb",
    name: "MySQL",
  },
];

const expCards: ExperienceItem[] = [
  {
    review: "RELATO DE ALGUEM",
    imgPath: "/images/logoUnect.svg",  
    logoPath: "/images/unectlogo2.png",  
    title: "Desenvolvedor Frontend Trainee",
    date: "Março 2025 - Abril 2025",
    responsibilities: [
      "Capacitação Frontend",
      "Capacitação de Git, GitHub",
      "Capacitação de Tailwind CSS",
      "Entrega de projeto Trainee 'KanbanProject'",
    ],
  },
  {
    review: "a",
    imgPath: "/images/logoUnect.svg",  
    logoPath: "/images/unectlogo2.png",  
    title: "Assesor de Desenvolvimento Frontend",
    date: "Maio 2025 - Atual",
    responsibilities: [
      "Auxiliar no desenvolvimento de aplicações web, focando na escalabilidade.",
      "Trabalhar com engenheiros de backend para integrar APIs de forma eficaz com o frontend.",
      "Contribuir com projetos de APPs Mobile e Web, utilizando ReactJS e ReactNative",
    ],
  },
];


const testimonials: TestimonialItem[] = [
  {
    quote:
      "Trabalhar com o Gustavo é sempre uma experiência leve e produtiva. Ele é super prestativo, está sempre disposto a ajudar e tem uma comunicação clara que facilita muito o dia a dia. No front end, manda muito bem com React e React Native, entrega com qualidade e atenção aos detalhes. É aquele tipo de colega que faz a diferença no time.",
    author: "João Vitor Trindade",
    imgPath: "/images/jaovitor.png",
    company: "@Unect",
  },
  {
    quote:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    author: "João Vitor Romani",
    imgPath: "/images/jaoromani.png",
    company: "@Unect",
  },
  {
    quote:
      "O Gustavo é excepcional. Essa frase descreve exatamente o que ele proporciona. Com uma alta capacidade de aprendizado e postura assertiva, trabalhar com ele é certeza de uma comunicação objetiva e garantia de um serviço de qualidade.",
    author: "Felipe de Souza Gomes",
    imgPath: "/images/felipe.png",
    company: "@Unect",
  },
];

const socialImgs: SocialImg[] = [
  {
    imgPath: "/images/insta.png",
    altText: "Instagram",
    link: "https://instagram.com/gustavolovizotto", 
  },
  {
    imgPath: "/images/github.png",
    altText: "GitHub",
    link: "https://github.com/gustavolovizotto", 
  },
  {
    imgPath: "/images/linkedin.png",
    altText: "LinkedIn",
    link: "https://linkedin.com/in/gustavo-lovizotto-tesin-64b238312/", 
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
