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
  Gauge,
  Disc,
  Wrench,
  Box,
  Settings2,
  Menu,
  X,
  Download,
  ImageIcon,
  Users,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poli Racing — Fórmula SAE | Escola Politécnica USP" },
      {
        name: "description",
        content:
          "Projeto de engenharia, automobilismo e alta performance da Poli-USP. Desenvolvemos o FP17 para a competição Fórmula SAE Brasil. Seja um parceiro!",
      },
      { property: "og:title", content: "Poli Racing — Fórmula SAE" },
      {
        property: "og:description",
        content: "Desenvolvendo a próxima geração de engenheiros da Escola Politécnica da USP.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#carro", label: "O Carro" },
  { href: "#equipe", label: "Equipe" },
  { href: "#patrocinadores", label: "Patrocinadores" },
  { href: "#faca-parte", label: "Faça Parte" },
  { href: "#contato", label: "Contato" },
];

const subsistemas = [
  {
    key: "motor",
    icon: Cog,
    title: "Motor",
    desc: "Responsável por projetar todos os periféricos do motor para extrair a máxima performance com confiabilidade.",
    areas: ["Admissão", "Exaustão", "Arrefecimento e Lubrificação", "Combustível e Ignição"],
  },
  {
    key: "suspensao",
    icon: Gauge,
    title: "Suspensão",
    desc: "Mantém o contato ideal com a pista, absorve impactos e permite ajustes finos de dinâmica veicular.",
    areas: ["Geometria", "Amortecedores", "Ajustes de Dinâmica Veicular"],
  },
  {
    key: "aero",
    icon: Wind,
    title: "Aerodinâmica",
    desc: "Pacote aerodinâmico que gera downforce, reduz arrasto e melhora a estabilidade do carro.",
    areas: ["Asa Dianteira", "Asa Traseira", "Difusor", "Simulação CFD"],
  },
  {
    key: "chassis",
    icon: Box,
    title: "Chassis",
    desc: "O esqueleto do carro: estrutura, integridade e desempenho.",
    areas: ["Planejamento de Materiais", "Preparação dos Tubos", "Montagem e Solda"],
  },
  {
    key: "freios",
    icon: Disc,
    title: "Freios",
    desc: "Sistema de frenagem eficiente para segurança, controle e performance em curvas.",
    areas: ["Pedaleira", "Freio Não Suspenso", "Linhas de Freio"],
  },
  {
    key: "eletrica",
    icon: Zap,
    title: "Elétrica e Eletrônica",
    desc: "Alimentação de energia, sensoriamento e interface entre carro, projetistas e piloto.",
    areas: ["Chicote", "PDU", "Painel / Dashboard", "Data Logger", "Comunicação ECU"],
  },
  {
    key: "transmissao",
    icon: Settings2,
    title: "Transmissão",
    desc: "Transfere torque e potência do motor para as rodas com eficiência.",
    areas: ["Shifter", "Diferencial", "Semi-eixos", "Simulação Estrutural"],
  },
  {
    key: "manufatura",
    icon: Wrench,
    title: "Manufatura",
    desc: "Fabricação com qualidade, minimizando prazos e custos.",
    areas: ["Gestão de Almoxarifado", "Capacitação", "Relatórios de Montagem"],
  },
];

const gestaoGeral = [
  { role: "Capitão", name: "Raphael Alcântara", foto: "/foto-raphael.jpeg" },
  { role: "Diretor de Projetos", name: "Marcos Miller", foto: "/foto-marcos.jpeg" },
  { role: "Diretor Técnico", name: "Antonio Lucas", foto: "/foto-antonio.jpeg" },
  { role: "Diretor de Manufatura", name: "Gabriel Bastos", foto: "/foto-gabriel.jpeg" },
  //{ role: "Diretora de COST e CAD", name: "", foto: "" },
];

const liderancas = [
  { area: "Powertrain — Motor", name: "Renan Fernandes", foto: "/foto-renan.jpeg" },
  { area: "Powertrain — Transmissão", name: "Vinicius Pinheiro", foto: "/foto-vinicius.jpeg" },
  { area: "Frame e Body — Chassis", name: "Camila Rodrigues", foto: "/foto-camila.jpeg" },
  { area: "Frame e Body — Aerodinâmica", name: "Rodrigo Santiago", foto: "/foto-rodrigo.jpeg" },
  { area: "Dinâmica Veicular", name: "Gustavo Hideki", foto: "/foto-hideki.jpeg" },
  { area: "Eletrônica", name: "Rafael Thomaz", foto: "/foto-rafael.jpeg" },
];

