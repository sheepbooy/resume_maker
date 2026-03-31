import { ResumeData } from '../types/resume'

interface GradientResumeProps {
  data: ResumeData
}

export default function GradientResume({ data }: GradientResumeProps) {
  return (
    <div className="gradient-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header with Gradient */}
      <div className="mb-6" style={{ padding: '24px', borderRadius: '8px' }}>
        <h1 className="text-3xl font-bold text-black mb-2">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-black mb-3 border-b-2 border-[#6366f1] pb-2">工作经历</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ borderLeft: '3px solid #6366f1', paddingLeft: '12px' }}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-black">{exp.company || '公司名称'}</h3>
                  <span className="text-gray-500 text-xs">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[#6366f1] font-semibold text-sm mb-2">{exp.position || '职位'}</p>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-black mb-3 border-b-2 border-[#10b981] pb-2">教育背景</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-black">{edu.school || '学校名称'}</h3>
                  <span className="text-gray-500 text-xs">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-gray-800 font-medium text-sm mt-1">{edu.degree || '学位/专业'}</p>
                {edu.description && <p className="text-gray-600 text-xs mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-base font-bold text-black mb-3 border-b-2 border-[#ec4899] pb-2">专业技能</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} style={{ padding: '6px 12px', backgroundColor: '#ec4899', color: 'white', fontSize: '12px', fontWeight: '500', borderRadius: '6px' }}>
                {skill || '技能'}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
