import {
  Bot,
  CalendarClock,
  Headphones,
  MessagesSquare,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";

export const services = [
  {
    title: "AI Chatbot System",
    description: "Answers customers and captures leads automatically",
    price: "From $499",
    icon: Bot
  },
  {
    title: "Booking Automation",
    description: "Turns visitors into booked appointments",
    price: "From $399",
    icon: CalendarClock
  },
  {
    title: "Lead Capture System",
    description: "Collects customer info and buying intent",
    price: "From $349",
    icon: MousePointerClick
  },
  {
    title: "AI Follow-Up Automation",
    description: "Automatically follows up with leads",
    price: "From $449",
    icon: Zap
  },
  {
    title: "Customer Support Assistant",
    description: "Handles FAQs and customer replies",
    price: "From $599",
    icon: Headphones
  }
];

export const stats = [
  { label: "Leads Collected (Demo Data)", value: "1,284", delta: "+38%" },
  { label: "Appointments Booked (Demo Data)", value: "312", delta: "+22%" },
  { label: "Avg Response Time (Demo Data)", value: "8 sec", delta: "-91%" },
  { label: "Automation Status (Demo Data)", value: "Live", delta: "99.9%" }
];

export const testimonials = [
  {
    quote: "KRAZE AI made our website feel like a 24/7 sales rep. We booked more qualified consults in the first month.",
    name: "Maya R.",
    role: "Med Spa Owner"
  },
  {
    quote: "The follow-up automation saved our team hours every week and recovered leads we used to lose.",
    name: "Andre L.",
    role: "Home Services Founder"
  },
  {
    quote: "Clean setup, smart workflows, and a chatbot that actually sounds helpful. It changed our lead flow.",
    name: "Priya S.",
    role: "Agency Director"
  }
];

export const pricingPlans = [
  {
    name: "Launch",
    price: "$499",
    summary: "For businesses starting with AI lead capture.",
    features: ["AI intake form", "Basic chatbot", "Email notifications"]
  },
  {
    name: "Growth",
    price: "$899",
    summary: "For teams that need booking and follow-ups.",
    features: ["Booking assistant", "CRM-ready exports", "SMS/email follow-ups"],
    featured: true
  },
  {
    name: "Scale",
    price: "Custom",
    summary: "For multi-location or high-volume operators.",
    features: ["Advanced workflows", "Human handoff", "Dashboard reporting"]
  }
];

export const faqs = [
  {
    q: "Can this connect to my current website?",
    a: "Yes. The system is designed to embed into existing websites and connect to forms, calendars, CRMs, and inboxes."
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. KRAZE AI handles the setup, workflow design, and launch plan so your team can focus on customers."
  },
  {
    q: "How fast can we launch?",
    a: "Most starter systems can be mapped in a consultation and launched after the required business details are collected."
  }
];

export const pillars = [
  { label: "Lead Capture", icon: Rocket },
  { label: "Smart Replies", icon: MessagesSquare },
  { label: "Automation", icon: Sparkles },
  { label: "Reliability", icon: ShieldCheck }
];
