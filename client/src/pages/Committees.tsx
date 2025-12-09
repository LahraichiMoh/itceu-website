import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  BookOpen, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  FileText, 
  Lightbulb 
} from "lucide-react";

export default function Committees() {
  const { language } = useLanguage();

  const permanentCommittees = [
    {
      icon: Award,
      nameAr: "لجنة الاعتماد والجودة",
      nameEn: "Accreditation and Quality Committee",
      chairAr: "د. ليلى المنصوري",
      chairEn: "Dr. Layla Al-Mansouri",
      chairImage: "/committee_accreditation_chair.png",
      descAr: "تطوير معايير الاعتماد المهني وضمان جودة البرامج التدريبية",
      descEn: "Developing professional accreditation standards and ensuring quality of training programs",
      responsibilitiesAr: [
        "وضع معايير الاعتماد المهني للمدربين",
        "تقييم ومراجعة طلبات الاعتماد",
        "تطوير أدوات تقييم الجودة",
        "متابعة التزام الأعضاء بمعايير الجودة"
      ],
      responsibilitiesEn: [
        "Establishing professional accreditation standards for trainers",
        "Evaluating and reviewing accreditation applications",
        "Developing quality assessment tools",
        "Monitoring members' compliance with quality standards"
      ]
    },
    {
      icon: BookOpen,
      nameAr: "لجنة البحث والتطوير",
      nameEn: "Research and Development Committee",
      chairAr: "د. كينجي تاناكا",
      chairEn: "Dr. Kenji Tanaka",
      chairImage: "/committee_research_chair.png",
      descAr: "دعم البحث العلمي والابتكار في مجال التدريب والتعليم",
      descEn: "Supporting scientific research and innovation in training and education",
      responsibilitiesAr: [
        "تشجيع البحث العلمي في مجال التدريب",
        "نشر الدراسات والأبحاث المتخصصة",
        "تنظيم المؤتمرات العلمية السنوية",
        "دعم مشاريع الابتكار التعليمي"
      ],
      responsibilitiesEn: [
        "Encouraging scientific research in training",
        "Publishing specialized studies and research",
        "Organizing annual scientific conferences",
        "Supporting educational innovation projects"
      ]
    },
    {
      icon: Globe,
      nameAr: "لجنة العلاقات الدولية",
      nameEn: "International Relations Committee",
      chairAr: "د. ماريا رودريغيز",
      chairEn: "Dr. Maria Rodriguez",
      chairImage: "/committee_international_chair.png",
      descAr: "بناء الشراكات الدولية وتعزيز التعاون العالمي",
      descEn: "Building international partnerships and promoting global collaboration",
      responsibilitiesAr: [
        "إقامة شراكات مع المنظمات الدولية",
        "تنسيق برامج التبادل الدولي",
        "تمثيل الاتحاد في المحافل الدولية",
        "تطوير برامج التعاون الإقليمي"
      ],
      responsibilitiesEn: [
        "Establishing partnerships with international organizations",
        "Coordinating international exchange programs",
        "Representing the union in international forums",
        "Developing regional cooperation programs"
      ]
    },
    {
      icon: Shield,
      nameAr: "لجنة الأخلاقيات المهنية",
      nameEn: "Professional Ethics Committee",
      chairAr: "د. جوزيف أوكونكو",
      chairEn: "Dr. Joseph Okonkwo",
      chairImage: "/committee_ethics_chair.png",
      descAr: "وضع وتطبيق معايير الأخلاقيات المهنية والسلوك المهني",
      descEn: "Establishing and implementing professional ethics and conduct standards",
      responsibilitiesAr: [
        "وضع ميثاق الشرف المهني",
        "معالجة الشكاوى الأخلاقية",
        "تطوير برامج التوعية بالأخلاقيات",
        "مراقبة الالتزام بالمعايير الأخلاقية"
      ],
      responsibilitiesEn: [
        "Establishing the professional code of honor",
        "Handling ethical complaints",
        "Developing ethics awareness programs",
        "Monitoring compliance with ethical standards"
      ]
    },
    {
      icon: TrendingUp,
      nameAr: "لجنة البرامج والتطوير المهني",
      nameEn: "Programs and Professional Development Committee",
      chairAr: "د. بريا شارما",
      chairEn: "Dr. Priya Sharma",
      chairImage: "/committee_programs_chair.png",
      descAr: "تصميم وتنفيذ برامج التطوير المهني المستمر",
      descEn: "Designing and implementing continuous professional development programs",
      responsibilitiesAr: [
        "تطوير برامج التدريب المتخصصة",
        "تنظيم ورش العمل والدورات التدريبية",
        "إعداد المواد التعليمية والتدريبية",
        "تقييم فعالية البرامج التدريبية"
      ],
      responsibilitiesEn: [
        "Developing specialized training programs",
        "Organizing workshops and training courses",
        "Preparing educational and training materials",
        "Evaluating training program effectiveness"
      ]
    },
    {
      icon: Users,
      nameAr: "لجنة العضوية والانتساب",
      nameEn: "Membership and Affiliation Committee",
      chairAr: "د. أحمد السعيد",
      chairEn: "Dr. Ahmed Al-Saeed",
      chairImage: "/founder_badr_alqabbaj.png",
      descAr: "إدارة شؤون العضوية وتطوير قاعدة الأعضاء",
      descEn: "Managing membership affairs and developing the member base",
      responsibilitiesAr: [
        "معالجة طلبات العضوية الجديدة",
        "تطوير استراتيجيات جذب الأعضاء",
        "إدارة قاعدة بيانات الأعضاء",
        "تنظيم فعاليات الأعضاء"
      ],
      responsibilitiesEn: [
        "Processing new membership applications",
        "Developing member recruitment strategies",
        "Managing member database",
        "Organizing member events"
      ]
    },
    {
      icon: FileText,
      nameAr: "لجنة النشر والإعلام",
      nameEn: "Publishing and Media Committee",
      chairAr: "د. إيلينا بوبوفا",
      chairEn: "Dr. Elena Popova",
      chairImage: "/founder_sarah_mitchell.png",
      descAr: "إدارة المنشورات والمحتوى الإعلامي للاتحاد",
      descEn: "Managing union publications and media content",
      responsibilitiesAr: [
        "إصدار المجلة الدورية للاتحاد",
        "إدارة الموقع الإلكتروني ووسائل التواصل",
        "نشر الأخبار والفعاليات",
        "إنتاج المحتوى التعليمي الرقمي"
      ],
      responsibilitiesEn: [
        "Publishing the union's periodic journal",
        "Managing website and social media",
        "Publishing news and events",
        "Producing digital educational content"
      ]
    },
    {
      icon: Lightbulb,
      nameAr: "لجنة الابتكار والتكنولوجيا",
      nameEn: "Innovation and Technology Committee",
      chairAr: "د. ديفيد تشن",
      chairEn: "Dr. David Chen",
      chairImage: "/founder_michael_anderson.png",
      descAr: "دمج التكنولوجيا الحديثة في التدريب والتعليم",
      descEn: "Integrating modern technology in training and education",
      responsibilitiesAr: [
        "تطوير منصات التعلم الإلكتروني",
        "دمج الذكاء الاصطناعي في التدريب",
        "تقييم التقنيات التعليمية الحديثة",
        "تدريب الأعضاء على التقنيات الجديدة"
      ],
      responsibilitiesEn: [
        "Developing e-learning platforms",
        "Integrating AI in training",
        "Evaluating modern educational technologies",
        "Training members on new technologies"
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
              {language === 'ar' ? 'اللجان الدائمة' : 'Permanent Committees'}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {language === 'ar'
                ? 'ثماني لجان متخصصة تعمل على تحقيق أهداف الاتحاد الاستراتيجية'
                : 'Eight specialized committees working to achieve the union\'s strategic objectives'}
            </p>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-12">
            {permanentCommittees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-[200px_1fr] gap-6">
                      {/* Chair Photo */}
                      <div className="space-y-3">
                        <img
                          src={committee.chairImage}
                          alt={committee.chairEn}
                          className="w-full rounded-lg shadow-lg"
                        />
                        <div className="text-center">
                          <Badge variant="secondary" className="mb-2">
                            {language === 'ar' ? 'رئيس اللجنة' : 'Chair'}
                          </Badge>
                          <p className="font-semibold text-sm">
                            {language === 'ar' ? committee.chairAr : committee.chairEn}
                          </p>
                        </div>
                      </div>

                      {/* Committee Info */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold text-primary mb-2">
                              {language === 'ar' ? committee.nameAr : committee.nameEn}
                            </h2>
                            <p className="text-muted-foreground text-lg">
                              {language === 'ar' ? committee.descAr : committee.descEn}
                            </p>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3">
                            {language === 'ar' ? 'المهام والمسؤوليات:' : 'Responsibilities:'}
                          </h3>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {(language === 'ar' ? committee.responsibilitiesAr : committee.responsibilitiesEn).map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-muted-foreground">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Temporary Committees Info */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              {language === 'ar' ? 'اللجان المؤقتة' : 'Temporary Committees'}
            </h2>
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'ar'
                    ? 'بالإضافة إلى اللجان الدائمة، يمكن للمجلس التنفيذي تشكيل لجان مؤقتة لمعالجة قضايا محددة أو تنفيذ مشاريع خاصة. تُحل هذه اللجان بعد إنجاز المهمة المكلفة بها.'
                    : 'In addition to permanent committees, the Executive Council may form temporary committees to address specific issues or implement special projects. These committees are dissolved after completing their assigned tasks.'}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'ar'
                    ? 'أمثلة على اللجان المؤقتة: لجنة تنظيم المؤتمر السنوي، لجنة مراجعة النظام الأساسي، لجنة تطوير استراتيجية معينة، لجنة تقييم مشروع محدد.'
                    : 'Examples of temporary committees: Annual Conference Organizing Committee, Statute Review Committee, Specific Strategy Development Committee, Specific Project Evaluation Committee.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
