import { ResumeData } from '../types/resume'

interface ModernResumeProps {
  data: ResumeData
}

export default function ModernResume({ data }: ModernResumeProps) {
  return (
    <div className="modern-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="bg-[#6366f1] text-white mb-8 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-2">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap gap-3 text-[#e0e7ff] text-sm">
          {data.profile.email && <span className="flex items-center gap-1 text-[#e0e7ff] hover:text-white transition-colors">{data.profile.email}</span>}
          {data.profile.phone && <span className="flex items-center gap-1 text-[#e0e7ff] hover:text-white transition-colors">{data.profile.phone}</span>}
          {data.profile.location && <span className="flex items-center gap-1 text-[#e0e7ff] hover:text-white transition-colors">{data.profile.location}</span>}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-[#6366f1] text-sm font-bold uppercase tracking-wider mb-3 border-b-2 border-[#6366f1] pb-1">教育背景</h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id} style={{ borderLeft: '3px solid #6366f1', paddingLeft: '12px' }}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-900">{edu.school || '学校名称'}</h3>
                    <span className="text-gray-500 text-xs">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-[#6366f1] font-medium text-sm mt-0.5">{edu.degree || '学位/专业'}</p>
                  {edu.description && <p className="text-gray-600 text-sm mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-[#6366f1] text-sm font-bold uppercase tracking-wider mb-3 border-b-2 border-[#6366f1] pb-1">工作经历</h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} style={{ borderLeft: '3px solid #6366f1', paddingLeft: '12px' }}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-900">{exp.company || '公司名称'}</h3>
                    <span className="text-gray-500 text-xs">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="font-semibold text-[#6366f1] text-sm mb-1">{exp.position || '职位'}</p>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-[#6366f1] text-sm font-bold uppercase tracking-wider mb-3 border-b-2 border-[#6366f1] pb-1">核心技能</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} style={{ backgroundColor: '#eef2ff', color: '#4338ca', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: '500' }}>
                  {skill || '技能'}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <h2 className="text-[#6366f1] text-sm font-bold uppercase tracking-wider mb-3 border-b-2 border-[#6366f1] pb-1">项目经历</h2>
            <div className="space-y-3">
              {data.projects.map((proj) => (
                <div key={proj.id} style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '6px' }}>
                  <h3 className="font-semibold text-gray-900 text-sm">{proj.name || '项目名称'}</h3>
                  <p className="text-gray-700 text-sm mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
