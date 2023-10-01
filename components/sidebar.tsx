"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { Montserrat } from "next/font/google";
import { FreeCounter } from "./free-counter";

const montserrat = Montserrat({weight: "600", subsets: ["latin"]});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-[--text]",
    hover: "hover:text-emerald-500"
  },
  {
    label: "AI Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-sky-500",
    hover: "hover:text-sky-500"
  },
  {
    label: "Image Creator",
    icon: ImageIcon,
    href: "/image",
    color: "text-violet-500",
    hover: "hover:text-violet-500"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
    hover: "hover:text-orange-500"
  },
  {
    label: "Music Composer",
    icon: Music,
    href: "/music",
    color: "text-pink-500",
    hover: "hover:text-pink-500"
  },
  {
    label: "Code Architect",
    icon: Code,
    href: "/code",
    color: "text-green-500",
    hover: "hover:text-green-500"
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-neutral-300",
    hover: "hover:text-neutral-300"
  }
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
} : SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full space-y-4 py-4 bg-gray-900 text-[--text]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="z-50 relative w-12 h-12 mr-4">
            <Image
              fill
              sizes="(max-width: 768px) 100vw"
              src="/logo.png"
              alt="logo"
            />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)} >
            LeapFrog
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              prefetch={false}
              href={route.href}
              key={route.href}
              className={cn(`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition ${route.hover}`,
              pathname === route.href ? `${route.color} bg-white/10 hover:${route.color}` : `text-zinc-400`
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter 
        isPro={isPro}
        apiLimitCount={apiLimitCount}
      />
    </div>
  );
}

export default Sidebar;
