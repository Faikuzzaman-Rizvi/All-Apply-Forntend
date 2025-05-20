import { Card, Divider } from "antd";
import {
  BankOutlined,
  ShopOutlined,
  TeamOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { partnerCategories } from "../../utils/constants";
import SectionTitle from "../common/SectionTitle";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTitle
            title="Our Valued Partners"
            subtitle="Collaborating with industry leaders to deliver exceptional services"
            center
          />
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
          {partnerCategories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 m-0">
                    {category.title}
                  </h3>
                </div>

                <Divider className="my-0" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
                  {category.partners.map((partner, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      <div className="w-20 h-20 flex items-center justify-center mb-3">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <p className="text-sm text-center text-gray-600 font-medium mt-2">
                        {partner.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
