import { ResumeData } from '../types/resume'

interface TechResumeProps {
  data: ResumeData
}

export default function TechResume({ data }: TechResumeProps) {
  return (
    <div
      className="tech-resume"
      style={{
        fontFamily: '"JetBrains Mono", Onest, monospace',
        backgroundColor: '#0d1117',
        color: '#c9d1d9',
        padding: '44px 40px',
        maxWidth: '21cm',
        margin: '0 auto',
      }}
    >
      {/* Header — code editor style */}
      <div
        style={{
          borderBottom: '1px solid #21262d',
          paddingBottom: '24px',
          marginBottom: '28px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Onest, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#3fb950',
            margin: '0 0 4px 0',
            letterSpacing: '-0.5px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <p
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '11px',
            color: '#8b949e',
            margin: '0 0 16px 0',
          }}
        >
          {'// '}{data.experience[0]?.position || '专业人才'}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px 0',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '11px',
            color: '#8b949e',
            lineHeight: '1.8',
          }}
        >
          {data.profile.email && (
            <span style={{ marginRight: '28px' }}>
              <span style={{ color: '#3fb950' }}>mail</span>:{data.profile.email}
            </span>
          )}
          {data.profile.phone && (
            <span style={{ marginRight: '28px' }}>
              <span style={{ color: '#3fb950' }}>phone</span>:{data.profile.phone}
            </span>
          )}
          {data.profile.location && (
            <span style={{ marginRight: '28px' }}>
              <span style={{ color: '#3fb950' }}>loc</span>:{data.profile.location}
            </span>
          )}
        </div>
      </div>

      {/* Skills — terminal badges */}
      {data.skills.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10px',
              fontWeight: 600,
              color: '#3fb950',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 14px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #21262d',
            }}
          >
            {'// '}技术栈
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  padding: '5px 12px',
                  border: '1px solid #30363d',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: '#c9d1d9',
                  backgroundColor: '#161b22',
                }}
              >
                <span style={{ color: '#3fb950' }}>[</span>
                {skill || '技能'}
                <span style={{ color: '#3fb950' }}>]</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10px',
              fontWeight: 600,
              color: '#3fb950',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 14px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #21262d',
            }}
          >
            {'// '}工作经历
          </h2>
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              style={{
                borderLeft: '2px solid #30363d',
                paddingLeft: '16px',
                marginBottom: '20px',
                position: 'relative',
              }}
            >
              {/* Code line dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-5px',
                  top: '4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#3fb950',
                }}
              />
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
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#e6edf3',
                  }}
                >
                  {exp.company || '公司名称'}
                </span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '10px',
                    color: '#8b949e',
                  }}
                >
                  {'<'}{exp.startDate}<span style={{ color: '#3fb950' }}>..</span>{exp.endDate}{'>'}
                </span>
              </div>
              <p
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px',
                  color: '#3fb950',
                  margin: '0 0 8px 0',
                }}
              >
                {'> '}{exp.position || '职位'}
              </p>
              <p
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.65',
                  color: '#8b949e',
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
        <div style={{ marginBottom: '28px' }}>
          <h2
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10px',
              fontWeight: 600,
              color: '#3fb950',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 14px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #21262d',
            }}
          >
            {'// '}教育背景
          </h2>
          {data.education.map((edu) => (
            <div
              key={edu.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                padding: '10px 14px',
                border: '1px solid #21262d',
                borderRadius: '4px',
                backgroundColor: '#161b22',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#e6edf3',
                  }}
                >
                  {edu.school || '学校名称'}
                </span>
                <p
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '11px',
                    color: '#8b949e',
                    margin: '2px 0 0 0',
                  }}
                >
                  {edu.degree || '学位/专业'}
                </p>
                {edu.description && (
                  <p
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '10px',
                      color: '#6e7681',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {'/* '}{edu.description}{' */'}
                  </p>
                )}
              </div>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '10px',
                  color: '#6e7681',
                  whiteSpace: 'nowrap',
                  marginLeft: '12px',
                }}
              >
                {'<'}{edu.startDate}<span style={{ color: '#3fb950' }}>..</span>{edu.endDate}{'>'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <h2
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10px',
              fontWeight: 600,
              color: '#3fb950',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 14px 0',
              paddingBottom: '6px',
              borderBottom: '1px solid #21262d',
            }}
          >
            {'// '}项目经历
          </h2>
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                padding: '12px 14px',
                marginBottom: '12px',
                border: '1px solid #21262d',
                borderRadius: '4px',
                backgroundColor: '#161b22',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#e6edf3',
                  }}
                >
                  {proj.name || '项目名称'}
                </span>
                {proj.link && (
                  <a
                    href={proj.link}
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '10px',
                      color: '#58a6ff',
                      textDecoration: 'none',
                    }}
                  >
                    {'<link>'}
                  </a>
                )}
              </div>
              <p
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.65',
                  color: '#8b949e',
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
