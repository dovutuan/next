import * as React from 'react';
import { InputProps } from '@mui/material';
import Input from '@mui/material/Input';

export interface DemoInputProps extends InputProps {}

const DemoInput: React.FunctionComponent<DemoInputProps> = (props) => {
  return (
    <Input
      className="[&>input]:border-1 [&>input]:rounded [&>input]:border [&>input]:border-solid [&>input]:border-pink-300 [&>input]:px-2 [&>input]:py-1"
      {...props}
    />
  );
};

export default DemoInput;
