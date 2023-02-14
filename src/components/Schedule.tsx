import { SectionTitle } from './SectionTitle';

const schedule = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: 'Closed' },
  { day: 'Wednesday', time: 'Closed' },
  { day: 'Thursday', time: 'Closed' },
  { day: 'Friday', time: 'Closed' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' }
];

export const Schedule = () => {
  return (
    <section className='w-full lg:basis-5/12'>
      <SectionTitle
        title='Working hours'
        subtitle="When we're available"
      />
      <div className='flex flex-col gap-2'>
        {schedule.map((day, idx) => (
          <div
            className='flex items-center justify-between'
            key={idx}>
            <p>{day.day}</p>
            <span className='text-primary-100'>{day.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
