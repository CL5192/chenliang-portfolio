import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { CarConfigurator } from './pages/projects/CarConfigurator'
import { AIExperiment } from './pages/projects/AIExperiment'
import { DesignWork } from './pages/projects/DesignWork'
import { DesignWorkEnvironments } from './pages/projects/design-work/DesignWorkEnvironments'
import { DesignWorkHardSurface } from './pages/projects/design-work/DesignWorkHardSurface'
import { DesignWorkProjectWork } from './pages/projects/design-work/DesignWorkProjectWork'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/car-configurator" element={<CarConfigurator />} />
        <Route path="projects/ai-experiment" element={<AIExperiment />} />
        <Route path="projects/design-work">
          <Route index element={<DesignWork />} />
          <Route path="environments" element={<DesignWorkEnvironments />} />
          <Route path="hard-surface" element={<DesignWorkHardSurface />} />
          <Route path="project-work" element={<DesignWorkProjectWork />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
