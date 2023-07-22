"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@/components/ui/button";

interface CopyCodeProps {
  children: string;
  language: string;
}

export const CopyCode: React.FC<CopyCodeProps> = ({children, language}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timeout)
  }, [isCopied]);

  return (
    <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
      <div className="bg-black/20 flex items-center justify-between text-sm">
        <p className="text-muted-foreground px-4">{language}</p>
        {isCopied ? (
          <div className="h-10 px-4 py-3 flex text-sm gap-2 text-muted-foreground hover">
            <Check size={16} />
            <p className="text-sm">Copied!</p>
          </div>
        ) : (
          <Button className="flex text-sm gap-2 text-muted-foreground hover">
            <Copy size={16} />
            <p className="text-sm">Copy code</p>
          </Button>
        )}
      </div>
    </CopyToClipboard>
  );
};
