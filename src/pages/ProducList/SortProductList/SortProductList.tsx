export default function SortProductList() {
  return (
    <div className='px-3 py-4 bg-gray-300/40'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div className=''>Sắp xếp theo</div>
          <button className='h-8 px-4 text-sm text-center text-white capitalize bg-primary hover:bg-primary'>
            Phổ biến
          </button>
          <button className='h-8 px-4 text-sm text-center text-black capitalize transition-all bg-white hover:bg-primary hover:text-white'>
            Mới nhất
          </button>
          <button className='h-8 px-4 text-sm text-center text-black capitalize transition-all bg-white hover:bg-primary hover:text-white'>
            Bán chạy
          </button>
          <select className='h-8 px-4 text-sm text-left text-black capitalize transition-all bg-white' defaultValue=''>
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến cao</option>
            <option value='price:asc'>Giá: Cao đến thấp</option>
          </select>
        </div>

        <div className='flex items-center'>
          <div>
            <span className='text-primary'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <button className='h-8 px-3 transition-all rounded-tl-sm rounded-bl-sm cursor-not-allowed bg-white/60 hover:bg-slate-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='h-8 px-3 transition-all rounded-tl-sm rounded-bl-sm cursor-not-allowed bg-white/60 hover:bg-slate-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
