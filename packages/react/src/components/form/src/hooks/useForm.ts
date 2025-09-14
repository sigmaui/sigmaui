import React from 'react';
import { useForm as useRcForm, type FormInstance as RcFormInstance } from '@rc-component/form';
import type { NamePath } from '@rc-component/form/lib/interface';

export interface FormInstance<Values = any> extends RcFormInstance<Values> {
  scrollToField?: (name: NamePath, options?: ScrollOptions) => void;
  focusField?: (name: NamePath) => void;
  getFieldInstance?: (name: NamePath) => any;
}

export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>] {
  const [rcForm] = useRcForm();
  const itemsRef = React.useRef<Record<string, React.ReactElement>>({});

  const wrapForm: FormInstance<Values> = React.useMemo(() => {
    return form ?? {
      ...rcForm,
      scrollToField: (name: NamePath) => {
      },
      focusField: (name: NamePath) => {
      },
      getFieldInstance: (name: NamePath) => {
      }
    }
  }, [form, rcForm])

  return [wrapForm]
}