import { useEffect } from "react";
import { X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    vercelLink?: string;
    githubLink?: string;
    images: string[];
    videoUrl?: string;
    tags: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0E0E10] rounded-2xl shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="p-8">
          {/* Header */}
          <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300 text-lg mb-6">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-8">
            {project.vercelLink && (
              <a
                href={project.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform"
              >
                🚀 Ver Projeto Live
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                💻 Ver no GitHub
              </a>
            )}
          </div>

          {/* Long Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-3">Sobre o Projeto</h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          {/* Video */}
          {project.videoUrl && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Demonstração em Vídeo</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full"
                  poster={project.images[0]}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          )}

          {/* Images Gallery */}
          {project.images.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-3">Galeria de Imagens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden bg-gray-900 hover:scale-105 transition-transform"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
