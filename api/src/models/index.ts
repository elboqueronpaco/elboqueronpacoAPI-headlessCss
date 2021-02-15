// Dependencies
import { Sequelize } from 'sequelize'


//Util
import { hasKey } from 'fogg-utils'

// Configuration
import { $db } from '../../config'

// Interfaces
import { iModels } from '../interfaces'

// DB Connection
const { dialect, port, host, database, username, password } = $db
const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri)

// Models
const models: iModels = {
  App: require('./App').default(sequelize, Sequelize),
  User: require('./User').default(sequelize, Sequelize),
  sequelize
}

// Relationships
Object.keys(models).forEach((modelName: string) => {
  if (hasKey(models, modelName)) {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  }
})

export default models
