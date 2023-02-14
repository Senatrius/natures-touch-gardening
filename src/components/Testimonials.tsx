import { SectionTitle } from './SectionTitle';
import { Testimonial } from './Testimonial';

export const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='mx-auto mb-[3.5rem] flex w-[93%] max-w-[80rem] flex-col items-center text-center md:mb-[6.25rem] md:w-[88%] md:items-start md:text-left lg:w-[83%]'>
      <SectionTitle
        title='Testimonials'
        subtitle='What do our clients say?'
      />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        <Testimonial
          testimonial="Nature's Touch transformed my outdoor space from an eyesore to a lush, beautiful garden. I highly recommend them to anyone looking to improve their yard. Thanks!"
          photo='/profile-1.jpg'
          name='Angela H.'
          occupation='Homeowner'
        />
        <Testimonial
          testimonial="I have high standards for garden care and Nature's Touch company exceeded my expectations with their attention to detail and expertise. I couldn't be happier with the results. Highly recommended!"
          photo='/profile-2.jpg'
          name='Lynette T.'
          occupation='Landscape Architect'
        />
        <Testimonial
          testimonial="I was impressed with the professionalism and knowledge of the Nature's Touch team. They took the time to understand my vision and created a stunning garden that I enjoy every day. Thank you, Nature's Touch!"
          photo='/profile-3.jpg'
          name='Katherine C.'
          occupation='Business Owner'
        />
      </div>
    </section>
  );
};
