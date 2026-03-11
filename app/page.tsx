"use client"
import { Messages } from "@/components/Message";
import { MessageApi } from "@/components/MessageApi";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <AgencyHeroSection />
      <Messages />
      <Button asChild>
        <Link href="/docs">Docs</Link>
      </Button>
      <MessageApi />
    </div>
  );
}
