import React from 'react';
import Layout from './../Layout/Layout';
import Head from '../Component/Head';

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our MovieFi
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  MovieFi▶️ is an online video streaming platform owned by
                  Novi Digital Entertainment Private Limited, a wholly owned
                  subsidiary of Star India Private Limited. Here are the key
                  points about MovieFi▶️: <br /><span className=' font-bold'>Content Variety: MovieFi▶️</span>
                  offers over 100,000 hours of TV content and movies across 9
                  languages. It covers every major sport live. Video Streaming
                  Technology: The platform uses adaptive video streaming
                  technology to ensure the best possible video quality based on
                  available bandwidth. Users can manually select their preferred
                  video quality.<br/> User Experience: MovieFi▶️ focuses on a
                  friendly user interface, optimized content search, and a
                  curated content catalog. It spans 15 TV channels and hosts
                  some of the longest-running and highest-rated TV shows in
                  India. <br />Originals: MovieFi▶️ invests in original
                  programming, including shows like “On Air with AIB,” “M Bole
                  Toh,” and “One Tip One Hand.” Access: You can access Disney+
                  Hotstar via the Google Play Store, Apple App Store, or
                  directly at hotstar.com1. Enjoy streaming your favorite
                  content onMovieFi▶️r! 🌟📺
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Completely free, without registration! Lorem Ipsum is simply
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/head.jpg"
              alt="aboutus"
              className="w-full xl:block hidden h-header rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
