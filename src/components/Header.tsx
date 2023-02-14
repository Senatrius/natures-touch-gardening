import { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth > 767 ? setIsMenuOpen(true) : setIsMenuOpen(false);

    const handleScreenWidth = () => {
      window.innerWidth > 767 ? setIsMenuOpen(true) : setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleScreenWidth);

    return () => {
      window.removeEventListener('resize', handleScreenWidth);
    };
  }, []);

  return (
    <header className='mx-auto flex w-[93%] max-w-[80rem] items-center justify-between py-5 md:w-[88%] lg:w-[83%]'>
      <Logo color='text-primary-100' />
      <nav className='flex items-center'>
        {isMenuOpen && (
          <>
            <div
              onClick={() => setIsMenuOpen(false)}
              className='fixed inset-0 min-h-full bg-black bg-opacity-50 md:hidden'></div>
            <div className='fixed top-0 right-0 z-[5] flex h-full w-full max-w-[25rem] flex-col overflow-auto bg-white p-8 md:relative md:max-w-none md:bg-transparent md:p-0'>
              <button
                onClick={() => setIsMenuOpen(false)}
                className='z-10 mb-10 self-end hover:text-primary-100 focus:text-primary-100 md:hidden'>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1.9 19L0 17.1L7.6 9.5L0 1.9L1.9 0L9.5 7.6L17.1 0L19 1.9L11.4 9.5L19 17.1L17.1 19L9.5 11.4L1.9 19Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
              <ul className='flex h-full w-full flex-col items-start gap-2 whitespace-nowrap text-[1.125rem] md:flex-row md:items-center md:gap-6 md:text-[1rem] lg:gap-12 lg:text-[1.125rem]'>
                <li className='w-full'>
                  <a
                    className='inline-block w-full py-4 hover:text-primary-100 focus:text-primary-100 md:inline md:w-auto md:p-0'
                    href='#about'>
                    Who we are
                  </a>
                </li>
                <li className='w-full'>
                  <a
                    className='inline-block w-full py-4 hover:text-primary-100 focus:text-primary-100 md:inline md:w-auto md:p-0'
                    href='#services'>
                    Services
                  </a>
                </li>
                <li className='w-full'>
                  <a
                    className='inline-block w-full py-4 hover:text-primary-100 focus:text-primary-100 md:inline md:w-auto md:p-0'
                    href='#testimonials'>
                    Testimonials
                  </a>
                </li>
                <div className='mt-auto h-[1px] w-full bg-black bg-opacity-25 md:hidden'></div>
                <li className='my-4 w-full md:my-0'>
                  <a
                    className='inline-block w-full rounded-[.25rem] bg-primary-100 py-4 px-8 text-center text-white hover:brightness-125 focus:brightness-125 md:w-auto'
                    href='#contact'>
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
        <button
          className={`${
            isMenuOpen ? 'hidden' : 'inline-block'
          } hover:text-primary-100 focus:text-primary-100 md:hidden`}
          onClick={() => setIsMenuOpen(true)}>
          <svg
            width='28'
            height='19'
            viewBox='0 0 28 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 19H20.2222V15.8333H0V19ZM0 11.0833H15.5556V7.91667H0V11.0833ZM0 0V3.16667H20.2222V0H0ZM28 15.1842L22.4311 9.5L28 3.81583L25.8067 1.58333L18.0289 9.5L25.8067 17.4167L28 15.1842Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};
