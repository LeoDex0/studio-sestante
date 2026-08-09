export const SITE = {
  name: "Studio Sestante",
  fullName: "Studio Dentistico Sestante",
  tagline: "Studio Dentistico a Rimini",
  description:
    "Studio Dentistico Sestante: igiene, estetica dentale, implantologia, ortodonzia e odontoiatria pediatrica in un unico studio a Rimini, pensato per mettere a proprio agio anche i pazienti più ansiosi.",
  address: "Rimini (RN)",
  addressShort: "Rimini (RN)",
  phoneDisplay: "0541 682910",
  phoneHref: "tel:+390541682910",
  email: "info@studiosestante-rimini.it",
  rating: 4.9,
  reviews: 132,
  hours: [
    { day: "Lunedì – Venerdì", time: "9:00 – 19:00" },
    { day: "Sabato", time: "su appuntamento" },
    { day: "Domenica", time: "chiuso" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=Rimini+RN,+Italy&output=embed",
  mapLinkSrc:
    "https://www.google.com/maps/search/?api=1&query=Rimini+RN,+Italy",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/servizi" },
  { label: "Lo Studio", href: "/studio" },
  { label: "Domande frequenti", href: "/domande-frequenti" },
] as const;

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  description: string;
  points: string[];
}

export const SERVICES: Service[] = [
  {
    id: "igiene",
    title: "Igiene dentale e prevenzione",
    shortTitle: "Igiene",
    icon: "Sparkles",
    summary:
      "Sedute di igiene professionale e controlli periodici per mantenere denti e gengive in salute nel tempo.",
    description:
      "La prevenzione è la base di ogni sorriso sano. Le sedute di igiene professionale rimuovono placca e tartaro nei punti che lo spazzolino da solo non raggiunge, riducendo il rischio di carie e infiammazioni gengivali. Durante i controlli periodici monitoriamo lo stato di denti, gengive e vecchie otturazioni, così da intervenire presto se qualcosa richiede attenzione.",
    points: [
      "Igiene professionale e levigatura radicolare",
      "Controllo periodico di denti e gengive",
      "Screening di carie e parodontite",
      "Consigli personalizzati di igiene domiciliare",
    ],
  },
  {
    id: "estetica",
    title: "Estetica dentale e sbiancamento",
    shortTitle: "Sbiancamento",
    icon: "Smile",
    summary:
      "Sbiancamento professionale e soluzioni estetiche pensate sul colore e la forma naturale del tuo smalto.",
    description:
      "Un sorriso più luminoso, senza forzature: valutiamo il colore naturale dei tuoi denti e proponiamo il trattamento sbiancante più indicato, in studio o guidato a casa con mascherine su misura. Per chi desidera correggere piccole imperfezioni di forma o colore lavoriamo anche con faccette e restauri estetici in composito.",
    points: [
      "Sbiancamento professionale in studio",
      "Sbiancamento guidato con mascherine su misura",
      "Faccette e restauri estetici in composito",
      "Restyling del sorriso su misura",
    ],
  },
  {
    id: "implantologia",
    title: "Implantologia dentale",
    shortTitle: "Implantologia",
    icon: "Anchor",
    summary:
      "Impianti dentali per sostituire uno o più denti mancanti, restituendo una masticazione stabile e naturale.",
    description:
      "Quando un dente manca o è troppo compromesso per essere salvato, l'impianto dentale è oggi la soluzione più stabile e duratura: una radice artificiale in titanio che si integra con l'osso e sostiene una corona indistinguibile dai denti naturali. Ogni piano implantare viene studiato caso per caso, con una valutazione diagnostica accurata prima di procedere.",
    points: [
      "Sostituzione di uno o più denti mancanti",
      "Valutazione diagnostica personalizzata",
      "Impianti singoli o riabilitazioni più estese",
      "Percorso post-intervento seguito passo passo",
    ],
  },
  {
    id: "ortodonzia",
    title: "Ortodonzia",
    shortTitle: "Ortodonzia",
    icon: "Move",
    summary:
      "Apparecchi fissi, mobili e allineatori trasparenti per correggere l'allineamento dentale a ogni età.",
    description:
      "Denti storti o affollati non sono solo una questione estetica: un'occlusione scorretta può rendere più difficile l'igiene quotidiana e affaticare l'articolazione della mandibola. Valutiamo la soluzione ortodontica più adatta — apparecchio fisso tradizionale, mobile o allineatori trasparenti — sia per ragazzi in crescita sia per adulti che scelgono di correggere l'allineamento più avanti negli anni.",
    points: [
      "Apparecchi fissi e mobili",
      "Allineatori trasparenti",
      "Percorsi per adolescenti e per adulti",
      "Monitoraggio periodico dell'avanzamento",
    ],
  },
  {
    id: "pedodonzia",
    title: "Odontoiatria pediatrica",
    shortTitle: "Pedodonzia",
    icon: "Baby",
    summary:
      "Cura dei denti da latte e prevenzione per i più piccoli, con un approccio delicato pensato per loro.",
    description:
      "Il primo appuntamento dal dentista lascia un segno: per questo dedichiamo ai pazienti più piccoli un approccio graduale, fatto di spiegazioni semplici e tempi rispettati, per costruire fin da subito un rapporto sereno con le cure odontoiatriche. Seguiamo la crescita dei denti da latte e permanenti, con sedute di prevenzione pensate su misura per l'età.",
    points: [
      "Prime visite pensate per mettere a proprio agio",
      "Prevenzione e sigillature dei solchi",
      "Monitoraggio della crescita dentale",
      "Piccoli interventi con approccio delicato",
    ],
  },
];

export interface SmileZone {
  id: string;
  serviceId: string;
  label: string;
  tagline: string;
  description: string;
}

export const SMILE_ZONES: SmileZone[] = [
  {
    id: "molare",
    serviceId: "implantologia",
    label: "Molare",
    tagline: "Implantologia",
    description:
      "Quando un dente manca o è troppo compromesso, l'impianto dentale restituisce una masticazione stabile, dente per dente.",
  },
  {
    id: "incisivo",
    serviceId: "estetica",
    label: "Incisivo",
    tagline: "Estetica e sbiancamento",
    description:
      "I denti frontali sono i più visibili quando sorridi: sbiancamento professionale e trattamenti estetici pensati sul tuo smalto.",
  },
  {
    id: "storto",
    serviceId: "ortodonzia",
    label: "Dente disallineato",
    tagline: "Ortodonzia",
    description:
      "Allineatori trasparenti e apparecchi su misura per correggere l'allineamento dentale, a qualsiasi età.",
  },
  {
    id: "gengiva",
    serviceId: "igiene",
    label: "Gengiva",
    tagline: "Igiene dentale",
    description:
      "Igiene professionale e controlli periodici per prevenire carie e infiammazioni gengivali: la base di ogni sorriso sano.",
  },
];

export interface VisitStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const VISIT_STEPS: VisitStep[] = [
  {
    number: "01",
    title: "Accoglienza e anamnesi",
    description:
      "Ti accogliamo in studio, raccogliamo la tua storia clinica e i tuoi eventuali dubbi: nessuna fretta, solo le domande giuste.",
    icon: "ClipboardList",
  },
  {
    number: "02",
    title: "Ascolto delle tue esigenze",
    description:
      "Ci racconti cosa ti ha portato da noi — un fastidio, un controllo di routine, un'esigenza estetica — così impostiamo la visita sulle tue priorità.",
    icon: "MessageCircle",
  },
  {
    number: "03",
    title: "Visita clinica completa",
    description:
      "Esaminiamo denti, gengive e occlusione con calma, spiegando ogni passaggio mentre lo facciamo.",
    icon: "Stethoscope",
  },
  {
    number: "04",
    title: "Eventuali approfondimenti",
    description:
      "Se serve, eseguiamo una radiografia digitale a basso dosaggio per avere un quadro completo prima di proporre qualsiasi soluzione.",
    icon: "ScanLine",
  },
  {
    number: "05",
    title: "Piano di cura e preventivo",
    description:
      "Ti presentiamo un piano di cura chiaro, con tempi e opzioni spiegati in parole semplici, e un preventivo scritto senza impegno.",
    icon: "FileCheck2",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "La prima visita è gratuita?",
    answer:
      "La prima visita di valutazione è pensata per conoscerti e capire le tue esigenze con un piccolo contributo simbolico in alcuni casi: al momento della prenotazione ti confermiamo sempre le condizioni in modo chiaro, prima di qualsiasi impegno da parte tua.",
  },
  {
    question: "Accettate assicurazioni e fondi sanitari?",
    answer:
      "Collaboriamo con diverse compagnie assicurative e fondi di assistenza sanitaria integrativa. Scrivici o chiamaci con il nome della tua polizza: verifichiamo insieme copertura e modalità di rimborso prima della visita.",
  },
  {
    question: "Quanto costa una visita o un trattamento?",
    answer:
      "Non pubblichiamo un listino prezzi fisso perché ogni piano di cura è diverso da paziente a paziente. Dopo la visita ricevi sempre un preventivo scritto, gratuito e senza impegno, con tempi e costi spiegati in modo chiaro prima di procedere.",
  },
  {
    question: "Quanto dura un impianto dentale, dalla valutazione alla guarigione?",
    answer:
      "Ogni caso è diverso, ma in linea generale: dopo l'inserimento dell'impianto l'osso impiega mediamente dai 3 ai 6 mesi per integrarsi completamente, prima di poter fissare la corona definitiva. Durante la valutazione iniziale ti indichiamo una tempistica realistica per il tuo caso specifico.",
  },
  {
    question: "Curare i denti fa male? Usate la sedazione?",
    answer:
      "Utilizziamo anestesia locale per la maggior parte dei trattamenti, dosata sulla sensibilità di ciascun paziente. Se soffri di ansia legata alle cure dentali, parlacene prima della visita: possiamo adattare tempi e approccio per rendere l'esperienza più serena possibile.",
  },
  {
    question: "Ogni quanto conviene fare una seduta di igiene professionale?",
    answer:
      "In generale consigliamo una seduta di igiene ogni 6 mesi, ma la frequenza ideale dipende dalla tua situazione di denti e gengive: durante il controllo ti indichiamo la cadenza più adatta al tuo caso.",
  },
  {
    question: "Cosa devo portare alla prima visita?",
    answer:
      "Un documento d'identità e, se li hai, eventuali radiografie o referti di visite odontoiatriche precedenti: ci aiutano a farci un quadro più completo fin dal primo appuntamento.",
  },
  {
    question: "Gestite le urgenze, come un forte mal di denti improvviso?",
    answer:
      "Sì, riserviamo spazio in agenda per le urgenze odontoiatriche. Chiamaci allo 0541 682910 appena possibile: valutiamo insieme la situazione e ti indichiamo la soluzione più rapida disponibile.",
  },
  {
    question: "Fate apparecchi invisibili o allineatori trasparenti?",
    answer:
      "Sì, tra le soluzioni ortodontiche che proponiamo ci sono anche gli allineatori trasparenti, adatti sia ad adulti che a ragazzi in casi selezionati. Durante la visita valutiamo se il tuo caso è indicato per questo tipo di trattamento.",
  },
];

export interface ClinicImage {
  src: string;
  alt: string;
}

export const CLINIC_IMAGES: ClinicImage[] = [
  {
    src: "https://images.unsplash.com/photo-1704455306251-b4634215d98f?auto=format&fit=crop&w=1600&q=80",
    alt: "Sala di cura dello studio con poltrona odontoiatrica e postazione di lavoro",
  },
  {
    src: "https://images.unsplash.com/photo-1722586663955-2f96a4c1f255?auto=format&fit=crop&w=1600&q=80",
    alt: "Poltrona odontoiatrica e lampada scialitica in una sala operativa",
  },
  {
    src: "https://images.unsplash.com/photo-1643660527098-559f89e45a92?auto=format&fit=crop&w=1600&q=80",
    alt: "Sala di cura con poltrona e monitor per la diagnostica digitale",
  },
  {
    src: "https://images.unsplash.com/photo-1755995083683-50d08cd83d09?auto=format&fit=crop&w=1600&q=80",
    alt: "Corridoio luminoso della struttura",
  },
];

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export const VALUES: Value[] = [
  {
    icon: "MessageCircle",
    title: "Comunicazione chiara",
    description:
      "Ti spieghiamo ogni diagnosi e ogni opzione di cura in parole semplici, senza tecnicismi non necessari: decidi solo dopo aver capito davvero.",
  },
  {
    icon: "ShieldCheck",
    title: "Protocolli rigorosi",
    description:
      "Sterilizzazione degli strumenti e protocolli igienici curati ad ogni singola visita, per la sicurezza di ogni paziente.",
  },
  {
    icon: "ScanLine",
    title: "Diagnostica digitale",
    description:
      "Radiografie digitali a basso dosaggio e strumentazione aggiornata per una valutazione accurata fin dalla prima visita.",
  },
  {
    icon: "FileCheck2",
    title: "Preventivi trasparenti",
    description:
      "Nessun costo a sorpresa: ogni piano di cura arriva sempre con un preventivo scritto, chiaro e senza impegno.",
  },
];

export const TRUST_POINTS = [
  {
    icon: "Star",
    title: "4.9 su Google",
    description: "132 recensioni verificate dei nostri pazienti",
  },
  {
    icon: "MapPin",
    title: "Nel cuore di Rimini",
    description: "Zona centrale, facile da raggiungere e parcheggiare",
  },
  {
    icon: "ShieldCheck",
    title: "Protocolli rigorosi",
    description: "Sterilizzazione e protocolli igienici curati ad ogni visita",
  },
] as const;
