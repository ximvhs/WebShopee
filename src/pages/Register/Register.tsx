import { Link } from 'react-router-dom'
import Button from '../../components/button'
// import InputPassWord from '../../components/input/InputPassWord'
import Input from '../../components/input/Input'
import RegisterFace from '../../components/register'
import RegisterGG from '../../components/register/RegisterGG'
import { useForm } from 'react-hook-form'
import { getRules, schema } from '../..//utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const rules = getRules(getValues)

  const onSubmit = handleSubmit((data) => {
    const password = getValues('password')
    console.log('password: ', password)
  })

  return (
    <div className='bg-primary'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-16 lg:pr-10'>
          <div className="bg-[url('./bg-shopee.png')] lg:col-span-3 lg:col-start-1 bg-contain bg-no-repeat bg-center"></div>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-2'
                errorMessage={errors.email?.message}
                placeholder='Email'
                rules={rules.email}
              ></Input>
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-0'
                errorMessage={errors.password?.message}
                placeholder='Password'
                rules={rules.password}
                autoComplete='on'
              ></Input>
              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-0'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm password'
                rules={rules.confirm_password}
                autoComplete='on'
              ></Input>
              <Button className='my-5'>Đăng Ký</Button>
              <div className='flex items-center'>
                <div className='bg-[#dbdbdb] flex-1 h-[1px] w-full'></div>
                <span className='px-5 text-[#dbdbdb] text-sm'>HOẶC</span>
                <div className='bg-[#dbdbdb] flex-1 h-[1px] w-full'></div>
              </div>
              <div className='flex gap-3 mt-5'>
                <RegisterFace></RegisterFace>
                <RegisterGG></RegisterGG>
              </div>
              <div className='mt-5 text-[12px] text-center'>
                <span className='text-gray-300 '>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</span>
                <span className='ml-2 transition-all cursor-pointer text-primary hover:opacity-80'>
                  Điều khoản dịch vụ
                </span>
                <span> &</span>
                <span className='ml-2 transition-all cursor-pointer text-primary hover:opacity-80'>
                  Chính sách bảo mật
                </span>
              </div>
              <div className='flex justify-center mt-5'>
                <span className='text-sm text-gray-300'>Bạn chưa có tài khoản?</span>
                <Link className='ml-2 text-sm hover:underline text-primary' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
