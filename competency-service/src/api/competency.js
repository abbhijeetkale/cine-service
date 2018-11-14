'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const {repo} = options

  app.get('/competency', (req, res, next) => {
    console.log("hitting competency");
    repo.getAllCompetency().then(competencies => {
      res.status(status.OK).json(competencies)
    }).catch(next)
  })
}
