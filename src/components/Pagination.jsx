export default function Pagination({
  totalPage,
  currentPage,
  onPageChange,
}) {
  const totalPageArray = new Array(totalPage)
    .fill()
    .map((_, index) => index + 1);
  // console.log(totalPageArray);

  if (currentPage === 0 || totalPageArray.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = totalPageArray[totalPageArray.length - 1];

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
              onClick={onPrevious}
            >
              <div>{'<'}</div>
            </a>
            {totalPageArray.map((pageNumber) => (
              <a
                key={pageNumber}
                href='#'
                aria-current='page'
                className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 '
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </a>
            ))}
            <a
              href='#'
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 '
              onClick={onNext}
            >
              <div>{'>'}</div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
