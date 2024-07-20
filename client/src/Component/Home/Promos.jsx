import React from 'react';
import { FiUser } from 'react-icons/fi';

function Promos() {
  return (
    <div className="my-10 py-5 md:px-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Your Favorites Movies and Anime Watch Offline. <br /> Enjoy
            on Your Mobile
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
          "Watch the latest movies, web series, TV shows, live sports,and highlights online in Hindi, English, and other regional languages across genres, only on JioCinema in HD Quality with Multiple devices... " 
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
              HD 4K
            </div>
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser /> 2K
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <img
            src="/images/promo.png"
            alt="Mobile app"
            className=" w-60 object-contain"
          />
          <div className="flex flex-col gap-4">
            <img
              src="/images/logo.png"
              alt="Mobile app"
              className=" w-60 object-contain"
            />
            <img
              src="/images/promogoogle.png"
              alt="Mobile app"
              className=" w-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promos;
