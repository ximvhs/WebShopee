// Để bắt lỗi khi nếu lỡ nhập sai kiểu dữ liệu của rules
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: 'Email bắt buộc',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không hợp lệ'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 đến 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 đến 160 ký tự'
    }
  },
  password: {
    required: 'Password bắt buộc',
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 đến 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 đến 160 ký tự'
    }
  },
  confirm_password: {
    required: 'Nhập lại password bắt buộc',
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 đến 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 đến 160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
        : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .required('Email bắt buộc')
    .email('')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('password bắt buộc')
    .email('')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password bắt buộc')
    .email('')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không hớp')
})

export type Schema = yup.InferType<typeof schema>
