import React from 'react'
import Input from '../../atoms/Input/Input'
import styles from './FormField.module.css'

interface FormFieldProps {
  label: string
  name?: string
  placeholder?: string
}

export const FormField: React.FC<FormFieldProps> = ({ label, name, placeholder }) => {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <Input name={name} placeholder={placeholder} />
    </label>
  )
}

export default FormField
