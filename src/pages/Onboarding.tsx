import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card3D } from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation } from "lucide-react";
import { crops } from "@/data/crops";
import { toast } from "sonner";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    language: "english",
    location: "",
    selectedCrops: [] as string[],
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.mobile)) {
      toast.error("Please fill in all fields");
      return;
    }
    if (step === 2 && !formData.location) {
      toast.error("Please set your location");
      return;
    }
    if (step === 3 && formData.selectedCrops.length === 0) {
      toast.error("Please select at least one crop");
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      localStorage.setItem("farmerProfile", JSON.stringify(formData));
      toast.success("Profile setup complete!");
      navigate("/dashboard");
    }
  };

  const handleAutoDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({ ...formData, location: `${position.coords.latitude}, ${position.coords.longitude}` });
          toast.success("Location detected!");
        },
        () => {
          toast.error("Unable to detect location");
        }
      );
    }
  };

  const toggleCrop = (cropId: string) => {
    setFormData({
      ...formData,
      selectedCrops: formData.selectedCrops.includes(cropId)
        ? formData.selectedCrops.filter(id => id !== cropId)
        : [...formData.selectedCrops, cropId]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="flex gap-2 mb-8 animate-fade-in">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-all ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <Card3D className="p-8 animate-slide-up">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, Farmer!</h1>
            <p className="text-muted-foreground mb-6">Let's set up your profile</p>
            
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-lg p-6"
                />
              </div>
              
              <div>
                <Label>Mobile Number</Label>
                <Input
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="text-lg p-6"
                />
              </div>

              <div>
                <Label>Preferred Language</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {["english", "hindi", "marathi"].map((lang) => (
                    <Button
                      key={lang}
                      variant={formData.language === lang ? "default" : "outline"}
                      onClick={() => setFormData({ ...formData, language: lang })}
                      className="capitalize"
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Button onClick={handleNext} className="w-full mt-6 text-lg py-6" size="lg">
              Continue
            </Button>
          </Card3D>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <Card3D className="p-8 animate-slide-up">
            <h1 className="text-3xl font-bold text-foreground mb-2">Your Location</h1>
            <p className="text-muted-foreground mb-6">Help us provide accurate information</p>

            <div className="space-y-4">
              <Button
                onClick={handleAutoDetect}
                variant="outline"
                className="w-full h-32 flex flex-col gap-3 text-lg hover:bg-accent"
              >
                <Navigation className="w-12 h-12" />
                <span>Auto Detect Location</span>
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div>
                <Label>Enter PIN Code</Label>
                <div className="flex gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-3" />
                  <Input
                    placeholder="Enter PIN code"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="text-lg p-6 flex-1"
                  />
                </div>
              </div>
            </div>

            <Button onClick={handleNext} className="w-full mt-6 text-lg py-6" size="lg">
              Continue
            </Button>
          </Card3D>
        )}

        {/* Step 3: Crop Selection */}
        {step === 3 && (
          <Card3D className="p-8 animate-slide-up">
            <h1 className="text-3xl font-bold text-foreground mb-2">Your Crops</h1>
            <p className="text-muted-foreground mb-6">Select the crops you grow</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {crops.map((crop) => (
                <Card3D
                  key={crop.id}
                  onClick={() => toggleCrop(crop.id)}
                  className={`p-4 transition-all ${
                    formData.selectedCrops.includes(crop.id)
                      ? "ring-4 ring-primary shadow-lg"
                      : ""
                  }`}
                >
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-lg">{crop.name}</h3>
                  <p className="text-sm text-muted-foreground">{crop.description}</p>
                </Card3D>
              ))}
            </div>

            <Button onClick={handleNext} className="w-full text-lg py-6" size="lg">
              Complete Setup
            </Button>
          </Card3D>
        )}
      </div>
    </div>
  );
}
