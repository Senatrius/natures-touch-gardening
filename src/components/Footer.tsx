import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className='w-full bg-body py-[2.5rem] md:py-[6.25rem]'>
      <div className='mx-auto flex w-[93%] max-w-[80rem] flex-col items-start justify-between gap-[3.5rem] md:w-[88%] lg:w-[83%] lg:flex-row'>
        <Logo color='text-white' />
        <div className='flex flex-col gap-[3.5rem] text-footerText sm:flex-row'>
          <div>
            <h3 className='mb-5 text-[1.25rem] text-white'>Links</h3>
            <ul className='flex flex-col gap-2'>
              <li className='text-[1.125rem]'>
                <a
                  className='hover:text-primary-100 focus:text-primary-100'
                  href='#'>
                  Home
                </a>
              </li>
              <li className='text-[1.125rem]'>
                <a
                  className='hover:text-primary-100 focus:text-primary-100'
                  href='#'>
                  Who we are
                </a>
              </li>
              <li className='text-[1.125rem]'>
                <a
                  className='hover:text-primary-100 focus:text-primary-100'
                  href='#'>
                  Services
                </a>
              </li>
              <li className='text-[1.125rem]'>
                <a
                  className='hover:text-primary-100 focus:text-primary-100'
                  href='#'>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-5 text-[1.25rem] text-white'>Legal</h3>
            <ul className='flex flex-col gap-2'>
              <li className='text-[1.125rem]'>
                <a
                  className='hover:text-primary-100 focus:text-primary-100'
                  href='#'>
                  Terms and Conditions
                </a>
              </li>
              <li className='text-[1.125rem]'>
                <a
                  className='hover:text-primary-100 focus:text-primary-100'
                  href='#'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-5 text-[1.25rem] text-white'>Contacts</h3>
            <ul className='flex flex-col gap-2'>
              <li className='flex items-center gap-4 text-[1.125rem]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='21'
                  height='19'
                  fill='none'>
                  <path
                    fill='currentColor'
                    d='M9 8.35a.97.97 0 0 1-.71-.28.95.95 0 0 1-.29-.7c0-.29.1-.52.29-.71.19-.2.43-.29.71-.29a.98.98 0 0 1 1 1c0 .27-.1.5-.29.7a.97.97 0 0 1-.71.28Zm4 0a.97.97 0 0 1-.71-.28.95.95 0 0 1-.29-.7c0-.29.1-.52.29-.71.19-.2.43-.29.71-.29a.97.97 0 0 1 1 1c0 .27-.1.5-.29.7a.97.97 0 0 1-.71.28Zm4 0a.97.97 0 0 1-.71-.28.95.95 0 0 1-.29-.7c0-.29.1-.52.29-.71.19-.2.43-.29.71-.29a.97.97 0 0 1 1 1c0 .27-.1.5-.29.7a.97.97 0 0 1-.71.28Zm-.05 9.9c-2.15 0-4.25-.47-6.29-1.42A19.05 19.05 0 0 1 1.44 7.7 14.37 14.37 0 0 1 0 1.47 1.02 1.02 0 0 1 1.05.43H5.1a1 1 0 0 1 .63.23c.18.14.29.33.32.56L6.7 4.7c.03.23.03.44-.01.63a.91.91 0 0 1-.29.5L3.97 8.26c.7 1.2 1.58 2.3 2.64 3.35a18.6 18.6 0 0 0 3.49 2.7l2.35-2.33a1.63 1.63 0 0 1 1.3-.4l3.45.7a.9.9 0 0 1 .57.33.9.9 0 0 1 .23.6v4.01a1.02 1.02 0 0 1-1.05 1.04ZM3.03 6.37l1.65-1.63-.43-2.33H2.02c.09.68.2 1.35.35 2 .15.67.37 1.32.65 1.96Zm8.95 8.86a12.5 12.5 0 0 0 4.02 1v-2.18l-2.35-.47-1.68 1.65Z'
                  />
                </svg>
                <p>-</p>
              </li>
              <li className='flex items-center gap-4 text-[1.125rem]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='21'
                  height='18'
                  fill='none'>
                  <path
                    fill='currentColor'
                    d='M6.5 4.05c.62 0 1.2.24 1.64.66a2.22 2.22 0 0 1-.75 3.67 2.39 2.39 0 0 1-2.53-.49 2.22 2.22 0 0 1 0-3.18 2.36 2.36 0 0 1 1.64-.66ZM6.5 0a6.6 6.6 0 0 1 4.6 1.85A6.2 6.2 0 0 1 13 6.3C13 11.03 6.5 18 6.5 18S0 11.03 0 6.3a6.2 6.2 0 0 1 1.9-4.45A6.6 6.6 0 0 1 6.5 0Zm0 1.8c-1.23 0-2.41.47-3.28 1.32A4.43 4.43 0 0 0 1.86 6.3c0 .9 0 2.7 4.64 8.74C11.14 9 11.14 7.2 11.14 6.3c0-1.2-.49-2.34-1.36-3.18A4.72 4.72 0 0 0 6.5 1.8Z'
                  />
                </svg>
                <p>-</p>
              </li>
              <li className='flex gap-4 text-[1.125rem]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='21'
                  height='18'
                  fill='none'>
                  <path
                    fill='#9AC89F'
                    d='M13.95 18 9.7 13.75l1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4L13.95 18ZM10 7l8-5H2l8 5Zm0 2L2 4v10h5.15l2 2H2c-.55 0-1.02-.2-1.41-.59C.19 15.02 0 14.55 0 14V2C0 1.45.2.98.59.59.98.19 1.45 0 2 0h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.35l-2 2V4l-8 5Z'
                  />
                </svg>
                <div className='flex flex-col gap-2'>
                  <p>info@naturestouch.com</p>
                  <p>customer@naturestouch.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
