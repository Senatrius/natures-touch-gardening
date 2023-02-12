interface IAnnouncement {
  message: string;
}

export const Announcement = ({ message }: IAnnouncement) => {
  return (
    <div className='w-full bg-primary-200 py-1.5'>
      <p className='mx-auto w-[93%] text-center text-[0.875rem] text-white md:w-[88%] lg:w-[83%]'>
        {message}
      </p>
    </div>
  );
};
