import { ResumeData } from '../types/resume'

interface ProfessionalResumeProps {
  data: ResumeData
}

export default function ProfessionalResume({ data }: ProfessionalResumeProps) {
  return (
    <div
      className="professional-resume"
      style={{
        backgroundColor: '#fdfcf7',
        color: '#2c3136',
        padding: '48px 44px',
        maxWidth: '21cm',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '36px',
          paddingBottom: '24px',
          borderBottom: '2px solid #1e3a5f',
        }}
      >
        <h1
          style={{
            fontFamily: 'Lora, serif',
            fontSize: '30px',
            fontWeight: 600,
            color: '#1e3a5f',
            margin: '0 0 6px 0',
            letterSpacing: '0.5px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '13px',
            color: '#1e3a5f',
            fontWeight: 500,
            margin: '0 0 16px 0',
            letterSpacing: '0.3px',
          }}
        >
          {data.experience[0]?.position || '专业人才'}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px 24px',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            color: '#5b6269',
          }}
        >
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
          {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
        </div>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1e3a5f',
              margin: '0 0 16px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #d4cfc6',
              letterSpacing: '0.3px',
            }}
          >
            工作经历
          </h2>
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              style={{
                border: '1px solid #e3dfd6',
                borderRadius: '4px',
                padding: '16px 18px',
                marginBottom: '14px',
                backgroundColor: '#ffffff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1e3a5f',
                  }}
                >
                  {exp.company || '公司名称'}
                </span>
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '11px',
                    color: '#8b9298',
                    fontWeight: 500,
                  }}
                >
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '13px',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: '#3e454b',
                  margin: '0 0 8px 0',
                }}
              >
                {exp.position || '职位'}
              </p>
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.65',
                  color: '#4a5259',
                  margin: 0,
                }}
              >
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1e3a5f',
              margin: '0 0 16px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #d4cfc6',
              letterSpacing: '0.3px',
            }}
          >
            教育背景
          </h2>
          {data.education.map((edu) => (
            <div
              key={edu.id}
              style={{
                border: '1px solid #e3dfd6',
                borderRadius: '4px',
                padding: '14px 18px',
                marginBottom: '12px',
                backgroundColor: '#ffffff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '2px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1e3a5f',
                  }}
                >
                  {edu.school || '学校名称'}
                </span>
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '11px',
                    color: '#8b9298',
                  }}
                >
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#3e454b',
                  margin: '0 0 4px 0',
                }}
              >
                {edu.degree || '学位/专业'}
              </p>
              {edu.description && (
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '11px',
                    color: '#6b737a',
                    margin: 0,
                  }}
                >
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills — bar chart style */}
      {data.skills.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1e3a5f',
              margin: '0 0 16px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #d4cfc6',
              letterSpacing: '0.3px',
            }}
          >
            专业技能
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {data.skills.map((skill, index) => {
              const width = 50 + (index * 10) % 40
              return (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#2c3136',
                      minWidth: '110px',
                      textAlign: 'right',
                    }}
                  >
                    {skill || '技能'}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '8px',
                      backgroundColor: '#e8e5dd',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${width}%`,
                        height: '100%',
                        backgroundColor: '#1e3a5f',
                        borderRadius: '4px',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <h2
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1e3a5f',
              margin: '0 0 16px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #d4cfc6',
              letterSpacing: '0.3px',
            }}
          >
            项目经历
          </h2>
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                border: '1px solid #e3dfd6',
                borderRadius: '4px',
                padding: '14px 18px',
                marginBottom: '12px',
                backgroundColor: '#ffffff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1e3a5f',
                  }}
                >
                  {proj.name || '项目名称'}
                </span>
                {proj.link && (
                  <a
                    href={proj.link}
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '11px',
                      color: '#1e3a5f',
                      textDecoration: 'underline',
                      opacity: 0.7,
                    }}
                  >
                    {proj.link}
                  </a>
                )}
              </div>
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.65',
                  color: '#4a5259',
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
