import PropTypes from 'prop-types'
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
      {/* Icon Section */}
      <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
        
        {service.icon}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <a
          href="#"
          className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors"
        >
          Learn more
          <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}


export default ServiceCard