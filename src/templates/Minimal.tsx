import { ResumeData } from '../types/resume'

interface MinimalResumeProps {
  data: ResumeData
}

export default function MinimalResume({ data }: MinimalResumeProps) {
  return (
    <div
      className="minimal-resume"
      style={{
        fontFamily: '"IBM Plex Mono", monospace',
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '44px 40px',
        maxWidth: '21cm',
        margin: '0 auto',
      }}
    >
      {/* Header — stark name */}
      <div style={{ marginBottom: '40px' }}>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <p
          style={{
            fontSize: '10px',
            margin: '0 0 14px 0',
            color: '#000000',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          {data.experience[0]?.position || '专业人才'}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px 0',
            fontSize: '11px',
            lineHeight: '1.8',
            color: '#000000',
          }}
        >
          {data.profile.email && (
            <span style={{ marginRight: '24px' }}>{data.profile.email}</span>
          )}
          {data.profile.phone && (
            <span style={{ marginRight: '24px' }}>{data.profile.phone}</span>
          )}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
      </div>

      {/* Heavy black rules throughout */}
      <div
        style={{
          height: '4px',
          backgroundColor: '#000000',
          marginBottom: '36px',
        }}
      />

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 18px 0',
            }}
          >
            // 工作经历
          </h2>
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              style={{
                borderLeft: '4px solid #000000',
                paddingLeft: '16px',
                marginBottom: '22px',
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
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#000000',
                  }}
                >
                  {exp.company || '公司名称'}
                </span>
                <span style={{ fontSize: '10px', color: '#000000' }}>
                  {exp.startDate}_{exp.endDate}
                </span>
              </div>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#000000',
                  margin: '0 0 8px 0',
                }}
              >
                {exp.position || '职位'}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: '1.6',
                  color: '#000000',
                  margin: 0,
                }}
              >
                {exp.description
                  .split('\n')
                  .filter(d => d.trim())
                  .map((line, i, arr) => (
                    <span key={i}>
                      {'>'} {line.trim()}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 18px 0',
            }}
          >
            // 教育背景
          </h2>
          {data.education.map((edu) => (
            <div
              key={edu.id}
              style={{
                borderLeft: '4px solid #000000',
                paddingLeft: '16px',
                marginBottom: '16px',
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
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#000000',
                  }}
                >
                  {edu.school || '学校名称'}
                </span>
                <span style={{ fontSize: '10px', color: '#000000' }}>
                  {edu.startDate}_{edu.endDate}
                </span>
              </div>
              <p
                style={{
                  fontSize: '11px',
                  color: '#000000',
                  margin: 0,
                }}
              >
                {edu.degree || '学位/专业'}
              </p>
              {edu.description && (
                <p
                  style={{
                    fontSize: '10px',
                    color: '#000000',
                    margin: '4px 0 0 0',
                  }}
                >
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills — comma-separated inline */}
      {data.skills.length > 0 && (
        <div style={{ marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 18px 0',
            }}
          >
            // 专业技能
          </h2>
          <p
            style={{
              fontSize: '11px',
              lineHeight: '1.8',
              color: '#000000',
              margin: 0,
            }}
          >
            {data.skills.map((s, i) => (
              <span key={i}>
                {s || '技能'}
                {i < data.skills.length - 1 && <span>, </span>}
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div style={{ marginBottom: '0' }}>
          <h2
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 18px 0',
            }}
          >
            // 项目经历
          </h2>
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                borderLeft: '4px solid #000000',
                paddingLeft: '16px',
                marginBottom: '16px',
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
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#000000',
                  }}
                >
                  {proj.name || '项目名称'}
                </span>
                {proj.link && (
                  <span style={{ fontSize: '10px', color: '#000000' }}>
                    [{proj.link}]
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: '1.6',
                  color: '#000000',
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
