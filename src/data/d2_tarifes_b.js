/* ===== MÒDUL: TARIFES (B) ===== */

q('tar','t-urb',
'A quin àmbit s’apliquen les tarifes urbanes?',
'¿En qué ámbito se aplican las tarifas urbanas?',
['Només a la ciutat de Barcelona','A l’àmbit de l’Àrea Metropolitana de Barcelona','A tota la província de Barcelona','A tota Catalunya'],
['Solo en la ciudad de Barcelona','En el ámbito del Área Metropolitana de Barcelona','En toda la provincia de Barcelona','En toda Cataluña'],
1,
'Les tarifes urbanes s’apliquen en l’àmbit de l’ÀREA METROPOLITANA DE BARCELONA (AMB), no només a la ciutat.',
'Las tarifas urbanas se aplican en el ámbito del ÁREA METROPOLITANA DE BARCELONA (AMB), no solo en la ciudad.',
'Manual · Tarifes (pàg. 5)');

q('tar','t-int',
'A quins serveis s’apliquen les tarifes interurbanes?',
'¿A qué servicios se aplican las tarifas interurbanas?',
['Als serveis amb destinació fora de l’AMB, dins de Catalunya o a la resta de l’Estat','Només als serveis a altres comunitats autònomes','Als serveis nocturns','Als serveis contractats per app'],
['A los servicios con destino fuera del AMB, dentro de Cataluña o al resto del Estado','Solo a los servicios a otras comunidades autónomas','A los servicios nocturnos','A los servicios contratados por app'],
0,
'S’apliquen a serveis amb destinació fora de l’AMB, tant dins de la comunitat autònoma com a la resta de l’Estat.',
'Se aplican a servicios con destino fuera del AMB, tanto dentro de la comunidad autónoma como al resto del Estado.',
'Manual · Tarifes (pàg. 5)');

q('tar','t-int',
'Com s’han de contractar els serveis interurbans T6-T7?',
'¿Cómo deben contratarse los servicios interurbanos T6-T7?',
['Per places individuals','En règim de lloguer per cotxe complet, amb recorregut en circuit tancat fins al punt de sortida pel camí més curt','Només amb reserva prèvia de 24 hores','Amb autorització expressa de l’IMET per a cada servei'],
['Por plazas individuales','En régimen de alquiler por coche completo, con recorrido en circuito cerrado hasta el punto de salida por el camino más corto','Solo con reserva previa de 24 horas','Con autorización expresa del IMET para cada servicio'],
1,
'Els interurbans es contracten per cotxe complet i el recorregut és en circuit tancat fins al punt de sortida pel recorregut més curt.',
'Los interurbanos se contratan por coche completo y el recorrido es en circuito cerrado hasta el punto de salida por el recorrido más corto.',
'Manual · Serveis interurbans (pàg. 7)');

q('tar','t-int',
'Es pot passar de tarifa interurbana a tarifa urbana durant un servei?',
'¿Se puede pasar de tarifa interurbana a tarifa urbana durante un servicio?',
['Sí, quan es torna a entrar a l’AMB','No: la interurbana s’aplica des de l’inici de la prestació i no es pot passar a urbana','Sí, si el client ho demana','Només amb tarifa T-6'],
['Sí, cuando se vuelve a entrar en el AMB','No: la interurbana se aplica desde el inicio de la prestación y no se puede pasar a urbana','Sí, si el cliente lo pide','Solo con tarifa T-6'],
1,
'La tarifa interurbana s’ha d’aplicar des de l’inici de la prestació del servei, sense que es pugui passar a tarifa urbana.',
'La tarifa interurbana debe aplicarse desde el inicio de la prestación del servicio, sin que se pueda pasar a tarifa urbana.',
'Manual · Serveis interurbans (pàg. 7)');

q('tar','t-int',
'En un servei interurbà, es poden fer servir els seients buits per a l’equipatge?',
'En un servicio interurbano, ¿se pueden usar los asientos vacíos para el equipaje?',
['No, mai','Sí, sempre que la dimensió i la naturalesa de l’equipatge no siguin causa de perill','Només si el client paga un suplement','Només al seient del copilot'],
['No, nunca','Sí, siempre que la dimensión y la naturaleza del equipaje no sean causa de peligro','Solo si el cliente paga un suplemento','Solo en el asiento del copiloto'],
1,
'Si no s’ocupen totes les places, es poden fer servir els seients buits per a l’equipatge sempre que no suposi un perill.',
'Si no se ocupan todas las plazas, se pueden usar los asientos vacíos para el equipaje siempre que no suponga un peligro.',
'Manual · Serveis interurbans (pàg. 7)');

q('tar','t-urb',
'Quin dels següents municipis NO forma part de l’AMB?',
'¿Cuál de los siguientes municipios NO forma parte del AMB?',
['Sant Climent de Llobregat','Tiana','Les Botigues de Sitges','Sabadell'],
['Sant Climent de Llobregat','Tiana','Les Botigues de Sitges','Sabadell'],
3,
'Sabadell NO pertany a l’AMB. Sant Climent de Llobregat, Tiana i el barri de Les Botigues de Sitges sí que hi pertanyen.',
'Sabadell NO pertenece al AMB. Sant Climent de Llobregat, Tiana y el barrio de Les Botigues de Sitges sí pertenecen.',
'Manual · Municipis AMB (pàg. 5)');

