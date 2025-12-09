import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Award, 
  TrendingUp, 
  Star, 
  Crown, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function Accreditation() {
  const { language } = useLanguage();

  const levels = [
    {
      icon: Award,
      code: "AT",
      nameAr: "مدرب معتمد",
      nameEn: "Accredited Trainer",
      color: "bg-blue-500",
      descAr: "المستوى الأساسي للاعتماد المهني للمدربين الجدد",
      descEn: "Basic level of professional accreditation for new trainers",
      requirementsAr: [
        "شهادة جامعية (بكالوريوس) في أي تخصص",
        "خبرة تدريبية لا تقل عن سنتين",
        "إتمام 40 ساعة تدريبية معتمدة",
        "اجتياز اختبار الكفاءة التدريبية",
        "تقديم ملف إنجاز تدريبي"
      ],
      requirementsEn: [
        "Bachelor's degree in any field",
        "Minimum 2 years of training experience",
        "Completion of 40 accredited training hours",
        "Passing the training competency exam",
        "Submission of training portfolio"
      ],
      benefitsAr: [
        "شهادة اعتماد دولية معترف بها",
        "عضوية في الاتحاد الدولي",
        "الوصول إلى المكتبة الرقمية",
        "خصومات على الفعاليات والدورات"
      ],
      benefitsEn: [
        "Internationally recognized accreditation certificate",
        "Membership in the International Union",
        "Access to digital library",
        "Discounts on events and courses"
      ]
    },
    {
      icon: TrendingUp,
      code: "CT",
      nameAr: "مدرب محترف معتمد",
      nameEn: "Certified Trainer",
      color: "bg-green-500",
      descAr: "المستوى المتوسط للمدربين ذوي الخبرة المتقدمة",
      descEn: "Intermediate level for trainers with advanced experience",
      requirementsAr: [
        "الحصول على اعتماد AT لمدة سنتين على الأقل",
        "خبرة تدريبية لا تقل عن 5 سنوات",
        "إتمام 80 ساعة تطوير مهني مستمر",
        "تقديم 3 مشاريع تدريبية ناجحة",
        "نشر بحث أو دراسة حالة في مجال التدريب"
      ],
      requirementsEn: [
        "AT accreditation for at least 2 years",
        "Minimum 5 years of training experience",
        "Completion of 80 hours of continuous professional development",
        "Presentation of 3 successful training projects",
        "Publication of research or case study in training field"
      ],
      benefitsAr: [
        "جميع مزايا المستوى AT",
        "إمكانية تدريب مدربين جدد",
        "المشاركة في لجان التقييم",
        "أولوية في المؤتمرات الدولية"
      ],
      benefitsEn: [
        "All AT level benefits",
        "Ability to train new trainers",
        "Participation in evaluation committees",
        "Priority in international conferences"
      ]
    },
    {
      icon: Star,
      code: "CPT",
      nameAr: "مدرب محترف رئيسي",
      nameEn: "Certified Professional Trainer",
      color: "bg-purple-500",
      descAr: "المستوى المتقدم للمدربين الخبراء والمتخصصين",
      descEn: "Advanced level for expert and specialized trainers",
      requirementsAr: [
        "الحصول على اعتماد CT لمدة 3 سنوات على الأقل",
        "خبرة تدريبية لا تقل عن 10 سنوات",
        "إتمام 120 ساعة تطوير مهني متقدم",
        "قيادة 5 مشاريع تدريبية كبرى",
        "نشر بحثين علميين محكمين",
        "الحصول على توصيات من 3 خبراء دوليين"
      ],
      requirementsEn: [
        "CT accreditation for at least 3 years",
        "Minimum 10 years of training experience",
        "Completion of 120 hours of advanced professional development",
        "Leading 5 major training projects",
        "Publication of 2 peer-reviewed research papers",
        "Recommendations from 3 international experts"
      ],
      benefitsAr: [
        "جميع مزايا المستوى CT",
        "إمكانية تقييم واعتماد المدربين",
        "عضوية في اللجان الاستشارية",
        "تمثيل الاتحاد في المحافل الدولية"
      ],
      benefitsEn: [
        "All CT level benefits",
        "Ability to evaluate and accredit trainers",
        "Membership in advisory committees",
        "Representing the union in international forums"
      ]
    },
    {
      icon: Crown,
      code: "CMT",
      nameAr: "مدرب خبير معتمد",
      nameEn: "Certified Master Trainer",
      color: "bg-amber-500",
      descAr: "أعلى مستوى اعتماد للمدربين الرواد والقادة في المجال",
      descEn: "Highest accreditation level for pioneer trainers and field leaders",
      requirementsAr: [
        "الحصول على اعتماد CPT لمدة 5 سنوات على الأقل",
        "خبرة تدريبية لا تقل عن 15 سنة",
        "إسهامات بارزة في تطوير مجال التدريب",
        "قيادة برامج تدريبية دولية",
        "نشر 5 أبحاث علمية محكمة أو كتاب متخصص",
        "جوائز أو تكريمات دولية في مجال التدريب"
      ],
      requirementsEn: [
        "CPT accreditation for at least 5 years",
        "Minimum 15 years of training experience",
        "Outstanding contributions to training field development",
        "Leading international training programs",
        "Publication of 5 peer-reviewed papers or specialized book",
        "International awards or honors in training field"
      ],
      benefitsAr: [
        "جميع مزايا المستوى CPT",
        "عضوية مدى الحياة في الاتحاد",
        "إمكانية الترشح للمجلس التنفيذي",
        "لقب \"خبير معتمد\" في مجال التخصص",
        "إشراف على البحوث والدراسات"
      ],
      benefitsEn: [
        "All CPT level benefits",
        "Lifetime membership in the union",
        "Eligibility for Executive Council nomination",
        "Title of \"Certified Expert\" in specialization",
        "Supervision of research and studies"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'نظام الاعتماد المهني' : 'Professional Accreditation System'}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {language === 'ar'
                ? 'أربع مستويات للاعتماد المهني تواكب تطور مسيرتك التدريبية'
                : 'Four levels of professional accreditation that align with your training career development'}
            </p>
          </div>
        </div>
      </section>

      {/* Levels Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className={`h-16 w-16 rounded-full ${level.color} flex items-center justify-center mx-auto`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-1">
                      {level.code}
                    </Badge>
                    <h3 className="font-bold text-lg">
                      {language === 'ar' ? level.nameAr : level.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' ? level.descAr : level.descEn}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="space-y-12">
            {levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`h-16 w-16 rounded-full ${level.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-lg px-4 py-1">
                            {level.code}
                          </Badge>
                          <h2 className="text-3xl font-bold text-primary">
                            {language === 'ar' ? level.nameAr : level.nameEn}
                          </h2>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          {language === 'ar' ? level.descAr : level.descEn}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Requirements */}
                      <div>
                        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          {language === 'ar' ? 'متطلبات الحصول على الاعتماد:' : 'Accreditation Requirements:'}
                        </h3>
                        <ul className="space-y-2">
                          {(language === 'ar' ? level.requirementsAr : level.requirementsEn).map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                          <Star className="h-5 w-5 text-secondary" />
                          {language === 'ar' ? 'المزايا والفوائد:' : 'Benefits:'}
                        </h3>
                        <ul className="space-y-2">
                          {(language === 'ar' ? level.benefitsAr : level.benefitsEn).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-secondary mt-1">•</span>
                              <span className="text-muted-foreground">{benefit}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'ar'
              ? 'ابدأ رحلتك نحو الاعتماد المهني'
              : 'Start Your Professional Accreditation Journey'}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'انضم إلى آلاف المدربين المعتمدين حول العالم واحصل على اعتماد دولي معترف به'
              : 'Join thousands of accredited trainers worldwide and get internationally recognized accreditation'}
          </p>
          <Link href="/membership">
            <Button size="lg" variant="secondary" className="gap-2 text-lg">
              {language === 'ar' ? 'قدم طلب الاعتماد' : 'Apply for Accreditation'}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
