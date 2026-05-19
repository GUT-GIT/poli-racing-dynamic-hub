import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Instagram,
  Linkedin,
  Youtube,
  Music2,
  Link2,
  ArrowRight,
  Cog,
  Wind,
  Zap,
  CircuitBoard,
  Gauge,
  Disc,
  Wrench,
  Box,
  Settings2,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poli Racing — Fórmula SAE | Escola Politécnica USP" },
      {
        name: "description",
        content:
          "Equipe Poli Racing de Fórmula SAE da Escola Politécnica da USP. Inovação, engenharia e alta performance no FP17.",
      },
      { property: "og:title", content: "Poli Racing — Fórmula SAE" },
      {
        property: "og:description",
        content: "Desenvolvendo a próxima geração de engenheiros da Escola Politécnica.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#carro", label: "Carro e Subsistemas" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

const subsistemas = [
  {
    key: "motor",
    icon: Cog,
    title: "Motor",
    desc: "Responsável por projetar todos os periféricos do motor para garantir o melhor funcionamento, extrair a máxima performance e assegurar a confiabilidade do projeto.",
    areas: ["Admissão", "Exaustão", "Arrefecimento e Lubrificação", "Combustível e Ignição"],
  },
  {
    key: "suspensao",
    icon: Gauge,
    title: "Suspensão",
    desc: "Crucial para assegurar que o carro mantenha contato ideal com a pista, absorva impactos e vibrações, e permita ajustes finos para estratégias de dinâmica veicular.",
    areas: [],
  },
  {
    key: "aero",
    icon: Wind,
    title: "Aerodinâmica",
    desc: "Projeta um pacote aerodinâmico que gera downforce, reduz o arrasto, melhora a estabilidade do carro e maximiza o arrefecimento.",
    areas: ["Asa Dianteira e Traseira", "Difusor", "Simulação Aerodinâmica"],
  },
  {
    key: "chassis",
    icon: Box,
    title: "Chassis",
    desc: "O esqueleto do carro. Fornece estrutura, suporta todas as peças e garante a integridade e desempenho do veículo.",
    areas: [
      "Planejamento e Seleção de materiais",
      "Preparação dos tubos",
      "Montagem do chassi e solda",
    ],
  },
  {
    key: "freios",
    icon: Disc,
    title: "Freios",
    desc: "Projeta um sistema de frenagem eficiente para segurança e controle, otimizando o desempenho em curvas e paradas bruscas.",
    areas: ["Pedaleira", "FNS / Freio Não Suspenso", "Linhas de freio"],
  },
  {
    key: "eletrica",
    icon: Zap,
    title: "Elétrica",
    desc: "Tem como principal função a produção do sistema de alimentação de energia do carro.",
    areas: ["Chicote elétrico", "PDU / Unidade de Distribuição de Energia"],
  },
  {
    key: "eletronica",
    icon: CircuitBoard,
    title: "Eletrônica",
    desc: "Faz a interface entre o carro e os projetistas/piloto, processando, exibindo e armazenando dados de sensores.",
    areas: ["Painel e Dashboard", "Data Logger", "Comunicação com a ECU"],
  },
  {
    key: "transmissao",
    icon: Settings2,
    title: "Transmissão",
    desc: "Transfere o torque e a potência do motor para as rodas de maneira eficiente, ajustando velocidade e troca de marchas.",
    areas: [
      "Shifter mecânico e pneumático",
      "Mancal, Excêntrico",
      "Pinhão e Coroa",
      "Diferencial e Semi-eixos",
      "Simulação estrutural",
    ],
  },
  {
    key: "manufatura",
    icon: Wrench,
    title: "Manufatura",
    desc: "Garante a fabricação do carro com qualidade, minimizando prazos e custos, e auxilia em decisões de projeto e manutenção.",
    areas: [
      "Gestão da manufatura e almoxarifado",
      "Capacitação de membros",
      "Relatórios e manuais de serviço/montagem",
    ],
  },
];

const areas = [
  "Powertrain",
  "Frame e Body",
  "Dinâmica Veicular",
  "Eletrônica",
  "Marketing",
  "Financeiro",
];

const gestaoGeral = [
  { role: "Capitão", name: "Raphael Alcântara" },
  { role: "Diretor de Projetos", name: "Marcos Miller" },
  { role: "Diretor Técnico", name: "Antonio Lucas" },
  { role: "Diretor de Manufatura", name: "Gabriel Bastos" },
  { role: "Diretora de COST e CAD", name: "Caterina Novaes" },
];

const liderancas = [
  { area: "Powertrain — Motor", name: "Renan Fernandes" },
  { area: "Powertrain — Transmissão", name: "Vinicius Pinheiro" },
  { area: "Frame e Body — Chassis", name: "Camila Rodrigues" },
  { area: "Frame e Body — Aerodinâmica", name: "Rodrigo Santiago" },
  { area: "Diretor de Dinâmica Veicular", name: "Gustavo Hideki" },
  { area: "Coordenador de Eletrônica", name: "Rafael Thomaz" },
];

const admin = [
  { role: "Diretora de Marketing", name: "Camille Mayumi" },
  { role: "Diretora do Financeiro", name: "Tays Cardoso" },
];

const socials = [
  { icon: Instagram, title: "Instagram", desc: "Atualizações do projeto e a nossa paixão pela Formula SAE em tempo real.", href: "#" },
  { icon: Linkedin, title: "LinkedIn", desc: "Acompanhe nosso perfil profissional, parcerias e o desenvolvimento da equipe.", href: "#" },
  { icon: Music2, title: "TikTok", desc: "Bastidores, curiosidades e o dia a dia da equipe na oficina e nas pistas.", href: "#" },
  { icon: Youtube, title: "YouTube", desc: "Vídeos técnicos, vlogs de competições e testes na pista.", href: "#" },
  { icon: Link2, title: "Linktree", desc: "Conheça nossos projetos, mídias e atualizações em um só lugar.", href: "#" },
];

function Index() {
  const [active, setActive] = useState("motor");
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = subsistemas.find((s) => s.key === active) ?? subsistemas[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <span className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-primary/40 glow" />
            <span className="text-foreground">Poli Racing</span>
            <span className="text-muted-foreground text-sm hidden sm:inline">Fórmula SAE</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {mobileOpen && (
          <ul className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Escola Politécnica · USP
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-gradient">
            Inovação em<br />Quatro Rodas
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvendo a próxima geração de engenheiros da Escola Politécnica.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#carro"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-[1.02] transition-transform glow"
            >
              Conheça o FP17
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">01 — Sobre</p>
              <h2 className="text-4xl md:text-5xl font-bold">Sobre a Poli Racing</h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                A Equipe Poli Racing é um projeto multidisciplinar da Escola Politécnica da
                Universidade de São Paulo que participa da competição Formula SAE. Somos uma equipe
                apaixonada por engenharia, inovação e tecnologia, dedicada a projetar, fabricar e
                correr um veículo de competição de alta performance.
              </p>
              <p>
                Com subsistemas em <span className="text-foreground">Powertrain</span>,{" "}
                <span className="text-foreground">Frame e Body</span>,{" "}
                <span className="text-foreground">Dinâmica Veicular</span>,{" "}
                <span className="text-foreground">Eletrônica</span>,{" "}
                <span className="text-foreground">Marketing</span> e{" "}
                <span className="text-foreground">Financeiro</span>, trabalhamos em conjunto para
                criar uma máquina excepcional que representa os mais altos padrões de engenharia
                universitária.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {areas.map((a, i) => (
              <div
                key={a}
                className="group relative p-5 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carro */}
      <section id="carro" className="py-24 md:py-32 bg-surface/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">02 — FP17</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O Carro e Nossos Subsistemas</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O <span className="text-foreground font-semibold">FP17</span> é o nosso carro para a
              temporada de 2026. Desenvolvido com foco em performance, eficiência e inovação, este
              veículo representa o pico da nossa evolução tecnológica. Para que ele chegue às
              pistas, trabalhamos divididos em áreas de especialidade essenciais:
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-6">
            {/* Tabs */}
            <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {subsistemas.map((s) => {
                const Icon = s.icon;
                const isActive = s.key === active;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left whitespace-nowrap lg:whitespace-normal transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary glow"
                        : "bg-surface border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-display font-semibold">{s.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <div className="lg:col-span-8 p-8 md:p-10 rounded-2xl bg-surface-elevated border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                  <current.icon size={22} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{current.title}</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{current.desc}</p>
              {current.areas.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Áreas</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {current.areas.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">03 — Equipe</p>
          <h2 className="text-4xl md:text-5xl font-bold">Nossa Equipe — Gestão 25/26</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl">
            Nossa equipe é organizada em departamentos e subsistemas especializados, guiados por
            líderes dedicados a alcançar a máxima performance dentro e fora das pistas.
          </p>

          <div className="mt-14 space-y-12">
            <TeamGroup title="Gestão Geral" items={gestaoGeral.map((g) => ({ a: g.role, b: g.name }))} accent />
            <TeamGroup title="Lideranças de Subsistemas" items={liderancas.map((l) => ({ a: l.area, b: l.name }))} />
            <TeamGroup title="Departamentos Administrativos" items={admin.map((g) => ({ a: g.role, b: g.name }))} />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="pt-24 pb-12 border-t border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">04 — Contato</p>
            <h2 className="text-4xl md:text-5xl font-bold">Conecte-se Conosco</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Acompanhe nosso trabalho e saiba mais sobre a Poli Racing:
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.title}
                  href={s.href}
                  className="group p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/60 hover:-translate-y-1 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </a>
              );
            })}
          </div>

          <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 Poli Racing. Todos os direitos reservados. Escola Politécnica da Universidade de
            São Paulo
          </footer>
        </div>
      </section>
    </div>
  );
}

function TeamGroup({
  title,
  items,
  accent,
}: {
  title: string;
  items: { a: string; b: string }[];
  accent?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <span className={`h-px flex-1 ${accent ? "bg-primary/60" : "bg-border"}`} />
        <h3 className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {title}
        </h3>
        <span className={`h-px flex-1 ${accent ? "bg-primary/60" : "bg-border"}`} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div
            key={i.a + i.b}
            className="p-5 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors"
          >
            <p className="text-xs uppercase tracking-wider text-primary">{i.a}</p>
            <p className="mt-1 font-display text-lg font-semibold text-foreground">{i.b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
