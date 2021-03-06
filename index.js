const express = require('express');
const server = express();
const helmet = require('helmet');

const db = require('./data/dbConfig.js');

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send("server working");
})

server.get('/api/projects', async (req, res) => {
  try {
    const projects = await db('projects');
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
})

server.get('/api/actions', async (req, res) => {
  try {
    const actions = await db('actions');
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
})

server.get('/api/projects/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const project = await db('projects').where({ id }).first();
    if (project.finished === 0) {
      project.finished = false;
    } else {
      project.finished = true;
    }
    const actions = await db('actions').where({ project_id: id })
    actions.map(action => {
      if (action.action_finished === 0) {
        return action.action_finished = false;
      } else {
        return action.action_finished = true;
      }
    })
    project.actions = actions;
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
})

server.post('/api/projects', async (req, res) => {
  try {
    const [id] = await db('projects').insert(req.body);
    const project = await db('projects').where({ id }).first();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
})

server.post('/api/actions', async (req, res) => {
  try {
    const [id] = await db('actions').insert(req.body);
    const action = await db('actions').where({ id }).first();
    res.status(201).json(action);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n** API running on http://localhost:${port} **\n`)
})