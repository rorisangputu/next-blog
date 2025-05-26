import React from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Container;
