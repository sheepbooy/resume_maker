import { ResumeData } from '../types/resume'

interface ModernCleanResumeProps {
  data: ResumeData
}

export default function ModernCleanResume({ data }: ModernCleanResumeProps) {
  return (
    <div className="modern-clean-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black mb-1">{data.profile.name || '您的姓名'}</h1>
        <p className="text-gray-500 text-sm mb-4">{data.experience[0]?.position || '专业人才'}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">工作经历</h2>
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-gray-900">{exp.company || '公司名称'}</h3>
                  <span className="text-gray-500 text-xs">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[#6366f1] font-semibold text-sm mb-3">{exp.position || '职位'}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {exp.description.split('\n').filter(d => d.trim()).map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', color: '#4b5563', fontSize: '14px', lineHeight: '1.5' }}>
                      <span style={{ color: '#6366f1', flexShrink: 0 }}>→</span>
                      <span>{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">教育背景</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.school || '学校名称'}</h3>
                  <p className="text-gray-600 text-sm">{edu.degree || '学位/专业'}</p>
                </div>
                <span className="text-gray-500 text-xs">{edu.startDate} - {edu.endDate}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">专业技能</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <div key={index} style={{ padding: '6px 12px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                <p className="text-gray-700 text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
