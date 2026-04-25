import { ResumeData } from '../types/resume'

interface ModernResumeProps {
  data: ResumeData
}

export default function ModernResume({ data }: ModernResumeProps) {
  return (
    <div className="modern-resume" style={{ fontFamily: 'Sora, sans-serif' }}>
      {/* Header — violet brand banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
          borderRadius: '12px',
          padding: '28px 24px',
          marginBottom: '24px',
          color: '#fff',
          boxShadow: '0 4px 14px rgba(124,58,237,0.25)',
        }}
      >
        <h1
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800,
            fontSize: '28px',
            letterSpacing: '-0.02em',
            marginBottom: '6px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ fontSize: '13px', opacity: 0.9 }}>
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
          {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
          {data.profile.github && <span>{data.profile.github}</span>}
        </div>
      </div>

      {/* Content wrapper */}
      <div className="space-y-7">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#7c3aed',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                教育背景
              </h2>
              <div style={{ flex: 1, height: '2px', background: '#7c3aed', borderRadius: '1px' }} />
            </div>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  style={{
                    borderLeft: '3px solid #7c3aed',
                    paddingLeft: '12px',
                  }}
                >
                  <div className="flex justify-between items-baseline">
                    <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '14px' }}>
                      {edu.school || '学校名称'}
                    </span>
                    <span style={{ color: '#6b7280', fontSize: '11px' }}>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p style={{ color: '#7c3aed', fontWeight: 500, fontSize: '12px', marginTop: '1px' }}>
                    {edu.degree || '学位/专业'}
                  </p>
                  {edu.description && (
                    <p style={{ color: '#4b5563', fontSize: '12px', marginTop: '4px' }}>
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#7c3aed',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                工作经历
              </h2>
              <div style={{ flex: 1, height: '2px', background: '#7c3aed', borderRadius: '1px' }} />
            </div>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  style={{
                    background: '#fafafa',
                    borderRadius: '8px',
                    padding: '14px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '14px' }}>
                      {exp.company || '公司名称'}
                    </span>
                    <span style={{ color: '#6b7280', fontSize: '11px' }}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p style={{ color: '#7c3aed', fontWeight: 500, fontSize: '12px', marginBottom: '6px' }}>
                    {exp.position || '职位'}
                  </p>
                  <p
                    style={{
                      color: '#4b5563',
                      fontSize: '12px',
                      lineHeight: 1.65,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#7c3aed',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                核心技能
              </h2>
              <div style={{ flex: 1, height: '2px', background: '#7c3aed', borderRadius: '1px' }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    border: '1.5px solid #7c3aed',
                    color: '#7c3aed',
                    padding: '5px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {skill || '技能'}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#7c3aed',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                项目经历
              </h2>
              <div style={{ flex: 1, height: '2px', background: '#7c3aed', borderRadius: '1px' }} />
            </div>
            <div className="space-y-3">
              {data.projects.map((proj) => (
                <div
                  key={proj.id}
                  style={{
                    background: '#fafafa',
                    borderRadius: '8px',
                    padding: '14px',
                    border: '1px solid #f0f0f0',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '14px' }}>
                      {proj.name || '项目名称'}
                    </span>
                    {proj.link && (
                      <a
                        href={proj.link}
                        style={{
                          color: '#7c3aed',
                          fontSize: '11px',
                          fontWeight: 600,
                          textDecoration: 'none',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        查看项目 ↗
                      </a>
                    )}
                  </div>
                  <p style={{ color: '#4b5563', fontSize: '12px', marginTop: '4px' }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
