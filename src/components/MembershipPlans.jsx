import React from "react";
import { motion } from "framer-motion";
import { PricingGlass } from "./ui/pricing-glass";

const gymTiers = [
  {
    name: "1 MONTH",
    price: "2000",
    description: "Gym Fee: ₹1,500 | Admission: ₹500",
    features: [
      "Flexible monthly option",
      "Full gym access",
      "General trainer support",
      "Locker facility"
    ]
  },
  {
    name: "3 MONTHS",
    price: "4000",
    description: "Gym Fee: ₹3,500 | Admission: ₹500",
    features: [
      "15 Pause Days included",
      "Diet consultation",
      "Full gym access",
      "General trainer support"
    ]
  },
  {
    name: "6 MONTHS",
    price: "6500",
    description: "Gym Fee: ₹6,000 | Admission: ₹500",
    isPopular: true,
    features: [
      "20 Pause Days included",
      "Advanced diet plan",
      "Full gym access",
      "General trainer support"
    ]
  }
];

const ptTiers = [
  {
    name: "1 MONTH PT",
    price: "7500",
    description: "PT Fee: ₹6,000 | Gym Fee: ₹1,500",
    features: [
      "1 Hour 30 Mins Session",
      "Personalized Workout Plan",
      "Diet Counseling",
      "Weight Management"
    ]
  },
  {
    name: "2 MONTHS PT",
    price: "14000",
    description: "PT Fee: ₹11,000 | Gym Fee: ₹3,000",
    features: [
      "1 Hour 30 Mins Session",
      "Advanced Goal Tracking",
      "Weekly Progress Check",
      "Weight Loss/Gain Focus"
    ]
  },
  {
    name: "3 MONTHS PT",
    price: "20500",
    description: "PT Fee: ₹17,000 | Gym Fee: ₹3,500",
    isPopular: true,
    features: [
      "1 Hour 30 Mins Session",
      "Complete Transformation",
      "Expert Dietician Support",
      "Priority Equipment Access"
    ]
  }
];

export default function MembershipPlans() {
  return (
    <section id="plans" className="bg-[#090a09] w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Pricing Glass Component */}
        <PricingGlass 
          gymTiers={gymTiers} 
          ptTiers={ptTiers}
          title="One destination. Three ways to train."
          description="Every membership is designed to help you train with confidence, consistency, and expert guidance."
        />

      </div>
    </section>
  );
}
