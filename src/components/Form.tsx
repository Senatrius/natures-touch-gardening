import { FormInput } from './FormInput';
import { SectionTitle } from './SectionTitle';
import { useForm } from 'react-hook-form';

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });
  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <section className='w-full lg:basis-7/12'>
      <SectionTitle
        title='Contact Us'
        subtitle='Tell us what you need'
      />
      <form
        noValidate
        onSubmit={onSubmit}
        className='flex flex-col gap-3 lg:gap-5'>
        <div className='flex flex-col gap-3 lg:gap-5 xl:flex-row'>
          <FormInput
            variation='text'
            id='name'
            label='Name'
            reg={register('name', {
              required: 'Required field',
              maxLength: 35,
              pattern: /^[a-zA-Z\s]+$/
            })}
            error={errors.name}
          />
          <FormInput
            variation='email'
            id='email'
            label='Email Address'
            reg={register('email', {
              required: 'Required field',
              pattern: /.*@.*\..*/
            })}
            error={errors.email}
          />
        </div>
        <div className='flex flex-col gap-3 lg:gap-5 xl:flex-row'>
          <FormInput
            variation='phone'
            id='phone'
            label='Phone Number'
            reg={register('phone')}
          />
          <FormInput
            variation='dropdown'
            id='service'
            label='Service'
            reg={register('service', { required: 'Select a service' })}
            error={errors.service}
          />
        </div>
        <FormInput
          id='message'
          label='Message'
          variation='area'
          reg={register('message', { required: 'Required field' })}
          error={errors.message}
        />
        <button
          type='submit'
          className=' block w-full self-end rounded-[.25rem] bg-primary-100 py-6 px-9 text-[1.125rem] text-white hover:brightness-125 focus:brightness-125 md:w-auto'>
          Send a message
        </button>
      </form>
    </section>
  );
};
