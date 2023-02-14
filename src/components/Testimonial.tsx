export const Testimonial = ({
  testimonial,
  photo,
  name,
  occupation
}: {
  testimonial: string;
  photo: string;
  name: string;
  occupation: string;
}) => {
  return (
    <div className='relative flex max-w-[30rem] flex-col items-center md:items-start'>
      <svg
        className='absolute max-w-[6rem] -translate-y-1/3 md:left-4'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 110 82'
        fill='none'>
        <path
          fill='#1CA109'
          fill-opacity='.1'
          d='M25 32.7c-1.2 0-2.4.2-3.6.4.4-1.3.8-2.6 1.4-3.8a26 26 0 0 1 2.6-4.6c.8-1.6 2.2-2.7 3.3-4 1.1-1.4 2.6-2.2 3.8-3.3 1.2-1.2 2.7-1.8 4-2.6 1.2-.7 2.3-1.5 3.5-1.9l3-1.2 2.5-1L43 0l-3.3.8-3.8 1c-1.5.2-3 1-4.8 1.6-1.8.8-3.8 1.3-5.7 2.6-1.8 1.2-4 2.2-6 3.8-1.8 1.6-4 3-5.7 5.2-1.8 2-3.6 4-5 6.3C7 23.6 6 26 4.8 28.4A60.6 60.6 0 0 0 .6 61.6l.1 1H1a24.6 24.6 0 1 0 24-30Zm60.3 0c-1.2 0-2.4.2-3.5.4.3-1.3.7-2.6 1.4-3.8.6-1.7 1.6-3.1 2.5-4.6.8-1.6 2.3-2.7 3.3-4 1.1-1.4 2.6-2.2 3.8-3.3 1.2-1.2 2.7-1.8 4-2.6 1.2-.7 2.3-1.5 3.5-1.9l3-1.2 2.5-1L103.2 0l-3.3.8-3.8 1c-1.5.2-3 1-4.8 1.6-1.7.8-3.8 1.3-5.6 2.6-2 1.2-4.1 2.2-6 3.8-1.9 1.6-4.1 3-5.8 5.2-1.8 2-3.6 4-5 6.3-1.6 2.3-2.7 4.7-3.8 7.1a60.6 60.6 0 0 0-4.2 33.2l.2 1a24.6 24.6 0 1 0 24.2-29.9Z'
        />
      </svg>
      <p className='mb-5 leading-snug'>{testimonial}</p>
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <img
          className='h-16 w-16 rounded-full'
          src={photo}
          alt={`${name} profile photo`}
          loading='lazy'
        />
        <div>
          <p className='text-[1.125rem] font-medium'>{name}</p>
          <span className='text-[0.875rem] text-primary-100'>{occupation}</span>
        </div>
      </div>
    </div>
  );
};