q('tar','t-urb',
'Quin dels següents municipis SÍ forma part de l’AMB?',
'¿Cuál de los siguientes municipios SÍ forma parte del AMB?',
['Martorell','Cerdanyola del Vallès','Mollet del Vallès','Rubí'],
['Martorell','Cerdanyola del Vallès','Mollet del Vallès','Rubí'],
1,
'Cerdanyola del Vallès forma part de l’AMB. Martorell, Mollet del Vallès i Rubí queden fora i exigeixen tarifa interurbana.',
'Cerdanyola del Vallès forma parte del AMB. Martorell, Mollet del Vallès y Rubí quedan fuera y exigen tarifa interurbana.',
'Manual · Municipis AMB (pàg. 5)');

q('tar','t-urb',
'Quin d’aquests municipis pertany a l’AMB?',
'¿Cuál de estos municipios pertenece al AMB?',
['Terrassa','Vilanova i la Geltrú','El Papiol','Granollers'],
['Terrassa','Vilanova i la Geltrú','El Papiol','Granollers'],
2,
'El Papiol és municipi de l’AMB. Terrassa, Vilanova i la Geltrú i Granollers no en formen part.',
'El Papiol es municipio del AMB. Terrassa, Vilanova i la Geltrú y Granollers no forman parte.',
'Manual · Municipis AMB (pàg. 5)');

q('tar','t-urb',
'Quin d’aquests municipis NO és de l’AMB i obliga a aplicar T-6 o T-7?',
'¿Cuál de estos municipios NO es del AMB y obliga a aplicar T-6 o T-7?',
['Begues','Castellbisbal','Mataró','Torrelles de Llobregat'],
['Begues','Castellbisbal','Mataró','Torrelles de Llobregat'],
2,
'Mataró és fora de l’AMB. Begues, Castellbisbal i Torrelles de Llobregat sí que hi pertanyen.',
'Mataró está fuera del AMB. Begues, Castellbisbal y Torrelles de Llobregat sí pertenecen.',
'Manual · Municipis AMB (pàg. 5)');

q('tar','t-urb',
'Una carrera de Barcelona a Molins de Rei: quina tarifa s’aplica?',
'Una carrera de Barcelona a Molins de Rei: ¿qué tarifa se aplica?',
['Interurbana T-6 o T-7','Urbana T-1 o T-2, segons dia i hora','Sempre la T-3','Sempre la T-4'],
['Interurbana T-6 o T-7','Urbana T-1 o T-2, según día y hora','Siempre la T-3','Siempre la T-4'],
1,
'Molins de Rei és municipi de l’AMB, per tant tarifa urbana (T-1 o T-2 segons dia i hora).',
'Molins de Rei es municipio del AMB, por tanto tarifa urbana (T-1 o T-2 según día y hora).',
'Manual · Municipis AMB (pàg. 5)');

q('tar','t-urb',
'Una carrera de Barcelona a Sitges (nucli urbà): quina tarifa s’aplica?',
'Una carrera de Barcelona a Sitges (núcleo urbano): ¿qué tarifa se aplica?',
['Urbana, perquè Les Botigues de Sitges és de l’AMB','Interurbana, perquè el municipi de Sitges no és de l’AMB','Tarifa 4','Tarifa 3'],
['Urbana, porque Les Botigues de Sitges es del AMB','Interurbana, porque el municipio de Sitges no es del AMB','Tarifa 4','Tarifa 3'],
1,
'Només el BARRI de Les Botigues de Sitges pertany a l’AMB; el nucli urbà de Sitges queda fora i exigeix tarifa interurbana.',
'Solo el BARRIO de Les Botigues de Sitges pertenece al AMB; el núcleo urbano de Sitges queda fuera y exige tarifa interurbana.',
'Manual · Municipis AMB (pàg. 5)');

q('tar','t-cal',
'Quin dia del calendari 2026 de Barcelona és festiu el mes de setembre, a més de la Diada?',
'¿Qué día del calendario 2026 de Barcelona es festivo en septiembre, además de la Diada?',
['21 de setembre','24 de setembre, La Mercè','29 de setembre','No n’hi ha cap més'],
['21 de septiembre','24 de septiembre, La Mercè','29 de septiembre','No hay ningún otro'],
1,
'El calendari 2026 de Barcelona inclou l’11 de setembre (Diada) i el 24 de setembre (La Mercè).',
'El calendario 2026 de Barcelona incluye el 11 de septiembre (Diada) y el 24 de septiembre (La Mercè).',
'Manual · Calendari 2026 (pàg. 7)','C');

