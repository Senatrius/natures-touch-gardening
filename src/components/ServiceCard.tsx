export const ServiceCard = ({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='flex flex-col items-center gap-3 text-center md:items-start md:text-left'>
      <img
        src={icon}
        alt=''
      />
      <h3 className='text-[1.5rem] font-medium'>{title}</h3>
      <p className='leading-snug text-body'>{description}</p>
    </div>
  );
};
