/* ===========================================================
   Credencial Taxi AMB 2026 — app d'estudi / app de estudio
   =========================================================== */
(function(){
'use strict';

/* ---------------- icons ---------------- */
var IC = {
  taxi:'<svg viewBox="0 0 24 24" fill="none" stroke="#1b1405" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M4 17v-4.2a2 2 0 0 1 .3-1L6.6 8A2 2 0 0 1 8.3 7h7.4a2 2 0 0 1 1.7 1l2.3 3.8a2 2 0 0 1 .3 1V17M4 17v2M20 17v2M9 7V5h6v2"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.6v12.8c0 .8.9 1.3 1.6.9l10-6.4a1 1 0 0 0 0-1.7l-10-6.4A1 1 0 0 0 8 5.6z"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>',
  exam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6.5A1.5 1.5 0 0 0 5 3.5v17A1.5 1.5 0 0 0 6.5 22h11a1.5 1.5 0 0 0 1.5-1.5V7z"/><path d="M14 2v5h5M9 13l2 2 4-4"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 20-6 2V6l6-2m0 16 6 2m-6-2V4m6 18 6-2V4l-6 2m0 16V6m0 0L9 4"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16.5A1.5 1.5 0 0 0 4.5 21H21"/><path d="M7 15l3.5-4 3 2.5L20 7"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h7M8 11h7"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  q:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.2"/><path d="M9.2 9.2a2.9 2.9 0 0 1 5.6 1c0 1.9-2.8 2.8-2.8 2.8"/><path d="M12 17h.01"/></svg>',
  flip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"/><path d="M3 21v-5h5"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  fire:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s5 4.5 5 9a5 5 0 0 1-10 0c0-1.3.4-2.4 1-3.3C8.6 9.4 9.8 10 9.8 10S9 7 12 2z"/><path d="M7.5 13A6.5 6.5 0 0 0 12 22a6.5 6.5 0 0 0 4.5-9"/></svg>',
  down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13M7 12l5 5 5-5M4 21h16"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V8M7 12l5-5 5 5M4 3h16"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M8 2.5v4M16 2.5v4M3 9.5h18"/></svg>'
};

/* ---------------- exam structure ---------------- */
/* maxErr = nombre màxim d'errors sobre 10 preguntes al examen oficial */
var BLOCKS = [
  {id:'b1', n:{ca:'Bloc 1 · Normativa', es:'Bloque 1 · Normativa'}, q:30},
  {id:'b2', n:{ca:'Bloc 2 · Coneixements AMB', es:'Bloque 2 · Conocimientos AMB'}, q:30},
  {id:'b3', n:{ca:'Bloc 3 · Comunicació', es:'Bloque 3 · Comunicación'}, q:20}
];

var MODS = [
  {id:'tar', b:'b1', maxErr:2, n:{ca:'Tarifes',   es:'Tarifas'},
   d:{ca:'Tarifes urbanes i interurbanes, suplements, T3 i taxímetre', es:'Tarifas urbanas e interurbanas, suplementos, T3 y taxímetro'}},
  {id:'reg', b:'b1', maxErr:3, n:{ca:'Normativa', es:'Normativa'},
   d:{ca:'Reglament Metropolità del Taxi: llicències, servei, infraccions', es:'Reglamento Metropolitano del Taxi: licencias, servicio, infracciones'}},
  {id:'pro', b:'b1', maxErr:4, n:{ca:'La Professió i el client', es:'La Profesión y el cliente'},
   d:{ca:'Gestió del taxi, vehicles, atenció al client i qualitat', es:'Gestión del taxi, vehículos, atención al cliente y calidad'}},
  {id:'eix', b:'b2', maxErr:2, n:{ca:'Mapa mut i Eixample', es:'Mapa mudo y Eixample'},
   d:{ca:'Vies de l’Eixample, sentits, trams i talls', es:'Vías del Eixample, sentidos, tramos y cortes'}},
  {id:'via', b:'b2', maxErr:3, n:{ca:'Vies principals', es:'Vías principales'},
   d:{ca:'Eixos de Barcelona, rondes i vies de sortida', es:'Ejes de Barcelona, rondas y vías de salida'}},
  {id:'amb', b:'b2', maxErr:3, n:{ca:'Coneixements AMB', es:'Conocimientos AMB'},
   d:{ca:'Punts d’interès per districtes i fora de Barcelona', es:'Puntos de interés por distritos y fuera de Barcelona'}},
  {id:'cat', b:'b3', maxErr:4, n:{ca:'Català', es:'Catalán'},
   d:{ca:'Comprensió i expressió en català aplicada al servei', es:'Comprensión y expresión en catalán aplicada al servicio'}},
  {id:'cst', b:'b3', maxErr:4, n:{ca:'Castellà', es:'Castellano'},
   d:{ca:'Comprensió i expressió en castellà aplicada al servei', es:'Comprensión y expresión en castellano aplicada al servicio'}}
];
var MOD = {}; MODS.forEach(function(m){ MOD[m.id]=m; });

var SUBS = {
  /* tarifes */
  't-urb':{ca:'Tarifes urbanes (T1/T2)',es:'Tarifas urbanas (T1/T2)'},
  't-int':{ca:'Interurbanes (T6/T7)',es:'Interurbanas (T6/T7)'},
  't-sup':{ca:'Suplements',es:'Suplementos'},
  't-t3':{ca:'Preu tancat (T3/T4)',es:'Precio cerrado (T3/T4)'},
  't-con':{ca:'Conceptes i taxímetre',es:'Conceptos y taxímetro'},
  't-cal':{ca:'Calendari i horaris',es:'Calendario y horarios'},
  't-cas':{ca:'Casos pràctics de cobrament',es:'Casos prácticos de cobro'},
  /* reglament */
  'r-gen':{ca:'Normes generals i àmbit',es:'Normas generales y ámbito'},
  'r-dre':{ca:'Drets i deures dels usuaris',es:'Derechos y deberes de los usuarios'},
  'r-lli':{ca:'Llicències',es:'Licencias'},
  'r-tra':{ca:'Transmissió de llicències',es:'Transmisión de licencias'},
  'r-con':{ca:'Conductors i credencial',es:'Conductores y credencial'},
  'r-veh':{ca:'Vehicles i elements obligatoris',es:'Vehículos y elementos obligatorios'},
  'r-rev':{ca:'Revisions metropolitanes',es:'Revisiones metropolitanas'},
  'r-ser':{ca:'Prestació del servei',es:'Prestación del servicio'},
  'r-par':{ca:'Parades i mediació',es:'Paradas y mediación'},
  'r-ins':{ca:'Inspecció',es:'Inspección'},
  'r-inf':{ca:'Infraccions',es:'Infracciones'},
  'r-san':{ca:'Sancions i procediment',es:'Sanciones y procedimiento'},
  'r-des':{ca:'Descans, horaris i normes compl.',es:'Descanso, horarios y normas compl.'},
  /* professió */
  'p-vt':{ca:'Targeta VT i interurbans',es:'Tarjeta VT e interurbanos'},
  'p-veh':{ca:'Alta, baixa i revisions del vehicle',es:'Alta, baja y revisiones del vehículo'},
  'p-exp':{ca:'Modalitats d’explotació',es:'Modalidades de explotación'},
  'p-ss':{ca:'Autònom i Seguretat Social',es:'Autónomo y Seguridad Social'},
  'p-fis':{ca:'Obligacions fiscals',es:'Obligaciones fiscales'},
  'p-cli':{ca:'Atenció al client',es:'Atención al cliente'},
  'p-qua':{ca:'Qualitat i reclamacions',es:'Calidad y reclamaciones'},
  'p-seg':{ca:'Seguretat i 112',es:'Seguridad y 112'},
  'p-dec':{ca:'Decàleg del taxi',es:'Decálogo del taxi'},
  'p-cnv':{ca:'Conveni col·lectiu',es:'Convenio colectivo'},
  /* eixample */
  'e-ver':{ca:'Vies verticals',es:'Vías verticales'},
  'e-hor':{ca:'Vies horitzontals',es:'Vías horizontales'},
  'e-dia':{ca:'Diagonals, places i passatges',es:'Diagonales, plazas y pasajes'},
  'e-sen':{ca:'Sentits i talls de circulació',es:'Sentidos y cortes de circulación'},
  /* vies */
  'v-eix':{ca:'Eixos de Barcelona',es:'Ejes de Barcelona'},
  'v-pri':{ca:'Vies principals',es:'Vías principales'},
  'v-ron':{ca:'Rondes i sortides',es:'Rondas y salidas'},
  'v-car':{ca:'Carreteres i vies de sortida',es:'Carreteras y vías de salida'},
  /* amb */
  'a-1':{ca:'1 · Ciutat Vella',es:'1 · Ciutat Vella'},
  'a-2':{ca:'2 · Eixample',es:'2 · Eixample'},
  'a-3':{ca:'3 · Sants-Montjuïc',es:'3 · Sants-Montjuïc'},
  'a-4':{ca:'4 · Les Corts',es:'4 · Les Corts'},
  'a-5':{ca:'5 · Sarrià-Sant Gervasi',es:'5 · Sarrià-Sant Gervasi'},
  'a-6':{ca:'6 · Gràcia',es:'6 · Gràcia'},
  'a-7':{ca:'7 · Horta-Guinardó',es:'7 · Horta-Guinardó'},
  'a-8':{ca:'8 · Nou Barris',es:'8 · Nou Barris'},
  'a-9':{ca:'9 · Sant Andreu',es:'9 · Sant Andreu'},
  'a-10':{ca:'10 · Sant Martí',es:'10 · Sant Martí'},
  'a-f':{ca:'Fora de Barcelona',es:'Fuera de Barcelona'},
  /* idiomes */
  'c-lex':{ca:'Lèxic del taxi',es:'Léxico del taxi'},
  'c-gra':{ca:'Gramàtica i ortografia',es:'Gramática y ortografía'},
  'c-exp':{ca:'Expressions del servei',es:'Expresiones del servicio'},
  's-lex':{ca:'Léxico del taxi',es:'Léxico del taxi'},
  's-gra':{ca:'Gramática y ortografía',es:'Gramática y ortografía'},
  's-exp':{ca:'Expresiones del servicio',es:'Expresiones del servicio'}
};

/* ---------------- i18n ---------------- */
var T = {
  appName:{ca:'Credencial Taxi AMB',es:'Credencial Taxi AMB'},
  home:{ca:'Inici',es:'Inicio'},
  knowledge:{ca:'Coneixement',es:'Conocimiento'},
  ofBook:{ca:'del temari',es:'del temario'},
  continueStudy:{ca:'Continuar estudiant',es:'Continuar estudiando'},
  startStudy:{ca:'Començar a estudiar',es:'Empezar a estudiar'},
  dueNow:{ca:'%n per repassar ara',es:'%n para repasar ahora'},
  freshLeft:{ca:'%n preguntes que encara no has vist',es:'%n preguntas que aún no has visto'},
  nothingDue:{ca:'Tot al dia. Torna més tard per al proper repàs.',es:'Todo al día. Vuelve más tarde para el próximo repaso.'},
  modes:{ca:'Modes d’estudi',es:'Modos de estudio'},
  levelTest:{ca:'Test de nivell',es:'Test de nivel'},
  levelTestD:{ca:'32 preguntes · on ets ara',es:'32 preguntas · dónde estás'},
  mock:{ca:'Simulacre d’examen',es:'Simulacro de examen'},
  mockD:{ca:'80 preguntes · regles reals',es:'80 preguntas · reglas reales'},
  myErrors:{ca:'Els meus errors',es:'Mis fallos'},
  myErrorsD:{ca:'%n pendents de dominar',es:'%n pendientes de dominar'},
  terr:{ca:'Drill de territori',es:'Drill de territorio'},
  terrD:{ca:'Sentits, trams i ubicacions',es:'Sentidos, tramos y ubicaciones'},
  categories:{ca:'Categories',es:'Categorías'},
  catsD:{ca:'Estudiar un mòdul concret',es:'Estudiar un módulo concreto'},
  stats:{ca:'Estadístiques',es:'Estadísticas'},
  statsD:{ca:'Encerts, errors i progrés',es:'Aciertos, fallos y progreso'},
  allRandom:{ca:'Tot barrejat',es:'Todo mezclado'},
  allRandomD:{ca:'Totes les preguntes a l’atzar',es:'Todas las preguntas al azar'},
  modules:{ca:'Els teus mòduls',es:'Tus módulos'},
  settings:{ca:'Ajustos',es:'Ajustes'},
  apt:{ca:'Apte',es:'Apto'},
  notApt:{ca:'No apte',es:'No apto'},
  untested:{ca:'Sense dades',es:'Sin datos'},
  maxErrors:{ca:'Màx. %n errors de 10',es:'Máx. %n fallos de 10'},
  seen:{ca:'%a/%b vistes',es:'%a/%b vistas'},
  hitRate:{ca:'%n% encerts',es:'%n% aciertos'},
  correct:{ca:'Encerts',es:'Aciertos'},
  wrong:{ca:'Errors',es:'Fallos'},
  dunno:{ca:'No ho sé',es:'No lo sé'},
  dunnoEs:{ca:'No ho sé',es:'No lo sé'},
  next:{ca:'Següent',es:'Siguiente'},
  finish:{ca:'Acabar',es:'Terminar'},
  exit:{ca:'Sortir',es:'Salir'},
  flipHint:{ca:'Tria una resposta o toca la targeta per girar-la',es:'Elige una respuesta o toca la tarjeta para girarla'},
  flipBack:{ca:'Toca per tornar',es:'Toca para volver'},
  correctAns:{ca:'Correcte',es:'Correcto'},
  wrongAns:{ca:'Incorrecte',es:'Incorrecto'},
  theAnswer:{ca:'La resposta',es:'La respuesta'},
  why:{ca:'Per què',es:'Por qué'},
  sessionEnd:{ca:'Sessió acabada',es:'Sesión terminada'},
  sessionOf:{ca:'Sessió de %n',es:'Sesión de %n'},
  again:{ca:'Una altra sessió',es:'Otra sesión'},
  backHome:{ca:'Tornar a l’inici',es:'Volver al inicio'},
  reinforce:{ca:'Temes a reforçar',es:'Temas a reforzar'},
  noReinforce:{ca:'Encara no hi ha prou dades. Fes el test de nivell o una sessió.',es:'Aún no hay datos suficientes. Haz el test de nivel o una sesión.'},
  strong:{ca:'Temes dominats',es:'Temas dominados'},
  levelIntro:{ca:'32 preguntes repartides pels 8 mòduls de l’examen. No es puntua com un examen: serveix per saber per on començar.',es:'32 preguntas repartidas por los 8 módulos del examen. No puntúa como un examen: sirve para saber por dónde empezar.'},
  mockIntro:{ca:'80 preguntes amb l’estructura real: 30 de Normativa, 30 de Coneixements AMB i 20 de Comunicació. Cal aprovar TOTS els mòduls.',es:'80 preguntas con la estructura real: 30 de Normativa, 30 de Conocimientos AMB y 20 de Comunicación. Hay que aprobar TODOS los módulos.'},
  start:{ca:'Començar',es:'Empezar'},
  yourLevel:{ca:'El teu nivell',es:'Tu nivel'},
  studyPlan:{ca:'El teu pla d’estudi',es:'Tu plan de estudio'},
  planIntro:{ca:'Ordenat pel que més et penalitza a l’examen. Toca un mòdul per estudiar-lo.',es:'Ordenado por lo que más te penaliza en el examen. Toca un módulo para estudiarlo.'},
  result:{ca:'Resultat',es:'Resultado'},
  mockPassed:{ca:'APTE · has superat tots els mòduls',es:'APTO · has superado todos los módulos'},
  mockFailed:{ca:'NO APTE · has de recuperar %n mòdul(s)',es:'NO APTO · debes recuperar %n módulo(s)'},
  review:{ca:'Revisar respostes',es:'Revisar respuestas'},
  noErrors:{ca:'Cap error pendent. Molt bé!',es:'Ningún fallo pendiente. ¡Muy bien!'},
  recurrent:{ca:'Errors recurrents',es:'Fallos recurrentes'},
  recurrentD:{ca:'Fallades 2 o més vegades',es:'Falladas 2 o más veces'},
  studyIt:{ca:'Estudiar',es:'Estudiar'},
  questionsN:{ca:'%n preguntes',es:'%n preguntas'},
  streak:{ca:'Ratxa',es:'Racha'},
  days:{ca:'dies',es:'días'},
  answered:{ca:'Respostes',es:'Respondidas'},
  mastered:{ca:'Dominades',es:'Dominadas'},
  overall:{ca:'Global',es:'Global'},
  byModule:{ca:'Per mòdul',es:'Por módulo'},
  topics:{ca:'Per tema',es:'Por tema'},
  srs:{ca:'Repetició espaiada',es:'Repetición espaciada'},
  srsD:{ca:'Prioritza el que falles i espaia el que domines. Desactiva-ho per a atzar pur.',es:'Prioriza lo que fallas y espacia lo que dominas. Desactívalo para azar puro.'},
  sessionLen:{ca:'Preguntes per sessió',es:'Preguntas por sesión'},
  theme:{ca:'Aparença',es:'Apariencia'},
  auto:{ca:'Auto',es:'Auto'},
  light:{ca:'Clar',es:'Claro'},
  dark:{ca:'Fosc',es:'Oscuro'},
  backup:{ca:'Còpia de seguretat',es:'Copia de seguridad'},
  exportD:{ca:'Descarrega el teu progrés (JSON)',es:'Descarga tu progreso (JSON)'},
  importD:{ca:'Restaura des d’un fitxer',es:'Restaura desde un archivo'},
  exportBtn:{ca:'Exportar progrés',es:'Exportar progreso'},
  importBtn:{ca:'Importar progrés',es:'Importar progreso'},
  reset:{ca:'Esborrar tot el progrés',es:'Borrar todo el progreso'},
  resetAsk:{ca:'Segur? S’esborrarà tot el teu progrés en aquest dispositiu.',es:'¿Seguro? Se borrará todo tu progreso en este dispositivo.'},
  imported:{ca:'Progrés importat',es:'Progreso importado'},
  exported:{ca:'Fitxer descarregat',es:'Archivo descargado'},
  errImport:{ca:'Fitxer no vàlid',es:'Archivo no válido'},
  bank:{ca:'Banc de preguntes',es:'Banco de preguntas'},
  about:{ca:'Sobre l’app',es:'Sobre la app'},
  aboutT:{ca:'Preguntes elaborades amb ajuda d’IA a partir del manual del Curs Online Credencial del Taxi 2026 (Escola del Taxi Incrementa), el Reglament Metropolità del Taxi i les tarifes 2026. Funciona sense connexió.',es:'Preguntas elaboradas con ayuda de IA a partir del manual del Curso Online Credencial del Taxi 2026 (Escola del Taxi Incrementa), el Reglamento Metropolitano del Taxi y las tarifas 2026. Funciona sin conexión.'},
  legal:{ca:'Avís legal',es:'Aviso legal'},
  legalT:{ca:'Aquesta és una app personal, sense ànim de lucre, feta per estudiar. No és un producte ni un servei oficial, i no té cap relació amb l’AMB, l’Institut Metropolità del Taxi ni l’Escola del Taxi Incrementa, ni compta amb el seu vistiplau. El contingut s’ha elaborat amb ajuda d’eines d’IA a partir de material d’estudi, amb l’única intenció d’ajudar a estudiar i sense voluntat de perjudicar ningú. Si ets titular dels drets d’algun contingut i vols que es corregeixi o es retiri, obre una incidència al repositori de GitHub del projecte.',es:'Esta es una app personal, sin ánimo de lucro, hecha para estudiar. No es un producto ni un servicio oficial, y no tiene relación alguna con el AMB, el Instituto Metropolitano del Taxi ni la Escola del Taxi Incrementa, ni cuenta con su visto bueno. El contenido se ha elaborado con ayuda de herramientas de IA a partir de material de estudio, con la única intención de ayudar a estudiar y sin voluntad de perjudicar a nadie. Si eres titular de los derechos de algún contenido y quieres que se corrija o se retire, abre una incidencia en el repositorio de GitHub del proyecto.'},
  expires:{ca:'Dada que caduca (tarifes/calendari 2026)',es:'Dato que caduca (tarifas/calendario 2026)'},
  timeLeft:{ca:'Temps',es:'Tiempo'},
  quit:{ca:'Abandonar',es:'Abandonar'},
  cancel:{ca:'Cancel·lar',es:'Cancelar'},
  discarded:{ca:'Sessió descartada',es:'Sesión descartada'},
  localOnly:{ca:'El teu progrés es desa només en aquest dispositiu.',es:'Tu progreso se guarda solo en este dispositivo.'},
  localWarn:{ca:'Si esborres les dades del navegador o desinstal·les l’app, el progrés s’esborrarà. Per passar-lo a un altre mòbil, fes servir Exportar i Importar progrés.',es:'Si borras los datos del navegador o desinstalas la app, el progreso se borrará. Para pasarlo a otro móvil, usa Exportar e Importar progreso.'},
  installTitle:{ca:'Afegeix l’app a la pantalla d’inici',es:'Añade la app a la pantalla de inicio'},
  installIos:{ca:'iPhone: Safari → Compartir → «Afegir a la pantalla d’inici».',es:'iPhone: Safari → Compartir → «Añadir a pantalla de inicio».'},
  installAnd:{ca:'Android: Chrome → menú ⋮ → «Instal·lar app» o «Afegir a la pantalla d’inici».',es:'Android: Chrome → menú ⋮ → «Instalar app» o «Añadir a pantalla de inicio».'},
  installNote:{ca:'Així s’obre com una app i funciona sense connexió.',es:'Así se abre como una app y funciona sin conexión.'},
  close:{ca:'Tancar',es:'Cerrar'},
  paused:{ca:'Sessió en pausa',es:'Sesión en pausa'},
  answeredW:{ca:'respostes',es:'respondidas'},
  resume:{ca:'Reprendre',es:'Reanudar'},
  discard:{ca:'Descartar',es:'Descartar'},
  discardAsk:{ca:'Descartar la sessió en pausa? El progrés de les preguntes ja respostes es conserva.',es:'¿Descartar la sesión en pausa? El progreso de las preguntas ya respondidas se conserva.'},
  quitAsk:{ca:'Vols abandonar? Es perdrà el progrés d’aquesta sessió.',es:'¿Abandonar? Se perderá el progreso de esta sesión.'},
  addHome:{ca:'Consell: afegeix l’app a la pantalla d’inici per obrir-la sense connexió.',es:'Consejo: añade la app a la pantalla de inicio para abrirla sin conexión.'},
  ok:{ca:'D’acord',es:'De acuerdo'},
  cancel:{ca:'Cancel·lar',es:'Cancelar'},
  noQ:{ca:'No hi ha preguntes en aquesta selecció.',es:'No hay preguntas en esta selección.'},
  langOfQ:{ca:'Pregunta d’idioma: es mostra sempre en la seva llengua.',es:'Pregunta de idioma: se muestra siempre en su lengua.'},
  block:{ca:'Bloc',es:'Bloque'},
  score:{ca:'Nota',es:'Nota'},
  errorsOf:{ca:'%a errors de %b',es:'%a fallos de %b'},
  limit:{ca:'límit %n',es:'límite %n'},
  goStudy:{ca:'Estudiar aquest mòdul',es:'Estudiar este módulo'},
  weakest:{ca:'El teu punt feble',es:'Tu punto débil'},
  best:{ca:'El teu punt fort',es:'Tu punto fuerte'},
  new:{ca:'noves',es:'nuevas'},
  due:{ca:'per repassar',es:'para repasar'},
  progressNote:{ca:'El progrés puja quan encertes una pregunta diverses vegades separades en el temps.',es:'El progreso sube cuando aciertas una pregunta varias veces separadas en el tiempo.'},
  beta:{ca:'Prova pilot',es:'Prueba piloto'},
  eixMap:{ca:'Mapa de l’Eixample',es:'Mapa del Eixample'},
  eixMapD:{ca:'Aprèn els carrers amb un mapa interactiu',es:'Aprende las calles con un mapa interactivo'},
  eixExplore:{ca:'Explorar',es:'Explorar'},
  eixLesson:{ca:'Lliçó',es:'Lección'},
  eixTest:{ca:'Test',es:'Test'},
  eixNames:{ca:'Noms',es:'Nombres'},
  eixDiag:{ca:'Diagonals',es:'Diagonales'},
  eixPoi:{ca:'Punts d’interès',es:'Puntos de interés'},
  eixBarris:{ca:'Barris',es:'Barrios'},
  eixFit:{ca:'Tot',es:'Todo'},
  eixBarrisTitle:{ca:'Barris de l’Eixample',es:'Barrios del Eixample'},
  eixFrom:{ca:'De',es:'De'},
  eixTo:{ca:'a',es:'a'},
  eixSide:{ca:'Costat',es:'Lado'},
  eixSideBoth:{ca:'travessa tot l’Eixample',es:'atraviesa todo el Eixample'},
  eixNear:{ca:'Punts d’interès a prop',es:'Puntos de interés cerca'},
  eixLessonIntro:{ca:'Aprèn els carrers verticals en blocs, d’oest (Sants) a est (Poblenou).',es:'Aprende las calles verticales en bloques, de oeste (Sants) a este (Poblenou).'},
  eixBlock:{ca:'Bloc',es:'Bloque'},
  eixOf:{ca:'de',es:'de'},
  eixGotIt:{ca:'Ho tinc — següent bloc',es:'Ya me lo sé — siguiente bloque'},
  eixLessonDone:{ca:'Última tanda revelada. Passa al Test per comprovar què recordes.',es:'Última tanda revelada. Pasa al Test para comprobar qué recuerdas.'},
  eixRestart:{ca:'Reiniciar lliçó',es:'Reiniciar lección'},
  eixQ:{ca:'Quin carrer és el ressaltat?',es:'¿Qué calle es la resaltada?'},
  eixStreak:{ca:'Ratxa',es:'Racha'},
  eixAsked:{ca:'Preguntes',es:'Preguntas'},
  catMonument:{ca:'Monuments',es:'Monumentos'},
  catMuseu:{ca:'Museus',es:'Museos'},
  catHospital:{ca:'Hospitals',es:'Hospitales'},
  catHotel:{ca:'Hotels',es:'Hoteles'},
  catTeatre:{ca:'Teatres',es:'Teatros'},
  catCinema:{ca:'Cinemes',es:'Cines'},
  catCultura:{ca:'Cultura',es:'Cultura'},
  catComerc:{ca:'Comerç',es:'Comercio'},
  catEdifici:{ca:'Edificis',es:'Edificios'},
  catParc:{ca:'Parcs',es:'Parques'},
  catTransport:{ca:'Transport',es:'Transporte'},
  catMercat:{ca:'Mercats',es:'Mercados'},
  /* ---- pla d'estudi ---- */
  planTitle:{ca:'El teu pla d’estudi',es:'Tu plan de estudio'},
  planPromptT:{ca:'Vols un pla per aprovar en 4 setmanes?',es:'¿Quieres un plan para aprobar en 4 semanas?'},
  planPromptD:{ca:'Digues quins dies pots estudiar i t’organitzem el temari.',es:'Dinos qué días puedes estudiar y te organizamos el temario.'},
  planConfigure:{ca:'Configurar pla',es:'Configurar plan'},
  planLater:{ca:'Ara no',es:'Ahora no'},
  planWeek:{ca:'Setmana',es:'Semana'},
  planOf:{ca:'de',es:'de'},
  planReady:{ca:'preparat',es:'preparado'},
  planOnTrack:{ca:'Vas al dia',es:'Vas al día'},
  planAhead:{ca:'Vas per davant, molt bé',es:'Vas por delante, muy bien'},
  planBehindLittle:{ca:'Una mica endarrerit, res greu',es:'Un poco atrasado, nada grave'},
  planBehindLot:{ca:'Molt endarrerit — pots ajustar el pla',es:'Muy atrasado — puedes ajustar el plan'},
  planTodayLong:{ca:'Avui toca sessió llarga',es:'Hoy toca sesión larga'},
  planTodayShort:{ca:'Avui toca sessió curta',es:'Hoy toca sesión corta'},
  planTodayIntense:{ca:'Avui toca sessió intensiva',es:'Hoy toca sesión intensiva'},
  planTodayNone:{ca:'Avui no tenies sessió',es:'Hoy no tenías sesión'},
  planTodayNoneD:{ca:'Un repàs ràpid opcional evita que se t’oblidi',es:'Un repaso rápido opcional evita que se te olvide'},
  planQuickReview:{ca:'Repàs ràpid (%n)',es:'Repaso rápido (%n)'},
  planStartSession:{ca:'Començar sessió d’avui',es:'Empezar sesión de hoy'},
  planEdit:{ca:'Ajustar el pla',es:'Ajustar el plan'},
  planSetupTitle:{ca:'Configura el teu pla',es:'Configura tu plan'},
  planSetupIntro:{ca:'Tria quantes setmanes tens fins a l’examen i quins dies pots estudiar. Toca cada dia per canviar-ne el tipus de sessió.',es:'Elige cuántas semanas tienes hasta el examen y qué días puedes estudiar. Toca cada día para cambiar el tipo de sesión.'},
  planWeeksLabel:{ca:'Setmanes fins a l’examen',es:'Semanas hasta el examen'},
  planDaysLabel:{ca:'Dies disponibles',es:'Días disponibles'},
  planDayNone:{ca:'Sense',es:'Sin'},
  planDayShort:{ca:'Curta',es:'Corta'},
  planDayLong:{ca:'Llarga',es:'Larga'},
  planDayIntense:{ca:'Intensa',es:'Intensa'},
  planLenLabel:{ca:'Mida de les sessions',es:'Tamaño de las sesiones'},
  planShortLen:{ca:'Curta: %n preguntes',es:'Corta: %n preguntas'},
  planLongLen:{ca:'Llarga: %n preguntes',es:'Larga: %n preguntas'},
  planIntenseLen:{ca:'Intensiva: %n preguntes',es:'Intensiva: %n preguntas'},
  planFeasible:{ca:'Amb aquesta disponibilitat cobriràs tot el temari a temps.',es:'Con esta disponibilidad cubrirás todo el temario a tiempo.'},
  planNotFeasible:{ca:'Amb aquesta disponibilitat trigaràs unes %n setmanes a cobrir tot el temari, no %w.',es:'Con esta disponibilidad tardarás unas %n semanas en cubrir todo el temario, no %w.'},
  planNoDays:{ca:'Marca almenys un dia per activar el pla.',es:'Marca al menos un día para activar el plan.'},
  planSave:{ca:'Desar pla',es:'Guardar plan'},
  planPause:{ca:'Pausar pla',es:'Pausar plan'},
  planResume:{ca:'Reprendre pla',es:'Reanudar plan'},
  planDelete:{ca:'Esborrar pla',es:'Borrar plan'},
  planDeleteAsk:{ca:'Segur? S’esborrarà la configuració del teu pla d’estudi.',es:'¿Seguro? Se borrará la configuración de tu plan de estudio.'},
  planCalendar:{ca:'Afegeix recordatoris al calendari',es:'Añade recordatorios al calendario'},
  planCalendarD:{ca:'Descarrega un fitxer que pots afegir al calendari del mòbil perquè t’avisi als dies i l’hora que has triat.',es:'Descarga un archivo que puedes añadir al calendario del móvil para que te avise en los días y la hora que has elegido.'},
  planCalendarTime:{ca:'Hora preferida',es:'Hora preferida'},
  planCalendarDone:{ca:'Fitxer de calendari descarregat',es:'Archivo de calendario descargado'},
  planNoNotifD:{ca:'Aquesta app no envia notificacions push (no té servidor ni compte). Aquest fitxer de calendari és la manera real de rebre un avís a l’hora exacta.',es:'Esta app no envía notificaciones push (no tiene servidor ni cuenta). Este archivo de calendario es la forma real de recibir un aviso a la hora exacta.'},
  planStreakRisk:{ca:'La teva ratxa de %n dies està en joc avui',es:'Tu racha de %n días está en juego hoy'},
  dayMon:{ca:'Dl',es:'Lu'}, dayTue:{ca:'Dt',es:'Ma'}, dayWed:{ca:'Dc',es:'Mi'}, dayThu:{ca:'Dj',es:'Ju'},
  dayFri:{ca:'Dv',es:'Vi'}, daySat:{ca:'Ds',es:'Sa'}, daySun:{ca:'Dg',es:'Do'},
  eixItin:{ca:'Itineraris',es:'Itinerarios'},
  eixItinQExit:{ca:'Vols anar a %n. Quina sortida de la Ronda %r agafaries?',es:'Quieres ir a %n. ¿Qué salida de la Ronda %r cogerías?'},
  eixItinQRoad:{ca:'Circulant per la %c, a quina d’aquestes poblacions arribaries?',es:'Circulando por la %c, ¿a cuál de estas poblaciones llegarías?'},
  eixItinExit:{ca:'Sortida',es:'Salida'},
  eixItinIntro:{ca:'Preguntes sobre les sortides de les Rondes B-10/B-20 i les carreteres de sortida de Barcelona, amb els municipis reals que connecten.',es:'Preguntas sobre las salidas de las Rondas B-10/B-20 y las carreteras de salida de Barcelona, con los municipios reales que conectan.'}
};
function t(k,r){var s=(T[k]&&T[k][S.lang])||k; if(r){for(var p in r){s=s.split(p).join(r[p]);}} return s;}
function L(o){ return o? (o[S.lang]||o.ca||o.es||'') : ''; }

/* ---------------- storage ---------------- */
var KEY='taxiamb.v1';
var S = {lang:'ca', theme:'auto', srs:true, len:15, p:{}, day:null, streak:0, hist:[], lastMock:null, lastLevel:null, plan:null};

var LOADED_SAVED=0;
function applyState(o){ if(!o||typeof o!=='object') return; for(var k in o){ if(o[k]!==undefined) S[k]=o[k]; } }
function load(){
  try{
    var raw=localStorage.getItem(KEY);
    if(!raw){ try{ raw=localStorage.getItem(KEY+'.bak'); }catch(e){} }
    if(raw) applyState(JSON.parse(raw));
  }catch(e){}
  if(!S.p) S.p={};
  if(!S.lang) S.lang='ca';
  LOADED_SAVED=S.saved||0;
}
/* serialize the in-progress session so it survives closing the app */
function snapSession(){
  if(!SESSION) return;              /* S.cur is cleared explicitly (end / discard) */
  if(SESSION.done){ S.cur=null; return; }
  S.cur={ mode:SESSION.mode, title:SESSION.title, ids:SESSION.list.map(function(q){return q.i;}),
    idx:SESSION.idx, ans:SESSION.ans, order:SESSION.order, flipped:SESSION.flipped,
    timed:SESSION.timed, el:Math.floor((Date.now()-SESSION.t0)/1000), paused:!!SESSION.paused };
}
function snapView(){
  var n=VIEW.name;
  S.view = (n==='cats'||n==='stats'||n==='errors'||n==='cat'||n==='eixmap') ? {name:n,arg:VIEW.arg} : null;
}
function save(){
  try{ snapSession(); snapView(); }catch(e){}
  S.saved=Date.now();
  var js; try{ js=JSON.stringify(S); }catch(e){ return; }
  try{ localStorage.setItem(KEY,js); }catch(e){}
  try{ localStorage.setItem(KEY+'.bak',js); }catch(e){}
  idbPut(js);
  updateBadge();
}
/* IndexedDB mirror: second copy in case localStorage is cleared */
var idbP=null, IDB_DB=null, IDB_PEND=null, IDB_HOLD=true, idbT=null;
function idb(){
  if(idbP) return idbP;
  idbP=new Promise(function(res,rej){
    try{
      var r=indexedDB.open('taxiamb',1);
      r.onupgradeneeded=function(){ r.result.createObjectStore('kv'); };
      r.onsuccess=function(){ IDB_DB=r.result; res(r.result); }; r.onerror=function(){ rej(r.error); };
    }catch(e){ rej(e); }
  });
  idbP.catch(function(){});
  return idbP;
}
/* writes are held back until the boot read is done, so an empty state never overwrites the mirror */
function idbPut(js){
  IDB_PEND=js;
  if(IDB_HOLD) return;
  clearTimeout(idbT);
  idbT=setTimeout(idbFlush,300);
}
/* write the pending copy right now (used when the app is hidden or closed) */
function idbFlush(){
  clearTimeout(idbT);
  if(IDB_HOLD || IDB_PEND==null) return;
  var js=IDB_PEND; IDB_PEND=null;
  function put(db){ try{ db.transaction('kv','readwrite').objectStore('kv').put(js,KEY); }catch(e){} }
  if(IDB_DB) put(IDB_DB); else idb().then(put).catch(function(){});
}
function idbGet(){
  return idb().then(function(db){ return new Promise(function(res){
    try{ var r=db.transaction('kv').objectStore('kv').get(KEY); r.onsuccess=function(){ res(r.result||null); }; r.onerror=function(){ res(null); }; }
    catch(e){ res(null); }
  }); }).catch(function(){ return null; });
}

function today(){ var d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
function touchDay(){
  var td=today();
  if(S.day===td) return;
  var y=new Date(Date.now()-864e5); y=y.getFullYear()+'-'+(y.getMonth()+1)+'-'+y.getDate();
  S.streak = (S.day===y) ? (S.streak||0)+1 : 1;
  S.day=td; save();
}

/* ---------------- question bank ---------------- */
var DB=[], BYMOD={}, BYSUB={};
function buildIndex(){
  DB = window.QBANK || [];
  DB.forEach(function(q,i){
    q.i=i;
    (BYMOD[q.m]=BYMOD[q.m]||[]).push(q);
    (BYSUB[q.s]=BYSUB[q.s]||[]).push(q);
  });
}
function P(q){ var p=S.p[q.i]; if(!p){ p={b:0,ok:0,ko:0,due:0,last:0}; S.p[q.i]=p; } return p; }
function seen(q){ var p=S.p[q.i]; return !!(p && (p.ok||p.ko)); }

/* Leitner intervals (ms) */
var BOX=[0, 10*6e4, 864e5, 3*864e5, 7*864e5, 21*864e5];

function grade(q, res){ /* res: 1 ok, 0 ko, -1 dunno */
  var p=P(q), now=Date.now();
  p.last=now;
  if(res===1){ p.ok++; p.b=Math.min(5,(p.b||0)+1); }
  else if(res===0){ p.ko++; p.b=Math.max(1,Math.floor((p.b||0)/2)); }
  else { p.ko++; p.b=1; }
  p.due = now + BOX[p.b];
  save();
}
function mastery(q){ var p=S.p[q.i]; return p? (p.b||0)/5 : 0; }

function shuffle(a){ for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; } return a; }

/* select n questions from a pool, SRS-weighted but interleaved */
function pick(pool, n){
  if(!pool.length) return [];
  if(!S.srs) return shuffle(pool.slice()).slice(0,n);
  var now=Date.now(), due=[], fresh=[], rest=[];
  pool.forEach(function(q){
    var p=S.p[q.i];
    if(!p || (!p.ok && !p.ko)) fresh.push(q);
    else if(p.due<=now) due.push(q);
    else rest.push(q);
  });
  due.sort(function(a,b){ return (S.p[a.i].b-S.p[b.i].b) || (S.p[a.i].due-S.p[b.i].due); });
  shuffleChunks(due);
  shuffle(fresh);
  rest.sort(function(a,b){ return S.p[a.i].due - S.p[b.i].due; });
  /* mix ~60% due, ~40% new, then fill */
  var out=[], di=0, fi=0;
  while(out.length<n && (di<due.length || fi<fresh.length)){
    if(di<due.length && (out.length%5<3 || fi>=fresh.length)) out.push(due[di++]);
    else if(fi<fresh.length) out.push(fresh[fi++]);
  }
  for(var i=0;i<rest.length && out.length<n;i++) out.push(rest[i]);
  return shuffle(out).slice(0,n);
}
function shuffleChunks(a){ /* keep priority but avoid same-topic runs */
  for(var i=0;i<a.length-1;i++){ if(a[i].s===a[i+1].s && i+2<a.length){ var t=a[i+1]; a[i+1]=a[i+2]; a[i+2]=t; } }
}

function dueCount(){
  var now=Date.now(), c=0;
  DB.forEach(function(q){ var p=S.p[q.i]; if(p && (p.ok||p.ko) && p.due<=now) c++; });
  return c;
}
function errorPool(minKo){
  return DB.filter(function(q){ var p=S.p[q.i]; return p && p.ko>=(minKo||1) && (p.b||0)<4; });
}

/* stats */
function modStats(id){
  var pool=BYMOD[id]||[], ok=0,ko=0,sn=0,mast=0;
  pool.forEach(function(q){ var p=S.p[q.i]; if(p&&(p.ok||p.ko)){ sn++; ok+=p.ok; ko+=p.ko; mast+=(p.b||0)/5; } });
  var rate = (ok+ko)? Math.round(ok*100/(ok+ko)) : null;
  var need = Math.round((10-MOD[id].maxErr)*10); /* % mínim per aprovar */
  return {pool:pool.length, seen:sn, ok:ok, ko:ko, rate:rate, need:need,
          prog: pool.length? Math.round(mast*100/pool.length):0,
          apt: rate===null? null : rate>=need};
}
function subStats(id){
  var pool=BYSUB[id]||[], ok=0,ko=0,sn=0;
  pool.forEach(function(q){ var p=S.p[q.i]; if(p&&(p.ok||p.ko)){ sn++; ok+=p.ok; ko+=p.ko; } });
  return {pool:pool.length, seen:sn, ok:ok, ko:ko, rate:(ok+ko)?Math.round(ok*100/(ok+ko)):null};
}
function overallProgress(){
  var m=0; DB.forEach(function(q){ m+=mastery(q); });
  return DB.length? Math.round(m*100/DB.length):0;
}
function totals(){
  var ok=0,ko=0,sn=0,mst=0;
  DB.forEach(function(q){ var p=S.p[q.i]; if(p&&(p.ok||p.ko)){sn++;ok+=p.ok;ko+=p.ko; if((p.b||0)>=4) mst++;} });
  return {ok:ok,ko:ko,seen:sn,mastered:mst};
}
function weakTopics(min){
  min=min||3;
  var out=[];
  Object.keys(BYSUB).forEach(function(s){
    var st=subStats(s);
    if(st.ok+st.ko>=min && st.rate!==null && st.rate<75){
      var m=(BYSUB[s][0]||{}).m;
      out.push({s:s,m:m,rate:st.rate,n:st.ok+st.ko});
    }
  });
  out.sort(function(a,b){ return a.rate-b.rate; });
  return out;
}
function strongTopics(min){
  min=min||3; var out=[];
  Object.keys(BYSUB).forEach(function(s){
    var st=subStats(s);
    if(st.ok+st.ko>=min && st.rate!==null && st.rate>=85) out.push({s:s,m:(BYSUB[s][0]||{}).m,rate:st.rate});
  });
  out.sort(function(a,b){ return b.rate-a.rate; });
  return out;
}

/* ---------------- pla d'estudi ---------------- */
/* plan.days: {0..6: 'none'|'short'|'long'|'intense'} — clau = Date.getDay() (0=diumenge) */
var PLAN_DEFAULT_DAYS = {0:'none',1:'short',2:'none',3:'short',4:'none',5:'short',6:'long'};
var PLAN_LEN_FIELD = {short:'shortLen', long:'longLen', intense:'intenseLen'};
var PLAN_TODAY_KEY = {short:'planTodayShort', long:'planTodayLong', intense:'planTodayIntense'};
var PLAN_LEN_KEY = {short:'planShortLen', long:'planLongLen', intense:'planIntenseLen'};
function planTotalRemaining(){
  var rem=0;
  DB.forEach(function(q){ var p=S.p[q.i]; var b=p?(p.b||0):0; rem+=Math.max(0,4-b); });
  return rem;
}
function planCapacityPerWeek(plan){
  plan=plan||S.plan; if(!plan) return 0;
  var c=0; for(var d=0;d<7;d++){ var t=plan.days[d]; var f=PLAN_LEN_FIELD[t]; if(f) c+=plan[f]||0; }
  return c;
}
function planRealisticWeeks(plan){
  var cap=planCapacityPerWeek(plan); if(!cap) return Infinity;
  return Math.max(1,Math.ceil(planTotalRemaining()/cap));
}
function planDayType(dateObj, plan){ plan=plan||S.plan; if(!plan) return 'none'; return plan.days[dateObj.getDay()]||'none'; }
function planLenFor(type){ var plan=S.plan; if(!plan) return S.len; var f=PLAN_LEN_FIELD[type]; return f?(plan[f]||0):0; }
function planWeeksElapsed(){
  var plan=S.plan; if(!plan||!plan.startDay) return 0;
  return Math.floor((Date.now()-plan.startDay)/(7*864e5));
}
/* preguntes que "tocaven" des de l'inici del pla fins avui, segons els dies triats */
function planExpectedByNow(){
  var plan=S.plan; if(!plan||!plan.startDay) return 0;
  var start=new Date(plan.startDay); start.setHours(0,0,0,0);
  var now=new Date(); now.setHours(0,0,0,0);
  var exp=0, d=new Date(start), guard=0;
  while(d<=now && guard<400){ var t=planDayType(d,plan); var f=PLAN_LEN_FIELD[t]; if(f) exp+=plan[f]||0; d.setDate(d.getDate()+1); guard++; }
  return exp;
}
function planAnswersEver(){
  var n=0; for(var i in S.p){ n+=(S.p[i].ok||0)+(S.p[i].ko||0); }
  return n;
}
function planActualSinceStart(){
  var plan=S.plan; if(!plan) return 0;
  return Math.max(0, planAnswersEver()-(plan.baseline||0));
}
function planStatus(){
  var exp=planExpectedByNow(), act=planActualSinceStart();
  var diff=act-exp, capWeek=Math.max(1,planCapacityPerWeek());
  var k = diff>=capWeek*0.3 ? 'ahead' : diff>=0 ? 'onTrack' : diff> -capWeek*0.5 ? 'behindLittle' : 'behindLot';
  return {k:k, diff:diff};
}
function planQuickReviewPool(){
  /* prioritza el que ja toca repassar; si no n'hi ha, alguna cosa vista fa temps */
  var now=Date.now();
  var due=DB.filter(function(q){ var p=S.p[q.i]; return p&&(p.ok||p.ko)&&p.due<=now; });
  if(due.length) return due;
  return DB.filter(function(q){ return seen(q); });
}
function pad2(n){ return (n<10?'0':'')+n; }
function planICS(){
  var plan=S.plan; if(!plan) return;
  var time=(plan.time||'20:00').split(':');
  var hh=parseInt(time[0],10)||20, mm=parseInt(time[1],10)||0;
  var DOWCODE=['SU','MO','TU','WE','TH','FR','SA'];
  var lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Credencial Taxi AMB//Pla d\'estudi//CA','CALSCALE:GREGORIAN'];
  var today=new Date();
  var until=new Date(plan.startDay||Date.now()); until.setDate(until.getDate()+plan.weeks*7);
  var untilStr=until.getFullYear()+pad2(until.getMonth()+1)+pad2(until.getDate())+'T235900Z';
  var any=false;
  for(var d=0; d<7; d++){
    var type=plan.days[d]; if(!type||type==='none') continue;
    any=true;
    var dt=new Date(today);
    var diff=(d-dt.getDay()+7)%7;
    dt.setDate(dt.getDate()+diff);
    var dtstr=dt.getFullYear()+pad2(dt.getMonth()+1)+pad2(dt.getDate())+'T'+pad2(hh)+pad2(mm)+'00';
    var summary=t(PLAN_TODAY_KEY[type]||'planTodayShort')+' — '+t('appName');
    var descr=t(PLAN_LEN_KEY[type]||'planShortLen',{'%n':plan[PLAN_LEN_FIELD[type]]||0});
    lines.push('BEGIN:VEVENT');
    lines.push('UID:taxiamb-plan-'+d+'-'+Date.now()+'@taxiamb.github.io');
    lines.push('DTSTAMP:'+dtstr);
    lines.push('DTSTART:'+dtstr);
    lines.push('DURATION:PT30M');
    lines.push('RRULE:FREQ=WEEKLY;BYDAY='+DOWCODE[d]+';UNTIL='+untilStr);
    lines.push('SUMMARY:'+summary);
    lines.push('DESCRIPTION:'+descr);
    lines.push('END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  if(!any) return;
  try{
    var blob=new Blob([lines.join('\r\n')],{type:'text/calendar'});
    var a=document.createElement('a');
    a.href=URL.createObjectURL(blob); a.download='pla-estudi-taxi-amb.ics';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){URL.revokeObjectURL(a.href);},1500);
    toast(t('planCalendarDone'));
  }catch(e){}
}
function updateBadge(){
  try{
    if(!('setAppBadge' in navigator)) return;
    var due=dueCount();
    if(due>0) navigator.setAppBadge(due).catch(function(){});
    else if('clearAppBadge' in navigator) navigator.clearAppBadge().catch(function(){});
  }catch(e){}
}

/* ---------------- dom helpers ---------------- */
var app, topEl;
function h(html){ var d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstElementChild; }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function toast(msg){
  var el=document.getElementById('toast'); el.textContent=msg; el.classList.add('on');
  clearTimeout(el._t); el._t=setTimeout(function(){ el.classList.remove('on'); },2100);
}
function applyTheme(){
  var r=document.documentElement;
  if(S.theme==='auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme',S.theme);
}

/* ---------------- router ---------------- */
var VIEW={name:'home'}, SESSION=null;

function go(name,arg){ VIEW={name:name,arg:arg}; window.scrollTo(0,0); render(); if(name!=='session') save(); }

function render(){
  renderTop();
  var v=VIEW.name;
  if(v==='home') viewHome();
  else if(v==='cats') viewCats();
  else if(v==='cat') viewCat(VIEW.arg);
  else if(v==='stats') viewStats();
  else if(v==='session') viewSession();
  else if(v==='result') viewResult();
  else if(v==='levelIntro') viewIntro('level');
  else if(v==='mockIntro') viewIntro('mock');
  else if(v==='errors') viewErrors();
  else if(v==='eixmap') viewEixMap();
  else if(v==='planSetup') viewPlanSetup();
  else viewHome();
}

function renderTop(){
  var back = VIEW.name!=='home';
  topEl.innerHTML =
    '<div class="top-in">'+
      (back
        ? '<button class="backbtn" id="b-back">'+IC.back+'<span>'+esc(SESSION? t('exit'):t('home'))+'</span></button>'
        : '<div class="brand">'+(window.APP_ICON?'<img class="appicon" src="'+window.APP_ICON+'" alt="">':'<div class="dot">'+IC.taxi+'</div>')+'<span>'+esc(t('appName'))+'</span></div>')+
      '<div class="spacer"></div>'+
      '<div class="lang" role="group">'+
        '<button data-l="ca" class="'+(S.lang==='ca'?'on':'')+'">CAT</button>'+
        '<button data-l="es" class="'+(S.lang==='es'?'on':'')+'">ESP</button>'+
      '</div>'+
      '<button class="iconbtn" id="b-set" aria-label="'+esc(t('settings'))+'">'+IC.gear+'</button>'+
    '</div>';
  topEl.querySelectorAll('.lang button').forEach(function(b){
    b.onclick=function(){ S.lang=b.dataset.l; save(); render(); };
  });
  var bb=document.getElementById('b-back');
  if(bb) bb.onclick=function(){
    /* unfinished sessions are paused (kept in S.cur) and can be resumed from home */
    if(SESSION && !SESSION.done){ SESSION.paused=true; save(); clearTimeout(tickT); }
    SESSION=null; go('home');
  };
  document.getElementById('b-set').onclick=openSettings;
}

/* ---------------- HOME ---------------- */
function viewHome(){
  touchDay();
  var prog=overallProgress(), tt=totals(), d=dueCount(), errs=errorPool(1).length;
  var rate=(tt.ok+tt.ko)?Math.round(tt.ok*100/(tt.ok+tt.ko)):0;

  var html='<div class="wrap stack fade">';

  /* hero */
  html+='<div class="card pad" style="display:flex;gap:16px;align-items:center">'+
    '<div class="ring" style="--p:'+prog+';--c:'+(prog>=70?'var(--ok)':prog>=40?'var(--acc)':'var(--warn)')+'">'+
      '<div><b>'+prog+'%</b><em>'+esc(t('knowledge'))+'</em></div></div>'+
    '<div style="flex:1;min-width:0">'+
      '<h1 style="margin-bottom:5px;font-size:1.18rem">'+esc(t('knowledge'))+' '+esc(t('ofBook'))+'</h1>'+
      '<p class="tiny muted" style="margin-bottom:10px;line-height:1.45">'+esc(t('progressNote'))+'</p>'+
      '<div class="row tiny muted" style="gap:14px;flex-wrap:wrap">'+
        '<span style="color:var(--ok);font-weight:700">'+tt.ok+' '+esc(t('correct')).toLowerCase()+'</span>'+
        '<span style="color:var(--ko);font-weight:700">'+tt.ko+' '+esc(t('wrong')).toLowerCase()+'</span>'+
        (S.streak>1?'<span class="row" style="gap:4px;font-weight:700">'+IC.fire.replace('<svg','<svg style="width:13px;height:13px"')+S.streak+' '+esc(t('days'))+'</span>':'')+
      '</div>'+
    '</div></div>';

  html+=installTip();
  html+=planCard();

  /* paused session */
  var cur=S.cur;
  if(cur && cur.ids && cur.ids.length){
    var answered=cur.ans.filter(function(a){return a!==null;}).length;
    html+='<div class="card pad resume">'+
      '<div class="row" style="gap:12px;align-items:center">'+
        '<div style="flex:1;min-width:0"><div class="tiny muted" style="font-weight:700;text-transform:uppercase;letter-spacing:.04em">'+esc(t('paused'))+'</div>'+
        '<div style="font-weight:700;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(cur.title||t('continueStudy'))+'</div>'+
        '<div class="tiny muted">'+answered+' / '+cur.ids.length+' '+esc(t('answeredW'))+(cur.timed?' · '+Math.max(0,Math.ceil((cur.timed-cur.el)/60))+' min':'')+'</div></div>'+
      '</div>'+
      '<div class="bar" style="margin:10px 0 12px"><i style="width:'+Math.round(answered*100/cur.ids.length)+'%"></i></div>'+
      '<div class="row" style="gap:8px;align-items:stretch"><button class="btn primary" id="go-resume" style="flex:1">'+IC.play+'<span>'+esc(t('resume'))+'</span></button>'+
      '<button class="btn" id="go-discard" style="flex:0 0 auto;width:auto;padding:0 18px;border:1px solid var(--line);min-height:0">'+esc(t('discard'))+'</button></div>'+
    '</div>';
  }

  /* main CTA */
  var unseen = DB.length - tt.seen;
  var sub = d ? t('dueNow',{'%n':d}) : (unseen ? t('freshLeft',{'%n':unseen}) : t('nothingDue'));
  html+='<button class="btn primary" id="go-study">'+IC.play+'<span>'+esc(tt.seen?t('continueStudy'):t('startStudy'))+'</span></button>'+
    '<div class="tiny muted center" style="margin-top:-6px">'+esc(sub)+'</div>';

  /* modes */
  html+='<div class="sec-title"><h2>'+esc(t('modes'))+'</h2></div>';
  html+='<div class="btn-grid">'+
    tile('go-level',IC.target,t('levelTest'),t('levelTestD'))+
    tile('go-mock',IC.exam,t('mock'),t('mockD'))+
    tile('go-errors',IC.alert,t('myErrors'),t('myErrorsD',{'%n':errs}))+
    tile('go-terr',IC.map,t('terr'),t('terrD'))+
    tile('go-cats',IC.grid,t('categories'),t('catsD'))+
    tile('go-all',IC.flip,t('allRandom'),t('allRandomD'))+
    tile('go-eixmap',IC.map,t('eixMap')+' · '+t('beta'),t('eixMapD'))+
  '</div>';

  /* modules */
  html+='<div class="sec-title"><h2>'+esc(t('modules'))+'</h2>'+
        '<button id="go-stats">'+esc(t('stats'))+' →</button></div>';
  BLOCKS.forEach(function(b){
    html+='<div class="blocklabel">'+esc(L(b.n))+'</div><div class="stack" style="gap:9px">';
    MODS.filter(function(m){return m.b===b.id;}).forEach(function(m){ html+=modCard(m); });
    html+='</div>';
  });

  html+='<div class="tiny muted center" style="margin-top:22px;line-height:1.5">'+esc(t('addHome'))+'</div>';
  html+='</div>';

  app.innerHTML=html;
  var gr=document.getElementById('go-resume'); if(gr) gr.onclick=resumeSession;
  var gd=document.getElementById('go-discard'); if(gd) gd.onclick=function(){ ask(t('discardAsk'),t('discard'),function(){ S.cur=null; save(); render(); toast(t('discarded')); },true); };
  document.getElementById('go-study').onclick=function(){ startSession({mode:'study',pool:DB,n:S.len}); };
  document.getElementById('go-level').onclick=function(){ go('levelIntro'); };
  document.getElementById('go-mock').onclick=function(){ go('mockIntro'); };
  document.getElementById('go-errors').onclick=function(){ go('errors'); };
  document.getElementById('go-terr').onclick=function(){
    var pool=DB.filter(function(q){return q.f&&q.f.indexOf('T')>=0;});
    if(!pool.length) pool=(BYMOD['eix']||[]).concat(BYMOD['via']||[]);
    startSession({mode:'terr',pool:pool,n:S.len,title:t('terr')});
  };
  document.getElementById('go-cats').onclick=function(){ go('cats'); };
  document.getElementById('go-all').onclick=function(){ startSession({mode:'all',pool:DB,n:Math.max(S.len,20),title:t('allRandom')}); };
  document.getElementById('go-stats').onclick=function(){ go('stats'); };
  document.getElementById('go-eixmap').onclick=function(){ go('eixmap'); };
  app.querySelectorAll('[data-mod]').forEach(function(el){
    el.onclick=function(){ go('cat',el.dataset.mod); };
  });
  var pc=document.getElementById('plan-configure'); if(pc) pc.onclick=function(){ go('planSetup'); };
  var pl=document.getElementById('plan-later'); if(pl) pl.onclick=function(){ S.planPromptDismissed=true; save(); render(); };
  var pe=document.getElementById('plan-edit'); if(pe) pe.onclick=function(){ go('planSetup'); };
  var pg=document.getElementById('plan-go'); if(pg) pg.onclick=function(){
    var type=planDayType(new Date());
    var len=planLenFor(type);
    startSession({mode:'plan', pool:DB, n:len, title:t('planTitle')});
  };
  var pq=document.getElementById('plan-quick'); if(pq) pq.onclick=function(){
    var pool=planQuickReviewPool();
    var n=Math.min(8,pool.length||8);
    startSession({mode:'plan', pool:pool.length?pool:DB, n:n, title:t('planQuickReview',{'%n':n})});
  };
}
function tile(id,icon,title,sub){
  return '<button class="btn-tile" id="'+id+'"><div class="ic">'+icon+'</div>'+
    '<div><b>'+esc(title)+'</b><em>'+esc(sub)+'</em></div></button>';
}
function modCard(m){
  var st=modStats(m.id);
  var pill = st.apt===null? '<span class="pill neutral">'+esc(t('untested'))+'</span>'
           : st.apt? '<span class="pill ok">'+esc(t('apt'))+'</span>'
                   : '<span class="pill ko">'+esc(t('notApt'))+'</span>';
  var cls = st.rate===null?'':(st.apt?'ok':'ko');
  return '<button class="mod" data-mod="'+m.id+'">'+
    '<div class="mod-top"><b>'+esc(L(m.n))+'</b>'+pill+'</div>'+
    '<div class="bar thin"><i class="'+cls+'" style="width:'+(st.rate===null?st.prog:st.rate)+'%"></i></div>'+
    '<div class="mod-meta"><span>'+esc(st.rate===null? t('seen',{'%a':st.seen,'%b':st.pool}) : t('hitRate',{'%n':st.rate}))+'</span>'+
    '<span>'+esc(t('maxErrors',{'%n':m.maxErr}))+'</span></div>'+
  '</button>';
}

function planCard(){
  if(!S.plan){
    if(S.planPromptDismissed) return '';
    return '<div class="card pad">'+
      '<div class="row" style="gap:10px;align-items:flex-start">'+
        '<div class="ic" style="width:32px;height:32px;border-radius:10px;display:grid;place-items:center;background:var(--bg3);flex:none">'+IC.calendar+'</div>'+
        '<div style="flex:1;min-width:0">'+
          '<b style="display:block;margin-bottom:2px">'+esc(t('planPromptT'))+'</b>'+
          '<div class="tiny muted">'+esc(t('planPromptD'))+'</div>'+
        '</div></div>'+
      '<div class="row" style="gap:8px;margin-top:12px;align-items:stretch">'+
        '<button class="btn primary" id="plan-configure" style="flex:1">'+esc(t('planConfigure'))+'</button>'+
        '<button class="btn ghost" id="plan-later" style="flex:0 0 auto;width:auto;padding:0 16px;min-height:0">'+esc(t('planLater'))+'</button>'+
      '</div></div>';
  }
  if(!S.plan.active) return '';
  var wk=Math.min(planWeeksElapsed()+1, 99);
  var st=planStatus();
  var statusKey = st.k==='ahead'?'planAhead' : st.k==='onTrack'?'planOnTrack' : st.k==='behindLittle'?'planBehindLittle':'planBehindLot';
  var statusColor = st.k==='ahead'?'var(--ok)' : st.k==='onTrack'?'var(--ok)' : st.k==='behindLittle'?'var(--acc)':'var(--ko)';
  var type=planDayType(new Date());
  var todayLine, todayBtn;
  if(type==='none'){
    todayLine='<b>'+esc(t('planTodayNone'))+'</b><div class="tiny muted">'+esc(t('planTodayNoneD'))+'</div>';
    var qpool=planQuickReviewPool();
    todayBtn='<button class="btn" id="plan-quick" style="flex:1">'+IC.flip+'<span>'+esc(t('planQuickReview',{'%n':Math.min(8,qpool.length||8)}))+'</span></button>';
  } else {
    todayLine='<b>'+esc(t(PLAN_TODAY_KEY[type]||'planTodayShort'))+'</b><div class="tiny muted">'+esc(t(PLAN_LEN_KEY[type]||'planShortLen',{'%n':S.plan[PLAN_LEN_FIELD[type]]||0}))+'</div>';
    todayBtn='<button class="btn primary" id="plan-go" style="flex:1">'+IC.play+'<span>'+esc(t('planStartSession'))+'</span></button>';
  }
  return '<div class="card pad">'+
    '<div class="row" style="justify-content:space-between;align-items:center;margin-bottom:8px">'+
      '<div class="row" style="gap:6px"><span class="ic" style="width:26px;height:26px;border-radius:8px;display:grid;place-items:center;background:var(--bg3)">'+IC.calendar+'</span>'+
      '<b>'+esc(t('planWeek'))+' '+wk+' '+esc(t('planOf'))+' '+S.plan.weeks+'</b></div>'+
      (S.streak>1?'<span class="row" style="gap:4px;font-weight:700;color:var(--acc)">'+IC.fire.replace('<svg','<svg style="width:13px;height:13px"')+S.streak+'</span>':'')+
    '</div>'+
    '<div class="tiny" style="color:'+statusColor+';font-weight:650;margin-bottom:10px">'+esc(t(statusKey))+'</div>'+
    '<div style="margin-bottom:10px">'+todayLine+'</div>'+
    '<div class="row" style="gap:8px;align-items:stretch">'+todayBtn+
    '<button class="btn ghost" id="plan-edit" style="flex:0 0 auto;width:auto;padding:0 14px;min-height:0">'+esc(t('planEdit'))+'</button></div>'+
  '</div>';
}

/* ---------------- CATEGORIES ---------------- */
function viewCats(){
  var html='<div class="wrap stack fade"><h1>'+esc(t('categories'))+'</h1>'+
    '<p class="small muted">'+esc(S.lang==='ca'
      ?'Els 8 mòduls oficials de l’examen. Cal aprovar-los tots.'
      :'Los 8 módulos oficiales del examen. Hay que aprobarlos todos.')+'</p>';
  BLOCKS.forEach(function(b){
    html+='<div class="blocklabel">'+esc(L(b.n))+' · '+b.q+' '+esc(S.lang==='ca'?'preguntes':'preguntas')+'</div><div class="stack" style="gap:9px">';
    MODS.filter(function(m){return m.b===b.id;}).forEach(function(m){
      var st=modStats(m.id);
      html+='<button class="mod" data-mod="'+m.id+'">'+
        '<div class="mod-top"><b>'+esc(L(m.n))+'</b><span class="pill neutral">'+st.pool+'</span></div>'+
        '<div class="tiny muted" style="margin-bottom:8px">'+esc(L(m.d))+'</div>'+
        '<div class="bar thin"><i class="'+(st.rate===null?'':(st.apt?'ok':'ko'))+'" style="width:'+(st.rate===null?st.prog:st.rate)+'%"></i></div>'+
      '</button>';
    });
    html+='</div>';
  });
  html+='</div>';
  app.innerHTML=html;
  app.querySelectorAll('[data-mod]').forEach(function(el){ el.onclick=function(){ go('cat',el.dataset.mod); }; });
}

function viewCat(id){
  var m=MOD[id]; if(!m){ go('cats'); return; }
  var st=modStats(id);
  var subs={};
  (BYMOD[id]||[]).forEach(function(q){ (subs[q.s]=subs[q.s]||[]).push(q); });

  var html='<div class="wrap stack fade">'+
    '<div><div class="tiny muted" style="text-transform:uppercase;letter-spacing:.07em;font-weight:700">'+
      esc(L((BLOCKS.filter(function(b){return b.id===m.b;})[0]||{}).n))+'</div>'+
      '<h1 style="margin-top:4px">'+esc(L(m.n))+'</h1>'+
      '<p class="small muted" style="margin-top:6px">'+esc(L(m.d))+'</p></div>';

  html+='<div class="card pad">'+
    '<div class="row" style="justify-content:space-between;margin-bottom:10px">'+
      '<span class="small muted">'+esc(t('hitRate',{'%n':st.rate===null?'—':st.rate}))+'</span>'+
      (st.apt===null?'<span class="pill neutral">'+esc(t('untested'))+'</span>':
       st.apt?'<span class="pill ok">'+esc(t('apt'))+'</span>':'<span class="pill ko">'+esc(t('notApt'))+'</span>')+
    '</div>'+
    '<div class="bar"><i class="'+(st.rate===null?'':(st.apt?'ok':'ko'))+'" style="width:'+(st.rate===null?st.prog:st.rate)+'%"></i></div>'+
    '<div class="mod-meta"><span>'+esc(t('seen',{'%a':st.seen,'%b':st.pool}))+'</span>'+
      '<span>'+esc(S.lang==='ca'?'Cal ≥':'Necesitas ≥')+' '+st.need+'%</span></div>'+
  '</div>';

  html+='<button class="btn primary" id="study-mod">'+IC.play+'<span>'+esc(t('goStudy'))+'</span></button>';

  html+='<div class="sec-title"><h2>'+esc(t('topics'))+'</h2></div><div class="stack" style="gap:9px">';
  Object.keys(subs).forEach(function(s){
    var ss=subStats(s);
    html+='<button class="mod" data-sub="'+s+'">'+
      '<div class="mod-top"><b>'+esc(L(SUBS[s]||{ca:s,es:s}))+'</b>'+
        (ss.rate===null?'<span class="pill neutral">'+ss.pool+'</span>'
          :'<span class="pill '+(ss.rate>=80?'ok':ss.rate>=60?'warn':'ko')+'">'+ss.rate+'%</span>')+'</div>'+
      '<div class="bar thin"><i class="'+(ss.rate===null?'':(ss.rate>=80?'ok':ss.rate>=60?'warn':'ko'))+'" style="width:'+(ss.rate===null?0:ss.rate)+'%"></i></div>'+
      '<div class="mod-meta"><span>'+esc(t('questionsN',{'%n':ss.pool}))+'</span><span>'+esc(t('seen',{'%a':ss.seen,'%b':ss.pool}))+'</span></div>'+
    '</button>';
  });
  html+='</div></div>';
  app.innerHTML=html;
  document.getElementById('study-mod').onclick=function(){
    startSession({mode:'cat',pool:BYMOD[id]||[],n:S.len,title:L(m.n)});
  };
  app.querySelectorAll('[data-sub]').forEach(function(el){
    el.onclick=function(){
      var s=el.dataset.sub;
      startSession({mode:'sub',pool:BYSUB[s]||[],n:S.len,title:L(SUBS[s]||{ca:s,es:s})});
    };
  });
}

/* ---------------- ERRORS ---------------- */
function viewErrors(){
  var all=errorPool(1), rec=errorPool(2);
  var html='<div class="wrap stack fade"><h1>'+esc(t('myErrors'))+'</h1>';
  if(!all.length){
    html+='<div class="empty">'+IC.check+'<div>'+esc(t('noErrors'))+'</div></div></div>';
    app.innerHTML=html; return;
  }
  html+='<div class="stats3"><div class="stat"><b>'+all.length+'</b><em>'+esc(t('wrong'))+'</em></div>'+
    '<div class="stat"><b style="color:var(--ko)">'+rec.length+'</b><em>'+esc(t('recurrent'))+'</em></div>'+
    '<div class="stat"><b>'+Object.keys(groupBy(all,'m')).length+'</b><em>'+esc(S.lang==='ca'?'Mòduls':'Módulos')+'</em></div></div>';
  html+='<button class="btn primary" id="e-all">'+IC.play+'<span>'+esc(S.lang==='ca'?'Repassar els meus errors':'Repasar mis fallos')+'</span></button>';
  if(rec.length) html+='<button class="btn" id="e-rec">'+IC.alert+'<span>'+esc(t('recurrent'))+' ('+rec.length+')</span></button>'+
    '<div class="tiny muted center" style="margin-top:-6px">'+esc(t('recurrentD'))+'</div>';

  var g=groupBy(all,'m');
  html+='<div class="sec-title"><h2>'+esc(t('byModule'))+'</h2></div><div class="stack" style="gap:9px">';
  Object.keys(g).forEach(function(mid){
    html+='<button class="mod" data-emod="'+mid+'"><div class="mod-top"><b>'+esc(L(MOD[mid].n))+'</b>'+
      '<span class="pill ko">'+g[mid].length+'</span></div>'+
      '<div class="tiny muted">'+esc(t('questionsN',{'%n':g[mid].length}))+'</div></button>';
  });
  html+='</div></div>';
  app.innerHTML=html;
  document.getElementById('e-all').onclick=function(){ startSession({mode:'err',pool:all,n:Math.min(all.length,S.len),title:t('myErrors')}); };
  var br=document.getElementById('e-rec');
  if(br) br.onclick=function(){ startSession({mode:'err',pool:rec,n:Math.min(rec.length,S.len),title:t('recurrent')}); };
  app.querySelectorAll('[data-emod]').forEach(function(el){
    el.onclick=function(){ var p=g[el.dataset.emod]; startSession({mode:'err',pool:p,n:Math.min(p.length,S.len),title:L(MOD[el.dataset.emod].n)}); };
  });
}
function groupBy(arr,k){ var o={}; arr.forEach(function(x){ (o[x[k]]=o[x[k]]||[]).push(x); }); return o; }

/* ---------------- INTRO (level / mock) ---------------- */
function viewIntro(kind){
  var isLevel = kind==='level';
  var html='<div class="wrap stack fade">'+
    '<h1>'+esc(isLevel? t('levelTest'):t('mock'))+'</h1>'+
    '<div class="card pad"><p class="small">'+esc(isLevel? t('levelIntro'):t('mockIntro'))+'</p></div>';
  if(!isLevel){
    html+='<div class="card pad"><div class="stack" style="gap:0">';
    MODS.forEach(function(m){
      html+='<div class="kv"><span>'+esc(L(m.n))+'</span><b class="'+(m.maxErr<=2?'':'')+'">'+esc(t('maxErrors',{'%n':m.maxErr}))+'</b></div>';
    });
    html+='</div></div>';
    if(S.lastMock){
      html+='<div class="card pad"><div class="tiny muted" style="margin-bottom:6px">'+esc(S.lang==='ca'?'Últim simulacre':'Último simulacro')+'</div>'+
        '<div class="row" style="justify-content:space-between"><b>'+S.lastMock.score+'/80</b>'+
        (S.lastMock.passed?'<span class="pill ok">'+esc(t('apt'))+'</span>':'<span class="pill ko">'+esc(t('notApt'))+'</span>')+'</div></div>';
    }
  }
  html+='<button class="btn primary" id="go">'+IC.play+'<span>'+esc(t('start'))+'</span></button></div>';
  app.innerHTML=html;
  document.getElementById('go').onclick=function(){
    if(isLevel) startLevel(); else startMock();
  };
}

/* ---------------- PLA D'ESTUDI: configuració ---------------- */
var PLAN_DRAFT=null;
function viewPlanSetup(){
  var existing=S.plan;
  if(!PLAN_DRAFT){
    var base={weeks:4, days:Object.assign({},PLAN_DEFAULT_DAYS), shortLen:14, longLen:40, intenseLen:90, time:'20:00'};
    PLAN_DRAFT = existing? Object.assign({}, base, JSON.parse(JSON.stringify(existing))) : base;
  }
  var d=PLAN_DRAFT;
  var DAYKEYS=['daySun','dayMon','dayTue','dayWed','dayThu','dayFri','daySat'];
  var cap=planCapacityPerWeekDraft(d);
  var realWeeks=cap? Math.max(1,Math.ceil(planTotalRemaining()/cap)) : null;
  var anyDay=[0,1,2,3,4,5,6].some(function(i){return d.days[i]&&d.days[i]!=='none';});

  var html='<div class="wrap stack fade">'+
    '<h1>'+esc(t('planSetupTitle'))+'</h1>'+
    '<p class="small muted">'+esc(t('planSetupIntro'))+'</p>'+
    '<div class="card pad">'+
      '<div class="small" style="font-weight:650;margin-bottom:8px">'+esc(t('planWeeksLabel'))+'</div>'+
      '<div class="tabs">'+[2,3,4,6,8].map(function(n){return '<button data-weeks="'+n+'" class="'+(d.weeks===n?'on':'')+'">'+n+'</button>';}).join('')+'</div>'+
    '</div>'+
    '<div class="card pad">'+
      '<div class="small" style="font-weight:650;margin-bottom:10px">'+esc(t('planDaysLabel'))+'</div>'+
      '<div class="stack" style="gap:8px">'+
      [0,1,2,3,4,5,6].map(function(i){
        var type=d.days[i]||'none';
        return '<div class="row" style="justify-content:space-between;gap:8px">'+
          '<b style="width:34px;flex:none">'+esc(t(DAYKEYS[i]))+'</b>'+
          '<div class="tabs" style="flex:1;margin-bottom:0" data-daypicker="'+i+'">'+
            '<button data-dt="none" class="'+(type==='none'?'on':'')+'">'+esc(t('planDayNone'))+'</button>'+
            '<button data-dt="short" class="'+(type==='short'?'on':'')+'">'+esc(t('planDayShort'))+'</button>'+
            '<button data-dt="long" class="'+(type==='long'?'on':'')+'">'+esc(t('planDayLong'))+'</button>'+
            '<button data-dt="intense" class="'+(type==='intense'?'on':'')+'">'+esc(t('planDayIntense'))+'</button>'+
          '</div></div>';
      }).join('')+
      '</div></div>'+
    '<div class="card pad">'+
      '<div class="small" style="font-weight:650;margin-bottom:8px">'+esc(t('planLenLabel'))+'</div>'+
      '<div class="tiny muted" style="margin-bottom:6px">'+esc(t('planShortLen',{'%n':d.shortLen}))+'</div>'+
      '<div class="tabs">'+[8,14,20,28].map(function(n){return '<button data-short="'+n+'" class="'+(d.shortLen===n?'on':'')+'">'+n+'</button>';}).join('')+'</div>'+
      '<div class="tiny muted" style="margin:10px 0 6px">'+esc(t('planLongLen',{'%n':d.longLen}))+'</div>'+
      '<div class="tabs">'+[28,40,50,60].map(function(n){return '<button data-long="'+n+'" class="'+(d.longLen===n?'on':'')+'">'+n+'</button>';}).join('')+'</div>'+
      '<div class="tiny muted" style="margin:10px 0 6px">'+esc(t('planIntenseLen',{'%n':d.intenseLen}))+'</div>'+
      '<div class="tabs">'+[60,90,120,150].map(function(n){return '<button data-intense="'+n+'" class="'+(d.intenseLen===n?'on':'')+'">'+n+'</button>';}).join('')+'</div>'+
    '</div>'+
    (anyDay?'<div class="card pad" style="border-color:'+(realWeeks&&realWeeks>d.weeks?'var(--ko)':'var(--ok)')+'"><p class="small">'+
      (realWeeks&&realWeeks>d.weeks? esc(t('planNotFeasible',{'%n':realWeeks,'%w':d.weeks})) : esc(t('planFeasible')))+
      '</p></div>' : '<div class="card pad"><p class="small muted">'+esc(t('planNoDays'))+'</p></div>')+
    '<button class="btn primary" id="plan-save" '+(anyDay?'':'disabled')+'>'+esc(t('planSave'))+'</button>'+
    (existing? '<button class="btn ghost" id="plan-cancel">'+esc(t('cancel'))+'</button>' : '')+
    (existing? (
      '<div class="sec-title"><h2>'+esc(t('planCalendar'))+'</h2></div>'+
      '<div class="card pad">'+
        '<p class="tiny muted" style="margin-bottom:10px">'+esc(t('planCalendarD'))+'</p>'+
        '<p class="tiny muted" style="margin-bottom:10px">'+esc(t('planNoNotifD'))+'</p>'+
        '<div class="row" style="gap:10px;align-items:center;margin-bottom:12px">'+
          '<label class="small" for="plan-time">'+esc(t('planCalendarTime'))+'</label>'+
          '<input type="time" id="plan-time" value="'+esc(existing.time||'20:00')+'" style="border:1px solid var(--line);border-radius:10px;padding:8px;background:var(--bg2);color:var(--fg)">'+
        '</div>'+
        '<button class="btn" id="plan-ics">'+IC.down+'<span>'+esc(t('planCalendar'))+'</span></button>'+
      '</div>'+
      '<button class="btn ghost" id="plan-toggle">'+esc(existing.active? t('planPause'):t('planResume'))+'</button>'+
      '<button class="btn danger" id="plan-delete">'+esc(t('planDelete'))+'</button>'
    ) : '')+
  '</div>';
  app.innerHTML=html;

  document.querySelectorAll('[data-weeks]').forEach(function(b){ b.onclick=function(){ d.weeks=parseInt(b.dataset.weeks,10); viewPlanSetup(); }; });
  document.querySelectorAll('[data-daypicker]').forEach(function(box){
    var i=parseInt(box.dataset.daypicker,10);
    box.querySelectorAll('[data-dt]').forEach(function(b){ b.onclick=function(){ d.days[i]=b.dataset.dt; viewPlanSetup(); }; });
  });
  document.querySelectorAll('[data-short]').forEach(function(b){ b.onclick=function(){ d.shortLen=parseInt(b.dataset.short,10); viewPlanSetup(); }; });
  document.querySelectorAll('[data-long]').forEach(function(b){ b.onclick=function(){ d.longLen=parseInt(b.dataset.long,10); viewPlanSetup(); }; });
  document.querySelectorAll('[data-intense]').forEach(function(b){ b.onclick=function(){ d.intenseLen=parseInt(b.dataset.intense,10); viewPlanSetup(); }; });
  var cancelBtn=document.getElementById('plan-cancel'); if(cancelBtn) cancelBtn.onclick=function(){ PLAN_DRAFT=null; go('home'); };
  var icsBtn=document.getElementById('plan-ics'); if(icsBtn) icsBtn.onclick=function(){
    var timeInput=document.getElementById('plan-time');
    if(timeInput && timeInput.value){ S.plan.time=timeInput.value; save(); }
    planICS();
  };
  var toggleBtn=document.getElementById('plan-toggle'); if(toggleBtn) toggleBtn.onclick=function(){ S.plan.active=!S.plan.active; save(); PLAN_DRAFT=null; go('home'); };
  var delBtn=document.getElementById('plan-delete'); if(delBtn) delBtn.onclick=function(){
    ask(t('planDeleteAsk'),t('planDelete'),function(){ S.plan=null; PLAN_DRAFT=null; save(); go('home'); },true);
  };
  document.getElementById('plan-save').onclick=function(){
    if(!anyDay) return;
    var wasActive=!!S.plan;
    S.plan={ weeks:d.weeks, days:d.days, shortLen:d.shortLen, longLen:d.longLen, intenseLen:d.intenseLen, time:S.plan?S.plan.time:'20:00',
      startDay: (S.plan&&S.plan.startDay)? S.plan.startDay : Date.now(),
      baseline: (S.plan&&S.plan.baseline!==undefined)? S.plan.baseline : planAnswersEver(),
      active:true };
    PLAN_DRAFT=null; save(); go('home'); toast(wasActive? t('planSave') : t('planReady'));
  };
}
function planCapacityPerWeekDraft(d){
  var c=0; for(var i=0;i<7;i++){ var t=d.days[i]; var f=PLAN_LEN_FIELD[t]; if(f) c+=d[f]||0; }
  return c;
}

function startLevel(){
  var qs=[];
  MODS.forEach(function(m){
    var pool=(BYMOD[m.id]||[]).slice();
    qs=qs.concat(shuffle(pool).slice(0,4));
  });
  startSession({mode:'level',list:shuffle(qs),title:t('levelTest'),noGradeUI:false});
}
function startMock(){
  var plan={tar:10,reg:10,pro:10,eix:10,via:10,amb:10,cat:10,cst:10};
  var qs=[];
  Object.keys(plan).forEach(function(id){
    var pool=(BYMOD[id]||[]).slice();
    qs=qs.concat(shuffle(pool).slice(0,plan[id]));
  });
  startSession({mode:'mock',list:shuffle(qs),title:t('mock'),timed:80*60});
}

/* ---------------- SESSION ---------------- */
function startSession(cfg){
  var list = cfg.list || pick(cfg.pool||DB, cfg.n||S.len);
  if(!list.length){ toast(t('noQ')); return; }
  SESSION={
    mode:cfg.mode, title:cfg.title||'', list:list, idx:0,
    ans:new Array(list.length).fill(null), order:list.map(function(q){ return shuffle([0,1,2,3]); }),
    flipped:false, done:false,
    timed:cfg.timed||0, t0:Date.now()
  };
  go('session'); save();
  if(SESSION.timed) tick();
}
/* rebuild a session from its saved snapshot */
function resumeSession(){
  var c=S.cur; if(!c||!c.ids) return;
  var list=[]; for(var i=0;i<c.ids.length;i++){ var q=DB[c.ids[i]]; if(!q){ S.cur=null; save(); render(); return; } list.push(q); }
  SESSION={ mode:c.mode, title:c.title||'', list:list, idx:Math.min(c.idx||0,list.length-1),
    ans:c.ans&&c.ans.length===list.length? c.ans : new Array(list.length).fill(null),
    order:c.order&&c.order.length===list.length? c.order : list.map(function(){return shuffle([0,1,2,3]);}),
    flipped:!!c.flipped, done:false, timed:c.timed||0, t0:Date.now()-(c.el||0)*1000 };
  go('session'); save();
  if(SESSION.timed) tick();
}
var tickT=null;
function tick(){
  clearTimeout(tickT);
  if(!SESSION || !SESSION.timed || SESSION.done) return;
  var el=document.getElementById('timer');
  var left=SESSION.timed - Math.floor((Date.now()-SESSION.t0)/1000);
  if(left<=0){ endSession(); return; }
  if(el){
    var mm=Math.floor(left/60), ss=left%60;
    el.textContent=mm+':'+(ss<10?'0':'')+ss;
    el.className='timer'+(left<300?' low':'');
  }
  tickT=setTimeout(tick,1000);
}

function viewSession(){
  var S2=SESSION; if(!S2){ go('home'); return; }
  var q=S2.list[S2.idx], ord=S2.order[S2.idx], given=S2.ans[S2.idx];
  var isLang = q.f && q.f.indexOf('L')>=0;
  var qlang = isLang ? (q.m==='cat'?'ca':'es') : S.lang;
  var qtext = q.q[qlang], opts=q.o[qlang], expl=q.e[qlang];

  var html='<div class="wrap fade">';
  /* head */
  html+='<div class="shead">'+
    '<div class="bar"><i style="width:'+Math.round(S2.idx*100/S2.list.length)+'%"></i></div>'+
    '<span class="counter">'+(S2.idx+1)+'/'+S2.list.length+'</span>'+
    (S2.timed?'<span class="timer" id="timer">--:--</span>':'')+
  '</div>';

  var modName = L(MOD[q.m].n), subName=L(SUBS[q.s]||{ca:q.s,es:q.s});

  html+='<div class="qwrap"><div class="flip'+(S2.flipped?' turned':'')+'" id="flip">';

  /* FRONT */
  html+='<div class="face front" id="front">'+
    '<div class="qhead"><span class="pill neutral">'+esc(modName)+'</span>'+
      '<span class="tiny muted">'+esc(subName)+'</span></div>'+
    '<div class="qtext">'+esc(qtext)+'</div>'+
    '<div class="opts">';
  ord.forEach(function(oi,k){
    var cls='opt';
    if(given!==null && given!==-1){
      if(oi===q.a) cls+=' good';
      else if(oi===given) cls+=' bad';
    }
    html+='<button class="'+cls+'" data-opt="'+oi+'" '+(given!==null?'disabled':'')+'>'+
      '<span class="k">'+'ABCD'[k]+'</span><span>'+esc(opts[oi])+'</span></button>';
  });
  html+='</div>';
  if(given===null){
    html+='<div class="actions"><button class="btn ghost sm" id="dunno" style="flex:1">'+IC.q+'<span>'+esc(t('dunno'))+'</span></button>'+
      '<button class="btn ghost sm" id="doflip" style="flex:1">'+IC.flip+'<span>'+esc(S.lang==='ca'?'Veure resposta':'Ver respuesta')+'</span></button></div>';
    html+='<div class="hintflip">'+esc(t('flipHint'))+'</div>';
  }else{
    html+='<div class="actions"><button class="btn primary" id="next">'+
      '<span>'+esc(S2.idx+1>=S2.list.length? t('finish'):t('next'))+'</span>'+IC.arrow+'</button></div>';
    html+='<div class="hintflip"><button id="seeexp" style="color:var(--acc2);font-weight:650">'+esc(t('why'))+' →</button></div>';
  }
  if(isLang) html+='<div class="tiny muted center" style="margin-top:8px">'+esc(t('langOfQ'))+'</div>';
  html+='</div>';

  /* BACK */
  var okAns = given!==null && given===q.a;
  var boxCls = given===null||given===-1 ? 'neutral' : (okAns?'ok':'ko');
  var boxIc  = given===null||given===-1 ? IC.q : (okAns?IC.check:IC.x);
  var boxTxt = given===null||given===-1 ? t('theAnswer') : (okAns?t('correctAns'):t('wrongAns'));
  html+='<div class="face back" id="back">'+
    '<div class="ansbox '+boxCls+'"><span class="ic" style="color:var(--'+(boxCls==='neutral'?'fg2':boxCls)+')">'+boxIc+'</span>'+
      '<div><b style="color:var(--'+(boxCls==='neutral'?'fg2':boxCls)+')">'+esc(boxTxt)+'</b>'+
      '<span class="small" style="font-weight:600">'+esc(opts[q.a])+'</span></div></div>'+
    (given!==null && given!==-1 && !okAns
      ? '<div class="tiny muted" style="margin:-4px 0 12px 2px">'+esc(S.lang==='ca'?'La teva resposta: ':'Tu respuesta: ')+esc(opts[given])+'</div>'
      : '')+
    '<div class="expl">'+esc(expl)+'</div>'+
    (q.r?'<div class="ref">'+IC.book+'<span>'+esc(q.r)+'</span></div>':'')+
    (q.f&&q.f.indexOf('C')>=0?'<div class="ref" style="color:var(--warn)">'+IC.clock+'<span>'+esc(t('expires'))+'</span></div>':'')+
    '<div class="actions"><button class="btn primary" id="next2">'+
      '<span>'+esc(S2.idx+1>=S2.list.length? t('finish'):t('next'))+'</span>'+IC.arrow+'</button></div>'+
    '<div class="hintflip">'+esc(t('flipBack'))+'</div>'+
  '</div>';

  html+='</div></div></div>';
  app.innerHTML=html;

  /* size the card to whichever face is showing */
  var flip=document.getElementById('flip');
  function fit(){
    var f=document.getElementById('front'), b=document.getElementById('back');
    if(!f||!b) return;
    flip.style.height=((SESSION && SESSION.flipped)? b.offsetHeight : f.offsetHeight)+'px';
  }
  requestAnimationFrame(fit);
  setTimeout(fit,60);
  if(window.ResizeObserver){
    try{
      var ro=new ResizeObserver(fit);
      ro.observe(document.getElementById('front'));
      ro.observe(document.getElementById('back'));
    }catch(e){}
  }
  window.addEventListener('resize',fit);

  app.querySelectorAll('[data-opt]').forEach(function(btn){
    btn.onclick=function(e){ e.stopPropagation(); answer(parseInt(btn.dataset.opt,10)); };
  });
  var dn=document.getElementById('dunno'); if(dn) dn.onclick=function(e){ e.stopPropagation(); answer(-1); };
  var df=document.getElementById('doflip'); if(df) df.onclick=function(e){ e.stopPropagation(); answer(-1); };
  var se=document.getElementById('seeexp'); if(se) se.onclick=function(e){ e.stopPropagation(); SESSION.flipped=true; render(); };
  [document.getElementById('next'),document.getElementById('next2')].forEach(function(b){
    if(b) b.onclick=function(e){ e.stopPropagation(); nextQ(); };
  });
  /* tap card body to flip */
  ['front','back'].forEach(function(id){
    var el=document.getElementById(id);
    el.addEventListener('click',function(ev){
      if(ev.target.closest('button')) return;
      if(SESSION.ans[SESSION.idx]===null && id==='front'){ answer(-1); return; }
      SESSION.flipped=!SESSION.flipped; save(); render();
    });
  });
  if(SESSION.timed) tick();
}

function answer(choice){
  var S2=SESSION, q=S2.list[S2.idx];
  if(S2.ans[S2.idx]!==null) return;
  S2.ans[S2.idx]=choice;
  if(S2.mode!=='mock' && S2.mode!=='level'){
    grade(q, choice===-1? -1 : (choice===q.a?1:0));
  } else {
    /* mock/level: grade too, but softly (records stats) */
    grade(q, choice===-1? -1 : (choice===q.a?1:0));
  }
  S2.flipped=true;
  save();
  render();
}
function nextQ(){
  var S2=SESSION;
  if(S2.idx+1>=S2.list.length){ endSession(); return; }
  S2.idx++; S2.flipped=false; save(); window.scrollTo(0,0); render();
}
function endSession(){
  clearTimeout(tickT);
  SESSION.done=true;
  touchDay();
  var S2=SESSION, ok=0,ko=0,un=0;
  S2.list.forEach(function(q,i){
    var a=S2.ans[i];
    if(a===null||a===-1) un++; else if(a===q.a) ok++; else ko++;
  });
  S2.res={ok:ok,ko:ko,un:un};
  if(S2.mode==='mock'){
    var per={};
    S2.list.forEach(function(q,i){
      var p=per[q.m]=per[q.m]||{ok:0,n:0};
      p.n++; if(S2.ans[i]===q.a) p.ok++;
    });
    var failed=[];
    MODS.forEach(function(m){
      var p=per[m.id]||{ok:0,n:0};
      var err=p.n-p.ok;
      if(err>m.maxErr) failed.push(m.id);
    });
    S2.per=per; S2.failed=failed;
    S.lastMock={score:ok,passed:failed.length===0,date:Date.now()};
  }
  if(S2.mode==='level'){
    var per2={};
    S2.list.forEach(function(q,i){ var p=per2[q.m]=per2[q.m]||{ok:0,n:0}; p.n++; if(S2.ans[i]===q.a) p.ok++; });
    S2.per=per2;
    S.lastLevel={date:Date.now(),score:ok,per:per2};
  }
  S.hist=(S.hist||[]).concat([{d:Date.now(),m:S2.mode,ok:ok,n:S2.list.length}]).slice(-80);
  save();
  go('result');
}

/* ---------------- RESULT ---------------- */
function viewResult(){
  var S2=SESSION; if(!S2){ go('home'); return; }
  var r=S2.res, n=S2.list.length, pct=Math.round(r.ok*100/n);
  var html='<div class="wrap stack fade">';

  if(S2.mode==='mock'){
    var passed=S2.failed.length===0;
    html+='<div class="card pad center">'+
      '<div class="ring" style="--p:'+pct+';--c:'+(passed?'var(--ok)':'var(--ko)')+';margin:4px auto 14px">'+
        '<div><b>'+r.ok+'</b><em>de '+n+'</em></div></div>'+
      '<h1 style="margin-bottom:6px">'+esc(t('result'))+'</h1>'+
      '<p class="small" style="font-weight:650;color:var('+(passed?'--ok':'--ko')+')">'+
        esc(passed? t('mockPassed') : t('mockFailed',{'%n':S2.failed.length}))+'</p></div>';
    html+='<div class="sec-title"><h2>'+esc(t('byModule'))+'</h2></div><div class="card pad"><div class="stack" style="gap:0">';
    MODS.forEach(function(m){
      var p=S2.per[m.id]||{ok:0,n:0}, err=p.n-p.ok, bad=err>m.maxErr;
      html+='<div class="kv"><div style="flex:1;min-width:0"><b style="font-weight:650">'+esc(L(m.n))+'</b>'+
        '<div class="tiny muted">'+esc(t('errorsOf',{'%a':err,'%b':p.n}))+' · '+esc(t('limit',{'%n':m.maxErr}))+'</div></div>'+
        '<span class="pill '+(bad?'ko':'ok')+'">'+esc(bad?t('notApt'):t('apt'))+'</span></div>';
    });
    html+='</div></div>';
    if(S2.failed.length){
      html+='<div class="sec-title"><h2>'+esc(t('studyPlan'))+'</h2></div><div class="card pad"><ol class="plan">';
      S2.failed.forEach(function(id){
        var p=S2.per[id]||{ok:0,n:0};
        html+='<li><div><b>'+esc(L(MOD[id].n))+'</b><em>'+esc(t('errorsOf',{'%a':(p.n-p.ok),'%b':p.n}))+' · '+esc(t('maxErrors',{'%n':MOD[id].maxErr}))+'</em></div>'+
          '<button class="btn sm" data-study="'+id+'">'+esc(t('studyIt'))+'</button></li>';
      });
      html+='</ol></div>';
    }
  }
  else if(S2.mode==='level'){
    var ranked=MODS.map(function(m){
      var p=S2.per[m.id]||{ok:0,n:1};
      return {id:m.id, rate:Math.round(p.ok*100/p.n), need:Math.round((10-m.maxErr)*10), p:p};
    }).sort(function(a,b){ return (a.rate-a.need)-(b.rate-b.need); });
    var lvl = pct>=80?(S.lang==='ca'?'Avançat':'Avanzado') : pct>=60?(S.lang==='ca'?'Intermedi':'Intermedio') : pct>=35?(S.lang==='ca'?'Inicial':'Inicial') : (S.lang==='ca'?'Començant':'Empezando');
    html+='<div class="card pad center">'+
      '<div class="ring" style="--p:'+pct+';--c:'+(pct>=70?'var(--ok)':pct>=45?'var(--acc)':'var(--warn)')+';margin:4px auto 14px">'+
        '<div><b>'+pct+'%</b><em>'+esc(t('yourLevel'))+'</em></div></div>'+
      '<h1>'+esc(lvl)+'</h1>'+
      '<p class="small muted" style="margin-top:6px">'+r.ok+' / '+n+'</p></div>';
    html+='<div class="sec-title"><h2>'+esc(t('studyPlan'))+'</h2></div>'+
      '<p class="small muted" style="margin-top:-4px">'+esc(t('planIntro'))+'</p>'+
      '<div class="card pad"><ol class="plan">';
    ranked.forEach(function(x){
      html+='<li><div><b>'+esc(L(MOD[x.id].n))+'</b><em>'+x.rate+'% · '+esc(S.lang==='ca'?'cal':'necesitas')+' ≥'+x.need+'%</em></div>'+
        '<button class="btn sm" data-study="'+x.id+'">'+esc(t('studyIt'))+'</button></li>';
    });
    html+='</ol></div>';
  }
  else{
    html+='<div class="card pad center">'+
      '<div class="ring" style="--p:'+pct+';--c:'+(pct>=80?'var(--ok)':pct>=60?'var(--acc)':'var(--ko)')+';margin:4px auto 14px">'+
        '<div><b>'+pct+'%</b><em>'+esc(t('correct'))+'</em></div></div>'+
      '<h1>'+esc(t('sessionEnd'))+'</h1></div>';
    html+='<div class="stats3">'+
      '<div class="stat"><b style="color:var(--ok)">'+r.ok+'</b><em>'+esc(t('correct'))+'</em></div>'+
      '<div class="stat"><b style="color:var(--ko)">'+r.ko+'</b><em>'+esc(t('wrong'))+'</em></div>'+
      '<div class="stat"><b>'+r.un+'</b><em>'+esc(t('dunno'))+'</em></div></div>';
    var wt=weakTopics(2).slice(0,4);
    if(wt.length){
      html+='<div class="sec-title"><h2>'+esc(t('reinforce'))+'</h2></div><div class="card pad"><div class="stack" style="gap:0">';
      wt.forEach(function(x){
        html+='<div class="kv"><div style="flex:1;min-width:0"><b style="font-weight:650">'+esc(L(SUBS[x.s]||{ca:x.s,es:x.s}))+'</b>'+
          '<div class="tiny muted">'+esc(L(MOD[x.m].n))+'</div></div>'+
          '<span class="pill '+(x.rate<50?'ko':'warn')+'">'+x.rate+'%</span></div>';
      });
      html+='</div></div>';
    }
  }

  /* wrong answers review */
  var wrongs=[];
  S2.list.forEach(function(q,i){ if(S2.ans[i]!==q.a) wrongs.push({q:q,a:S2.ans[i]}); });
  if(wrongs.length){
    html+='<div class="sec-title"><h2>'+esc(t('review'))+'</h2></div><div class="stack" style="gap:9px">';
    wrongs.forEach(function(w){
      var isLang=w.q.f&&w.q.f.indexOf('L')>=0, lg=isLang?(w.q.m==='cat'?'ca':'es'):S.lang;
      html+='<div class="card pad"><div class="tiny muted" style="margin-bottom:6px">'+esc(L(MOD[w.q.m].n))+' · '+esc(L(SUBS[w.q.s]||{ca:w.q.s,es:w.q.s}))+'</div>'+
        '<div class="small" style="font-weight:650;margin-bottom:9px;white-space:pre-line">'+esc(w.q.q[lg])+'</div>'+
        '<div class="ansbox ok" style="margin-bottom:9px"><span class="ic" style="color:var(--ok)">'+IC.check+'</span>'+
          '<div><span class="small" style="font-weight:600">'+esc(w.q.o[lg][w.q.a])+'</span></div></div>'+
        '<div class="expl small">'+esc(w.q.e[lg])+'</div>'+
        (w.q.r?'<div class="ref">'+IC.book+'<span>'+esc(w.q.r)+'</span></div>':'')+
      '</div>';
    });
    html+='</div>';
  }

  html+='<div class="stack" style="margin-top:8px">';
  if(wrongs.length) html+='<button class="btn" id="redo">'+IC.flip+'<span>'+esc(S.lang==='ca'?'Repetir els errors':'Repetir los fallos')+'</span></button>';
  html+='<button class="btn primary" id="again">'+IC.play+'<span>'+esc(t('again'))+'</span></button>'+
    '<button class="btn ghost" id="home">'+esc(t('backHome'))+'</button></div></div>';

  app.innerHTML=html;
  app.querySelectorAll('[data-study]').forEach(function(b){
    b.onclick=function(){ var id=b.dataset.study; SESSION=null; startSession({mode:'cat',pool:BYMOD[id]||[],n:S.len,title:L(MOD[id].n)}); };
  });
  var rd=document.getElementById('redo');
  if(rd) rd.onclick=function(){ var l=wrongs.map(function(w){return w.q;}); SESSION=null; startSession({mode:'err',list:shuffle(l),title:t('myErrors')}); };
  document.getElementById('again').onclick=function(){
    var m=S2.mode; SESSION=null;
    if(m==='mock') startMock(); else if(m==='level') startLevel();
    else startSession({mode:'study',pool:DB,n:S.len});
  };
  document.getElementById('home').onclick=function(){ SESSION=null; go('home'); };
}

/* ---------------- STATS ---------------- */
function viewStats(){
  var tt=totals(), prog=overallProgress();
  var rate=(tt.ok+tt.ko)?Math.round(tt.ok*100/(tt.ok+tt.ko)):0;
  var wt=weakTopics(2), st=strongTopics(3);
  var html='<div class="wrap stack fade"><h1>'+esc(t('stats'))+'</h1>';

  html+='<div class="card pad" style="display:flex;gap:16px;align-items:center">'+
    '<div class="ring" style="--p:'+prog+'"><div><b>'+prog+'%</b><em>'+esc(t('knowledge'))+'</em></div></div>'+
    '<div style="flex:1"><div class="kv"><span class="small muted">'+esc(t('answered'))+'</span><b>'+tt.seen+'/'+DB.length+'</b></div>'+
    '<div class="kv"><span class="small muted">'+esc(t('hitRate',{'%n':rate}))+'</span><b>'+tt.ok+'/'+(tt.ok+tt.ko)+'</b></div>'+
    '<div class="kv"><span class="small muted">'+esc(t('mastered'))+'</span><b>'+tt.mastered+'</b></div>'+
    (S.streak>0?'<div class="kv"><span class="small muted">'+esc(t('streak'))+'</span><b>'+S.streak+' '+esc(t('days'))+'</b></div>':'')+
    '</div></div>';

  html+='<div class="stats3">'+
    '<div class="stat"><b style="color:var(--ok)">'+tt.ok+'</b><em>'+esc(t('correct'))+'</em></div>'+
    '<div class="stat"><b style="color:var(--ko)">'+tt.ko+'</b><em>'+esc(t('wrong'))+'</em></div>'+
    '<div class="stat"><b>'+dueCount()+'</b><em>'+esc(t('due'))+'</em></div></div>';

  html+='<div class="sec-title"><h2>'+esc(t('byModule'))+'</h2></div><div class="stack" style="gap:9px">';
  MODS.forEach(function(m){
    var s=modStats(m.id);
    html+='<div class="card pad"><div class="mod-top"><b>'+esc(L(m.n))+'</b>'+
      (s.rate===null?'<span class="pill neutral">'+esc(t('untested'))+'</span>':
       '<span class="pill '+(s.apt?'ok':'ko')+'">'+s.rate+'%</span>')+'</div>'+
      '<div class="bar thin"><i class="'+(s.rate===null?'':(s.apt?'ok':'ko'))+'" style="width:'+(s.rate===null?0:s.rate)+'%"></i></div>'+
      '<div class="mod-meta"><span>'+esc(t('seen',{'%a':s.seen,'%b':s.pool}))+'</span><span>'+esc(S.lang==='ca'?'cal ≥':'necesitas ≥')+s.need+'%</span></div></div>';
  });
  html+='</div>';

  html+='<div class="sec-title"><h2>'+esc(t('reinforce'))+'</h2></div>';
  if(!wt.length) html+='<div class="card pad"><p class="small muted">'+esc(t('noReinforce'))+'</p></div>';
  else{
    html+='<div class="stack" style="gap:9px">';
    wt.slice(0,10).forEach(function(x){
      html+='<button class="mod" data-sub="'+x.s+'"><div class="mod-top"><b>'+esc(L(SUBS[x.s]||{ca:x.s,es:x.s}))+'</b>'+
        '<span class="pill '+(x.rate<50?'ko':'warn')+'">'+x.rate+'%</span></div>'+
        '<div class="tiny muted">'+esc(L(MOD[x.m].n))+' · '+x.n+' '+esc(S.lang==='ca'?'respostes':'respuestas')+'</div></button>';
    });
    html+='</div>';
  }
  if(st.length){
    html+='<div class="sec-title"><h2>'+esc(t('strong'))+'</h2></div><div class="chips">';
    st.slice(0,12).forEach(function(x){ html+='<span class="chip" style="color:var(--ok)">'+IC.check.replace('<svg','<svg style="width:12px;height:12px"')+esc(L(SUBS[x.s]||{ca:x.s,es:x.s}))+'</span>'; });
    html+='</div>';
  }
  html+='</div>';
  app.innerHTML=html;
  app.querySelectorAll('[data-sub]').forEach(function(el){
    el.onclick=function(){ var s=el.dataset.sub; startSession({mode:'sub',pool:BYSUB[s]||[],n:S.len,title:L(SUBS[s])}); };
  });
}

/* ---------------- MAPA EIXAMPLE (prova pilot) ---------------- */
var EIXVIEW = { mode:'explore', quizStreak:0, quizTotal:0, activeCats:null };
var EIX_CAT_COLOR = { monument:'#e8a020', museu:'#3b82c4', hospital:'#d64550', hotel:'#9b6fd1',
  teatre:'#2f9e6e', cinema:'#2f9e6e', cultura:'#3b82c4', comerc:'#c99a1f', edifici:'#8b94a3',
  parc:'#4c9a4c', transport:'#2f80c0', mercat:'#c99a1f' };
function eixCatLabel(c){ return t('cat'+c.charAt(0).toUpperCase()+c.slice(1)); }
function eixDetail(html){
  var sh=document.getElementById('sheet');
  sh.querySelector('.panel').innerHTML='<div class="grip"></div>'+html+
    '<button class="btn ghost" id="eix-close" style="margin-top:14px">'+esc(t('ok'))+'</button>';
  sh.classList.add('on');
  document.getElementById('eix-close').onclick=closeSheet;
}
function viewEixMap(){
  var D=window.EIXAMPLE, POIS=window.EIXAMPLE_POIS;
  if(!D || !POIS){ go('home'); return; }
  var verticals=D.verticals.slice().sort(function(a,b){return a.order-b.order;});
  var horizontals=D.horizontals.slice().sort(function(a,b){return a.order-b.order;});
  if(!EIXVIEW.activeCats){
    EIXVIEW.activeCats={};
    POIS.forEach(function(p){ EIXVIEW.activeCats[p.cat]=true; });
  }

  var html='<div class="wrap stack fade">'+
    '<div><h1 style="margin-bottom:2px">'+esc(t('eixMap'))+'</h1>'+
    '<p class="tiny muted">'+esc(t('beta'))+' · '+esc(t('eixMapD'))+'</p></div>'+
    '<div class="tabs"><button data-eixmode="explore" class="'+(EIXVIEW.mode==='explore'?'on':'')+'">'+esc(t('eixExplore'))+'</button>'+
    '<button data-eixmode="lesson" class="'+(EIXVIEW.mode==='lesson'?'on':'')+'">'+esc(t('eixLesson'))+'</button>'+
    '<button data-eixmode="quiz" class="'+(EIXVIEW.mode==='quiz'?'on':'')+'">'+esc(t('eixTest'))+'</button>'+
    '<button data-eixmode="itin" class="'+(EIXVIEW.mode==='itin'?'on':'')+'">'+esc(t('eixItin'))+'</button></div>'+
    '<div id="eix-body"></div>'+
  '</div>';
  app.innerHTML=html;
  app.querySelectorAll('[data-eixmode]').forEach(function(b){
    b.onclick=function(){ EIXVIEW.mode=b.dataset.eixmode; viewEixMap(); };
  });

  var body=document.getElementById('eix-body');
  if(EIXVIEW.mode==='lesson'){ eixRenderLesson(body, verticals); return; }
  if(EIXVIEW.mode==='quiz'){ eixRenderQuiz(body, verticals); return; }
  if(EIXVIEW.mode==='itin'){ eixRenderItin(body); return; }
  eixRenderExplore(body, D, verticals, horizontals, POIS);
}
function eixBuildSvg(verticals, horizontals, D){
  var W=verticals.length, colW=36, padL=92;
  var maxHName=horizontals.reduce(function(m,hh){return Math.max(m,(hh.name||'').length);},0);
  var padR=30+maxHName*6.1; /* prou espai perquè els noms de carrers horitzontals no es tallin */
  var rowH=34, padT=30, padB=26;
  var gridW=padL+(W-1)*colW+padR, gridH=padT+(horizontals.length-1)*rowH+padB;
  function vx(order){ var i=verticals.findIndex(function(v){return v.order===order;}); return padL+i*colW; }
  var ns='http://www.w3.org/2000/svg';
  function el(tag,attrs){ var e=document.createElementNS(ns,tag); for(var k in attrs) e.setAttribute(k,attrs[k]); return e; }
  var svg=el('svg',{viewBox:'0 0 '+gridW+' '+gridH});
  var hLines={}, hLabels={};
  horizontals.forEach(function(hh,i){
    var y=padT+i*rowH;
    var x0=hh.side==='dreta'? vx(17):padL;
    var x1=hh.side==='esquerra'? vx(16):(padL+(W-1)*colW);
    var line=el('line',{x1:x0,y1:y,x2:x1,y2:y,class:'eixline-h','data-id':hh.id});
    svg.appendChild(line); hLines[hh.id]=line;
    var lbl=el('text',{x:x1+6,y:y+3,class:'eixlabel-h','data-id':hh.id});
    lbl.textContent=hh.name; svg.appendChild(lbl); hLabels[hh.id]=lbl;
  });
  var vLines={};
  verticals.forEach(function(v,i){
    var x=padL+i*colW;
    var line=el('line',{x1:x,y1:padT,x2:x,y2:padT+(horizontals.length-1)*rowH,class:'eixline-v','data-id':v.id});
    svg.appendChild(line); vLines[v.id]=line;
  });
  var diagSpecs=[0.06,0.16,0.30,0.50,0.68,0.20,0.62,0.80,0.90];
  var diagGroup=el('g',{'class':'eix-diaggroup'});
  D.diagonals.forEach(function(dg,i){
    var f=diagSpecs[i]!==undefined? diagSpecs[i]:(i/D.diagonals.length);
    var xTop=padL+f*(W-1)*colW;
    diagGroup.appendChild(el('line',{x1:xTop-36,y1:padT-2,x2:xTop+36,y2:padT+(horizontals.length-1)*rowH+2,class:'eixdiag'}));
  });
  svg.appendChild(diagGroup);
  return {svg:svg, vx:vx, vLines:vLines, hLines:hLines, hLabels:hLabels, diagGroup:diagGroup, gridW:gridW, gridH:gridH, rowH:rowH, padT:padT, horizontals:horizontals};
}
function eixRenderExplore(body, D, verticals, horizontals, POIS){
  var built=eixBuildSvg(verticals, horizontals, D);
  var svg=built.svg;
  var maxVName=verticals.reduce(function(m,v){return Math.max(m,(v.name||'').length);},0);
  var headerH=Math.min(150, Math.max(56, 16+maxVName*6.0)); /* prou alt perquè el nom més llarg no es talli (angle -72°) */
  svg.style.display='block'; svg.style.width='100%'; svg.style.height='100%'; svg.style.touchAction='none';
  var poiGroup=document.createElementNS('http://www.w3.org/2000/svg','g');
  var poiSlot={}, placements=[];
  POIS.forEach(function(p){
    var v=verticals.find(function(vv){return vv.id===p.near;});
    if(!v) return;
    var hIdx=horizontals.findIndex(function(hh){return hh.id===p.nearH;});
    if(hIdx<0) hIdx=0;
    var x=built.vx(v.order);
    var y=built.padT+hIdx*built.rowH;
    /* si dos punts cauen exactament al mateix encreuament, separa'ls una mica perquè no es tapin */
    var key=v.id+'|'+hIdx;
    var slot=poiSlot[key]||0; poiSlot[key]=slot+1;
    if(slot>0){ x+=(slot%2===1? 1:-1)*Math.ceil(slot/2)*14; }
    placements.push({p:p, x:x, y:y, slot:slot});
  });
  /* si el nom (en diagonal amunt-dreta) passaria molt a prop d'un altre punt — típic
   * quan dos POI són a la mateixa columna en files consecutives — es capgira: el nom
   * surt avall-esquerra i s'hi ancora per l'última lletra en lloc de la primera.
   * També es capgira si, anant amunt, el nom sortiria per damunt del marge superior
   * del mapa (les files 0 i 1 no tenen prou espai a sobre per a noms llargs). */
  placements.forEach(function(pl){
    var collides=placements.some(function(other){
      if(other===pl) return false;
      var dx=other.x-pl.x, dy=other.y-pl.y;
      return dy<-6 && dy>-46 && Math.abs(dx)<66;
    });
    var estThrow=pl.p.name.length*5.2*0.82; /* alçada aproximada del nom en diagonal */
    var wouldClipTop=(pl.y-estThrow)<6;
    pl.flip=collides||wouldClipTop;
  });
  placements.forEach(function(pl){
    var p=pl.p, x=pl.x, y=pl.y, slot=pl.slot, flip=pl.flip;
    var visible=EIXVIEW.activeCats[p.cat]!==false;
    var ring=document.createElementNS('http://www.w3.org/2000/svg','circle');
    ring.setAttribute('cx',x); ring.setAttribute('cy',y); ring.setAttribute('r',6);
    ring.setAttribute('class','eixpoi-ring'); ring.setAttribute('stroke',EIX_CAT_COLOR[p.cat]||'#888'); ring.setAttribute('data-cat',p.cat);
    var c=document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',x); c.setAttribute('cy',y); c.setAttribute('r',4);
    c.setAttribute('class','eixpoi'); c.setAttribute('fill',EIX_CAT_COLOR[p.cat]||'#888'); c.setAttribute('data-cat',p.cat);
    var lbl=document.createElementNS('http://www.w3.org/2000/svg','text');
    /* si comparteix encreuament amb un altre punt, allunya una mica el nom perquè
     * no es solapin entre ells; en diagonal (com els noms de carrer) per estalviar espai */
    var lx=flip? x-6:x+6, ly=(flip? y-3:y+3)+(slot%2===1? 9:0);
    lbl.setAttribute('x',lx); lbl.setAttribute('y',ly);
    lbl.setAttribute('text-anchor', flip?'end':'start');
    lbl.setAttribute('transform','rotate(-55 '+lx+' '+ly+')');
    lbl.setAttribute('class','eixpoi-label'); lbl.setAttribute('data-cat',p.cat);
    lbl.textContent=p.name;
    if(!visible){ ring.style.display='none'; c.style.display='none'; lbl.style.display='none'; }
    c.addEventListener('click',function(e){ e.stopPropagation(); eixDetail('<b style="display:block;margin-bottom:6px;font-size:1rem">'+esc(p.name)+'</b>'+
      '<div class="tiny muted">'+esc(p.addr)+'</div><span class="pill" style="margin-top:8px;background:'+(EIX_CAT_COLOR[p.cat]||'#888')+';color:#1b1405;font-weight:700">'+esc(eixCatLabel(p.cat))+'</span>'); });
    poiGroup.appendChild(ring); poiGroup.appendChild(c); poiGroup.appendChild(lbl);
  });
  svg.appendChild(poiGroup);

  function clearHi(){
    Object.values(built.vLines).forEach(function(l){l.classList.remove('hi');});
    Object.values(vLabels).forEach(function(l){l.classList.remove('hi');});
    Object.values(built.hLines).forEach(function(l){l.classList.remove('hi');});
    Object.values(built.hLabels).forEach(function(l){l.classList.remove('hi');});
  }
  verticals.forEach(function(v){
    built.vLines[v.id].addEventListener('click',function(){
      clearHi(); built.vLines[v.id].classList.add('hi'); vLabels[v.id].classList.add('hi');
      var pois=POIS.filter(function(p){return p.near===v.id;});
      eixDetail('<b style="display:block;margin-bottom:6px;font-size:1rem">'+esc(v.name)+'</b>'+
        (v.from? '<div>'+esc(t('eixFrom'))+' <b>'+esc(v.from)+'</b> '+esc(t('eixTo'))+' <b>'+esc(v.to||'?')+'</b></div>':'')+
        (v.sentit? '<span class="pill neutral" style="margin-top:6px">'+esc(v.sentit)+'</span>':'')+
        (v.notes? v.notes.map(function(n){return '<div class="tiny muted" style="margin-top:6px">· '+esc(n)+'</div>';}).join(''):'')+
        (pois.length? '<div class="tiny muted" style="margin-top:10px"><b style="color:var(--fg)">'+esc(t('eixNear'))+'</b><br>'+esc(pois.map(function(p){return p.name;}).join(', '))+'</div>':''));
    });
  });
  horizontals.forEach(function(hh){
    built.hLines[hh.id].addEventListener('click',function(){
      clearHi(); built.hLines[hh.id].classList.add('hi'); built.hLabels[hh.id].classList.add('hi');
      eixDetail('<b style="display:block;margin-bottom:6px;font-size:1rem">'+esc(hh.name)+'</b>'+
        '<span class="pill neutral">'+esc(t('eixSide'))+': '+(hh.side==='both'? esc(t('eixSideBoth')):esc(hh.side))+'</span>'+
        (hh.notes? hh.notes.map(function(n){return '<div class="tiny muted" style="margin-top:6px">· '+esc(n)+'</div>';}).join(''):''));
    });
  });

  var catBar='';
  Object.keys(EIX_CAT_COLOR).forEach(function(c){
    if(!POIS.some(function(p){return p.cat===c;})) return;
    var on=EIXVIEW.activeCats[c];
    catBar+='<button class="chip'+(on?' on':'')+'" data-cat="'+c+'" style="'+(on?'background:'+EIX_CAT_COLOR[c]+';border-color:'+EIX_CAT_COLOR[c]+';color:#1b1405':'')+'">'+
      '<span class="dot" style="background:'+EIX_CAT_COLOR[c]+'"></span>'+esc(eixCatLabel(c))+'</button>';
  });

  body.innerHTML=
    '<div class="row" style="gap:8px;overflow-x:auto;padding:2px 2px 8px;flex-wrap:nowrap">'+
      '<button class="chip on" data-toggle="names">'+esc(t('eixNames'))+'</button>'+
      '<button class="chip on" data-toggle="diag">'+esc(t('eixDiag'))+'</button>'+
      '<button class="chip on" data-toggle="poi">'+esc(t('eixPoi'))+'</button>'+
      '<button class="chip" id="eix-barris">'+esc(t('eixBarris'))+'</button>'+
    '</div>'+
    '<div class="row" id="eix-catbar" style="gap:8px;overflow-x:auto;padding:0 2px 10px;flex-wrap:nowrap">'+catBar+'</div>'+
    '<div class="card" id="eix-mapcard" style="overflow:hidden;padding:0">'+
      '<div id="eix-header" style="position:relative;height:'+headerH+'px;border-bottom:1px solid var(--line);overflow:hidden"></div>'+
      '<div id="eix-stage" style="position:relative;overflow:hidden;height:60vh;padding:0;touch-action:none">'+
        '<div style="position:absolute;right:10px;bottom:10px;z-index:2;display:flex;flex-direction:column;gap:6px">'+
          '<button class="iconbtn" id="eix-zoomin" style="background:var(--bg2)">+</button>'+
          '<button class="iconbtn" id="eix-zoomout" style="background:var(--bg2)">−</button>'+
          '<button class="iconbtn" id="eix-zoomfit" style="background:var(--bg2);font-size:.7rem">'+esc(t('eixFit'))+'</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  var stage=document.getElementById('eix-stage');
  var headerEl=document.getElementById('eix-header');
  stage.appendChild(svg);
  /* Capçalera dels noms verticals com a HTML normal (no SVG): així la mida del
   * text és sempre fixa i llegible, independent del zoom del mapa — només cal
   * recalcular la posició horitzontal de cada etiqueta a cada pan/zoom. */
  var vLabels={};
  verticals.forEach(function(v){
    var d=document.createElement('div');
    d.className='eix-vlabel'; d.textContent=v.name;
    headerEl.appendChild(d); vLabels[v.id]=d;
  });
  var headerW=headerEl.getBoundingClientRect().width||300;
  function layoutHeader(vx0, vw0){
    headerW=headerEl.getBoundingClientRect().width||headerW;
    verticals.forEach(function(v){
      var px=(built.vx(v.order)-vx0)/vw0*headerW;
      vLabels[v.id].style.left=px+'px';
    });
  }
  eixAttachPanZoom(svg, built.gridW, built.gridH, stage, function(vx0, vw0, ratio){
    poiGroup.classList.toggle('eix-poi-zoomed', ratio<0.55);
    layoutHeader(vx0, vw0);
  });

  document.getElementById('eix-barris').onclick=function(){
    eixDetail('<b style="display:block;margin-bottom:8px;font-size:1rem">'+esc(t('eixBarrisTitle'))+'</b>'+
      D.barris.map(function(b){return '<span class="pill neutral" style="margin:3px 4px 0 0">'+esc(b)+'</span>';}).join(''));
  };
  body.querySelectorAll('[data-toggle]').forEach(function(chip){
    chip.onclick=function(){
      var key=chip.dataset.toggle, on=!chip.classList.contains('on');
      chip.classList.toggle('on',on);
      if(key==='names'){ Object.values(vLabels).concat(Object.values(built.hLabels)).forEach(function(l){ l.style.display=on?'':'none'; }); }
      else if(key==='diag'){ built.diagGroup.style.display=on?'':'none'; }
      else if(key==='poi'){ poiGroup.style.display=on?'':'none'; }
    };
  });
  body.querySelectorAll('#eix-catbar [data-cat]').forEach(function(chip){
    chip.onclick=function(){
      var c=chip.dataset.cat; EIXVIEW.activeCats[c]=!EIXVIEW.activeCats[c];
      var on=EIXVIEW.activeCats[c];
      chip.classList.toggle('on',on);
      chip.style.background=on?EIX_CAT_COLOR[c]:''; chip.style.borderColor=on?EIX_CAT_COLOR[c]:''; chip.style.color=on?'#1b1405':'';
      poiGroup.querySelectorAll('[data-cat="'+c+'"]').forEach(function(n){ n.style.display=on?'':'none'; });
    };
  });
  svg.addEventListener('click',function(e){ if(e.target===svg) clearHi(); });
}
/* Pan/zoom tipus Google Maps sobre el propi mapa (viewBox), no sobre la pàgina.
 * touch-action:none evita que el navegador faci zoom de pàgina en fer pinch. */
function eixAttachPanZoom(svg, gridW, gridH, container, onZoom){
  var vx=0, vy=0, vw=gridW, vh=gridH;
  var minVw=gridW*0.16, maxVw=gridW;
  function apply(){ svg.setAttribute('viewBox', vx+' '+vy+' '+vw+' '+vh); if(onZoom) onZoom(vx, vw, vw/gridW); }
  function clamp(){
    if(vw<minVw) vw=minVw; if(vw>maxVw) vw=maxVw;
    var r=container.getBoundingClientRect();
    var aspect=(r.height||1)/(r.width||1);
    vh=vw*aspect;
    if(vx<0) vx=0; if(vx>gridW-vw) vx=Math.max(0,gridW-vw);
    if(vy<0) vy=0; if(vy>gridH-vh) vy=Math.max(0,gridH-vh);
  }
  function toUser(clientX,clientY){
    var r=svg.getBoundingClientRect();
    return { x:vx+(clientX-r.left)/(r.width||1)*vw, y:vy+(clientY-r.top)/(r.height||1)*vh };
  }
  function zoomAt(factor, clientX, clientY){
    var before=toUser(clientX,clientY);
    vw*=factor; clamp();
    var after=toUser(clientX,clientY);
    vx+=(before.x-after.x); vy+=(before.y-after.y);
    clamp(); apply();
  }
  clamp(); apply();

  var pts={}, THRESH=4;
  function dist(a,b){ return Math.hypot(a.x-b.x,a.y-b.y); }
  svg.addEventListener('pointerdown',function(e){
    pts[e.pointerId]={x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,dragging:false,captured:false};
  });
  svg.addEventListener('pointermove',function(e){
    var p=pts[e.pointerId]; if(!p) return;
    var ids=Object.keys(pts);
    if(ids.length===1){
      if(!p.dragging){
        if(Math.abs(e.clientX-p.startX)>THRESH || Math.abs(e.clientY-p.startY)>THRESH){ p.dragging=true; try{svg.setPointerCapture(e.pointerId);}catch(err){} }
        else return;
      }
      var r=svg.getBoundingClientRect();
      vx-=(e.clientX-p.x)/(r.width||1)*vw; vy-=(e.clientY-p.y)/(r.height||1)*vh;
      p.x=e.clientX; p.y=e.clientY;
      clamp(); apply();
    } else if(ids.length===2){
      var otherId=ids[0]===String(e.pointerId)?ids[1]:ids[0];
      var other=pts[otherId];
      if(!p.dragging){ p.dragging=true; try{svg.setPointerCapture(e.pointerId);}catch(err){} }
      var prevDist=dist(p,other), newSelf={x:e.clientX,y:e.clientY}, newDist=dist(newSelf,other);
      var mid={x:(newSelf.x+other.x)/2,y:(newSelf.y+other.y)/2};
      if(prevDist>0 && newDist>0) zoomAt(prevDist/newDist, mid.x, mid.y);
      p.x=e.clientX; p.y=e.clientY;
    }
  });
  function endPt(e){ delete pts[e.pointerId]; }
  svg.addEventListener('pointerup',endPt);
  svg.addEventListener('pointercancel',endPt);
  svg.addEventListener('pointerleave',endPt);
  svg.addEventListener('wheel',function(e){
    e.preventDefault();
    zoomAt(Math.pow(1.0016, e.deltaY), e.clientX, e.clientY);
  },{passive:false});
  svg.addEventListener('dblclick',function(e){ zoomAt(1/1.6, e.clientX, e.clientY); });

  function zoomStep(factor){ var r=container.getBoundingClientRect(); zoomAt(factor, r.left+r.width/2, r.top+r.height/2); }
  var zin=document.getElementById('eix-zoomin'); if(zin) zin.onclick=function(){ zoomStep(1/1.4); };
  var zout=document.getElementById('eix-zoomout'); if(zout) zout.onclick=function(){ zoomStep(1.4); };
  var zfit=document.getElementById('eix-zoomfit'); if(zfit) zfit.onclick=function(){ vw=gridW; vx=0; vy=0; clamp(); apply(); };
}
function eixRenderLesson(body, verticals){
  var CHUNK=6;
  var chunks=[]; for(var i=0;i<verticals.length;i+=CHUNK) chunks.push(verticals.slice(i,i+CHUNK));
  if(EIXVIEW.lessonIdx===undefined) EIXVIEW.lessonIdx=0;
  var idx=EIXVIEW.lessonIdx;
  var htm='<p class="tiny muted" style="margin-bottom:12px">'+esc(t('eixLessonIntro'))+' '+esc(t('eixBlock'))+' '+(idx+1)+' '+esc(t('eixOf'))+' '+chunks.length+'.</p>';
  chunks.forEach(function(chunk,ci){
    if(ci>idx) return;
    htm+='<div class="card pad" style="margin-bottom:10px"><b class="tiny muted" style="text-transform:uppercase;letter-spacing:.04em">'+esc(t('eixBlock'))+' '+(ci+1)+'</b><div style="margin-top:8px">'+
      chunk.map(function(v){return '<span class="pill neutral" style="margin:3px 4px 0 0;font-size:.84rem;padding:6px 11px">'+esc(v.name)+'</span>';}).join('')+'</div></div>';
  });
  if(idx<chunks.length-1){
    htm+='<button class="btn primary" id="eix-next">'+esc(t('eixGotIt'))+'</button>';
  } else {
    htm+='<div class="card pad" style="margin-bottom:10px">'+esc(t('eixLessonDone'))+'</div>'+
      '<button class="btn" id="eix-restart">'+esc(t('eixRestart'))+'</button>';
  }
  body.innerHTML=htm;
  var nx=document.getElementById('eix-next'); if(nx) nx.onclick=function(){ EIXVIEW.lessonIdx++; eixRenderLesson(body,verticals); };
  var rs=document.getElementById('eix-restart'); if(rs) rs.onclick=function(){ EIXVIEW.lessonIdx=0; eixRenderLesson(body,verticals); };
}
function eixRenderQuiz(body, verticals){
  body.innerHTML=
    '<div id="eix-quizmap" class="card" style="overflow:auto;padding:10px;margin-bottom:14px"></div>'+
    '<div class="center" style="font-weight:700;margin-bottom:6px" id="eix-qtext"></div>'+
    '<div class="tiny muted center" style="margin-bottom:12px" id="eix-score"></div>'+
    '<div class="stack" style="gap:8px" id="eix-opts"></div>';
  var mapEl=document.getElementById('eix-quizmap');
  var built=eixBuildSvg(verticals, verticals.length? window.EIXAMPLE.horizontals:[], window.EIXAMPLE);
  var scale=Math.min(1, (Math.min(window.innerWidth,480)-32)/built.gridW);
  built.svg.setAttribute('width', Math.round(built.gridW*scale));
  built.svg.setAttribute('height', Math.round(built.gridH*scale));
  mapEl.appendChild(built.svg);

  function scoreline(){ return t('eixStreak')+': '+EIXVIEW.quizStreak+' · '+t('eixAsked')+': '+EIXVIEW.quizTotal; }
  document.getElementById('eix-score').textContent=scoreline();

  function newQuestion(){
    var opts=document.getElementById('eix-opts'); opts.innerHTML='';
    Object.values(built.vLines).forEach(function(l){ l.classList.remove('hi'); });
    var target=verticals[Math.floor(Math.random()*verticals.length)];
    built.vLines[target.id].classList.add('hi');
    document.getElementById('eix-qtext').textContent=t('eixQ');
    var pool=verticals.filter(function(v){return v.id!==target.id;});
    var wrongs=[]; while(wrongs.length<3 && pool.length){ var i2=Math.floor(Math.random()*pool.length); wrongs.push(pool.splice(i2,1)[0]); }
    var choices=wrongs.concat([target]).sort(function(){return Math.random()-.5;});
    choices.forEach(function(c){
      var b=document.createElement('button'); b.className='btn sm'; b.style.width='100%'; b.textContent=c.name;
      b.onclick=function(){
        EIXVIEW.quizTotal++;
        if(c.id===target.id){ b.style.background='var(--ok)'; b.style.borderColor='var(--ok)'; b.style.color='#04241a'; EIXVIEW.quizStreak++; }
        else { b.style.background='var(--ko)'; b.style.borderColor='var(--ko)'; b.style.color='#2a0509'; EIXVIEW.quizStreak=0;
          Array.from(opts.children).forEach(function(o){ if(o.textContent===target.name){ o.style.background='var(--ok)'; o.style.borderColor='var(--ok)'; o.style.color='#04241a'; } });
        }
        document.getElementById('eix-score').textContent=scoreline();
        Array.from(opts.children).forEach(function(o){ o.disabled=true; });
        setTimeout(newQuestion,900);
      };
      opts.appendChild(b);
    });
  }
  newQuestion();
}
function eixRenderItin(body){
  var EXITS=window.EIX_EXITS||[], ROADS=window.EIX_CARRETERES||[];
  body.innerHTML=
    '<p class="tiny muted" style="margin-bottom:14px">'+esc(t('eixItinIntro'))+'</p>'+
    '<div class="center" style="font-weight:700;margin-bottom:6px" id="eix-qtext"></div>'+
    '<div class="tiny muted center" style="margin-bottom:12px" id="eix-score"></div>'+
    '<div class="stack" style="gap:8px" id="eix-opts"></div>';
  function scoreline(){ return t('eixStreak')+': '+EIXVIEW.quizStreak+' · '+t('eixAsked')+': '+EIXVIEW.quizTotal; }
  document.getElementById('eix-score').textContent=scoreline();

  function answer(btn, ok, correctText, opts){
    EIXVIEW.quizTotal++;
    if(ok){ btn.style.background='var(--ok)'; btn.style.borderColor='var(--ok)'; btn.style.color='#04241a'; EIXVIEW.quizStreak++; }
    else { btn.style.background='var(--ko)'; btn.style.borderColor='var(--ko)'; btn.style.color='#2a0509'; EIXVIEW.quizStreak=0;
      Array.from(opts.children).forEach(function(o){ if(o.textContent===correctText){ o.style.background='var(--ok)'; o.style.borderColor='var(--ok)'; o.style.color='#04241a'; } });
    }
    document.getElementById('eix-score').textContent=scoreline();
    Array.from(opts.children).forEach(function(o){ o.disabled=true; });
    setTimeout(newQuestion,900);
  }
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t2=a[i]; a[i]=a[j]; a[j]=t2; } return a; }

  function newQuestion(){
    var opts=document.getElementById('eix-opts'); opts.innerHTML='';
    var qtype = Math.random()<0.5 && EXITS.length ? 'exit' : 'road';
    if(qtype==='exit'){
      var named=EXITS.filter(function(e){return e.name;});
      var target=named[Math.floor(Math.random()*named.length)];
      document.getElementById('eix-qtext').textContent=t('eixItinQExit',{'%n':target.name,'%r':target.ronda});
      var pool=EXITS.filter(function(e){return e.n!==target.n;});
      var wrongs=shuffle(pool).slice(0,3);
      var choices=shuffle(wrongs.concat([target]));
      choices.forEach(function(c){
        var b=document.createElement('button'); b.className='btn sm'; b.style.width='100%';
        b.textContent=t('eixItinExit')+' '+c.n+' ('+c.ronda+')';
        b.onclick=function(){ answer(b, c.n===target.n, t('eixItinExit')+' '+target.n+' ('+target.ronda+')', opts); };
        opts.appendChild(b);
      });
    } else {
      var road=ROADS[Math.floor(Math.random()*ROADS.length)];
      var correctCity=road.municipis[Math.floor(Math.random()*road.municipis.length)];
      document.getElementById('eix-qtext').textContent=t('eixItinQRoad',{'%c':road.code});
      var others=ROADS.filter(function(r){return r.code!==road.code;});
      var wrongCities=[];
      shuffle(others).forEach(function(r){
        if(wrongCities.length>=3) return;
        var candidate=r.municipis[Math.floor(Math.random()*r.municipis.length)];
        if(road.municipis.indexOf(candidate)===-1 && wrongCities.indexOf(candidate)===-1) wrongCities.push(candidate);
      });
      var cityChoices=shuffle(wrongCities.concat([correctCity]));
      cityChoices.forEach(function(city){
        var b=document.createElement('button'); b.className='btn sm'; b.style.width='100%'; b.textContent=city;
        b.onclick=function(){ answer(b, city===correctCity, correctCity, opts); };
        opts.appendChild(b);
      });
    }
  }
  newQuestion();
}

