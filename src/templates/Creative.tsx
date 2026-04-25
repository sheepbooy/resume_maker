import { ResumeData } from '../types/resume'

interface CreativeResumeProps {
  data: ResumeData
}

export default function CreativeResume({ data }: CreativeResumeProps) {
  return (
    <div className="creative-resume" style={{ backgroundColor: '#0f172a', color: '#e2e8f0', fontFamily: 'Plus Jakarta Sans, sans-serif', padding: '40px min(40px, 5%)', minHeight: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'rgba(255, 107, 107, 0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(255, 107, 107, 0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', right: '10%', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(255, 107, 107, 0.06)', pointerEvents: 'none' }} />

      {/* Asymmetric Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '36px', position: 'relative', zIndex: 1 }}>
        <div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '40px', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            {data.profile.name || '您的姓名'}
          </h1>
          <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '16px', color: '#ff6b6b', margin: '8px 0 0 0', fontWeight: 400 }}>
            {data.experience[0]?.position || '创意专业人才'}
          </p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '13px', color: '#94a3b8', lineHeight: 1.8 }}>
          {data.profile.email && <div>{data.profile.email}</div>}
          {data.profile.phone && <div>{data.profile.phone}</div>}
          {data.profile.location && <div>{data.profile.location}</div>}
          {data.profile.linkedin && <div>{data.profile.linkedin}</div>}
        </div>
      </div>

      {/* Skills as pills */}
      {data.skills.length > 0 && (
        <div style={{ marginBottom: '36px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#ff6b6b', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '14px' }}>
            核心技能
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '8px 18px',
                  backgroundColor: index % 2 === 0 ? '#ff6b6b' : 'rgba(255, 107, 107, 0.12)',
                  color: index % 2 === 0 ? '#0f172a' : '#ff6b6b',
                  fontSize: '13px',
                  fontWeight: index % 2 === 0 ? 700 : 600,
                  borderRadius: '9999px',
                  border: index % 2 !== 0 ? '1px solid rgba(255, 107, 107, 0.3)' : 'none',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '36px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#ff6b6b', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '18px' }}>
            工作经历
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '18px', fontWeight: 700, color: 'white', margin: 0, letterSpacing: '-0.01em' }}>
                    {exp.company || '公司名称'}
                  </h3>
                  <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: '#ff6b6b', fontWeight: 600, margin: '6px 0 12px 0' }}>
                  {exp.position || '职位'}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {exp.description.split('\n').filter(d => d.trim()).map((item, i) => (
                    <li key={i} style={{ fontSize: '14px', lineHeight: 1.7, color: '#94a3b8', marginBottom: '4px', paddingLeft: '16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#ff6b6b', fontFamily: 'Fraunces, serif' }}>&#9657;</span>
                      {item.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '36px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#ff6b6b', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '18px' }}>
            教育背景
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.education.map((edu) => (
              <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #ff6b6b' }}>
                <div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: 'white', margin: 0 }}>
                    {edu.school || '学校名称'}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#94a3b8', margin: '2px 0 0 0' }}>
                    {edu.degree || '学位/专业'}
                  </p>
                </div>
                <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'Fraunces, serif', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#ff6b6b', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '18px' }}>
            项目经历
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {data.projects.map((proj) => (
              <div key={proj.id} style={{ padding: '18px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ color: '#ff6b6b', fontSize: '18px', fontFamily: 'Fraunces, serif' }}>&#9670;</span>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: 'white', margin: 0 }}>
                    {proj.name || '项目名称'}
                  </h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#ff6b6b', textDecoration: 'none', marginLeft: 'auto' }}>
                      &#8599; 链接
                    </a>
                  )}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#94a3b8', margin: 0, paddingLeft: '28px' }}>
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
