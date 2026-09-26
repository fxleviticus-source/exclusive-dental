/* =========================================================================
   EXCLUSIVE DENTAL CARE — CENTRAL CONFIGURATION
   -------------------------------------------------------------------------
   Every real-world detail the client has not yet confirmed lives here as a
   clearly labeled PLACEHOLDER. When Exclusive Dental Care supplies the real
   phone number, WhatsApp number, email, address, hours or social links,
   update ONLY this file — every page, button and link reads from it.
   ========================================================================= */

const CLINIC = {
  name: "Exclusive Dental Care",
  tagline: "Expertise You Can Trust. The Experience You Deserve.",
  city: "Lusaka, Zambia",

  // ---- CONTACT PLACEHOLDERS — replace with confirmed client details ----
  phoneDisplay: "PHONE_PLACEHOLDER",     // e.g. "+260 97X XXX XXX"
  phoneDial: "PHONE_PLACEHOLDER",        // digits only, e.g. "260971234567"
  whatsappDisplay: "WHATSAPP_PLACEHOLDER",
  whatsappNumber: "WHATSAPP_NUMBER_PLACEHOLDER", // digits only, no + or spaces
  email: "EMAIL_PLACEHOLDER",
  address: {
    line1: "ADDRESS_PLACEHOLDER",
    line2: "Lusaka, Zambia",
  },
  mapEmbedUrl: "https://www.google.com/maps?q=Lusaka,Zambia&output=embed", // replace with exact pin once address is confirmed

  hours: [
    { days: "Monday – Friday", time: "HOURS_PLACEHOLDER" },
    { days: "Saturday",        time: "HOURS_PLACEHOLDER" },
    { days: "Sunday",          time: "Closed (to be confirmed)" },
  ],

  // Only populated / rendered once the clinic confirms real accounts
  social: {
    facebook: "",
    instagram: "",
  },

  whatsappDefaultMessage: "Hello Exclusive Dental Care, I'd like to book an appointment.",
};

