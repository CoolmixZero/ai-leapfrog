import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
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