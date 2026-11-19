/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function App() {
  const [vagas, setVagas] = useState(5);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVagas((prev) => {
        if (prev > 1) {
          return prev - 1;
        }
        window.clearInterval(timer);
        return 1;
      });
    }, 1500);

    return () => window.clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#111] flex items-center justify-center text-center pt-[70px] px-4 pb-6">
      <div className="fixed top-0 left-0 w-full bg-black text-white text-[16px] font-bold py-3 px-2 z-[9999] text-center">
        PARTICIPE DO GRUPO DE FORMA GRATUITA
      </div>

      <main className="w-full max-w-[360px] bg-white pt-[36px] px-[24px] pb-[40px] rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <img
          src="/assets/aistudio/P_r_do_Sol_Neon_na_Cidade_Vice_33bc4bb3.png"
          alt="Loja dos Fãs de GTA 6"
          className="w-[180px] h-[180px] object-cover rounded-full mx-auto mb-[28px] block shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
        />

        <h1 className="text-[30px] font-extrabold mb-[14px] leading-tight">
          LOJA DOS FÃS GTA6
        </h1>

        <p className="text-[15px] text-[#444] leading-[1.6] mb-[28px]">
          OS MELHORES ACESSÓRIOS PARA OS MELHORES JOGADORES DE GTA 6
        </p>

        <a
          href="https://chat.whatsapp.com/GwO2R9V9MB62iwmQPk50EQ"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="block w-full bg-[#25d366] hover:bg-[#1ebe5d] text-white no-underline font-bold text-[18px] p-4 rounded-[30px] mb-4 transition-colors duration-200 animate-pulse-btn"
        >
          Entrar no WhatsApp
        </a>

        <p className="text-[14px] mb-[28px]">
          Já somos mais de <strong>100 mil membros</strong> 🚀
        </p>

        <p className="text-[12px] tracking-[2px] text-[#777] mb-[6px]">
          AINDA RESTAM
        </p>
        <p
          id="vagaCount"
          className="text-[36px] font-extrabold leading-tight animate-pulse-vaga"
        >
          {vagas === 1 ? '1 VAGA' : `${vagas} VAGAS`}
        </p>
      </main>
    </div>
  );
}
