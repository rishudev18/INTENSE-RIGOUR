import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MembershipPlans from "../components/MembershipPlans";
import MembershipFAQ from "../components/MembershipFAQ";
import MembershipCTA from "../components/MembershipCTA";

export default function Membership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navbar />
      <MembershipPlans />
      <MembershipFAQ />
      <MembershipCTA />
    </main>
  );
}
