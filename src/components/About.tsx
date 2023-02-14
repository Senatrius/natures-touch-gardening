import { SectionTitle } from './SectionTitle';

export const About = () => {
  return (
    <section
      id='about'
      className='mx-auto mb-[3.5rem] flex w-[93%] max-w-[80rem] flex-col items-stretch justify-between gap-12 md:mb-[6.25rem] md:w-[88%] md:flex-row md:gap-20 lg:w-[83%]'>
      <div className='max-w-[39rem] text-center md:basis-7/12 md:py-12 md:text-left'>
        <SectionTitle
          title='Who we are'
          subtitle="About Nature's Touch"
        />
        <p className='mb-4 leading-snug text-body'>
          At Nature’s Touch, we believe that everyone should have access to a
          beautiful, thriving garden. That's why we've dedicated ourselves to
          providing expert garden care services that help bring nature to life.
          Our team of experienced gardeners combines their passion for gardening
          with their extensive knowledge to create and maintain beautiful
          outdoor spaces that our clients love. Whether you're looking to
          transform your entire yard or simply maintain your existing garden,
          we've got you covered.
        </p>
        <p className='leading-snug text-body'>
          We understand that every garden is unique, which is why we offer a
          range of customizable services to meet your specific needs. Our
          services include garden design and installation, garden maintenance,
          lawn care, and landscape lighting. No matter what your needs are, our
          team will work closely with you to create a garden that fits your
          vision and enhances your outdoor living space.
        </p>
      </div>
      <div className='max-h-[15rem] overflow-hidden md:max-h-none md:min-h-full md:basis-5/12'>
        <img
          className='min-h-full w-full object-cover object-bottom'
          src='/about.webp'
          alt=''
        />
      </div>
    </section>
  );
};
