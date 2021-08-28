import { Sample } from '../entities/Sample'
import { SampleDTO } from '../dtos/SampleDTO'

export interface ISampleRepository {
  create(data: SampleDTO): Promise<Sample>
  getAll(): Promise<Sample[]>
  findByCode(code: string): Promise<Sample>
  save(data: Sample): Promise<Sample>
}
