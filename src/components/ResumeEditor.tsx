import React from 'react'
import { ResumeData } from '../types/resume'
import { saveResume } from '../utils/storage'

interface ResumeEditorProps {
  data: ResumeData
  onDataChange: (data: ResumeData) => void
}

export default function ResumeEditor({ data, onDataChange }: ResumeEditorProps) {
  // Auto-save on every change
  React.useEffect(() => {
    saveResume(data)
  }, [data])

  const updateProfile = (field: keyof ResumeData['profile'], value: string) => {
    const newData = { ...data, profile: { ...data.profile, [field]: value } }
    onDataChange(newData)
    saveResume(newData)
  }

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    }
    const newData = { ...data, education: [...data.education, newEducation] }
    onDataChange(newData)
    saveResume(newData)
  }

  const updateEducation = (id: string, field: keyof ResumeData['education'][number], value: string) => {
    const updatedEducation = data.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    )
    const newData = { ...data, education: updatedEducation }
    onDataChange(newData)
    saveResume(newData)
  }

  const removeEducation = (id: string) => {
    const newData = { ...data, education: data.education.filter((edu) => edu.id !== id) }
    onDataChange(newData)
    saveResume(newData)
  }

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    }
    const newData = { ...data, experience: [...data.experience, newExperience] }
    onDataChange(newData)
    saveResume(newData)
  }

  const updateExperience = (id: string, field: keyof ResumeData['experience'][number], value: string) => {
    const updatedExperience = data.experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    )
    const newData = { ...data, experience: updatedExperience }
    onDataChange(newData)
    saveResume(newData)
  }

  const removeExperience = (id: string) => {
    const newData = { ...data, experience: data.experience.filter((exp) => exp.id !== id) }
    onDataChange(newData)
    saveResume(newData)
  }

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: '',
      description: '',
      link: '',
    }
    const newData = { ...data, projects: [...data.projects, newProject] }
    onDataChange(newData)
    saveResume(newData)
  }

  const updateProject = (id: string, field: keyof ResumeData['projects'][number], value: string) => {
    const updatedProject = data.projects.map((proj) =>
      proj.id === id ? { ...proj, [field]: value } : proj
    )
    const newData = { ...data, projects: updatedProject }
    onDataChange(newData)
    saveResume(newData)
  }

  const removeProject = (id: string) => {
    const newData = { ...data, projects: data.projects.filter((proj) => proj.id !== id) }
    onDataChange(newData)
    saveResume(newData)
  }

  const addSkill = () => {
    const newData = { ...data, skills: [...data.skills, ''] }
    onDataChange(newData)
    saveResume(newData)
  }

  const updateSkill = (index: number, value: string) => {
    const updatedSkills = [...data.skills]
    updatedSkills[index] = value
    const newData = { ...data, skills: updatedSkills }
    onDataChange(newData)
    saveResume(newData)
  }

  const removeSkill = (index: number) => {
    const newData = { ...data, skills: data.skills.filter((_, i) => i !== index) }
    onDataChange(newData)
    saveResume(newData)
  }

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          个人信息
        </h3>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="姓名"
            value={data.profile.name}
            onChange={(e) => updateProfile('name', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="email"
            placeholder="邮箱"
            value={data.profile.email}
            onChange={(e) => updateProfile('email', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="tel"
            placeholder="电话"
            value={data.profile.phone}
            onChange={(e) => updateProfile('phone', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="text"
            placeholder="城市"
            value={data.profile.location}
            onChange={(e) => updateProfile('location', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="text"
            placeholder="LinkedIn (可选)"
            value={data.profile.linkedin}
            onChange={(e) => updateProfile('linkedin', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="text"
            placeholder="GitHub (可选)"
            value={data.profile.github}
            onChange={(e) => updateProfile('github', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Education */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            教育经历
          </h3>
          <button
            onClick={addEducation}
            className="text-xs text-indigo-600 hover:text-indigo-800"
          >
            + 添加
          </button>
        </div>
        <div className="space-y-3">
          {data.education.map((edu) => (
            <div key={edu.id} className="bg-white p-3 rounded-md border border-gray-200 space-y-2">
              <input
                type="text"
                placeholder="学校名称"
                value={edu.school}
                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="学位/专业"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="开始时间"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  className="w-1/2 px-2 py-1 text-sm border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="结束时间"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  className="w-1/2 px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
              <textarea
                placeholder="主修课程/成绩/荣誉 (可选)"
                value={edu.description}
                onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded h-20"
              />
              <button
                onClick={() => removeEducation(edu.id)}
                className="text-xs text-red-500 hover:text-red-700 mt-1"
              >
                删除
              </button>
            </div>
          ))}
          {data.education.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-2">暂无教育经历，点击"添加"添加</p>
          )}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            工作经历
          </h3>
          <button
            onClick={addExperience}
            className="text-xs text-indigo-600 hover:text-indigo-800"
          >
            + 添加
          </button>
        </div>
        <div className="space-y-3">
          {data.experience.map((exp) => (
            <div key={exp.id} className="bg-white p-3 rounded-md border border-gray-200 space-y-2">
              <input
                type="text"
                placeholder="公司名称"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="职位"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="开始时间"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  className="w-1/2 px-2 py-1 text-sm border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="结束时间"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  className="w-1/2 px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
              <textarea
                placeholder="工作描述"
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded h-24"
              />
              <button
                onClick={() => removeExperience(exp.id)}
                className="text-xs text-red-500 hover:text-red-700 mt-1"
              >
                删除
              </button>
            </div>
          ))}
          {data.experience.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-2">暂无工作经历，点击"添加"添加</p>
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            技能
          </h3>
          <button
            onClick={addSkill}
            className="text-xs text-indigo-600 hover:text-indigo-800"
          >
            + 添加
          </button>
        </div>
        <div className="space-y-2">
          {data.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                placeholder={`技能 ${index + 1}`}
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md"
              />
              <button
                onClick={() => removeSkill(index)}
                className="px-2 py-2 text-xs text-red-500 hover:text-red-700 bg-red-50 rounded-md"
              >
                ×
              </button>
            </div>
          ))}
          {data.skills.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-2">暂无技能，点击"添加"添加</p>
          )}
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            项目经历
          </h3>
          <button
            onClick={addProject}
            className="text-xs text-indigo-600 hover:text-indigo-800"
          >
            + 添加
          </button>
        </div>
        <div className="space-y-3">
          {data.projects.map((proj) => (
            <div key={proj.id} className="bg-white p-3 rounded-md border border-gray-200 space-y-2">
              <input
                type="text"
                placeholder="项目名称"
                value={proj.name}
                onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <textarea
                placeholder="项目描述"
                value={proj.description}
                onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded h-16"
              />
              <input
                type="text"
                placeholder="项目链接 (可选)"
                value={proj.link}
                onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <button
                onClick={() => removeProject(proj.id)}
                className="text-xs text-red-500 hover:text-red-700 mt-1"
              >
                删除
              </button>
            </div>
          ))}
          {data.projects.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-2">暂无项目经历，点击"添加"添加</p>
          )}
        </div>
      </div>
    </div>
  )
}
