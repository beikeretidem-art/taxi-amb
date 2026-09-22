/* ===== MÒDUL: TARIFES (A) ===== */

q('tar','t-con',
'Què és la "baixada de bandera"?',
'¿Qué es la "bajada de bandera"?',
['L’import que es cobra per cada quilòmetre recorregut','La percepció que es produeix en acceptar el servei i posar en marxa el taxímetre','El preu mínim de qualsevol carrera de l’aeroport','El suplement per equipatge voluminós'],
['El importe que se cobra por cada kilómetro recorrido','La percepción que se produce al aceptar el servicio y poner en marcha el taxímetro','El precio mínimo de cualquier carrera del aeropuerto','El suplemento por equipaje voluminoso'],
1,
'La baixada de bandera es produeix amb l’acceptació del servei, quan es posa en marxa el taxímetre. Dona dret a un recorregut mínim en funció de la tarifa aplicada.',
'La bajada de bandera se produce con la aceptación del servicio, cuando se pone en marcha el taxímetro. Da derecho a un recorrido mínimo en función de la tarifa aplicada.',
'Manual · Tarifes, Conceptes (pàg. 5)');

q('tar','t-con',
'Què és la "velocitat frontera"?',
'¿Qué es la "velocidad frontera"?',
['La velocitat màxima permesa a un taxi dins de l’AMB','La velocitat a partir de la qual el taxímetre deixa de marcar per temps i comença a marcar per metres','La velocitat mitjana de la carrera per calcular el preu tancat','La velocitat a la qual salta el suplement nocturn'],
['La velocidad máxima permitida a un taxi dentro del AMB','La velocidad a partir de la cual el taxímetro deja de marcar por tiempo y empieza a marcar por metros','La velocidad media de la carrera para calcular el precio cerrado','La velocidad a la que salta el suplemento nocturno'],
1,
'La velocitat frontera és el límit en què el taxímetre passa de comptar per temps a comptar per distància. Varia segons si s’aplica tarifa urbana o interurbana.',
'La velocidad frontera es el límite en que el taxímetro pasa de contar por tiempo a contar por distancia. Varía según si se aplica tarifa urbana o interurbana.',
'Manual · Tarifes, Conceptes (pàg. 5)');

q('tar','t-urb',
'Quina és la velocitat frontera de les tarifes urbanes T-1 i T-2?',
'¿Cuál es la velocidad frontera de las tarifas urbanas T-1 y T-2?',
['14,10 km/h','20 km/h','29 km/h','35 km/h'],
['14,10 km/h','20 km/h','29 km/h','35 km/h'],
2,
'A les tarifes urbanes (T-1 i T-2) la velocitat frontera és de 29 km/h. A les interurbanes (T-6 i T-7) és de 14,10 km/h.',
'En las tarifas urbanas (T-1 y T-2) la velocidad frontera es de 29 km/h. En las interurbanas (T-6 y T-7) es de 14,10 km/h.',
'Tarifes 2026','C');

q('tar','t-int',
'Quina és la velocitat frontera de les tarifes interurbanes T-6 i T-7?',
'¿Cuál es la velocidad frontera de las tarifas interurbanas T-6 y T-7?',
['14,10 km/h','29 km/h','22,47 km/h','18 km/h'],
['14,10 km/h','29 km/h','22,47 km/h','18 km/h'],
0,
'Les tarifes interurbanes tenen una velocitat frontera molt més baixa: 14,10 km/h, perquè el recorregut és majoritàriament per carretera.',
'Las tarifas interurbanas tienen una velocidad frontera mucho más baja: 14,10 km/h, porque el recorrido es mayoritariamente por carretera.',
'Tarifes 2026','C');

q('tar','t-urb',
'Quin és l’import de la baixada de bandera en tarifa urbana (T-1 i T-2)?',
'¿Cuál es el importe de la bajada de bandera en tarifa urbana (T-1 y T-2)?',
['2,55 €','2,80 €','7,25 €','7,90 €'],
['2,55 €','2,80 €','7,25 €','7,90 €'],
1,
'La baixada de bandera és de 2,80 € tant a la T-1 com a la T-2. Els 7,25 € i 7,90 € corresponen a les interurbanes T-6 i T-7.',
'La bajada de bandera es de 2,80 € tanto en la T-1 como en la T-2. Los 7,25 € y 7,90 € corresponden a las interurbanas T-6 y T-7.',
'Tarifes 2026','C');

q('tar','t-int',
'Quina és la baixada de bandera de la tarifa T-6?',
'¿Cuál es la bajada de bandera de la tarifa T-6?',
['2,80 €','7,25 €','7,90 €','8,00 €'],
['2,80 €','7,25 €','7,90 €','8,00 €'],
1,
'La T-6 (interurbana en laborables de 08:00 a 20:00) té una baixada de bandera de 7,25 €. La T-7 en té 7,90 €.',
'La T-6 (interurbana en laborables de 08:00 a 20:00) tiene una bajada de bandera de 7,25 €. La T-7 tiene 7,90 €.',
'Tarifes 2026','C');

q('tar','t-int',
'Quin és l’import mínim de percepció d’una carrera realitzada amb la T-7?',
'¿Cuál es el importe mínimo de percepción de una carrera realizada con la T-7?',
['7,25 €','7,35 €','7,90 €','8,00 €'],
['7,25 €','7,35 €','7,90 €','8,00 €'],
2,
'La percepció mínima coincideix amb la baixada de bandera: a la T-7 és de 7,90 €.',
'La percepción mínima coincide con la bajada de bandera: en la T-7 es de 7,90 €.',
'Tarifes 2026','C');

