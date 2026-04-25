import { useMemo, useState } from 'react'

interface Template {
  id: string
  name: string
  style: string
  description: string
  previewClass: string
  gradient: string
  icon: string
}

const TEMPLATES: Template[] = [
  {
    id: 'classic',
    name: '经典模板',
    style: '传统',
    description: '编辑风格，暖纸底色，精致装饰规则',
    previewClass: 'from-amber-50 to-yellow-50',
    gradient: 'linear-gradient(135deg, #faf6f0, #f0ebe0)',
    icon: '✦',
  },
  {
    id: 'modern',
    name: '现代简约',
    style: '现代',
    description: '紫罗兰色调，干净品牌感，当代布局',
    previewClass: 'from-violet-50 to-indigo-50',
    gradient: 'linear-gradient(135deg, #f5f3ff, #eef2ff)',
    icon: '◆',
  },
  {
    id: 'vertical',
    name: '垂直导航',
    style: '现代',
    description: '深色侧边栏，坚排技能，建筑感网格',
    previewClass: 'from-slate-700 to-slate-900',
    gradient: 'linear-gradient(135deg, #334155, #0f172a)',
    icon: '◈',
  },
  {
    id: 'creative',
    name: '创意模板',
    style: '创意',
    description: '深色模式，珊瑚橙点缀，非对称设计',
    previewClass: 'from-slate-900 to-slate-800',
    gradient: 'linear-gradient(135deg, #0f172a, #1e293b)',
    icon: '◆',
  },
  {
    id: 'two-column',
    name: '双栏布局',
    style: '现代',
    description: '瑞士网格风格，红色点缀，信息密集',
    previewClass: 'from-red-50 to-orange-50',
    gradient: 'linear-gradient(135deg, #fef2f2, #fff7ed)',
    icon: '◈',
  },
  {
    id: 'executive',
    name: 'Executive',
    style: '商务',
    description: '深色奢华风，金色镶边，高管气质',
    previewClass: 'from-yellow-900 to-slate-900',
    gradient: 'linear-gradient(135deg, #292524, #0f172a)',
    icon: '✦',
  },
  {
    id: 'modernClean',
    name: '北欧简洁',
    style: '极简',
    description: '鼠尾草绿点缀，斯堪的纳维亚极简风',
    previewClass: 'from-emerald-50 to-teal-50',
    gradient: 'linear-gradient(135deg, #ecfdf5, #f0fdfa)',
    icon: '◇',
  },
  {
    id: 'minimal',
    name: '极简模板',
    style: '极简',
    description: '纯黑白，等宽字体，粗野主义风格',
    previewClass: 'from-gray-100 to-gray-200',
    gradient: 'linear-gradient(135deg, #f5f5f5, #e5e5e5)',
    icon: '▣',
  },
  {
    id: 'professional',
    name: '商务模板',
    style: '传统',
    description: '海军蓝点缀，温暖米色底，专业稳重',
    previewClass: 'from-blue-50 to-indigo-50',
    gradient: 'linear-gradient(135deg, #eff6ff, #eef2ff)',
    icon: '▪',
  },
  {
    id: 'tech',
    name: '技术模板',
    style: '现代',
    description: '代码暗色主题，终端美学，绿色点缀',
    previewClass: 'from-gray-900 to-green-950',
    gradient: 'linear-gradient(135deg, #0d1117, #0f1a0f)',
    icon: '▸',
  },
  {
    id: 'simple',
    name: '呼吸单列',
    style: '极简',
    description: '超大留白，呼吸感排版，极净风格',
    previewClass: 'from-stone-100 to-stone-200',
    gradient: 'linear-gradient(135deg, #fafaf9, #e7e5e4)',
    icon: '○',
  },
  {
    id: 'gradient',
    name: '渐变模板',
    style: '现代',
    description: '渐变色块分区，艺术流畅，色彩丰富',
    previewClass: 'via-purple-50 from-pink-50 to-cyan-50',
    gradient: 'linear-gradient(135deg, #fdf2f8, #f5f3ff, #ecfeff)',
    icon: '◐',
  },
  {
    id: 'academic',
    name: '学术模板',
    style: '经典',
    description: '羊皮纸质感，酒红点缀，学院风范',
    previewClass: 'from-yellow-50 to-red-50',
    gradient: 'linear-gradient(135deg, #fefcf5, #fef2f2)',
    icon: '❦',
  },
  {
    id: 'elegant',
    name: '法式优雅',
    style: '经典',
    description: '巴黎风尚，玫瑰点缀，深绿文字',
    previewClass: 'from-rose-50 to-green-50',
    gradient: 'linear-gradient(135deg, #fdf2f8, #f0fdf4)',
    icon: '❧',
  },
  {
    id: 'clean',
    name: '清爽极简',
    style: '极简',
    description: '冰蓝底色，冷钢文字，极致清爽',
    previewClass: 'from-sky-50 to-blue-50',
    gradient: 'linear-gradient(135deg, #f0f9ff, #eff6ff)',
    icon: '⊹',
  },
]

