import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-dvh">
      <Button asChild>
        <Link href="/docs">Docs</Link>
      </Button>
    </div>
  );
}
