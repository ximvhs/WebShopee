export default function Register() {
  return (
    <div className='bg-primary'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm'>
              <div className='text-2xl'>Đăng Ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'>Lỗi đăng nhập</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'>Lỗi đăng nhập</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='confirm_password'
                  placeholder='Confirm password'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'>Lỗi đăng nhập</div>
              </div>
              <div className='mt-3'>
                <button className='w-full px-2 py-4 text-sm text-center text-white uppercase transition bg-red-500 rounded-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
