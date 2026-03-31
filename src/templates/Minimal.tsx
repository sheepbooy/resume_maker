import { ResumeData } from '../types/resume'

interface MinimalResumeProps {
  data: ResumeData
}

export default function MinimalResume({ data }: MinimalResumeProps) {
  return (
    <div className="minimal-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-3xl font-bold text-black mb-3">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">工作经历</h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-black">{exp.company || '公司名称'}</h3>
                    <span className="text-gray-500 text-xs">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-2">{exp.position || '职位'}</p>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">教育背景</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-black">{edu.school || '学校名称'}</h3>
                    <span className="text-gray-500 text-xs">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-1">{edu.degree || '学位/专业'}</p>
                  {edu.description && <p className="text-gray-600 text-xs mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">技能</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} style={{ padding: '4px 10px', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '12px', color: '#374151' }}>
                  {skill || '技能'}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">项目经历</h2>
            <div className="space-y-3">
              {data.projects.map((proj) => (
                <div key={proj.id}>
                  <h3 className="font-semibold text-black text-sm">{proj.name || '项目名称'}</h3>
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
