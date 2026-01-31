"use client";

import { Share2, Facebook, Users, GraduationCap, Award, ExternalLink, ArrowLeft } from "lucide-react";
import { HelpButton } from "@/components/help/help-button";

const destinations = [
  {
    id: "fb-group",
    name: "Facebook Group",
    description: "Post to your community group — engage members, share updates, and spark conversations.",
    url: "https://www.facebook.com/groups/178785075566615",
    icon: Users,
    gradient: "from-blue-500 to-blue-600",
    hoverGradient: "hover:from-blue-600 hover:to-blue-700",
    iconBg: "bg-blue-400/20",
    label: "Community Group",
  },
  {
    id: "fb-page",
    name: "Facebook Page",
    description: "Post to your public business page — attract new leads and showcase your brand.",
    url: "https://www.facebook.com/PMMAUTAH/",
    icon: Facebook,
    gradient: "from-indigo-500 to-indigo-600",
    hoverGradient: "hover:from-indigo-600 hover:to-indigo-700",
    iconBg: "bg-indigo-400/20",
    label: "Business Page",
  },
  {
    id: "ghl-students",
    name: "GHL Community — Students",
    description: "Post to your student community — share training tips, events, and encouragement.",
    url: "https://members.personalmasterymartialarts.com/communities/groups/pmma-students/home",
    icon: GraduationCap,
    gradient: "from-violet-500 to-purple-600",
    hoverGradient: "hover:from-violet-600 hover:to-purple-700",
    iconBg: "bg-violet-400/20",
    label: "Student Community",
  },
  {
    id: "ghl-blackbelts",
    name: "GHL Community — Black Belts",
    description: "Post to your Black Belt community — leadership content, advanced training, and recognition.",
    url: "https://members.personalmasterymartialarts.com/communities/groups/black-belts/home",
    icon: Award,
    gradient: "from-purple-500 to-fuchsia-600",
    hoverGradient: "hover:from-purple-600 hover:to-fuchsia-700",
    iconBg: "bg-purple-400/20",
    label: "Black Belt Community",
  },
];

export default function SocialMediaPage() {
  const handleLaunch = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50/30">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-200">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Social Media
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Quick-launch to your platforms
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <HelpButton />
            <a
              href="https://masters-edge-portal.vercel.app"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Portal</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            <Share2 className="w-4 h-4" />
            Choose where to post
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Where do you want to post?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Click any card below to open that platform in a new tab. Post content, engage your audience, and grow your community.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {destinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => handleLaunch(dest.url)}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm hover:shadow-xl hover:border-violet-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dest.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <dest.icon className="w-7 h-7 text-white" />
              </div>

              {/* Label Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-3 group-hover:bg-violet-100 group-hover:text-violet-700 transition-colors">
                {dest.label}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors">
                {dest.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {dest.description}
              </p>

              {/* Launch indicator */}
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Open in new tab</span>
                <ExternalLink className="w-4 h-4" />
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50/0 to-purple-50/0 group-hover:from-violet-50/50 group-hover:to-purple-50/50 transition-all duration-300 pointer-events-none" />
            </button>
          ))}
        </div>

        {/* Quick Tip */}
        <div className="mt-10 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 p-6 text-center">
          <p className="text-sm text-violet-800 font-medium mb-1">
            Pro Tip: Post to multiple platforms!
          </p>
          <p className="text-xs text-violet-600">
            Maximize your reach by sharing the same content across your Page, Group, and Communities. Consistency is key to building your brand.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/60 backdrop-blur-sm mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 text-center text-xs text-gray-400">
          The Master&apos;s Edge Business Program &bull; Total Success AI
        </div>
      </footer>
    </div>
  );
}
