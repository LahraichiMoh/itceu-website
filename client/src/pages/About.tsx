import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Users, Globe, Award } from "lucide-react";

export default function About() {
  const { language } = useLanguage();

  const objectives = [
    {
      icon: Award,
      titleAr: "وضع معايير الجودة",
      titleEn: "Establishing Quality Standards",
      descAr: "تطوير ووضع معايير دولية للتدريب والاستشارات التعليمية",
      descEn: "Developing and establishing international standards for training and educational consulting"
    },
    {
      icon: Users,
      titleAr: "بناء القدرات",
      titleEn: "Capacity Building",
      descAr: "تطوير قدرات المدربين والمستشارين من خلال برامج تدريبية متقدمة",
      descEn: "Developing trainers' and consultants' capacities through advanced training programs"
    },
    {
      icon: Globe,
      titleAr: "التعاون الدولي",
      titleEn: "International Collaboration",
      descAr: "تعزيز التعاون وتبادل الخبرات بين المدربين على المستوى العالمي",
      descEn: "Promoting collaboration and knowledge exchange among trainers globally"
    },
    {
      icon: Lightbulb,
      titleAr: "الابتكار والبحث",
      titleEn: "Innovation and Research",
      descAr: "دعم البحث العلمي والابتكار في مجال التدريب والتعليم",
      descEn: "Supporting scientific research and innovation in training and education"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'عن الاتحاد الدولي' : 'About ITCEU'}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {language === 'ar'
                ? 'نحن منظمة دولية غير ربحية تهدف إلى تطوير معايير التدريب والاستشارات التعليمية على مستوى العالم'
                : 'We are an international non-profit organization dedicated to developing training and educational consulting standards worldwide'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-center text-primary">
                  {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                </h2>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  {language === 'ar'
                    ? 'أن نكون المرجع الدولي الرائد في تطوير معايير التدريب والاستشارات التعليمية، ونساهم في بناء جيل من المدربين والمستشارين المحترفين القادرين على إحداث تأثير إيجابي في مجتمعاتهم.'
                    : 'To be the leading international reference in developing training and educational consulting standards, contributing to building a generation of professional trainers and consultants capable of making a positive impact in their communities.'}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-center text-accent">
                  {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
                </h2>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  {language === 'ar'
                    ? 'تعزيز الجودة والاحترافية في مجال التدريب والاستشارات التعليمية من خلال وضع معايير دولية، وتقديم برامج اعتماد مهني، وتوفير منصة للتعاون الدولي وتبادل الخبرات.'
                    : 'To promote quality and professionalism in training and educational consulting through establishing international standards, providing professional accreditation programs, and offering a platform for international collaboration and knowledge exchange.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'ar' ? 'أهدافنا الاستراتيجية' : 'Our Strategic Objectives'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'نعمل على تحقيق مجموعة من الأهداف الاستراتيجية لتطوير مجال التدريب والاستشارات التعليمية'
                : 'We work towards achieving a set of strategic objectives to develop the field of training and educational consulting'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        {language === 'ar' ? objective.titleAr : objective.titleEn}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'ar' ? objective.descAr : objective.descEn}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/hero_training_session.png"
                alt="Training Session"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {language === 'ar' ? 'التزامنا بالتميز' : 'Our Commitment to Excellence'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'ar'
                  ? 'نلتزم بتقديم أعلى معايير الجودة في جميع برامجنا وخدماتنا. نعمل مع نخبة من الخبراء والمتخصصين من مختلف أنحاء العالم لضمان تقديم محتوى تدريبي متميز يواكب أحدث التطورات في مجال التدريب والتعليم.'
                  : 'We are committed to delivering the highest quality standards in all our programs and services. We work with elite experts and specialists from around the world to ensure the delivery of outstanding training content that keeps pace with the latest developments in training and education.'}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'ar'
                  ? 'من خلال شبكتنا العالمية، نوفر فرصاً للتعلم المستمر والتطوير المهني، مما يمكّن المدربين والمستشارين من تحقيق أهدافهم المهنية والمساهمة في تطوير مجتمعاتهم.'
                  : 'Through our global network, we provide opportunities for continuous learning and professional development, enabling trainers and consultants to achieve their professional goals and contribute to the development of their communities.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
