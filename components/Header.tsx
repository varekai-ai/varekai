import Image from "next/image";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#0a0e1a]/80 backdrop-blur-xl">
      <nav className="wrap flex h-[82px] items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex items-center" aria-label="Varekai home">
          <Image
            src="/varekai-logo-horizontal.svg"
            alt="Varekai AI"
            width={720}
            height={150}
            priority
            className="h-auto w-[190px] sm:w-[220px]"
          />
        </a>
        <div className="hidden gap-9 text-sm text-muted md:flex">
          <a className="hover:text-white" href="#approach">Approach</a>
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
        <a href="#contact" className="border border-white/15 px-4 py-2 text-xs transition hover:border-blue hover:bg-blue/10 sm:px-5 sm:text-sm">
          Start an assessment
        </a>
      </nav>
    </header>
  );
}