q('tar','t-cal',
'Segons el calendari 2026 de Barcelona, quin dia és festiu al juny?',
'Según el calendario 2026 de Barcelona, ¿qué día es festivo en junio?',
['23 de juny','24 de juny, Sant Joan','29 de juny','Cap'],
['23 de junio','24 de junio, San Juan','29 de junio','Ninguno'],
1,
'El 24 de juny (Sant Joan) és festiu. Compte: la nit especial amb suplement de 4,60 € és la del 23 al 24 de juny.',
'El 24 de junio (San Juan) es festivo. Ojo: la noche especial con suplemento de 4,60 € es la del 23 al 24 de junio.',
'Manual · Calendari 2026 (pàg. 7)','C');

q('tar','t-cal',
'Quines són les festes del calendari 2026 de Barcelona al mes de desembre?',
'¿Cuáles son las fiestas del calendario 2026 de Barcelona en el mes de diciembre?',
['Només el 25','6, 8, 25 i 26 de desembre','8 i 25 de desembre','25, 26 i 31 de desembre'],
['Solo el 25','6, 8, 25 y 26 de diciembre','8 y 25 de diciembre','25, 26 y 31 de diciembre'],
1,
'Desembre 2026: 6 (Constitució), 8 (Immaculada), 25 (Nadal) i 26 (Sant Esteve). El 31 NO és festiu, però la nit del 31 a l’1 té suplement especial.',
'Diciembre 2026: 6 (Constitución), 8 (Inmaculada), 25 (Navidad) y 26 (San Esteban). El 31 NO es festivo, pero la noche del 31 al 1 tiene suplemento especial.',
'Manual · Calendari 2026 (pàg. 7)','C');

q('tar','t-cal',
'El 31 de desembre de 2026 a les 22:00 h, quina tarifa i quins suplements apliquem en un servei urbà?',
'El 31 de diciembre de 2026 a las 22:00 h, ¿qué tarifa y qué suplementos aplicamos en un servicio urbano?',
['T-1, sense suplements','T-2 + suplement de nit especial de 4,60 €','T-2 sense suplement, perquè el 31 no és festiu','T-3 obligatòriament'],
['T-1, sin suplementos','T-2 + suplemento de noche especial de 4,60 €','T-2 sin suplemento, porque el 31 no es festivo','T-3 obligatoriamente'],
1,
'A les 22:00 h d’un laborable s’aplica la T-2 i, com que la nit del 31.12 a l’01.01 és nit especial, s’hi afegeix el suplement de 4,60 €.',
'A las 22:00 h de un laborable se aplica la T-2 y, como la noche del 31.12 al 01.01 es noche especial, se añade el suplemento de 4,60 €.',
'Tarifes 2026','C');

q('tar','t-cal',
'Quantes festes recull el calendari 2026 de la ciutat de Barcelona?',
'¿Cuántas fiestas recoge el calendario 2026 de la ciudad de Barcelona?',
['12','14','16','18'],
['12','14','16','18'],
2,
'El calendari 2026 recull 16 dies festius: 1 i 6 de gener, 3 i 6 d’abril, 1 i 25 de maig, 24 de juny, 15 d’agost, 11 i 24 de setembre, 12 d’octubre, 1 de novembre, 6, 8, 25 i 26 de desembre.',
'El calendario 2026 recoge 16 días festivos: 1 y 6 de enero, 3 y 6 de abril, 1 y 25 de mayo, 24 de junio, 15 de agosto, 11 y 24 de septiembre, 12 de octubre, 1 de noviembre, 6, 8, 25 y 26 de diciembre.',
'Manual · Calendari 2026 (pàg. 7)','C');

q('tar','t-cal',
'Segons el calendari 2026, quin dia se celebra el Dilluns de Pasqua?',
'Según el calendario 2026, ¿qué día se celebra el Lunes de Pascua?',
['3 d’abril','6 d’abril','25 de maig','1 de maig'],
['3 de abril','6 de abril','25 de mayo','1 de mayo'],
1,
'El 3 d’abril de 2026 és Divendres Sant i el 6 d’abril, Dilluns de Pasqua. El 25 de maig és la 2a Pasqua.',
'El 3 de abril de 2026 es Viernes Santo y el 6 de abril, Lunes de Pascua. El 25 de mayo es la 2ª Pascua.',
'Manual · Calendari 2026 (pàg. 7)','C');

q('tar','t-cas',
'Un client puja al taxi i, quan ja hem fet 3 km, ens adonem que havíem oblidat posar el taxímetre en marxa. Què fem?',
'Un cliente sube al taxi y, cuando ya hemos hecho 3 km, nos damos cuenta de que habíamos olvidado poner el taxímetro en marcha. ¿Qué hacemos?',
['Cobrem el trajecte sencer estimant-lo','L’import corresponent fins a advertir l’oblit va a càrrec exclusiu del taxista, excloent-ne la baixada de bandera','Anul·lem el servei i baixem el client','Cobrem el doble en arribar'],
['Cobramos el trayecto entero estimándolo','El importe correspondiente hasta advertir el olvido corre a cargo exclusivo del taxista, excluyendo la bajada de bandera','Anulamos el servicio y bajamos al cliente','Cobramos el doble al llegar'],
1,
'L’article 40.5 del RMT és clar: l’import fins al moment d’advertir l’oblit va a càrrec exclusiu del conductor, amb l’exclusió de la baixada de bandera.',
'El artículo 40.5 del RMT es claro: el importe hasta el momento de advertir el olvido corre a cargo exclusivo del conductor, con la exclusión de la bajada de bandera.',
'RMT art. 40.5');

