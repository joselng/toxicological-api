import { Sample } from '../entities/Sample'
import { CreateSampleDTO } from '../dtos/CreateSampleDTO'

export interface ISampleRepository {
  create(data: CreateSampleDTO): Promise<Sample>
  getAll(): Promise<Sample[]>
  findByCode(code: string): Promise<Sample>
  save(data: Sample): Promise<Sample>
}
