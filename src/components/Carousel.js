import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative overflow-hidden mt-6 w-full">
      <Slider {...settings}>
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <img 
            src="https://th.bing.com/th/id/R.57dd1c3b7c283410902ab50f5d74e8b7?rik=rSC7y8BnIQWs8A&pid=ImgRaw&r=0" 
            alt="Learn to Code for Free" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white p-4 md:p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Learn to Code for Free</h2>
              <p className="text-sm md:text-base lg:text-lg">Esgela is your gateway to coding knowledge. Join our free online courses and start learning today. Our physical location is in Port St Johns, but we are here to teach you online!</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <img 
            src="https://th.bing.com/th/id/OIP.aReZ3TIirgUJem71Ysi-JwAAAA?w=280&h=180&c=7&r=0&o=5&pid=1.7" 
            alt="Empower Your Future" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white p-4 md:p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Empower Your Future</h2>
              <p className="text-sm md:text-base lg:text-lg">At Esgela, we believe in empowering everyone with the skills to succeed in the tech world. Start your coding journey with us for free, no matter where you are.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <img 
            src="https://th.bing.com/th/id/OIP.9L71-UpexnvVQ9jF9mJgMgHaEK?w=273&h=180&c=7&r=0&o=5&pid=1.7" 
            alt="Join the Esgela Community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white p-4 md:p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Join the Esgela Community</h2>
              <p className="text-sm md:text-base lg:text-lg">Become part of our growing community of learners. Connect, learn, and grow with fellow coding enthusiasts. All for free, all online, from Port St Johns.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
