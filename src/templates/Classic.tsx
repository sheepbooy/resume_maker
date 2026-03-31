import { ResumeData } from '../types/resume'

interface ClassicResumeProps {
  data: ResumeData
}

export default function ClassicResume({ data }: ClassicResumeProps) {
  return (
    <div className="classic-resume" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-6 mb-6">
        <h1 className="text-3xl font-serif font-bold text-black mb-2">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>• {data.profile.phone}</span>}
          {data.profile.location && <span>• {data.profile.location}</span>}
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-serif font-bold text-black border-b border-gray-300 pb-1 mb-3">个人简介</h2>
        <p className="text-gray-700 text-justify text-sm leading-relaxed">
          {data.skills.slice(0, 5).join('、')}专业人士，拥有{data.experience.length}年{data.experience[0]?.position || '相关'}工作经验。
          擅长{data.skills.slice(0, 3).join('、')}等领域。工作认真负责，具备良好的沟通能力和团队协作精神。
        </p>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-serif font-bold text-black border-b border-gray-300 pb-1 mb-3">工作经历</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ borderLeft: '2px solid #4b5563', paddingLeft: '16px' }}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-semibold text-black">{exp.company || '公司名称'}</h3>
                  <span className="text-gray-600 italic text-sm">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-900 font-medium text-sm">{exp.position || '职位'}</p>
                <p className="text-gray-700 text-justify text-sm leading-relaxed mt-2 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-serif font-bold text-black border-b border-gray-300 pb-1 mb-3">教育背景</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif font-semibold text-black">{edu.school || '学校名称'}</h3>
                  <span className="text-gray-600 italic text-sm">{edu.startDate} - {edu.endDate}</span>
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
          <h2 className="text-lg font-serif font-bold text-black border-b border-gray-300 pb-1 mb-3">专业技能</h2>
          <div className="grid grid-cols-2 gap-3">
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
