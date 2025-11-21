import { Card3D } from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, TestTube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import soilImg from "@/assets/soil-type.jpg";

export default function Soil() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-clay/10 to-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <h1 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">
          Soil Health Analysis
        </h1>

        {/* Upload Options */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card3D className="p-8 text-center animate-slide-up cursor-pointer hover:bg-accent/5">
            <Upload className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Upload Soil Report</h3>
            <p className="text-sm text-muted-foreground">
              Upload your lab soil test report for detailed analysis
            </p>
          </Card3D>

          <Card3D className="p-8 text-center animate-slide-up cursor-pointer hover:bg-accent/5" style={{ animationDelay: "100ms" }}>
            <TestTube className="w-16 h-16 mx-auto mb-4 text-earth" />
            <h3 className="text-xl font-semibold mb-2">Select Soil Type</h3>
            <p className="text-sm text-muted-foreground">
              Choose your soil texture for basic recommendations
            </p>
          </Card3D>
        </div>

        {/* Sample Result */}
        <Card3D className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="flex gap-4 mb-6">
            <img
              src={soilImg}
              alt="Soil"
              className="w-32 h-32 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">Loamy Soil</h2>
              <p className="text-muted-foreground">
                Balanced texture with good drainage and nutrient retention
              </p>
              <div className="flex gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  pH: 6.5
                </span>
                <span className="px-3 py-1 bg-earth/10 text-earth rounded-full text-sm font-medium">
                  Fertility: Good
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">💧 Irrigation Schedule</h3>
              <p className="text-sm text-muted-foreground">
                Water every 7-10 days for vegetables, 15-20 days for wheat/rice
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">🌱 Recommended Fertilizers</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• NPK 19:19:19 - 50 kg/acre before sowing</li>
                <li>• Urea - 25 kg/acre after 30 days</li>
                <li>• Organic compost - 2 tons/acre annually</li>
              </ul>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">✅ Best Crops</h3>
              <p className="text-sm text-muted-foreground">
                Wheat, rice, vegetables, cotton, sugarcane - all suitable
              </p>
            </div>
          </div>
        </Card3D>
      </div>
    </div>
  );
}