q('tar','t-cas',
'Durant el servei el taxi pateix una avaria que impedeix continuar. Què ha de pagar l’usuari?',
'Durante el servicio el taxi sufre una avería que impide continuar. ¿Qué debe pagar el usuario?',
['Res','La quantitat que marqui el taxímetre fins al moment de l’avaria, descomptant-ne la baixada de bandera','L’import complet fins al destí previst','La meitat del que marqui el taxímetre'],
['Nada','La cantidad que marque el taxímetro hasta el momento de la avería, descontando la bajada de bandera','El importe completo hasta el destino previsto','La mitad de lo que marque el taxímetro'],
1,
'L’usuari satisfà el que marqui el taxímetre fins a l’accident o avaria, descomptant-ne la baixada de bandera, i pot demanar la comprovació als agents de l’autoritat.',
'El usuario satisface lo que marque el taxímetro hasta el accidente o avería, descontando la bajada de bandera, y puede pedir la comprobación a los agentes de la autoridad.',
'RMT art. 40.6');

q('tar','t-cas',
'Un client abandona transitòriament el taxi i ens demana que l’esperem. Què podem exigir com a garantia?',
'Un cliente abandona transitoriamente el taxi y nos pide que lo esperemos. ¿Qué podemos exigir como garantía?',
['Res, cal esperar sense cobrar','L’import del recorregut efectuat més mitja hora d’espera, llevat que la previsió sigui superior','El doble del recorregut fet','Només el DNI del client'],
['Nada, hay que esperar sin cobrar','El importe del recorrido efectuado más media hora de espera, salvo que la previsión sea superior','El doble del recorrido hecho','Solo el DNI del cliente'],
1,
'L’article 40.7 permet demanar, a títol de garantia, l’import del recorregut fet més mitja hora d’espera. Esgotat el termini, el conductor pot considerar-se desvinculat del servei.',
'El artículo 40.7 permite pedir, a título de garantía, el importe del recorrido hecho más media hora de espera. Agotado el plazo, el conductor puede considerarse desvinculado del servicio.',
'RMT art. 40.7');

q('tar','t-cas',
'El client paga amb un bitllet superior a 20 € i l’import de la carrera és inferior. Què podem fer?',
'El cliente paga con un billete superior a 20 € y el importe de la carrera es inferior. ¿Qué podemos hacer?',
['Obligar-lo a pagar amb targeta','Tornar a posar el taxímetre en marxa fins que l’usuari torni amb el canvi, i cobrar el nou marcatge excloent-ne la baixada de bandera','Quedar-nos el bitllet sencer','Anul·lar el servei'],
['Obligarle a pagar con tarjeta','Volver a poner el taxímetro en marcha hasta que el usuario vuelva con el cambio, y cobrar el nuevo marcaje excluyendo la bajada de bandera','Quedarnos el billete entero','Anular el servicio'],
1,
'El conductor només està obligat a donar canvi de fins a 20 €. Si el bitllet és superior i la carrera inferior, pot reactivar el taxímetre fins que el client torni amb el canvi, sense una nova baixada de bandera.',
'El conductor solo está obligado a dar cambio de hasta 20 €. Si el billete es superior y la carrera inferior, puede reactivar el taxímetro hasta que el cliente vuelva con el cambio, sin una nueva bajada de bandera.',
'RMT art. 41.4');

q('tar','t-cas',
'Ens requereixen per esperar viatgers en un lloc on l’estacionament està prohibit. Què podem fer?',
'Nos requieren para esperar viajeros en un lugar donde el estacionamiento está prohibido. ¿Qué podemos hacer?',
['Estacionar igualment, el taxi té exempció','Reclamar l’import del servei efectuat, sense obligació de continuar la prestació','Cobrar doble hora d’espera','Trucar a la Guàrdia Urbana'],
['Estacionar igualmente, el taxi tiene exención','Reclamar el importe del servicio efectuado, sin obligación de continuar la prestación','Cobrar doble hora de espera','Llamar a la Guardia Urbana'],
1,
'L’article 40.8 permet reclamar l’import del servei efectuat sense haver de continuar la prestació quan l’estacionament és prohibit o de durada limitada.',
'El artículo 40.8 permite reclamar el importe del servicio efectuado sin tener que continuar la prestación cuando el estacionamiento está prohibido o es de duración limitada.',
'RMT art. 40.8');

q('tar','t-con',
'Quins són els elements de les tarifes que poden marcar els taxímetres?',
'¿Cuáles son los elementos de las tarifas que pueden marcar los taxímetros?',
['Només els quilòmetres','La baixada de bandera, la tarifa quilomètrica, la tarifa horària i els suplements autoritzats','El preu lliure pactat amb el client','Els quilòmetres i les propines'],
['Solo los kilómetros','La bajada de bandera, la tarifa kilométrica, la tarifa horaria y los suplementos autorizados','El precio libre pactado con el cliente','Los kilómetros y las propinas'],
1,
'Segons l’article 47.5 del RMT, els elements de les tarifes són la baixada de bandera, la tarifa quilomètrica, la tarifa horària i els suplements autoritzats.',
'Según el artículo 47.5 del RMT, los elementos de las tarifas son la bajada de bandera, la tarifa kilométrica, la tarifa horaria y los suplementos autorizados.',
'RMT art. 47.5');

