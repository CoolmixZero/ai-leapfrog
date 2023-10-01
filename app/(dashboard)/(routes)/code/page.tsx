"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { ChatCompletionRequestMessage } from "openai";

import { Heading } from "@/components/heading";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm';
import { CopyCode } from "@/components/copy-to-clipboard";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

export default function CodePage() {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      if(error?.response?.status === 403) {
        proModal.onOpen();
      } else {
          toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };

  const containsCodeBlock = (content: any) => {
    return /\`\`\`/.test(content);
  };

  console.log(messages);
  return (
    <div>
      <Heading
        title="Code Architect"
        description="Best friend for developers"
        icon={Code}
        iconColor="text-green-500"
        bgColor="bg-green-500/10"
      />
      <div className="px-4 py-2 lg:px-8 lg:py-4">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        autoComplete="off"
                        className="bg-[--background] border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Simple toggle button using React hooks"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="text-[--text] hover:bg-green-500/90 bg-green-500 col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-gray-900/50 ">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <div>
              <Empty label="No messages were sent." image="/empty-code.png"/>
            </div>
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div 
                key={message.content}
                className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg", message.role === "user" ? "bg-gray-900/70 border-white/5" : "bg-green-500/50")}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-[#1d1f21] rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, inline, className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '')
                      const codeString = Array.isArray(children) ? children.join("") : children;

                      return containsCodeBlock(message.content) && match ? (
                        <>
                          <CopyCode language={match[1]}>
                            {String(children)}
                          </CopyCode>            
                          <SyntaxHighlighter language={match[1]} style={atomDark}>
                            {codeString}
                          </SyntaxHighlighter>
                        </>
                      ) : (
                        <code className="bg-[#1d1f21]/30 rounded-lg p-1" {...props}>
                          {children}
                        </code>
                      )
                    },
                  }} className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}