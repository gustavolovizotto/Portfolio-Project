import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import ProjectModal from "../components/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  vercelLink?: string;
  githubLink?: string;
  images: string[];
  videoUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Utask - Task Management App",
    description: "Quadro Kanban com funcionalidades drag'n drop e autenticação de usuário",
    longDescription: `Utask é uma aplicação completa de gerenciamento de tarefas estilo Kanban, desenvolvida com React e TypeScript.

O projeto inclui:
- Sistema de autenticação de usuários
- Funcionalidade drag and drop para organização de tarefas
- Persistência de dados usando LocalStorage
- Gerenciamento de estado com Context API
- Interface responsiva e intuitiva

Esta aplicação demonstra conhecimentos sólidos em React, gerenciamento de estado, e manipulação de eventos complexos.`,
    image: "/images/UtaskLogo.png",
    vercelLink: "https://seu-projeto.vercel.app",
    githubLink: "https://github.com/seu-usuario/utask",
    images: ["/images/UtaskLogo.png"],
    videoUrl: "",
    tags: ["React", "TypeScript", "Axios", "LocalStorage", "Context API", "Drag & Drop"]
  },
  {
    id: 2,
    title: "Landing Page - Clínica Veterinária",
    description: "Landing page moderna e responsiva para clínica veterinária",
    longDescription: `Landing page profissional desenvolvida para uma clínica veterinária, com foco em conversão e experiência do usuário.

Características principais:
- Design moderno e acolhedor
- Totalmente responsivo
- Otimizada para SEO
- Formulário de contato integrado
- Seções informativas sobre serviços

O projeto demonstra habilidades em design de interfaces e desenvolvimento front-end.`,
    image: "/images/pindoramaLP.png",
    vercelLink: "https://seu-projeto.vercel.app",
    githubLink: "https://github.com/seu-usuario/veterinaria-lp",
    images: ["/images/pindoramaLP.png"],
    videoUrl: "",
    tags: ["React", "CSS", "Design Responsivo", "Landing Page"]
  },
  {
    id: 3,
    title: "BranchGenerator",
    description: "Ferramenta para geração automatizada de branches Git",
    longDescription: `BranchGenerator é uma ferramenta que automatiza a criação de branches Git seguindo padrões e convenções.

Funcionalidades:
- Geração de nomes de branches padronizados
- Suporte para diferentes tipos de branches (feature, bugfix, hotfix)
- Interface intuitiva e fácil de usar
- Integração com fluxo de trabalho Git

Desenvolvido para aumentar a produtividade e manter consistência no versionamento de código.`,
    image: "/images/BranchGenerator1.png",
    vercelLink: "https://branch-generator-w1us.vercel.app/",
    githubLink: "https://github.com/gustavolovizotto/branch-generator",
    images: ["/images/BranchGenerator1.png"],
    videoUrl: "",
    tags: ["TypeScript", "Git", "Automação", "DevTools"]
  },
  {
    id: 4,
    title: "NexusGames - Marketplace de Jogos",
    description: "Projeto de marketplace para compra e venda de jogos digitais",
    longDescription: `NexusGames é um marketplace fictício para compra e venda de jogos digitais, desenvolvido como projeto acadêmico em parceria com o meu amigo desenvolvedor João Vitor Trindade.`,
     image: "/images/MarketPlaceImg1.png",
    vercelLink: "https://frontend-game-marketplace.vercel.app/",
    githubLink: "https://github.com/JoaoTrindade1404/ProjetoPOO2",
    images: ["/images/MarketPlaceImg1.png", "/images/MarketPlaceImg2.png", "/images/MarketPlaceImg3.png", "/images/MarketPlaceImg4.png", "/images/MarketPlaceImg5.png", "/images/MarketPlaceImg6.png", "/images/MarketPlaceImg7.png", "/images/MarketPlaceImg8.png"],
    videoUrl: "",
    tags: ["TypeScript", "React", "Java", "Spring Boot", "PostgreSQL", "Supabase"]
  },
  {
    id: 5,
    title: "Dynamic Catalogs",
    description: "Aplicação para criação dinâmica de catálogos de produtos",
    longDescription: `Esta aplicação permite a criação dinâmica de catálogos de produtos, facilitando a organização e apresentação de itens para vendas ou exibição.

Funcionalidades:
- Criação e personalização de catálogos
- Adição e remoção de produtos
- Interface amigável e responsiva
- Armazenamento de dados em Supabase`,
    image: "/images/catalog6.png",
    vercelLink: "https://catalogoritalovizotto.vercel.app",
    githubLink: "https://github.com/gustavolovizotto/dynamic-catalogs",
    images: ["/images/catalog1.png", "/images/catalog2.png", "/images/catalog3.png", "/images/catalog4.png", "/images/catalog5.png", "/images/catalog6.png", "/images/catalog7.png", "/images/catalog8.png", "/images/catalog9.png", "/images/catalog10.png"],
    videoUrl: "",
    tags: ["TypeScript", "Supabase", "React", "tailwindCSS" ]
  },
];

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card: any, index: number) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <TitleHeader
        title="Meus Projetos"
        sub="💬Aqui estão alguns de meus projetos🚀"
      />
      <div id="work" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                onClick={() => handleProjectClick(project)}
                style={{ minHeight: "400px" }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between" style={{ minHeight: "160px" }}>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags Preview */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* Click Indicator */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Clique para ver mais
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};

export default AppShowcase;