q('tar','t-con',
'Cada quant es revisen les tarifes del taxi metropolità?',
'¿Cada cuánto se revisan las tarifas del taxi metropolitano?',
['Cada dos anys','Anualment, llevat de circumstàncies justificades que aconsellin una revisió extraordinària','Cada cinc anys','Quan ho decideix cada titular'],
['Cada dos años','Anualmente, salvo circunstancias justificadas que aconsejen una revisión extraordinaria','Cada cinco años','Cuando lo decide cada titular'],
1,
'La revisió de tarifes és anual, excepte si concorren circumstàncies justificades que aconsellin una revisió extraordinària.',
'La revisión de tarifas es anual, excepto si concurren circunstancias justificadas que aconsejen una revisión extraordinaria.',
'RMT art. 47.3');

q('tar','t-con',
'Qui aprova el règim i l’estructura de les tarifes del taxi urbà?',
'¿Quién aprueba el régimen y la estructura de las tarifas del taxi urbano?',
['La Generalitat de Catalunya en solitari','L’EMT, sense perjudici de l’autorització per la Comissió de Preus de Catalunya','L’Ajuntament de Barcelona','El Consell Català del Taxi'],
['La Generalitat de Cataluña en solitario','El EMT, sin perjuicio de la autorización por la Comisión de Precios de Cataluña','El Ayuntamiento de Barcelona','El Consell Català del Taxi'],
1,
'Correspon a l’EMT aprovar el règim i l’estructura de les tarifes, sense perjudici de l’autorització per la Comissió de Preus de Catalunya.',
'Corresponde al EMT aprobar el régimen y la estructura de las tarifas, sin perjuicio de la autorización por la Comisión de Precios de Cataluña.',
'RMT art. 47.3');

q('tar','t-con',
'Les tarifes i els suplements autoritzats són obligatoris per a...',
'Las tarifas y los suplementos autorizados son obligatorios para...',
['Només per als conductors','Els titulars de llicències, els conductors, els usuaris i les empreses de mediació','Només per als usuaris','Només per a les emissores'],
['Solo para los conductores','Los titulares de licencias, los conductores, los usuarios y las empresas de mediación','Solo para los usuarios','Solo para las emisoras'],
1,
'L’article 47.1 estableix que són obligatoris per a titulars de llicència, conductors, usuaris i empreses de mediació (emissores, apps, telefonia...).',
'El artículo 47.1 establece que son obligatorios para titulares de licencia, conductores, usuarios y empresas de mediación (emisoras, apps, telefonía...).',
'RMT art. 47.1');

q('tar','t-t3',
'En un servei concertat amb data i hora de recollida, quins preus s’apliquen?',
'En un servicio concertado con fecha y hora de recogida, ¿qué precios se aplican?',
['Els del moment de la contractació','Els que corresponguin a l’inici del servei','Sempre els més cars dels dos','Els que pacti l’app'],
['Los del momento de la contratación','Los que correspondan al inicio del servicio','Siempre los más caros de los dos','Los que pacte la app'],
1,
'Per a serveis concertats amb data i hora, s’apliquen els preus corresponents a l’inici del servei. El mateix criteri val per al suplement de nit especial.',
'Para servicios concertados con fecha y hora, se aplican los precios correspondientes al inicio del servicio. El mismo criterio vale para el suplemento de noche especial.',
'Manual · Tarifa T3, punt 9 (pàg. 6)');

q('tar','t-t3',
'En un servei de realització immediata, quins preus s’apliquen?',
'En un servicio de realización inmediata, ¿qué precios se aplican?',
['Els del moment de la contractació del servei','Els del moment de finalitzar el servei','La mitjana entre inici i final','Els del dia anterior'],
['Los del momento de la contratación del servicio','Los del momento de finalizar el servicio','La media entre inicio y final','Los del día anterior'],
0,
'Per als serveis de realització immediata s’apliquen els preus corresponents al moment de la contractació del servei, i amb el mateix criteri el suplement de nit especial.',
'Para los servicios de realización inmediata se aplican los precios correspondientes al momento de la contratación del servicio, y con el mismo criterio el suplemento de noche especial.',
'Manual · Tarifa T3, punt 10 (pàg. 6)');

