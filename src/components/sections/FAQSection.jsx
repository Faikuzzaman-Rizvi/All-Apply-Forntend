import { useState } from "react";
import { faqs } from "../../utils/constants.jsx";
import {
  FileTextOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import SectionTitle from "../common/SectionTitle.jsx";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Group FAQs by category to match the image structure
  const faqCategories = [
    {
      title: "Application information",
      icon: <FileTextOutlined className="text-xl" />,
      questions: faqs.filter((faq) => faq.category === "application"),
    },
    {
      title: "Payment information",
      icon: <CreditCardOutlined className="text-xl" />,
      questions: faqs.filter((faq) => faq.category === "payment"),
    },
    {
      title: "Information regarding cooperation",
      icon: <CustomerServiceOutlined className="text-xl" />,
      questions: faqs.filter((faq) => faq.category === "support"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTitle
            title="Necessary questions"
            subtitle="Some common questions and answers about our services"
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {faqCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              {/* Category header */}
              <div
                className={`p-5 rounded-t-xl flex items-center gap-3 ${
                  catIndex === 0
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600"
                    : catIndex === 1
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                    : "bg-gradient-to-r from-green-400 to-teal-400"
                }`}
              >
                <div className="text-white">{category.icon}</div>
                <h3 className="text-white text-lg font-semibold m-0">
                  {category.title}
                </h3>
              </div>

              {/* FAQ items */}
              <div className="p-4 space-y-3">
                {category.questions.map((faq, index) => {
                  const globalIndex = faq.id; // Assuming your faq objects have unique ids
                  return (
                    <div
                      key={globalIndex}
                      className={`border rounded-lg overflow-hidden transition-all ${
                        activeIndex === globalIndex
                          ? "border-gray-300"
                          : "border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                      >
                        <h3 className="font-medium text-gray-800">
                          {faq.question}
                        </h3>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            activeIndex === globalIndex ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === globalIndex ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="p-4 bg-white">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
