export interface Method {
  title: string;
  description: string;
  example: string;
}

export interface Destination {
  id: string;
  flight: string;
  name: string;
  description: string;
  gate: string;
  status: string;
  boarding: boolean;
  /** Complemento de "Quero aprender inglês para ..." na mensagem do WhatsApp. */
  goal: string;
}

export interface PlanFeature {
  term: string;
  detail: string;
}

export interface Plan {
  id: string;
  name: string;
  cabin: string;
  tagline: string;
  arrival: string;
  features: PlanFeature[];
  monthlyPrice: number;
  classesPerMonth: number;
  seat: string;
  gate: string;
  featured?: boolean;
}
