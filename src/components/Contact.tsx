import { Form } from './Form';
import { Schedule } from './Schedule';

export const Contact = () => {
  return (
    <div className='mx-auto mb-[2.5rem] flex w-[93%] max-w-[80rem] flex-col justify-between gap-[3.5rem] md:mb-[6.25rem] md:w-[88%] md:flex-row md:gap-[6.25rem] lg:w-[83%]'>
      <Schedule />
      <Form />
    </div>
  );
};
