import AppConfig from '../../app.config'

const isDevelopEnvironment = (): boolean => {
  return AppConfig.deployEnvironment === 'dev'
}

export default isDevelopEnvironment
