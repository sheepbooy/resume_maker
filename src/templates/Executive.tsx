import { ResumeData } from '../types/resume'

interface ExecutiveResumeProps {
  data: ResumeData
}

export default function ExecutiveResume({ data }: ExecutiveResumeProps) {
  const initial = data.profile.name ? data.profile.name.charAt(0) : 'A'

  return (
    <div className="executive-resume" style={{ backgroundColor: '#0f172a', minHeight: '100%', fontFamily: 'Outfit, sans-serif' }}>
      {/* Gold trim header area */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a2332 100%)', padding: '0', position: 'relative' }}>
        {/* Gold accent line */}
        <div style={{ height: '4px', background: 'linear-gradient(to right, #d4a853, #f0d68a, #d4a853)' }} />

        <div style={{ padding: '40px 36px 32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Avatar initial */}
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4a853, #f0d68a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, boxShadow: '0 4px 20px rgba(212, 168, 83, 0.25)',
          }}>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '34px', fontWeight: 400, color: '#0f172a' }}>
              {initial}
            </span>
          </div>

          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '36px', fontWeight: 400, color: 'white', margin: 0, letterSpacing: '0.02em', lineHeight: 1.2 }}>
              {data.profile.name || '您的姓名'}
            </h1>
            <p style={{ fontSize: '15px', color: '#d4a853', fontWeight: 400, margin: '4px 0 0 0', letterSpacing: '0.05em' }}>
              {data.experience[0]?.position || '高级管理人才'}
            </p>
          </div>

          {/* Contact info */}
          <div style={{ textAlign: 'right', fontSize: '13px', color: '#94a3b8', lineHeight: 1.8 }}>
            {data.profile.email && <div>{data.profile.email}</div>}
            {data.profile.phone && <div>{data.profile.phone}</div>}
            {data.profile.location && <div>{data.profile.location}</div>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '28px 36px 40px' }}>

        {/* Summary */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '18px', fontWeight: 400, color: '#d4a853', margin: 0, marginBottom: '14px', letterSpacing: '0.03em' }}>
            个人简介
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#d4a853', marginBottom: '14px' }} />
          <p style={{ fontSize: '14.5px', lineHeight: 1.8, color: '#cbd5e1', margin: 0, fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}>
            拥有{data.experience.length}年{data.experience[0]?.position || '运营管理'}经验的专业人士。
            在{data.experience[0]?.company || '行业内'}带领团队取得了卓越的业绩表现。
            精通{data.skills.slice(0, 4).join('、')}等领域，具备出色的战略规划能力和团队领导力。
            致力于通过专业知识和丰富经验为企业创造可持续价值。
          </p>
        </div>

        {/* Experience */}
        {data.experience.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '18px', fontWeight: 400, color: '#d4a853', margin: 0, marginBottom: '14px', letterSpacing: '0.03em' }}>
              工作经历
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#d4a853', marginBottom: '18px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '8px', color: '#d4a853' }}>&#9679;</span>
                      <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '19px', fontWeight: 400, color: 'white', margin: 0 }}>
                        {exp.company || '公司名称'}
                      </h3>
                    </div>
                    <span style={{
                      fontSize: '11px', color: '#d4a853', fontWeight: 400,
                      backgroundColor: 'rgba(212, 168, 83, 0.1)',
                      border: '1px solid rgba(212, 168, 83, 0.2)',
                      padding: '3px 12px', borderRadius: '9999px',
                      fontFamily: 'Outfit, sans-serif',
                    }}>
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#d4a853', fontWeight: 400, margin: '4px 0 10px 18px' }}>
                    {exp.position || '职位'}
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', marginLeft: '18px' }}>
                    {exp.description.split('\n').filter(d => d.trim()).map((item, i) => (
                      <li key={i} style={{ fontSize: '14px', lineHeight: 1.7, color: '#94a3b8', marginBottom: '4px', paddingLeft: '16px', position: 'relative', fontWeight: 300 }}>
                        <span style={{ position: 'absolute', left: 0, color: '#d4a853', opacity: 0.6 }}>&#8212;</span>
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
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '18px', fontWeight: 400, color: '#d4a853', margin: 0, marginBottom: '14px', letterSpacing: '0.03em' }}>
              教育背景
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#d4a853', marginBottom: '18px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {data.education.map((edu) => (
                <div key={edu.id} style={{ padding: '16px 18px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px', borderLeft: '2px solid rgba(212, 168, 83, 0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '16px', fontWeight: 400, color: 'white', margin: 0 }}>
                      {edu.school || '学校名称'}
                    </h3>
                    <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'Outfit, sans-serif' }}>
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#d4a853', margin: '4px 0 0 0' }}>
                    {edu.degree || '学位/专业'}
                  </p>
                  {edu.description && (
                    <p style={{ fontSize: '13px', color: '#94a3b8', margin: '6px 0 0 0', lineHeight: 1.6, fontWeight: 300 }}>
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '18px', fontWeight: 400, color: '#d4a853', margin: 0, marginBottom: '14px', letterSpacing: '0.03em' }}>
              核心能力
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#d4a853', marginBottom: '18px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {data.skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d4a853', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 300, fontFamily: 'Outfit, sans-serif' }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '18px', fontWeight: 400, color: '#d4a853', margin: 0, marginBottom: '14px', letterSpacing: '0.03em' }}>
              项目经历
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#d4a853', marginBottom: '18px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {data.projects.map((proj) => (
                <div key={proj.id} style={{ padding: '18px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px', border: '1px solid rgba(212, 168, 83, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '16px', fontWeight: 400, color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#d4a853', fontSize: '14px' }}>&#9670;</span>
                      {proj.name || '项目名称'}
                    </h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#d4a853', textDecoration: 'none', fontWeight: 300 }}>
                        外部链接 &#8599;
                      </a>
                    )}
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#94a3b8', margin: '0 0 0 22px', fontWeight: 300 }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom gold accent */}
      <div style={{ height: '3px', background: 'linear-gradient(to right, #d4a853, #f0d68a, #d4a853)' }} />
    </div>
  )
}
