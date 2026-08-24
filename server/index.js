import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const PORT = Number(process.env.PORT) || 3001
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/workwixa'

function getDbName(uri) {
  try {
    const path = new URL(uri).pathname.replace(/^\//, '')
    return path || 'workwixa'
  } catch {
    return 'workwixa'
  }
}

const app = express()
app.use(cors())
app.use(express.json({ limit: '32kb' }))

let client
let contacts

async function connectDb() {
  client = new MongoClient(MONGO_URI)
  await client.connect()
  const dbName = getDbName(MONGO_URI)
  contacts = client.db(dbName).collection('contacts')
  await contacts.createIndex({ createdAt: -1 })
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  try {
    const name = String(req.body?.name || '').trim()
    const email = String(req.body?.email || '').trim().toLowerCase()
    const company = String(req.body?.company || '').trim()
    const message = String(req.body?.message || '').trim()

    if (!name || !email || !company) {
      return res.status(400).json({ ok: false, error: 'Name, email, and company are required.' })
    }
    if (!isEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' })
    }
    if (name.length > 120 || company.length > 160 || message.length > 4000) {
      return res.status(400).json({ ok: false, error: 'One or more fields are too long.' })
    }

    const doc = {
      name,
      email,
      company,
      message,
      createdAt: new Date(),
    }

    await contacts.insertOne(doc)
    return res.status(201).json({ ok: true })
  } catch (error) {
    console.error('Contact submit failed:', error)
    return res.status(500).json({ ok: false, error: 'Could not save your request. Please try again.' })
  }
})

async function start() {
  await connectDb()
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Contact API listening on port ${PORT}`)
  })
}

start().catch((error) => {
  console.error('Failed to start API:', error)
  process.exit(1)
})
