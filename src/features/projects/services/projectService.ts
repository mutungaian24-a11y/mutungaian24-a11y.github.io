export const projectService = {
  async getAllProjects() {
    const res = await fetch('/api/projects')
    if (!res.ok) return []
    return res.json()
  },

  async getProject(id: string) {
    const res = await fetch(`/api/projects/${id}`)
    if (!res.ok) return null
    return res.json()
  },
}