q('tar','t-urb',
'Quin preu per quilòmetre s’aplica amb la tarifa T-1?',
'¿Qué precio por kilómetro se aplica con la tarifa T-1?',
['0,82 €/km','0,89 €/km','1,35 €/km','1,66 €/km'],
['0,82 €/km','0,89 €/km','1,35 €/km','1,66 €/km'],
2,
'La T-1 (urbana laborable de dia) és de 1,35 €/km. La T-2 és 1,66 €/km; la T-6, 0,82 €/km i la T-7, 0,89 €/km.',
'La T-1 (urbana laborable de día) es de 1,35 €/km. La T-2 es 1,66 €/km; la T-6, 0,82 €/km y la T-7, 0,89 €/km.',
'Tarifes 2026','C');

q('tar','t-urb',
'Quin preu per quilòmetre s’aplica amb la tarifa T-2?',
'¿Qué precio por kilómetro se aplica con la tarifa T-2?',
['1,35 €/km','1,66 €/km','0,89 €/km','2,80 €/km'],
['1,35 €/km','1,66 €/km','0,89 €/km','2,80 €/km'],
1,
'La T-2 s’aplica en laborables de 20:00 a 08:00 i dissabtes i festius les 24 h, amb un preu de 1,66 €/km.',
'La T-2 se aplica en laborables de 20:00 a 08:00 y sábados y festivos las 24 h, con un precio de 1,66 €/km.',
'Tarifes 2026','C');

q('tar','t-urb',
'En un recorregut entre Montcada i Reixac i Ripollet a les 23:00 h en dia laborable, quin preu per quilòmetre s’aplica?',
'En un recorrido entre Montcada i Reixac y Ripollet a las 23:00 h en día laborable, ¿qué precio por kilómetro se aplica?',
['1,35 €/km','0,82 €/km','0,89 €/km','1,66 €/km'],
['1,35 €/km','0,82 €/km','0,89 €/km','1,66 €/km'],
3,
'Els dos municipis són de l’AMB, per tant tarifa urbana. A les 23:00 h d’un laborable correspon la T-2: 1,66 €/km.',
'Ambos municipios son del AMB, por tanto tarifa urbana. A las 23:00 h de un laborable corresponde la T-2: 1,66 €/km.',
'Tarifes 2026 · AMB','C');

q('tar','t-urb',
'Quin és el preu de l’hora d’espera en tarifa urbana?',
'¿Cuál es el precio de la hora de espera en tarifa urbana?',
['21,99 €','22,47 €','24,32 €','27,75 €'],
['21,99 €','22,47 €','24,32 €','27,75 €'],
3,
'L’hora d’espera és de 27,75 € tant a la T-1 com a la T-2. A la T-6 és 22,47 € i a la T-7, 24,32 €.',
'La hora de espera es de 27,75 € tanto en la T-1 como en la T-2. En la T-6 es 22,47 € y en la T-7, 24,32 €.',
'Tarifes 2026','C');

q('tar','t-int',
'Quin preu té una hora d’espera amb tarifa T-6?',
'¿Qué precio tiene una hora de espera con tarifa T-6?',
['22,47 €','24,32 €','27,75 €','20,50 €'],
['22,47 €','24,32 €','27,75 €','20,50 €'],
0,
'L’hora d’espera de la T-6 és de 22,47 €; la de la T-7, de 24,32 €.',
'La hora de espera de la T-6 es de 22,47 €; la de la T-7, de 24,32 €.',
'Tarifes 2026','C');

q('tar','t-con',
'De quant és el salt del taxímetre?',
'¿De cuánto es el salto del taxímetro?',
['0,01 €','0,05 €','0,10 €','Depèn de la tarifa aplicada'],
['0,01 €','0,05 €','0,10 €','Depende de la tarifa aplicada'],
1,
'El salt és de 0,05 € en totes les tarifes (T-1, T-2, T-6 i T-7). És la fracció de temps o distància en què es produeix l’increment.',
'El salto es de 0,05 € en todas las tarifas (T-1, T-2, T-6 y T-7). Es la fracción de tiempo o distancia en que se produce el incremento.',
'Tarifes 2026 · Conceptes');

q('tar','t-urb',
'Quan s’aplica la tarifa T-1?',
'¿Cuándo se aplica la tarifa T-1?',
['Laborables de 08:00 a 20:00','Laborables de 20:00 a 08:00','Dissabtes i festius les 24 hores','Sempre que el destí sigui dins de l’AMB'],
['Laborables de 08:00 a 20:00','Laborables de 20:00 a 08:00','Sábados y festivos las 24 horas','Siempre que el destino esté dentro del AMB'],
0,
'La T-1 és la urbana diürna de dies laborables, de 08:00 a 20:00 h. Fora d’aquesta franja i els caps de setmana i festius s’aplica la T-2.',
'La T-1 es la urbana diurna de días laborables, de 08:00 a 20:00 h. Fuera de esa franja y los fines de semana y festivos se aplica la T-2.',
'Tarifes 2026');

q('tar','t-urb',
'Quan s’aplica la tarifa T-2?',
'¿Cuándo se aplica la tarifa T-2?',
['Només els diumenges','Laborables de 20:00 a 08:00 i dissabtes i festius les 24 hores','Només quan el client ho demana','Quan la carrera supera els 20 km'],
['Solo los domingos','Laborables de 20:00 a 08:00 y sábados y festivos las 24 horas','Solo cuando el cliente lo pide','Cuando la carrera supera los 20 km'],
1,
'La T-2 cobreix la franja nocturna dels laborables (20:00-08:00) i tot el dissabte i festius, les 24 hores.',
'La T-2 cubre la franja nocturna de los laborables (20:00-08:00) y todo el sábado y festivos, las 24 horas.',
'Tarifes 2026');

