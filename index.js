const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')

const PORT = config.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Server running on port ${PORT}`)
})