import Header from "./components/Header";
import logo1 from "./assets/logo1-removebg-preview.png";
import logo3 from "./assets/logo3-removebg-preview.png";
import logo14 from "./assets/logo14-removebg-preview.png";
import logo16 from "./assets/logo16-removebg-preview.png";
import logo11 from "./assets/logo11-removebg-preview.png";
import logo20 from "./assets/logo20-removebg-preview.png";
import logo21 from "./assets/logo21-removebg-preview.png";
import logo19 from "./assets/logo19-removebg-preview.png";
import logo7 from "./assets/logo7-removebg-preview.png";
import logo8 from "./assets/logo8-removebg-preview.png";
import logo24 from "./assets/logo24-removebg-preview.png";
import { motion } from "motion/react";
import { MessageCircle, TwitterIcon } from "lucide-react";
import { useState } from "react";
import Section from "./components/ScrollSection";

const modules = import.meta.glob("./assets/logo*-removebg-preview.png", {
  eager: true,
  as: "url",
});

// Build a sorted array: logo1, logo2, ... logo21
const arts = Object.entries(modules)
  .sort(([a], [b]) => {
    const na = Number(a.match(/logo(\d+)-/)?.[1] ?? 0);
    const nb = Number(b.match(/logo(\d+)-/)?.[1] ?? 0);

    return na - nb;
  })
  .map(([, url]) => url);

const allocations = [
  { name: "Liquidity Pool", lock: "Locked permanently" },
  { name: "Treasury & Ecosystem", lock: "3–6 months" },
  { name: "Team & Development", lock: "No lock (flexible)" },
  { name: "Forest Vault & Rewards", lock: "Dynamic (vault logic)" },
];

const roadmap = [
  {
    quarter: "Q4 2025",
    items: [
      "Token design + tribal branding complete",
      "Launch on Raydium (Solana)",
      "Liquidity pool deployment",
      "Telegram + post-based lore onboarding",
    ],
  },
  {
    quarter: "Q1 2026",
    items: [
      "Launch Quantum Wallet",
      "Activate SnareBot v1",
      "Begin Forest Ledger logs",
      "Tribe upgrade voting tools",
    ],
  },
  {
    quarter: "Q2 2026",
    items: [
      "Launch Skoblin Blockchain",
      "Full governance rollout",
      "Merge portal from Solana → Skoblin Chain",
      "Vault logic and token routing smart contracts",
    ],
  },
  {
    quarter: "Q3 2026",
    items: [
      "Optimize Governance",
      "Expanding SnareBot functionality",
      "Refining Vault Logic",
      "Improve User Experience ",
    ],
  },
];

