"use client"
import { cn } from "@/lib/utils"


export function MessageApi() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/bf.avif"
                    alt="Serene countryside landscape with rolling hills and a winding path"
                    className="h-full w-full object-cover"
                />
                {/* Subtle overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
            </div>

            {/* Chat Bubbles Container */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20 md:px-6">
                <div className="w-full max-w-4xl">
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Message 1 - Right aligned, dark */}
                        <ChatBubble variant="dark" align="right" delay={0}>
                            Is relay secure?
                        </ChatBubble>

                        {/* Message 2 - Left aligned, light */}
                        <ChatBubble variant="light" align="left" delay={300}>
                            Yes, designed for safe
                        </ChatBubble>

                        {/* Message 3 - Right aligned, dark with typing indicator */}
                        <ChatBubble variant="dark" align="right" delay={600}>
                            <TypingIndicator />
                        </ChatBubble>
                    </div>
                </div>
            </div>
        </main>
    )
}



interface ChatBubbleProps {
    variant: "dark" | "light"
    align: "left" | "right"
    children: React.ReactNode
    className?: string
    delay?: number
}

export function ChatBubble({ variant, align, children, className, delay = 0 }: ChatBubbleProps) {
    return (
        <div
            className={cn(
                "flex w-full",
                align === "right" ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "px-6 py-3 rounded-full font-mono text-lg md:text-xl",
                    "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
                    "animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both",
                    "transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)]",
                    variant === "dark"
                        ? "bg-[#020617] text-[#F9FAFB]"
                        : "bg-[#E5E7EB] text-[#0F172A]",
                    variant === "light" ? "rounded-br-none" : "rounded-bl-none",
                    className
                )}
                style={{ animationDelay: `${delay}ms` }}
            >
                {children}
            </div>
        </div>
    )
}


export function TypingIndicator() {
    return (
        <span className="inline-flex items-end gap-2">

            <span className="font-mono ">typing</span>
            <span className="flex gap-1 mb-1 ">
                <span
                    className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0ms", animationDuration: "1s" }}
                />
                <span
                    className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "150ms", animationDuration: "1s" }}
                />
                <span
                    className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "300ms", animationDuration: "1s" }}
                />
            </span>
        </span>
    )
}
