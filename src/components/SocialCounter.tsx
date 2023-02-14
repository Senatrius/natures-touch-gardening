export const SocialCounter = ({
  value,
  label
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className='text-center text-white'>
      <p className='text-[3.25rem] font-medium'>{value}</p>
      <span className='uppercase tracking-widest'>{label}</span>
    </div>
  );
};
