import { ResumeData } from '../types/resume'

interface CleanResumeProps {
  data: ResumeData
}

export default function CleanResume({ data }: CleanResumeProps) {
  const subtleDivider = (
    <div
      style={{
        height: '1px',
        background: '#d0d8e3',
        margin: '24px 0',
        opacity: 0.4,
      }}
    />
  )

  return (
    <div
      className="clean-resume"
      style={{
        fontFamily: 'Sora, sans-serif',
        backgroundColor: '#f0f4f8',
        padding: '36px 32px',
        color: '#4a5568',
      }}
    >
      {/* Header — clean and spacious */}
      <div style={{ marginBottom: '12px' }}>
        <h1
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 300,
            fontSize: '28px',
            letterSpacing: '-0.01em',
            color: '#2d3748',
            marginBottom: '8px',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <div
          className="flex flex-wrap gap-x-5 gap-y-1"
          style={{ fontSize: '12px', color: '#718096', fontWeight: 400 }}
        >
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
          {(data.profile.linkedin || data.profile.github) && (
            <span>
              {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
              {data.profile.linkedin && data.profile.github && <span> &middot; </span>}
              {data.profile.github && <span>{data.profile.github}</span>}
            </span>
          )}
        </div>
      </div>

      {subtleDivider}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '8px' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#4a5568',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            工作经历
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#2d3748',
                    }}
                  >
                    {exp.company || '公司名称'}
                  </span>
                  <span style={{ fontSize: '11px', color: '#a0aec0' }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#718096', fontWeight: 400, marginBottom: '6px' }}>
                  {exp.position || '职位'}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#718096',
                    lineHeight: 1.7,
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

      {data.experience.length > 0 && data.education.length > 0 && subtleDivider}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '8px' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#4a5568',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            教育背景
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#2d3748',
                    }}
                  >
                    {edu.school || '学校名称'}
                  </span>
                  <span style={{ fontSize: '11px', color: '#a0aec0' }}>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#718096', marginTop: '1px' }}>
                  {edu.degree || '学位/专业'}
                </p>
                {edu.description && (
                  <p style={{ fontSize: '12px', color: '#a0aec0', marginTop: '4px' }}>
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {(data.education.length > 0 || data.experience.length > 0) && data.skills.length > 0 && subtleDivider}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div style={{ marginBottom: '8px' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#4a5568',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            专业技能
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  fontSize: '11px',
                  color: '#4a5568',
                  padding: '4px 12px',
                  border: '1px solid #cbd5e0',
                  borderRadius: '4px',
                  fontWeight: 400,
                }}
              >
                {skill || '技能'}
              </span>
            ))}
          </div>
        </div>
      )}

      {(data.skills.length > 0 || data.education.length > 0 || data.experience.length > 0) &&
        data.projects.length > 0 && subtleDivider}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#4a5568',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            项目经历
          </h2>
          <div className="space-y-4">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      color: '#2d3748',
                    }}
                  >
                    {proj.name || '项目名称'}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      style={{
                        fontSize: '11px',
                        color: '#a0aec0',
                        textDecoration: 'none',
                        borderBottom: '1px dotted #cbd5e0',
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      链接 ↗
                    </a>
                  )}
                </div>
                <p style={{ fontSize: '12px', color: '#718096', marginTop: '3px' }}>
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
