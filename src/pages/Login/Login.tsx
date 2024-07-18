import { Link } from 'react-router-dom'
import Input from '../../components/input/Input'
import InputPassWord from '../../components/input/InputPassWord'
import Button from '../../components/button'
import RegisterFace from '../../components/register'
import RegisterGG from '../../components/register/RegisterGG'
import { getRules, schema } from '../../utils/rules'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const rules = getRules(getValues)

  const onSubmit = handleSubmit((value) => {
    console.log('value: ', value)
  })

  return (
    <div className='bg-primary'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-16 lg:pr-10'>
          <div className="bg-[url('./bg-shopee.png')] lg:col-span-3 lg:col-start-1 bg-contain bg-no-repeat bg-center"></div>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng Nhập</div>
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
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                rules={rules.password}
              ></Input>
              {/* <InputPassWord placeholder='Password'></InputPassWord> */}
              <p className='float-right text-[12px] text-[#05a] mt-2 hover:opacity-80 cursor-pointer transition-all'>
                Quên mật khẩu
              </p>
              <Button className='my-5'>Đăng nhập</Button>
              <div className='flex items-center'>
                <div className='bg-[#dbdbdb] flex-1 h-[1px] w-full'></div>
                <span className='px-5 text-[#dbdbdb] text-sm'>HOẶC</span>
                <div className='bg-[#dbdbdb] flex-1 h-[1px] w-full'></div>
              </div>
              <div className='flex gap-3 mt-5'>
                <RegisterFace></RegisterFace>
                <RegisterGG></RegisterGG>
              </div>
              <div className='flex justify-center mt-5'>
                <span className='text-sm text-gray-300'>Bạn chưa có tài khoản?</span>
                <Link className='ml-2 text-sm hover:underline text-primary' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
