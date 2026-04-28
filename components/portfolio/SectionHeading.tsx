type SectionHeadingProps = {
  children: React.ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-center gap-4 sm:mb-8 2xl:mb-10 2xl:gap-6">
      <h2 className="font-serif text-xl font-semibold uppercase tracking-[0.2em] text-stone-950 dark:text-white sm:text-2xl 2xl:text-[2rem]">
        {children}
      </h2>
      <div className="h-px flex-1 bg-stone-950/10 dark:bg-[#333333]" />
    </div>
  );
}
