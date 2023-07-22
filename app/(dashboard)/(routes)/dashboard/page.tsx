"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "AI Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    hover: "hover:text-sky-500",
    shadow: "hover:shadow-sky-500"
  },
  {
    label: "Image Creator",
    icon: ImageIcon,
    href: "/image",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    hover: "hover:text-violet-500",
    shadow: "hover:shadow-violet-500"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    hover: "hover:text-orange-500",
    shadow: "hover:shadow-orange-500"
  },
  {
    label: "Music Composer",
    icon: Music,
    href: "/music",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    hover: "hover:text-pink-500",
    shadow: "hover:shadow-pink-500"
  },
  {
    label: "Code Architect",
    icon: Code,
    href: "/code",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    hover: "hover:text-green-500",
    shadow: "hover:shadow-green-500"
  }
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Unleash the might of AI
        </h2>
        <p className="font-light text-sm md:text-lg text-center text-muted-foreground ">
          Embrace the future of AI - Investigate the influence of AI.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className={`p-4 bg-gray-900/70 text-[--text] border-white/5 flex items-center justify-between hover:shadow-sm ${tool.shadow} transition cursor-pointer ${tool.hover}`}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;