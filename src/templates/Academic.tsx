import { ResumeData } from '../types/resume'

interface AcademicResumeProps {
  data: ResumeData
}

export default function AcademicResume({ data }: AcademicResumeProps) {
  return (
    <div
      className="academic-resume"
      style={{
        fontFamily: 'Lora, serif',
        backgroundColor: '#fefcf5',
        padding: '8px 0',
        color: '#3d2b1f',
      }}
    >
      {/* Header — centered smallcaps */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '26px',
            fontWeight: 700,
            textTransform: 'lowercase',
            fontVariant: 'small-caps',
            letterSpacing: '0.08em',
            color: '#3d2b1f',
            marginBottom: '10px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <div
          className="flex flex-wrap justify-center gap-x-4 gap-y-1"
          style={{ fontSize: '13px', color: '#6b5b4e' }}
        >
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
        {(data.profile.linkedin || data.profile.github) && (
          <div style={{ fontSize: '12px', marginTop: '4px', color: '#800020' }}>
            {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
            {data.profile.linkedin && data.profile.github && <span> &middot; </span>}
            {data.profile.github && <span>{data.profile.github}</span>}
          </div>
        )}
      </div>

      {/* Education FIRST — academic priority */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '17px',
              fontWeight: 600,
              color: '#800020',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            ❦ 教育背景 ❦
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: '#3d2b1f',
                    }}
                  >
                    {edu.school || '学校名称'}
                  </span>
                  <span style={{ fontSize: '11px', color: '#800020', fontStyle: 'italic' }}>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#5c4a3a', marginTop: '1px' }}>
                  {edu.degree || '学位/专业'}
                </p>
                {edu.description && (
                  <p style={{ fontSize: '12px', color: '#6b5b4e', marginTop: '4px' }}>
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
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '17px',
              fontWeight: 600,
              color: '#800020',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            ✦ 工作经历 ✦
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: '#3d2b1f',
                    }}
                  >
                    {exp.company || '机构名称'}
                  </span>
                  <span style={{ fontSize: '11px', color: '#800020', fontStyle: 'italic' }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#800020',
                    fontWeight: 500,
                    marginBottom: '4px',
                  }}
                >
                  {exp.position || '职位'}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#5c4a3a',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                    textAlign: 'justify',
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
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '17px',
              fontWeight: 600,
              color: '#800020',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            ❧ 专业技能 ❧
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
            }}
          >
            {data.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  fontSize: '12px',
                  color: '#3d2b1f',
                  padding: '4px 14px',
                  borderBottom: '1px solid #800020',
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
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '17px',
              fontWeight: 600,
              color: '#800020',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            ✦ 项目经历 ✦
          </h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#3d2b1f',
                    }}
                  >
                    {proj.name || '项目名称'}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      style={{
                        fontSize: '11px',
                        color: '#800020',
                        textDecoration: 'underline',
                        textDecorationStyle: 'dotted',
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      查看 ↗
                    </a>
                  )}
                </div>
                <p style={{ fontSize: '12px', color: '#5c4a3a', marginTop: '2px' }}>
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
