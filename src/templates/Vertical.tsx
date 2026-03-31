import { ResumeData } from '../types/resume'

interface VerticalResumeProps {
  data: ResumeData
}

export default function VerticalResume({ data }: VerticalResumeProps) {
  return (
    <div className="vertical-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="text-center py-6" style={{ backgroundColor: '#1e293b', color: 'white', marginBottom: '24px' }}>
        <h1 className="text-3xl font-bold mb-2">{data.profile.name || '您的姓名'}</h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Left Column - Skills (Vertical Layout) */}
        <div style={{ width: '180px', flexShrink: 0 }}>
          <div style={{ borderBottom: '3px solid #6366f1', paddingBottom: '8px', marginBottom: '16px' }}>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">技能</h2>
          </div>

          {data.skills.length > 0 && (
            <div className="mb-6">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {data.skills.slice(0, 10).map((skill, index) => (
                  <div key={index} style={{ padding: '8px 12px', backgroundColor: '#eef2ff', color: '#4338ca', borderRadius: '4px', fontSize: '12px', fontWeight: '500', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    {skill || '技能'}
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.education.length > 0 && (
            <div>
              <div style={{ borderBottom: '3px solid #6366f1', paddingBottom: '8px', marginBottom: '8px' }}>
                <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider">教育</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {data.education.map((edu) => (
                  <div key={edu.id} style={{ fontSize: '11px', color: '#4b5563', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    {edu.school || '学校'}
                    <div style={{ fontSize: '10px', color: '#6b7280' }}>{edu.degree || '学位'}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Main Content */}
        <div style={{ flex: 1 }}>
          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '4px' }}>个人简介</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.skills.slice(0, 5).join('、')}专业人士，拥有{data.experience.length}年工作经验。擅长{data.skills.slice(0, 3).join('、')}等领域。工作认真负责，具备良好的沟通能力和团队协作精神。
            </p>
          </div>

          {/* Experience */}
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '4px' }}>工作经历</h2>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{exp.company || '公司名称'}</h3>
                      <span className="text-gray-500 text-xs">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="font-semibold text-[#6366f1] text-sm mb-2">{exp.position || '职位'}</p>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '4px' }}>项目经历</h2>
              <div className="space-y-3">
                {data.projects.map((proj) => (
                  <div key={proj.id} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
                    <h3 className="font-semibold text-gray-900 text-sm">{proj.name || '项目名称'}</h3>
                    <p className="text-gray-700 text-sm mt-1">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