/* ---------------- SETTINGS ---------------- */
function openSettings(){
  var sh=document.getElementById('sheet');
  sh.querySelector('.panel').innerHTML=
    '<div class="grip"></div><h2 style="margin-bottom:14px">'+esc(t('settings'))+'</h2>'+
    '<div class="stack">'+
      '<button class="btn" id="s-plan">'+IC.calendar+'<span>'+esc(t('planTitle'))+'</span></button>'+
      '<div><div class="small" style="font-weight:650;margin-bottom:6px">'+esc(t('srs'))+'</div>'+
        '<div class="tabs"><button data-srs="1" class="'+(S.srs?'on':'')+'">'+esc(S.lang==='ca'?'Activada':'Activada')+'</button>'+
        '<button data-srs="0" class="'+(!S.srs?'on':'')+'">'+esc(S.lang==='ca'?'Atzar pur':'Azar puro')+'</button></div>'+
        '<div class="tiny muted">'+esc(t('srsD'))+'</div></div>'+
      '<div><div class="small" style="font-weight:650;margin-bottom:6px">'+esc(t('sessionLen'))+'</div>'+
        '<div class="tabs">'+[10,15,20,30].map(function(n){
          return '<button data-len="'+n+'" class="'+(S.len===n?'on':'')+'">'+n+'</button>';}).join('')+'</div></div>'+
      '<div><div class="small" style="font-weight:650;margin-bottom:6px">'+esc(t('theme'))+'</div>'+
        '<div class="tabs">'+[['auto',t('auto')],['light',t('light')],['dark',t('dark')]].map(function(x){
          return '<button data-th="'+x[0]+'" class="'+(S.theme===x[0]?'on':'')+'">'+esc(x[1])+'</button>';}).join('')+'</div></div>'+
      '<div><div class="small" style="font-weight:650;margin-bottom:8px">'+esc(t('backup'))+'</div>'+
        '<div class="stack" style="gap:8px">'+
        '<button class="btn" id="s-exp">'+IC.down+'<span>'+esc(t('exportBtn'))+'</span></button>'+
        '<button class="btn" id="s-imp">'+IC.up+'<span>'+esc(t('importBtn'))+'</span></button></div>'+
        '<div class="tiny muted" style="margin-top:6px">'+esc(t('exportD'))+'</div></div>'+
      '<div class="card pad"><div class="small" style="font-weight:650;margin-bottom:4px">'+esc(t('bank'))+'</div>'+
        '<div class="tiny muted">'+DB.length+' '+esc(S.lang==='ca'?'preguntes · català i castellà':'preguntas · catalán y castellano')+'</div>'+
        '<div class="tiny muted" style="margin-top:8px">'+esc(t('aboutT'))+'</div></div>'+
      '<div class="card pad" id="s-legal"><div class="small" style="font-weight:650;margin-bottom:4px">'+esc(t('legal'))+'</div>'+
        '<div class="tiny muted">'+esc(t('legalT'))+'</div></div>'+
      '<div class="card pad" id="s-local"><div class="small" style="font-weight:650;margin-bottom:4px">'+esc(t('localOnly'))+'</div>'+
        '<div class="tiny muted">'+esc(t('localWarn'))+'</div></div>'+
      '<button class="btn danger" id="s-reset">'+esc(t('reset'))+'</button>'+
      '<button class="btn ghost" id="s-close">'+esc(t('ok'))+'</button>'+
    '</div>'+
    '<input type="file" id="s-file" accept="application/json,.json" style="display:none">';
  sh.classList.add('on');

  sh.querySelectorAll('[data-srs]').forEach(function(b){ b.onclick=function(){ S.srs=b.dataset.srs==='1'; save(); openSettings(); }; });
  sh.querySelectorAll('[data-len]').forEach(function(b){ b.onclick=function(){ S.len=parseInt(b.dataset.len,10); save(); openSettings(); }; });
  sh.querySelectorAll('[data-th]').forEach(function(b){ b.onclick=function(){ S.theme=b.dataset.th; save(); applyTheme(); openSettings(); }; });
  document.getElementById('s-close').onclick=closeSheet;
  document.getElementById('s-plan').onclick=function(){ closeSheet(); go('planSetup'); };
  document.getElementById('s-exp').onclick=doExport;
  document.getElementById('s-imp').onclick=function(){ document.getElementById('s-file').click(); };
  document.getElementById('s-file').onchange=doImport;
  document.getElementById('s-reset').onclick=function(){
    ask(t('resetAsk'),t('reset'),function(){ S.p={}; S.hist=[]; S.streak=0; S.day=null; S.lastMock=null; S.lastLevel=null; S.cur=null; S.view=null; S.plan=null; S.planPromptDismissed=false; SESSION=null; save(); go('home'); },true);
  };
}
function closeSheet(){ document.getElementById('sheet').classList.remove('on'); }
/* in-app confirmation (window.confirm is blocked inside some embedded / home-screen views) */
function ask(msg,okLabel,onYes,danger){
  var sh=document.getElementById('sheet');
  sh.querySelector('.panel').innerHTML='<div class="grip"></div>'+
    '<p style="font-size:1rem;line-height:1.5;margin:4px 0 18px">'+esc(msg)+'</p>'+
    '<div class="row" style="gap:8px;align-items:stretch">'+
      '<button class="btn" id="ask-no" style="flex:1">'+esc(t('cancel'))+'</button>'+
      '<button class="btn '+(danger?'danger':'primary')+'" id="ask-yes" style="flex:1">'+esc(okLabel)+'</button></div>';
  sh.classList.add('on');
  document.getElementById('ask-no').onclick=closeSheet;
  document.getElementById('ask-yes').onclick=function(){ closeSheet(); onYes(); };
}
function doExport(){
  var json=JSON.stringify({v:1,exported:new Date().toISOString(),state:S},null,1);
  var name='progres-taxi-amb-'+today()+'.json';
  try{
    var blob=new Blob([json],{type:'application/json'});
    var a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download=name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){URL.revokeObjectURL(a.href);},1500);
    toast(t('exported'));
  }catch(e){ toast(t('errImport')); }
}function doImport(e){
  var f=e.target.files&&e.target.files[0]; if(!f) return;
  var fr=new FileReader();
  fr.onload=function(){
    try{
      var o=JSON.parse(fr.result); var st=o.state||o;
      if(!st || typeof st!=='object' || !st.p) throw 0;
      for(var k in st){ S[k]=st[k]; }
      save(); applyTheme(); closeSheet(); go('home'); toast(t('imported'));
    }catch(err){ toast(t('errImport')); }
  };
  fr.readAsText(f);
}

