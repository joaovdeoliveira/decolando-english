import { useState } from "react";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { DeparturesBoard } from "@/components/DeparturesBoard/DeparturesBoard";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Methods } from "@/components/Methods/Methods";
import { Plans } from "@/components/Plans/Plans";
import { WhatsAppFab } from "@/components/WhatsAppFab/WhatsAppFab";

export function App() {
  // Compartilhado entre os cartões de plano e o formulário de contato.
  const [planId, setPlanId] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <About />
        <Methods />
        <DeparturesBoard />
        <Plans onSelectPlan={setPlanId} />
        <Contact planId={planId} onPlanChange={setPlanId} />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
