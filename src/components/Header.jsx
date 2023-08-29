import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Header = () => {
  return (
    <section className="h-screen w-full">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 2000,
        }}
      >
        <SplideSlide>
          <div className="w-full h-screen relative">
            <img
              src="https://th.bing.com/th/id/R.eb879f435bcf587d7bc1957df1374164?rik=5VIIMOdMRWOS6Q&pid=ImgRaw&r=0"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="dark-ov"></div>
            <div className="text-box">
              <h1 className="text-5xl font-extra-bold">World is with you</h1>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                laborum molestias eveniet porro.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis laborum molestias eveniet
                porro.
              </p>
              <button className="bg-white text-black px-3 py-2 rounded-md font-medium text-lg mt-1">
                Watch Now
              </button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-full h-screeen relative">
            <img
              src="https://th.bing.com/th/id/OIP.TevMNp6ERazATLzjaUekLQHaFG?pid=ImgDet&rs=1"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="dark-ov"></div>
            <div className="text-box">
              <h1 className="text-5xl font-extra-bold">World is with you</h1>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                laborum molestias eveniet porro.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis laborum molestias eveniet
                porro.
              </p>
              <button className="bg-white text-black px-3 py-2 rounded-md font-medium text-lg mt-1">
                Watch Now
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Header;