/* reopen where the user left off: paused session, or last screen */
function startView(){
  if(S.cur && S.cur.ids && !S.cur.paused){ resumeSession(); if(SESSION) return; }
  var v=S.view;
  if(v && v.name && (v.name!=='cat' || MOD[v.arg])){ VIEW={name:v.name,arg:v.arg}; render(); }
  else { VIEW={name:'home'}; render(); }
}
/* ---------------- first-visit install tip ---------------- */
var TIPKEY='taxiamb.v1.tip';
function isInstalled(){
  try{ if(window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true; }catch(e){}
  return window.navigator.standalone===true;
}
function tipDismissed(){ try{ return !!localStorage.getItem(TIPKEY); }catch(e){ return false; } }
function installTip(){
  if(isInstalled() || tipDismissed()) return '';
  return '<div class="card pad tip" id="install-tip">'+
    '<div class="small" style="font-weight:700;margin-bottom:6px">'+esc(t('installTitle'))+'</div>'+
    '<div class="tiny" style="line-height:1.5">'+esc(t('installIos'))+'</div>'+
    '<div class="tiny" style="line-height:1.5;margin-top:4px">'+esc(t('installAnd'))+'</div>'+
    '<div class="tiny muted" style="margin-top:6px">'+esc(t('installNote'))+'</div>'+
    '<button class="btn sm" id="tip-close" style="margin-top:10px">'+esc(t('close'))+'</button></div>';
}

/* ---------------- boot ---------------- */
function boot(){
  app=document.getElementById('app');
  topEl=document.getElementById('top');
  load(); applyTheme(); buildIndex();
  document.getElementById('sheet').querySelector('.scrim').onclick=closeSheet;
  document.addEventListener('click',function(e){
    if(e.target.closest && e.target.closest('#tip-close')){
      try{ localStorage.setItem(TIPKEY,'1'); }catch(err){}
      var el=document.getElementById('install-tip'); if(el) el.remove();
    }
  });
  var bootSaved=LOADED_SAVED;  /* timestamp stored at launch, before boot re-saved */
  var drawn=false;
  function draw(){ drawn=true; startView(); }
  /* adopt the IndexedDB copy when it is newer than what localStorage had (e.g. localStorage was cleared) */
  function adopt(js){
    if(!js) return false; var o; try{ o=JSON.parse(js); }catch(e){ return false; }
    if(!(o && o.p && (o.saved||0) > bootSaved)) return false;
    bootSaved=o.saved;
    applyState(o); applyTheme();
    if(!drawn || (!SESSION && VIEW.name==='home')){ SESSION=null; draw(); }
    return true;
  }
  /* IndexedDB is read before anything is written, and before the first screen when localStorage is empty */
  var first=idbGet().then(function(js){ adopt(js); }).then(function(){ IDB_HOLD=false; IDB_PEND=JSON.stringify(S); idbFlush(); });
  if(bootSaved) draw();
  else{
    /* nothing in localStorage: wait for the IndexedDB copy before drawing the first screen */
    var late=function(){ if(!drawn) draw(); };
    first.then(late,late); setTimeout(late,2500);
  }
  try{ if(navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function(){}); }catch(e){}
  /* save whenever the app is hidden or closed (updates the timer's elapsed time) */
  document.addEventListener('visibilitychange',function(){ if(document.visibilityState==='hidden'){ save(); idbFlush(); } });
  window.addEventListener('pagehide',function(){ save(); idbFlush(); });
  try{ if('serviceWorker' in navigator && location.protocol.indexOf('http')===0){ navigator.serviceWorker.register('sw.js').catch(function(){}); } }catch(e){}
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();

})();
