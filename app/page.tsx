import Nav from "./components/Nav";
import Accordion from "./components/Accordion";

const VALORES = [
  {
    title: "Compromiso Familiar",
    body: "Nos consideramos parte de cada familia a la que servimos, brindando un apoyo que va más allá de lo esperado.",
  },
  {
    title: "Integridad",
    body: "Actuamos con honestidad y respeto en todas las interacciones, manteniendo la confianza de nuestras comunidades.",
  },
  {
    title: "Innovación",
    body: "Buscamos constantemente formas creativas y significativas de celebrar la vida y ofrecer consuelo.",
  },
  {
    title: "Resiliencia",
    body: "Acompañamos a las familias en su proceso de duelo, siendo un pilar de apoyo en cada etapa.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO — reemplazar el gradiente por /videos/brisas-hero.mp4 + /images/brisas-hero-poster.webp cuando estén los assets reales */}
      <section
        id="inicio"
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-900 to-black px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24"
      >
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="relative max-w-3xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-neutral-300 uppercase sm:text-sm">
            Parque Cementerio Brisas del Illimani
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
            Donde el recuerdo
            <br />
            perdura
          </h1>
          <p className="mt-5 max-w-md text-base text-neutral-200 sm:text-lg">
            Un lugar donde puedes honrar la memoria de tus seres queridos sin salir de tu rutina.
          </p>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section id="quienes-somos" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase sm:text-sm">
          Institucional
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">¿Quienes Somos?</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          Parque Cementerio Brisas del Illimani nace como un nuevo proyecto en la ciudad de La Paz
          convirtiéndose en la mejor propuesta del mercado. Brindamos una solución exequial para
          nuestras familias, ofreciendo un servicio de calidad con calidez y al mejor precio.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex h-11 items-center border-b border-white text-sm tracking-wide uppercase hover:text-neutral-300 hover:border-neutral-300 transition-colors"
        >
          Ver más
        </button>

        {/* VALORES */}
        <div id="valores" className="mt-14 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {VALORES.map((v) => (
            <div key={v.title}>
              <h3 className="font-serif text-xl sm:text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISION / VISION */}
      <section
        id="mision-vision"
        className="grid grid-cols-1 gap-10 border-t border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10"
      >
        <div id="mision">
          <h3 className="font-serif text-2xl sm:text-3xl">Misión</h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            Nuestra misión es proporcionar un espacio en armonía con la naturaleza, donde las
            familias encuentren paz al recordar a sus seres queridos.
          </p>
          <p className="mt-4 text-sm text-neutral-400">
            Con servicios de calidad, atención personalizada, empatía y profesionalismo
          </p>
        </div>
        <div id="vision">
          <h3 className="font-serif text-2xl sm:text-3xl">Visión</h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            Nuestra visión es ser reconocidos como un lugar de calma y reflexión, destacando como
            los líderes en la preservación de la memoria y la celebración de la vida. Aspiramos a
            ser un lugar emblemático donde la belleza del entorno natural se entrelace con la
            memoria. Buscamos innovar en nuestros servicios con el fin de satisfacer las
            necesidades cambiantes de nuestras comunidades, siendo un faro de apoyo y consuelo en
            los momentos más delicados de la vida.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">Nuestros Servicios</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          Nos distinguimos por ofrecer servicios de alta calidad y con calidez humana, especialmente
          diseñados para brindar apoyo en esos momentos difíciles.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          {/* reemplazar por /images/system.png */}
          <div id="sistema-entierro" className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900" />
          <div>
            <h3 className="font-serif text-xl sm:text-2xl">Sistema de entierro</h3>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl">Planimetría</h3>
            <button
              type="button"
              className="mt-4 inline-flex h-11 items-center border-b border-white text-sm tracking-wide uppercase hover:text-neutral-300 hover:border-neutral-300 transition-colors"
            >
              Ver más
            </button>
          </div>
          {/* reemplazar por /images/planimetry-new.jpeg */}
          <div id="planimetria" className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900" />
        </div>
      </section>

      {/* POR QUE ESCOGERNOS */}
      <section id="por-que-escogernos" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">¿Por qué escogernos?</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          Garantizamos que cada familia pueda encontrar la solución que mejor se ajuste a sus
          necesidades, brindando un espacio excepcional donde la memoria y la tranquilidad se
          fusionan en perfecta armonía.
        </p>

        <div className="mt-10 max-w-3xl">
          <Accordion
            items={[
              {
                id: "ubicacion-accesible",
                title: "Ubicación",
                body: "Achocalla, Zona Marquirivi — a minutos de La Paz, de fácil acceso para toda la familia.",
              },
              {
                id: "prevision",
                title: "Planes de previsión",
                body: "Planifica con antelación y brinda tranquilidad a los tuyos, aliviando cargas emocionales y financieras futuras.",
              },
              {
                id: "servicio-calidad",
                title: "Servicio de calidad",
                body: "Atención personalizada, empática y profesional en cada etapa del proceso.",
              },
            ]}
          />
        </div>
      </section>

      {/* PREVISION CTA — reemplazar por /videos/plan-anticipado.mp4 */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <p className="text-xs tracking-[0.2em] text-neutral-300 uppercase sm:text-sm">
          Planes de previsión
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
          Un plan
          <br />
          Anticipado
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          Planificar con antelación brinda paz mental a quienes nos preocupamos por nuestros seres
          queridos. No se trata solo de afrontar lo inevitable, sino de aliviar cargas emocionales y
          financieras en momentos difíciles. Es una muestra de cuidado y amor duradero hacia quienes
          más apreciamos.
        </p>
        <a
          href="https://wa.link/9xjvrq"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium tracking-wide uppercase text-neutral-950"
        >
          Cotizar mi plan ↗
        </a>
      </section>

      {/* CAPILLA — reemplazar por /images/chapel-front.webp y /videos/capilla.mp4 */}
      <section id="capilla" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase sm:text-sm">
          Conoce más
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">Capilla</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          Contamos con una capilla dentro del Parque Cementerio.
        </p>
        <div className="mt-10 aspect-video w-full rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900" />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">Contáctanos</h2>
        <form className="mt-10 grid max-w-xl grid-cols-1 gap-5">
          <label className="flex flex-col gap-2 text-xs tracking-wide uppercase text-neutral-400">
            Nombre *
            <input
              required
              type="text"
              className="h-12 rounded-md border border-white/15 bg-white/5 px-4 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs tracking-wide uppercase text-neutral-400">
            Dirección de correo electrónico *
            <input
              required
              type="email"
              className="h-12 rounded-md border border-white/15 bg-white/5 px-4 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs tracking-wide uppercase text-neutral-400">
            Número de teléfono
            <input
              type="tel"
              className="h-12 rounded-md border border-white/15 bg-white/5 px-4 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs tracking-wide uppercase text-neutral-400">
            Mensaje
            <textarea
              rows={4}
              className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium tracking-wide uppercase text-neutral-950"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* UBICACION / FOOTER */}
      <footer id="ubicacion" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <h2 className="font-serif text-2xl sm:text-3xl">Información</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-xs tracking-[0.2em] text-neutral-400 uppercase">Oficinas</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Av. Sanchez Bustamante Nro. 487 Esq. Calle 11, Edificio CBC2 Piso 1, Of. 1
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
              Parque Cementerio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Achocalla, Zona Marquirivi
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-sm text-neutral-300 sm:flex-row sm:gap-8">
          <a href="tel:2779191" className="hover:text-white">
            2 779191
          </a>
          <a href="tel:62225500" className="hover:text-white">
            62225500
          </a>
          <a href="mailto:ventas@brisasdelillimani.com" className="hover:text-white">
            ventas@brisasdelillimani.com
          </a>
        </div>
      </footer>
    </>
  );
}
