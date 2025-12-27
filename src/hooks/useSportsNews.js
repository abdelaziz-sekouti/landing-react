import { useState, useEffect } from 'react'

const useSportsNews = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSportsNews = async () => {
      try {
        setLoading(true)
        
        // Using JSONPlaceholder for demo data with real images
        // In production, you'd use a real sports API
        const sampleNews = getSampleNews()
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setNews(sampleNews)
        setError(null)
      } catch (err) {
        console.error('Error fetching sports news:', err)
        setError(err.message)
        setNews(getSampleNews())
      } finally {
        setLoading(false)
      }
    }

    fetchSportsNews()
    
    // Refresh news every 5 minutes
    const interval = setInterval(fetchSportsNews, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return { news, loading, error }
}

// Helper functions
const getCategoryFromTitle = (title) => {
  const titleLower = title.toLowerCase()
  
  if (titleLower.includes('football') || titleLower.includes('soccer')) return 'Football'
  if (titleLower.includes('basketball')) return 'Basketball'
  if (titleLower.includes('tennis')) return 'Tennis'
  if (titleLower.includes('cricket')) return 'Cricket'
  if (titleLower.includes('baseball')) return 'Baseball'
  if (titleLower.includes('golf')) return 'Golf'
  if (titleLower.includes('boxing') || titleLower.includes('mma')) return 'Combat'
  if (titleLower.includes('olympics')) return 'Olympics'
  
  return 'Sports'
}

const getRelativeTime = (publishedAt) => {
  const date = new Date(publishedAt)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  
  if (diffMins < 60) return `${diffMins} minutes ago`
  if (diffHours < 24) return `${diffHours} hours ago`
  if (diffDays < 7) return `${diffDays} days ago`
  
  return date.toLocaleDateString()
}

const getSampleNews = () => [
  {
    id: 1,
    title: "Championship Finals This Weekend",
    excerpt: "Get ready for the most anticipated match of the season as top teams clash for the ultimate prize.",
    category: "Football",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    url: "#",
    source: "Sports News"
  },
  {
    id: 2,
    title: "New World Record Set in Swimming",
    excerpt: "Athlete breaks world record in 100m freestyle with incredible performance at international meet.",
    category: "Swimming",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f1933?w=400&h=250&fit=crop",
    url: "#",
    source: "Sports Daily"
  },
  {
    id: 3,
    title: "Basketball Trade Deadline Approaches",
    excerpt: "Teams making last-minute roster adjustments as the trade deadline creates excitement across the league.",
    category: "Basketball",
    time: "1 day ago",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop",
    url: "#",
    source: "Basketball Weekly"
  }
]

export default useSportsNews