import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="O que as pessoas dizem sobre mim?"
          sub="⭐️ Feedback de colegas de trabalho"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-white-50">{testimonial.company}</p>
                </div>
              </div>
            </TestimonialCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