const admin = [
  { role: "Diretora de Marketing", name: "Camille Mayumi", foto: "/foto-mayumi.jpeg" },
  { role: "Diretora do Financeiro", name: "Thays Cardoso", foto: "/foto-thays.jpeg" },
];

const socials = [
  { icon: Instagram, title: "Instagram", desc: "Atualizações do projeto em tempo real.", href: "https://www.instagram.com/equipepoliracing/?hl=en" },
  { icon: Linkedin, title: "LinkedIn", desc: "Perfil profissional e parcerias.", href: "https://www.linkedin.com/company/equipe-poli-racing-de-f%C3%B3rmula-sae" },
  //{ icon: Music2, title: "TikTok", desc: "Bastidores e o dia a dia da equipe.", href: "#" },
  //{ icon: Youtube, title: "YouTube", desc: "Vídeos técnicos e vlogs de competições.", href: "#" },
  //{ icon: Link2, title: "Linktree", desc: "Todas as nossas mídias em um só lugar.", href: "#" },
];

const cotas = [
  { tier: "Cota Ouro", logos: ["/ouro.png", "/ouro2.png", "/ouro3.png"], count: 3 },
  { tier: "Cota Prata", logos: ["/prata.png", "/prata2.png", "/prata3.png"], count: 4 },
  { tier: "Cota Bronze", logos: ["/bronze.png", "/bronze2.png", "/bronze3.png"], count: 5 },
  { tier: "Apoios", logos: ["/apoio.png", "/apoio2.png", "/apoio3.png", "/apoio4.png", "/apoio5.png", "/apoio6.png", "/apoio7.png", "/apoio8.png"], count: 8 },
];

