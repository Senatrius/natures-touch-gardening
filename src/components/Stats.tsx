import { SocialCounter } from './SocialCounter';

export const Stats = () => {
  return (
    <section className='relative mb-[3.5rem] w-full overflow-hidden bg-overlay md:mb-[6.25rem]'>
      <img
        className='absolute min-h-full w-full object-cover opacity-20'
        src='/stats.webp'
        alt=''
      />
      <h2 className='sr-only'>Social proof</h2>
      <div className='mx-auto grid max-w-[65rem] grid-cols-2 gap-8 py-[3.5rem] md:grid-cols-4 md:py-[6.25rem]'>
        <SocialCounter
          value='275'
          label='Happy clients'
        />
        <SocialCounter
          value='12+'
          label='Years of experience'
        />
        <SocialCounter
          value='814'
          label='Completed projects'
        />
        <SocialCounter
          value='97%'
          label='Recommended'
        />
      </div>
    </section>
  );
};