q('tar','t-t3',
'El software per calcular la distància de la millor ruta en T3...',
'El software para calcular la distancia de la mejor ruta en T3...',
['L’imposa l’IMET obligatòriament','És de lliure elecció per l’app entre els de reconegut prestigi, i l’app ha d’informar l’usuari de quin utilitza','El tria el taxista en cada servei','No està regulat'],
['Lo impone el IMET obligatoriamente','Es de libre elección por la app entre los de reconocido prestigio, y la app debe informar al usuario de cuál utiliza','Lo elige el taxista en cada servicio','No está regulado'],
1,
'L’app tria lliurement el software entre els de reconegut prestigi i general coneixement del mercat, però ha d’informar l’usuari de quin utilitza.',
'La app elige libremente el software entre los de reconocido prestigio y general conocimiento del mercado, pero debe informar al usuario de cuál utiliza.',
'Manual · Tarifa T3, punts 6-7 (pàg. 6)');

q('tar','t-t3',
'Pot un usuari contractar un servei a mà alçada digital amb taxímetre en comptes de preu tancat?',
'¿Puede un usuario contratar un servicio a mano alzada digital con taxímetro en vez de precio cerrado?',
['No, sempre és preu tancat','Sí: els usuaris poden fer el servei a mà alçada digital amb taxímetre o amb el preu tancat determinat, a través de l’app AMB mobilitat','Només si el taxista hi està d’acord','Només de 08:00 a 20:00'],
['No, siempre es precio cerrado','Sí: los usuarios pueden hacer el servicio a mano alzada digital con taxímetro o con el precio cerrado determinado, a través de la app AMB mobilitat','Solo si el taxista está de acuerdo','Solo de 08:00 a 20:00'],
1,
'El punt 3 de les normes de la T3 preveu que els usuaris puguin fer el servei a mà alçada digital, amb taxímetre o amb el preu tancat, a través de l’app AMB mobilitat.',
'El punto 3 de las normas de la T3 prevé que los usuarios puedan hacer el servicio a mano alzada digital, con taxímetro o con el precio cerrado, a través de la app AMB mobilitat.',
'Manual · Tarifa T3, punt 3 (pàg. 6)');

q('tar','t-cas',
'En un servei amb T3 (preu tancat), l’usuari pot comprovar l’import al taxímetre?',
'En un servicio con T3 (precio cerrado), ¿el usuario puede comprobar el importe en el taxímetro?',
['Sí, sempre','No: en la tarifa de preu tancat no s’aplica aquesta comprovació al taxímetre','Només si ho demana per escrit','Només si paga en efectiu'],
['Sí, siempre','No: en la tarifa de precio cerrado no se aplica esa comprobación en el taxímetro','Solo si lo pide por escrito','Solo si paga en efectivo'],
1,
'L’article 41.1 obliga a permetre la comprovació al taxímetre EXCEPTE en el cas d’aplicació de la tarifa de preu tancat.',
'El artículo 41.1 obliga a permitir la comprobación en el taxímetro EXCEPTO en el caso de aplicación de la tarifa de precio cerrado.',
'RMT art. 41.1');

q('tar','t-cas',
'Quan es pot pagar de forma anticipada un servei de taxi?',
'¿Cuándo se puede pagar de forma anticipada un servicio de taxi?',
['Mai','Només en la tarifa de preu tancat, de forma total o parcial','Sempre que el taxista ho demani','Només en serveis interurbans'],
['Nunca','Solo en la tarifa de precio cerrado, de forma total o parcial','Siempre que el taxista lo pida','Solo en servicios interurbanos'],
1,
'El pagament es fa en finalitzar el servei, excepte en la tarifa de preu tancat, que pot fer-se de forma anticipada total o parcialment.',
'El pago se hace al finalizar el servicio, excepto en la tarifa de precio cerrado, que puede hacerse de forma anticipada total o parcialmente.',
'RMT art. 41.2');

q('tar','t-cas',
'En quins serveis el rebut pot ser electrònic?',
'¿En qué servicios el recibo puede ser electrónico?',
['En tots','En els serveis amb tarifa de preu tancat','Només en els interurbans','En cap, sempre ha de ser imprès'],
['En todos','En los servicios con tarifa de precio cerrado','Solo en los interurbanos','En ninguno, siempre debe ser impreso'],
1,
'En els serveis de tarifa de preu tancat el rebut pot ser electrònic. En la resta, s’ha d’estendre mitjançant la impressora connectada al taxímetre.',
'En los servicios de tarifa de precio cerrado el recibo puede ser electrónico. En el resto, debe extenderse mediante la impresora conectada al taxímetro.',
'RMT art. 41.2');

q('tar','t-cas',
'Quan es pot lliurar un rebut estès en talonari?',
'¿Cuándo se puede entregar un recibo extendido en talonario?',
['Sempre que el client ho demani','Per avaria de la impressora, o quan calgui reflectir dades tarifàries no connectades al taxímetre (com la carrera mínima) — excepte en preu tancat','Només en serveis nocturns','Mai'],
['Siempre que el cliente lo pida','Por avería de la impresora, o cuando haya que reflejar datos tarifarios no conectados al taxímetro (como la carrera mínima) — excepto en precio cerrado','Solo en servicios nocturnos','Nunca'],
1,
'Es pot lliurar rebut de talonari per avaria de la impressora o per reflectir dades tarifàries no connectades al taxímetre, però mai en tarifa de preu tancat.',
'Se puede entregar recibo de talonario por avería de la impresora o para reflejar datos tarifarios no conectados al taxímetro, pero nunca en tarifa de precio cerrado.',
'RMT art. 41.3');

