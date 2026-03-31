import { ResumeData } from '../types/resume'

interface ElegantResumeProps {
  data: ResumeData
}

export default function ElegantResume({ data }: ElegantResumeProps) {
  return (
    <div className="elegant-resume" style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}>
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-6 mb-8">
        <h1 className="text-3xl font-serif font-bold text-black mb-3">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap justify-center gap-3 text-gray-700 text-sm">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>• {data.profile.phone}</span>}
          {data.profile.location && <span>• {data.profile.location}</span>}
        </div>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold text-black border-b border-gray-300 pb-1 mb-4">工作经历</h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ borderLeft: '2px solid #4b5563', paddingLeft: '16px' }}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif font-semibold text-black">{exp.company || '公司名称'}</h3>
                  <span className="text-gray-600 text-sm italic">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-900 font-medium text-sm mb-2">{exp.position || '职位'}</p>
                <p className="text-gray-700 text-justify text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold text-black border-b border-gray-300 pb-1 mb-4">教育背景</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif font-semibold text-black">{edu.school || '学校名称'}</h3>
                  <span className="text-gray-600 text-sm italic">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-gray-800 text-sm">{edu.degree || '学位/专业'}</p>
                {edu.description && <p className="text-gray-600 text-sm mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-lg font-serif font-bold text-black border-b border-gray-300 pb-1 mb-4">专业技能</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {data.skills.map((skill, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#4b5563' }}>•</span>
                <span className="text-gray-800 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
