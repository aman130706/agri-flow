import { Card3D } from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Droplets, Sprout, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import wheatImg from "@/assets/crop-wheat.jpg";

export default function CropGuide() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-earth/10 to-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        {/* Crop Header */}
        <Card3D className="mb-6 overflow-hidden animate-slide-up">
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${wheatImg})` }}
          >
            <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h1 className="text-4xl font-bold text-white">Wheat Crop Guide</h1>
            </div>
          </div>
        </Card3D>

        {/* Current Month */}
        <Card3D className="p-6 mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">What to Do NOW (November)</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <Droplets className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Irrigation</h3>
                <p className="text-sm text-muted-foreground">
                  Water every 15-20 days. Ensure proper drainage to prevent waterlogging.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <Sprout className="w-6 h-6 text-earth flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Fertilizer</h3>
                <p className="text-sm text-muted-foreground">
                  Apply nitrogen fertilizer (urea) at 50 kg per acre for better growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Pest Alert</h3>
                <p className="text-sm text-muted-foreground">
                  Watch for aphids. Spray neem oil solution if spotted early.
                </p>
              </div>
            </div>
          </div>
        </Card3D>

        {/* Next Month */}
        <Card3D className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-2xl font-bold mb-4">Next Month (December)</h2>
          
          <div className="space-y-3">
            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="font-medium mb-1">🌾 Growth Stage</p>
              <p className="text-sm text-muted-foreground">
                Tillering stage - monitor plant density
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="font-medium mb-1">💧 Irrigation</p>
              <p className="text-sm text-muted-foreground">
                Reduce watering frequency, water every 20-25 days
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="font-medium mb-1">🛡️ Protection</p>
              <p className="text-sm text-muted-foreground">
                Apply fungicide to prevent rust disease
              </p>
            </div>
          </div>
        </Card3D>
      </div>
    </div>
  );
}
