import { createContext, JSXElementConstructor, ReactElement, useState } from 'react';
import { Scope, useRunner } from 'react-runner';

type CodeContextType = {
  element: ReactElement<unknown, string | JSXElementConstructor<any>> | null;
  error: string | null;
  codeContent: string;
  setCodeContent: (codeContent: string) => void;
};
type CodeProviderProps = {
  children: React.ReactNode;
  code: string;
  scope?: Scope;
};
export const CodeContext = createContext<CodeContextType>({
  element: null,
  error: null,
  codeContent: '',
  setCodeContent: () => {},
});
export const CodeProvider = ({ children, code, scope }: CodeProviderProps) => {
  const [codeContent, setCodeContent] = useState<string>(code);
  const { element, error } = useRunner({
    code: codeContent,
    scope,
  });
  return (
    <CodeContext.Provider value={{ element, error, codeContent, setCodeContent }}>{children}</CodeContext.Provider>
  );
};
