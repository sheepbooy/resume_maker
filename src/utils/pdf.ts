import { ResumeData } from '../types/resume'
import html2pdf from 'html2pdf.js'

// 所有模板 ID 映射
const TEMPLATES: Record<string, string> = {
  classic: 'resume-classic',
  modern: 'resume-modern',
  minimal: 'resume-minimal',
  vertical: 'resume-vertical',
  creative: 'resume-creative',
  twoColumn: 'resume-two-column',
  professional: 'resume-professional',
  executive: 'resume-executive',
  modernClean: 'resume-modernClean',
  tech: 'resume-tech',
  simple: 'resume-simple',
  gradient: 'resume-gradient',
  academic: 'resume-academic',
}

export function exportToPDF(template: string, data: ResumeData, event?: React.MouseEvent): void {
  const containerId = TEMPLATES[template]
  const element = document.getElementById(containerId)

  if (!element) {
    console.error(`Resume container with id "${containerId}" not found`)
    return
  }

  // 阻止事件冒泡
  event?.stopPropagation()

  const opt = {
    margin: 0.5,
    filename: `${data.profile.name || 'resume'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3, useCORS: true },
    jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: 'avoid-all' },
  }

  html2pdf().set(opt).from(element).save()
}
