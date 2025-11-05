import { useLanguage } from "@/contexts/LanguageContext";
import EventCard from "./EventCard";

const Events = () => {
  const { language, t } = useLanguage();

  const events = language === 'en' ? [
    {
      title: "French-Japanese Business Summit 2025",
      date: "November 6, 2025",
      city: "Tokyo, Japan",
      description: "Bilateral cooperation between French & Japanese companies, strengthening economic ties and fostering new partnerships.",
      registrationLink: "https://www.ccifj.or.jp/en/events/upcoming-events/event-details/event/french-japanese-business-summit-2025.html"
    },
    {
      title: "French/Japanese Conference on International Economies: Challenges Ahead",
      date: "February 28 - March 1, 2026",
      city: "Kyoto, Japan",
      description: "International economics conference with French & Japanese academic and business involvement, addressing global economic challenges.",
      registrationLink: "https://fjc2026.sciencesconf.org/"
    },
    {
      title: "Japan Expo Paris 2026",
      date: "July 9-12, 2026",
      city: "Paris, France",
      description: "Celebrating Japanese culture in France with strong cultural exchange between France and Japan, featuring anime, manga, gaming, and traditional arts.",
      registrationLink: "https://www.japan-expo-paris.com/en/"
    },
    {
      title: "Sumo Tournament Paris 2026",
      date: "June 2026",
      city: "Paris, France (Accor Arena)",
      description: "A cultural-sporting event bridging Japan's sumo tradition and French audiences, featuring professional sumo wrestlers in Paris.",
      registrationLink: "https://english.aawsat.com/culture/5102855-sumo-stage-event-paris-part-global-push"
    },
  ] : [
    {
      title: "日仏ビジネスサミット 2025",
      date: "2025年11月6日",
      city: "日本・東京",
      description: "フランスと日本の企業間の二国間協力、経済的つながりの強化と新しいパートナーシップの促進。",
      registrationLink: "https://www.ccifj.or.jp/en/events/upcoming-events/event-details/event/french-japanese-business-summit-2025.html"
    },
    {
      title: "日仏国際経済会議：今後の課題",
      date: "2026年2月28日 - 3月1日",
      city: "日本・京都",
      description: "フランスと日本の学術界およびビジネス界が参加する国際経済会議で、グローバルな経済課題に取り組みます。",
      registrationLink: "https://fjc2026.sciencesconf.org/"
    },
    {
      title: "ジャパンエキスポ パリ 2026",
      date: "2026年7月9日-12日",
      city: "フランス・パリ",
      description: "フランスで日本文化を祝う、フランスと日本の強力な文化交流イベント。アニメ、マンガ、ゲーム、伝統芸術を特集。",
      registrationLink: "https://www.japan-expo-paris.com/en/"
    },
    {
      title: "相撲トーナメント パリ 2026",
      date: "2026年6月",
      city: "フランス・パリ（アコーアリーナ）",
      description: "日本の相撲の伝統とフランスの観客を結ぶ文化スポーツイベント。プロの力士がパリで競演します。",
      registrationLink: "https://english.aawsat.com/culture/5102855-sumo-stage-event-paris-part-global-push"
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
