import PropTypes from 'prop-types'

const SectionTitle = ({ title, subtitle, center = false, className = '' }) => {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
}

export default SectionTitle