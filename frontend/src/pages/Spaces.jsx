// import { useParams } from "react-router-dom";
// import { TestimonialCard } from "../components/TestimonialCard";
// import { spacesTestimonials } from "../hooks/Hooks";

// export const Spaces = () => {
//   const { space_id } = useParams();

//   const { testimonial } = spacesTestimonials({ space_id });
//   return (
//     <>
//       <div className="min-h-screen bg-zinc-900 pt-10 pl-20">
//         <div className="text-white text-4xl font-semibold mb-10">
//           Customers Testimonials
//         </div>
//         <div className="grid grid-cols-2">
//           {testimonial.map((Testimonials) => (
//             <TestimonialCard
//               name={Testimonials.name}
//               email={Testimonials.email}
//               description={Testimonials.description}
//               testimonial_id={Testimonials.testimonial_id}
//               id={Testimonials.id}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

import { useParams } from "react-router-dom";
import { TestimonialCard } from "../components/TestimonialCard";
import { spacesTestimonials } from "../hooks/Hooks";

export const Spaces = () => {
  const { space_id } = useParams();

  const { testimonial } = spacesTestimonials({ space_id });
  return (
    <div className="min-h-screen bg-zinc-900 pt-10 px-6 md:px-12 lg:px-20">
      <div className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-10">
        Customers Testimonials
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonial.map((Testimonials) => (
          <TestimonialCard
            key={Testimonials.testimonial_id}
            name={Testimonials.name}
            email={Testimonials.email}
            description={Testimonials.description}
            testimonial_id={Testimonials.testimonial_id}
            id={Testimonials.id}
          />
        ))}
      </div>
    </div>
  );
};