q('tar','t-int',
'Quan s’han d’aplicar les tarifes T-6 i T-7?',
'¿Cuándo deben aplicarse las tarifas T-6 y T-7?',
['Quan sortim de Barcelona ciutat','Quan entrem a l’Àrea Metropolitana','Quan iniciem la fase de cobrament','Quan el destí és fora de l’Àrea Metropolitana'],
['Cuando salimos de Barcelona ciudad','Cuando entramos en el Área Metropolitana','Cuando iniciamos la fase de cobro','Cuando el destino está fuera del Área Metropolitana'],
3,
'Les interurbanes s’apliquen quan el destí del servei és fora de l’AMB, i s’han d’aplicar des de l’inici de la prestació, sense poder passar a tarifa urbana.',
'Las interurbanas se aplican cuando el destino del servicio está fuera del AMB, y deben aplicarse desde el inicio de la prestación, sin poder pasar a tarifa urbana.',
'Manual · Serveis interurbans T6-T7 (pàg. 7)');

q('tar','t-int',
'En una carrera amb origen a l’Hospitalet i destí a Martorell, de dia i en laborable, quina tarifa apliquem?',
'En una carrera con origen en Hospitalet y destino Martorell, de día y en laborable, ¿qué tarifa aplicamos?',
['La 2 i la 1','La 3','La 6','La 7'],
['La 2 y la 1','La 3','La 6','La 7'],
2,
'Martorell és fora de l’AMB, per tant tarifa interurbana. De dia i en laborable correspon la T-6.',
'Martorell está fuera del AMB, por tanto tarifa interurbana. De día y en laborable corresponde la T-6.',
'Tarifes 2026 · AMB');

q('tar','t-cas',
'Quant cobrarem si tenim un vehicle de 7 places i fem una carrera amb cinc passatgers fins a Sabadell?',
'¿Cuánto cobraremos si tenemos un vehículo de 7 plazas y hacemos una carrera con cinco pasajeros hasta Sabadell?',
['El que marqui el taxímetre','El que marqui el taxímetre més 4,60 € per ser un vehicle de 5-8 places ocupat','Un preu estandarditzat Barcelona-Sabadell','El que marqui el taxímetre més 4 € de les maletes'],
['Lo que marque el taxímetro','Lo que marque el taxímetro más 4,60 € por ser un vehículo de 5-8 plazas ocupado','Un precio estandarizado Barcelona-Sabadell','Lo que marque el taxímetro más 4 € de las maletas'],
1,
'El suplement de 4,60 € per vehicle ocupat de 5 a 8 places també s’aplica a les tarifes interurbanes. Les maletes són gratuïtes i obligatòries.',
'El suplemento de 4,60 € por vehículo ocupado de 5 a 8 plazas también se aplica a las tarifas interurbanas. Las maletas son gratuitas y obligatorias.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin és el suplement per entrada o sortida de l’aeroport?',
'¿Cuál es el suplemento por entrada o salida del aeropuerto?',
['2,55 €','3,30 €','4,60 €','No hi ha suplement'],
['2,55 €','3,30 €','4,60 €','No hay suplemento'],
2,
'El suplement d’aeroport és de 4,60 € i s’aplica tant a l’entrada com a la sortida, i en totes les tarifes (urbanes i interurbanes).',
'El suplemento de aeropuerto es de 4,60 € y se aplica tanto a la entrada como a la salida, y en todas las tarifas (urbanas e interurbanas).',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin és el suplement per sortida de l’Estació de Sants?',
'¿Cuál es el suplemento por salida de la Estación de Sants?',
['2,55 €','3,30 €','4,60 €','3,55 €'],
['2,55 €','3,30 €','4,60 €','3,55 €'],
0,
'La sortida de l’Estació de Sants té un suplement de 2,55 €. Només es cobra a la sortida, no a l’entrada.',
'La salida de la Estación de Sants tiene un suplemento de 2,55 €. Solo se cobra a la salida, no a la entrada.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin suplement es cobra per la sortida de la Fira de Barcelona-2 (L’Hospitalet)?',
'¿Qué suplemento se cobra por la salida de la Fira de Barcelona-2 (L’Hospitalet)?',
['2,55 €','3,30 €','4,60 €','No es cobra cap suplement'],
['2,55 €','3,30 €','4,60 €','No se cobra ningún suplemento'],
1,
'La sortida de la Fira de Bcn-2 (L’Hospitalet) té un suplement de 3,30 €. A l’entrada no es cobra res.',
'La salida de la Fira de Bcn-2 (L’Hospitalet) tiene un suplemento de 3,30 €. A la entrada no se cobra nada.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin suplement d’ENTRADA a la Fira de Barcelona-L’Hospitalet es cobra?',
'¿Qué suplemento de ENTRADA a la Fira de Barcelona-L’Hospitalet se cobra?',
['2,55 €','3,30 €','No es cobra cap suplement d’entrada','4,60 €'],
['2,55 €','3,30 €','No se cobra ningún suplemento de entrada','4,60 €'],
2,
'A la Fira de Bcn-2 el suplement de 3,30 € només està previst a la SORTIDA. L’entrada no genera suplement.',
'En la Fira de Bcn-2 el suplemento de 3,30 € solo está previsto a la SALIDA. La entrada no genera suplemento.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin és el suplement per sortida de l’estació marítima internacional (Moll Adossat)?',
'¿Cuál es el suplemento por salida de la estación marítima internacional (Moll Adossat)?',
['2,55 €','3,30 €','4,60 €','No hi ha suplement'],
['2,55 €','3,30 €','4,60 €','No hay suplemento'],
2,
'El Moll Adossat / Estació Marítima Internacional té un suplement de 4,60 €, tant a l’entrada com a la sortida, en tarifes urbanes.',
'El Moll Adossat / Estación Marítima Internacional tiene un suplemento de 4,60 €, tanto a la entrada como a la salida, en tarifas urbanas.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin és el límit màxim de suplements que es poden aplicar en un servei amb tarifa urbana?',
'¿Cuál es el límite máximo de suplementos que se pueden aplicar en un servicio con tarifa urbana?',
['9,20 €','13,80 €','17,10 €','No hi ha límit'],
['9,20 €','13,80 €','17,10 €','No hay límite'],
2,
'El límit màxim de suplements en tarifa urbana (T-1 i T-2) és de 17,10 €. El taxímetre ha de garantir aquesta limitació.',
'El límite máximo de suplementos en tarifa urbana (T-1 y T-2) es de 17,10 €. El taxímetro debe garantizar esa limitación.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin suplement s’aplica per "nit especial" i en quines dates?',
'¿Qué suplemento se aplica por "noche especial" y en qué fechas?',
['3,30 €, totes les nits de cap de setmana','4,60 €, les nits del 23 al 24 de juny, del 24 al 25 de desembre i del 31 de desembre a l’1 de gener','2,55 €, cada festiu del calendari','4,60 €, totes les nits de 20 h a 8 h'],
['3,30 €, todas las noches de fin de semana','4,60 €, las noches del 23 al 24 de junio, del 24 al 25 de diciembre y del 31 de diciembre al 1 de enero','2,55 €, cada festivo del calendario','4,60 €, todas las noches de 20 h a 8 h'],
1,
'El suplement de nit especial és de 4,60 €, de 20 h a 8 h, i només les tres nits assenyalades. S’aplica amb T-2 i T-7 i el taxímetre l’activa automàticament a l’inici del servei.',
'El suplemento de noche especial es de 4,60 €, de 20 h a 8 h, y solo las tres noches señaladas. Se aplica con T-2 y T-7 y el taxímetro lo activa automáticamente al inicio del servicio.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quin és el suplement per un vehicle ocupat de 5 a 8 places?',
'¿Cuál es el suplemento por un vehículo ocupado de 5 a 8 plazas?',
['3,30 €','4,60 €','2,55 €','4,60 € per cada plaça ocupada'],
['3,30 €','4,60 €','2,55 €','4,60 € por cada plaza ocupada'],
1,
'És un únic suplement de 4,60 € per servei, no per plaça, i només quan el vehicle està efectivament ocupat de 5 a 8 places.',
'Es un único suplemento de 4,60 € por servicio, no por plaza, y solo cuando el vehículo está efectivamente ocupado de 5 a 8 plazas.',
'Tarifes 2026 · Suplements','C');

