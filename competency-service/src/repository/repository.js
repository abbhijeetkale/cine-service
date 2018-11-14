'use strict'

const repository = (db) => {
  const collection = db.collection('competency')

  const getAllCompetency = () => {
    return new Promise((resolve, reject) => {
      const competencies = []
      //const cursor = collection.find({}, {title: 1, id: 1})
      const cursor = collection.find({}, {})
      const addCompetency = (competency) => {
        console.log("Adding competency")
        competencies.push(competency)
      }
      const sendCompetencies = (err) => {
        if (err) {
          reject(new Error('An error occurred fetching all Competencies, err:' + err))
        }
        resolve(competencies.slice())
      }
      cursor.forEach(addCompetency, sendCompetencies)
    })
  }

  return Object.create({
    getAllCompetency,
    connect
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(connection))
  })
}

module.exports = Object.assign({}, {connect})
