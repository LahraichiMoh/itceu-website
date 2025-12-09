import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { APP_LOGO, HQ_ADDRESS, PHONE_US, PHONE_MOROCCO, EMAIL_INFO } from '@/const';

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt="ITCEU Logo" className="h-16 w-16 bg-white rounded-lg p-2" />
              <span className="font-bold text-lg">
                {language === 'ar' ? 'الاتحاد الدولي' : 'ITCEU'}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {language === 'ar'
                ? 'منارة التميز في التدريب والتعليم العالمي'
                : 'A Beacon of Excellence in Global Training and Education'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    {t('nav.about')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/founders">
                  <span className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    {t('nav.founders')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/accreditation">
                  <span className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    {t('nav.accreditation')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/membership">
                  <span className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    {t('nav.membership')}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{HQ_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{PHONE_US}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{PHONE_MOROCCO}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{EMAIL_INFO}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.follow')}</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} ITCEU. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
