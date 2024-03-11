import React from "react";
import Slider from "react-slick";
import Monial1 from "../../assets/books/monial1.jfif";
import Monial2 from "../../assets/books/monial2.jfif";
import Monial3 from "../../assets/books/monial3.jfif";
import Monial4 from "../../assets/books/monial4.jfif";
const testimonialData = [
  {
    id: 1,
    name: "Victor  Olaoye",
    text: "I'm impressed with this online bookshop's extensive collection and seamless ordering process. My books arrived promptly and well-packaged. Highly recommend!",
    img: Monial1,
  },
  {
    id:2,
    name: "Dr Boakye",
    text: "Discovered this fantastic online bookshop with a diverse selection and great service. Personalized packaging and handwritten notes made my experience delightful. Found my new favorite bookstore",
    img: Monial2,
  },
  {
    id: 3,
    name: "Summy Gyamfi",
    text: "Found the rare book I was searching for on this site. Ordering was easy, and delivery was faster than expected. Will definitely return!",
    img: Monial3,
  },
  {
    id: 4,
    name: "Andy Dosty",
    text: "Couldn't be happier with my experience at this online bookshop. Not only did they have the book I wanted, but their customer service was exceptional. Quick delivery and quality packaging sealed the deal. Definitely my top choice for book purchases!",
    img: Monial4,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10" id="testimonials">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers are saying
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
             
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
