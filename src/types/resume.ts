export interface Profile {
  name: string
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
}

export interface EducationItem {
  id: string
  school: string
  degree: string
  startDate: string
  endDate: string
  description?: string
}

export interface ExperienceItem {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

export interface ProjectItem {
  id: string
  name: string
  description: string
  link?: string
}

export interface ResumeData {
  profile: Profile
  education: EducationItem[]
  experience: ExperienceItem[]
  skills: string[]
  projects: ProjectItem[]
}
