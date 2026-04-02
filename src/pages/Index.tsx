import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";
import { Sprout } from "lucide-react";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const profile = localStorage.getItem("farmerProfile");
    if (profile) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center animate-float">
              <Sprout className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            Farmer Assistant
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 drop-shadow-md">
            Soil to Sold
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto drop-shadow">
            Your complete farming companion - from crop planning to market prices, weather forecasts to pest detection
          </p>
          
          <Button
            size="lg"
            onClick={() => navigate("/onboarding")}
            className="text-xl px-12 py-8 shadow-2xl animate-pulse-slow"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
