import { useEffect, useState } from "react";
import "./App.css";
import { Background } from "./components/Background";
import { Carrousel } from "./components/Carrousel";
import FloatAudioButton from "./components/FloatAudioButton";

function App() {
  const startDate = new Date(2024, 8, 7); // Setembro é o mês 8 no JavaScript (indexado em 0)
  const [timeElapsed, setTimeElapsed] = useState("");

  const calculateTimeElapsed = () => {
    const now = new Date();
    //@ts-ignore
    const delta = now - startDate;

    // Calcular dias totais
    const totalDays = Math.floor(delta / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30); // Aproximando meses como 30 dias
    const days = totalDays % 30;

    // Calcular horas, minutos e segundos
    const totalSeconds = Math.floor(delta / 1000);
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setTimeElapsed(
      `Estamos juntos por: ${months.toString().padStart(2, "0")} meses, ${days
        .toString()
        .padStart(2, "0")} dias, ${hours
        .toString()
        .padStart(2, "0")} horas, ${minutes
        .toString()
        .padStart(2, "0")} minutos e ${seconds
        .toString()
        .padStart(2, "0")} segundos.`
    );
  };

  useEffect(() => {
    calculateTimeElapsed();
    const timer = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(timer); // Limpar o intervalo ao desmontar o componente
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <h2 className="text-white font-serif font-bold text-4xl">
        👫 Kauan & Mel 👫
      </h2>
      <span className="text-white font-serif font-medium mt-5 max-w-42 z-20 italic">
        ❤️ Seu amor é a luz que ilumina o meu caminho e faz cada dia valer a
        pena.
      </span>
      <Carrousel />
      <span className="text-white font-medium mt-5 max-w-42 z-20">
        👫 {timeElapsed}
      </span>
      <FloatAudioButton />
      <Background />
    </main>
  );
}

export default App;
