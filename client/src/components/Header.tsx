import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { APP_LOGO } from '@/const';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'founders', href: '/founders' },
    { key: 'council', href: '/council' },
    { key: 'committees', href: '/committees' },
    { key: 'accreditation', href: '/accreditation' },
    { key: 'membership', href: '/membership' },
    { key: 'events', href: '/events' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={APP_LOGO} alt="ITCEU Logo" className="h-12 w-12" />
            <span className="hidden md:block font-bold text-lg text-primary">
              {language === 'ar' ? 'الاتحاد الدولي' : 'ITCEU'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href}>
              <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer">
                {t(`nav.${item.key}`)}
              </span>
            </Link>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'ar' ? 'EN' : 'عربي'}
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href}>
                <span
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
