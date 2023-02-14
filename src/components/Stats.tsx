import { SocialCounter } from './SocialCounter';

export const Stats = () => {
  return (
    <section className='lg relative mb-[3.5rem] w-full overflow-hidden bg-overlay md:mb-[6.25rem]'>
      <h2 className='sr-only'>Social proof</h2>
      <div className='mx-auto grid w-[93%] max-w-[65rem] grid-cols-1 gap-8 py-[3.5rem] sm:grid-cols-2 md:w-[88%] md:grid-cols-4 md:py-[6.25rem] lg:w-[83%]'>
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
