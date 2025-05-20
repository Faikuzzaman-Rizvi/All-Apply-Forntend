import { services } from "../../utils/constants.jsx";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionTitle from "../common/SectionTitle.jsx";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Section Title */}
          <SectionTitle
            title="Our Services"
            subtitle="All types of application services on a single platform"
            center
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-xl border border-gray-200 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group h-90"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

              <div className="relative p-8 h-full flex flex-col z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 text-2xl group-hover:bg-white group-hover:text-blue-600 transition-all">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow group-hover:text-gray-700">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="mt-auto">
                  <Button
                    type="text"
                    className="flex items-center text-blue-600 hover:text-blue-700 p-0 group-hover:translate-x-2 transition-all"
                    icon={
                      <ArrowRightOutlined className="text-blue-500 group-hover:text-blue-600 transition-all" />
                    }
                  >
                    <span className="font-medium">Learn more</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
