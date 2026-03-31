import { ResumeData } from '../types/resume'

const STORAGE_KEY = 'resume-maker-data'

export function saveResume(data: ResumeData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save resume:', error)
  }
}

export function loadResume(): ResumeData | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error('Failed to load resume:', error)
    return null
  }
}

export function clearResume(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear resume:', error)
  }
}
