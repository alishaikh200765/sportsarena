const Footer = () => (
  <footer className="border-t border-border bg-foreground py-12 text-primary-foreground/70">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div>
          <span className="font-heading text-xl font-black text-primary">SPORTS ARENA</span>
          <p className="mt-1 text-sm">Your Premier Indoor Sports Destination</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#sports" className="hover:text-primary transition-colors">Sports</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} SPORTS ARENA. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
