// Existing icons
import { BrainCircuit, HeartHandshake, Users } from "lucide-react";

// New icons
import {
  Factory,
  Hammer,
  Sparkles,
  BadgePercent,
  Award,
  MessageCircle,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import content from "@/lib/content.json";

const { whyChooseUsFeatures } = content;

const icons: { [key: string]: React.ReactNode } = {
  BrainCircuit: <BrainCircuit className="h-10 w-10 text-primary" />,
  HeartHandshake: <HeartHandshake className="h-10 w-10 text-primary" />,
  Users: <Users className="h-10 w-10 text-primary" />,
  Factory: <Factory className="h-10 w-10 text-primary" />,
  Hammer: <Hammer className="h-10 w-10 text-primary" />,
  Sparkles: <Sparkles className="h-10 w-10 text-primary" />,
  BadgePercent: <BadgePercent className="h-10 w-10 text-primary" />,
  Award: <Award className="h-10 w-10 text-primary" />,
  MessageCircle: <MessageCircle className="h-10 w-10 text-primary" />,
  Wrench: <Wrench className="h-10 w-10 text-primary" />,
};

export default function WhyChooseUsSection() {
  return (
    <section className="-mt-4 pt-20 pb-28 md:pt-24 md:pb-32 bg-white relative z-10">

      {/* Soft Divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-gray-200/40 to-transparent" />

      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary">
            Why Dream Kitchens?
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {whyChooseUsFeatures.map((feature, index) => (
            <Card
              key={index}
              className="text-center p-8 rounded-xl border border-gray-200 
                         bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                         hover:-translate-y-2 transition-all duration-300"
            >
              <CardHeader className="items-center gap-4 md:gap-5">
                
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200">
                  {icons[feature.icon]}
                </div>

                <CardTitle className="font-headline text-lg md:text-xl text-primary mt-3">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
