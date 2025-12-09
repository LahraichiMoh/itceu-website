import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { FOUNDER_NAME, PERMANENT_COUNTRIES } from "@/const";

export default function Founders() {
  const { language } = useLanguage();

  const founders = [
    {
      name: "Prof. Badr Al-Qabbaj",
      nameAr: "الأستاذ بدر القباج",
      titleAr: "المؤسس الرئيسي ورئيس الاتحاد",
      titleEn: "Founder & President",
      country: "Morocco",
      countryAr: "المغرب",
      image: "/founder_badr_alqabbaj.png",
      bioAr: "خبير دولي في مجال التدريب والاستشارات التعليمية بخبرة تزيد عن 25 عاماً. قاد العديد من المبادرات الدولية لتطوير معايير التدريب المهني.",
      bioEn: "International expert in training and educational consulting with over 25 years of experience. Led numerous international initiatives to develop professional training standards.",
      email: "badr.alqabbaj@itceu.org"
    },
    {
      name: "Dr. Fatima Al-Hassani",
      nameAr: "د. فاطمة الحسني",
      titleAr: "عضو مؤسس - نائب الرئيس",
      titleEn: "Co-Founder - Vice President",
      country: "United Arab Emirates",
      countryAr: "الإمارات العربية المتحدة",
      image: "/founder_fatima_alhassani.png",
      bioAr: "خبيرة في تطوير المناهج التعليمية والتدريب المؤسسي. حاصلة على دكتوراه في علوم التربية من جامعة السوربون.",
      bioEn: "Expert in curriculum development and institutional training. Holds a PhD in Educational Sciences from Sorbonne University.",
      email: "fatima.alhassani@itceu.org"
    },
    {
      name: "Prof. Michael Anderson",
      nameAr: "البروفيسور مايكل أندرسون",
      titleAr: "عضو مؤسس - أمين عام",
      titleEn: "Co-Founder - Secretary General",
      country: "United States",
      countryAr: "الولايات المتحدة الأمريكية",
      image: "/founder_michael_anderson.png",
      bioAr: "أستاذ التعليم المستمر في جامعة هارفارد. متخصص في تصميم البرامج التدريبية وتقييم الأداء المهني.",
      bioEn: "Professor of Continuing Education at Harvard University. Specialist in training program design and professional performance evaluation.",
      email: "michael.anderson@itceu.org"
    },
    {
      name: "Prof. Dr. Hans Schmidt",
      nameAr: "البروفيسور الدكتور هانز شميدت",
      titleAr: "عضو مؤسس - أمين الصندوق",
      titleEn: "Co-Founder - Treasurer",
      country: "Germany",
      countryAr: "ألمانيا",
      image: "/founder_hans_schmidt.png",
      bioAr: "خبير في نظم التدريب المزدوج والتعليم المهني. مستشار سابق لمنظمة العمل الدولية في مجال التدريب المهني.",
      bioEn: "Expert in dual training systems and vocational education. Former consultant to the International Labour Organization in vocational training.",
      email: "hans.schmidt@itceu.org"
    },
    {
      name: "Dr. Sarah Mitchell",
      nameAr: "د. سارة ميتشل",
      titleAr: "عضو مؤسس - مدير العلاقات الدولية",
      titleEn: "Co-Founder - Director of International Relations",
      country: "Australia",
      countryAr: "أستراليا",
      image: "/founder_sarah_mitchell.png",
      bioAr: "خبيرة في التعاون الدولي وبناء الشراكات الاستراتيجية. عملت مع منظمة اليونسكو لأكثر من 15 عاماً.",
      bioEn: "Expert in international cooperation and strategic partnership building. Worked with UNESCO for over 15 years.",
      email: "sarah.mitchell@itceu.org"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'الأعضاء المؤسسون' : 'Founding Members'}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {language === 'ar'
                ? 'قادة التميز في التعليم والتدريب العالمي - خمسة خبراء من خمس قارات'
                : 'Leaders of Excellence in Global Education and Training - Five Experts from Five Continents'}
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary transition-all hover:shadow-xl ${
                  index === 0 ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <CardContent className={`p-6 ${index === 0 ? 'md:flex md:gap-8 md:items-center' : ''}`}>
                  <div className={`${index === 0 ? 'md:w-1/3' : 'w-full'} mb-4 md:mb-0`}>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div className={`${index === 0 ? 'md:w-2/3' : 'w-full'} space-y-3`}>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {language === 'ar' ? founder.nameAr : founder.name}
                      </h3>
                      <p className="text-lg text-secondary font-semibold">
                        {language === 'ar' ? founder.titleAr : founder.titleEn}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <span className="text-xl">
                          {PERMANENT_COUNTRIES.find(c => c.name === founder.country)?.flag}
                        </span>
                        {language === 'ar' ? founder.countryAr : founder.country}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'ar' ? founder.bioAr : founder.bioEn}
                    </p>
                    <div className="flex gap-3 pt-2">
                      <a
                        href={`mailto:${founder.email}`}
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Permanent Countries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'ar' ? 'الدول الدائمة في المجلس التنفيذي' : 'Permanent Council Member Countries'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'خمس دول دائمة العضوية، واحدة من كل قارة، تمثل التنوع العالمي للاتحاد'
                : 'Five permanent member countries, one from each continent, representing the global diversity of the union'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {PERMANENT_COUNTRIES.map((country, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-6xl">{country.flag}</div>
                  <h3 className="font-semibold text-lg">
                    {language === 'ar' 
                      ? founders.find(f => f.country === country.name)?.countryAr || country.name
                      : country.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar'
                      ? country.continent === 'Africa' ? 'أفريقيا'
                        : country.continent === 'Asia' ? 'آسيا'
                        : country.continent === 'North America' ? 'أمريكا الشمالية'
                        : country.continent === 'Europe' ? 'أوروبا'
                        : 'أوقيانوسيا'
                      : country.continent}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
