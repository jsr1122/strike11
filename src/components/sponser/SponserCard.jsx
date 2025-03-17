import React, { useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  {
    id: "1",
    title: "Detail",
    description: `"Best fantasy sports platform! Smooth experience and quick withdrawals." - Rajesh P.`,
    imgUrl: "/sponser/skoda.webp"
  },
  {
    id: "2",
    title: "Detail",
    description: `"I love the fair play policies and amazing contests available daily." - Ananya S.`,
    imgUrl: "/sponser/img6.webp"
  },
  {
    id: "3",
    title: "Detail",
    description:  ` "A game-changer for fantasy sports enthusiasts in India!" - Vikram R.`,
    imgUrl: "/sponser/img7.webp"
  },
  {
    id: "4",
    title: "Detail",
    description: `"Best fantasy sports platform! Smooth experience and quick withdrawals." - Rajesh P.`,
    imgUrl: "/sponser/skoda.webp"
  },
  {
    id: "5",
    title: "Detail",
    description: `"I love the fair play policies and amazing contests available daily." - Ananya S.`,
    imgUrl: "/sponser/img6.webp"
  },
  {
    id: "6",
    title: "Detail",
    description:  ` "A game-changer for fantasy sports enthusiasts in India!" - Vikram R.`,
    imgUrl: "/sponser/img7.webp"
  },
  {
    id: "7",
    title: "Detail",
    description: `"Best fantasy sports platform! Smooth experience and quick withdrawals." - Rajesh P.`,
    imgUrl: "/sponser/skoda.webp"
  },
  {
    id: "8",
    title: "Detail",
    description: `"I love the fair play policies and amazing contests available daily." - Ananya S.`,
    imgUrl: "/sponser/img6.webp"
  },
  {
    id: "9",
    title: "Detail",
    description:  ` "A game-changer for fantasy sports enthusiasts in India!" - Vikram R.`,
    imgUrl: "/sponser/img7.webp"
  },
  
]

function SponserCard() {

  const settings = useMemo(() => {
    return {
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 1500,
      cssEase: "linear",
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: false,
      horizontalSwiping: true,
      swipeToSlide: true,
      pauseOnHover: true,
      variableWidth: false,

      responsive:[{
        breakpoint:600,
        settings:{
            slidesToShow:1,
            speed: 3500,
            autoplaySpeed: 2000,
        }
    }]
      
    };
  }, []);
  return (
    <div className=' w-auto'>
      <Slider {...settings}>
        {Data.map((d) => (
          <div key={d.id} className="h-40 w-full rounded  flex flex-col items-center justify-center">
            <div className="px-6 py-4 bg-white/20 rounded-2xl h-32 flex items-center mx-4">
              <p className="text-gray-100 text-center text-base  md:text-xl mx-2">
                {d.description}
              </p>
            </div>

          </div>
        ))}

      </Slider>

    </div>
  );
}
export default SponserCard