q('tar','t-con',
'Què queda totalment prohibit en finalitzar el servei?',
'¿Qué queda totalmente prohibido al finalizar el servicio?',
['Donar el rebut abans que el demanin','Cobrar una quantitat diferent de la que marqui el taxímetre o superior a l’import del preu tancat','Ajudar el client amb l’equipatge','Encendre el llum interior'],
['Dar el recibo antes de que lo pidan','Cobrar una cantidad diferente de la que marque el taxímetro o superior al importe del precio cerrado','Ayudar al cliente con el equipaje','Encender la luz interior'],
1,
'L’article 41.1 prohibeix totalment cobrar una quantitat diferent de la que marqui el taxímetre o superior a la determinada amb la tarifa de preu tancat.',
'El artículo 41.1 prohíbe totalmente cobrar una cantidad diferente de la que marque el taxímetro o superior a la determinada con la tarifa de precio cerrado.',
'RMT art. 41.1');

q('tar','t-cas',
'Un client agafa el taxi a Barcelona i vol anar a l’aeroport i tornar. Com es cobra el peatge, si n’hi ha?',
'Un cliente coge el taxi en Barcelona y quiere ir al aeropuerto y volver. ¿Cómo se cobra el peaje, si lo hay?',
['No es pot cobrar','Anada i tornada a càrrec del client, i és opcional','Només l’anada','El paga sempre el taxista'],
['No se puede cobrar','Ida y vuelta a cargo del cliente, y es opcional','Solo la ida','Lo paga siempre el taxista'],
1,
'El quadre de tarifes recull el peatge com a opcional i a càrrec del client, tant l’anada com la tornada.',
'El cuadro de tarifas recoge el peaje como opcional y a cargo del cliente, tanto la ida como la vuelta.',
'Tarifes 2026');

q('tar','t-urb',
'Quina diferència hi ha entre la baixada de bandera i la percepció mínima?',
'¿Qué diferencia hay entre la bajada de bandera y la percepción mínima?',
['Cap, són el mateix sempre','La percepció mínima és la que es produeix amb la baixada de bandera i dona dret a un recorregut mínim; en alguns serveis especials pot establir-se una percepció mínima superior','La percepció mínima només existeix a l’aeroport','La baixada de bandera només s’aplica de nit'],
['Ninguna, son lo mismo siempre','La percepción mínima es la que se produce con la bajada de bandera y da derecho a un recorrido mínimo; en algunos servicios especiales puede establecerse una percepción mínima superior','La percepción mínima solo existe en el aeropuerto','La bajada de bandera solo se aplica de noche'],
1,
'La percepció mínima neix amb la baixada de bandera i dona dret a un recorregut mínim. En serveis especials (sortida d’aeroport, emissora...) pot fixar-se una percepció mínima superior.',
'La percepción mínima nace con la bajada de bandera y da derecho a un recorrido mínimo. En servicios especiales (salida de aeropuerto, emisora...) puede fijarse una percepción mínima superior.',
'Manual · Conceptes (pàg. 5)');

q('tar','t-sup',
'Quan s’aplica el suplement de "vehicle ocupat 5-8 places" en una tarifa urbana?',
'¿Cuándo se aplica el suplemento de "vehículo ocupado 5-8 plazas" en una tarifa urbana?',
['Sempre que el vehicle tingui més de 5 places, encara que vagi buit','Només quan el vehicle està efectivament ocupat per entre 5 i 8 persones','Sempre que el client ho demani','Només als caps de setmana'],
['Siempre que el vehículo tenga más de 5 plazas, aunque vaya vacío','Solo cuando el vehículo está efectivamente ocupado por entre 5 y 8 personas','Siempre que el cliente lo pida','Solo los fines de semana'],
1,
'El suplement és per vehicle OCUPAT de 5 a 8 places. Tenir un vehicle de 7 places no dona dret a cobrar-lo si no s’ocupen.',
'El suplemento es por vehículo OCUPADO de 5 a 8 plazas. Tener un vehículo de 7 plazas no da derecho a cobrarlo si no se ocupan.',
'Tarifes 2026 · Suplements','C');

q('tar','t-sup',
'En tarifes interurbanes T-6 i T-7, quin és el límit màxim de suplements?',
'En tarifas interurbanas T-6 y T-7, ¿cuál es el límite máximo de suplementos?',
['17,10 €, igual que a les urbanes','El quadre de tarifes no fixa límit màxim per a les interurbanes','9,20 €','4,60 €'],
['17,10 €, igual que en las urbanas','El cuadro de tarifas no fija límite máximo para las interurbanas','9,20 €','4,60 €'],
1,
'Al quadre de tarifes 2026, el límit màxim de suplements de 17,10 € només apareix a les columnes T-1 i T-2; per a T-6 i T-7 no s’hi fixa límit.',
'En el cuadro de tarifas 2026, el límite máximo de suplementos de 17,10 € solo aparece en las columnas T-1 y T-2; para T-6 y T-7 no se fija límite.',
'Tarifes 2026','C');

