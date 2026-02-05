import fs from 'fs'
import path from 'path'

const data = [
  { id: '1', title: 'Project One', description: 'Seeded project' },
]

fs.writeFileSync(path.join(process.cwd(), 'backend', 'public', 'seed-projects.json'), JSON.stringify(data, null, 2))
console.log('Wrote seed data to backend/public/seed-projects.json')
