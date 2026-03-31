import { useMemo, useState } from 'react'

interface Template {
  id: string
  name: string
  style: string
  description: string
  previewClass: string
}

const TEMPLATES: Template[] = [
  {
    id: 'classic',
    name: '经典模板',
    style: '传统',
    description: '适合传统行业，左右分栏布局',
    previewClass: 'bg-gray-50',
  },
  {
    id: 'vertical',
    name: '垂直导航',
    style: '现代',
    description: '左侧技能竖排，独特的侧边栏设计',
    previewClass: 'bg-gradient-to-br from-indigo-600 to-purple-600',
  },
  {
    id: 'creative',
    name: '创意模板',
    style: '创意',
    description: '橙色主题，非对称设计，突出个性',
    previewClass: 'bg-orange-50',
  },
  {
    id: 'two-column',
    name: '双栏布局',
    style: '现代',
    description: '信息密集，高效利用空间',
    previewClass: 'bg-white',
  },
  {
    id: 'executive',
    name: 'Executive',
    style: '商务',
    description: '高管风格，带头像的现代商务模板',
    previewClass: 'bg-slate-50',
  },
  {
    id: 'modernClean',
    name: '现代简洁',
    style: '极简',
    description: '干净排版，箭头列表，易于阅读',
    previewClass: 'bg-white',
  },
  {
    id: 'minimal',
    name: '极简模板',
    style: '极简',
    description: '黑白配色，最简设计，内容为王',
    previewClass: 'bg-white',
  },
  {
    id: 'professional',
    name: '商务模板',
    style: '传统',
    description: '稳重专业，适合管理层',
    previewClass: 'bg-slate-50',
  },
  {
    id: 'tech',
    name: '技术模板',
    style: '现代',
    description: '黑色主题，代码风格，适合程序员',
    previewClass: 'bg-gray-900 text-white',
  },
  {
    id: 'simple',
    name: '简洁单列',
    style: '极简',
    description: '最简设计，重点突出个人经历',
    previewClass: 'bg-white',
  },
  {
    id: 'gradient',
    name: '渐变模板',
    style: '现代',
    description: '多色渐变，视觉吸引',
    previewClass: 'bg-gradient-to-r from-blue-500 to-teal-400',
  },
  {
    id: 'academic',
    name: '学术模板',
    style: '经典',
    description: '适合教育/科研背景，serif 字体',
    previewClass: 'bg-white',
  },
]

interface TemplateGridProps {
  selectedTemplate: string
  onSelectTemplate: (templateId: string) => void
}

function TemplateCard({ template, isSelected, onClick }: { template: Template; isSelected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg border-2 transition-all duration-200 ${
        isSelected
          ? 'border-indigo-600 ring-2 ring-indigo-200'
          : 'border-gray-200 hover:border-indigo-400 hover:shadow-md'
      }`}
    >
      <div className={`h-20 rounded-t-lg ${template.previewClass} flex items-center justify-center`}>
        <span className="text-white font-medium text-sm px-2">{template.name}</span>
      </div>
      <div className="p-3 bg-white">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-indigo-600">{template.style}</span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2">{template.description}</p>
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
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">选择模板</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="搜索模板..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Style Filter */}
      <div className="mb-4 flex flex-wrap gap-2">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => setSelectedStyle(style)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedStyle === style
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {style}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-2 gap-3">
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
        <div className="text-center py-8 text-gray-500">
          <p>没有找到匹配的模板</p>
        </div>
      )}
    </div>
  )
}
