import React from "react";
import { motion } from "framer-motion";
import { PricingGlass } from "./ui/pricing-glass";

const gymTiers = [
  {
    name: "Basic",
    priceMonthly: "7,000",
    priceAnnual: "25,000",
    description: "Build your fitness foundation.",
    features: [
      "Gym Access",
      "Fitness Consultation",
      "Goal Setting"
    ]
  },
  {
    name: "Standard",
    priceMonthly: "10,000",
    priceAnnual: "35,000",
    description: "More flexibility. More benefits.",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Complimentary Day Passes",
      "Workout Scheduling"
    ]
  },
  {
    name: "Royal",
    priceMonthly: "14,000",
    priceAnnual: "50,000",
    description: "The complete premium experience.",
    features: [
      "Personal Training",
      "Personalized Diet",
      "Passive Thai Stretch",
      "Green Tea After Workout"
    ]
  }
];

export default function MembershipPlans() {
  return (
    <section id="plans" className="bg-[#090a09] w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        

        {/* Pricing Glass Component */}
        <PricingGlass 
          tiers={gymTiers} 
          title="One destination. Three ways to train."
          description="Every membership is designed to help you train with confidence, consistency, and expert guidance."
        />

      </div>
    </section>
  );
}