// Build a WhatsApp link from the single WHATSAPP_NUMBER value above.
function waLink(message) {
  const msg = encodeURIComponent(message || CLINIC.whatsappDefaultMessage);
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${msg}`;
}
function telLink() {
  return `tel:${CLINIC.phoneDial}`;
}
function mailLink() {
  return `mailto:${CLINIC.email}`;
}

/* =========================================================================
   IMAGE LIBRARY
   Every placeholder image is a real, licensed, dental-relevant photograph
   (Unsplash). Swap any src for the clinic's own photography at any time —
   paths are centralized here, referenced by key across all pages.
   ========================================================================= */
const IMG = {
  hero1: "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?auto=format&fit=crop&w=1800&q=80", // dentist talking with patient, modern office
  hero2: "https://images.unsplash.com/photo-1698749778813-ad5f2814e50f?auto=format&fit=crop&w=1800&q=80", // dental mirror, soft-focus chair
  consult: "https://images.unsplash.com/photo-1758205308181-d52b41e00cef?auto=format&fit=crop&w=1200&q=80", // dentist examining patient's teeth with assistant
  toolsClean: "https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?auto=format&fit=crop&w=1200&q=80", // mirror + explorer, cleaning
  examTools: "https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?auto=format&fit=crop&w=1200&q=80", // dentist examining patient's teeth with tools
  implantModel: "https://images.unsplash.com/photo-1777445826358-f95518f49b44?auto=format&fit=crop&w=1200&q=80", // implant demo on model
  instrumentsWall: "https://images.unsplash.com/photo-1642844744022-d76a9af3711a?auto=format&fit=crop&w=1200&q=80", // instruments on wall
  instrumentsTray: "https://images.unsplash.com/photo-1643660527090-bea721ad71f8?auto=format&fit=crop&w=1200&q=80", // instrument pair, crown/bridge work
  instrumentsTable: "https://images.unsplash.com/photo-1643660527095-bfb19b49994a?auto=format&fit=crop&w=1200&q=80", // tools laid out, preventive care
  scalingTools: "https://images.unsplash.com/photo-1771442873038-dda05b6ca447?auto=format&fit=crop&w=1200&q=80", // gloved hand holding tools, scaling/polishing
  whitening: "https://images.unsplash.com/photo-1586749902049-5c855d0c9d4c?auto=format&fit=crop&w=1200&q=80", // bright, healthy smile
  rootCanal: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1200&q=80", // tooth/root model
  dentures: "https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?auto=format&fit=crop&w=1200&q=80", // dentures on a rack
  orthodontics: "https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?auto=format&fit=crop&w=1200&q=80", // model teeth with braces
  veneers: "https://images.unsplash.com/photo-1694359599949-0ab8bff6e026?auto=format&fit=crop&w=1200&q=80", // close-up veneer work
  childrens: "https://images.unsplash.com/photo-1758205307836-0829c799890b?auto=format&fit=crop&w=1200&q=80", // dentist examining a young child's teeth
  emergency: "https://images.unsplash.com/photo-1698749778813-ad5f2814e50f?auto=format&fit=crop&w=1200&q=80", // dental mirror, chair in soft focus
  teamPlaceholder: "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?auto=format&fit=crop&w=900&q=80",
};

const SERVICES = [
  {
    id: "consultations",
    name: "Dental Consultations",
    short: "A thorough first conversation about your smile, your concerns, and your options.",
    image: IMG.consult,
    suitable: "Anyone visiting Exclusive Dental Care for the first time, or looking for a second opinion.",
    expect: "A relaxed conversation, a visual assessment, and a clear, honest run-through of any next steps — with no pressure.",
  },
  {
    id: "examinations",
    name: "Dental Examinations",
    short: "A complete check-up to catch small issues before they become bigger ones.",
    image: IMG.examTools,
    suitable: "Patients due for a routine check, or anyone who hasn't seen a dentist in a while.",
    expect: "A careful examination of teeth, gums and bite, with clear feedback on what's healthy and what to keep an eye on.",
  },
  {
    id: "cleaning",
    name: "Teeth Cleaning",
    short: "Professional cleaning that leaves your mouth feeling genuinely fresh.",
    image: IMG.toolsClean,
    suitable: "Patients maintaining day-to-day oral health as part of routine preventive care.",
    expect: "A comfortable cleaning session focused on plaque and surface staining, finished with practical home-care guidance.",
  },
  {
    id: "scaling-polishing",
    name: "Scaling & Polishing",
    short: "Deeper cleaning below the gumline, followed by a smooth, polished finish.",
    image: IMG.scalingTools,
    suitable: "Patients with visible tartar build-up or early signs of gum sensitivity.",
    expect: "Gentle removal of built-up tartar, followed by polishing to leave the tooth surface smooth and clean.",
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    short: "A brighter smile, handled carefully and professionally.",
    image: IMG.whitening,
    suitable: "Patients looking to lighten staining from coffee, tea, or everyday wear.",
    expect: "A conversation about realistic results for your teeth, followed by a professionally managed whitening process.",
  },
  {
    id: "fillings",
    name: "Fillings",
    short: "Restoring a tooth affected by decay, matched closely to its natural shade.",
    image: IMG.instrumentsWall,
    suitable: "Patients with a cavity identified during examination or causing discomfort.",
    expect: "A comfortable restorative visit, with the affected area cleaned out and rebuilt using a tooth-colored material.",
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    short: "Relieving pain and saving a tooth affected deep at its root.",
    image: IMG.rootCanal,
    suitable: "Patients with persistent tooth pain, sensitivity, or a suspected infected nerve.",
    expect: "A methodical procedure to clean and seal the inside of the tooth, aimed at removing pain and preserving the tooth itself.",
  },
  {
    id: "crowns-bridges",
    name: "Crowns & Bridges",
    short: "Rebuilding damaged teeth or replacing missing ones, seamlessly.",
    image: IMG.instrumentsTray,
    suitable: "Patients with heavily damaged teeth, or gaps left by missing teeth affecting bite and appearance.",
    expect: "A fitting process focused on comfort and a natural-looking, durable result that blends with your other teeth.",
  },
  {
    id: "dentures",
    name: "Dentures",
    short: "Comfortable, custom-fitted replacements for missing teeth.",
    image: IMG.dentures,
    suitable: "Patients missing several or all of their natural teeth.",
    expect: "Careful measuring and fitting sessions to get comfort, bite and appearance right before your denture is finalized.",
  },
  {
    id: "implants",
    name: "Dental Implants",
    short: "A long-term, natural-feeling replacement for a missing tooth.",
    image: IMG.implantModel,
    suitable: "Patients seeking a permanent solution to a missing tooth or teeth.",
    expect: "An initial assessment of suitability, followed by a clearly explained, staged treatment plan.",
  },
  {
    id: "orthodontics",
    name: "Braces / Orthodontic Treatment",
    short: "Straightening teeth and correcting bite over time.",
    image: IMG.orthodontics,
    suitable: "Patients — including teens and adults — dealing with crowding, gaps, or bite alignment concerns.",
    expect: "An assessment of your bite and alignment, followed by a treatment plan with realistic timelines.",
  },
  {
    id: "veneers",
    name: "Veneers",
    short: "Thin, custom shells that refine the shape and shade of your smile.",
    image: IMG.veneers,
    suitable: "Patients looking to address chips, gaps, or discoloration cosmetically.",
    expect: "A consultation on shape and shade, followed by a precise, minimally invasive fitting process.",
  },
  {
    id: "preventive",
    name: "Preventive Dental Care",
    short: "Simple, consistent habits and check-ups that protect your smile long-term.",
    image: IMG.instrumentsTable,
    suitable: "Every patient — preventive care is the foundation of long-term oral health.",
    expect: "Practical guidance tailored to your routine, alongside regular monitoring for early signs of trouble.",
  },
  {
    id: "childrens",
    name: "Children's Dental Care",
    short: "Gentle, patient dental visits designed around younger patients.",
    image: IMG.childrens,
    suitable: "Children needing their first check-ups or ongoing preventive care.",
    expect: "A calm, unhurried pace, clear explanations in simple terms, and a focus on building comfort with dental visits.",
  },
  {
    id: "emergency",
    name: "Emergency Dental Care",
    short: "Prompt attention when dental pain or injury can't wait.",
    image: IMG.emergency,
    suitable: "Patients in pain, or dealing with a knocked-out, chipped, or injured tooth.",
    expect: "Fast triage focused on relieving pain first, with next-step treatment explained clearly once stabilized.",
  },
];