function Index() {
  const [active, setActive] = useState("motor");
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = subsistemas.find((s) => s.key === active) ?? subsistemas[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <img src="/logo.png" alt="Poli Racing" className="w-8 h-8 object-contain" />
            <span className="text-foreground">Poli Racing</span>
          </a>
          <ul className="hidden lg:flex items-center gap-7 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {mobileOpen && (
          <ul className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-3 text-sm">
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
        className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
      >
        {/* Background */}
        <img
          src="/foto-carro.jpeg"
          alt="FP17 — Carro da Poli Racing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-black/55" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-6 text-center w-full">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Escola Politécnica · USP
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-gradient">
            Inovação em<br />Quatro Rodas
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvendo a próxima geração de engenheiros da Escola Politécnica da USP.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#carro"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform glow"
            >
              Conheça o FP17
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#faca-parte"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-primary/60 text-foreground hover:bg-primary/10 transition-colors font-semibold"
            >
              Seja um Patrocinador
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">01 — Sobre</p>
            <h2 className="text-4xl md:text-5xl font-bold">Sobre a Poli Racing</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              A Equipe Poli Racing é um projeto multidisciplinar da Escola Politécnica da
              Universidade de São Paulo que participa da competição Formula SAE. Somos uma equipe
              apaixonada por engenharia, inovação e tecnologia, dedicada a projetar, fabricar e
              correr um veículo de competição de alta performance.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-surface border border-primary/30 relative overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              <p className="text-foreground leading-relaxed">
                Com subsistemas em{" "}
                <span className="text-primary font-semibold">Powertrain</span>,{" "}
                <span className="text-primary font-semibold">Frame e Body</span>,{" "}
                <span className="text-primary font-semibold">Dinâmica Veicular</span>,{" "}
                <span className="text-primary font-semibold">Eletrônica</span>,{" "}
                <span className="text-primary font-semibold">Marketing</span> e{" "}
                <span className="text-primary font-semibold">Financeiro</span>, trabalhamos em
                conjunto para criar uma máquina excepcional.
              </p>
            </div>
          </div>

          <img
            src="/foto-equipe3.jpeg"
            alt="Foto oficial da equipe Poli Racing"
            className="w-full h-auto rounded-3xl object-contain"
          />
        </div>
      </section>

      {/* Carro */}
      <section id="carro" className="py-24 md:py-32 bg-surface/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <img
            src="/foto-carro.jpeg"
            alt="FP17 em ação"
            className="aspect-[21/9] w-full rounded-3xl object-cover mb-16"
          />

          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">02 — FP17</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O Carro e Nossos Subsistemas</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O <span className="text-foreground font-semibold">FP17</span> é o nosso carro para a
              temporada de 2026. Desenvolvido com foco em performance, eficiência e inovação, este
              veículo representa o pico da nossa evolução tecnológica.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-6">
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

      {/* Patrocinadores */}
      <section id="patrocinadores" className="py-24 md:py-32 border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">03 — Parceiros</p>
          <h2 className="text-4xl md:text-5xl font-bold">Quem Acelera com a Gente</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Agradecemos aos parceiros que tornam a inovação possível.
          </p>
          <img
            src="/foto-patrocinadores.jpeg"
            alt="Patrocinadores Poli Racing"
            className="mt-10 w-full rounded-3xl object-cover max-h-[420px]"
          />
        </div>

        {/* Marquee */}
        <div className="mt-14 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-6 animate-marquee w-max">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-6">
                {cotas.flatMap((c: any) => c.logos || []).map((logo: string, i: number) => (
                  <div
                    key={i}
                    className="w-44 h-24 rounded-xl border border-border bg-surface flex items-center justify-center p-4"
                  >
                    <img 
                      src={logo} 
                      alt="Logo Patrocinador" 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Cotas */}
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cotas.map((c: any) => (
            <div key={c.tier} className="p-6 rounded-2xl bg-surface border border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{c.tier}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {c.logos && c.logos.map((logo: string, i: number) => (
                  <div
                    key={i}
                    className="aspect-[3/2] rounded-md border border-border bg-background/60 flex items-center justify-center p-2"
                  >
                    <img 
                      src={logo} 
                      alt={`Logo ${c.tier}`} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faça Parte */}
      <section id="faca-parte" className="py-24 md:py-32 bg-surface/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">04 — Faça Parte</p>
            <h2 className="text-4xl md:text-5xl font-bold">Acelere com a Poli Racing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Patrocinador */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
              <Trophy size={32} className="mb-6" />
              <h3 className="text-3xl font-bold">Seja um Patrocinador</h3>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">
                Associe sua marca à inovação, tecnologia e formação de engenheiros de excelência
                da USP. Conheça nossas cotas de patrocínio e as contrapartidas de visibilidade em
                nossos eventos e no carro.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground font-semibold hover:scale-[1.02] transition-transform"
              >
                <Download size={18} />
                Baixar Portfólio Comercial
              </a>
            </div>

            {/* Processo Seletivo */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-surface-elevated border border-border overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-primary/10 blur-2xl" />
              <Users size={32} className="mb-6 text-primary" />
              <h3 className="text-3xl font-bold">Processo Seletivo</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Quer colocar a mão na massa, projetar um carro de corrida e viver a experiência
                da Formula SAE? Junte-se aos subsistemas técnicos e administrativos da equipe.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform glow"
              >
                Inscreva-se / Saiba Mais
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">05 — Equipe</p>
          <h2 className="text-4xl md:text-5xl font-bold">Nossa Equipe — Gestão 25/26</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl">
            Organizados em departamentos e subsistemas especializados, guiados por líderes
            dedicados à máxima performance dentro e fora das pistas.
          </p>

          <div className="mt-14 space-y-12">
            <TeamGroup title="Gestão Geral" items={gestaoGeral.map((g) => ({ a: g.role, b: g.name, c: g.foto }))} accent />
            <TeamGroup title="Lideranças de Subsistemas" items={liderancas.map((l) => ({ a: l.area, b: l.name, c: l.foto }))} />
            <TeamGroup title="Departamentos Administrativos" items={admin.map((g) => ({ a: g.role, b: g.name, c: g.foto }))} />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="pt-24 pb-12 border-t border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">06 — Contato</p>
            <h2 className="text-4xl md:text-5xl font-bold">Conecte-se Conosco</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Acompanhe nosso trabalho e saiba mais sobre a Poli Racing.
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
            São Paulo.
          </footer>
        </div>
      </section>
    </div>
  );
}

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative image-placeholder border border-border overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex flex-col items-center gap-2 text-muted-foreground/60">
        <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
          <ImageIcon size={20} />
        </div>
        <p className="text-xs uppercase tracking-[0.25em]">{label}</p>
      </div>
    </div>
  );
}

function TeamGroup({
  title,
  items,
  accent,
}: {
  title: string;
  items: { a: string; b: string; c?: string }[]; // Adicionamos o "c" aqui
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
            className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors"
          >
            {i.c ? (
               <img src={i.c} alt={`Foto de ${i.b}`} className="w-14 h-14 rounded-full object-cover shrink-0" />
            ) : (
               <div className="w-14 h-14 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-muted-foreground/50 shrink-0">
                 <span className="font-bold">{i.b.charAt(0)}</span>
               </div>
            )}
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-primary truncate">{i.a}</p>
              <p className="mt-0.5 font-display text-base font-semibold text-foreground truncate">
                {i.b}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
