import { ResumeData } from '../types/resume'

interface ExecutiveResumeProps {
  data: ResumeData
}

export default function ExecutiveResume({ data }: ExecutiveResumeProps) {
  return (
    <div className="executive-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="mb-6">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="w-20 h-20" style={{ backgroundColor: '#6366f1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
            {data.profile.name ? data.profile.name.charAt(0) : 'A'}
          </div>
          <div style={{ flex: 1 }}>
            <h1 className="text-3xl font-bold text-black mb-1">{data.profile.name || '您的姓名'}</h1>
            <p className="text-gray-600 text-lg">{data.experience[0]?.position || '专业人才'}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-700">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Executive Summary */}
      <div className="mb-8">
        <h2 className="text-base font-bold text-black mb-3 flex items-center gap-2" style={{ borderBottom: '2px solid #6366f1', paddingBottom: '8px' }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#6366f1', borderRadius: '50%' }}></span>
          个人简介
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          拥有{data.experience.length}年{data.experience[0]?.position || '运营管理'}经验的专业人士。在{data.experience[0]?.company || '上一家公司'}担任{data.experience[0]?.position || '相关职位'}期间，带领团队取得了显著的业绩增长。
          精通{data.skills.slice(0, 4).join('、')}等领域，具备出色的{data.skills.slice(5, 8).join('、')}等综合能力。致力于通过专业的知识和丰富的经验，为企业创造更大价值。
        </p>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-bold text-black mb-3 flex items-center gap-2" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '8px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#1f2937', borderRadius: '50%' }}></span>
            工作经历
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{exp.company || '公司名称'}</h3>
                  <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[#6366f1] font-semibold text-base mb-3">{exp.position || '职位'}</p>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-bold text-black mb-3 flex items-center gap-2" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '8px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#1f2937', borderRadius: '50%' }}></span>
            教育背景
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">{edu.school || '学校名称'}</h3>
                  <span className="text-gray-500 text-xs">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-gray-800 font-medium text-sm mt-1">{edu.degree || '学位/专业'}</p>
                {edu.description && <p className="text-gray-600 text-xs mt-2">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-base font-bold text-black mb-3 flex items-center gap-2" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '8px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#1f2937', borderRadius: '50%' }}></span>
            核心能力
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {data.skills.map((skill, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="w-2 h-2" style={{ backgroundColor: '#6366f1', borderRadius: '50%' }}></div>
                <span className="text-gray-800 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