q('tar','t-cas',
'Un client demana que l’esperem 20 minuts amb el motor parat en un servei urbà de dia. Com es cobra aquest temps?',
'Un cliente pide que lo esperemos 20 minutos con el motor parado en un servicio urbano de día. ¿Cómo se cobra ese tiempo?',
['No es cobra','Per hora d’espera de T-1: 27,75 €/h, és a dir 9,25 € pels 20 minuts','Per quilòmetres estimats','Amb una nova baixada de bandera'],
['No se cobra','Por hora de espera de T-1: 27,75 €/h, es decir 9,25 € por los 20 minutos','Por kilómetros estimados','Con una nueva bajada de bandera'],
1,
'L’hora d’espera urbana és de 27,75 €. 27,75 ÷ 3 = 9,25 € per 20 minuts. Està prohibit exigir més d’una baixada de bandera en un mateix recorregut.',
'La hora de espera urbana es de 27,75 €. 27,75 ÷ 3 = 9,25 € por 20 minutos. Está prohibido exigir más de una bajada de bandera en un mismo recorrido.',
'Tarifes 2026 · RMT art. 53.3.b','C');

q('tar','t-cas',
'Fem una carrera urbana de dia laborable de 6 km sense suplements. Quin és l’import aproximat?',
'Hacemos una carrera urbana de día laborable de 6 km sin suplementos. ¿Cuál es el importe aproximado?',
['8,10 €','10,90 €','12,76 €','13,70 €'],
['8,10 €','10,90 €','12,76 €','13,70 €'],
1,
'T-1: baixada de bandera 2,80 € + 6 km × 1,35 € = 8,10 €. Total 10,90 € (aproximat, sense temps d’espera).',
'T-1: bajada de bandera 2,80 € + 6 km × 1,35 € = 8,10 €. Total 10,90 € (aproximado, sin tiempo de espera).',
'Tarifes 2026','C');

q('tar','t-cas',
'La mateixa carrera de 6 km, però un dissabte. Quin import aproximat marca el taxímetre?',
'La misma carrera de 6 km, pero un sábado. ¿Qué importe aproximado marca el taxímetro?',
['10,90 €','12,76 €','14,60 €','9,96 €'],
['10,90 €','12,76 €','14,60 €','9,96 €'],
1,
'En dissabte s’aplica la T-2 les 24 h: 2,80 € + 6 km × 1,66 € = 9,96 € → total 12,76 €.',
'En sábado se aplica la T-2 las 24 h: 2,80 € + 6 km × 1,66 € = 9,96 € → total 12,76 €.',
'Tarifes 2026','C');

q('tar','t-cas',
'Una carrera interurbana de 30 km, laborable de dia, sense suplements. Import aproximat?',
'Una carrera interurbana de 30 km, laborable de día, sin suplementos. ¿Importe aproximado?',
['24,60 €','31,85 €','34,60 €','43,30 €'],
['24,60 €','31,85 €','34,60 €','43,30 €'],
1,
'T-6: baixada de bandera 7,25 € + 30 km × 0,82 € = 24,60 €. Total 31,85 €.',
'T-6: bajada de bandera 7,25 € + 30 km × 0,82 € = 24,60 €. Total 31,85 €.',
'Tarifes 2026','C');

q('tar','t-cas',
'La mateixa carrera interurbana de 30 km, però a les 22:00 h d’un laborable. Import aproximat?',
'La misma carrera interurbana de 30 km, pero a las 22:00 h de un laborable. ¿Importe aproximado?',
['31,85 €','34,60 €','36,50 €','26,70 €'],
['31,85 €','34,60 €','36,50 €','26,70 €'],
1,
'T-7: baixada de bandera 7,90 € + 30 km × 0,89 € = 26,70 €. Total 34,60 €.',
'T-7: bajada de bandera 7,90 € + 30 km × 0,89 € = 26,70 €. Total 34,60 €.',
'Tarifes 2026','C');

q('tar','t-sup',
'Quins suplements es poden acumular en una sortida de l’aeroport la nit del 24 al 25 de desembre amb 6 passatgers?',
'¿Qué suplementos se pueden acumular en una salida del aeropuerto la noche del 24 al 25 de diciembre con 6 pasajeros?',
['Només el d’aeroport','Aeroport (4,60) + nit especial (4,60) + vehicle ocupat 5-8 places (4,60) = 13,80 €','Només el de nit especial','Cap, perquè el 25 és festiu'],
['Solo el de aeropuerto','Aeropuerto (4,60) + noche especial (4,60) + vehículo ocupado 5-8 plazas (4,60) = 13,80 €','Solo el de noche especial','Ninguno, porque el 25 es festivo'],
1,
'Els tres suplements són acumulables i sumen 13,80 €, per sota del límit de 17,10 €. A més cal comprovar la carrera mínima de sortida d’aeroport (21 €).',
'Los tres suplementos son acumulables y suman 13,80 €, por debajo del límite de 17,10 €. Además hay que comprobar la carrera mínima de salida de aeropuerto (21 €).',
'Tarifes 2026','C');
