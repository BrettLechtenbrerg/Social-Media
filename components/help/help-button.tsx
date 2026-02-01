"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  HelpCircle,
  Share2,
  MousePointerClick,
  ExternalLink,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    color: "from-violet-500 to-purple-600",
    title: "Step 1: Choose Your Destination",
    subtitle: "Pick where you want to post",
    description:
      "Click on any of the social media cards to open that platform in a new tab. Choose between your Facebook Page, Facebook Group, or Go High Level communities based on where your content fits best.",
    tip: "Post to multiple platforms for maximum reach. A single piece of content can go to your Page, Group, AND community.",
  },
  {
    icon: ExternalLink,
    color: "from-purple-500 to-fuchsia-600",
    title: "Step 2: Create Your Post",
    subtitle: "Share content with your audience",
    description:
      "Once the platform opens, create your post directly there. Share updates, photos, videos, announcements, or engage with your community. Each platform reaches a different segment of your audience.",
    tip: "Facebook Page is for public marketing. Facebook Group is for community engagement. GHL Communities are for your enrolled students.",
  },
  {
    icon: Users,
    color: "from-fuchsia-500 to-pink-600",
    title: "Step 3: Engage Consistently",
    subtitle: "Make it a daily habit",
    description:
      "Social media success comes from consistency. Use this launcher every day to quickly jump to your platforms and engage with your audience. Respond to comments, share stories, and keep your community active.",
    tip: "Schedule 15-30 minutes per day for social media. Consistency beats perfection every time.",
  },
];

export function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2"
        onClick={() => setOpen(true)}
      >
        <HelpCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Help</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                <Share2 className="w-4 h-4 text-white" />
              </div>
              Social Media & SEO Guide
            </DialogTitle>
            <DialogDescription>
              Post to your social platforms and track your SEO performance — all from one place.
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto flex-1 -mx-6 px-6 space-y-4 py-4">
            <div className="rounded-lg bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/40 border border-violet-200 dark:border-violet-800 p-5 space-y-3">
              <h3 className="font-semibold text-violet-900 dark:text-violet-100 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Why Social Media Matters
              </h3>
              <p className="text-sm text-violet-800 dark:text-violet-200">
                Social media is one of your most powerful marketing channels.
                Every post is a chance to attract new leads, engage current
                students, and build your brand. This launcher makes it easy to
                jump straight to your platforms and start posting — no searching,
                no bookmarks, just click and go.
              </p>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="rounded-lg border p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0`}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                <div className="flex items-start gap-2 rounded-md bg-amber-50 dark:bg-amber-950/30 p-3">
                  <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    {step.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <Button
              onClick={() => setOpen(false)}
              className="w-full bg-violet-600 hover:bg-violet-700"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
