import { ResumeData } from '../types/resume'

interface ElegantResumeProps {
  data: ResumeData
}

export default function ElegantResume({ data }: ElegantResumeProps) {
  const divider = (
    <div style={{ textAlign: 'center', margin: '18px 0', color: '#e8a0bf', fontSize: '16px', lineHeight: 1 }}>
      — — — ✦ — — —
    </div>
  )

  return (
    <div
      className="elegant-resume"
      style={{
        fontFamily: 'Cormorant Garamond, serif',
        backgroundColor: '#fdfbf7',
        padding: '8px 4px',
        color: '#1a4a3a',
      }}
    >
      {/* Header — centered elegant */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 600,
            letterSpacing: '0.03em',
            color: '#1a4a3a',
            marginBottom: '6px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <div
          className="flex flex-wrap justify-center gap-x-4 gap-y-1"
          style={{ fontSize: '14px', fontStyle: 'italic', color: '#4a6b5e' }}
        >
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
        </div>
        {(data.profile.linkedin || data.profile.github) && (
          <div style={{ fontSize: '13px', marginTop: '2px', color: '#e8a0bf' }}>
            {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
            {data.profile.linkedin && data.profile.github && <span> &middot; </span>}
            {data.profile.github && <span>{data.profile.github}</span>}
          </div>
        )}
      </div>

      {/* Decorative flourish after header */}
      <div style={{ textAlign: 'center', color: '#e8a0bf', fontSize: '18px', marginBottom: '8px' }}>
        ❀
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <>
          <div style={{ marginBottom: '20px' }}>
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#1a4a3a',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}
            >
              工作经历
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: '15px',
                        color: '#1a4a3a',
                      }}
                    >
                      {exp.company || '公司名称'}
                    </span>
                    <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#e8a0bf' }}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#e8a0bf', marginBottom: '4px' }}>
                    {exp.position || '职位'}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#4a6b5e',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {divider}
        </>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <>
          <div style={{ marginBottom: '20px' }}>
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#1a4a3a',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}
            >
              教育背景
            </h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <span style={{ fontWeight: 600, fontSize: '15px', color: '#1a4a3a' }}>
                      {edu.school || '学校名称'}
                    </span>
                    <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#e8a0bf' }}>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#4a6b5e' }}>{edu.degree || '学位/专业'}</p>
                  {edu.description && (
                    <p style={{ fontSize: '13px', color: '#4a6b5e', marginTop: '2px' }}>
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {divider}
        </>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <>
          <div style={{ marginBottom: '20px' }}>
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#1a4a3a',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}
            >
              专业技能
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: '13px',
                    color: '#1a4a3a',
                    padding: '4px 14px',
                    border: '1px solid #e8a0bf',
                    borderRadius: '9999px',
                    fontStyle: 'italic',
                  }}
                >
                  {skill || '技能'}
                </span>
              ))}
            </div>
          </div>
          {divider}
        </>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1a4a3a',
              letterSpacing: '0.04em',
              marginBottom: '10px',
            }}
          >
            项目经历
          </h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex items-center justify-between">
                  <span style={{ fontWeight: 600, fontSize: '15px', color: '#1a4a3a' }}>
                    {proj.name || '项目名称'}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      style={{
                        fontSize: '12px',
                        color: '#e8a0bf',
                        fontStyle: 'italic',
                        textDecoration: 'none',
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ouvrir ↗
                    </a>
                  )}
                </div>
                <p style={{ fontSize: '13px', color: '#4a6b5e', marginTop: '2px' }}>
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
