import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Avatar, Button } from 'antd';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../utils/constants.jsx';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Success stories from our satisfied customers"
          center
        />
        

        <div className="max-w-5xl mx-auto mt-16 relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className="border-0 shadow-xl"
              >
                <div className="relative p-10 md:p-14 bg-white rounded-xl">
                  <FaQuoteLeft className="text-5xl text-blue-100 absolute top-8 left-8" />
                  
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="relative">
                      <Avatar 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name}
                        size={120}
                        className="border-4 border-blue-50 shadow-md"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-lg md:text-xl text-gray-700 italic mb-8 relative z-10">
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-10 px-4">
            <Button 
              shape="circle"
              size="large"
              icon={<LeftOutlined />}
              onClick={prevTestimonial}
              className="flex items-center justify-center shadow-md hover:shadow-lg transition-all"
            />
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              shape="circle"
              size="large"
              icon={<RightOutlined />}
              onClick={nextTestimonial}
              className="flex items-center justify-center shadow-md hover:shadow-lg transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;