export const Hero = () => {
  return (
    <section className='mx-auto mb-[3.5rem] flex w-full max-w-[80rem] flex-col items-stretch md:mb-[6.25rem] md:w-[88%] md:flex-row-reverse md:justify-between lg:w-[83%]'>
      <div className='block max-h-[20rem] overflow-hidden md:max-h-none md:min-h-full md:basis-5/12 lg:basis-1/2'>
        <img
          className='min-h-full object-cover object-bottom md:object-[center,10%]'
          src='/hero.webp'
          alt=''
        />
      </div>
      <div className='w-[93%] max-w-[30rem] self-center pt-8 text-center md:max-w-[33.75rem] md:basis-7/12 md:self-start md:py-24 md:pr-12 md:text-left lg:basis-1/2 lg:pr-16'>
        <h1 className='mb-4 text-[1.875rem] font-semibold leading-[1.1] md:mb-6 md:text-[2.5rem] lg:text-[3.25rem]'>
          Transforming Your Outdoor Space with Nature’s Touch
        </h1>
        <p className='mb-6 leading-snug text-body md:mb-10'>
          We specialize in creating and maintaining beautiful, thriving gardens
          that bring joy to your life. With our expert knowledge and passion for
          gardening, we will help you transform your outdoor space into a lush,
          vibrant oasis.
        </p>
        <a
          className='inline-block rounded-[.25rem] bg-primary-100 py-6 px-9 text-[1.125rem] text-white hover:brightness-125 focus:brightness-125'
          href='/'>
          See our services
        </a>
      </div>
    </section>
  );
};
