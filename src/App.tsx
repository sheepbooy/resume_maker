import { useState } from 'react'
import TemplateGrid from './components/TemplateGrid'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import { ResumeData } from './types/resume'
import './App.css'

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('classic')
  const [resumeData, setResumeData] = useState<ResumeData>({
    profile: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>简历制作</h1>
        <p>选择模板、填写信息、导出 PDF</p>
      </header>
      <main className="app-main">
        <div className="sidebar">
          <TemplateGrid
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
          <ResumeEditor data={resumeData} onDataChange={setResumeData} />
        </div>
        <div className="preview-panel">
          <ResumePreview
            template={selectedTemplate}
            data={resumeData}
          />
        </div>
      </main>
    </div>
  )
}

export default App