const STYLE_COLORS: Record<string, string> = {
  '全部': 'bg-gray-900 text-white',
  '传统': 'bg-amber-600 text-white',
  '现代': 'bg-violet-600 text-white',
  '创意': 'bg-rose-600 text-white',
  '商务': 'bg-slate-700 text-white',
  '极简': 'bg-teal-600 text-white',
  '经典': 'bg-stone-600 text-white',
}

interface TemplateGridProps {
  selectedTemplate: string
  onSelectTemplate: (templateId: string) => void
}

function TemplateCard({ template, isSelected, onClick }: { template: Template; isSelected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
        isSelected
          ? 'ring-2 ring-offset-2 ring-violet-600 shadow-lg scale-[1.02]'
          : 'hover:shadow-md hover:scale-[1.01] border border-gray-200/60'
      }`}
    >
      {/* Preview Banner */}
      <div
        className="h-24 relative flex items-center justify-center"
        style={{ background: template.gradient }}
      >
        <div className={`text-3xl ${isSelected ? 'opacity-100 scale-110' : 'opacity-40'} transition-all duration-300`}>
          {template.icon}
        </div>
        {isSelected && (
          <div className="absolute top-2 right-2 w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 bg-white">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-semibold text-gray-900">{template.name}</span>
          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${STYLE_COLORS[template.style] || 'bg-gray-100 text-gray-700'}`}>
            {template.style}
          </span>
        </div>
        <p className="text-[11px] text-gray-500 leading-relaxed">{template.description}</p>
      </div>
    </div>
  )
}

export default function TemplateGrid({ selectedTemplate, onSelectTemplate }: TemplateGridProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStyle, setSelectedStyle] = useState<string>('全部')

  const styles = useMemo(() => {
    const uniqueStyles = Array.from(new Set(TEMPLATES.map((t) => t.style)))
    return ['全部', ...uniqueStyles]
  }, [])

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((template) => {
      const matchesSearch =
        template.name.includes(searchTerm) || template.description.includes(searchTerm)
      const matchesStyle = selectedStyle === '全部' || template.style === selectedStyle
      return matchesSearch && matchesStyle
    })
  }, [searchTerm, selectedStyle])

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/60 p-4 shadow-sm">
      <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
        选择模板
      </h2>

      {/* Search */}
      <div className="mb-3">
        <div className="relative">
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="搜索模板..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 bg-white/80 transition-all"
          />
        </div>
      </div>

      {/* Style Filter */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => setSelectedStyle(style)}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-all ${
              selectedStyle === style
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {style}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            isSelected={selectedTemplate === template.id}
            onClick={() => onSelectTemplate(template.id)}
          />
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p className="text-sm">没有找到匹配的模板</p>
        </div>
      )}
    </div>
  )
}
