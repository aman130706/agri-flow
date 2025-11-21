import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card3D } from "@/components/Card3D";
import heroImage from "@/assets/hero-farm.jpg";
import { Cloud, Sprout, TestTube, Bug, TrendingUp, MessageCircle } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const profile = localStorage.getItem("farmerProfile");
    if (!profile) {
      navigate("/onboarding");
    }
  }, [navigate]);

  const features = [
    { title: "Weather", icon: Cloud, path: "/weather", color: "bg-sky/10" },
    { title: "Crop Guide", icon: Sprout, path: "/crop-guide", color: "bg-earth/10" },
    { title: "Soil Health", icon: TestTube, path: "/soil", color: "bg-clay/10" },
    { title: "Pest Detection", icon: Bug, path: "/pest-detection", color: "bg-destructive/10" },
    { title: "Market Prices", icon: TrendingUp, path: "/market", color: "bg-accent/10" },
    { title: "AI Assistant", icon: MessageCircle, path: "/chatbot", color: "bg-primary/10" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 h-full flex items-end p-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Farmer Assistant
            </h1>
            <p className="text-lg text-muted-foreground">Soil to Sold</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card3D
              key={feature.title}
              onClick={() => navigate(feature.path)}
              className={`p-6 animate-slide-up ${feature.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
}
