import { Card3D } from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PestDetection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <h1 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">
          Pest Detection
        </h1>

        {/* Upload Area */}
        <Card3D className="p-12 text-center mb-6 animate-slide-up cursor-pointer hover:bg-accent/5">
          <div className="border-4 border-dashed border-border rounded-xl p-12">
            <Camera className="w-20 h-20 mx-auto mb-4 text-primary animate-pulse-slow" />
            <h3 className="text-2xl font-semibold mb-2">Upload Pest Image</h3>
            <p className="text-muted-foreground mb-6">
              Take a clear photo of the affected plant or pest
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              <Upload className="mr-2" />
              Choose Image
            </Button>
          </div>
        </Card3D>

        {/* Sample Detection Result */}
        <Card3D className="p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h2 className="text-2xl font-bold mb-4">Common Pests to Watch For</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">🐛 Aphids</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Small green/black insects that suck plant sap
              </p>
              <p className="text-sm font-medium text-earth">
                Solution: Spray neem oil or soap water early morning
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">🦗 Stem Borer</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Caterpillar that damages rice and sugarcane stems
              </p>
              <p className="text-sm font-medium text-earth">
                Solution: Use pheromone traps and apply recommended pesticide
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">🦟 Whitefly</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Tiny white flies on leaf undersides, spread viruses
              </p>
              <p className="text-sm font-medium text-earth">
                Solution: Yellow sticky traps + neem-based spray
              </p>
            </div>
          </div>
        </Card3D>
      </div>
    </div>
  );
}
