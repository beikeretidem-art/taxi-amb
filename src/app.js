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
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>'
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
  aboutT:{ca:'Preguntes elaborades a partir del manual del Curs Online Credencial del Taxi 2026 (Escola del Taxi Incrementa), el Reglament Metropolità del Taxi i les tarifes 2026. Funciona sense connexió.',es:'Preguntas elaboradas a partir del manual del Curso Online Credencial del Taxi 2026 (Escola del Taxi Incrementa), el Reglamento Metropolitano del Taxi y las tarifas 2026. Funciona sin conexión.'},
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
  progressNote:{ca:'El progrés puja quan encertes una pregunta diverses vegades separades en el temps.',es:'El progreso sube cuando aciertas una pregunta varias veces separadas en el tiempo.'}
};
function t(k,r){var s=(T[k]&&T[k][S.lang])||k; if(r){for(var p in r){s=s.split(p).join(r[p]);}} return s;}
function L(o){ return o? (o[S.lang]||o.ca||o.es||'') : ''; }

/* ---------------- storage ---------------- */
var KEY='taxiamb.v1';
var S = {lang:'ca', theme:'auto', srs:true, len:15, p:{}, day:null, streak:0, hist:[], lastMock:null, lastLevel:null};

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
  S.view = (n==='cats'||n==='stats'||n==='errors'||n==='cat') ? {name:n,arg:VIEW.arg} : null;
}
function save(){
  try{ snapSession(); snapView(); }catch(e){}
  S.saved=Date.now();
  var js; try{ js=JSON.stringify(S); }catch(e){ return; }
  try{ localStorage.setItem(KEY,js); }catch(e){}
  try{ localStorage.setItem(KEY+'.bak',js); }catch(e){}
  idbPut(js);
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
  app.querySelectorAll('[data-mod]').forEach(function(el){
    el.onclick=function(){ go('cat',el.dataset.mod); };
  });
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

/* ---------------- SETTINGS ---------------- */
function openSettings(){
  var sh=document.getElementById('sheet');
  sh.querySelector('.panel').innerHTML=
    '<div class="grip"></div><h2 style="margin-bottom:14px">'+esc(t('settings'))+'</h2>'+
    '<div class="stack">'+
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
  document.getElementById('s-exp').onclick=doExport;
  document.getElementById('s-imp').onclick=function(){ document.getElementById('s-file').click(); };
  document.getElementById('s-file').onchange=doImport;
  document.getElementById('s-reset').onclick=function(){
    ask(t('resetAsk'),t('reset'),function(){ S.p={}; S.hist=[]; S.streak=0; S.day=null; S.lastMock=null; S.lastLevel=null; S.cur=null; S.view=null; SESSION=null; save(); go('home'); },true);
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
