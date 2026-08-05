import {
  Sparkles,
  Smile,
  Anchor,
  Move,
  Baby,
  ClipboardList,
  MessageCircle,
  Stethoscope,
  ScanLine,
  FileCheck2,
  Star,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const ICONS = {
  Sparkles,
  Smile,
  Anchor,
  Move,
  Baby,
  ClipboardList,
  MessageCircle,
  Stethoscope,
  ScanLine,
  FileCheck2,
  Star,
  MapPin,
  ShieldCheck,
} as const;

export type IconName = keyof typeof ICONS;
