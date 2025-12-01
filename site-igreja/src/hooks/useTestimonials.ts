import { useState } from "react";

export function useTestimonials() {
  const [testemunhos, setTestemunhos] = useState<string[]>([
    "Deixe seu testemunho aqui!",
    
  ]);

  const addTestemunho = (novo: string) => {
    if (novo.trim()) {
      setTestemunhos([...testemunhos, novo]);
    }
  };

  return { testemunhos, addTestemunho };
}
