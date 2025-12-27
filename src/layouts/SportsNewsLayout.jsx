import { Outlet } from 'react-router-dom'

const SportsNewsLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default SportsNewsLayout