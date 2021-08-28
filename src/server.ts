import appConfig from './config/app'
import app from './app'

const { environment, port } = appConfig
app.listen(port, () => {
  console.log(`Servidor iniciado na porta @ ${port}, Ambiente: ${environment}`)
})
