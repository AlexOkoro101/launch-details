import { Input, InputProps } from "@chakra-ui/react";
import { FC } from "react";

const DefaultInput: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  name,
  sx
 }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      variant="unstyled"
      sx={sx}
    />
  )
}

export default DefaultInput;