function App() {
  const [selectedArt, setSelectedArt] = useState<number | null>(null);
  return (
    <>
      <Header />
      {/* Main Section */}
      <Section>
        <div className="bg-[url(./assets/img4.png)] relative bg-scroll md:bg-fixed bg-center bg-cover w-full text-white px-10 lg:px-20 py-16">
          <section className="text-center py-5 mb-4 md:mb-6 lg:mb-6">
            <h1 className="text-6xl lg:text-9xl uppercase font-bold">
              Skoblin
            </h1>
            <p className="text-2xl lg:text-4xl">The chain of tribes</p>
            <p className="text-lg lg:text-xl">
              A meme-token born in the wild, powered by lore, built with tools.
            </p>
          </section>
          <section className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="w-full sm:w-1/2 text-sm sm:text-base">
              <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                What is skoblin?
              </h1>
              <p className="mb-2 text-lg sm:text-2xl">
                Skoblin is a tribe-born meme token forged inside Solana's forest
                of legends. No presale. No venture capital. Just toolmaking
                tribes, ancient lore, and an ecosystem that grows from the roots
                up.
              </p>
              <p className="text-lg sm:text-2xl">
                Every SKOBLIN token carries forest lore. Every holder becomes
                part of the tribe. In a mystical, bioluminescent forest
                untouched by time, a hidden race thrives — Skoblins. These
                forest-dwelling creatures are inventors, lore-keepers, and
                protectors of ancient secrets.
              </p>
            </div>
            <div className="w-[250px] sm:w-[350px] ">
              <img
                src={logo24}
                className="w-full object-contain animate-bounce animation-duration-[2500ms]"
                alt="skoblin"
              />
            </div>
          </section>
        </div>
      </Section>

      <Section>
        <div className="bg-[url(./assets/img1.png)] bg-scroll sm:bg-fixed bg-center bg-contain px-6 md:px-10 lg:px-20 text-white w-full py-16">
          <h1 className="text-6xl lg:text-9xl font-bold text-center mb-10">
            Token Overview
          </h1>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="w-full sm:w-1/2 text-center sm:text-left sm:text-xl space-y-4">
              <p className="font-bold">Name: Skoblin</p>
              <p className="font-bold">Ticker: $SKOBLIN</p>
              <p className="font-bold">
                chain: Solana (initially) → Skoblin Blockchain (2026)
              </p>
              <p className="font-bold">Total Supply: 1,000,000,000 SKOBLIN</p>
              <p className="font-bold">Initial Launch Tax: 0.3%</p>
              <p className="font-bold">
                Post-Merge Tax (Skoblin Chain): 2% buy/sell
              </p>
              <div className="hidden sm:block space-y-2">
                <h1 className="text-4xl font-semibold">Token Utility</h1>
                <p className="font-bold">
                  SKOBLIN tokens are used for tribal governance, resource
                  management, trading between tribes, participating in the
                  Forest Vault, and funding ecosystem operations. Token
                  transfers and transactions are recorded immutably to maintain
                  trust and transparency.
                </p>
              </div>
            </div>
            <div className="w-[250px] sm:w-[350px]">
              <img
                src={logo14}
                className="object-contain w-full animate-bounce animation-duration-[2500ms]"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-[url(./assets/img5.png)] bg-scroll md:bg-fixed bg-center bg-cover px-4 md:px-10 lg:px-20 text-white w-full py-16">
          <h1 className="text-center mb-10 sm:mb-16 text-6xl lg:text-9xl font-bold">
            Token Allocation and Lockups
          </h1>
          <div className="flex flex-col sm:flex justify-between items-center gap-10">
            <div className="w-full sm:w-1/2 md:grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {allocations.map((alloc) => (
                <div
                  key={alloc.name}
                  className="bg-black/70 py-10 sm:py-12 px-10 mb-2 text-center rounded-xl shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <span className="text-lg md:text-xl lg:text-2xl font-bold">
                    {alloc.name}: {alloc.lock}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-[250px] sm:w-[350px]">
              <img
                src={logo21}
                alt=""
                className="animate-bounce animation-duration-[2500ms]"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className=" min-h-screen bg-[url(./assets/img3.png)] bg-scroll md:bg-fixed bg-cover bg-center text-white w-full py-16">
          <div className="mb-12 px-4 text-center">
            <h1 className="text-6xl lg:text-9xl font-bold mb-4">
              Key Features
            </h1>
            <p className="text-2xl md:text-4xl">
              What makes skoblin unique in the crypto forest
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 lg:mx-20">
            <div className="min-h-[200px] border rounded-xl grid place-items-center p-6 bg-black/50 shadow-lg hover:scale-105 transition-transform cursor-pointer  hover:border-green-400 hover:text-green-400  hover:bg-black/40">
              <div className="flex items-center justify-center gap-3 text-3xl">
                <h1>Fair Launch</h1>
                <div className="w-[80px]">
                  <img src={logo11} alt="" className="w-full object-contain" />
                </div>
              </div>
              <p className="text-xl">No presale,no team wallets</p>
            </div>
            <div className="min-h-[200px] border rounded-xl grid place-items-center p-6 bg-black/50 shadow-lg hover:scale-105 transition-transform cursor-pointer  hover:border-green-400 hover:text-green-400  hover:bg-black/40">
              <div className="flex items-center justify-center gap-3 text-3xl">
                <h1>SnareBot</h1>
                <div className="w-[80px]">
                  <img src={logo7} alt="" className="w-full object-contain" />
                </div>
              </div>
              <p className="text-xl">Advanced trading tools</p>
            </div>
            <div className="min-h-[200px] border rounded-xl grid place-items-center p-6 bg-black/50 shadow-lg hover:scale-105 transition-transform cursor-pointer  hover:border-green-400 hover:text-green-400  hover:bg-black/40">
              <div className="flex items-center justify-center gap-3 text-3xl">
                <h1>Tribal Governance</h1>
                <div className="w-[80px]">
                  <img src={logo8} alt="" className="w-full object-contain" />
                </div>
              </div>
              <p className="text-xl">No presale,no team wallets</p>
            </div>
            <div className="min-h-[200px] border rounded-xl grid place-items-center p-6 bg-black/50 shadow-lg hover:scale-105 transition-transform cursor-pointer  hover:border-green-400 hover:text-green-400  hover:bg-black/40">
              <div className="flex items-center justify-center gap-3 text-3xl">
                <h1>Lore Integration</h1>
                <div className="w-[80px]">
                  <img src={logo16} alt="" className="w-full object-contain" />
                </div>
              </div>
              <p className="text-xl">Story-driven tokenomics</p>
            </div>
          </div>
        </div>
      </Section>

      <div className=" min-h-screen bg-[url(./assets/img2.png)] bg-scroll md:bg-fixed bg-cover bg-center text-white w-full py-16">
        <div className="mb-12 px-4 text-center">
          <h1 className="text-6xl lg:text-9xl font-bold mb-4">
            Forest Gallery
          </h1>
          <p className="text-2xl md:text-4xl opacity-90">
            Explore the mystical world of Skoblin through our art collection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-20">
          {arts.map((url, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden border border-transparent hover:border-green-400 cursor-pointer transition duration-300 aspect-square bg-black/30"
              onClick={() => setSelectedArt(i + 1)}
            >
              <img
                src={url}
                alt={`Skoblin Art ${i + 1}`}
                className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <span className="text-lg font-semibold text-green-400">
                  Art #{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
        {selectedArt !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedArt(null)}
          >
            <div
              className="relative max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()} // prevent modal closing when clicking the image
            >
              <img
                src={arts[selectedArt - 1]} // use the array of imported images
                alt={`Skoblin Art ${selectedArt}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <span
                className="absolute top-4 sm:top-10 right-6 text-white text-2xl cursor-pointer"
                onClick={() => setSelectedArt(null)}
              >
                ✕
              </span>
            </div>
          </div>
        )}
      </div>

      <Section>
        <div className=" bg-[url(./assets/img5.png)] py-16 text-white w-full bg-scroll sm:bg-fixed bg-center bg-cover relative overflow-hidden">
          <div className="py-10 text-center">
            <h1 className="text-6xl lg:text-9xl mb-5">Roadmaps</h1>
            <p className="text-2xl md:text-4xl">
              What makes skoblin unique in the crypto forest
            </p>
          </div>
          <div className="mx-2 md:mx-10 lg:mx-20 relative">
            {/* Line tracker */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/40  -translate-x-1/2"></div>
            {roadmap.map((phase, i) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className={`relative w-full sm:w-1/2 p-6 mb-12 rounded-lg bg-black/60 shadow-lg flex items-center justify-between ${
                  i % 2 === 0 ? "ml-auto text-left" : "mr-auto text-left"
                }`}
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 ">
                    {phase.quarter}
                  </h2>
                  <ul role="list" className="space-y-2 text-sm md:text-base">
                    {phase.items.map((item, idx) => (
                      <li key={idx}> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-[150px] md:w-[300px]">
                  <img src={logo20} alt="" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className=" min-h-screen bg-[url(./assets/img3.png)] bg-scroll md:bg-fixed bg-cover bg-center text-white w-full py-16">
          <div className="mb-12 px-4 text-center">
            <h1 className="text-6xl lg:text-9xl font-bold mb-4">
              Ready to Join?
            </h1>
            <p className="text-2xl md:text-4xl shadow-2xl font-bold">
              The forest awaits. The tribe grows stronger. Your journey begins
              now.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center  sm:mt-30 sm:grid-cols-2 gap-6 mx-6 lg:mx-80">
            <a
              href=""
              className="flex items-center justify-center gap-3 border py-6 rounded-lg text-3xl hover:shadow-2xl hover:scale-105 transition duration-200 hover:border-green-400 hover:text-green-400 hover:bg-black/40"
            >
              <p className="font-bold">Buy on Radium</p>
              <div className="w-[90px]">
                <img src={logo19} className="w-full object-contain" />
              </div>
            </a>
            <a
              href="https://t.me/Skoblin0"
              className="flex items-center justify-center gap-3 border py-6 rounded-lg text-3xl hover:shadow-2xl hover:scale-105 transition duration-200 hover:border-green-400 hover:text-green-400  hover:bg-black/40"
            >
              <p className="font-bold">Join the Tribe</p>
              <div className="w-[60px]">
                <img src={logo1} className="w-full object-contain" />
              </div>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <footer className="bg-[url(./assets/img1.png)] bg-scroll md:bg-fixed bg-center bg-cover py-24 text-white relative">
          <div className="inset-0 bg-black/60 absolute z-0"></div>
          <div className="mx-2 md:mx-10 lg:mx-20 space-y-5 relative z-10">
            <div className="mx-auto text-center">
              <div className="flex justify-center items-center gap-2 sm:gap-5 mb-4">
                <div className="w-[100px] h-auto">
                  <img src={logo3} alt="skoblin" className="w-full h-auto" />
                </div>
                <h1 className="text-5xl uppercase font-bold">skoblin</h1>
              </div>
              <h1 className="text-center sm:text-2xl mb-4">
                The Chain of Tribes • Built with lore and logic
              </h1>
              <div className="flex justify-center gap-5 items-center mb-4">
                <a
                  href="https://t.me/Skoblin0"
                  target="blank"
                  rel="noopener noreferrer"
                  aria-label="Skoblin Twitter"
                >
                  <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-400 transition"></MessageCircle>
                </a>
                <a
                  href="https://x.com/skoblin"
                  target="blank"
                  rel="noopener noreferrer"
                  aria-label="Skoblin Twitter"
                >
                  <TwitterIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition"></TwitterIcon>
                </a>
              </div>
              <p className="mb-2">
                This project is experimental and should be approached with
                caution.
              </p>
              <p className="text-sm mb-6">
                DO YOUR OWN RESEARCH & Interact at your own risk
              </p>
              <p className="text-gray-300">
                Contact us:{" "}
                <a
                  href="support@skoblin.com"
                  className=" hover:text-gray-100 transition-all duration-200"
                >
                  support@skoblin.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </Section>
    </>
  );
}

export default App;
