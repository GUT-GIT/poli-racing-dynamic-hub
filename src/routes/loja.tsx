import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingCart, ArrowLeft, Menu, X } from "lucide-react";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title: "Loja Poli Racing — Produtos Oficiais" },
      {
        name: "description",
        content:
          "Loja oficial da Poli Racing. Camisetas, bonés, canecas e kits adesivos da equipe de Fórmula SAE da USP.",
      },
      { property: "og:title", content: "Loja Poli Racing — Produtos Oficiais" },
      {
        property: "og:description",
        content: "Camisetas, bonés, canecas e kits adesivos da equipe de Fórmula SAE da USP.",
      },
    ],
  }),
  component: LojaPage,
});

const categorias = ["Todos", "Vestuário", "Acessórios", "Kits"] as const;
type Categoria = (typeof categorias)[number];

interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: Categoria;
  imagem: string;
}

const produtos: Produto[] = [
  {
    id: "camiseta-oficial",
    nome: "Camiseta Oficial 25/26",
    preco: 89.9,
    categoria: "Vestuário",
    imagem: "/placeholder.svg",
  },
  {
    id: "bone",
    nome: "Boné Poli Racing",
    preco: 59.9,
    categoria: "Vestuário",
    imagem: "/placeholder.svg",
  },
  {
    id: "caneca-termica",
    nome: "Caneca Térmica",
    preco: 49.9,
    categoria: "Acessórios",
    imagem: "/placeholder.svg",
  },
  {
    id: "kit-adesivos",
    nome: "Kit Adesivos",
    preco: 29.9,
    categoria: "Kits",
    imagem: "/placeholder.svg",
  },
  {
    id: "moletom",
    nome: "Moletom Poli Racing",
    preco: 149.9,
    categoria: "Vestuário",
    imagem: "/placeholder.svg",
  },
  {
    id: "adesivo-grande",
    nome: "Adesivo Grande",
    preco: 19.9,
    categoria: "Acessórios",
    imagem: "/placeholder.svg",
  },
  {
    id: "kit-presente",
    nome: "Kit Presente",
    preco: 199.9,
    categoria: "Kits",
    imagem: "/placeholder.svg",
  },
  {
    id: "camiseta-basica",
    nome: "Camiseta Básica",
    preco: 69.9,
    categoria: "Vestuário",
    imagem: "/placeholder.svg",
  },
];

const WHATSAPP_NUMBER = "5511999999999";

function formatarPreco(valor: number): string {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function gerarLinkWhatsApp(nomeProduto: string): string {
  const texto = `Olá! Tenho interesse em comprar o produto: ${nomeProduto}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
}

function LojaPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>("Todos");
  const [mobileOpen, setMobileOpen] = useState(false);

  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <img src="/logo.png" alt="Poli Racing" className="w-8 h-8 object-contain" />
            <span className="text-foreground">Poli Racing</span>
          </Link>
          <ul className="hidden lg:flex items-center gap-7 text-sm">
            <li>
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Voltar ao Site
              </Link>
            </li>
            <li>
              <span className="text-primary font-semibold">Loja</span>
            </li>
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
            <li>
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block text-muted-foreground hover:text-primary"
              >
                Voltar ao Site
              </Link>
            </li>
            <li>
              <span className="block text-primary font-semibold">Loja</span>
            </li>
          </ul>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-6 text-center w-full">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Produtos Oficiais
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient">
            Loja Poli Racing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Vista o espírito da competição. Cada compra apoia diretamente o projeto FP17 e a
            formação de engenheiros da USP.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  categoriaAtiva === cat
                    ? "bg-primary text-primary-foreground glow"
                    : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className="group flex flex-col rounded-2xl bg-surface border border-border overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                {/* Imagem */}
                <div className="aspect-square relative bg-surface-elevated overflow-hidden">
                  <div className="absolute inset-0 image-placeholder flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
                      <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                        <ShoppingCart size={18} />
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em]">Imagem</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5">
                  <span className="text-xs uppercase tracking-wider text-primary mb-1">
                    {produto.categoria}
                  </span>
                  <h3 className="font-display font-semibold text-foreground text-lg leading-tight mb-2">
                    {produto.nome}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {formatarPreco(produto.preco)}
                  </p>
                  <a
                    href={gerarLinkWhatsApp(produto.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform glow"
                  >
                    <ShoppingCart size={18} />
                    Comprar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold tracking-tight">
            <img src="/logo.png" alt="Poli Racing" className="w-6 h-6 object-contain" />
            <span className="text-foreground text-sm">Poli Racing</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Poli Racing. Todos os direitos reservados. Escola Politécnica da Universidade de
            São Paulo.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </Link>
        </div>
      </footer>
    </div>
  );
}
