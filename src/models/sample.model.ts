import mongoose, { Schema, Document } from 'mongoose'

export interface ISample extends Document {
  'codigo': string,
  'cocaina'?: number,
  'anfetamina'?: number,
  'metanfetamina'?: number,
  'mda'?: number,
  'mdma'?: number,
  'thc'?: number,
  'morfina'?: number,
  'codeina'?: number,
  'heroina'?: number,
  'benzoilecgonina'?: number,
  'cocaetileno'?: number,
  'norcocaina'?: number,
}

const SampleSchema: Schema = new Schema({
  codigo: { type: String, required: true, unique: true },
  cocaina: { type: Number, required: false },
  anfetamina: { type: Number, required: false },
  metanfetamina: { type: Number, required: false },
  mda: { type: Number, required: false },
  mdma: { type: Number, required: false },
  thc: { type: Number, required: false },
  morfina: { type: Number, required: false },
  codeina: { type: Number, required: false },
  heroina: { type: Number, required: false },
  benzoilecgonina: { type: Number, required: false },
  cocaetileno: { type: Number, required: false },
  norcocaina: { type: Number, required: false }
})

export default mongoose.model<ISample>('Sample', SampleSchema)
