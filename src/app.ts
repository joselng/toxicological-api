import mongoose from 'mongoose'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import appConfig from './config/app'
import AppError from './errors/AppError'
import routes from './routes'

class App {
  IN_PRODUCTION: boolean;

  public server: express.Application;

  public constructor () {
    this.IN_PRODUCTION = appConfig.environment === 'production'
    this.server = express()
    this.middlewares()
    this.database()
    this.routes()
    this.errorHandler()
  }

  private errorHandler (): void {
    this.server.use(
      (error: Error, request: Request, response: Response, _: NextFunction) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
          })
        }
        console.error(error)
        return response.status(500).json({
          status: 'error',
          message: 'Internal Server Error'
        })
      }
    )
  }

  private middlewares (): void {
    this.server.use(cors())
    this.server.use(express.json())
  }

  private async database (): Promise<void> {
    await mongoose.connect(process.env.DB_HOST)
      .then(() => {
        return console.info('MongoDB Atlas - Conectado com sucesso!')
      })
      .catch(error => {
        console.error('Erro ao conectar com banco de dados: ', error)
        return process.exit(1)
      })
  }

  private routes (): void {
    this.server.use(routes)
  }
}

export default new App().server
