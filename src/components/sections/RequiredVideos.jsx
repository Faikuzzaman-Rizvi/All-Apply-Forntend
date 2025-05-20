import React, { useState } from "react";
import {
  PlayCircleOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Button } from "antd";
import { videos } from "../../utils/constants.jsx";
import SectionTitle from "../common/SectionTitle.jsx";

const { Meta } = Card;

const RequiredVideos = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleDescription = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const carouselRef = React.useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const handleSlideChange = (current) => {
    setActiveSlide(current);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-white h-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="text-center mb-16">
          <SectionTitle
            title="Required Videos"
            subtitle="Learn easily by watching our special video tutorials"
            center
          />
        </div>

        <div className="relative">
          {/* Carousel */}
          <Carousel
            ref={carouselRef}
            dots={false}
            arrows={false}
            slidesToShow={3}
            beforeChange={handleSlideChange}
            responsive={[
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
            infinite={false}
          >
            {videos.map((video) => (
              <div key={video.id} className="px-2 pb-4">
                <Card
                  hoverable
                  className="w-full h-full border-0 rounded-2xl overflow-hidden shadow-sm
                            hover:shadow-md transition-all duration-300 bg-white flex flex-col"
                  cover={
                    <div className="relative pt-[56.25%] overflow-hidden rounded-t-2xl group">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&showinfo=0&rel=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium text-sm bg-black/50 px-2 py-1 rounded">
                          Click to watch
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
                        {video.duration || "5:30"}
                      </div>
                    </div>
                  }
                >
                  <Meta
                    title={
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                    }
                    description={
                      <div className="flex flex-col flex-grow">
                        <div className="relative flex-grow">
                          <p
                            className={`text-gray-600 text-sm ${
                              expandedCards[video.id] ? "" : "line-clamp-3"
                            } mb-3`}
                          >
                            {video.description}
                          </p>
                          {video.description.length > 100 && (
                            <Button
                              type="text"
                              onClick={() => toggleDescription(video.id)}
                              className="text-blue-600 hover:text-blue-800 p-0 text-xs font-medium flex items-center"
                            >
                              {expandedCards[video.id] ? (
                                <>
                                  <UpOutlined className="mr-1 text-xs" /> Show
                                  less
                                </>
                              ) : (
                                <>
                                  <DownOutlined className="mr-1 text-xs" /> Read
                                  more
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                        <Button
                          type="primary"
                          size="large"
                          className="w-full mt-4 h-10 flex items-center justify-center rounded-lg
                                    bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
                                    transition-all duration-300 shadow hover:shadow-md"
                          icon={<PlayCircleOutlined className="text-base" />}
                        >
                          Watch Now
                        </Button>
                      </div>
                    }
                  />
                </Card>
              </div>
            ))}
          </Carousel>

          {/* Custom Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {/* Navigation Buttons - Only show when there are more slides */}
            {videos.length > 3 && (
              <>
                <Button
                  shape="circle"
                  icon={<LeftOutlined />}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 
                          w-12 h-12 flex items-center justify-center shadow-md
                          bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900
                          transition-all duration-300 border-0"
                  onClick={prev}
                  disabled={activeSlide === 0}
                />
                {Array.from({ length: Math.ceil(videos.length / 3) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => carouselRef.current.goTo(index * 3)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        Math.floor(activeSlide / 3) === index
                          ? "bg-blue-600 w-4"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
                <Button
                  shape="circle"
                  icon={<RightOutlined />}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 
                          w-12 h-12 flex items-center justify-center shadow-md
                          bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900
                          transition-all duration-300 border-0"
                  onClick={next}
                  disabled={activeSlide >= videos.length - 3}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredVideos;
