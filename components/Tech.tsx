const Tech = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    <div className="bg-zinc-700 rounded-xl sm:w-48 text-sm sm:text-base text-white flex justify-start items-center px-4 py-4 sm:px-6 shadow-md w-full">
      {icon}
      <span className="ml-3">{name}</span>
    </div>
  );
};
export default Tech;
