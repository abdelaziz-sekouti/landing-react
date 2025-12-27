import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LiveUpdates = () => {
  const [liveScores, setLiveScores] = useState([
    {
      id: 1,
      sport: 'Football',
      match: 'Real Madrid vs Barcelona',
      score: '2-1',
      time: '75\'',
      status: 'live',
      competition: 'La Liga'
    },
    {
      id: 2,
      sport: 'Basketball',
      match: 'Lakers vs Celtics',
      score: '89-87',
      time: 'Q4 2:45',
      status: 'live',
      competition: 'NBA'
    },
    {
      id: 3,
      sport: 'Tennis',
      match: 'Djokovic vs Nadal',
      score: '6-4, 3-6, 4-2',
      time: 'Set 3',
      status: 'live',
      competition: 'Wimbledon'
    },
    {
      id: 4,
      sport: 'Cricket',
      match: 'India vs Australia',
      score: '245/8 (45.2)',
      time: 'Live',
      status: 'live',
      competition: 'World Cup'
    }
  ])

  const personalities = [
    {
      id: 1,
      name: 'Lionel Messi',
      sport: 'Football',
      achievement: 'Scored 2 goals in El Clasico victory',
      image: '🦁',
      stats: { goals: 28, assists: 12, matches: 35 }
    },
    {
      id: 2,
      name: 'LeBron James',
      sport: 'Basketball',
      achievement: 'Triple-double in playoff game',
      image: '👑',
      stats: { points: 28.5, rebounds: 8.2, assists: 7.1 }
    },
    {
      id: 3,
      name: 'Serena Williams',
      sport: 'Tennis',
      achievement: 'Comeback victory after set down',
      image: '🎾',
      stats: { titles: 23, win_rate: '87%', age: 41 }
    },
    {
      id: 4,
      name: 'Virat Kohli',
      sport: 'Cricket',
      achievement: 'Century in crucial World Cup match',
      image: '🏏',
      stats: { centuries: 75, average: 57.3, matches: 280 }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveScores(prev => prev.map(match => ({
        ...match,
        time: match.status === 'live' ? updateMatchTime(match.time, match.sport) : match.time
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const updateMatchTime = (currentTime, sport) => {
    if (sport === 'Football') {
      const minutes = parseInt(currentTime) + 1
      return minutes < 90 ? `${minutes}'` : '90+'
    } else if (sport === 'Basketball') {
      const [q, time] = currentTime.split(' ')
      const [min, sec] = time.split(':').map(Number)
      if (sec > 0) return `Q${q} ${min}:${sec - 1}`
      else return `Q${q} ${min - 1}:59`
    }
    return currentTime
  }

  return (
    <div className="space-y-8">
      {/* Live Scores Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
          <h2 className="text-3xl font-bold text-gray-900">Live Scores</h2>
        </div>
        
        <div className="grid gap-4 lg:grid-cols-2">
          {liveScores.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg border-l-4 border-red-500 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {match.competition}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-red-600 uppercase">
                      {match.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{match.sport}</p>
                    <h3 className="text-lg font-bold text-gray-900">{match.match}</h3>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-2xl font-bold text-blue-600">{match.score}</span>
                    <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-md shadow-sm">
                      {match.time}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Personalities of the Week Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Personalities of the Week</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {personalities.map((personality, index) => (
            <motion.div
              key={personality.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-linear-to-br from-white to-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{personality.image}</div>
                  <h3 className="text-xl font-bold text-gray-900">{personality.name}</h3>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {personality.sport}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 italic">
                    "{personality.achievement}"
                  </p>
                  
                  <div className="border-t pt-3">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Weekly Stats
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(personality.stats).map(([key, value]) => (
                        <div key={key} className="bg-blue-50 rounded p-2">
                          <p className="text-xs text-gray-600 capitalize">
                            {key.replace('_', ' ')}
                          </p>
                          <p className="text-sm font-bold text-blue-600">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default LiveUpdates