q('tar','t-cas',
'Si fem una carrera fora de l’AMB amb un vehicle homologat per a 7 places i s’ocupen totes, quins suplements podem cobrar com a màxim?',
'Si hacemos una carrera fuera del AMB con un vehículo homologado para 7 plazas y se ocupan todas, ¿qué suplementos podemos cobrar como máximo?',
['4,60 € + 3,55 € de 7 places quan les ocupin','4,60 € per cada una de les 7 places','4,60 € d’aeroport + 4,60 € de 5-8 places quan les ocupin','Només 4,60 €'],
['4,60 € + 3,55 € de 7 plazas cuando las ocupen','4,60 € por cada una de las 7 plazas','4,60 € de aeropuerto + 4,60 € de 5-8 plazas cuando las ocupen','Solo 4,60 €'],
2,
'En interurbanes es poden acumular el suplement d’aeroport (4,60 €) i el de vehicle ocupat de 5-8 places (4,60 €). El suplement per places és únic, no per plaça.',
'En interurbanas se pueden acumular el suplemento de aeropuerto (4,60 €) y el de vehículo ocupado de 5-8 plazas (4,60 €). El suplemento por plazas es único, no por plaza.',
'Tarifes 2026 · Suplements','C');

q('tar','t-cas',
'Una carrera amb origen a Viladecans i destinació a l’aeroport del Prat acaba amb 18,25 € al taxímetre, inclosos els suplements. Què ha de cobrar el taxista?',
'Una carrera con origen en Viladecans y destino al aeropuerto del Prat termina con 18,25 € en el taxímetro, incluidos los suplementos. ¿Qué debe cobrar el taxista?',
['21 €, ja que no arriba a la percepció mínima','18,25 € més 21 € de percepció mínima','18,25 € més 4,60 € de suplement','18,25 €'],
['21 €, ya que no llega a la percepción mínima','18,25 € más 21 € de percepción mínima','18,25 € más 4,60 € de suplemento','18,25 €'],
3,
'La percepció mínima de 21 € només s’aplica a les carreres de SORTIDA de l’aeroport. Si l’aeroport és el destí, es cobra el que marqui el taxímetre: 18,25 €.',
'La percepción mínima de 21 € solo se aplica a las carreras de SALIDA del aeropuerto. Si el aeropuerto es el destino, se cobra lo que marque el taxímetro: 18,25 €.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'Quina és la carrera mínima de sortida de l’aeroport en tarifa urbana?',
'¿Cuál es la carrera mínima de salida del aeropuerto en tarifa urbana?',
['8,00 €','18,25 €','21,00 €, inclosos tots els suplements','46,00 €'],
['8,00 €','18,25 €','21,00 €, incluidos todos los suplementos','46,00 €'],
2,
'La carrera mínima de sortida de l’aeroport és de 21,00 € amb tots els suplements inclosos. Si el taxímetre i els suplements superen aquesta xifra, es cobra l’import real.',
'La carrera mínima de salida del aeropuerto es de 21,00 € con todos los suplementos incluidos. Si el taxímetro y los suplementos superan esa cifra, se cobra el importe real.',
'Tarifes 2026','C');

