import { ResumeData } from '../types/resume'

interface CleanResumeProps {
  data: ResumeData
}

export default function CleanResume({ data }: CleanResumeProps) {
  return (
    <div className="clean-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-3xl font-bold text-black mb-2">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">工作经历</h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-black text-sm">{exp.company || '公司名称'}</h3>
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
        <div className="mt-6">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">教育背景</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-semibold text-black text-sm">{edu.school || '学校名称'}</h3>
                  <p className="text-gray-800 text-sm mt-0.5">{edu.degree || '学位/专业'}</p>
                </div>
                <span className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mt-6">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">技能专长</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} style={{ padding: '4px 12px', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '12px', color: '#374151' }}>
                {skill || '技能'}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
