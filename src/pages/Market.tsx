import { Card3D } from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mandiImg from "@/assets/market-mandi.jpg";

export default function Market() {
  const navigate = useNavigate();

  const prices = [
    { crop: "Wheat", price: "₹2,150", change: "+5%", trend: "up" },
    { crop: "Rice", price: "₹3,200", change: "-2%", trend: "down" },
    { crop: "Cotton", price: "₹6,800", change: "+8%", trend: "up" },
    { crop: "Sugarcane", price: "₹350", change: "+3%", trend: "up" },
    { crop: "Tomato", price: "₹45", change: "-12%", trend: "down" },
    { crop: "Onion", price: "₹28", change: "+15%", trend: "up" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        {/* Market Header */}
        <Card3D className="mb-6 overflow-hidden animate-slide-up">
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${mandiImg})` }}
          >
            <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-1">Market Prices</h1>
                <p className="text-white/90">Today's Mandi Rates</p>
              </div>
            </div>
          </div>
        </Card3D>

        {/* Location */}
        <Card3D className="p-4 mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <p className="text-sm text-muted-foreground">
            Showing prices for: <span className="font-semibold text-foreground">Your Local Mandi</span>
          </p>
        </Card3D>

        {/* Prices Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {prices.map((item, index) => (
            <Card3D
              key={item.crop}
              className="p-6 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{item.crop}</h3>
                  <p className="text-2xl font-bold text-primary mt-1">{item.price}</p>
                  <p className="text-sm text-muted-foreground">per quintal</p>
                </div>
                <div className={`flex items-center gap-1 ${
                  item.trend === "up" ? "text-earth" : "text-destructive"
                }`}>
                  {item.trend === "up" ? (
                    <TrendingUp className="w-8 h-8" />
                  ) : (
                    <TrendingDown className="w-8 h-8" />
                  )}
                  <span className="text-lg font-semibold">{item.change}</span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
}