q('tar','t-cas',
'Recollim a l’aeroport una família de set persones un dimarts 24/06 a les 05:00 h, amb un vehicle de set places homologades. El taxímetre marca 14 €. Quant cobrem?',
'Recogemos en el aeropuerto a una familia de siete personas un martes 24/06 a las 05:00 h, con un vehículo de siete plazas homologadas. El taxímetro marca 14 €. ¿Cuánto cobramos?',
['21 € de percepció mínima','27,80 €','14 € + 3,10 € + 2,10 €','24,40 €'],
['21 € de percepción mínima','27,80 €','14 € + 3,10 € + 2,10 €','24,40 €'],
1,
'14 € + 4,60 € (sortida aeroport) + 4,60 € (nit especial 23-24/06) + 4,60 € (vehicle ocupat 5-8 places) = 27,80 €. Supera els 21 € de mínim, per tant es cobra l’import real.',
'14 € + 4,60 € (salida aeropuerto) + 4,60 € (noche especial 23-24/06) + 4,60 € (vehículo ocupado 5-8 plazas) = 27,80 €. Supera los 21 € de mínimo, por tanto se cobra el importe real.',
'Manual · Test Tarifes, pregunta 1','C');

q('tar','t-sup',
'Si en una única carrera interurbana passem per dos aeroports, quants suplements d’aeroport podem cobrar?',
'Si en una única carrera interurbana pasamos por dos aeropuertos, ¿cuántos suplementos de aeropuerto podemos cobrar?',
['Dos, un per cada aeroport','Només un (4,60 €)','Cap, perquè és interurbana','Depèn de si el client ho accepta'],
['Dos, uno por cada aeropuerto','Solo uno (4,60 €)','Ninguno, porque es interurbana','Depende de si el cliente lo acepta'],
1,
'El manual és explícit: en cas que hi hagi dos aeroports en una única carrera, només s’aplicarà un suplement de 4,60 €.',
'El manual es explícito: en caso de que haya dos aeropuertos en una única carrera, solo se aplicará un suplemento de 4,60 €.',
'Manual · Serveis interurbans T6-T7 (pàg. 7)','C');

q('tar','t-t3',
'Quina consideració té la tarifa de preu tancat (T3)?',
'¿Qué consideración tiene la tarifa de precio cerrado (T3)?',
['Urbana','Interurbana','Nacional','D’interès públic'],
['Urbana','Interurbana','Nacional','De interés público'],
0,
'La T3 s’aplica als serveis de taxi DINS de l’Àrea Metropolitana de Barcelona, per tant té consideració urbana.',
'La T3 se aplica a los servicios de taxi DENTRO del Área Metropolitana de Barcelona, por tanto tiene consideración urbana.',
'Manual · Tarifa de preu tancat (pàg. 6)');

q('tar','t-t3',
'Qui pot aplicar la tarifa de preu tancat?',
'¿Quién puede aplicar la tarifa de precio cerrado?',
['Qualsevol taxista quan ho consideri','Les apps de les empreses mediadores que compleixin els requisits del Decret 314/2016, hagin fet la comunicació prèvia a l’IMET i hagin passat la validació tècnica','Qualsevol app de taxi a nivell nacional','Qualsevol emissora de ràdio'],
['Cualquier taxista cuando lo considere','Las apps de las empresas mediadoras que cumplan los requisitos del Decreto 314/2016, hayan hecho la comunicación previa al IMET y hayan pasado la validación técnica','Cualquier app de taxi a nivel nacional','Cualquier emisora de radio'],
1,
'La T3 només la poden aplicar les apps d’empreses mediadores que compleixin el Decret 314/2016, de 8 de novembre, hagin comunicat prèviament a l’IMET i hagin superat la validació dels serveis tècnics de l’IMET.',
'La T3 solo la pueden aplicar las apps de empresas mediadoras que cumplan el Decreto 314/2016, de 8 de noviembre, hayan comunicado previamente al IMET y hayan superado la validación de los servicios técnicos del IMET.',
'Manual · Tarifa T3, punt 2 (pàg. 6)');

q('tar','t-t3',
'De qui és la possibilitat de triar la tarifa de preu tancat?',
'¿De quién es la posibilidad de elegir la tarifa de precio cerrado?',
['Del taxista','De l’atzar','De l’usuari','De l’AMB'],
['Del taxista','Del azar','Del usuario','Del AMB'],
2,
'Les apps han d’oferir a l’usuari la possibilitat d’escollir entre el preu tancat determinat o la tarificació del taxímetre. La decisió és de l’usuari.',
'Las apps deben ofrecer al usuario la posibilidad de escoger entre el precio cerrado determinado o la tarificación del taxímetro. La decisión es del usuario.',
'Manual · Tarifa T3, punt 5 (pàg. 6)');

q('tar','t-t3',
'Com es calcula el preu tancat d’un servei dins de l’àmbit de l’AMB?',
'¿Cómo se calcula el precio cerrado de un servicio dentro del ámbito del AMB?',
['Baixada de bandera + núm. km × preu km segons longitud de la carrera + import del suplement d’aplicació','Només els quilòmetres per 1,35 €','Un preu fix per municipi d’origen i destinació','El que marqui l’app sense cap fórmula regulada'],
['Bajada de bandera + nº km × precio km según longitud de la carrera + importe del suplemento de aplicación','Solo los kilómetros por 1,35 €','Un precio fijo por municipio de origen y destino','Lo que marque la app sin ninguna fórmula regulada'],
0,
'La fórmula del manual és: Preu tancat = Baixada de bandera + N.Km × Preu Km segons longitud carrera + import suplement d’aplicació.',
'La fórmula del manual es: Precio cerrado = Bajada de bandera + N.Km × Precio Km según longitud carrera + importe suplemento de aplicación.',
'Manual · Tarifa T3, punt 13 (pàg. 6)');

