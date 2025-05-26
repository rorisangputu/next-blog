import React from "react";

const Container = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      {children}
    </div>
  );
};

export default Container;
