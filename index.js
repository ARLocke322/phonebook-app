const app = require('./app') // the actual Express application
const logger = require('./utils/logger')

app.listen("3000", () => {
  logger.info(`Server running on port 3000`)
})