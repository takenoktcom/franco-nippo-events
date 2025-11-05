import { useLanguage } from "@/contexts/LanguageContext";
import EventCard from "./EventCard";

const Events = () => {
  const { language, t } = useLanguage();

  const events = language === 'en' ? [
    {
      title: "Franco-Japanese Tech Summit 2025",
      date: "March 15, 2025",
      city: "Paris, France",
      description: "Join industry leaders to explore emerging technologies and innovation opportunities between France and Japan.",
      registrationLink: "https://example.com/register/tech-summit"
    },
    {
      title: "Sustainable Business Forum",
      date: "April 22, 2025",
      city: "Tokyo, Japan",
      description: "Discuss sustainable practices and green technologies with executives from both nations committed to environmental responsibility.",
      registrationLink: "https://example.com/register/sustainable-forum"
    },
    {
      title: "Luxury Goods & Fashion Symposium",
      date: "May 10, 2025",
      city: "Lyon, France",
      description: "Network with luxury brand representatives and explore collaboration opportunities in the premium goods sector.",
      registrationLink: "https://example.com/register/luxury-symposium"
    },
    {
      title: "Startup Acceleration Workshop",
      date: "June 5, 2025",
      city: "Osaka, Japan",
      description: "A hands-on workshop connecting French and Japanese startups with investors and mentors for cross-border growth.",
      registrationLink: "https://example.com/register/startup-workshop"
    },
  ] : [
    {
      title: "日仏テックサミット 2025",
      date: "2025年3月15日",
      city: "フランス・パリ",
      description: "業界のリーダーと共に、フランスと日本の間の新興技術とイノベーションの機会を探求します。",
      registrationLink: "https://example.com/register/tech-summit"
    },
    {
      title: "持続可能なビジネスフォーラム",
      date: "2025年4月22日",
      city: "日本・東京",
      description: "環境責任にコミットする両国の経営者と、持続可能な実践と環境技術について議論します。",
      registrationLink: "https://example.com/register/sustainable-forum"
    },
    {
      title: "高級品・ファッションシンポジウム",
      date: "2025年5月10日",
      city: "フランス・リヨン",
      description: "ラグジュアリーブランドの代表者とネットワーキングし、プレミアム商品部門でのコラボレーション機会を探ります。",
      registrationLink: "https://example.com/register/luxury-symposium"
    },
    {
      title: "スタートアップアクセラレーションワークショップ",
      date: "2025年6月5日",
      city: "日本・大阪",
      description: "国境を越えた成長のために、フランスと日本のスタートアップを投資家やメンターと結びつけるハンズオンワークショップ。",
      registrationLink: "https://example.com/register/startup-workshop"
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          {t('upcomingEvents')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
