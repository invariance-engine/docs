import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

interface LearnCardProps {
  href: string;
  title: string;
  description: string;
}

function LearnCard({ href, title, description }: LearnCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center justify-between">
            {title}
            <RiArrowRightUpLine className="w-4 h-4 text-primary" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Page() {
  return (
    <div className="prose prose-stone max-w-none">
      <p className="text-sm text-stone-500 mb-2">Invariance Documentation</p>
      <h1 className="text-xl font-medium">Overview</h1>

      <p className="text-sm">
        Invariance is a CLI-first tool that closes the loop between <span className="font-bold">physics-based simulation</span> and <span className="font-bold">real-world measurements</span>.
        It takes a forward physical model, compares it against sensor data, and automatically infers the physical parameters that best explain reality.
      </p>
      <div className="mt-5 text-sm">
        <p className="font-medium text-foreground mb-2">Given:</p>
        <ul className="space-y-2 ml-1">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 bg-muted-foreground shrink-0" />
            <span>A forward physical model</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 bg-muted-foreground shrink-0" />
            <span>A configuration describing geometry, time, and parameters</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 bg-muted-foreground shrink-0" />
            <span>Sparse sensor measurements from a real system</span>
          </li>
        </ul>
      </div>
      <div className="mt-5 text-sm">
        <p className="font-medium text-foreground mb-2">Invariance:</p>
        <ul className="space-y-2 ml-1">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 bg-muted-foreground shrink-0" />
            <span>Runs the simulation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 bg-muted-foreground shrink-0" />
            <span>Compares predictions to measurements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 bg-muted-foreground shrink-0" />
            <span>Quantifies the mismatch</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 bg-muted-foreground shrink-0" />
            <span>Automatically adjusts physical parameters to reduce error</span>
          </li>
        </ul>
      </div>
      <div className="mt-5 text-sm">
        <p>This process is known as <span className="font-bold">inverse physics</span>.</p>
      </div>
      <Separator className="my-5" />
      <h1 className="text-lg font-medium mt-5">Learn More</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
        <LearnCard
          href="/docs/quickstart"
          title="Quickstart"
          description="Run a complete calibration demo in under five minutes."
        />
        <LearnCard
          href="/docs/examples"
          title="Examples"
          description="Walk through real, copy-paste-ready scenarios."
        />
        <LearnCard
          href="/contact"
          title="Support & Feedback"
          description="Report issues, ask questions, or share feedback."
        />
      </div>
    </div>
  );
}
