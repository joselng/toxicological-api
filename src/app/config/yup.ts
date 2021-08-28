import * as yup from 'yup'

let path: string
let min, max, length: number
let values: string

yup.setLocale({
  string: {
    email: 'Informe um email válido',
    min: `${path}: valor muito curto (mí­nimo ${min} caracteres)`,
    max: `${path}: valor muito longo (máximo ${max} caracteres)`,
    matches: `${path}: valor inválido, verifique o formato esperado`,
    length: `${path}: deve conter exatamente ${length} caracteres`
  },
  mixed: {
    required: `${path} é um campo obrigatório`,
    oneOf: `${path} deve ser um dos seguintes valores [${values}]`
  }
})

export default yup
