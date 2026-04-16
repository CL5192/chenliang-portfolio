import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { CarConfigurator } from './pages/projects/CarConfigurator'
import { AIExperiment } from './pages/projects/AIExperiment'
import { DesignWork } from './pages/projects/DesignWork'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/car-configurator" element={<CarConfigurator />} />
        <Route path="projects/ai-experiment" element={<AIExperiment />} />
        <Route path="projects/design-work" element={<DesignWork />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
