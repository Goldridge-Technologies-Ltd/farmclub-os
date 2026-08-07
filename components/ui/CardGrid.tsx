import type { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  columns?: "two" | "three" | "four";
  className?: string;
};

export function CardGrid({ children, columns = "three", className }: CardGridProps) {
  const columnClass = {
    two: "md:grid-cols-2",
    three: "md:grid-cols-2 lg:grid-cols-3",
    four: "sm:grid-cols-2 xl:grid-cols-4",
  }[columns];

  return (
    <div
      className={["grid gap-4", columnClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
