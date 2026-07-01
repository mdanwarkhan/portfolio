export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Terra Core Innovations — Building tomorrow together
      </div>
    </footer>
  );
}
