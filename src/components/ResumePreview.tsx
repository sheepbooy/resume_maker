import { ResumeData } from '../types/resume'
import { exportToPDF } from '../utils/pdf'
import ClassicResume from '../templates/Classic'
import VerticalResume from '../templates/Vertical'
import CreativeResume from '../templates/Creative'
import TwoColumnResume from '../templates/TwoColumn'
import ExecutiveResume from '../templates/Executive'
import ModernCleanResume from '../templates/ModernClean'
import MinimalResume from '../templates/Minimal'
import ProfessionalResume from '../templates/Professional'
import TechResume from '../templates/Tech'
import SimpleResume from '../templates/Simple'
import GradientResume from '../templates/Gradient'
import AcademicResume from '../templates/Academic'

interface ResumePreviewProps {
  template: string
  data: ResumeData
}

export default function ResumePreview({ template, data }: ResumePreviewProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">预览</h2>
        <button
          onClick={(e) => exportToPDF(template, data, e as any)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M9 13v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
            <path d="M9 17v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
            <path d="M12 13v8" />
            <path d="M12 21h.01" />
          </svg>
          导出 PDF
        </button>
      </div>

      <div
        id={`resume-${template}`}
        className={`resume-preview rounded-lg p-8 min-h-[800px] max-w-[21cm] mx-auto bg-white shadow-lg text-black`}
        style={{ fontFamily: 'system-ui' }}
      >
        {template === 'classic' && <ClassicResume data={data} />}
        {template === 'vertical' && <VerticalResume data={data} />}
        {template === 'creative' && <CreativeResume data={data} />}
        {template === 'two-column' && <TwoColumnResume data={data} />}
        {template === 'executive' && <ExecutiveResume data={data} />}
        {template === 'modernClean' && <ModernCleanResume data={data} />}
        {template === 'minimal' && <MinimalResume data={data} />}
        {template === 'professional' && <ProfessionalResume data={data} />}
        {template === 'tech' && <TechResume data={data} />}
        {template === 'simple' && <SimpleResume data={data} />}
        {template === 'gradient' && <GradientResume data={data} />}
        {template === 'academic' && <AcademicResume data={data} />}
      </div>
    </div>
  )
}
