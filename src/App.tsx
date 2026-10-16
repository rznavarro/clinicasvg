import { useState, type FormEvent } from 'react';
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  TrainFront,
} from 'lucide-react';
import { ToothMark } from './components/ToothMark.tsx';

const LOGO_URL =
  'https://www.svgclinicadental.cl/wp-content/uploads/2023/05/SVG-ClinicaDental-Logo.jpg';
const HERO_PHOTO_URL =
  'https://www.svgclinicadental.cl/wp-content/uploads/2023/06/Opiniones-Providencia.webp';
const SEREMI_URL =
  'https://www.svgclinicadental.cl/wp-content/uploads/2024/05/SVG-CLINICA-DENTAL-autorizada-SEREMI-SALUD-METROPOLITANA-geo.jpg';

const WHATSAPP_NUMBER = '56985501250';
const WHATSAPP_MAIN_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, quiero pedir una hora en SVG Clínica Dental Providencia.'
)}`;
const WHATSAPP_URGENCIA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola, tengo una urgencia dental y necesito atención en SVG Clínica Dental Providencia.'
)}`;

const TREATMENTS = [
  {
    id: '01',
    name: 'Odontología general y prevención',
    desc: 'Limpiezas, chequeos de rutina y tratamiento de caries para toda la familia.',
  },
  {
    id: '02',
    name: 'Periodoncia e implantes',
    desc: 'Salud de tus encías y de los tejidos que sostienen tus dientes, e implantes dentales.',
  },
  {
    id: '03',
    name: 'Endodoncia',
    desc: 'Tratamiento de conducto con especialista.',
  },
  {
    id: '04',
    name: 'Ortodoncia',
    desc: 'Frenillos y ortopedia dental en niños, siempre con el mismo especialista. Solo en Providencia.',
  },
  {
    id: '05',
    name: 'Prótesis y rehabilitación oral',
    desc: 'Prótesis fijas y removibles, coronas libres de metal y placas para bruxismo.',
  },
  {
    id: '06',
    name: 'Estética dental',
    desc: 'Blanqueamiento, carillas y diseño digital de sonrisa.',
  },
  {
    id: '07',
    name: 'Cirugía oral y maxilofacial',
    desc: 'Procedimientos quirúrgicos de la boca y los maxilares con especialista.',
  },
  {
    id: '08',
    name: 'Armonización y rejuvenecimiento orofacial',
    desc: 'Tratamientos estéticos del rostro realizados por cirujana dentista.',
  },
];

const TEAM = [
  {
    name: 'Dra. Sonia Velásquez G.',
    specialty: 'Odontología General y Rehabilitación Oral',
    photo:
      'https://www.svgclinicadental.cl/wp-content/uploads/2026/05/Dra-Sonia-Velasquez-G.-Odontologia-General-y-Rehablitiacion-Oral.webp',
  },
  {
    name: 'Dr. Raimundo Diaz',
    specialty: 'Especialista en Periodoncia e Implantes Dentales',
    photo:
      'https://www.svgclinicadental.cl/wp-content/uploads/2023/06/Dr-Raimundo-Diaz.webp',
  },
  {
    name: 'Dra. Valentina Gormaz',
    specialty: 'Máster en Rehabilitación y Endodoncia',
    photo:
      'https://www.svgclinicadental.cl/wp-content/uploads/2026/05/Dra-Valentina-Gormaz.-Master-en-Rehablitacion-y-Endodoncia.webp',
  },
  {
    name: 'Dr. Francisco Pampín',
    specialty: 'Especialista en Cirugía Oral y Maxilofacial',
    photo:
      'https://www.svgclinicadental.cl/wp-content/uploads/2023/06/Dr-Francisco-Pampin.webp',
  },
  {
    name: 'Dra. Paula Jaramillo',
    specialty:
      'Cirujana Dentista, Especialista en Estética y Rejuvenecimiento Facial',
    photo:
      'https://www.svgclinicadental.cl/wp-content/uploads/2026/05/Dra-Paula-Jaramillo.-Cirujana-Dentista.-Especialista-en-Estetica-y-Rejuvenecimiento-Facial-1.webp',
  },
  {
    name: 'Dr. Miguel Angel Giraldo',
    specialty: 'Especialista en Ortodoncia',
    photo:
      'https://www.svgclinicadental.cl/wp-content/uploads/2025/06/Dr-Miguel-Angel-Giraldo.webp',
  },
];

