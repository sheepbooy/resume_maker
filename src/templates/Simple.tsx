import { ResumeData } from '../types/resume'

interface SimpleResumeProps {
  data: ResumeData
}

export default function SimpleResume({ data }: SimpleResumeProps) {
  return (
    <div
      className="simple-resume"
      style={{
        backgroundColor: '#faf8f5',
        color: '#3a3c3e',
        padding: '60px 56px',
        maxWidth: '21cm',
        margin: '0 auto',
      }}
    >
      {/* Header — spacious */}
      <div style={{ marginBottom: '56px' }}>
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '30px',
            fontWeight: 700,
            color: '#2c2e30',
            margin: '0 0 4px 0',
            letterSpacing: '-0.3px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <p
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '13px',
            color: '#7d8185',
            fontWeight: 400,
            margin: '0 0 20px 0',
            letterSpacing: '0.2px',
          }}
        >
          {data.experience[0]?.position || '专业人才'}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 28px',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '13px',
            color: '#7d8185',
          }}
        >
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: '#9a9ea2',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              margin: '0 0 24px 0',
            }}
          >
            工作经历
          </h2>
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              style={{ marginBottom: '28px' }}
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
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#2c2e30',
                  }}
                >
                  {exp.company || '公司名称'}
                </span>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '12px',
                    color: '#b0b4b8',
                  }}
                >
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#7d8185',
                  margin: '0 0 10px 0',
                }}
              >
                {exp.position || '职位'}
              </p>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.7',
                  color: '#5a5d60',
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
        <div style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: '#9a9ea2',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              margin: '0 0 24px 0',
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
                marginBottom: '18px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#2c2e30',
                  }}
                >
                  {edu.school || '学校名称'}
                </span>
                <p
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '13px',
                    color: '#5a5d60',
                    margin: '2px 0 0 0',
                  }}
                >
                  {edu.degree || '学位/专业'}
                </p>
                {edu.description && (
                  <p
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '12px',
                      color: '#9a9ea2',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {edu.description}
                  </p>
                )}
              </div>
              <span
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '12px',
                  color: '#b0b4b8',
                  whiteSpace: 'nowrap',
                  marginLeft: '16px',
                }}
              >
                {edu.startDate} – {edu.endDate}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Skills — dot-separated inline */}
      {data.skills.length > 0 && (
        <div style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: '#9a9ea2',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              margin: '0 0 24px 0',
            }}
          >
            专业技能
          </h2>
          <p
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '13px',
              lineHeight: '1.8',
              color: '#5a5d60',
              margin: 0,
            }}
          >
            {data.skills.map((s, i) => (
              <span key={i}>
                {s || '技能'}
                {i < data.skills.length - 1 && (
                  <span style={{ color: '#c8ccd0', margin: '0 10px' }}>•</span>
                )}
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: '#9a9ea2',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              margin: '0 0 24px 0',
            }}
          >
            项目经历
          </h2>
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              style={{ marginBottom: '24px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '10px',
                  marginBottom: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#2c2e30',
                  }}
                >
                  {proj.name || '项目名称'}
                </span>
                {proj.link && (
                  <a
                    href={proj.link}
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '12px',
                      color: '#9a9ea2',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                    }}
                  >
                    {proj.link}
                  </a>
                )}
              </div>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.7',
                  color: '#5a5d60',
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
