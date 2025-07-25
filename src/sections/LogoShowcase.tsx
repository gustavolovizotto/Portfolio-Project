import { logoIconsList } from "../constants";
import type { LogoIcon as LogoIconType } from "../constants";

const LogoIcon = ({ icon }: { icon: LogoIconType }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt="Company logo" />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
