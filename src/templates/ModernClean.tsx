import { ResumeData } from '../types/resume'

interface ModernCleanResumeProps {
  data: ResumeData
}

export default function ModernCleanResume({ data }: ModernCleanResumeProps) {
  return (
    <div
      className="modern-clean-resume"
      style={{
        fontFamily: 'Onest, Sora, sans-serif',
        backgroundColor: '#f8fafc',
        color: '#2d3436',
        padding: '48px 44px',
        maxWidth: '21cm',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: '28px',
            fontWeight: 600,
            color: '#2d3436',
            margin: '0 0 6px 0',
            letterSpacing: '-0.3px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <p
          style={{
            fontFamily: 'Onest, sans-serif',
            fontSize: '14px',
            color: '#84a98c',
            fontWeight: 500,
            margin: '0 0 16px 0',
          }}
        >
          {data.experience[0]?.position || '专业人才'}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px 20px',
            fontSize: '13px',
            color: '#63686a',
            fontFamily: 'Onest, sans-serif',
          }}
        >
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Thin accent line under header */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#e2e8f0',
          marginBottom: '36px',
        }}
      />

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#84a98c',
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              margin: '0 0 18px 0',
            }}
          >
            工作经历
          </h2>
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              style={{ marginBottom: '24px' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '4px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#2d3436',
                    margin: 0,
                  }}
                >
                  {exp.company || '公司名称'}
                </h3>
                <span
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '12px',
                    color: '#94a3b8',
                  }}
                >
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#84a98c',
                  margin: '0 0 10px 0',
                }}
              >
                {exp.position || '职位'}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {exp.description.split('\n').filter(d => d.trim()).map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '6px',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      color: '#4a5558',
                      fontFamily: 'Onest, sans-serif',
                    }}
                  >
                    <span style={{ color: '#84a98c', flexShrink: 0 }}>→</span>
                    <span>{item.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#84a98c',
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              margin: '0 0 18px 0',
            }}
          >
            教育背景
          </h2>
          {data.education.map((edu) => (
            <div
              key={edu.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '14px',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#2d3436',
                    margin: '0 0 2px 0',
                  }}
                >
                  {edu.school || '学校名称'}
                </h3>
                <p
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '13px',
                    color: '#63686a',
                    margin: 0,
                  }}
                >
                  {edu.degree || '学位/专业'}
                </p>
                {edu.description && (
                  <p
                    style={{
                      fontFamily: 'Onest, sans-serif',
                      fontSize: '12px',
                      color: '#94a3b8',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {edu.description}
                  </p>
                )}
              </div>
              <span
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '12px',
                  color: '#94a3b8',
                  whiteSpace: 'nowrap',
                  marginLeft: '16px',
                }}
              >
                {edu.startDate} — {edu.endDate}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#84a98c',
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              margin: '0 0 18px 0',
            }}
          >
            专业技能
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {data.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '7px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '24px',
                  fontSize: '13px',
                  color: '#2d3436',
                  fontFamily: 'Onest, sans-serif',
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
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#84a98c',
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              margin: '0 0 18px 0',
            }}
          >
            项目经历
          </h2>
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              style={{ marginBottom: '18px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  marginBottom: '4px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#2d3436',
                    margin: 0,
                  }}
                >
                  {proj.name || '项目名称'}
                </h3>
                {proj.link && (
                  <a
                    href={proj.link}
                    style={{
                      fontFamily: 'Onest, sans-serif',
                      fontSize: '12px',
                      color: '#84a98c',
                      textDecoration: 'none',
                    }}
                  >
                    {proj.link}
                  </a>
                )}
              </div>
              <p
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: '#4a5558',
                  margin: 0,
                }}
              >
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
