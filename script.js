const translations = {
  es: {
    brandTagline: "Una familia en Cristo",
    navAbout: "Nosotros",
    navServices: "Servicios",
    navMinistries: "Ministerios",
    navContact: "Contacto",
    heroEyebrow: "Bienvenidos a casa",
    heroTitle: "Una iglesia hispana para adorar, crecer y servir juntos.",
    heroText:
      "En Iglesia Bautista Del Sur, compartimos el amor de Cristo con familias de nuestra comunidad a través de la Palabra, la oración y el servicio.",
    heroPrimary: "Ver horarios",
    heroSecondary: "Planear visita",
    quickServiceLabel: "Servicio dominical",
    quickServiceValue: "Domingos 11:00 AM",
    quickStudyLabel: "Estudio biblico",
    quickStudyValue: "Miércoles 7:00 PM",
    quickLocationLabel: "Ubicación",
    quickLocationValue: "Agrega la dirección aquí",
    aboutKicker: "Nuestra iglesia",
    aboutTitle: "Fe bíblica, comunidad cercana y esperanza para cada familia.",
    aboutText:
      "Somos una congregación hispana que desea ayudar a cada persona a conocer a Jesús, encontrar una familia espiritual y usar sus dones para bendecir a otros.",
    aboutTextTwo:
      "Ya sea que lleves años en la fe o estés visitando una iglesia por primera vez, queremos recibirte con respeto, claridad y amor.",
    servicesKicker: "Reuniones",
    servicesTitle: "Horarios de servicios",
    worshipDay: "Domingo",
    worshipTitle: "Culto de adoración",
    worshipTime: "11:00 AM",
    studyDay: "Miércoles",
    studyTitle: "Estudio bíblico y oración",
    studyTime: "7:00 PM",
    familyDay: "Mensual",
    familyTitle: "Actividades familiares",
    familyTime: "Fechas por anunciar",
    ministriesKicker: "Vida en comunidad",
    ministriesTitle: "Ministerios para servir y crecer",
    ministryFamiliesTitle: "Familias",
    ministryFamiliesText: "Apoyo espiritual y amistad para padres, matrimonios y hogares.",
    ministryYouthTitle: "Jóvenes",
    ministryYouthText: "Espacios para crecer en la fe, hacer preguntas y formar amistades sanas.",
    ministryServiceTitle: "Servicio",
    ministryServiceText: "Oportunidades para bendecir a la iglesia y a la comunidad local.",
    contactKicker: "Visítanos",
    contactTitle: "Nos encantaría conocerte.",
    contactText:
      "Si tienes preguntas sobre horarios, ubicación o cómo planear tu primera visita, mándanos un mensaje y con gusto te ayudamos.",
    formName: "Nombre",
    formEmail: "Correo electrónico",
    formMessage: "Mensaje",
    formButton: "Enviar mensaje",
    footerText: "Compartiendo a Cristo con nuestra comunidad.",
    pageDescription:
      "Iglesia Bautista Del Sur: una iglesia hispana centrada en Cristo, la familia y la comunidad.",
    heroAlt: "Congregación reunida afuera de la iglesia",
  },
  en: {
    brandTagline: "A family in Christ",
    navAbout: "About",
    navServices: "Services",
    navMinistries: "Ministries",
    navContact: "Contact",
    heroEyebrow: "Welcome home",
    heroTitle: "A Hispanic church where families worship, grow, and serve together.",
    heroText:
      "At Iglesia Bautista Del Sur, we share the love of Christ with families in our community through Scripture, prayer, and service.",
    heroPrimary: "View times",
    heroSecondary: "Plan a visit",
    quickServiceLabel: "Sunday service",
    quickServiceValue: "Sundays 11:00 AM",
    quickStudyLabel: "Bible study",
    quickStudyValue: "Wednesdays 7:00 PM",
    quickLocationLabel: "Location",
    quickLocationValue: "Add the address here",
    aboutKicker: "Our church",
    aboutTitle: "Biblical faith, close community, and hope for every family.",
    aboutText:
      "We are a Hispanic congregation that wants to help every person know Jesus, find a spiritual family, and use their gifts to bless others.",
    aboutTextTwo:
      "Whether you have followed Jesus for years or are visiting church for the first time, we want to welcome you with respect, clarity, and love.",
    servicesKicker: "Gatherings",
    servicesTitle: "Service times",
    worshipDay: "Sunday",
    worshipTitle: "Worship service",
    worshipTime: "11:00 AM",
    studyDay: "Wednesday",
    studyTitle: "Bible study and prayer",
    studyTime: "7:00 PM",
    familyDay: "Monthly",
    familyTitle: "Family activities",
    familyTime: "Dates to be announced",
    ministriesKicker: "Community life",
    ministriesTitle: "Ministries to serve and grow",
    ministryFamiliesTitle: "Families",
    ministryFamiliesText: "Spiritual support and friendship for parents, marriages, and homes.",
    ministryYouthTitle: "Youth",
    ministryYouthText: "A place to grow in faith, ask questions, and build healthy friendships.",
    ministryServiceTitle: "Service",
    ministryServiceText: "Opportunities to bless the church and the local community.",
    contactKicker: "Visit us",
    contactTitle: "We would love to meet you.",
    contactText:
      "If you have questions about service times, location, or planning your first visit, send us a message and we will be glad to help.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formButton: "Send message",
    footerText: "Sharing Christ with our community.",
    pageDescription:
      "Iglesia Bautista Del Sur: a Hispanic church centered on Christ, family, and community.",
    heroAlt: "Congregation gathered outside the church",
  },
};

const supportedLanguages = ["es", "en"];
const savedLanguage = localStorage.getItem("siteLanguage");
const browserLanguage = navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : browserLanguage;

function applyLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : "es";
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.pageDescription);
  document.querySelector(".hero-image").setAttribute("alt", dictionary.heroAlt);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const isActive = button.dataset.langButton === currentLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll("[data-lang-button]").forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("siteLanguage", button.dataset.langButton);
    applyLanguage(button.dataset.langButton);
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const message =
    currentLanguage === "es"
      ? "Gracias. En el sitio final, este formulario se conectará al correo de la iglesia."
      : "Thank you. In the final site, this form will connect to the church email.";
  alert(message);
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
