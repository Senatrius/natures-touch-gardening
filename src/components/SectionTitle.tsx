export const SectionTitle = ({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className='mb-6 md:mb-8'>
      <h2 className='mb-2 text-[1.125rem] text-primary-100'>{title}</h2>
      <p className='text-[1.75rem] font-medium'>{subtitle}</p>
    </div>
  );
};
