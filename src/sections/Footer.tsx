import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-row pr-10">
          <p>Veja meu cúrriculo:</p>
          <a 
            href="/images/curriculo.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white-50 hover:text-white-100 transition-colors"
          >
            <img src="/images/PdfIcon.png"
            className="hover:opacity-60 ml-4"></img>
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={socialImg.altText} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Gustavo Tesin. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
