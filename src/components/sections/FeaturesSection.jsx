import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Button } from "antd";
import { featuresData } from "../../utils/constants.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../common/SectionTitle.jsx";

const FeaturesSection = () => {
  // Set first tab as default active
  const [activeTab, setActiveTab] = useState(featuresData[0].id);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <SectionTitle
            title="Why choose AllApply?"
            subtitle="Our innovative platform delivers exceptional services with unmatched speed and efficiency"
            center
          />
        </div>

        {/* Tabs Navigation - Horizontal scroll on mobile */}
        <div className="mb-8 md:mb-12">
          <div className="flex overflow-x-auto pb-2 md:pb-0 flex-wrap md:justify-center gap-2 md:gap-3 px-2 md:px-0 hide-scrollbar">
            {featuresData.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type={activeTab === tab.id ? "primary" : "text"}
                className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-3 h-auto rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? "shadow-lg shadow-primary/20"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }`}
                size={window.innerWidth < 768 ? "middle" : "large"}
              >
                {tab.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        {featuresData
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div
              key={tab.id}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl mx-2 md:mx-0"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2">
                {/* Image Slider - Full width on mobile */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto">
                  <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={{
                      clickable: true,
                      bulletClass:
                        "swiper-pagination-bullet !bg-gray-300 !opacity-100 !w-2 !h-2 md:!w-3 md:!h-3",
                      bulletActiveClass: "!bg-primary",
                    }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                      disabledClass: "opacity-30",
                    }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="h-full"
                  >
                    {tab.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="w-full h-full bg-cover bg-center relative"
                          style={{ backgroundImage: `url(${image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="swiper-button-next !text-white !w-8 !h-8 md:!w-12 md:!h-12 after:!text-sm md:after:!text-xl"></div>
                    <div className="swiper-button-prev !text-white !w-8 !h-8 md:!w-12 md:!h-12 after:!text-sm md:after:!text-xl"></div>
                  </Swiper>
                </div>

                {/* Content - Adjusted padding for mobile */}
                <div className="p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                    {tab.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {tab.description}
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
                    {tab.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 mt-0.5 sm:mt-1 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <i className="fas fa-check text-primary text-xs"></i>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="primary"
                    size={window.innerWidth < 768 ? "middle" : "large"}
                    className="h-10 sm:h-12 px-6 sm:px-8 rounded-lg text-sm sm:text-base font-medium bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary transition-all shadow-md hover:shadow-lg hover:shadow-primary/30"
                  >
                    <i className="fas fa-paper-plane mr-2 sm:mr-3"></i>
                    {tab.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Custom CSS for hiding scrollbar while allowing scroll */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
