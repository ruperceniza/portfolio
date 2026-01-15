import { FC, memo, PropsWithChildren } from 'react';

const Section: FC<PropsWithChildren<{ className?: string; noPadding?: boolean }>> = memo(
  ({ children, className = '', noPadding = false }) => {
    return (
      <section className={`${className} ${!noPadding && 'px-4 py-16 md:py-24'}`}>
        <div className={`mx-auto max-w-screen-xl`}>{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
