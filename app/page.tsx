import Nav from "./components/Nav";

const OFFICE_ADDRESS =
  "Calacoto calle 12 esquina Avenida Sanchez Bustamante, No 7992. Edificio GOGO piso 5, Of. 501";

const VALORES = [
  { title: "Compromiso Familiar", body: "Nos consideramos parte de cada familia a la que servimos, brindando un apoyo que va más allá de lo esperado." },
  { title: "Integridad", body: "Actuamos con honestidad y respeto en todas las interacciones, manteniendo la confianza de nuestras comunidades." },
  { title: "Innovación", body: "Buscamos constantemente formas creativas y significativas de celebrar la vida y ofrecer consuelo." },
  { title: "Resiliencia", body: "Acompañamos a las familias en su proceso de duelo, siendo un pilar de apoyo en cada etapa." },
];

const WHY_ITEMS = [
  { id: "ubicacion-accesible", title: "Ubicación accesible", body: "Achocalla, Zona Marquirivi — a minutos de La Paz, de fácil acceso para toda la familia." },
  { id: "cuotas-sin-interes", title: "Planes a cuotas sin interés", body: "Elige una alternativa accesible y planifica con tranquilidad, sin intereses y de acuerdo con tus posibilidades." },
  { id: "servicio-calidad", title: "Servicio de calidad", body: "Atención personalizada, empática y profesional en cada etapa del proceso." },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="inicio" className="hero-section relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="hero-overlay absolute inset-0" aria-hidden />
          <div className="hero-copy relative max-w-4xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-brand-cream uppercase sm:text-base">Parque Cementerio Brisas del Illimani</p>
            <h1 className="font-serif text-5xl leading-[1.05] text-brand-cream sm:text-7xl lg:text-8xl">Donde el recuerdo<br />perdura</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-cream/90 sm:text-xl">Un lugar donde puedes honrar la memoria de tus seres queridos sin salir de tu rutina.</p>
          </div>
        </section>

        <section id="servicios" className="section-shell border-t border-brand-cream/15 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl leading-tight text-brand-cream sm:text-5xl lg:text-6xl">Nuestros Servicios</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-cream/85 sm:text-lg">Nos distinguimos por ofrecer servicios de alta calidad y con calidez humana, especialmente diseñados para brindar apoyo en esos momentos difíciles. Contamos con los precios más accesibles del mercado.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            <article className="service-card overflow-hidden rounded-sm"><div id="sistema-entierro" className="media-placeholder aspect-[4/3] w-full" aria-label="Sistema de entierro" /><div className="flex min-h-28 items-center justify-between gap-4 px-6 py-5"><h3 className="font-serif text-2xl text-brand-purple">Sistema de entierro</h3><span className="text-3xl text-brand-purple" aria-hidden>→</span></div></article>
            <article className="service-card overflow-hidden rounded-sm"><div id="planimetria" className="media-placeholder aspect-[4/3] w-full" aria-label="Planimetría" /><div className="flex min-h-28 items-center justify-between gap-4 px-6 py-5"><h3 className="font-serif text-2xl text-brand-purple">Planimetría</h3><span className="text-3xl text-brand-purple" aria-hidden>→</span></div></article>
          </div>
        </section>

        <section id="quienes-somos" className="section-shell border-t border-brand-cream/15 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs tracking-[0.2em] text-brand-cream/65 uppercase sm:text-sm">Institucional</p>
            <details className="group mt-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden"><h2 className="font-serif text-4xl text-brand-cream sm:text-5xl lg:text-6xl">¿Quiénes Somos?</h2><span className="text-4xl text-brand-cream transition-transform group-open:rotate-45" aria-hidden>+</span></summary>
              <div className="mt-6 max-w-3xl text-base leading-relaxed text-brand-cream/85 sm:text-lg">
                <p>Parque Cementerio Brisas del Illimani nace como un nuevo proyecto en la ciudad de La Paz, convirtiéndose en una propuesta diferente para nuestras familias. Brindamos una solución exequial con calidad, calidez y al mejor precio.</p>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">{VALORES.map((v) => <div key={v.title}><h3 className="font-serif text-xl text-brand-cream">{v.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-cream/70">{v.body}</p></div>)}</div>
                <div className="mt-12 grid grid-cols-1 gap-10 border-t border-brand-cream/15 pt-10 sm:grid-cols-2"><div><h3 className="font-serif text-2xl text-brand-cream">Misión</h3><p className="mt-4">Nuestra misión es proporcionar un espacio en armonía con la naturaleza, donde las familias encuentren paz al recordar a sus seres queridos.</p></div><div><h3 className="font-serif text-2xl text-brand-cream">Visión</h3><p className="mt-4">Ser reconocidos como un lugar de calma y reflexión, líderes en la preservación de la memoria y la celebración de la vida.</p></div></div>
              </div>
            </details>
          </div>
        </section>

        <section id="por-que-escogernos" className="section-shell border-t border-brand-cream/15 px-4 py-16 sm:px-6 sm:py-24 lg:px-10"><div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl text-brand-cream sm:text-5xl lg:text-6xl">¿Por qué escogernos?</h2><div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">{WHY_ITEMS.map((item, index) => <article key={item.id} id={item.id} className="reason-card flex min-h-full flex-col overflow-hidden rounded-sm"><div className={`reason-media flex aspect-video items-end p-5 ${index === 0 ? "reason-location" : "reason-neutral"}`}>{index === 0 && <span className="rounded-sm bg-brand-purple/80 px-3 py-2 text-xs font-semibold tracking-wide text-brand-cream uppercase">Video de ubicación</span>}</div><div className="flex flex-1 flex-col justify-between gap-4 px-5 py-6"><div><h3 className="font-serif text-2xl text-brand-purple">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-purple/75">{item.body}</p></div><span className="text-3xl text-brand-purple" aria-hidden>→</span></div></article>)}</div></div></section>

        <section className="section-shell border-t border-brand-cream/15 px-4 py-20 sm:px-6 sm:py-28 lg:px-10"><div className="mx-auto max-w-6xl"><p className="text-xs tracking-[0.2em] text-brand-cream/70 uppercase sm:text-sm">Planes de previsión</p><h2 className="mt-3 font-serif text-4xl text-brand-cream sm:text-5xl lg:text-6xl">Un plan<br />Anticipado</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-brand-cream/85 sm:text-lg">Planificar con antelación brinda paz mental a quienes nos preocupamos por nuestros seres queridos. Es una muestra de cuidado y amor duradero hacia quienes más apreciamos.</p><a href="https://wa.link/9xjvrq" target="_blank" rel="noopener noreferrer" className="brand-button mt-8 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide uppercase">Contactar a mi asesor ↗</a></div></section>

        <section id="capilla" className="section-shell border-t border-brand-cream/15 px-4 py-16 sm:px-6 sm:py-24 lg:px-10"><div className="mx-auto max-w-6xl"><p className="text-xs tracking-[0.2em] text-brand-cream/65 uppercase sm:text-sm">Conoce más</p><h2 className="mt-3 font-serif text-4xl text-brand-cream sm:text-5xl lg:text-6xl">Capilla</h2><p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-cream/85 sm:text-lg">Contamos con una capilla dentro del Parque Cementerio.</p><div className="chapel-image mt-10 aspect-video w-full rounded-sm" aria-label="Capilla del Parque Cementerio" /></div></section>

        <section id="contacto" className="section-shell border-t border-brand-cream/15 px-4 py-16 sm:px-6 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><h2 className="font-serif text-4xl text-brand-cream sm:text-5xl lg:text-6xl">Contáctanos</h2><p className="mt-6 max-w-md text-base leading-relaxed text-brand-cream/85">Estamos para ayudarte. Escríbenos y un asesor se pondrá en contacto contigo.</p><p className="mt-8 max-w-sm text-sm leading-relaxed text-brand-cream/70"><span className="font-semibold text-brand-cream">Oficina</span><br />{OFFICE_ADDRESS}</p></div><form action="https://formsubmit.co/ventas@brisasdelillimani.com" method="POST" className="grid grid-cols-1 gap-5" aria-label="Formulario de contacto"><input type="hidden" name="_subject" value="Nuevo contacto desde Brisas del Illimani" /><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_template" value="table" /><label className="flex flex-col gap-2 text-xs tracking-wide text-brand-cream/70 uppercase">Nombre *<input required name="nombre" type="text" className="form-control" /></label><label className="flex flex-col gap-2 text-xs tracking-wide text-brand-cream/70 uppercase">Dirección de correo electrónico *<input required name="email" type="email" className="form-control" /></label><label className="flex flex-col gap-2 text-xs tracking-wide text-brand-cream/70 uppercase">Número de teléfono<input name="telefono" type="tel" className="form-control" /></label><label className="flex flex-col gap-2 text-xs tracking-wide text-brand-cream/70 uppercase">Mensaje<textarea required name="mensaje" rows={4} className="form-control resize-y py-3" /></label><button type="submit" className="brand-button mt-2 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide uppercase">Enviar mensaje</button></form></div></section>
      </main>

      <footer id="ubicacion" className="section-shell border-t border-brand-cream/15 px-4 py-16 sm:px-6 sm:py-20 lg:px-10"><div className="mx-auto max-w-6xl"><h2 className="font-serif text-3xl text-brand-cream sm:text-4xl">Información</h2><div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2"><div><h3 className="text-xs tracking-[0.2em] text-brand-cream/60 uppercase">Oficinas</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-cream/80">{OFFICE_ADDRESS}</p></div><div><h3 className="text-xs tracking-[0.2em] text-brand-cream/60 uppercase">Parque Cementerio</h3><p className="mt-3 text-sm leading-relaxed text-brand-cream/80">Achocalla, Zona Marquirivi</p></div></div><div className="mt-8 flex flex-col gap-2 text-sm text-brand-cream/80 sm:flex-row sm:gap-8"><a href="tel:2779191" className="transition-colors hover:text-brand-cream">2 779191</a><a href="tel:62225500" className="transition-colors hover:text-brand-cream">62225500</a><a href="mailto:ventas@brisasdelillimani.com" className="transition-colors hover:text-brand-cream">ventas@brisasdelillimani.com</a></div></div></footer>
    </>
  );
}
