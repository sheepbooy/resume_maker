import { ResumeData } from '../types/resume'

interface CreativeResumeProps {
  data: ResumeData
}

export default function CreativeResume({ data }: CreativeResumeProps) {
  return (
    <div className="creative-resume" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div className="mb-6" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="absolute top-0 right-0 w-32 h-32" style={{ backgroundColor: '#f97316', borderRadius: '50%', transform: 'translate(30%, -30%)', opacity: 0.1 }}></div>
        <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">{data.profile.name || '您的姓名'}</h1>
        <p className="text-gray-600 font-medium text-sm">{data.profile.location || '工作地点'}</p>
      </div>

      {/* Contact INFO */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div style={{ padding: '12px', backgroundColor: '#fff7ed', borderRadius: '6px' }}>
          <p className="text-xs text-[#ea580c] font-semibold uppercase mb-1">邮箱</p>
          <p className="text-gray-900 text-sm font-medium break-all">{data.profile.email || 'your@email.com'}</p>
        </div>
        <div style={{ padding: '12px', backgroundColor: '#fff7ed', borderRadius: '6px' }}>
          <p className="text-xs text-[#ea580c] font-semibold uppercase mb-1">电话</p>
          <p className="text-gray-900 text-sm font-medium">{data.profile.phone || '138-0000-0000'}</p>
        </div>
      </div>

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 border-b-2 border-[#f97316] pb-1">核心技能</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.slice(0, 8).map((skill, index) => (
              <span key={index} style={{ padding: '6px 12px', backgroundColor: '#f97316', color: 'white', fontSize: '12px', fontWeight: '600', borderRadius: '9999px' }}>
                {skill || '技能'}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">工作经历</h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{exp.company || '公司名称'}</h3>
                  <span className="text-gray-500 text-xs">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[#f97316] font-semibold text-sm mb-2">{exp.position || '职位'}</p>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">项目经历</h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="font-bold text-gray-900 text-sm">{proj.name || '项目名称'}</h3>
                <p className="text-gray-700 text-sm mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
