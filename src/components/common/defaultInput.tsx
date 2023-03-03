import { Input, InputProps } from "@chakra-ui/react";
import { FC, useRef } from "react";

const DefaultInput: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  name,
  sx,
 }) => {
  const ref = useRef<any>();

  return (
    <Input
      ref={ref}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      variant="unstyled"
      sx={sx}
      onFocus={() => (ref.current.type = "date")}
      onBlur={() => (ref.current.type = "date")}
    />
  )
}

export default DefaultInput;