const express = require('express')
const cors = require('cors')
const { uuid } = require('uuidv4')

const app = express()

app.use(express.json())
app.use(cors())

const repositories = []

app.get('/repositories', (request, response) => {
  return response.send(repositories)
})

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository)

  return response.status(201).send(repository)
})

app.put('/repositories/:id', (request, response) => {
  const { title, url, techs } = request.body
  const { id } = request.params

  const repoIndex = repositories.findIndex(repo => repo.id === id)

  if (repoIndex < 0) {
    return response.status(400).send({ error: 'Repository not found' })
  }

  repositories[repoIndex] = { ...repositories[repoIndex], title, url, techs }

  return response.send(repositories[repoIndex])
})

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params

  const repoIndex = repositories.findIndex(repo => repo.id === id)

  if (repoIndex < 0) {
    return response.status(400).send({ error: 'Repository not found' })
  }

  repositories.splice(repoIndex, 1)

  return response.status(204).send()
})

app.post('/repositories/:id/like', (request, response) => {
  const { id } = request.params

  const repoIndex = repositories.findIndex(repo => repo.id === id)

  if (repoIndex < 0) {
    return response.status(400).send({ error: 'Repository not found' })
  }

  repositories[repoIndex] = {
    ...repositories[repoIndex],
    likes: repositories[repoIndex].likes + 1
  }

  return response.send(repositories[repoIndex])
})

module.exports = app
