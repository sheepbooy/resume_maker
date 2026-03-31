import { ResumeData } from '../types/resume'

interface TechResumeProps {
  data: ResumeData
}

export default function TechResume({ data }: TechResumeProps) {
  return (
    <div className="tech-resume" style={{ fontFamily: 'system-ui, -apple-system, monospace' }}>
      {/* Header */}
      <div className="mb-6" style={{ backgroundColor: '#1e293b', color: 'white', padding: '20px', borderRadius: '8px' }}>
        <h1 className="text-3xl font-bold mb-2">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          {data.profile.email && <span>mail: {data.profile.email}</span>}
          {data.profile.phone && <span>phone: {data.profile.phone}</span>}
          {data.profile.location && <span>location: {data.profile.location}</span>}
        </div>
      </div>

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <div key={index} style={{ padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '4px', fontSize: '13px', fontFamily: 'monospace' }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">工作经历</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '12px' }}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{exp.company || '公司'}</h3>
                  <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[#2563eb] text-sm mb-2 font-semibold">{exp.position || '职位'}</p>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">项目经历</h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id} style={{ padding: '12px', backgroundColor: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm">{proj.name || '项目名称'}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">教育背景</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">{edu.school || '学校'}</h3>
                  <span className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-gray-700 text-sm">{edu.degree || '学位'}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
