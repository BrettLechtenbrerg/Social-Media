"use client";

import { Share2, Facebook, Users, GraduationCap, Award, ExternalLink, ArrowLeft, BarChart3, Search, PenLine } from "lucide-react";
import { HelpButton } from "@/components/help/help-button";

const socialDestinations = [
  {
    id: "fb-group",
    name: "Facebook Group",
    description: "Post to your community group — engage members, share updates, and spark conversations.",
    url: "https://www.facebook.com/groups/178785075566615",
    icon: Users,
    gradient: "from-blue-500 to-blue-600",
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
    iconBg: "bg-purple-400/20",
    label: "Black Belt Community",
  },
];

const seoDestinations = [
  {
    id: "google-analytics",
    name: "Google Analytics",
    description: "View your website traffic, user behavior, and conversion data. Know what's working and what's not.",
    url: "https://analytics.google.com/analytics/web/?authuser=0#/a360123026p495152489/reports/intelligenthome",
    icon: BarChart3,
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-400/20",
    label: "Website Analytics",
  },
  {
    id: "search-console",
    name: "Google Search Console",
    description: "Monitor your search rankings, fix indexing issues, and see what keywords drive traffic to your site.",
    url: "https://search.google.com/search-console?resource_id=https%3A%2F%2Fpersonalmasterymartialarts.com%2F",
    icon: Search,
    gradient: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-400/20",
    label: "Search Performance",
  },
  {
    id: "ghl-blog",
    name: "Blog Posts (GHL)",
    description: "Write and publish blog posts to boost your SEO. Fresh content drives organic traffic and builds authority.",
    url: "https://app.gohighlevel.com/v2/location/Uj6CJxWXVU8HyNgI39xb/blogs/site/FFMKRtrzKwV8dzaBo29t?tab=blog-posts",
    icon: PenLine,
    gradient: "from-sky-500 to-blue-600",
    iconBg: "bg-sky-400/20",
    label: "Content & SEO",
  },
];

interface Destination {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: React.ElementType;
  gradient: string;
  iconBg: string;
  label: string;
}

function DestinationCard({ dest, accentColor = "violet" }: { dest: Destination; accentColor?: string }) {
  const handleLaunch = () => {
    window.open(dest.url, "_blank", "noopener,noreferrer");
  };

  const hoverBorder = accentColor === "violet" ? "hover:border-violet-300" : "hover:border-emerald-300";
  const hoverBadge = accentColor === "violet"
    ? "group-hover:bg-violet-100 group-hover:text-violet-700"
    : "group-hover:bg-emerald-100 group-hover:text-emerald-700";
  const hoverTitle = accentColor === "violet" ? "group-hover:text-violet-700" : "group-hover:text-emerald-700";
  const launchColor = accentColor === "violet" ? "text-violet-600" : "text-emerald-600";
  const overlayFrom = accentColor === "violet"
    ? "group-hover:from-violet-50/50 group-hover:to-purple-50/50"
    : "group-hover:from-emerald-50/50 group-hover:to-green-50/50";

  return (
    <button
      onClick={handleLaunch}
      className={`group relative rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm hover:shadow-xl ${hoverBorder} transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
    >
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dest.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <dest.icon className="w-7 h-7 text-white" />
      </div>

      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-3 ${hoverBadge} transition-colors`}>
        {dest.label}
      </div>

      <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${hoverTitle} transition-colors`}>
        {dest.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {dest.description}
      </p>

      <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${launchColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <span>Open in new tab</span>
        <ExternalLink className="w-4 h-4" />
      </div>

      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent ${overlayFrom} transition-all duration-300 pointer-events-none`} />
    </button>
  );
}

export default function SocialMediaPage() {
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
                Social Media & SEO
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Post, track, and grow your online presence
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
        {/* Social Media Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Share2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Social Media</h2>
              <p className="text-sm text-gray-500">Post content and engage your audience</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {socialDestinations.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} accentColor="violet" />
            ))}
          </div>
        </div>

        {/* SEO & Analytics Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">SEO & Analytics</h2>
              <p className="text-sm text-gray-500">Track performance and create content that ranks</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {seoDestinations.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} accentColor="emerald" />
            ))}
          </div>
        </div>

        {/* Quick Tip */}
        <div className="rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 p-6 text-center">
          <p className="text-sm text-violet-800 font-medium mb-1">
            Pro Tip: Content + SEO = Growth
          </p>
          <p className="text-xs text-violet-600">
            Post to social media for immediate engagement, then check Analytics and Search Console weekly to see what&apos;s driving real traffic. Write blog posts on topics people are already searching for.
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