q('tar','t-t3',
'La tarifa 3 contempla la realització de parades intermèdies?',
'¿La tarifa 3 contempla la realización de paradas intermedias?',
['Sí, fins a dues parades','Sí, sempre que no superin 10 minuts','No, la T3 no contempla parades intermèdies','Només si l’app ho autoritza'],
['Sí, hasta dos paradas','Sí, siempre que no superen 10 minutos','No, la T3 no contempla paradas intermedias','Solo si la app lo autoriza'],
2,
'El punt 11 de les normes de la T3 estableix expressament que la tarifa 3 no contempla la realització de parades intermèdies.',
'El punto 11 de las normas de la T3 establece expresamente que la tarifa 3 no contempla la realización de paradas intermedias.',
'Manual · Tarifa T3, punt 11 (pàg. 6)');

q('tar','t-t3',
'Què inclou la tarifa 3 pel que fa al desplaçament i l’espera?',
'¿Qué incluye la tarifa 3 en cuanto al desplazamiento y la espera?',
['Només el trajecte del client','El desplaçament fins al lloc d’encotxament i 5 minuts d’espera','El desplaçament fins al lloc d’encotxament i 15 minuts d’espera','10 minuts d’espera però no el desplaçament'],
['Solo el trayecto del cliente','El desplazamiento hasta el lugar de recogida y 5 minutos de espera','El desplazamiento hasta el lugar de recogida y 15 minutos de espera','10 minutos de espera pero no el desplazamiento'],
1,
'El punt 12 estableix que la tarifa 3 inclou el desplaçament fins al lloc d’encotxament i 5 minuts d’espera.',
'El punto 12 establece que la tarifa 3 incluye el desplazamiento hasta el lugar de recogida y 5 minutos de espera.',
'Manual · Tarifa T3, punt 12 (pàg. 6)');

q('tar','t-t3',
'Quin és l’import mínim d’un servei en T3?',
'¿Cuál es el importe mínimo de un servicio en T3?',
['8 €','5 €','3,25 €','No existeix import mínim'],
['8 €','5 €','3,25 €','No existe importe mínimo'],
0,
'La carrera mínima és de 8,00 € tant per al servei de radioemissora com per a la T3 (només per app).',
'La carrera mínima es de 8,00 € tanto para el servicio de radioemisora como para la T3 (solo por app).',
'Tarifes 2026','C');

q('tar','t-t3',
'Quina és la carrera mínima del servei de radioemissora?',
'¿Cuál es la carrera mínima del servicio de radioemisora?',
['2,80 €','5,00 €','8,00 €','21,00 €'],
['2,80 €','5,00 €','8,00 €','21,00 €'],
2,
'Tant el servei de radioemissora com la T3 tenen una carrera mínima de 8,00 €.',
'Tanto el servicio de radioemisora como la T3 tienen una carrera mínima de 8,00 €.',
'Tarifes 2026','C');

q('tar','t-t3',
'Què estableix la Tarifa 4?',
'¿Qué establece la Tarifa 4?',
['Un preu fix de 46,00 € entre el Moll Adossat i l’aeroport','Un preu fix de 21,00 € des de l’aeroport','El preu tancat per app','La tarifa de les emissores'],
['Un precio fijo de 46,00 € entre el Moll Adossat y el aeropuerto','Un precio fijo de 21,00 € desde el aeropuerto','El precio cerrado por app','La tarifa de las emisoras'],
0,
'La Tarifa 4 és un preu tancat de 46,00 € per al trajecte Moll Adossat ↔ Aeroport. Els taxímetres que ho permetin impediran introduir suplements en T4.',
'La Tarifa 4 es un precio cerrado de 46,00 € para el trayecto Moll Adossat ↔ Aeropuerto. Los taxímetros que lo permitan impedirán introducir suplementos en T4.',
'Tarifes 2026','C');

q('tar','t-t3',
'En els serveis realitzats amb tarifa 4, què passa amb els suplements?',
'En los servicios realizados con tarifa 4, ¿qué pasa con los suplementos?',
['Es poden afegir tots els que corresponguin','Els taxímetres que ho permetin n’impediran la introducció','Només es pot afegir el d’aeroport','Es cobren a part en efectiu'],
['Se pueden añadir todos los que correspondan','Los taxímetros que lo permitan impedirán su introducción','Solo se puede añadir el de aeropuerto','Se cobran aparte en efectivo'],
1,
'La T4 és un preu tancat: els taxímetres que ho permetin impediran la introducció de suplements en els serveis fets amb tarifa 4.',
'La T4 es un precio cerrado: los taxímetros que lo permitan impedirán la introducción de suplementos en los servicios realizados con tarifa 4.',
'Manual · Taxímetres, punt 4 (pàg. 7)');

q('tar','t-con',
'Quins serveis són obligatoris i gratuïts segons el quadre de tarifes?',
'¿Qué servicios son obligatorios y gratuitos según el cuadro de tarifas?',
['Només les maletes','Maletes, cadira de rodes, gos pigall, cotxet de nen, cobrament amb targeta i rebut de la impressora','Només el gos pigall i la cadira de rodes','Cap, tots tenen suplement'],
['Solo las maletas','Maletas, silla de ruedas, perro lazarillo, cochecito de niño, cobro con tarjeta y recibo de la impresora','Solo el perro lazarillo y la silla de ruedas','Ninguno, todos tienen suplemento'],
1,
'El quadre de tarifes recull com a obligatori i gratuït: maletes, cadira de rodes, gos pigall, cotxet de nen, cobrament amb targeta i rebut de la impressora.',
'El cuadro de tarifas recoge como obligatorio y gratuito: maletas, silla de ruedas, perro lazarillo, cochecito de niño, cobro con tarjeta y recibo de la impresora.',
'Tarifes 2026');

