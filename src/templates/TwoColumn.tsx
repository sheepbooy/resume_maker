import { ResumeData } from '../types/resume'

interface TwoColumnResumeProps {
  data: ResumeData
}

export default function TwoColumnResume({ data }: TwoColumnResumeProps) {
  return (
    <div className="two-column-resume" style={{ fontFamily: 'Sora, sans-serif', backgroundColor: 'white', minHeight: '100%' }}>
      {/* Grid Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', minHeight: '100%' }}>

        {/* ============ LEFT SIDEBAR ============ */}
        <div style={{ backgroundColor: '#fafafa', padding: '40px 28px', borderRight: '1px solid #e5e7eb' }}>

          {/* Name */}
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1f2937', margin: 0, marginBottom: '4px', lineHeight: 1.2, letterSpacing: '-0.03em' }}>
            {data.profile.name || '您的姓名'}
          </h1>
          <p style={{ fontSize: '13px', color: '#e63946', fontWeight: 500, margin: '0 0 24px 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {data.experience[0]?.position || '专业人才'}
          </p>

          {/* Contact */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#e63946', textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0, marginBottom: '12px' }}>
              联系方式
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
              {data.profile.email && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#e63946', fontSize: '10px' }}>&#9632;</span>
                <span>{data.profile.email}</span>
              </div>}
              {data.profile.phone && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#e63946', fontSize: '10px' }}>&#9632;</span>
                <span>{data.profile.phone}</span>
              </div>}
              {data.profile.location && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#e63946', fontSize: '10px' }}>&#9632;</span>
                <span>{data.profile.location}</span>
              </div>}
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '0 0 28px 0' }} />

          {/* Education */}
          {data.education.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#e63946', textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0, marginBottom: '14px' }}>
                教育背景
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937', margin: 0, marginBottom: '2px' }}>
                      {edu.school || '学校名称'}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, marginBottom: '2px' }}>
                      {edu.degree || '学位/专业'}
                    </p>
                    <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0, letterSpacing: '0.03em' }}>
                      {edu.startDate} — {edu.endDate}
                    </p>
                    {edu.description && (
                      <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.education.length > 0 && <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '0 0 28px 0' }} />}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#e63946', textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0, marginBottom: '14px' }}>
                专业技能
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {data.skills.map((skill, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#e63946', fontSize: '14px', fontWeight: 300 }}>—</span>
                    <span style={{ fontSize: '13px', color: '#374151' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ============ RIGHT CONTENT ============ */}
        <div style={{ padding: '40px 32px' }}>

          {/* Summary */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '14px', borderBottom: '2px solid #e63946', paddingBottom: '8px', display: 'inline-block' }}>
              个人简介
            </h2>
            <p style={{ fontSize: '13.5px', lineHeight: 1.8, color: '#4b5563', margin: 0 }}>
              {data.skills.slice(0, 5).join('、')}专业人士，拥有{data.experience.length}年{data.experience[0]?.position || '相关'}工作经验。
              擅长{data.skills.slice(0, 3).join('、')}等领域，具备优秀的分析能力和执行力。
            </p>
          </div>

          {/* Experience */}
          {data.experience.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '18px', borderBottom: '2px solid #e63946', paddingBottom: '8px', display: 'inline-block' }}>
                工作经历
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1f2937', margin: 0 }}>
                        {exp.company || '公司名称'}
                      </h3>
                      <span style={{ fontSize: '11px', color: '#e63946', fontWeight: 500, backgroundColor: 'rgba(230, 57, 70, 0.06)', padding: '2px 10px', border: '1px solid rgba(230, 57, 70, 0.15)' }}>
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#e63946', fontWeight: 500, margin: '4px 0 10px 0' }}>
                      {exp.position || '职位'}
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {exp.description.split('\n').filter(d => d.trim()).map((item, i) => (
                        <li key={i} style={{ fontSize: '13.5px', lineHeight: 1.7, color: '#4b5563', marginBottom: '4px', paddingLeft: '14px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#e63946' }}>&#8212;</span>
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
              <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, marginBottom: '18px', borderBottom: '2px solid #e63946', paddingBottom: '8px', display: 'inline-block' }}>
                项目经历
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {data.projects.map((proj) => (
                  <div key={proj.id} style={{ padding: '16px', border: '1px solid #f3f4f6', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937', margin: 0 }}>
                        {proj.name || '项目名称'}
                      </h3>
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: '#e63946', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          查看 &#8599;
                        </a>
                      )}
                    </div>
                    <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#6b7280', margin: 0 }}>
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
