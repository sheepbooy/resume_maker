import { ResumeData } from '../types/resume'

interface ClassicResumeProps {
  data: ResumeData
}

export default function ClassicResume({ data }: ClassicResumeProps) {
  return (
    <div className="classic-resume" style={{ backgroundColor: '#faf6f0', fontFamily: 'Newsreader, Georgia, serif', color: '#1a1a2e', padding: '48px 40px', minHeight: '100%' }}>
      {/* Ornate top decorative rule */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #b8860b, transparent)' }} />
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#b8860b', lineHeight: 1 }}>&#10087;</span>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #b8860b, transparent)' }} />
        </div>
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#1a1a2e', letterSpacing: '0.02em', margin: 0, marginBottom: '6px' }}>
          {data.profile.name || '您的姓名'}
        </h1>
        <div style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '15px', color: '#b8860b', marginBottom: '14px' }}>
          {data.experience[0]?.position || '专业人才'}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#4a4a6a' }}>
          {data.profile.email && <span>{data.profile.email}</span>}
          {data.profile.phone && <span style={{ color: '#b8860b' }}>|</span>}
          {data.profile.phone && <span>{data.profile.phone}</span>}
          {data.profile.location && <span style={{ color: '#b8860b' }}>|</span>}
          {data.profile.location && <span>{data.profile.location}</span>}
          {data.profile.linkedin && <span style={{ color: '#b8860b' }}>|</span>}
          {data.profile.linkedin && <span>{data.profile.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      <div style={{ marginBottom: '32px', padding: '24px 28px', border: '1px solid rgba(184, 134, 11, 0.2)', borderRadius: '4px', position: 'relative' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#b8860b', position: 'absolute', top: '6px', left: '12px', lineHeight: 1, opacity: 0.5 }}>&#8220;</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '12px', paddingLeft: '16px' }}>
          个人简介
        </h2>
        <p style={{ fontSize: '14.5px', lineHeight: 1.8, color: '#3a3a52', margin: 0, paddingLeft: '16px', fontStyle: 'italic' }}>
          {data.skills.slice(0, 5).join('、')}专业人士，拥有{data.experience.length}年{data.experience[0]?.position || '相关'}工作经验。
          擅长{data.skills.slice(0, 3).join('、')}等领域。工作认真负责，具备出色的沟通能力和团队协作精神，
          致力于通过专业知识和创新思维为企业创造持续价值。
        </p>
      </div>

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#b8860b' }}>&#10087;</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#1a1a2e', margin: 0, letterSpacing: '0.05em' }}>
              工作经历
            </h2>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#d4c9b0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {data.experience.map((exp) => (
              <div key={exp.id} style={{ paddingLeft: '20px', borderLeft: '2px solid rgba(184, 134, 11, 0.3)', position: 'relative' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#b8860b', position: 'absolute', left: '-6px', top: '6px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 600, color: '#1a1a2e', margin: 0 }}>
                    {exp.company || '公司名称'}
                  </h3>
                  <span style={{ fontSize: '13px', color: '#b8860b', fontStyle: 'italic', fontFamily: 'Newsreader, serif' }}>
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#4a4a6a', margin: '4px 0 10px 0' }}>
                  {exp.position || '职位'}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {exp.description.split('\n').filter(d => d.trim()).map((item, i) => (
                    <li key={i} style={{ fontSize: '14px', lineHeight: 1.7, color: '#3a3a52', marginBottom: '4px', paddingLeft: '16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#b8860b' }}>&mdash;</span>
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
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#b8860b' }}>&#10087;</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#1a1a2e', margin: 0, letterSpacing: '0.05em' }}>
              教育背景
            </h2>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#d4c9b0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {data.education.map((edu) => (
              <div key={edu.id} style={{ padding: '16px 20px', backgroundColor: 'rgba(184, 134, 11, 0.04)', borderRadius: '4px', border: '1px solid rgba(184, 134, 11, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 600, color: '#1a1a2e', margin: 0 }}>
                    {edu.school || '学校名称'}
                  </h3>
                  <span style={{ fontSize: '13px', color: '#b8860b', fontStyle: 'italic' }}>
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: '#4a4a6a', margin: '4px 0 0 0' }}>
                  {edu.degree || '学位/专业'}
                </p>
                {edu.description && (
                  <p style={{ fontSize: '13px', color: '#5a5a72', margin: '6px 0 0 0', lineHeight: 1.6 }}>
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
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#b8860b' }}>&#10087;</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#1a1a2e', margin: 0, letterSpacing: '0.05em' }}>
              专业技能
            </h2>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#d4c9b0' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '6px 16px',
                  border: '1px solid rgba(184, 134, 11, 0.3)',
                  borderRadius: '2px',
                  fontSize: '13px',
                  color: '#1a1a2e',
                  backgroundColor: index % 2 === 0 ? 'rgba(184, 134, 11, 0.06)' : 'transparent',
                  fontFamily: 'Newsreader, serif',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#b8860b' }}>&#10087;</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#1a1a2e', margin: 0, letterSpacing: '0.05em' }}>
              项目经历
            </h2>
            <span style={{ flex: 1, height: '1px', backgroundColor: '#d4c9b0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {data.projects.map((proj) => (
              <div key={proj.id} style={{ paddingLeft: '20px', borderLeft: '2px solid rgba(184, 134, 11, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 600, color: '#1a1a2e', margin: 0 }}>
                    {proj.name || '项目名称'}
                  </h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#b8860b', textDecoration: 'none' }}>
                      &#8599;
                    </a>
                  )}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#3a3a52', margin: 0 }}>
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ornate bottom decorative rule */}
      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #b8860b, transparent)' }} />
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#b8860b', lineHeight: 1 }}>&#10087;</span>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #b8860b, transparent)' }} />
        </div>
      </div>
    </div>
  )
}
