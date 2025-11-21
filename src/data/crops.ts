import wheatImg from "@/assets/crop-wheat.jpg";
import riceImg from "@/assets/crop-rice.jpg";
import cottonImg from "@/assets/crop-cotton.jpg";
import sugarcaneImg from "@/assets/crop-sugarcane.jpg";
import vegetablesImg from "@/assets/crop-vegetables.jpg";

export interface Crop {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const crops: Crop[] = [
  {
    id: "wheat",
    name: "Wheat",
    image: wheatImg,
    description: "Golden grain crop"
  },
  {
    id: "rice",
    name: "Rice",
    image: riceImg,
    description: "Paddy cultivation"
  },
  {
    id: "cotton",
    name: "Cotton",
    image: cottonImg,
    description: "White gold"
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    image: sugarcaneImg,
    description: "Sweet crop"
  },
  {
    id: "vegetables",
    name: "Vegetables",
    image: vegetablesImg,
    description: "Fresh produce"
  }
];
