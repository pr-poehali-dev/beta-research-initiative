import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";
import { CTAForm } from "@/components/CTAForm";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Основана в 2010 году</p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Строй</span>Ремонт
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Строительство, реставрация и ремонт объектов любой сложности. Жилые дома, фасады, кровля, парки и общественные пространства.
          </p>

          {/* Decorative bottom element */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наш подход</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Качество, проверенное временем
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Мы работаем с собственниками частных домов, управляющими компаниями, ТСЖ и государственными структурами. Каждый объект — от загородного дома до городской аллеи — получает полный цикл работ: от проектирования до сдачи под ключ.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Опыт в реализации государственных контрактов, прозрачная смета и строгое соблюдение сроков — основа нашей репутации. За 14 лет мы не сорвали ни одного дедлайна.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наши услуги</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Полный спектр работ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Строительство и ремонт"
              description="Возведение и капитальный ремонт жилых и коммерческих зданий. Работаем по договору с частными заказчиками, ТСЖ и управляющими компаниями."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M3 21h18M3 10l9-7 9 7M9 21V14h6v7" />
                </svg>
              }
            />
            <ServiceCard
              title="Фасады и кровля"
              description="Реставрация и утепление фасадов, ремонт и замена кровельных покрытий. Любые материалы — от металлочерепицы до мягкой кровли."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M3 12L12 4l9 8M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
                </svg>
              }
            />
            <ServiceCard
              title="Парки и общественные места"
              description="Благоустройство аллей, улиц, парков и дворовых территорий. Опыт работы по государственным контрактам и в рамках программ городского развития."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="relative text-center py-12">
            {/* Quote decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                СтройРемонт выполнил реставрацию фасада нашего дома точно в срок и в рамках сметы. Качество работ — отличное, команда профессиональная. Будем сотрудничать дальше.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Председатель ТСЖ «Центральный»,{" "}
                <span className="text-primary">Москва</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Оставьте заявку</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Рассчитаем стоимость</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Оставьте контакты — наш специалист свяжется с вами, уточнит детали и подготовит предварительную смету бесплатно.
            </p>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            {/* Decorative frame corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">СтройРемонт</span>
              <div className="w-12 h-px bg-primary" />
            </div>

            <nav className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider uppercase">
                Услуги
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider uppercase">
                О компании
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider uppercase">
                Портфолио
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider uppercase">
                Контакты
              </a>
            </nav>

            <p className="text-muted-foreground text-sm text-center">
              © 2024 СтройРемонт. Строительство, реставрация и благоустройство.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
