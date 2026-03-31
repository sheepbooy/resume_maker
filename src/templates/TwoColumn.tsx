import { ResumeData } from '../types/resume'

interface TwoColumnResumeProps {
  data: ResumeData
}

export default function TwoColumnResume({ data }: TwoColumnResumeProps) {
  return (
    <div className="two-column-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '24px' }}>
        {/* Left Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{data.profile.name || '您的姓名'}</h1>

          {/* Contact */}
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
            <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">联系方式</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#374151' }}>
              {data.profile.email && <div>{data.profile.email}</div>}
              {data.profile.phone && <div>{data.profile.phone}</div>}
              {data.profile.location && <div>{data.profile.location}</div>}
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">技能</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {data.skills.map((skill, index) => (
                  <div key={index} style={{ fontSize: '12px', color: '#374151', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#6366f1' }}>✓</span>
                    {skill || '技能'}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">教育背景</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-gray-900 text-sm">{edu.school || '学校'}</h3>
                    <p className="text-gray-700 text-sm">{edu.degree || '学位'}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Experience */}
          {data.experience.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '8px' }}>工作经历</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {data.experience.map((exp) => (
                  <div key={exp.id} style={{ borderLeft: '3px solid #6366f1', paddingLeft: '12px' }}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900">{exp.company || '公司'}</h3>
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
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '8px' }}>项目经历</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {data.projects.map((proj) => (
                  <div key={proj.id} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
                    <h3 className="font-semibold text-gray-900 text-sm">{proj.name || '项目名称'}</h3>
                    <p className="text-gray-700 text-sm mt-1">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Summary */}
          {data.skills.length > 3 && (
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3" style={{ borderBottom: '2px solid #1f2937', paddingBottom: '8px' }}>技能详情</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {data.skills.slice(0, 8).map((skill, index) => (
                  <span key={index} style={{ padding: '3px 10px', backgroundColor: '#eef2ff', color: '#4338ca', borderRadius: '4px', fontSize: '11px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
