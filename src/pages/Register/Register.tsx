import { Link } from 'react-router-dom'
import Button from '../../components/button'
import InputPassWord from '../../components/input/InputPassWord'
import RegisterFace from '../../components/register'
import RegisterGG from '../../components/register/RegisterGG'
import Input from '../../components/input/Input'

export default function Register() {
  return (
    <div className='bg-primary'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-16 lg:pr-10'>
          <div className="bg-[url('./bg-shopee.png')] lg:col-span-3 lg:col-start-1 bg-contain bg-no-repeat bg-center"></div>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm'>
              <div className='text-2xl'>Đăng Ký</div>
              <Input name='Email' placeholder='Email'></Input>
              <InputPassWord placeholder='Password'></InputPassWord>
              <InputPassWord placeholder='Confirn Password'></InputPassWord>
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
