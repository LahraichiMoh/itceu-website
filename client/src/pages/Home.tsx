import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { 
  Award, 
  Users, 
  Globe, 
  BookOpen, 
  TrendingUp, 
  Shield,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Award,
      titleAr: "اعتماد مهني دولي",
      titleEn: "International Professional Accreditation",
      descAr: "نظام اعتماد شامل بأربع مستويات مهنية معترف بها عالمياً",
      descEn: "Comprehensive accreditation system with four globally recognized professional levels"
    },
    {
      icon: Users,
      titleAr: "شبكة عالمية",
      titleEn: "Global Network",
      descAr: "انضم إلى شبكة من المدربين والمستشارين من أكثر من 100 دولة",
      descEn: "Join a network of trainers and consultants from over 100 countries"
    },
    {
      icon: BookOpen,
      titleAr: "تطوير مستمر",
      titleEn: "Continuous Development",
      descAr: "برامج تدريبية متقدمة وورش عمل دولية لتطوير مهاراتك",
      descEn: "Advanced training programs and international workshops to develop your skills"
    },
    {
      icon: Globe,
      titleAr: "معايير دولية",
      titleEn: "International Standards",
      descAr: "معايير جودة عالمية تضمن التميز في التدريب والاستشارات",
      descEn: "Global quality standards ensuring excellence in training and consulting"
    },
    {
      icon: TrendingUp,
      titleAr: "فرص النمو",
      titleEn: "Growth Opportunities",
      descAr: "فرص للتعاون الدولي والمشاركة في مشاريع عالمية",
      descEn: "Opportunities for international collaboration and participation in global projects"
    },
    {
      icon: Shield,
      titleAr: "حماية المهنة",
      titleEn: "Professional Protection",
      descAr: "دفتر تحملات وأخلاقيات مهنية تحمي حقوق المدربين والمتدربين",
      descEn: "Code of ethics and professional standards protecting trainers' and trainees' rights"
    }
  ];

  const stats = [
    { numberAr: "+100", numberEn: "100+", labelAr: "دولة عضو", labelEn: "Member Countries" },
    { numberAr: "+10,000", numberEn: "10,000+", labelAr: "مدرب معتمد", labelEn: "Certified Trainers" },
    { numberAr: "+500", numberEn: "500+", labelAr: "مؤسسة شريكة", labelEn: "Partner Organizations" },
    { numberAr: "5", numberEn: "5", labelAr: "قارات", labelEn: "Continents" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/global_network.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/membership">
                <Button size="lg" variant="secondary" className="gap-2 text-lg">
                  {t('hero.cta.join')}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {t('hero.cta.learn')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {language === 'ar' ? stat.numberAr : stat.numberEn}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {language === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'ar' ? 'لماذا الاتحاد الدولي؟' : 'Why ITCEU?'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'نقدم منصة شاملة لتطوير المدربين والمستشارين وفق أعلى المعايير الدولية'
                : 'We provide a comprehensive platform for developing trainers and consultants according to the highest international standards'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      {language === 'ar' ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' ? feature.descAr : feature.descEn}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'ar'
              ? 'هل أنت مستعد للانضمام إلى الاتحاد الدولي؟'
              : 'Ready to Join the International Union?'}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'ابدأ رحلتك المهنية معنا واحصل على اعتماد دولي معترف به عالمياً'
              : 'Start your professional journey with us and get internationally recognized accreditation'}
          </p>
          <Link href="/membership">
            <Button size="lg" variant="secondary" className="gap-2 text-lg">
              {language === 'ar' ? 'قدم طلب العضوية' : 'Apply for Membership'}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
