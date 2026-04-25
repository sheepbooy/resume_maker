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
import ModernResume from '../templates/Modern'
import ElegantResume from '../templates/Elegant'
import CleanResume from '../templates/Clean'

interface ResumePreviewProps {
  template: string
  data: ResumeData
}

const TEMPLATE_MAP: Record<string, React.FC<{ data: ResumeData }>> = {
  classic: ClassicResume,
  vertical: VerticalResume,
  creative: CreativeResume,
  'two-column': TwoColumnResume,
  executive: ExecutiveResume,
  modernClean: ModernCleanResume,
  minimal: MinimalResume,
  professional: ProfessionalResume,
  tech: TechResume,
  simple: SimpleResume,
  gradient: GradientResume,
  academic: AcademicResume,
  modern: ModernResume,
  elegant: ElegantResume,
  clean: CleanResume,
}

export default function ResumePreview({ template, data }: ResumePreviewProps) {
  const TemplateComponent = TEMPLATE_MAP[template]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          预览
        </h2>
        <button
          onClick={(e) => exportToPDF(template, data, e as any)}
          className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 active:bg-violet-800 transition-all flex items-center gap-2 shadow-sm text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M12 18v-6" />
            <path d="M9 15l3-3 3 3" />
          </svg>
          导出 PDF
        </button>
      </div>

      <div
        id={`resume-${template}`}
        className="resume-preview-wrapper rounded-xl bg-white overflow-hidden"
      >
        <div className="p-10">
          {TemplateComponent ? <TemplateComponent data={data} /> : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-sm">模板未找到</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