q('tar','t-con',
'El suplement per admetre un gall al taxi és de 0 €. I si es tracta d’un gos pigall d’una persona invident?',
'El suplemento por admitir un gallo en el taxi es de 0 €. ¿Y si se trata de un perro lazarillo de una persona invidente?',
['1,00 €, com si fos un embalum','No hi ha suplement: és gratuït i obligatori','No hi ha suplement, però el taxista no està obligat a portar-lo','3,50 €'],
['1,00 €, como si fuera un bulto','No hay suplemento: es gratuito y obligatorio','No hay suplemento, pero el taxista no está obligado a llevarlo','3,50 €'],
1,
'El transport del gos pigall o altres gossos d’assistència és gratuït I obligatori. El conductor no s’hi pot negar.',
'El transporte del perro lazarillo u otros perros de asistencia es gratuito Y obligatorio. El conductor no puede negarse.',
'Tarifes 2026 · RMT art. 38.2');

q('tar','t-con',
'De quant ha de ser la disponibilitat de canvi del taxista?',
'¿De cuánto debe ser la disponibilidad de cambio del taxista?',
['10 €','20 €','50 €','No està regulat'],
['10 €','20 €','50 €','No está regulado'],
1,
'El taxista està obligat a proporcionar canvi de fins a 20 €. La quantitat pot ser modificada en el moment d’actualitzar les tarifes.',
'El taxista está obligado a proporcionar cambio de hasta 20 €. La cantidad puede modificarse en el momento de actualizar las tarifas.',
'Tarifes 2026 · RMT art. 41.4');

q('tar','t-con',
'Qui paga el peatge en un servei de taxi?',
'¿Quién paga el peaje en un servicio de taxi?',
['El taxista, sempre','El client: anada i tornada al seu càrrec, i és opcional','Es reparteix al 50%','Està inclòs a la baixada de bandera'],
['El taxista, siempre','El cliente: ida y vuelta a su cargo, y es opcional','Se reparte al 50%','Está incluido en la bajada de bandera'],
1,
'El quadre de tarifes indica: "Peatge (opcional): anada i tornada a càrrec del client".',
'El cuadro de tarifas indica: "Peaje (opcional): ida y vuelta a cargo del cliente".',
'Tarifes 2026');

q('tar','t-cal',
'Quina tarifa s’aplica en una carrera que s’inicia a Badalona a les 07:45 h i acaba a l’Hospitalet a les 08:20 h, un divendres laborable?',
'¿Qué tarifa se aplica en una carrera que se inicia en Badalona a las 07:45 h y termina en L’Hospitalet a las 08:20 h, un viernes laborable?',
['Només la 1','La 2 i la 1','La 1 i la 2','Només la 2'],
['Solo la 1','La 2 y la 1','La 1 y la 2','Solo la 2'],
1,
'Comença a les 07:45 h (encara T-2, franja nocturna) i acaba a les 08:20 h (ja T-1). El taxímetre canvia automàticament: primer la 2 i després la 1.',
'Empieza a las 07:45 h (todavía T-2, franja nocturna) y termina a las 08:20 h (ya T-1). El taxímetro cambia automáticamente: primero la 2 y luego la 1.',
'Manual · Taxímetres (pàg. 7)');

q('tar','t-cal',
'En un trajecte que s’inicia a Barcelona un divendres a les 19:30 h i finalitza a Cornellà a les 20:15 h, quines tarifes s’apliquen?',
'En un trayecto que se inicia en Barcelona un viernes a las 19:30 h y finaliza en Cornellà a las 20:15 h, ¿qué tarifas se aplican?',
['Només la 1','La 2 i la 1','La 1 i la 2','Només la 2'],
['Solo la 1','La 2 y la 1','La 1 y la 2','Solo la 2'],
2,
'Comença a les 19:30 h en T-1 i creua les 20:00 h, moment en què el taxímetre passa automàticament a T-2. Ordre: primer la 1 i després la 2.',
'Empieza a las 19:30 h en T-1 y cruza las 20:00 h, momento en que el taxímetro pasa automáticamente a T-2. Orden: primero la 1 y luego la 2.',
'Manual · Taxímetres (pàg. 7)');

q('tar','t-cal',
'Una carrera comença a Badalona a les 20:45 h i acaba a Barcelona a les 21:10 h, en dia laborable. Quina tarifa s’aplica en començar?',
'Una carrera empieza en Badalona a las 20:45 h y termina en Barcelona a las 21:10 h, en día laborable. ¿Qué tarifa se aplica al empezar?',
['La 1','La 2 i la 3','La 2','La 1 i la 2'],
['La 1','La 2 y la 3','La 2','La 1 y la 2'],
2,
'A les 20:45 h d’un laborable ja estem en franja nocturna (20:00-08:00), i tot el trajecte queda dins: s’aplica només la T-2.',
'A las 20:45 h de un laborable ya estamos en franja nocturna (20:00-08:00), y todo el trayecto queda dentro: se aplica solo la T-2.',
'Tarifes 2026');

q('tar','t-cal',
'En un trajecte de Sant Cugat a Barcelona a les 20:00 h d’un dia festiu, quina tarifa s’aplica?',
'En un trayecto de Sant Cugat a Barcelona a las 20:00 h de un día festivo, ¿qué tarifa se aplica?',
['La 1 i la 2','La 2','La 2 i la 1','La 3'],
['La 1 y la 2','La 2','La 2 y la 1','La 3'],
1,
'Sant Cugat del Vallès és municipi de l’AMB, per tant tarifa urbana. En dia festiu s’aplica la T-2 les 24 hores, sense canvis.',
'Sant Cugat del Vallès es municipio del AMB, por tanto tarifa urbana. En día festivo se aplica la T-2 las 24 horas, sin cambios.',
'Tarifes 2026 · AMB');

