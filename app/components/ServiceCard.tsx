import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  summary?: string;
  description?: string;
  href?: string;
  icon?: ReactNode;
};

const cardImage = "linear-gradient(180deg, rgba(15,23,42,0.88), rgba(15,23,42,0.9)), url('https://images.unsplash.com/photo-1517430816045-df4b7de01d0c?auto=format&fit=crop&w=1200&q=80')";

export default function ServiceCard({ title, summary, description, href = "/contact", icon }: Props) {
  return (
    <div
      className="card relative overflow-hidden border border-white/10 hover:border-accent/40 hover:shadow-xl transition-all duration-200 ease-out flex flex-col h-full text-left"
      style={{
        backgroundImage: cardImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-36 w-36 rounded-full bg-white/5 blur-2xl" />
      </div>
      <div className="relative p-4 sm:p-6">
        <div className="flex items-start gap-2 sm:gap-3 mb-3">
          {icon && <div className="text-accent text-xl sm:text-3xl flex-shrink-0">{icon}</div>}
          <h3 className="text-lg sm:text-2xl font-semibold text-white tracking-tight">{title}</h3>
        </div>
        {summary && <p className="text-xs sm:text-sm text-slate-200 font-medium mb-2 sm:mb-3 leading-snug">{summary}</p>}
        {description && <p className="text-sm sm:text-base text-slate-300 leading-6 sm:leading-7 mb-4 sm:mb-6">{description}</p>}
      </div>
      <div className="mt-auto pt-4 px-4 sm:px-6 pb-4 sm:pb-6">
        <Link href={href} className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-accent/90 w-full text-center">
          Learn More
        </Link>
      </div>
    </div>
  );
}
