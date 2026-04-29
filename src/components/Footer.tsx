import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isPathActive = (path: string) => location.pathname === path;

  return (
    <footer className="w-full py-4 px-6 bg-background border-t border-white/10 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src="/skyddalogolabel.svg" alt="Skydda." className="h-8 w-auto" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            © {currentYear} Skydda. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          <Link
            to="/privacy-policy"
            className={`text-[10px] tracking-[0.2em] uppercase leading-none transition-all duration-300 flex items-center gap-2 group ${isPathActive("/privacy-policy") ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
          >
            {isPathActive("/privacy-policy") && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            )}
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className={`text-[10px] tracking-[0.2em] uppercase leading-none transition-all duration-300 flex items-center gap-2 group ${isPathActive("/terms-of-service") ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
          >
            {isPathActive("/terms-of-service") && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            )}
            Terms of Service
          </Link>
          {/* <Link
            to="/support"
            className={`text-[10px] tracking-[0.2em] uppercase leading-none transition-all duration-300 flex items-center gap-2 group ${isPathActive("/support") ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
          >
            {isPathActive("/support") && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            )}
            Support
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
