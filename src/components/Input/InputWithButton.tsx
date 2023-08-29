import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const InputWithButton = () => {
  const [isDirty, setIsDirty] = useState(false);
  const ref = useClickOutside(() => {
    setIsDirty(false);
  });
  const onClick = () => setIsDirty(true);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-primary ml-auto mr-auto flex",
        isDirty ? "ring-1 ring-primary ring-offset-1" : "",
      )}
    >
      <Input
        onFocus={onClick}
        className="rounded-s-primary w-96 py-3"
        defaultValue="Search here"
      />
      <Button className="rounded-e-primary rounded-s-none">Search</Button>
    </div>
  );
};

export default InputWithButton;
