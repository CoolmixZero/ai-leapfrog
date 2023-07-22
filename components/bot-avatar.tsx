"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8 bg-[--primary]">
      <AvatarImage src="/logo.png" />
    </Avatar>
  );
}