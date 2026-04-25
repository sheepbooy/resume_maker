import { ResumeData } from '../types/resume'

interface VerticalResumeProps {
  data: ResumeData
}

export default function VerticalResume({ data }: VerticalResumeProps) {
  return (
    <div className="vertical-resume" style={{ display: 'flex', minHeight: '100%', fontFamily: 'Outfit, sans-serif' }}>
      {/* Left Sidebar — Vertical Text */}
      <div style={{ width: '160px', flexShrink: 0, backgroundColor: '#1e293b', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0', gap: '0' }}>

        {/* Profile */}
        <div style={{ textAlign: 'center', marginBottom: '20px', padding: '0 8px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#14b8a6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '26px', fontWeight: 700, fontFamily: 'Bricolage Grotesk, sans-serif' }}>
            {data.profile.name ? data.profile.name.charAt(0) : '君'}
          </div>
          <div style={{ fontSize: '12px', lineHeight: 1.4, color: '#94a3b8' }}>
            {data.profile.email && <div>{data.profile.email}</div>}
            {data.profile.phone && <div>{data.profile.phone}</div>}
            {data.profile.location && <div>{data.profile.location}</div>}
          </div>
        </div>

        <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 auto 16px' }} />

        {/* Skills — vertical text */}
        {data.skills.length > 0 && (
          <div style={{ width: '100%', padding: '0 8px', marginBottom: '16px' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>技能</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              {data.skills.slice(0, 10).map((skill, index) => (
                <div
                  key={index}
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#e2e8f0',
                    backgroundColor: 'rgba(20, 184, 166, 0.12)',
                    padding: '8px 3px',
                    borderRadius: '3px',
                    letterSpacing: '0.05em',
                    lineHeight: 1.4,
                  }}
                >
                  {skill || '技能'}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.skills.length > 0 && data.education.length > 0 && (
          <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 auto 16px' }} />
        )}

        {/* Education — vertical text */}
        {data.education.length > 0 && (
          <div style={{ width: '100%', padding: '0 8px' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: '#14b8a6', textTransform: 'uppercase' }}>教育</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    fontSize: '11px',
                    color: '#cbd5e1',
                    padding: '6px 2px',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ fontWeight: 600, color: '#f1f5f9' }}>{edu.school || '学校'}</span>
                  <br />
                  <span style={{ color: '#94a3b8' }}>{edu.degree}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Main Content */}
      <div style={{ flex: 1, padding: '40px 36px', backgroundColor: 'white' }}>
        {/* Name & Title */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'Bricolage Grotesk, sans-serif', fontSize: '36px', fontWeight: 700, color: '#0f172a', margin: 0, marginBottom: '4px', letterSpacing: '-0.02em' }}>
            {data.profile.name || '您的姓名'}
          </h1>
          <p style={{ fontSize: '15px', color: '#14b8a6', fontWeight: 500, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
            {data.experience[0]?.position || '专业人才'}
          </p>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '4px', height: '22px', backgroundColor: '#14b8a6', borderRadius: '2px' }} />
            <h2 style={{ fontFamily: 'Bricolage Grotesk, sans-serif', fontSize: '16px', fontWeight: 600, color: '#1e293b', margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              个人简介
            </h2>
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#475569', margin: 0, paddingLeft: '14px' }}>
            {data.skills.slice(0, 5).join('、')}专业人士，拥有{data.experience.length}年工作经验。
            擅长{data.skills.slice(0, 3).join('、')}等领域，具备出色的项目管理能力和团队领导力。
            致力于通过技术创新和精细化运营推动业务增长。
          </p>
        </div>

        {/* Experience */}
        {data.experience.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ width: '4px', height: '22px', backgroundColor: '#14b8a6', borderRadius: '2px' }} />
              <h2 style={{ fontFamily: 'Bricolage Grotesk, sans-serif', fontSize: '16px', fontWeight: 600, color: '#1e293b', margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                工作经历
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {data.experience.map((exp) => (
                <div key={exp.id} style={{ paddingLeft: '14px', borderLeft: '2px solid #e2e8f0', position: 'relative' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#14b8a6', position: 'absolute', left: '-6px', top: '6px', border: '2px solid white' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                    <h3 style={{ fontFamily: 'Bricolage Grotesk, sans-serif', fontSize: '17px', fontWeight: 600, color: '#0f172a', margin: 0 }}>
                      {exp.company || '公司名称'}
                    </h3>
                    <span style={{ fontSize: '12px', color: '#14b8a6', fontWeight: 500, backgroundColor: 'rgba(20, 184, 166, 0.08)', padding: '2px 10px', borderRadius: '10px' }}>
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#14b8a6', fontWeight: 600, margin: '4px 0 10px 0' }}>
                    {exp.position || '职位'}
                  </p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {exp.description.split('\n').filter(d => d.trim()).map((item, i) => (
                      <li key={i} style={{ fontSize: '14px', lineHeight: 1.7, color: '#475569', marginBottom: '3px', paddingLeft: '14px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#14b8a6' }}>&#9656;</span>
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ width: '4px', height: '22px', backgroundColor: '#14b8a6', borderRadius: '2px' }} />
              <h2 style={{ fontFamily: 'Bricolage Grotesk, sans-serif', fontSize: '16px', fontWeight: 600, color: '#1e293b', margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                项目经历
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {data.projects.map((proj) => (
                <div key={proj.id} style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontFamily: 'Bricolage Grotesk, sans-serif', fontSize: '15px', fontWeight: 600, color: '#0f172a', margin: 0 }}>
                      {proj.name || '项目名称'}
                    </h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#14b8a6', textDecoration: 'none' }}>
                        &#8599;
                      </a>
                    )}
                  </div>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
