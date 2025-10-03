import { copyToClipboard } from '@docs/utils/copyToClipboard';
import { useEffect, useRef, useState } from 'react';
import { Copy, CopyCheck } from 'lucide-react';
export const useCopied = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const onCopy = (text: string) => {
    if (copied) {
      return;
    }
    setCopied(true);
    copyToClipboard(text);
  };
  const icon = copied ? <CopyCheck size={16} /> : <Copy size={16} />;
  useEffect(() => {
    if (copied) {
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return { copied, setCopied, onCopy, icon };
};
