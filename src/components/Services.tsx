import { SectionTitle } from './SectionTitle';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <main className='mx-auto mb-[3.5rem] w-[93%] max-w-[80rem] gap-12 text-center md:mb-[6.25rem] md:w-[88%] md:gap-20 md:text-left lg:w-[83%]'>
      <SectionTitle
        title='Our Services'
        subtitle='How can we help you?'
      />
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        <ServiceCard
          icon='/installation.svg'
          title='Garden Installation'
          description='Design and installation services with consultation to create a customized garden tailored to your needs. Includes plant selection, landscaping arrangements, and irrigation systems.'
        />
        <ServiceCard
          icon='/maintenance.svg'
          title='Garden Maintenance'
          description="Regular upkeep of the garden, including tasks such as pruning, weeding, mulching, and watering. The service can be customized to the client's needs, either weekly visit or bi-monthly visit."
        />
        <ServiceCard
          icon='/care.svg'
          title='Lawn Care'
          description='Mowing, edging, fertilization, aeration, and other tasks to keep lawns healthy and looking their best.'
        />
        <ServiceCard
          icon='/landscape.svg'
          title='Landscape Lighting'
          description='Landscape lighting installation to enhance beauty and increase safety, including along pathways, garden beds, and trees.'
        />
      </div>
    </main>
  );
};