q('tar','t-cal',
'De l’estació de Renfe de Sant Boi a l’Aeroport, en dia festiu a les 21:00 h, quina tarifa correspon?',
'De la estación de Renfe de Sant Boi al Aeropuerto, en día festivo a las 21:00 h, ¿qué tarifa corresponde?',
['La 2','La 1','La 3','La 2 i la 1'],
['La 2','La 1','La 3','La 2 y la 1'],
0,
'Sant Boi i El Prat són municipis de l’AMB: tarifa urbana. En festiu la T-2 s’aplica les 24 hores. A més, cal afegir el suplement d’entrada a l’aeroport (4,60 €).',
'Sant Boi y El Prat son municipios del AMB: tarifa urbana. En festivo la T-2 se aplica las 24 horas. Además, hay que añadir el suplemento de entrada al aeropuerto (4,60 €).',
'Tarifes 2026 · AMB');

q('tar','t-cal',
'Des de Barcelona a El Prat, a les 19:00 h i en dia laborable, quina tarifa o tarifes apliquem?',
'Desde Barcelona a El Prat, a las 19:00 h y en día laborable, ¿qué tarifa o tarifas aplicamos?',
['La 1 i la 2','La 2','La 2 i la 1','La 1'],
['La 1 y la 2','La 2','La 2 y la 1','La 1'],
3,
'El Prat de Llobregat és de l’AMB i el trajecte és curt: comença i acaba abans de les 20:00 h d’un laborable, per tant només T-1.',
'El Prat de Llobregat es del AMB y el trayecto es corto: empieza y termina antes de las 20:00 h de un laborable, por tanto solo T-1.',
'Tarifes 2026 · AMB');

q('tar','t-cal',
'Un trajecte s’inicia a Montcada a les 05:45 h d’un laborable i acaba a Sant Joan Despí a les 06:30 h. Quines tarifes apliquem?',
'Un trayecto se inicia en Montcada a las 05:45 h de un laborable y termina en Sant Joan Despí a las 06:30 h. ¿Qué tarifas aplicamos?',
['La 2','La 1','La 2 i la 1','La 1 i la 2'],
['La 2','La 1','La 2 y la 1','La 1 y la 2'],
0,
'Tot el trajecte (05:45 h → 06:30 h) queda dins de la franja nocturna 20:00-08:00 d’un laborable: només T-2. Els dos municipis són de l’AMB.',
'Todo el trayecto (05:45 h → 06:30 h) queda dentro de la franja nocturna 20:00-08:00 de un laborable: solo T-2. Ambos municipios son del AMB.',
'Tarifes 2026');

q('tar','t-cal',
'Iniciem un trajecte a Barcelona a les 19:45 h d’un laborable i acabem a Castelldefels a les 20:30 h. Quina tarifa correspon a l’INICI de la carrera?',
'Iniciamos un trayecto en Barcelona a las 19:45 h de un laborable y terminamos en Castelldefels a las 20:30 h. ¿Qué tarifa corresponde al INICIO de la carrera?',
['La 1 i la 2','La 2','La 1','La 2 i la 1'],
['La 1 y la 2','La 2','La 1','La 2 y la 1'],
2,
'A l’inici (19:45 h, laborable) correspon la T-1. Durant el trajecte canviarà a T-2 en passar les 20:00 h, però la pregunta demana la tarifa d’inici.',
'Al inicio (19:45 h, laborable) corresponde la T-1. Durante el trayecto cambiará a T-2 al pasar las 20:00 h, pero la pregunta pide la tarifa de inicio.',
'Tarifes 2026');

q('tar','t-cal',
'Iniciem un recorregut a Badalona a les 19:50 h d’un dissabte i el finalitzem a Santa Coloma de Gramenet a les 20:15 h. Quina tarifa s’aplica al FINAL?',
'Iniciamos un recorrido en Badalona a las 19:50 h de un sábado y lo finalizamos en Santa Coloma de Gramenet a las 20:15 h. ¿Qué tarifa se aplica al FINAL?',
['La 2','La 3','La 1 i la 2','La 2 i la 1'],
['La 2','La 3','La 1 y la 2','La 2 y la 1'],
0,
'És dissabte: la T-2 s’aplica les 24 hores, no hi ha canvi de tarifa a les 20:00 h. Tot el trajecte és T-2.',
'Es sábado: la T-2 se aplica las 24 horas, no hay cambio de tarifa a las 20:00 h. Todo el trayecto es T-2.',
'Tarifes 2026');

q('tar','t-con',
'Què diu el Reglament sobre els taxímetres automàtics i el canvi de tarifa?',
'¿Qué dice el Reglamento sobre los taxímetros automáticos y el cambio de tarifa?',
['El taxista ha de canviar la tarifa manualment en passar l’hora','Fan l’aplicació automàtica de la tarifa urbana corresponent en funció del dia i l’hora de cada moment del servei','El canvi el fa el client des de l’app','Només canvien si el servei supera els 30 minuts'],
['El taxista debe cambiar la tarifa manualmente al pasar la hora','Hacen la aplicación automática de la tarifa urbana correspondiente en función del día y la hora de cada momento del servicio','El cambio lo hace el cliente desde la app','Solo cambian si el servicio supera los 30 minutos'],
1,
'Els taxímetres automàtics apliquen sols la tarifa urbana que toca en cada moment. També apliquen automàticament el suplement de nit especial a l’inici del servei quan correspon.',
'Los taxímetros automáticos aplican solos la tarifa urbana que toca en cada momento. También aplican automáticamente el suplemento de noche especial al inicio del servicio cuando corresponde.',
'Manual · Taxímetres (pàg. 7)');
