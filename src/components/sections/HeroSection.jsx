import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { heroSlides, stats } from '../../utils/constants.jsx';
import 'swiper/css';
import { Carousel, Statistic } from 'antd';
import { 
  SafetyCertificateOutlined, 
  CloudUploadOutlined, 
  FileDoneOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  SearchOutlined
} from '@ant-design/icons';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50">
      {/* Main Hero Slider */}
      <div className="relative h-[500px] md:h-[720px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-80',
            bulletActiveClass: '!bg-blue-500'
          }}
          className="h-full w-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-start">
                  <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 text-white max-w-4xl pl-8 sm:pl-12 md:pl-16 lg:pl-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                      {slide.title}
                      <span className="text-blue-400"> {slide.highlight}</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 max-w-3xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 text-sm md:text-base">
                        Get Started
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/30 text-sm md:text-base">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Live Update Bar */}
      <div className="w-full bg-blue-50 border-t border-b border-blue-100 py-3 px-4">
        <div className="container mx-auto flex items-center">
          <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold mr-4 whitespace-nowrap">
            Live Update:
          </span>
          <div className="overflow-hidden flex-1">
            <div className="whitespace-nowrap animate-marquee">
              The server will be down tomorrow, all services will be down from 10 am to 2 pm for system upgrade. Please complete your important tasks in advance.
            </div>
          </div>
        </div>
      </div>

     {/* Modern Stats Carousel */}
<div className="w-full py-8 bg-white border-t border-gray-100">
  <div className="container mx-auto px-4">
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      spaceBetween={24}
      slidesPerView="auto"
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
      }}
      className="!overflow-visible"
    >
      {stats.map((stat) => (
        <SwiperSlide key={stat.id} className="!w-[225px]">
          <div className="stat-item flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg group">
            <div className="stat-icon mr-4 text-2xl text-blue-600">
              {stat.icon}
            </div>
            <div className="stat-text">
              <h3 className="text-2xl font-bold mb-0">{stat.value}</h3>
              <p className="text-gray-600 mb-0 text-sm">{stat.label}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

      {/* Smart Cards Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tracking Card */}
            <div className="relative group h-full overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <SafetyCertificateOutlined className="text-2xl text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Track Application Status</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Monitor your application progress in real-time with instant notifications at each milestone.
                </p>
                <div className="mt-auto space-y-3">
                  <input
                    type="text"
                    placeholder="Enter tracking ID"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all flex items-center justify-center space-x-2">
                    <SearchOutlined />
                    <span>Track Application</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Upload Card */}
            <div className="relative group h-full overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 rounded-lg bg-teal-100 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <CloudUploadOutlined className="text-2xl text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Documents</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Securely submit all required files through our encrypted portal with automatic format validation.
                </p>
                <div className="mt-auto">
                  <div className="border-2 border-dashed border-gray-200 hover:border-teal-300 rounded-xl p-6 text-center transition-all cursor-pointer group/upload">
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CloudUploadOutlined className="text-xl text-teal-500 group-hover/upload:text-teal-600 transition-colors" />
                    </div>
                    <p className="text-gray-600 mb-1">Drag & drop files here</p>
                    <p className="text-sm text-gray-400">or <span className="text-teal-500 font-medium">browse files</span></p>
                    <p className="text-xs text-gray-400 mt-2">Supports PDF, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Card */}
            <div className="relative group h-full overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <FileDoneOutlined className="text-2xl text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Documents</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Access your complete application package anytime with our secure document portal.
                </p>
                <div className="mt-auto space-y-3">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all flex items-center justify-center space-x-2">
                    <DownloadOutlined />
                    <span>Download All</span>
                  </button>
                  <button className="w-full px-6 py-3 border border-blue-200 text-blue-500 hover:bg-blue-50 font-medium rounded-lg transition-all flex items-center justify-center space-x-2">
                    <FilePdfOutlined />
                    <span>Download as PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
          padding-left: 100%;
        }
        .custom-carousel .slick-slide > div {
          padding: 0 8px;
        }
        .custom-carousel .slick-list {
          margin: 0 -8px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;