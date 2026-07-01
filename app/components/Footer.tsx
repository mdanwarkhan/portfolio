export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-xs sm:text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Terra Core Innovations — Building tomorrow together</p>
      </div>
    </footer>
  );
}
