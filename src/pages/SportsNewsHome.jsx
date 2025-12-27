import { motion } from 'framer-motion'
import LiveUpdates from '../components/LiveUpdates'
import HeroSection from '../components/HeroSection'
import useSportsNews from '../hooks/useSportsNews'

const SportsNewsHome = () => {
  const { news, loading, error } = useSportsNews()

  if (loading) {
    return (
      <div className="space-y-12">
        <HeroSection />
        <LiveUpdates />
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-12">
        <HeroSection />
        <LiveUpdates />
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">Error loading news: {error}</p>
          <p className="text-gray-600">Showing sample data instead.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Live Updates Section */}
      <LiveUpdates />
      
      {/* Latest News Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => window.open(item.url, '_blank')}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="h-48 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop'
                  }}
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                  {item.source}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default SportsNewsHome