const HERO_WORDS = [
  { word: 'Especialistas', underline: false },
  { word: 'dentales', underline: false },
  { word: 'en', underline: false },
  { word: 'Providencia,', underline: true },
  { word: 'a', underline: false },
  { word: 'pasos', underline: false },
  { word: 'de', underline: false },
  { word: 'tu', underline: false },
  { word: 'metro.', underline: false },
];

export default function App() {
  const [headerLogoError, setHeaderLogoError] = useState(false);
  const [footerLogoError, setFooterLogoError] = useState(false);
  const [heroPhotoError, setHeroPhotoError] = useState(false);
  const [seremiError, setSeremiError] = useState(false);
  const [teamImageErrors, setTeamImageErrors] = useState<Record<number, boolean>>({});

  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    sede: 'Providencia',
    tratamiento: TREATMENTS[0].name,
    comentario: '',
  });
  const [formErrors, setFormErrors] = useState<{
    nombre?: string;
    telefono?: string;
  }>({});

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: { nombre?: string; telefono?: string } = {};

    if (!formData.nombre.trim()) {
      errors.nombre = 'Escribe tu nombre';
    }
    if (!formData.telefono.trim()) {
      errors.telefono = 'Ingresa un teléfono para contactarte';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    let message = `Hola, soy ${formData.nombre.trim()}. Quiero pedir una hora en SVG Clínica Dental.\nSede: ${formData.sede}\nTratamiento: ${formData.tratamiento}\nMi teléfono: ${formData.telefono.trim()}`;
    if (formData.comentario.trim()) {
      message += `\nComentario: ${formData.comentario.trim()}`;
    }

    const targetUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTeamImageError = (index: number) => {
    setTeamImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col selection:bg-primary selection:text-ink">
      {/* Hidden SVG ClipPath for Tooth Mask */}
      <svg
        width="0"
        height="0"
        className="absolute w-0 h-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="tooth-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.18,0.08 C0.30,0.00 0.40,0.06 0.50,0.06 C0.60,0.06 0.70,0.00 0.82,0.08 C0.97,0.18 0.98,0.42 0.92,0.56 C0.88,0.66 0.86,0.78 0.82,0.92 C0.79,1.00 0.70,1.00 0.68,0.92 C0.64,0.78 0.60,0.70 0.50,0.70 C0.40,0.70 0.36,0.78 0.32,0.92 C0.30,1.00 0.21,1.00 0.18,0.92 C0.14,0.78 0.12,0.66 0.08,0.56 C0.02,0.42 0.03,0.18 0.18,0.08 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-ink/10 h-16 transition-colors">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          {/* Logo link to #inicio */}
          <a
            href="#inicio"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
            aria-label="SVG Clínica Dental - Inicio"
          >
            {headerLogoError ? (
              <span className="font-display font-extrabold text-secondary text-xl tracking-tight">
                SVG Clínica Dental
              </span>
            ) : (
              <img
                src={LOGO_URL}
                alt="SVG Clínica Dental"
                width="864"
                height="349"
                className="h-10 md:h-[52px] w-auto object-contain"
                onError={() => setHeaderLogoError(true)}
              />
            )}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#tratamientos"
              className="text-ink/80 hover:text-secondary font-medium text-sm transition-colors"
            >
              Tratamientos
            </a>
            <a
              href="#urgencias"
              className="text-ink/80 hover:text-secondary font-medium text-sm transition-colors"
            >
              Urgencias
            </a>
            <a
              href="#equipo"
              className="text-ink/80 hover:text-secondary font-medium text-sm transition-colors"
            >
              Equipo
            </a>
            <a
              href="#agenda"
              className="text-ink/80 hover:text-secondary font-medium text-sm transition-colors"
            >
              Agenda
            </a>
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-ink font-semibold text-sm rounded-full h-10 px-5 inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-secondary hover:text-surface focus:outline-none focus:ring-3 focus:ring-secondary shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir hora</span>
            </a>
          </nav>

          {/* Mobile compact header CTA */}
          <div className="md:hidden flex items-center">
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-ink font-semibold text-xs rounded-full h-10 px-3.5 inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-secondary hover:text-surface focus:outline-none focus:ring-3 focus:ring-secondary shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pedir hora</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* 1. HERO (#inicio) */}
        <section
          id="inicio"
          className="bg-surface relative overflow-hidden pt-6 pb-16 md:py-24 lg:py-28"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (Content) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Chip / Eyebrow */}
                <div className="inline-flex items-center gap-2 bg-mist text-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 md:mb-6">
                  <TrainFront className="w-3.5 h-3.5 text-secondary" />
                  <span>Providencia · a pasos del metro Tobalaba</span>
                </div>

                {/* H1 Title with animated words & underline on Providencia */}
                <h1 className="font-display font-extrabold text-[2.6rem] md:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-ink mb-5 md:mb-6">
                  {HERO_WORDS.map((item, idx) => {
                    const delayMs = 150 + idx * 70;
                    return (
                      <span
                        key={idx}
                        className={`hero-word mr-[0.24em] ${
                          item.underline ? 'hero-underline' : ''
                        }`}
                        style={{ animationDelay: `${delayMs}ms` }}
                      >
                        {item.word}
                      </span>
                    );
                  })}
                </h1>

                {/* Bajada */}
                <p className="text-ink/75 text-base md:text-lg max-w-[34ch] mb-7 md:mb-8 font-normal leading-relaxed">
                  Odontología general, implantes, ortodoncia, endodoncia y
                  estética dental en un mismo lugar. Autorizados por la SEREMI
                  de Salud y con más de 15 años en Providencia.
                </p>

                {/* CTAs */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 mb-8 md:mb-10">
                  <a
                    href={WHATSAPP_MAIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-primary text-ink font-semibold rounded-full h-[52px] px-7 inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-secondary hover:text-surface focus:outline-none focus:ring-3 focus:ring-secondary shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Pedir hora por WhatsApp</span>
                  </a>
                  <a
                    href={WHATSAPP_URGENCIA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-secondary text-surface font-semibold rounded-full h-[52px] px-7 inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-secondary/90 focus:outline-none focus:ring-3 focus:ring-secondary shadow-sm"
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    <span>Tengo una urgencia</span>
                  </a>
                </div>

                {/* Franja de datos */}
                <div className="w-full pt-6 border-t border-ink/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-ink/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary shrink-0" />
                    <span>Lun a vie 08:00–20:00 · Sáb 09:00–18:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary shrink-0" />
                    <span>Luis Thayer Ojeda 0130, of. 401</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                    <span>Autorizada por SEREMI</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Tooth Mask Photo) */}
              <div className="lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0">
                <div className="relative aspect-square w-[78%] mx-auto lg:w-[460px] lg:h-[460px]">
                  {/* Dark teal tooth background shadow shifted (14px, 14px) */}
                  <div
                    className="absolute inset-0 bg-secondary hero-tooth-shadow"
                    style={{ clipPath: 'url(#tooth-clip)' }}
                    aria-hidden="true"
                  />

                  {/* Foreground photo in tooth mask */}
                  <div
                    className="relative w-full h-full hero-photo"
                    style={{ clipPath: 'url(#tooth-clip)' }}
                  >
                    {heroPhotoError ? (
                      <div className="w-full h-full bg-primary flex items-center justify-center" />
                    ) : (
                      <img
                        src={HERO_PHOTO_URL}
                        alt="Dentista atendiendo a una paciente en el box de SVG Clínica Dental Providencia"
                        fetchPriority="high"
                        width="460"
                        height="460"
                        className="w-full h-full object-cover"
                        onError={() => setHeroPhotoError(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative mist band */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-mist" aria-hidden="true" />
        </section>

        {/* 2. TRATAMIENTOS (#tratamientos, fondo surface) */}
        <section
          id="tratamientos"
          className="bg-surface py-20 md:py-28 border-t border-ink/5"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <ToothMark size={18} id="eyebrow-tratamientos" />
                <span className="font-sans font-semibold text-xs uppercase tracking-[0.18em] text-secondary">
                  Tratamientos
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight mb-3">
                ¿Qué necesitas tratar?
              </h2>
              <p className="text-ink/75 text-base md:text-lg">
                Toca tu tratamiento y te respondemos por WhatsApp.
              </p>
            </div>

            {/* Editorial List (8 rows) */}
            <div className="border-t border-ink/10">
              {TREATMENTS.map((item) => {
                const treatmentWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hola, quiero consultar por ${item.name} en SVG Clínica Dental Providencia.`
                )}`;
                return (
                  <a
                    key={item.id}
                    href={treatmentWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-6 md:py-8 border-b border-ink/10 transition-colors duration-200 hover:bg-mist px-3 md:px-6 rounded-2xl"
                  >
                    <div className="flex items-start md:items-center gap-4 md:gap-8 pr-4">
                      <span className="font-display text-sm font-bold text-secondary w-7 shrink-0 pt-1 md:pt-0">
                        {item.id}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl md:text-4xl font-extrabold text-ink group-hover:text-secondary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-ink/70 text-sm md:text-base mt-1 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 pl-2">
                      <div className="w-11 h-11 bg-primary text-ink rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-secondary group-hover:text-surface">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. URGENCIAS (#urgencias, fondo bg-secondary, texto text-surface) */}
        <section
          id="urgencias"
          className="bg-secondary text-surface py-20 md:py-28 relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 mb-3">
                  <ToothMark size={18} variant="line" id="eyebrow-urgencias" />
                  <span className="font-sans font-semibold text-xs uppercase tracking-[0.18em] text-primary">
                    Urgencia dental
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-surface tracking-tight mb-4">
                  ¿Te duele ahora?
                </h2>
                <p className="text-surface/85 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                  Atendemos urgencias dentales todos los días, incluidos
                  domingos, con horarios flexibles. Escríbenos antes de venir
                  para coordinar tu llegada.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href={WHATSAPP_URGENCIA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-primary text-ink font-semibold rounded-full h-[52px] px-8 inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-surface hover:text-secondary focus:outline-none focus:ring-3 focus:ring-primary shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Escribir por urgencia</span>
                  </a>
                  <a
                    href="tel:+56222098318"
                    className="text-surface/80 hover:text-surface text-base underline underline-offset-4 transition-colors py-2"
                  >
                    o llama al +56 2 2209 8318
                  </a>
                </div>
              </div>

              {/* Right Column: ToothMark line art (220px) */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
                <ToothMark
                  size={220}
                  variant="line"
                  id="urgencias-graphic"
                  className="opacity-90 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. EQUIPO (#equipo, fondo bg-mist) */}
        <section id="equipo" className="bg-mist py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <ToothMark size={18} id="eyebrow-equipo" />
                <span className="font-sans font-semibold text-xs uppercase tracking-[0.18em] text-secondary">
                  Equipo
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight mb-3">
                Quién te atiende
              </h2>
              <p className="text-ink/75 text-base md:text-lg">
                Un equipo multidisciplinario de especialistas para tratar cada caso de forma integral.
              </p>
            </div>

            {/* Mobile Carousel / Desktop 3-col Grid */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
              {TEAM.map((member, index) => {
                const isImgError = teamImageErrors[index];
                return (
                  <div
                    key={index}
                    className="w-[78%] shrink-0 snap-center md:w-auto bg-surface rounded-3xl p-3 border border-ink/10 shadow-sm flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-primary/20">
                      {isImgError ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <ToothMark size={48} id={`fallback-${index}`} />
                        </div>
                      ) : (
                        <img
                          src={member.photo}
                          alt={`${member.name}, ${member.specialty}, SVG Clínica Dental`}
                          loading="lazy"
                          decoding="async"
                          width="360"
                          height="450"
                          className="w-full h-full object-cover object-top rounded-2xl"
                          onError={() => handleTeamImageError(index)}
                        />
                      )}

                      {/* ToothMark 22px badge in top right corner */}
                      <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                        <ToothMark size={22} id={`badge-${index}`} />
                      </div>
                    </div>

                    <div className="pt-4 pb-2 px-1">
                      <h3 className="font-display text-xl font-extrabold text-ink leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-sm text-ink/70 mt-1 leading-normal font-sans">
                        {member.specialty}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. AGENDA Y CONTACTO (#agenda, fondo surface) */}
        <section id="agenda" className="bg-surface py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <ToothMark size={18} id="eyebrow-agenda" />
                <span className="font-sans font-semibold text-xs uppercase tracking-[0.18em] text-secondary">
                  Agenda
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight mb-3">
                Pide tu hora
              </h2>
            </div>

            {/* Content: Form & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-mist rounded-3xl p-6 md:p-8 border border-ink/10 flex flex-col gap-5"
                >
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="form-nombre"
                      className="block text-xs font-semibold text-ink/80 uppercase tracking-wider mb-1.5"
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="form-nombre"
                      type="text"
                      placeholder="Escribe tu nombre"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full bg-surface rounded-xl h-12 px-4 border border-ink/15 text-ink focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    />
                    {formErrors.nombre && (
                      <p className="text-xs text-secondary mt-1 font-semibold">
                        {formErrors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="form-telefono"
                      className="block text-xs font-semibold text-ink/80 uppercase tracking-wider mb-1.5"
                    >
                      Teléfono *
                    </label>
                    <input
                      id="form-telefono"
                      type="tel"
                      placeholder="Ingresa un teléfono para contactarte"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      className="w-full bg-surface rounded-xl h-12 px-4 border border-ink/15 text-ink focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    />
                    {formErrors.telefono && (
                      <p className="text-xs text-secondary mt-1 font-semibold">
                        {formErrors.telefono}
                      </p>
                    )}
                  </div>

                  {/* Sede */}
                  <div>
                    <label
                      htmlFor="form-sede"
                      className="block text-xs font-semibold text-ink/80 uppercase tracking-wider mb-1.5"
                    >
                      Sede
                    </label>
                    <select
                      id="form-sede"
                      value={formData.sede}
                      onChange={(e) =>
                        setFormData({ ...formData, sede: e.target.value })
                      }
                      className="w-full bg-surface rounded-xl h-12 px-4 border border-ink/15 text-ink focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    >
                      <option value="Providencia">Providencia (Metro Tobalaba)</option>
                      <option value="Vitacura">Vitacura</option>
                    </select>
                  </div>

                  {/* Tratamiento */}
                  <div>
                    <label
                      htmlFor="form-tratamiento"
                      className="block text-xs font-semibold text-ink/80 uppercase tracking-wider mb-1.5"
                    >
                      Tratamiento
                    </label>
                    <select
                      id="form-tratamiento"
                      value={formData.tratamiento}
                      onChange={(e) =>
                        setFormData({ ...formData, tratamiento: e.target.value })
                      }
                      className="w-full bg-surface rounded-xl h-12 px-4 border border-ink/15 text-ink focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                      <option value="Urgencia dental">Urgencia dental</option>
                      <option value="No estoy seguro/a">No estoy seguro/a</option>
                    </select>
                  </div>

                  {/* Comentario (opcional) */}
                  <div>
                    <label
                      htmlFor="form-comentario"
                      className="block text-xs font-semibold text-ink/80 uppercase tracking-wider mb-1.5"
                    >
                      Comentario (opcional)
                    </label>
                    <textarea
                      id="form-comentario"
                      rows={3}
                      placeholder="Cuéntanos algún detalle o preferencia de horario"
                      value={formData.comentario}
                      onChange={(e) =>
                        setFormData({ ...formData, comentario: e.target.value })
                      }
                      className="w-full bg-surface rounded-xl p-4 border border-ink/15 text-ink focus:outline-none focus:ring-2 focus:ring-secondary text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-ink font-semibold rounded-full h-[52px] inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-secondary hover:text-surface focus:outline-none focus:ring-3 focus:ring-secondary shadow-sm mt-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar por WhatsApp</span>
                  </button>
                </form>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Sede Providencia */}
                <div className="bg-mist rounded-3xl p-6 border border-ink/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-extrabold text-xl text-ink">
                      Sede Providencia
                    </h3>
                    <span className="bg-secondary/10 text-secondary text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                      <TrainFront className="w-3 h-3" />
                      Metro Tobalaba
                    </span>
                  </div>
                  <p className="text-ink/75 text-sm mb-3">
                    Avenida Luis Thayer Ojeda 0130, oficina 401, Providencia, Santiago
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SVG%20Cl%C3%ADnica%20Dental%20Providencia%20Luis%20Thayer%20Ojeda%200130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:underline"
                  >
                    <span>Cómo llegar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Sede Vitacura */}
                <div className="bg-mist rounded-3xl p-6 border border-ink/10">
                  <h3 className="font-display font-extrabold text-xl text-ink mb-2">
                    Sede Vitacura
                  </h3>
                  <p className="text-ink/75 text-sm mb-3">
                    Av. Presidente Kennedy 5600, oficina 1512, Vitacura, Santiago
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SVG%20Cl%C3%ADnica%20Dental%20Av%20Presidente%20Kennedy%205600%20Vitacura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:underline"
                  >
                    <span>Cómo llegar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Horarios & Contacto */}
                <div className="bg-mist rounded-3xl p-6 border border-ink/10 flex flex-col gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-ink mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      Horario de atención
                    </h4>
                    <p className="text-ink/75 text-xs leading-relaxed">
                      Tratamientos con cita previa · Lunes a viernes 08:00–20:00 · Sábado 09:00–18:00
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ink/10 flex flex-col gap-2.5">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink hover:text-secondary font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-secondary" />
                      <span>WhatsApp: +56 9 8550 1250</span>
                    </a>
                    <a
                      href="tel:+56222098318"
                      className="inline-flex items-center gap-2 text-ink hover:text-secondary font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4 text-secondary" />
                      <span>Teléfono fijo: +56 2 2209 8318</span>
                    </a>
                    <a
                      href="mailto:contacto@svgclinicadental.cl"
                      className="inline-flex items-center gap-2 text-ink hover:text-secondary font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4 text-secondary" />
                      <span>contacto@svgclinicadental.cl</span>
                    </a>
                  </div>
                </div>

                {/* Sello SEREMI */}
                <div className="bg-mist rounded-3xl p-4 md:p-5 border border-ink/10 flex items-center gap-4">
                  {!seremiError && (
                    <img
                      src={SEREMI_URL}
                      alt="Sello SEREMI de Salud Metropolitana"
                      loading="lazy"
                      decoding="async"
                      width="96"
                      height="89"
                      className="w-24 h-auto object-contain shrink-0"
                      onError={() => setSeremiError(true)}
                    />
                  )}
                  <div className="flex items-center gap-2">
                    {seremiError && (
                      <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                    )}
                    <span className="text-xs text-ink/80 font-medium leading-relaxed">
                      Clínica autorizada por la SEREMI de Salud Metropolitana
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER (fondo bg-secondary, texto text-surface) */}
      <footer className="bg-secondary text-surface">
        {/* Top 6px strip in bg-primary */}
        <div className="h-1.5 bg-primary w-full" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-surface/15">
            {/* Col 1: Logo inside white card */}
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <div className="bg-surface rounded-2xl p-3 inline-block shadow-sm">
                {footerLogoError ? (
                  <span className="font-display font-extrabold text-secondary text-lg">
                    SVG Clínica Dental
                  </span>
                ) : (
                  <img
                    src={LOGO_URL}
                    alt="SVG Clínica Dental"
                    width="864"
                    height="349"
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto object-contain"
                    onError={() => setFooterLogoError(true)}
                  />
                )}
              </div>
              <p className="text-surface/80 text-sm max-w-xs leading-relaxed">
                Clínica dental de especialistas en Providencia y Vitacura. Más de 15 años cuidando la salud oral de nuestros pacientes.
              </p>
            </div>

            {/* Col 2: Sedes y direcciones */}
            <div className="md:col-span-5 flex flex-col gap-4 text-sm">
              <div>
                <h4 className="font-display font-extrabold text-base text-surface mb-1">
                  Sede Providencia
                </h4>
                <p className="text-surface/80">
                  Avenida Luis Thayer Ojeda 0130, oficina 401
                  <br />
                  Metro Tobalaba, Providencia
                </p>
              </div>

              <div>
                <h4 className="font-display font-extrabold text-base text-surface mb-1">
                  Sede Vitacura
                </h4>
                <p className="text-surface/80">
                  Av. Presidente Kennedy 5600, oficina 1512, Vitacura
                </p>
              </div>
            </div>

            {/* Col 3: Contacto y redes */}
            <div className="md:col-span-3 flex flex-col gap-3 text-sm">
              <h4 className="font-display font-extrabold text-base text-surface mb-1">
                Contacto
              </h4>
              <p className="text-surface/80">
                WhatsApp: +56 9 8550 1250
                <br />
                Teléfono: +56 2 2209 8318
                <br />
                contacto@svgclinicadental.cl
              </p>
              <div className="flex flex-col gap-1.5 pt-2">
                <a
                  href="https://www.instagram.com/svgclinicadental/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-surface/90 hover:text-primary transition-colors text-sm font-medium"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://web.facebook.com/SVGClinicaDental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-surface/90 hover:text-primary transition-colors text-sm font-medium"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Final Line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface/70">
            <span>© 2026 SVG Clínica Dental. Santiago de Chile.</span>
            <span>Autorizada por la SEREMI de Salud Metropolitana</span>
          </div>
        </div>
      </footer>

      {/* MOBILE FIXED BOTTOM BAR (< 768px) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-surface border-t border-ink/10 px-4 py-2.5 pb-[max(10px,env(safe-area-inset-bottom))] shadow-lg">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={WHATSAPP_MAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 bg-primary text-ink font-semibold rounded-full inline-flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Pedir hora</span>
          </a>
          <a
            href={WHATSAPP_URGENCIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 bg-secondary text-surface font-semibold rounded-full inline-flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Urgencia</span>
          </a>
        </div>
      </div>

      {/* DESKTOP FLOATING WHATSAPP BUTTON (≥ 768px) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-ink text-surface text-xs font-semibold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
          Pedir hora por WhatsApp
        </div>
        <a
          href={WHATSAPP_MAIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir hora por WhatsApp"
          className="w-[60px] h-[60px] bg-primary text-ink rounded-full shadow-lg flex items-center justify-center hover:bg-secondary hover:text-surface transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-secondary"
        >
          <MessageCircle className="w-[26px] h-[26px]" />
        </a>
      </div>
    </div>
  );
}
