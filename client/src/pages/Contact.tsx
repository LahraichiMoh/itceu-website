import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import { HQ_ADDRESS, PHONE_US, PHONE_MOROCCO, EMAIL_INFO } from "@/const";

export default function Contact() {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      titleAr: "المقر الرئيسي",
      titleEn: "Headquarters",
      contentAr: HQ_ADDRESS,
      contentEn: HQ_ADDRESS
    },
    {
      icon: Phone,
      titleAr: "الهاتف (الولايات المتحدة)",
      titleEn: "Phone (United States)",
      contentAr: PHONE_US,
      contentEn: PHONE_US
    },
    {
      icon: Phone,
      titleAr: "الهاتف (المغرب)",
      titleEn: "Phone (Morocco)",
      contentAr: PHONE_MOROCCO,
      contentEn: PHONE_MOROCCO
    },
    {
      icon: Mail,
      titleAr: "البريد الإلكتروني",
      titleEn: "Email",
      contentAr: EMAIL_INFO,
      contentEn: EMAIL_INFO
    },
    {
      icon: Clock,
      titleAr: "ساعات العمل",
      titleEn: "Working Hours",
      contentAr: "الإثنين - الجمعة: 9:00 صباحاً - 5:00 مساءً (EST)",
      contentEn: "Monday - Friday: 9:00 AM - 5:00 PM (EST)"
    }
  ];

  const departments = [
    {
      nameAr: "قسم العضوية",
      nameEn: "Membership Department",
      email: "membership@itceu.org",
      descAr: "للاستفسارات حول العضوية والانضمام"
    },
    {
      nameAr: "قسم الاعتماد",
      nameEn: "Accreditation Department",
      email: "accreditation@itceu.org",
      descAr: "للاستفسارات حول الاعتماد المهني"
    },
    {
      nameAr: "قسم التدريب",
      nameEn: "Training Department",
      email: "training@itceu.org",
      descAr: "للاستفسارات حول البرامج التدريبية"
    },
    {
      nameAr: "قسم العلاقات الدولية",
      nameEn: "International Relations",
      email: "international@itceu.org",
      descAr: "للشراكات والتعاون الدولي"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {language === 'ar'
                ? 'نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلتكم المهنية'
                : 'We are here to answer your questions and assist you in your professional journey'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">
                      {language === 'ar' ? info.titleAr : info.titleEn}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' ? info.contentAr : info.contentEn}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'ar' ? 'الأقسام المتخصصة' : 'Specialized Departments'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'تواصل مع القسم المناسب للحصول على مساعدة متخصصة'
                : 'Contact the appropriate department for specialized assistance'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">
                    {language === 'ar' ? dept.nameAr : dept.nameEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' ? dept.descAr : dept.descAr}
                  </p>
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-accent hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {dept.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'ar'
                  ? 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن'
                  : 'Fill out the form below and we will contact you as soon as possible'}
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'الموضوع' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'الرسالة' : 'Message'}
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-5 w-5" />
                    {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {language === 'ar' ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Follow Us on Social Media'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'ar'
                ? 'ابقَ على اطلاع بآخر الأخبار والفعاليات والفرص التدريبية'
                : 'Stay updated with the latest news, events, and training opportunities'}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
