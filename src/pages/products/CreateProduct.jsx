const Product = () => {
  return (
    <>
      <header className='bg-blue-500 text-white'>
        <div className='container mx-auto p-4 flex items-center'>
          <svg
            className='w-5 h-5 mr-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>

          <h1 className='text-2xl font-bold'>Create New Product</h1>
        </div>
      </header>
      <h2 className='text-center text-xl mt-32'>Welcome to the Create Product page!</h2>
    </>
  );
};

export default Product;
