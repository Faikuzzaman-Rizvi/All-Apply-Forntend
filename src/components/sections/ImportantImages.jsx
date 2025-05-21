import React, { useState } from "react";
import {
  ExpandOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Button, Modal } from "antd";
import { images } from "../../utils/constants.jsx";
import SectionTitle from "../common/SectionTitle.jsx";

const { Meta } = Card;

const ImportantImages = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previewImage, setPreviewImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const handleEnlarge = (imageUrl) => {
    setPreviewImage(imageUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const truncateDescription = (text) => {
    if (text.length > 200) {
      return text.substring(0, 200) + "...";
    }
    return text;
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-white h-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="text-center mb-16">
          {/* Section Title */}
          <SectionTitle
            title="Important Images"
            subtitle="Essential images and infographics related to government services"
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
            className="grid grid-cols-3"
          >
            {images.map((image) => (
              <div key={image.id} className="px-2 pb-4 h-full">
                <Card
                  hoverable
                  className="w-full border-0 rounded-2xl h-[500px] overflow-hidden shadow-sm
                  hover:shadow-md transition-all duration-300 bg-white flex flex-col"
                  cover={
                    <div className="relative pt-[56.25%] overflow-hidden rounded-t-2xl group">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={image.url}
                        alt={image.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <Button
                          type="primary"
                          icon={<ExpandOutlined />}
                          className="bg-white text-gray-800 hover:bg-gray-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEnlarge(image.url);
                          }}
                        >
                          Enlarge
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-4 mb-3 h-[72px] overflow-hidden">
                        {truncateDescription(image.description)}
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <Button
                        type="primary"
                        size="large"
                        className="w-full h-10 flex items-center justify-center rounded-lg
                          bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
                          transition-all duration-300 shadow hover:shadow-md"
                        icon={<DownloadOutlined className="text-base" />}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
          {/* Custom Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {/* Navigation Buttons */}
            {images.length > 3 && (
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
                {Array.from({ length: Math.ceil(images.length / 3) }).map(
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
                  disabled={activeSlide >= images.length - 3}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        width="80%"
        bodyStyle={{ padding: 0 }}
        centered
      >
        <img
          alt="Preview"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
          src={previewImage}
        />
      </Modal>
    </section>
  );
};

export default ImportantImages;