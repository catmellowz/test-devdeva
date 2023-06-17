export default function Pagination({ totalPage }) {
  const totalPageArray = new Array(totalPage)
    .fill()
    .map((_, index) => index + 1);
  console.log(totalPageArray);

  return (
    <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-end'>
        <div>
          <nav
            className='isolate inline-flex -space-x-px '
            aria-label='Pagination'
          >
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 text-gray-400 '
            >
              <div>{'<'}</div>
            </a>
            {totalPageArray.map((e) => (
              <a
                key={e}
                href='#'
                aria-current='page'
                className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 '
              >
                {e}
              </a>
            ))}
            <a
              href='#'
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 '
            >
              <div>{'>'}</div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
