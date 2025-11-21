import { Card3D } from "@/components/Card3D";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cloud, CloudRain, Sun, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Weather() {
  const navigate = useNavigate();

  const forecast = [
    { day: "Mon", temp: "32°C", icon: Sun, condition: "Sunny" },
    { day: "Tue", temp: "30°C", icon: Cloud, condition: "Cloudy" },
    { day: "Wed", temp: "28°C", icon: CloudRain, condition: "Rainy" },
    { day: "Thu", temp: "31°C", icon: Sun, condition: "Sunny" },
    { day: "Fri", temp: "29°C", icon: Cloud, condition: "Cloudy" },
    { day: "Sat", temp: "30°C", icon: Sun, condition: "Sunny" },
    { day: "Sun", temp: "32°C", icon: Sun, condition: "Sunny" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky/20 via-background to-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        {/* Current Weather */}
        <GlassCard className="mb-6 animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-2">32°C</h1>
              <p className="text-xl text-muted-foreground">Sunny & Clear</p>
              <p className="text-sm text-muted-foreground mt-2">Location: Your Farm</p>
            </div>
            <Sun className="w-24 h-24 text-primary animate-pulse-slow" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div>
              <Wind className="w-6 h-6 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Wind</p>
              <p className="text-lg font-semibold">12 km/h</p>
            </div>
            <div>
              <CloudRain className="w-6 h-6 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="text-lg font-semibold">65%</p>
            </div>
            <div>
              <Cloud className="w-6 h-6 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Pressure</p>
              <p className="text-lg font-semibold">1013 mb</p>
            </div>
          </div>
        </GlassCard>

        {/* 7-Day Forecast */}
        <h2 className="text-2xl font-bold text-foreground mb-4 animate-fade-in">
          7-Day Forecast
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {forecast.map((day, index) => (
            <Card3D
              key={day.day}
              className="p-4 text-center animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="text-sm font-medium mb-2">{day.day}</p>
              <day.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-lg font-bold">{day.temp}</p>
              <p className="text-xs text-muted-foreground mt-1">{day.condition}</p>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
}
