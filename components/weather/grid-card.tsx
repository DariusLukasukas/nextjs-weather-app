import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

function GridCard({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
} & React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
      className={cn(
        "bg-card relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-3",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function GridCardHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>{children}</div>
  );
}

function GridCardTitle({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        "text-muted-foreground flex items-center gap-1.5 text-xs font-medium uppercase",
        className,
      )}
    >
      {children}
    </h3>
  );
}

function GridCardContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <div className={cn("h-full flex-1", className)}>{children}</div>;
}

export { GridCard, GridCardHeader, GridCardTitle, GridCardContent };
