import React, { useContext } from 'react';
import { CodeContext } from '../CodeProvider';

type CodeErrorProps = {
  children?: React.ReactNode;
};
const CodeError = ({ children }: CodeErrorProps) => {
  const { error } = useContext(CodeContext);
  return <div>{children || error}</div>;
};

export default CodeError;
