import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export const FormInput = ({
  id,
  label,
  variation,
  reg,
  error
}: {
  id: string;
  label: string;
  variation: string;
  reg: UseFormRegisterReturn;
  error?: FieldError;
}) => {
  return (
    <div className='w-full'>
      <div className='mb-1.5 flex justify-between gap-2'>
        <label htmlFor={id}>{label}</label>
        {error && (
          <span className='text-right text-[0.875rem] text-primary-200'>
            {error.type === 'required'
              ? 'Must not be empty'
              : error.type === 'pattern'
              ? 'Check the input'
              : error.type === 'maxLength' && 'Too long'}
          </span>
        )}
      </div>
      {variation === 'text' ? (
        <input
          className='w-full rounded-[.25rem] border border-body py-3 px-4 outline-none ring-primary-100 focus:ring-2'
          id={id}
          type='text'
          {...reg}
        />
      ) : variation === 'phone' ? (
        <input
          className='w-full rounded-[.25rem] border border-body py-3 px-4 outline-none ring-primary-100 focus:ring-2'
          id={id}
          type='tel'
          {...reg}
        />
      ) : variation === 'email' ? (
        <input
          className='w-full rounded-[.25rem] border border-body py-3 px-4 outline-none ring-primary-100 focus:ring-2'
          id={id}
          type='email'
          {...reg}
        />
      ) : variation === 'area' ? (
        <textarea
          rows={10}
          className='w-full resize-none rounded-[.25rem] border border-body py-3 px-4 outline-none ring-primary-100 focus:ring-2'
          id={id}
          {...reg}
        />
      ) : (
        variation === 'dropdown' && (
          <select
            className='w-full resize-none rounded-[.25rem] border border-body py-3 px-4 outline-none ring-primary-100 focus:ring-2'
            id={id}
            {...reg}>
            <option
              value=''
              disabled>
              --&nbsp;Select a service&nbsp;--
            </option>
            <option value='instalation'>Garden installation</option>
            <option value='maintenance'>Garden maintenance</option>
            <option value='care'>Lawn care</option>
            <option value='landscape'>Landscape lighting</option>
          </select>
        )
      )}
    </div>
  );
};
