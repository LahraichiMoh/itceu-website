import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  Building2, 
  Award, 
  Globe,
  CheckCircle2,
  DollarSign,
  ArrowRight
} from "lucide-react";

export default function Membership() {
  const { language } = useLanguage();

  const categories = [
    {
      icon: Users,
      nameAr: "عضوية فردية - مدربون",
      nameEn: "Individual Membership - Trainers",
      descAr: "للمدربين والمستشارين الأفراد العاملين في مجال التدريب",
      descEn: "For individual trainers and consultants working in the training field",
      requirementsAr: [
        "شهادة جامعية (بكالوريوس) كحد أدنى",
        "خبرة تدريبية لا تقل عن سنة واحدة",
        "سيرة ذاتية محدثة",
        "رسالة تعريفية توضح الاهتمام بالانضمام"
      ],
      requirementsEn: [
        "Bachelor's degree minimum",
        "Minimum 1 year of training experience",
        "Updated CV",
        "Cover letter explaining interest in joining"
      ],
      feeAr: "200 دولار سنوياً",
      feeEn: "$200 annually",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      nameAr: "عضوية فردية - أكاديميون",
      nameEn: "Individual Membership - Academics",
      descAr: "لأساتذة الجامعات والباحثين في مجال التعليم والتدريب",
      descEn: "For university professors and researchers in education and training",
      requirementsAr: [
        "شهادة دكتوراه أو ماجستير",
        "عمل أكاديمي في مجال التعليم أو التدريب",
        "سيرة ذاتية أكاديمية",
        "قائمة بالمنشورات العلمية (إن وجدت)"
      ],
      requirementsEn: [
        "PhD or Master's degree",
        "Academic work in education or training",
        "Academic CV",
        "List of scientific publications (if any)"
      ],
      feeAr: "150 دولار سنوياً",
      feeEn: "$150 annually",
      color: "bg-purple-500"
    },
    {
      icon: Building2,
      nameAr: "عضوية مؤسسية",
      nameEn: "Institutional Membership",
      descAr: "للمؤسسات التعليمية ومراكز التدريب والجامعات",
      descEn: "For educational institutions, training centers, and universities",
      requirementsAr: [
        "ترخيص رسمي للمؤسسة",
        "نشاط في مجال التعليم أو التدريب",
        "ملف تعريفي بالمؤسسة وأنشطتها",
        "تعيين ممثل رسمي للمؤسسة"
      ],
      requirementsEn: [
        "Official institution license",
        "Activity in education or training",
        "Institution profile and activities",
        "Appointment of official representative"
      ],
      feeAr: "1,000 دولار سنوياً",
      feeEn: "$1,000 annually",
      color: "bg-green-500"
    },
    {
      icon: Award,
      nameAr: "عضوية شرفية",
      nameEn: "Honorary Membership",
      descAr: "للشخصيات البارزة والمساهمين المتميزين في مجال التدريب",
      descEn: "For prominent figures and distinguished contributors in training",
      requirementsAr: [
        "إسهامات بارزة في مجال التدريب والتعليم",
        "ترشيح من عضوين من المجلس التنفيذي",
        "موافقة الجمعية العامة",
        "سيرة ذاتية توضح الإنجازات"
      ],
      requirementsEn: [
        "Outstanding contributions to training and education",
        "Nomination by two Executive Council members",
        "General Assembly approval",
        "CV highlighting achievements"
      ],
      feeAr: "معفاة من الرسوم",
      feeEn: "Fee waived",
      color: "bg-amber-500"
    },
    {
      icon: Globe,
      nameAr: "عضوية منتسبة",
      nameEn: "Associate Membership",
      descAr: "للمهتمين بمجال التدريب والراغبين في التطوير المهني",
      descEn: "For those interested in training and seeking professional development",
      requirementsAr: [
        "اهتمام بمجال التدريب والتعليم",
        "رغبة في التطوير المهني",
        "استمارة طلب العضوية",
        "لا يشترط خبرة سابقة"
      ],
      requirementsEn: [
        "Interest in training and education",
        "Desire for professional development",
        "Membership application form",
        "No prior experience required"
      ],
      feeAr: "100 دولار سنوياً",
      feeEn: "$100 annually",
      color: "bg-teal-500"
    }
  ];

  const membershipBenefits = [
    {
      titleAr: "اعتماد مهني دولي",
      titleEn: "International Professional Accreditation",
      descAr: "الحصول على شهادات اعتماد معترف بها عالمياً",
      descEn: "Obtain globally recognized accreditation certificates"
    },
    {
      titleAr: "شبكة عالمية",
      titleEn: "Global Network",
      descAr: "التواصل مع مدربين ومستشارين من أكثر من 100 دولة",
      descEn: "Connect with trainers and consultants from over 100 countries"
    },
    {
      titleAr: "تطوير مستمر",
      titleEn: "Continuous Development",
      descAr: "الوصول إلى برامج تدريبية وورش عمل متخصصة",
      descEn: "Access specialized training programs and workshops"
    },
    {
      titleAr: "مكتبة رقمية",
      titleEn: "Digital Library",
      descAr: "الوصول إلى آلاف الموارد التعليمية والبحثية",
      descEn: "Access thousands of educational and research resources"
    },
    {
      titleAr: "خصومات حصرية",
      titleEn: "Exclusive Discounts",
      descAr: "خصومات على المؤتمرات والفعاليات والدورات",
      descEn: "Discounts on conferences, events, and courses"
    },
    {
      titleAr: "شهادة عضوية",
      titleEn: "Membership Certificate",
      descAr: "شهادة عضوية رسمية قابلة للتحقق إلكترونياً",
      descEn: "Official membership certificate verifiable electronically"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'العضوية' : 'Membership'}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {language === 'ar'
                ? 'انضم إلى أكبر شبكة عالمية للمدربين والمستشارين ومهندسي التعليم'
                : 'Join the largest global network of trainers, consultants, and education engineers'}
            </p>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'ar' ? 'فئات العضوية' : 'Membership Categories'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'خمس فئات مختلفة تناسب جميع المهتمين بمجال التدريب والتعليم'
                : 'Five different categories suitable for all those interested in training and education'}
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 md:w-1/3">
                        <div className={`h-16 w-16 rounded-full ${category.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {language === 'ar' ? category.nameAr : category.nameEn}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {language === 'ar' ? category.descAr : category.descEn}
                          </p>
                          <Badge variant="secondary" className="gap-2">
                            <DollarSign className="h-3 w-3" />
                            {language === 'ar' ? category.feeAr : category.feeEn}
                          </Badge>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-lg mb-3">
                          {language === 'ar' ? 'شروط الانضمام:' : 'Membership Requirements:'}
                        </h4>
                        <ul className="space-y-2">
                          {(language === 'ar' ? category.requirementsAr : category.requirementsEn).map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'ar' ? 'مزايا العضوية' : 'Membership Benefits'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'استمتع بمجموعة واسعة من المزايا والخدمات الحصرية للأعضاء'
                : 'Enjoy a wide range of exclusive benefits and services for members'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold text-lg">
                    {language === 'ar' ? benefit.titleAr : benefit.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' ? benefit.descAr : benefit.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              {language === 'ar' ? 'خطوات التقديم' : 'Application Process'}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  titleAr: "اختر الفئة",
                  titleEn: "Choose Category",
                  descAr: "حدد فئة العضوية المناسبة لك",
                  descEn: "Select the membership category suitable for you"
                },
                {
                  step: "2",
                  titleAr: "املأ الطلب",
                  titleEn: "Fill Application",
                  descAr: "أكمل استمارة طلب العضوية",
                  descEn: "Complete the membership application form"
                },
                {
                  step: "3",
                  titleAr: "أرفق المستندات",
                  titleEn: "Attach Documents",
                  descAr: "قدم المستندات المطلوبة",
                  descEn: "Submit required documents"
                },
                {
                  step: "4",
                  titleAr: "ادفع الرسوم",
                  titleEn: "Pay Fees",
                  descAr: "سدد رسوم العضوية السنوية",
                  descEn: "Pay annual membership fees"
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold">
                      {language === 'ar' ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' ? item.descAr : item.descEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'ar'
              ? 'هل أنت مستعد للانضمام؟'
              : 'Ready to Join?'}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'ابدأ رحلتك المهنية معنا اليوم وكن جزءاً من الشبكة العالمية للمدربين'
              : 'Start your professional journey with us today and be part of the global network of trainers'}
          </p>
          <Button size="lg" variant="secondary" className="gap-2 text-lg">
            {language === 'ar' ? 'قدم طلب العضوية الآن' : 'Apply for Membership Now'}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
