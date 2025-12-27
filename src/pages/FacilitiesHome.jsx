import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FacilitiesHome = () => {
  const [selectedFacility, setSelectedFacility] = useState(null)
  
  const facilities = [
    {
      id: 1,
      name: "Main Stadium",
      capacity: "50,000",
      status: "Available",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&h=400&fit=crop&auto=format",
      features: ["Football Field", "Running Track", "VIP Boxes", "Press Room", "Training Facilities"],
      description: "Our flagship stadium with world-class amenities and seating for major events",
      openTime: "6:00 AM",
      closeTime: "11:00 PM"
    },
    {
      id: 2,
      name: "Aquatic Center",
      capacity: "2,000",
      status: "Available",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f1933?w=800&h=400&fit=crop&auto=format",
      features: ["Olympic Pool", "Diving Pool", "Sauna", "Steam Room", "Hydrotherapy"],
      description: "State-of-the-art aquatic facilities for competitive and recreational swimming",
      openTime: "5:30 AM",
      closeTime: "10:00 PM"
    },
    {
      id: 3,
      name: "Basketball Arena",
      capacity: "15,000",
      status: "Maintenance",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop&auto=format",
      features: ["Main Court", "Practice Courts", "Locker Rooms", "Weight Room", "Sports Medicine"],
      description: "Professional basketball venue with NCAA-standard courts and training equipment",
      openTime: "7:00 AM",
      closeTime: "10:00 PM"
    },
    {
      id: 4,
      name: "Tennis Complex",
      capacity: "500",
      status: "Available",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&h=400&fit=crop&auto=format",
      features: ["Clay Courts", "Hard Courts", "Indoor Courts", "Pro Shop", "Lounge"],
      description: "Professional tennis facilities with various court surfaces for all skill levels",
      openTime: "6:00 AM",
      closeTime: "9:00 PM"
    },
    {
      id: 5,
      name: "Fitness Center",
      capacity: "1,000",
      status: "Available",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&auto=format",
      features: ["Cardio Area", "Weight Training", "Group Classes", "Personal Training", "Nutrition Center"],
      description: "Modern fitness facility with cutting-edge equipment and expert trainers",
      openTime: "5:00 AM",
      closeTime: "12:00 AM"
    },
    {
      id: 6,
      name: "Athletics Track",
      capacity: "3,000",
      status: "Available",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop&auto=format",
      features: ["400m Track", "Long Jump Pit", "High Jump Area", "Pole Vault", "Throwing Fields"],
      description: "Olympic-standard track and field facilities for training and competitions",
      openTime: "6:00 AM",
      closeTime: "8:00 PM"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Quick Stats */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: "Total Facilities", value: "6", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
          { label: "Available Now", value: "5", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "Under Maintenance", value: "1", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
          { label: "Avg Rating", value: "4.7★", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
        ].map((stat, statIndex) => (
          <motion.div
            key={statIndex}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
              </svg>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Facilities Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <motion.div
            key={facility.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"

          >
            <div className="relative h-48">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&h=400&fit=crop&auto=format`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                  facility.status === 'Available' 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-yellow-500/90 text-white'
                }`}>
                  {facility.status}
                </span>
              </div>
              
              {/* Rating */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-medium">{facility.rating}</span>
              </div>
              
              {/* Facility Name Overlay */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{facility.name}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{facility.description}</p>
              
              <div className="space-y-3">
                {/* Capacity */}
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm">Capacity: <span className="font-semibold">{facility.capacity}</span></span>
                </div>
                
                {/* Time */}
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Hours: <span className="font-semibold">{facility.openTime} - {facility.closeTime}</span></span>
                </div>
                
                {/* Features */}
                <div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">Key Features</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {facility.features.slice(0, 3).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200"
                      >
                        {feature}
                      </span>
                    ))}
                    {facility.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">
                        +{facility.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-colors duration-200"
                onClick={() => setSelectedFacility(facility)}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Facility Details Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setSelectedFacility(null)}
            />
            
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3
                }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              >
                {/* Modal Header with Image */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedFacility.image}
                    alt={selectedFacility.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&h=400&fit=crop&auto=format`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedFacility(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                  
                  {/* Facility Title Overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedFacility.name}</h2>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm ${
                        selectedFacility.status === 'Available' 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-yellow-500/90 text-white'
                      }`}>
                        {selectedFacility.status}
                      </span>
                      <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white text-sm font-medium">{selectedFacility.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Modal Content */}
                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Facility</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedFacility.description}</p>
                  </div>
                  
                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm font-medium text-blue-900">Capacity</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-900">{selectedFacility.capacity}</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-green-900">Operating Hours</span>
                      </div>
                      <div className="text-lg font-bold text-green-900">{selectedFacility.openTime} - {selectedFacility.closeTime}</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-purple-900">Status</span>
                      </div>
                      <div className={`text-lg font-bold ${
                        selectedFacility.status === 'Available' ? 'text-green-900' : 'text-yellow-900'
                      }`}>{selectedFacility.status}</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Features & Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedFacility.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-colors duration-200 shadow-lg"
                    >
                      Book Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 shadow-lg"
                    >
                      Schedule Tour
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FacilitiesHome