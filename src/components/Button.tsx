interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
  targetId?: string; 
}

const Button: React.FC<ButtonProps> = ({ text, className, targetId }) => {
  return (
    <a
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 

        const target = document.getElementById(targetId || "counter"); 
        if (target) {
          const offset = window.innerHeight * 0.15; 

          
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} 
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
