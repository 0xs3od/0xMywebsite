import { Home, FolderOpen, Globe, Terminal, FileText, Award, BookOpen, Briefcase, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FolderOpen, label: "File Manager", href: "#writeups" },
  { icon: Globe, label: "Browser", href: "#courses" },
  { icon: Terminal, label: "Terminal", href: "#certs" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-sidebar border-r border-border flex flex-col items-center py-6 z-50 hidden lg:flex">
      {/* Logo */}
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-8 border-glow-red">
        <span className="text-primary font-bold text-sm font-mono">D</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 flex flex-col items-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 group relative"
            title={item.label}
          >
            <item.icon size={20} />
            <span className="absolute left-14 bg-card border border-border px-2 py-1 rounded text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Clock */}
      <div className="text-center">
        <div className="text-[10px] text-muted-foreground font-mono">
          {new Date().toLocaleDateString('en', { weekday: 'short' }).toUpperCase()}
        </div>
        <div className="text-primary font-mono text-sm font-bold">
          {new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', hour12: false })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
