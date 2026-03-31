import { ResumeData } from '../types/resume'

interface ProfessionalResumeProps {
  data: ResumeData
}

export default function ProfessionalResume({ data }: ProfessionalResumeProps) {
  return (
    <div className="professional-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black mb-2">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">工作经验</h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ borderLeft: '3px solid #4b5563', paddingLeft: '12px' }}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900 text-base">{exp.company || '公司名称'}</h3>
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
        <div className="mb-6">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">教育背景</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">{edu.school || '学校名称'}</h3>
                  <span className="text-gray-500 text-xs">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-gray-800 font-medium text-sm">{edu.degree || '学位/专业'}</p>
                {edu.description && <p className="text-gray-600 text-xs mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">专业技能</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} style={{ padding: '4px 10px', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '12px', color: '#374151' }}>
                {skill || '技能'}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
