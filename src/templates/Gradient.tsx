import { ResumeData } from '../types/resume'

interface GradientResumeProps {
  data: ResumeData
}

export default function GradientResume({ data }: GradientResumeProps) {
  return (
    <div className="gradient-resume" style={{ fontFamily: 'Sora, sans-serif' }}>
      {/* Header — strong aurora gradient */}
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          padding: '32px 28px',
          marginBottom: '20px',
          color: '#fff',
        }}
      >
        <h1
          style={{
            fontFamily: 'Fraunces, serif',
            fontVariationSettings: '"opsz" 72',
            fontWeight: 700,
            fontSize: '30px',
            marginBottom: '8px',
            letterSpacing: '0.01em',
          }}
        >
          {data.profile.name || '您的姓名'}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ opacity: 0.92 }}>
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
          {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
          {data.profile.github && <span>{data.profile.github}</span>}
        </div>
      </div>

      {/* Experience — pink → purple gradient panel */}
      {data.experience.length > 0 && (
        <div
          style={{
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
            borderRadius: '12px',
            padding: '22px 20px',
            marginBottom: '16px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontVariationSettings: '"opsz" 48',
              fontWeight: 600,
              fontSize: '18px',
              color: '#be185d',
              marginBottom: '14px',
            }}
          >
            工作经历
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ paddingLeft: '14px' }}>
                <div
                  style={{
                    borderLeft: '3px solid transparent',
                    borderImage: 'linear-gradient(180deg, #ec4899, #a855f7) 1',
                    paddingLeft: '12px',
                  }}
                >
                  <div
                    className="flex justify-between items-baseline mb-1"
                    style={{ color: '#1f2937' }}
                  >
                    <span style={{ fontWeight: 600, fontSize: '14px' }}>
                      {exp.company || '公司名称'}
                    </span>
                    <span style={{ color: '#6b7280', fontSize: '11px' }}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p style={{ color: '#be185d', fontWeight: 500, fontSize: '12px', marginBottom: '6px' }}>
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
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education — blue → teal gradient panel */}
      {data.education.length > 0 && (
        <div
          style={{
            background: 'linear-gradient(135deg, #ecfeff 0%, #ccfbf1 100%)',
            borderRadius: '12px',
            padding: '22px 20px',
            marginBottom: '16px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontVariationSettings: '"opsz" 48',
              fontWeight: 600,
              fontSize: '18px',
              color: '#0d9488',
              marginBottom: '14px',
            }}
          >
            教育背景
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '14px' }}>
                    {edu.school || '学校名称'}
                  </span>
                  <span style={{ color: '#6b7280', fontSize: '11px' }}>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p style={{ color: '#0d9488', fontWeight: 500, fontSize: '12px', marginTop: '2px' }}>
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

      {/* Skills — amber → orange gradient panel */}
      {data.skills.length > 0 && (
        <div
          style={{
            background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
            borderRadius: '12px',
            padding: '22px 20px',
            marginBottom: '16px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontVariationSettings: '"opsz" 48',
              fontWeight: 600,
              fontSize: '18px',
              color: '#c2410c',
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
                  background: 'linear-gradient(135deg, #f97316, #d97706)',
                  color: '#fff',
                  padding: '6px 16px',
                  borderRadius: '20px',
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

      {/* Projects — purple gradient panel */}
      {data.projects.length > 0 && (
        <div
          style={{
            background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
            borderRadius: '12px',
            padding: '22px 20px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontVariationSettings: '"opsz" 48',
              fontWeight: 600,
              fontSize: '18px',
              color: '#7c3aed',
              marginBottom: '14px',
            }}
          >
            项目经历
          </h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  padding: '14px',
                  borderRadius: '8px',
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '14px' }}>
                    {proj.name || '项目名称'}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      style={{ color: '#7c3aed', fontSize: '11px', textDecoration: 'none' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      链接 ↗
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
  )
}
