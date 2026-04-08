I18N.register("es", {
  tips: {
    // ========== RECONOCIMIENTO DE PATRONES ==========
    "Look for Repeats": ["busca las repeticiones", "Vea si aparecen las mismas cosas una y otra vez, como Rojo, Azul, Rojo, Azul."],
    "Say It Out Loud": ["Dilo en voz alta", "Intenta decir el patrón con tu voz. ¡Te ayuda a escuchar lo que sigue!"],
    "Use Your Fingers": ["usa tus dedos", "Señale cada elemento del patrón por turno. Esto te ayuda a ver el patrón."],
    "Find the Group": ["Encuentra el grupo", "Intente encontrar el grupo pequeño que se repite, como \"Estrella, Corazón\" o \"Grande, Grande, Pequeño\"."],

    // ========== RAZONAMIENTO NUMÉRICO ==========
    "Count on Your Fingers": ["contar con los dedos", "Usa tus dedos para contar. ¡Levanta un dedo por cada número!"],
    "Use a Number Line": ["Usa una recta numérica", "Imagina los números en una línea: 1, 2, 3, 4, 5... Simplemente encuentra dónde estás y continúa."],
    "Look for Jumps": ["busca los saltos", "Observa cuánto aumenta el número cada vez. ¿Aumentar en 1? ¿Con 2? ¿Con 5?"],
    "Count Out Loud": ["contar en voz alta", "Di los números en voz alta. ¡Te ayuda a saber qué número es el siguiente!"],

    // ========== RAZONAMIENTO LÓGICO ==========
    "Listen to All the Clues": ["Escucha todas las pistas", "Lea o escuche cada palabra con atención. ¡Cada pista te dice algo importante!"],
    "Think Step by Step": ["Piensa paso a paso", "¡No te apresures! Hazlo paso a paso, como subir escaleras."],
    "Ask: What Do I Know?": ["Pregúntese: ¿Qué sé yo?", "Antes de responder, pregúntate: ¿Qué sé con certeza a partir de las pistas?"],
    "Picture It in Your Head": ["Imagínalo en tu mente", "Intenta ver la historia en tu mente. ¡Imagínese personas, animales o cosas!"],

    // ========== RAZONAMIENTO ESPACIAL ==========
    "Count the Sides": ["contar los lados", "Para saber qué forma tiene, cuenta cuántos lados tiene. ¡Los triángulos tienen 3, los cuadrados tienen 4!"],
    "Look at Corners": ["mira las esquinas", "Las esquinas son donde se encuentran dos lados. Cuente las esquinas para identificar la forma."],
    "Think About Turning": ["Piensa en girar", "Si giras una forma, ¡permanece en la misma forma! Un cuadrado girado sigue siendo un cuadrado."],
    "Compare Shapes": ["Compara las formas", "Pregúntese: ¿los lados son rectos o curvos? ¿Todos los lados tienen la misma longitud?"],

    // ========== PROBLEMAS MATEMÁTICOS ==========
    "Draw a Picture": ["hacer un dibujo", "Si el problema habla de manzanas o juguetes, ¡dibújalos! Hace que contar sea más fácil."],
    "Break It Into Steps": ["Dividir en pasos", "Los grandes problemas se pueden dividir en pasos pequeños y sencillos. ¡Un paso a la vez!"],
    "Check Your Answer": ["Comprueba tu respuesta", "Después de encontrar una respuesta, cuente nuevamente para asegurarse de que sea correcta."],
  },
  q: {

  // ==========================================================================
  // RECONOCIMIENTO DE PATRONES — Nivel 1 (TPR57_1_01 – TPR57_1_20)
  // ==========================================================================

  "TPR57_1_01": ["¿Qué sigue? Rojo, Azul, Rojo, Azul, Rojo, ?", "Mira los dos colores. ¡Se alternan!", ["azul", "Verde", "rojo", "amarillo"], "Los colores se alternan: Rojo, Azul, Rojo, Azul. Después del Rojo viene el Azul."],
  "TPR57_1_02": ["¿Qué sigue? Grande, pequeño, grande, pequeño, grande, ?", "Uno es grande y el siguiente pequeño: así van alternándose.", ["Grande", "Mediano", "Diminuto", "Pequeño"], "Grande y pequeño se alternan. Después de grande viene pequeño."],
  "TPR57_1_03": ["¿Qué sigue? Arriba, abajo, arriba, abajo, arriba, ?", "Primero sube, luego baja. ¿Qué sigue después de arriba?", ["Arriba", "Abajo", "Izquierda", "Derecha"], "Arriba y abajo se alternan. Después de arriba viene abajo."],
  "TPR57_1_04": ["¿Qué sigue? Feliz, triste, feliz, triste, feliz, ?", "Las emociones van cambiando de una en una.", ["Feliz", "Enfadado", "Somnoliento", "Triste"], "Feliz y triste se alternan. Después de feliz viene triste."],
  "TPR57_1_05": ["¿Qué sigue? Estrella, Corazón, Estrella, Corazón, Estrella, ?", "Mira las dos formas. ¡Sigue cambiando!", ["corazón", "estrella", "circulo", "rombo"], "Estrella y Corazón se alternan. Después de la Estrella viene el Corazón."],
  "TPR57_1_06": ["¿Qué sigue? 1, 2, 1, 2, 1, ?", "Los números van y vienen entre dos números.", ["3", "4", "1", "2"], "Los números 1 y 2 se alternan. Después del 1 viene el 2."],
  "TPR57_1_07": ["¿Qué sigue? Gato, Perro, Gato, Perro, Gato, ?", "Se alternan dos animales.", ["gato", "perro", "pájaro", "pescado"], "Se alternan perros y gatos. Después del Gato viene el Perro."],
  "TPR57_1_08": ["¿Qué sigue? Sol, Luna, Sol, Luna, Sol, ?", "Piensa en el día y la noche. ¡Cambiar!", ["estrella", "nube", "luna", "sol"], "El Sol y la Luna se alternan. Después del Sol viene la Luna."],
  "TPR57_1_09": ["¿Qué sigue? Círculo, cuadrado, círculo, cuadrado, círculo, ?", "Se alternan dos formas.", ["Triángulo", "Círculo", "Rectángulo", "Cuadrado"], "Círculo y cuadrado se alternan. Después del círculo viene el cuadrado."],
  "TPR57_1_10": ["¿Qué sigue? Día, Noche, Día, Noche, Día, ?", "¡El día y la noche siguen cambiando!", ["mañana", "dia", "tarde", "noche"], "Día y Noche se alternan. Después del día viene la noche."],
  "TPR57_1_11": ["¿Qué sigue? Caliente, Frío, Caliente, Frío, Caliente, ?", "Uno está caliente, el siguiente está frío. Sigue cambiando.", ["cálido", "frio", "caliente", "genial"], "Se alternan frío y calor. Después del calor viene el frío."],
  "TPR57_1_12": ["¿Qué sigue? Manzana, Plátano, Manzana, Plátano, Manzana, ?", "¡Dos frutas siguen cambiándose!", ["cereza", "manzana", "Plátano", "uva"], "Se alternan manzana y plátano. Después de la manzana viene el plátano."],
  "TPR57_1_13": ["¿Cuántos puntos quedan a continuación? 1 punto, 2 puntos, 3 puntos, ?", "Cuente los puntos. ¡El número aumenta en uno cada vez!", ["5 puntos", "2 puntos", "4 puntos", "1 punto"], "Los puntos aumentan en uno cada vez: 1, 2, 3 y luego 4 puntos."],
  "TPR57_1_14": ["¿Cuántos aplausos vienen? 1 tiempo, 2 tiempos, 3 tiempos, 4 tiempos, ?", "El número de aplausos siempre aumenta. ¿Qué número viene después del 4?", ["5 latidos", "3 latidos", "6 latidos", "4 latidos"], "Los aplausos aumentan en uno cada vez: 1, 2, 3, 4, luego 5 aplausos."],
  "TPR57_1_15": ["¿Qué sigue? ¿Niño, niña, niño, niña, niño?", "Un niño y una niña se alternan.", ["chico", "chica", "bebe", "hombre"], "Niño y niña se alternan. Después del Niño viene la Niña."],
  "TPR57_1_16": ["¿Qué sigue? Abierto, Cerrado, Abierto, Cerrado, Abierto, ?", "Abrimos y luego cerramos. Abrimos y luego cerramos. ¿Qué sigue?", ["bloqueado", "abierto", "Golpeado", "Cerrado"], "Alternativa abierta y cerrada. Después de Abierto viene Cerrado."],
  "TPR57_1_17": ["¿Qué sigue? Izquierda, Derecha, Izquierda, Derecha, Izquierda, ?", "¡La izquierda y la derecha siguen cambiando!", ["Derecha", "Izquierda", "arriba", "abajo"], "Se alternan izquierda y derecha. Después de la izquierda viene la derecha."],
  "TPR57_1_18": ["¿Cuántas estrellas hay a continuación? 1 estrella, 2 estrellas, 3 estrellas, 4 estrellas, ?", "Cuenta las estrellas. ¡Cada vez crezco uno!", ["3 estrellas", "6 estrellas", "4 estrellas", "5 estrellas"], "Las estrellas aumentan en uno cada vez: 1, 2, 3, 4 y luego 5 estrellas."],
  "TPR57_1_19": ["¿Qué sigue? Negro, Blanco, Negro, Blanco, Negro, ?", "¡Dos colores siguen cambiando!", ["gris", "blanco", "marrón", "negro"], "Blanco y negro se alternan. Después del negro viene el blanco."],
  "TPR57_1_20": ["¿Qué sigue? Sí, No, Sí, No, Sí, ?", "Alternativa Sí y No.", ["tal vez", "si", "No", "A veces"], "Alternativa Sí y No. Después del Sí viene el No."],

  // ==========================================================================
  // RECONOCIMIENTO DE PATRONES — Nivel 2 (TPR57_2_01 – TPR57_2_20)
  // ==========================================================================

  "TPR57_2_01": ["¿Qué sigue? Rojo, Rojo, Azul, Rojo, Rojo, Azul, Rojo, Rojo, ?", "Mira el grupo que se repite: dos de un color, luego uno de otro.", ["rojo", "azul", "Verde", "amarillo"], "El patrón es rojo, rojo, azul repetido. Después del Rojo, el Rojo sigue al Azul."],
  "TPR57_2_02": ["¿Qué sigue? Palmada, palmada, pisotón, palmada, palmada, pisotón, palmada, palmada, ?", "Escucha: dos palmadas y luego algo distinto. ¿Qué toca?", ["Palmada", "Salto", "Pisotón", "Chasquido"], "El patrón es palmada, palmada, pisotón. Después de dos palmadas viene el pisotón."],
  "TPR57_2_03": ["¿Qué sigue? Grande, Grande, Pequeño, Grande, Grande, Pequeño, Grande, Grande, ?", "Dos grandes y luego uno pequeño. ¿Dos grandes y luego uno...?", ["pequeño", "grande", "el pequeño", "Medio ambiente"], "El patrón se repite Grande, Grande, Pequeño. Después de lo grande, lo grande sigue a lo pequeño."],
  "TPR57_2_04": ["¿Qué sigue? A, A, B, B, A, A, B, B, A, A, ?", "Las letras vienen en pares: dos A y luego dos B.", ["un", "c", "re", "b"], "El patrón es A, A, B, B repitiéndose. Después de A, A sigue a B."],
  "TPR57_2_05": ["¿Qué sigue? Estrella, Estrella, Luna, Luna, Estrella, Estrella, Luna, Luna, Estrella, Estrella, ?", "Dos estrellas, dos lunas, dos estrellas, dos lunas...", ["estrella", "luna", "sol", "nube"], "El patrón es Estrella, Estrella, Luna, Luna repitiéndose. Después de la Estrella, la Estrella sigue a la Luna."],
  "TPR57_2_06": ["¿Qué sigue? Rojo, Azul, Azul, Rojo, Azul, Azul, Rojo, Azul, ?", "Uno rojo, luego dos azules. Uno rojo, luego dos...", ["rojo", "azul", "Verde", "amarillo"], "El patrón es rojo, azul, azul repetido. Después del rojo, el azul sigue al azul."],
  "TPR57_2_07": ["¿Qué sigue? Alegre, Alegre, Triste, Alegre, Alegre, Triste, Alegre, Alegre, ?", "Dos felices y luego uno triste. ¿Dos hurras y luego uno...?", ["triste", "alegre", "Molesto", "sueño"], "El patrón se repite Feliz, Feliz, Triste. Después de Alegre, Alegre sigue Triste."],
  "TPR57_2_08": ["¿Qué sigue? 1, 1, 2, 2, 3, 3, 4, 4, 5,?", "Cada número aparece dos veces. ¿Qué viene después de los primeros 5?", ["4", "6", "5", "7"], "Cada número aparece dos veces: 1,1, 2,2, 3,3, 4,4. Después de los primeros 5 vienen otros 5."],
  "TPR57_2_09": ["¿Qué sigue? Círculo, Círculo, Cuadrado, Cuadrado, Círculo, Círculo, Cuadrado, ?", "Dos círculos, dos cuadrados, dos círculos, ¿cuántos cuadrados entonces?", ["circulo", "cuadrado", "Triangulo", "Rectángulo"], "El patrón es Círculo, Círculo, Cuadrado, Cuadrado. Necesitamos la segunda plaza."],
  "TPR57_2_10": ["¿Qué sigue? Perro, Gato, Gato, Perro, Gato, Gato, Perro, Gato, ?", "Un perro, luego dos gatos. Un perro, luego dos gatos...", ["perro", "pájaro", "pescado", "gato"], "El patrón es Perro, Gato, Gato repitiéndose. Después del Perro, el Gato sigue al Gato."],
  "TPR57_2_11": ["¿Qué sigue? Rojo, Verde, Azul, Rojo, Verde, Azul, Rojo, Verde, ?", "Se repiten tres colores en el mismo orden.", ["rojo", "Verde", "azul", "amarillo"], "El patrón es rojo, verde, azul repetido. Después del rojo, el verde sigue al azul."],
  "TPR57_2_12": ["¿Qué sigue? Grande, Pequeño, Pequeño, Grande, Pequeño, Pequeño, Grande, Pequeño, ?", "Uno grande, luego dos pequeños. Uno grande, luego dos pequeños...", ["grande", "pequeño", "el pequeño", "Medio ambiente"], "El patrón se repite Grande, Pequeño, Pequeño. Después de lo grande, lo pequeño sigue a lo pequeño."],
  "TPR57_2_13": ["¿Qué sigue? 1, 2, 3, 1, 2, 3, 1, 2,?", "Se repiten tres números: 1, 2, 3.", ["1", "4", "2", "3"], "El patrón es 1, 2, 3 repetitivos. Después del 1, el 2 viene el 3."],
  "TPR57_2_14": ["¿Qué sigue? Sol, Lluvia, Lluvia, Sol, Lluvia, Lluvia, Sol, Lluvia, ?", "Un sol, luego dos lluvias. Un sol, luego dos lluvias...", ["esta lloviendo", "sol", "nube", "nieve"], "El patrón es Sol, Lluvia, Lluvia repitiéndose. Después del Sol, la Lluvia sigue a la Lluvia."],
  "TPR57_2_15": ["¿Qué sigue? Corazón, Estrella, Corazón, Corazón, Estrella, Corazón, Corazón, Estrella, ?", "Después de cada estrella, ¿qué sigue?", ["estrella", "circulo", "corazón", "rombo"], "El patrón es Corazón, Estrella, Corazón repitiéndose. Después de la Estrella viene el Corazón."],
  "TPR57_2_16": ["¿Qué sigue? A, B, C, A, B, C, A, B, ?", "¡Se repiten tres letras en orden!", ["un", "b", "re", "c"], "El patrón es A, B, C repetido. Después de A, B sigue a C."],
  "TPR57_2_17": ["¿Qué sigue? Salto, paso, salto, salto, paso, salto, salto, paso, ?", "Se repiten tres acciones en el mismo orden.", ["saltar", "Ups", "paso", "Huir"], "El patrón es Saltar, Paso, Saltar que se repite. Después del salto, viene el paso, el salto."],
  "TPR57_2_18": ["¿Qué sigue? Rojo, Azul, Rojo, Rojo, Azul, Rojo, Rojo, Azul, ?", "Después de cada Azul, ¿qué sigue?", ["azul", "Verde", "rojo", "amarillo"], "El patrón es rojo, azul, rojo repetido. Después del Azul viene el Rojo."],
  "TPR57_2_19": ["¿Qué sigue? Rosa, Rosa, Púrpura, Rosa, Rosa, Púrpura, Rosa, Rosa, ?", "Dos rosas y luego una violeta. ¿Dos rosas y luego un...?", ["rosa", "Púrpura", "azul", "rojo"], "El patrón es rosa, rosa, morado repetido. Después del rosa, el rosa sigue al morado."],
  "TPR57_2_20": ["¿Qué sigue? Arriba, Abajo, Abajo, Arriba, Abajo, Abajo, Arriba, Abajo, ?", "Uno arriba, luego dos abajo. Uno arriba, luego dos abajo...", ["arriba", "Izquierda", "Derecha", "abajo"], "El patrón se repite arriba, abajo, abajo. Después de Arriba, Abajo sigue Abajo."],

  // ==========================================================================
  // RECONOCIMIENTO DE PATRONES — Nivel 3 (TPR57_3_01 – TPR57_3_20)
  // ==========================================================================

  "TPR57_3_01": ["¿Qué animal sigue? Gato, Perro, Pez, Gato, Perro, Pez, Gato, Perro, ?", "Tres animales repiten en el mismo orden.", ["gato", "pescado", "perro", "pájaro"], "El patrón se repite: Gato, Perro y Pez. Después del Gato, el Perro sigue al Pez."],
  "TPR57_3_02": ["¿Qué sigue? 1, 1, 2, 2, 3, 3, 4, 4,?", "Cada número aparece dos veces. ¿Qué nuevo número sigue?", ["4", "3", "5", "6"], "Cada número aparece dos veces: 1,1, 2,2, 3,3, 4,4. El siguiente es el 5."],
  "TPR57_3_03": ["¿Qué sigue? Manzana, Plátano, Cereza, Manzana, Plátano, Cereza, Manzana, Plátano, ?", "Se repiten tres frutos en el mismo orden.", ["manzana", "Plátano", "cereza", "uva"], "El patrón es repetición de manzana, plátano y cereza. Después del plátano viene la cereza."],
  "TPR57_3_04": ["¿Qué sigue? Rojo, Amarillo, Azul, Rojo, Amarillo, Azul, Rojo, Amarillo, ?", "Tres colores siempre regresan en el mismo orden.", ["rojo", "amarillo", "Verde", "azul"], "El patrón se repite en rojo, amarillo y azul. Después del Amarillo viene el Azul."],
  "TPR57_3_05": ["¿Qué forma sigue? Triángulo, Círculo, Cuadrado, Triángulo, Círculo, Cuadrado, Triángulo, Círculo, ?", "Se repiten tres formas en el mismo orden.", ["cuadrado", "Triangulo", "circulo", "Rectángulo"], "El patrón es un Triángulo, un Círculo y un Cuadrado que se repiten. Después del Círculo viene la Plaza."],
  "TPR57_3_06": ["¿Qué sigue? 2, 4, 6, 2, 4, 6, 2, 4,?", "Se repiten tres números.", ["2", "8", "6", "4"], "El patrón es 2, 4, 6 repeticiones. Después del 2, viene el 4, el 6."],
  "TPR57_3_07": ["¿Qué sigue? Pequeño, Mediano, Grande, Pequeño, Mediano, Grande, Pequeño, Mediano, ?", "Se repiten tres tamaños de menor a mayor.", ["pequeño", "grande", "Medio ambiente", "el pequeño"], "El patrón se repite pequeño, mediano y grande. Después del Medio viene el Grande."],
  "TPR57_3_08": ["¿Qué sigue? Caminar, correr, saltar, caminar, correr, saltar, caminar, correr, ?", "Se repiten tres acciones en el mismo orden.", ["Caminando", "paso", "Huir", "saltar"], "El patrón es Caminar, Correr, Saltar y se repite. Después de la carrera viene el salto."],
  "TPR57_3_09": ["¿Qué día viene después del sábado?", "Piensa en los días de la semana en orden.", ["domingo", "lunes", "viernes", "martes"], "Los días van: viernes, sábado, domingo. Después del sábado viene el domingo."],
  "TPR57_3_10": ["¿Qué sigue? A, B, A, C, A, B, A, C, A, B, A, ?", "Encuentra el grupo repetido: A, B, A, C.", ["un", "b", "c", "re"], "El patrón es A, B, A, C repetido. Después de A, B, A viene C."],
  "TPR57_3_11": ["¿Qué sigue? 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3,?", "Los números suben y luego bajan. ¡Mira el salto!", ["1", "2", "4", "3"], "El patrón es 1, 2, 3, 2 repetitivos. Después de 1, 2, 3 viene 2."],
  "TPR57_3_12": ["¿Qué sigue? Sol, Nube, Lluvia, Sol, Nube, Lluvia, Sol, Nube, ?", "Se repiten tres palabras sobre el tiempo.", ["sol", "nieve", "nube", "esta lloviendo"], "El patrón es Sol, Nube, Lluvia repitiéndose. Después de la Nube viene la Lluvia."],
  "TPR57_3_13": ["¿Qué sigue? Alto, Más Alto, Más Alto, Alto, Más Alto, Más Alto, Alto, Más Alto, ?", "Se repiten tres tamaños.", ["el mas alto", "alto", "superior", "corto"], "El patrón se repite Alto, Más Alto, Más Alto. Después de lo Más Alto viene lo Más Alto."],
  "TPR57_3_14": ["¿Qué número es el siguiente? 1, 3, 5, 1, 3, 5, 1, 3,?", "Se repiten tres números.", ["1", "5", "3", "7"], "El patrón es 1, 3, 5 repeticiones. Después del 1, viene el 3, el 5."],
  "TPR57_3_15": ["¿Qué sigue? Comer, Dormir, Jugar, Comer, Dormir, Jugar, Comer, Dormir, ?", "Se repiten tres actividades.", ["comer", "dormir", "Juegalo", "Descansa un poco"], "El patrón es Comer, Dormir, Jugar que se repite. Después de dormir viene el juego."],
  "TPR57_3_16": ["¿Qué sigue? Rojo, Rojo, Azul, Azul, Verde, Verde, Rojo, Rojo, Azul, Azul, ?", "Cada color aparece dos veces y luego comienza el siguiente color.", ["rojo", "azul", "Verde", "amarillo"], "El patrón es rojo, rojo, azul, azul, verde, verde repetido. Después del Azul, el Azul sigue al Verde."],
  "TPR57_3_17": ["¿Qué número es el siguiente? ¿Uno, dos, tres, cuatro, cinco, seis?", "¡Sigue contando!", ["Optar", "siete", "nueve", "diez"], "Contamos: Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete."],
  "TPR57_3_18": ["¿Qué sigue? Piedra, papel, tijera, piedra, papel, tijera, piedra, papel, ?", "Se repiten tres palabras.", ["papel", "piedra", "bolígrafo", "tijeras"], "El patrón es piedra, papel y tijera que se repite. Después del papel vienen las tijeras."],
  "TPR57_3_19": ["¿Qué sigue? Estrella, Luna, Estrella, Estrella, Luna, Estrella, Estrella, Luna, ?", "Después de cada Luna, ¿qué sigue siempre?", ["estrella", "luna", "sol", "nube"], "El patrón es Estrella, Luna, Estrella repitiéndose. Después de la Luna viene la Estrella."],
  "TPR57_3_20": ["¿Qué sigue? 1, 2, 1, 1, 2, 1, 1, 2,?", "Después de cada 2, ¿qué sigue siempre?", ["2", "3", "1", "4"], "El patrón es 1, 2, 1 repetitivo. Después del 2 viene el 1."],

  // ==========================================================================
  // RAZONAMIENTO NUMÉRICO — Nivel 1 (TNR57_1_01 – TNR57_1_20)
  // ==========================================================================

  "TNR57_1_01": ["¿Qué sigue? 1, 2, 3, 4, ?", "Cuente de uno a uno.", ["5", "6", "3", "7"], "Contamos del 1 al 1: 1, 2, 3, 4, 5. El siguiente número es 5."],
  "TNR57_1_02": ["¿Qué sigue? 3, 4, 5, 6, ?", "¡Sigue contando de uno a uno!", ["5", "8", "6", "7"], "Contamos del 1 al 1: 3, 4, 5, 6, 7. El siguiente número es 7."],
  "TNR57_1_03": ["¿Qué sigue? 5, 6, 7, 8, ?", "¿Qué número viene después del 8?", ["7", "9", "10", "8"], "Contamos del 1 al 1: 5, 6, 7, 8, 9. El siguiente número es 9."],
  "TNR57_1_04": ["¿Qué sigue? 2, 4, 6, 8, ?", "Nos saltamos un número cada vez. ¡Cuenta de 2 a 2!", ["9", "12", "10", "11"], "Contamos de 2 a 2: 2, 4, 6, 8, 10. El siguiente número es 10."],
  "TNR57_1_05": ["¿Qué sigue? 1, 3, 5, 7, ?", "Saltamos un número cada vez: 1, saltamos 2, 3, saltamos 4, 5...", ["8", "10", "11", "9"], "Contamos de 2 en 2 (números impares): 1, 3, 5, 7, 9. El siguiente número es 9."],
  "TNR57_1_06": ["¿Qué sigue? 4, 6, 8, 10, ?", "Cuente de 2 a 2. ¿Cuánto es 10 más 2?", ["12", "11", "14", "9"], "Contamos de 2 en 2: 4, 6, 8, 10, 12. El siguiente número es 12."],
  "TNR57_1_07": ["¿Qué sigue? 6, 7, 8, 9, ?", "¡Sigue contando! ¿Qué viene después del 9?", ["11", "10", "12", "8"], "Contamos del 1 al 1: 6, 7, 8, 9, 10. El siguiente número es 10."],
  "TNR57_1_08": ["¿Qué sigue? 2, 3, 4, 5, ?", "Cuente de uno a uno.", ["7", "5", "6", "8"], "Contamos del 1 al 1: 2, 3, 4, 5, 6. El siguiente número es 6."],
  "TNR57_1_09": ["¿Qué sigue? 7, 8, 9, 10, ?", "¿Qué número viene después del 10?", ["12", "10", "9", "11"], "Contamos del 1 al 1: 7, 8, 9, 10, 11. El siguiente número es 11."],
  "TNR57_1_10": ["¿Qué sigue? 6, 8, 10, 12, ?", "¡Saltamos de 2 en 2 cada vez!", ["14", "13", "15", "16"], "Contamos de 2 en 2: 6, 8, 10, 12, 14. El siguiente número es 14."],
  "TNR57_1_11": ["¿Qué sigue? 10, 11, 12, 13, ?", "¡Sigue contando de uno a uno!", ["15", "14", "12", "16"], "Contamos del 1 al 1: 10, 11, 12, 13, 14. El siguiente número es 14."],
  "TNR57_1_12": ["¿Qué número falta? 1, 2, ?, 4, 5", "¿Qué número está entre 2 y 4?", ["6", "7", "3", "0"], "Contando 1, 2, 3, 4, 5. El número que falta es 3."],
  "TNR57_1_13": ["¿Qué sigue? 8, 9, 10, 11, ?", "¿Qué número viene después del 11?", ["10", "13", "14", "12"], "Contamos del 1 al 1: 8, 9, 10, 11, 12. El siguiente número es 12."],
  "TNR57_1_14": ["¿Qué sigue? 10, 12, 14, 16, ?", "¡Saltamos de 2 en 2 cada vez!", ["18", "17", "19", "20"], "Contamos de 2 en 2: 10, 12, 14, 16, 18. El siguiente número es 18."],
  "TNR57_1_15": ["¿Qué sigue? 4, 5, 6, 7, ?", "¡Sigue contando de uno a uno!", ["9", "8", "10", "6"], "Contamos del 1 al 1: 4, 5, 6, 7, 8. El siguiente número es 8."],
  "TNR57_1_16": ["¿Qué número falta? 5, 6, 7, ?, 9", "¿Qué número está entre el 7 y el 9?", ["10", "6", "8", "11"], "Contando 5, 6, 7, 8, 9. El número que falta es 8."],
  "TNR57_1_17": ["¿Qué sigue? 3, 5, 7, 9, ?", "Contamos de 2 a 2. ¿Cuánto es 9 más 2?", ["10", "12", "13", "11"], "Contamos de 2 a 2: 3, 5, 7, 9, 11. El siguiente número es 11."],
  "TNR57_1_18": ["¿Qué sigue? 11, 12, 13, 14, ?", "¡Sigue contando!", ["15", "16", "14", "17"], "Contamos del 1 al 1: 11, 12, 13, 14, 15. El siguiente número es 15."],
  "TNR57_1_19": ["¿Qué número falta? 2, 4, ?, 8, 10", "Contamos del 2 al 2. ¿Qué hay entre 4 y 8?", ["5", "6", "7", "12"], "Contando de 2 en 2: 2, 4, 6, 8, 10. El número que falta es 6."],
  "TNR57_1_20": ["¿Qué sigue? 14, 16, 18, 20, ?", "Cuente de 2 a 2. ¿Cuánto es 20 más 2?", ["21", "23", "22", "24"], "Contamos de 2 en 2: 14, 16, 18, 20, 22. El siguiente número es 22."],

  // ==========================================================================
  // RAZONAMIENTO NUMÉRICO — Nivel 2 (TNR57_2_01 – TNR57_2_20)
  // ==========================================================================

  "TNR57_2_01": ["Número del 5 al 5: 5, 10, 15, 20, ?", "Añade 5 cada vez. ¿Cuánto es 20 más 5?", ["25", "30", "22", "21"], "Contamos del 5 al 5: 5, 10, 15, 20, 25. El siguiente número es 25."],
  "TNR57_2_02": ["Cuente del 10 al 10: 10, 20, 30, 40, ?", "Añade 10 cada vez. ¿Cuánto es 40 más 10?", ["45", "50", "60", "55"], "Contamos del 10 al 10: 10, 20, 30, 40, 50. El siguiente número es 50."],
  "TNR57_2_03": ["Cuenta atrás: 10, 9, 8, 7, ?", "Disminuimos en 1 cada vez.", ["5", "8", "6", "9"], "Contamos hacia atrás: 10, 9, 8, 7, 6. El siguiente número es 6."],
  "TNR57_2_04": ["Número del 5 al 5: 10, 15, 20, 25, ?", "Añade 5 cada vez. ¿Cuánto es 25 más 5?", ["28", "35", "25", "30"], "Contamos del 5 al 5: 10, 15, 20, 25, 30. El siguiente número es 30."],
  "TNR57_2_05": ["Cuenta atrás: 5, 4, 3, 2, ?", "¡Sigue bajando 1!", ["1", "0", "3", "6"], "Contamos atrás: 5, 4, 3, 2, 1. El siguiente número es 1."],
  "TNR57_2_06": ["Cuente del 10 al 10: 20, 30, 40, 50, ?", "Añade 10 cada vez.", ["55", "60", "70", "65"], "Contamos del 10 al 10: 20, 30, 40, 50, 60. El siguiente número es 60."],
  "TNR57_2_07": ["Cuenta atrás: 8, 7, 6, 5, ?", "¡Sigue bajando 1!", ["3", "6", "4", "5"], "Contamos hacia atrás: 8, 7, 6, 5, 4. El siguiente número es 4."],
  "TNR57_2_08": ["Número del 5 al 5: 25, 30, 35, 40, ?", "Añade 5 cada vez. ¿Cuánto es 40 más 5?", ["50", "42", "44", "45"], "Contamos de 5 a 5: 25, 30, 35, 40, 45. El siguiente número es 45."],
  "TNR57_2_09": ["Cuente del 10 al 10: 30, 40, 50, 60, ?", "Añade 10 cada vez. ¿Cuánto es 60 más 10?", ["70", "65", "80", "75"], "Contamos del 10 al 10: 30, 40, 50, 60, 70. El siguiente número es 70."],
  "TNR57_2_10": ["Cuente hacia atrás de 2 en 2: 20, 18, 16, 14, ?", "Resta 2 cada vez.", ["13", "12", "10", "15"], "Contamos hacia atrás de 2 en 2: 20, 18, 16, 14, 12. El siguiente número es 12."],
  "TNR57_2_11": ["Número del 5 al 5: 30, 35, 40, 45, ?", "Añade 5 cada vez.", ["55", "48", "50", "52"], "Contamos de 5 en 5: 30, 35, 40, 45, 50. El siguiente número es 50."],
  "TNR57_2_12": ["Cuenta regresiva: 15, 14, 13, 12, ?", "¡Sigue bajando 1!", ["10", "13", "14", "11"], "Contamos hacia atrás: 15, 14, 13, 12, 11. El siguiente número es 11."],
  "TNR57_2_13": ["Cuente del 10 al 10: 50, 60, 70, 80, ?", "Añade 10 cada vez.", ["90", "85", "100", "95"], "Contamos del 10 al 10: 50, 60, 70, 80, 90. El siguiente número es 90."],
  "TNR57_2_14": ["Cuente hacia atrás de 2 en 2: 10, 8, 6, 4, ?", "Resta 2 cada vez.", ["3", "2", "1", "0"], "Contamos hacia atrás de 2 a 2: 10, 8, 6, 4, 2. El siguiente número es 2."],
  "TNR57_2_15": ["¿Qué número falta? 5, 10, ?, 20, 25", "Contamos del 5 al 5. ¿Cuánto hay entre 10 y 20?", ["12", "18", "15", "14"], "Contando de 5 a 5: 5, 10, 15, 20, 25. El número que falta es 15."],
  "TNR57_2_16": ["Número del 5 al 5: 40, 45, 50, 55, ?", "Añade 5 cada vez.", ["58", "65", "55", "60"], "Contamos de 5 en 5: 40, 45, 50, 55, 60. El siguiente número es 60."],
  "TNR57_2_17": ["Cuente hacia atrás de 10 a 10: 30, 20, 10, ?", "Resta 10 cada vez.", ["0", "5", "15", "10"], "Contamos hacia atrás de 10 a 10: 30, 20, 10, 0. El siguiente número es 0."],
  "TNR57_2_18": ["Cuente de 10 a 10: 40, 50, 60, 70, ?", "Añade 10 cada vez.", ["75", "80", "90", "85"], "Contamos del 10 al 10: 40, 50, 60, 70, 80. El siguiente número es 80."],
  "TNR57_2_19": ["¿Qué número falta? 10, 20, 30, ?, 50", "Contamos del 10 al 10. ¿Qué hay entre 30 y 50?", ["35", "45", "40", "25"], "Contando de 10: 10, 20, 30, 40, 50. El número que falta es 40."],
  "TNR57_2_20": ["Cuente hacia atrás de 5 en 5: 50, 45, 40, 35, ?", "Resta 5 cada vez.", ["25", "32", "34", "30"], "Contamos hacia atrás de 5 en 5: 50, 45, 40, 35, 30. El siguiente número es 30."],

  // ==========================================================================
  // RAZONAMIENTO NUMÉRICO — Nivel 3 (TNR57_3_01 – TNR57_3_20)
  // ==========================================================================

  "TNR57_3_01": ["Número del 3 al 3: 3, 6, 9, 12, ?", "Añade 3 cada vez. ¿Cuánto es 12 más 3?", ["15", "13", "14", "16"], "Contamos de 3 a 3: 3, 6, 9, 12, 15. El siguiente número es 15."],
  "TNR57_3_02": ["Número del 3 al 3: 6, 9, 12, 15, ?", "Añade 3 cada vez.", ["16", "18", "17", "19"], "Contamos de 3 a 3: 6, 9, 12, 15, 18. El siguiente número es 18."],
  "TNR57_3_03": ["¿Qué número falta? 2, 4, ?, 8, 10, 12", "Contamos del 2 al 2. ¿Qué hay entre 4 y 8?", ["5", "7", "6", "9"], "Contando de 2 en 2: 2, 4, 6, 8, 10, 12. El número que falta es 6."],
  "TNR57_3_04": ["Número del 3 al 3: 9, 12, 15, 18, ?", "Añade 3 cada vez. ¿Cuánto es 18 más 3?", ["19", "20", "22", "21"], "Contamos de 3 a 3: 9, 12, 15, 18, 21. El siguiente número es 21."],
  "TNR57_3_05": ["¿Qué número falta? 5, 10, 15, ?, 25", "Contamos de 5 a 5. ¿Cuánto hay entre 15 y 25?", ["20", "18", "22", "19"], "Contando de 5 a 5: 5, 10, 15, 20, 25. El número que falta es 20."],
  "TNR57_3_06": ["Cuente hacia atrás de 2 en 2: 20, 18, 16, 14, ?", "Resta 2 cada vez.", ["13", "12", "11", "10"], "Contamos hacia atrás de 2 en 2: 20, 18, 16, 14, 12. El siguiente número es 12."],
  "TNR57_3_07": ["Número del 3 al 3: 12, 15, 18, 21, ?", "Añade 3 cada vez. ¿Cuánto es 21 más 3?", ["22", "23", "24", "25"], "Contamos de 3 en 3: 12, 15, 18, 21, 24. El siguiente número es 24."],
  "TNR57_3_08": ["¿Qué número falta? 3, 6, ?, 12, 15", "Contamos de 3 a 3. ¿Cuánto hay entre 6 y 12?", ["7", "8", "10", "9"], "Contando de 3 en 3: 3, 6, 9, 12, 15. El número que falta es 9."],
  "TNR57_3_09": ["Cuente hacia atrás de 3 a 3: 15, 12, 9, 6, ?", "Resta 3 cada vez.", ["3", "4", "5", "2"], "Contamos hacia atrás de 3 a 3: 15, 12, 9, 6, 3. El siguiente número es 3."],
  "TNR57_3_10": ["Número del 4 al 4: 4, 8, 12, 16, ?", "Añade 4 cada vez. ¿Cuánto es 16 más 4?", ["18", "20", "22", "24"], "Contamos del 4 al 4: 4, 8, 12, 16, 20. El siguiente número es 20."],
  "TNR57_3_11": ["¿Qué número falta? 10, ?, 30, 40, 50", "Contamos del 10 al 10. ¿Qué hay entre 10 y 30?", ["15", "25", "20", "35"], "Contando de 10: 10, 20, 30, 40, 50. El número que falta es 20."],
  "TNR57_3_12": ["Cuente hacia atrás de 5 en 5: 25, 20, 15, 10, ?", "Resta 5 cada vez.", ["0", "8", "6", "5"], "Contamos hacia atrás de 5 a 5: 25, 20, 15, 10, 5. El siguiente número es 5."],
  "TNR57_3_13": ["Número del 3 al 3: 15, 18, 21, 24, ?", "Añade 3 cada vez. ¿Cuánto es 24 más 3?", ["27", "25", "26", "28"], "Contamos de 3 en 3: 15, 18, 21, 24, 27. El siguiente número es 27."],
  "TNR57_3_14": ["¿Qué número falta? 1, 3, 5, ?, 9, 11", "Contamos de 2 en 2 (números impares). ¿Qué hay entre 5 y 9?", ["6", "7", "8", "10"], "Contando de 2 en 2: 1, 3, 5, 7, 9, 11. El número que falta es 7."],
  "TNR57_3_15": ["Cuente hacia atrás de 3 en 3: 21, 18, 15, 12, ?", "Resta 3 cada vez.", ["10", "11", "9", "8"], "Contamos hacia atrás de 3 en 3: 21, 18, 15, 12, 9. El siguiente número es 9."],
  "TNR57_3_16": ["Número del 4 al 4: 8, 12, 16, 20, ?", "Añade 4 cada vez. ¿Cuánto es 20 más 4?", ["22", "26", "28", "24"], "Contamos del 4 al 4: 8, 12, 16, 20, 24. El siguiente número es 24."],
  "TNR57_3_17": ["¿Qué sigue? 2, 5, 8, 11, ?", "Sumamos 3 cada vez.", ["14", "12", "13", "15"], "Sumamos 3 cada vez: 2, 5, 8, 11, 14. El siguiente número es 14."],
  "TNR57_3_18": ["¿Qué número falta? 4, 8, 12, ?, 20", "Contamos de 4 a 4. ¿Cuánto hay entre 12 y 20?", ["14", "16", "15", "18"], "Contando de 4 a 4: 4, 8, 12, 16, 20. El número que falta es 16."],
  "TNR57_3_19": ["Cuente hacia atrás de 2 en 2: 16, 14, 12, 10, ?", "Resta 2 cada vez.", ["7", "9", "8", "6"], "Contamos hacia atrás de 2 en 2: 16, 14, 12, 10, 8. El siguiente número es 8."],
  "TNR57_3_20": ["Número del 3 al 3: 21, 24, 27, 30, ?", "Añade 3 cada vez. ¿Cuánto es 30 más 3?", ["31", "32", "34", "33"], "Contamos de 3 a 3: 21, 24, 27, 30, 33. El siguiente número es 33."],

  // ==========================================================================
  // RAZONAMIENTO LÓGICO — Nivel 1 (TLR57_1_01 – TLR57_1_20)
  // ==========================================================================

  "TLR57_1_01": ["Todas las manzanas son frutas. ¿Es una manzana una fruta?", "La pista dice que TODAS las manzanas son frutas.", ["si", "No", "tal vez", "no lo sé"], "La pista nos dice que todas las manzanas son frutas. Entonces sí, ¡una manzana es una fruta!"],
  "TLR57_1_02": ["Todos los perros son animales. ¿Es un perro un animal?", "La pista dice que TODOS los perros son animales.", ["No", "si", "A veces", "nunca"], "La pista nos dice que todos los perros son animales. Entonces sí, ¡un perro es un animal!"],
  "TLR57_1_03": ["Todos los peces viven en el agua. ¿Vive un pez en el agua?", "¿Qué dice la pista sobre dónde viven los peces?", ["A veces", "nunca", "si", "No"], "La pista nos dice que todos los peces viven en el agua. Entonces sí, ¡un pez vive en el agua!"],
  "TLR57_1_04": ["Todos los pájaros tienen alas. ¿Tiene un pájaro alas?", "La pista dice que TODOS los pájaros tienen alas.", ["No", "A veces", "nunca", "si"], "La pista nos dice que todos los pájaros tienen alas. Entonces sí, ¡un pájaro tiene alas!"],
  "TLR57_1_05": ["Los coches tienen ruedas. ¿Tiene un coche ruedas?", "¿Qué dice la pista sobre los coches?", ["si", "No", "tal vez", "nunca"], "La pista nos dice que los coches tienen ruedas. Entonces sí, ¡un coche tiene ruedas!"],
  "TLR57_1_06": ["El helado está frío. ¿Está caliente el helado?", "Piensa en lo que dice la pista. Si hace frío, ¿puede hacer calor?", ["si", "No", "tal vez", "siempre"], "La pista dice que el helado está frío. El frío es lo opuesto al calor, ¡así que no!"],
  "TLR57_1_07": ["El fuego está caliente. ¿El fuego está frío?", "La pista dice que el fuego está caliente. ¿Es lo mismo calor que frío?", ["tal vez", "si", "No", "A veces"], "La pista dice que el fuego está caliente. Lo caliente es lo opuesto al frío, ¡así que no!"],
  "TLR57_1_08": ["La nieve es blanca. ¿Es blanca como la nieve?", "Sólo comprueba lo que te dice la pista de la nieve.", ["No", "tal vez", "A veces", "si"], "La pista dice que la nieve es blanca. Entonces sí, ¡la nieve es blanca!"],
  "TLR57_1_09": ["Los gatos maúllan. ¿Qué sonido hace un gato?", "Mira la pista. ¿Qué sonido hace un gato?", ["Miau", "Arnés", "mu", "mac"], "La pista dice que los gatos maúllan. ¡Entonces un gato hace Miau!"],
  "TLR57_1_10": ["Un círculo es redondo. ¿Es un círculo redondo?", "Lee la pista sobre el círculo.", ["No", "si", "A veces", "nunca"], "La pista dice que un círculo es redondo. Entonces sí, ¡un círculo es redondo!"],
  "TLR57_1_11": ["El sol sale por la mañana. cuando sale el sol", "La pista te dice cuándo sale el sol.", ["Por la noche", "Por la tarde", "por la mañana", "Por la tarde"], "¡La pista dice que el sol sale por la mañana!"],
  "TLR57_1_12": ["Los conejos saltan. ¿Cómo se mueven los conejos?", "La pista te dice cómo se mueven los conejos.", ["Vuela", "nadar", "se desliza", "saltar"], "La pista dice que los conejos saltan. ¡Entonces se mueve saltando!"],
  "TLR57_1_13": ["La leche es blanca. ¿De qué color es la leche?", "La pista te dice el color de la leche.", ["blanco", "azul", "Verde", "rojo"], "La pista dice que la leche es blanca. ¡Entonces la leche es blanca!"],
  "TLR57_1_14": ["Los plátanos son amarillos. ¿De qué color es un plátano?", "La pista te dice el color.", ["rojo", "amarillo", "azul", "Verde"], "La pista dice que los plátanos son amarillos. ¡Entonces un plátano es amarillo!"],
  "TLR57_1_15": ["Dormimos por la noche. cuando dormimos", "La pista te dice cuando dormimos.", ["por la mañana", "por la tarde", "Por la noche", "en el almuerzo"], "¡La pista dice que dormimos por la noche!"],
  "TLR57_1_16": ["El azúcar es dulce. ¿A qué sabe el azúcar?", "La pista te dice a qué sabe el azúcar.", ["agrio", "amargo", "salado", "dulce"], "La pista dice que el azúcar es dulce. ¡Así que el azúcar tiene un sabor dulce!"],
  "TLR57_1_17": ["Los patos nadan en estanques. ¿Dónde nadan los patos?", "La pista te dice dónde nadan los patos.", ["estanques", "cielo", "Desierto", "montaña"], "¡La pista dice que los patos nadan en estanques!"],
  "TLR57_1_18": ["El invierno es frío. ¿Hace frío en invierno?", "Solo revisa la pista sobre el invierno.", ["No", "si", "nunca", "A veces"], "La pista dice que el invierno es frío. Entonces sí, ¡el invierno es frío!"],
  "TLR57_1_19": ["Las hojas son verdes. ¿De qué color son las hojas?", "La pista te dice el color de las hojas.", ["azul", "rojo", "Verde", "amarillo"], "¡La pista dice que las hojas son verdes!"],
  "TLR57_1_20": ["Usamos el paraguas cuando llueve. ¿Cuándo usamos el paraguas?", "La pista te dice cuándo necesitamos el paraguas.", ["cuando hace sol", "cuando sopla el viento", "cuando nieva", "cuando llueve"], "¡La pista dice que usamos el paraguas cuando llueve!"],

  // ==========================================================================
  // RAZONAMIENTO LÓGICO — Nivel 2 (TLR57_2_01 – TLR57_2_20)
  // ==========================================================================

  "TLR57_2_01": ["Tom es más alto que Sam. Sam es más alto que Lily. ¿Quién es el más alto?", "¿Quién es más alto que los demás?", ["tom", "Sam", "lirio", "Son todos iguales"], "Tom es más alto que Sam y Sam es más alto que Lily. ¡Entonces Tom es el más alto!"],
  "TLR57_2_02": ["Un elefante es más grande que un perro. Un perro es más grande que un ratón. ¿Cuál es el más pequeño?", "Piensa qué animal es más pequeño que todos los demás.", ["elefante", "ratón", "perro", "gato"], "El ratón es más pequeño que el perro y el perro es más pequeño que el elefante. ¡El ratón es el más pequeño!"],
  "TLR57_2_03": ["Rojo, azul y amarillo son colores. ¿Cuál de estos NO es un color?", "Tres de estos son colores. Uno no es un color en absoluto.", ["rojo", "azul", "pizzería", "amarillo"], "Rojo, azul y amarillo son todos colores. ¡La pizza es un alimento, no un color!"],
  "TLR57_2_04": ["La manzana, el plátano y la cereza son frutas. ¿Cuál NO es una fruta?", "Tres de ellos crecen en árboles o arbustos. Uno no.", ["manzana", "Plátano", "cereza", "silla"], "La manzana, el plátano y la cereza son frutas. ¡Una silla es un mueble, no una fruta!"],
  "TLR57_2_05": ["Amy es mayor que Ben. Ben es mayor que Cara. ¿Quién es el más joven?", "¿Quién es más joven que los demás?", ["Cara", "amy", "ben", "Son todos iguales"], "¡Amy es la mayor, Ben está en el medio y Cara es la más joven!"],
  "TLR57_2_06": ["Un coche es más rápido que una bicicleta. Una bicicleta es más rápida que caminar. ¿Cuál es el más rápido?", "¿Cuál se mueve más rápido?", ["Caminando", "el auto", "la bicicleta", "el monopatín"], "Un automóvil es más rápido que una bicicleta y una bicicleta es más rápida que caminar. ¡El coche es el más rápido!"],
  "TLR57_2_07": ["El gato, el perro y el pez son animales. ¿Cuál NO es un animal?", "Tres son animales vivos. Uno es algo que lees.", ["gato", "perro", "Reservar", "pescado"], "El gato, el perro y el pez son animales. ¡Un libro es algo que lees, no un animal!"],
  "TLR57_2_08": ["Hoy es lunes. ¿Qué día fue ayer?", "Piensa en los días de la semana. ¿Qué viene antes del lunes?", ["martes", "sábado", "viernes", "domingo"], "¡El día antes del lunes es domingo!"],
  "TLR57_2_09": ["Emma tiene más pegatinas que Jake. Jake tiene más pegatinas que Mia. ¿Quién tiene más pegatinas?", "¿Quién tiene más pegatinas que los demás?", ["emma", "gato", "Mía", "todos tienen lo mismo"], "Emma tiene más que Jake y Jake tiene más que Mia. ¡Emma tiene más!"],
  "TLR57_2_10": ["Una jirafa es más alta que un caballo. Un caballo es más alto que un gato. ¿Cuál es el más corto?", "¿Qué animal es más bajo que todos los demás?", ["Jirafa", "el gato", "el caballo", "el perro"], "El gato es más bajo que el caballo y el caballo es más bajo que la jirafa. ¡El gato es el más bajo!"],
  "TLR57_2_11": ["La camiseta, los pantalones y el sombrero son cosas que usamos. ¿Qué NO es algo que usamos?", "Tres de ellos se llevan en el cuerpo. Uno no.", ["camiseta", "Pantalones", "Lámpara", "sombrero"], "La camiseta, el pantalón y el gorro son ropa. ¡Una lámpara no es algo que llevamos encima!"],
  "TLR57_2_12": ["Hoy es miércoles. ¿Qué día es mañana?", "Piensa en los días de la semana. ¿Qué viene después del miércoles?", ["martes", "lunes", "viernes", "jueves"], "¡El día después del miércoles es jueves!"],
  "TLR57_2_13": ["Un autobús es más grande que un coche. Un coche es más grande que una bicicleta. ¿Cuál es el más grande?", "¿Qué vehículo es más grande que todos los demás?", ["autobús", "coche", "bicicleta", "scooter"], "El autobús es más grande que el coche y el coche es más grande que la bicicleta. ¡El autobús es el más grande!"],
  "TLR57_2_14": ["Max corrió más rápido que Zoe. Zoe corrió más rápido que Leo. ¿Quién fue el más lento?", "¿Quién corrió más lento que los demás?", ["máx.", "león", "Zoé", "terminaron empatados"], "Max fue el más rápido, luego Zoe y luego Leo. ¡Leo era el más lento!"],
  "TLR57_2_15": ["El piano, la guitarra y la batería hacen música. ¿Cuál NO hace música?", "Tres de ellas son herramientas. Uno es la comida.", ["Piano", "guitarra", "pizzería", "tambores"], "El piano, la guitarra y la batería son instrumentos que hacen música. ¡La pizza es comida!"],
  "TLR57_2_16": ["Lily tiene 5 juguetes. Sam tiene 3 juguetes. ¿Quién tiene más juguetes?", "Compara los números. ¿Qué número es mayor: 5 o 3?", ["Sam", "tienen lo mismo", "Ninguno", "lirio"], "Lily tiene 5 juguetes y Sam tiene 3 juguetes. 5 es mayor que 3, ¡así que Lily tiene más!"],
  "TLR57_2_17": ["Un árbol es más alto que una flor. Una flor es más alta que la hierba. ¿Cuál es el más alto?", "¿Qué planta crece más?", ["árbol", "flor", "hierba", "Son todos iguales"], "El árbol es más alto que la flor y la flor es más alta que la hierba. ¡El árbol es el más alto!"],
  "TLR57_2_18": ["Si hoy es viernes ¿qué día fue hace 2 días?", "Cuenta regresiva 2 días a partir del viernes.", ["jueves", "miércoles", "lunes", "martes"], "Viernes, retrocedemos 1 día al jueves, retrocedemos 1 día más al miércoles!"],
  "TLR57_2_19": ["El fútbol, ​​el tenis y el baloncesto son deportes. ¿Cuál NO es un deporte?", "Hay tres juegos que juegas. Uno es una fruta.", ["futbol", "Tenis", "Plátano", "baloncesto"], "El fútbol, el tenis y el baloncesto son deportes. ¡Un plátano es una fruta, no un deporte!"],
  "TLR57_2_20": ["Un avión es más rápido que un coche. Un coche es más rápido que un caracol. ¿Cuál es el más lento?", "¿Cuál se mueve más lento?", ["avión", "coche", "bicicleta", "caracol"], "El caracol es más lento que el coche y el coche es más lento que el avión. ¡El caracol es el más lento!"],

  // ==========================================================================
  // RAZONAMIENTO LÓGICO — Nivel 3 (TLR57_3_01 – TLR57_3_20)
  // ==========================================================================

  "TLR57_3_01": ["Si todos los pájaros pueden volar y una cucaracha es un pájaro, ¿puede volar una cucaracha?", "La pista dice que TODOS los pájaros pueden volar. Un pájaro carpintero es un pájaro.", ["si", "No", "tal vez", "A veces"], "Si todos los pájaros pueden volar, y un pájaro carpintero es un pájaro, entonces sí, ¡un pájaro carpintero puede volar!"],
  "TLR57_3_02": ["Si todos los gatos tienen cola y Whiskers es un gato, ¿Whiskers tiene cola?", "La pista dice que TODOS los gatos tienen cola. Whiskers es un gato.", ["Tal vez", "Sí", "No", "Solo a veces"], "Si todos los gatos tienen cola y Whiskers es un gato, entonces sí, Whiskers tiene cola."],
  "TLR57_3_03": ["Está lloviendo. Necesitas un paraguas cuando llueve. ¿Necesitas un paraguas?", "Verificar: ¿Está lloviendo? ¿Qué necesitas cuando llueve?", ["No", "tal vez", "si", "justo afuera"], "Está lloviendo y necesitas un paraguas cuando llueve. Entonces sí, ¡necesitas un paraguas!"],
  "TLR57_3_04": ["Hoy es martes. La escuela comienza el miércoles. ¿Hoy es día de clases?", "¿Es lo mismo martes que miércoles?", ["si", "tal vez", "A veces", "No"], "Hoy es martes, pero la escuela empieza el miércoles. El martes no es miércoles, ¡así que no!"],
  "TLR57_3_05": ["Sara siempre lleva sombrero los lunes. Hoy es lunes. ¿Sara lleva sombrero?", "La pista dice que Sara SIEMPRE usa sombrero los lunes.", ["si", "No", "tal vez", "A veces"], "Sara siempre usa sombrero los lunes y hoy es lunes. Así que sí, ¡usa sombrero!"],
  "TLR57_3_06": ["Si estás mojado, necesitas una toalla. Tom está mojado. ¿Tom necesita una toalla?", "¿Qué necesitas cuando estás mojado?", ["No", "si", "tal vez", "A veces"], "Si estás mojado, necesitas una toalla. Tom está mojado, así que sí, ¡Tom necesita una toalla!"],
  "TLR57_3_07": ["Todos los cuadrados tienen 4 lados. Esta forma tiene 3 lados. ¿Es un cuadrado?", "¿Cuantos lados debe tener un cuadrado? ¿Esta forma tiene tantos?", ["si", "tal vez", "No", "A veces"], "Los cuadrados tienen 4 lados, pero esta forma solo tiene 3 lados. Entonces no, ¡no es un cuadrado!"],
  "TLR57_3_08": ["Si es hora de dormir, te cepillas los dientes. Es hora de dormir. ¿Qué deberías hacer?", "La pista te dice qué hacer a la hora de dormir.", ["jugar", "comer dulces", "para ver la televisión", "Cepíllate los dientes"], "A la hora de dormir, te cepillas los dientes. ¡Es hora de dormir, así que deberías cepillarte los dientes!"],
  "TLR57_3_09": ["La tienda está cerrada los domingos. Hoy es domingo. ¿Está abierta la tienda?", "¿Qué dice la pista sobre el domingo?", ["No", "si", "tal vez", "A veces"], "La tienda está cerrada los domingos. Hoy es domingo, así que no, ¡la tienda no está abierta!"],
  "TLR57_3_10": ["Si te comes toda la comida, obtienes postre. Te comiste toda la comida. ¿Tienes postre?", "¿Hiciste lo necesario para conseguir el postre?", ["No", "si", "tal vez", "nunca"], "Si te comes toda la comida, obtienes postre. Te comiste toda la comida, ¡así que sí!"],
  "TLR57_3_11": ["Ben sólo juega afuera cuando hace sol. Hoy hace sol. ¿Ben está jugando afuera?", "La pista dice que Ben juega afuera cuando hace sol.", ["No", "tal vez", "si", "nunca"], "Ben juega afuera cuando hace sol. Hace sol, así que sí, ¡Ben está jugando afuera!"],
  "TLR57_3_12": ["Hoy es sábado. ¿Qué día fue ayer?", "Piensa en el día anterior al sábado.", ["domingo", "jueves", "miércoles", "viernes"], "¡El día antes del sábado es viernes!"],
  "TLR57_3_13": ["Si todos los perros ladran y Rex es un perro, ¿Rex ladra?", "La pista dice que TODOS los perros ladran. Rex es un perro.", ["si", "No", "tal vez", "A veces"], "Si todos los perros ladran y Rex es un perro, entonces sí, ¡Rex ladra!"],
  "TLR57_3_14": ["Las cosas frías pueden congelar el agua. El hielo está muy frío. ¿Puede el hielo congelar el agua?", "La pista dice que las cosas frías pueden congelar el agua. ¿Está frío el hielo?", ["nunca", "si", "No", "tal vez"], "Las cosas frías pueden congelar el agua. El hielo es muy frío, así que sí, ¡el hielo puede congelar el agua!"],
  "TLR57_3_15": ["Anna es más baja que Beth. Beth es más baja que Cara. Cara es más baja que Dana. ¿Quién es el más alto?", "¿Quién es más alto que todos los demás? ¡Sigue la cadena!", ["ana", "beth", "Dana", "Cara"], "Anna es la más baja, luego Beth, luego Cara y luego Dana. ¡Dana es la más alta!"],
  "TLR57_3_16": ["Si no riegas una planta, se seca. Olvidaste regar la planta. que esta pasando", "¿Qué pasa cuando una planta no recibe agua?", ["crecer más", "Florece", "el canta", "se seca"], "Sin agua, una planta se seca. ¡Olvidaste mojarlo, así que se seca!"],
  "TLR57_3_17": ["Hoy es jueves. ¿Qué día es pasado mañana?", "mañana es viernes ¿Qué viene después del viernes?", ["sábado", "viernes", "domingo", "miércoles"], "hoy es jueves mañana es viernes ¡Pasado mañana es sábado!"],
  "TLR57_3_18": ["Lily es más rápida que Tom. Tom es más rápido que Jake. Jake es más rápido que Sam. ¿Quién es el más lento?", "Sigue la cadena. ¿Quién es más lento que los demás?", ["lirio", "Sam", "tom", "gato"], "Lily es la más rápida, luego Tom, luego Jake y luego Sam. ¡Sam es el más lento!"],
  "TLR57_3_19": ["Si todas las cosas alrededor pueden rodar y una pelota es redonda, ¿puede rodar una pelota?", "La pista dice que todo alrededor puede rodar. ¿Es una bola redonda?", ["No", "tal vez", "si", "nunca"], "Todo alrededor puede rodar. Una pelota es redonda, así que sí, ¡una pelota puede rodar!"],
  "TLR57_3_20": ["Hay 4 niños seguidos. Amy es la primera. Ben es el último. Hay 2 niños entre ellos. ¿Está Amy al lado de Ben?", "Si hay 2 niños entre Amy y Ben, ¿se sientan uno al lado del otro?", ["si", "tal vez", "A veces", "No"], "Amy es la primera y Ben es el último con 2 hijos entre ellos. ¡No están uno al lado del otro!"],

  // ==========================================================================
  // RAZONAMIENTO ESPACIAL — Nivel 1 (TSR57_1_01 – TSR57_1_20)
  // ==========================================================================

  "TSR57_1_01": ["¿Cuántos lados tiene un triángulo?", "¡La palabra \"tri\" significa tres!", ["3", "4", "5", "6"], "Un triángulo tiene 3 lados. ¡\"Tri\" significa tres!"],
  "TSR57_1_02": ["¿Qué forma es redonda como una pelota?", "Piense en algo sin esquinas ni lados rectos.", ["cuadrado", "circulo", "Triangulo", "Rectángulo"], "Un círculo es redondo como una pelota. ¡No tiene esquinas!"],
  "TSR57_1_03": ["¿Cuantos lados tiene un cuadrado?", "Cuenta las aristas de un cuadrado. Arriba, abajo, izquierda, derecha.", ["3", "5", "4", "6"], "¡Un cuadrado tiene 4 lados y todos tienen la misma longitud!"],
  "TSR57_1_04": ["¿Qué figura tiene 3 lados?", "¿Qué nombre de forma comienza con «tri»?", ["circulo", "cuadrado", "Rectángulo", "Triangulo"], "¡Un triángulo tiene 3 lados!"],
  "TSR57_1_05": ["¿Cuántas esquinas tiene un triángulo?", "Una esquina es el lugar donde se encuentran dos lados. ¡Cuéntalos!", ["3", "4", "2", "5"], "¡Un triángulo tiene 3 esquinas, una en cada vértice!"],
  "TSR57_1_06": ["¿Qué forma suele tener una puerta?", "Una puerta es más alta que ancha y tiene 4 lados.", ["circulo", "Rectángulo", "Triangulo", "estrella"], "Una puerta suele tener forma rectangular: tiene 4 lados y es más alta que ancha."],
  "TSR57_1_07": ["¿Cuántos lados tiene un rectángulo?", "Un rectángulo es como un cuadrado extendido.", ["3", "5", "4", "6"], "Un rectángulo tiene 4 lados, al igual que un cuadrado, pero dos lados son más largos."],
  "TSR57_1_08": ["¿Qué forma NO tiene esquinas?", "Piensa en qué forma es completamente redonda.", ["Triangulo", "cuadrado", "Rectángulo", "circulo"], "¡Un círculo no tiene esquinas porque es perfectamente redondo!"],
  "TSR57_1_09": ["¿Qué forma tiene una porción de pizza?", "Una porción de pizza tiene un pico en un extremo y es más ancha en el otro.", ["Triangulo", "circulo", "cuadrado", "Rectángulo"], "¡Una porción de pizza tiene forma de triángulo!"],
  "TSR57_1_10": ["¿Cuántas esquinas tiene un cuadrado?", "Las esquinas son donde se unen los lados. Un cuadrado tiene uno en cada esquina.", ["3", "4", "5", "6"], "¡Un cuadrado tiene 4 esquinas, una en cada esquina!"],
  "TSR57_1_11": ["¿Qué forma suele tener el sol cuando se dibuja?", "¡El sol es redondo!", ["cuadrado", "Triangulo", "circulo", "Rectángulo"], "¡El sol generalmente se dibuja como un círculo!"],
  "TSR57_1_12": ["¿Qué figura tiene 4 lados todos del mismo largo?", "Los cuatro lados son iguales. No es un rectángulo.", ["Triangulo", "circulo", "Rectángulo", "cuadrado"], "¡Un cuadrado tiene 4 lados todos del mismo largo!"],
  "TSR57_1_13": ["¿Qué forma tienen las ruedas de un coche?", "¡Las ruedas son redondas para que puedan rodar!", ["circulo", "cuadrado", "Triangulo", "Rectángulo"], "¡Las ruedas de los coches son círculos! Por eso pueden rodar."],
  "TSR57_1_14": ["¿Cuántos lados tiene un círculo?", "Un círculo es perfectamente redondo. ¿Tiene bordes rectos?", ["1", "0", "2", "3"], "Un círculo tiene 0 lados rectos. ¡Es solo una curva!"],
  "TSR57_1_15": ["¿Qué forma tiene un libro?", "Un libro tiene 4 lados y es más alto que ancho.", ["Triangulo", "circulo", "Rectángulo", "estrella"], "¡Un libro tiene forma de rectángulo!"],
  "TSR57_1_16": ["¿Qué figura tiene 3 lados y 3 esquinas?", "Tres lados, tres esquinas. ¿Qué forma es esta?", ["cuadrado", "circulo", "Rectángulo", "Triangulo"], "¡Un triángulo tiene 3 lados y 3 esquinas!"],
  "TSR57_1_17": ["¿Qué forma suele tener un reloj?", "¡La mayoría de los relojes son redondos!", ["circulo", "cuadrado", "Triangulo", "estrella"], "¡La mayoría de los relojes tienen forma de círculo!"],
  "TSR57_1_18": ["¿Cuántas esquinas tiene un rectángulo?", "Un rectángulo es como un cuadrado extendido. ¿Cuántas esquinas tiene un cuadrado?", ["3", "4", "5", "6"], "¡Un rectángulo tiene 4 esquinas, como un cuadrado!"],
  "TSR57_1_19": ["¿Qué forma suele tener una ventana?", "La mayoría de las ventanas tienen 4 lados y 4 esquinas.", ["Triangulo", "circulo", "cuadrado", "estrella"], "¡La mayoría de las ventanas tienen forma cuadrada o rectangular!"],
  "TSR57_1_20": ["¿Qué forma se parece más a un huevo?", "Un huevo es redondo pero no un círculo perfecto. Es un poco exagerado.", ["cuadrado", "Triangulo", "Rectángulo", "Ovalado"], "Un huevo se parece más a un óvalo, ¡como un círculo extendido!"],

  // ==========================================================================
  // RAZONAMIENTO ESPACIAL — Nivel 2 (TSR57_2_01 – TSR57_2_20)
  // ==========================================================================

  "TSR57_2_01": ["¿Qué forma tiene lados curvos?", "La mayoría de las formas tienen lados rectos. ¿Cuál no?", ["circulo", "cuadrado", "Triangulo", "Rectángulo"], "Un círculo tiene lados curvos. ¡Todas las demás formas tienen lados rectos!"],
  "TSR57_2_02": ["¿Un rectángulo es como una versión estirada de qué forma?", "Piensa en una figura con 4 lados iguales. Ahora estíralo.", ["circulo", "cuadrado", "Triangulo", "estrella"], "¡Un rectángulo es como un cuadrado extendido! Ambos tienen 4 lados y 4 esquinas."],
  "TSR57_2_03": ["¿Qué forma tiene un sándwich cuando lo cortas de esquina a esquina?", "Al cortar un cuadrado de esquina a esquina se obtienen dos formas con 3 lados cada una.", ["circulo", "cuadrado", "Triangulo", "Rectángulo"], "Cuando cortas un sándwich de esquina a esquina, ¡obtienes dos triángulos!"],
  "TSR57_2_04": ["¿Cuántas esquinas tiene un rombo?", "Un rombo parece un cuadrado sentado en una esquina.", ["3", "5", "6", "4"], "¡Un rombo tiene 4 esquinas, como un cuadrado volteado hacia arriba!"],
  "TSR57_2_05": ["¿Cuál de estas formas se puede rodar?", "Piensa en una forma que no tenga lados planos para evitar que ruede.", ["circulo", "cuadrado", "Triangulo", "Rectángulo"], "¡Un círculo puede rodar porque es redondo y no tiene bordes planos!"],
  "TSR57_2_06": ["¿Qué forma tiene una moneda?", "Las monedas son redondas y planas.", ["cuadrado", "circulo", "Triangulo", "estrella"], "¡Una moneda tiene forma de círculo!"],
  "TSR57_2_07": ["¿Qué forma tiene una hoja de papel?", "El papel tiene 4 lados y 4 esquinas. Dos lados son más largos que los demás.", ["circulo", "Triangulo", "Rectángulo", "estrella"], "¡Una hoja de papel tiene forma de rectángulo!"],
  "TSR57_2_08": ["¿Qué forma tiene una tienda de campaña?", "Una tienda de campaña tiene una punta afilada en la parte superior y es más ancha en la base.", ["circulo", "cuadrado", "Rectángulo", "Triangulo"], "¡Una tienda de campaña tiene forma de triángulo con un pico en la parte superior!"],
  "TSR57_2_09": ["¿Cuántos lados más tiene un cuadrado que un triángulo?", "Un cuadrado tiene 4 lados. Un triángulo tiene 3 lados. ¿Cuánto es 4 menos 3?", ["1", "2", "3", "4"], "Un cuadrado tiene 4 lados y un triángulo tiene 3 lados. ¡4 menos 3 es 1 lado extra!"],
  "TSR57_2_10": ["¿Qué figura no tiene ninguna línea recta?", "Piensa en qué forma es completamente curva.", ["Rectángulo", "circulo", "Triangulo", "cuadrado"], "Un círculo no tiene líneas rectas. ¡Es solo una gran curva!"],
  "TSR57_2_11": ["¿Qué forma tiene un anillo?", "Un anillo rodea el dedo.", ["cuadrado", "Triangulo", "circulo", "Rectángulo"], "¡Un anillo tiene forma de círculo!"],
  "TSR57_2_12": ["¿Qué forma tienen la mayoría de las cajas?", "Las cajas tienen lados planos, 4 esquinas en cada lado y algunos lados son más largos.", ["circulo", "Triangulo", "estrella", "Rectángulo"], "¡La mayoría de las cajas tienen caras rectangulares!"],
  "TSR57_2_13": ["¿Qué figura tiene menos lados: triángulo, cuadrado o rectángulo?", "Cuenta los lados de cada forma. ¿Qué número es el más pequeño?", ["Triangulo", "cuadrado", "Rectángulo", "Son todos iguales"], "Un triángulo tiene 3 lados, un cuadrado tiene 4 y un rectángulo tiene 4. ¡El triángulo tiene la menor cantidad!"],
  "TSR57_2_14": ["Si dibujas el contorno de una pelota, ¿qué forma estás dibujando?", "Una pelota es redonda. ¿Qué forma plana es también redonda?", ["cuadrado", "circulo", "Triangulo", "Rectángulo"], "¡Si trazas el contorno de una pelota, dibujas un círculo!"],
  "TSR57_2_15": ["¿Qué forma tiene un cono de tráfico desde un lado?", "Un cono tiene una punta afilada en la parte superior y es ancho en la base.", ["circulo", "cuadrado", "Triangulo", "Rectángulo"], "¡Desde un lado, un cono de tráfico parece un triángulo!"],
  "TSR57_2_16": ["Si doblo un cuadrado por la mitad, ¿qué forma obtengo?", "Toma una hoja de papel cuadrada y dóblala. Obtienes una forma con 4 lados, pero no todos iguales.", ["circulo", "Triangulo", "cuadrado", "Rectángulo"], "¡Si doblo un cuadrado por la mitad, obtengo un rectángulo!"],
  "TSR57_2_17": ["¿Cuántas líneas rectas se necesitan para dibujar un triángulo?", "Cada lado de un triángulo es una línea recta.", ["3", "4", "5", "2"], "Se necesitan 3 líneas rectas para dibujar un triángulo, ¡una para cada lado!"],
  "TSR57_2_18": ["¿Qué forma suele tener una carita sonriente dibujada?", "¡La cara es redonda!", ["cuadrado", "circulo", "Triangulo", "Rectángulo"], "¡Una carita sonriente generalmente se dibuja en un círculo!"],
  "TSR57_2_19": ["¿Qué forma suele tener el tablero de una mesa?", "La mayoría de las mesas tienen 4 lados, dos de los cuales son más largos que los demás.", ["circulo", "Triangulo", "Rectángulo", "estrella"], "¡La mayoría de los tableros de las mesas tienen forma rectangular!"],
  "TSR57_2_20": ["¿Qué forma tiene una cometa?", "Una cometa tiene 4 lados y parece un diamante estirado.", ["circulo", "Triangulo", "cuadrado", "rombo"], "¡Una cometa tiene forma de diamante!"],

  // ==========================================================================
  // RAZONAMIENTO ESPACIAL — Nivel 3 (TSR57_3_01 – TSR57_3_20)
  // ==========================================================================

  "TSR57_3_01": ["Si miras una mariposa, ambos lados se ven iguales. Esto se llama...", "Hay una palabra especial para cuando ambos lados coinciden.", ["simetria", "Imprimir", "Color", "Formulario"], "Cuando ambos lados de algo parecen iguales, ¡se llama simetría!"],
  "TSR57_3_02": ["¿Qué hay a la derecha de la estrella? Círculo, Estrella, Triángulo", "Derecha significa el lado derecho. ¿Qué viene después de la estrella?", ["circulo", "Triangulo", "estrella", "cuadrado"], "En la fila Círculo, Estrella, Triángulo, ¡el Triángulo está a la derecha de la Estrella!"],
  "TSR57_3_03": ["Si giras un cuadrado para ubicarlo en una esquina, ¿cómo se ve?", "Imagina que estás rotando el cuadrado. ¡Todavía tiene 4 lados!", ["un circulo", "un triangulo", "un rombo", "un rectángulo"], "¡Un cuadrado en una esquina parece un diamante!"],
  "TSR57_3_04": ["Si doblo un corazón por la mitad, ¿cuántas piezas iguales obtengo?", "El lado izquierdo y el lado derecho de un corazón tienen el mismo aspecto.", ["1", "3", "4", "2"], "¡Doblar un corazón en dos te da 2 piezas iguales que encajan perfectamente!"],
  "TSR57_3_05": ["¿Hacia dónde apunta esta flecha? -->", "El extremo puntiagudo muestra la dirección.", ["Derecha", "Izquierda", "arriba", "abajo"], "Flecha --> apunta a la derecha!"],
  "TSR57_3_06": ["Si te miras en el espejo, tu mano derecha parece estar en...", "¡Un espejo cambia las cosas! Tu derecha parece moverse hacia el otro lado.", ["el lado derecho", "el lado izquierdo", "arriba", "abajo"], "En el espejo, la mano derecha parece estar del lado izquierdo. ¡Los espejos cambian las cosas!"],
  "TSR57_3_07": ["Si le das la vuelta a la letra M, ¿a qué letra se parece?", "Dale la vuelta a la M para que las jorobas queden hacia abajo.", ["norte", "z", "w", "mi"], "¡M al revés parece W!"],
  "TSR57_3_08": ["¿Cuál de estas flechas apunta ABAJO?", "Abajo significa al suelo.", ["-->", "<--", "^", "v"], "¡La flecha «v» apunta hacia abajo, hacia el suelo!"],
  "TSR57_3_09": ["Si juntas dos triángulos base con base, ¿qué forma puedes hacer?", "Imaginemos dos triángulos tocándose en sus bases.", ["rombo", "circulo", "estrella", "Pentágono"], "¡Dos triángulos unidos base sobre base forman un rombo!"],
  "TSR57_3_10": ["Estás mirando al norte. Giras a la derecha. ¿En qué dirección estás mirando ahora?", "Si el Norte está adelante, la derecha es otra dirección.", ["Sur", "Este", "Oeste", "Norte"], "Si mira hacia el norte y gira a la derecha, ¡está mirando hacia el este!"],
  "TSR57_3_11": ["¿Qué letra se ve igual si la giras de izquierda a derecha?", "Piensa en qué letra tiene los mismos lados izquierdo y derecho.", ["f", "j", "un", "GRAMO"], "¡La letra A se ve igual cuando se gira de izquierda a derecha porque ambos lados coinciden!"],
  "TSR57_3_12": ["¿Qué forma obtienes cuando pones dos cuadrados uno al lado del otro?", "Dos cuadrados uno al lado del otro forman una figura que es más ancha que alta.", ["cuadrado", "Triangulo", "circulo", "Rectángulo"], "¡Dos cuadrados colocados uno al lado del otro forman un rectángulo!"],
  "TSR57_3_13": ["Si estás mirando hacia la derecha y giras completamente, ¿hacia dónde estás mirando?", "Giro completo significa un círculo completo de regreso al punto de partida.", ["Derecha", "Izquierda", "arriba", "abajo"], "Si te das la vuelta completamente, terminarás mirando en la misma dirección: ¡Correcto!"],
  "TSR57_3_14": ["¿Qué figura tiene más lados: triángulo, cuadrado o círculo?", "Cuenta los lados: el triángulo tiene 3, el cuadrado tiene 4. ¿Cuántos tiene el círculo?", ["Triangulo", "cuadrado", "circulo", "Son todos iguales"], "Un triángulo tiene 3 lados, un cuadrado tiene 4 y un círculo tiene 0. ¡El cuadrado tiene más!"],
  "TSR57_3_15": ["Si miras la letra B en el espejo, ¿se ve igual?", "Imagínese girar la letra B para que las jorobas queden del otro lado.", ["si", "tal vez", "No", "A veces"], "¡No! La letra B no se ve igual en el espejo. Las jorobas estarían en el lado equivocado."],
  "TSR57_3_16": ["Si estás parado detrás de alguien y él se gira hacia ti, tu izquierda es... la de ellos.", "Cuando las personas están frente a frente, ¡sus lados están al revés!", ["Izquierda", "arriba", "abajo", "Derecha"], "Cuando alguien te mira, tu izquierda es su derecha. ¡Los lados están al revés!"],
  "TSR57_3_17": ["¿Qué forma obtienes si cortas un círculo por la mitad?", "El semicírculo parece una cúpula o un arco iris.", ["semicírculo", "Triangulo", "cuadrado", "Rectángulo"], "¡Cortar un círculo por la mitad forma un semicírculo!"],
  "TSR57_3_18": ["Si doblo una hoja de papel por la mitad dos veces, ¿cuántas secciones obtengo cuando la abro?", "El primer pliegue forma 2 secciones. Luego doblar de nuevo...", ["2", "4", "3", "6"], "El primer pliegue da 2 secciones. ¡El segundo pliegue los duplica en 4 secciones!"],
  "TSR57_3_19": ["¿Cuál de estas figuras tiene exactamente 5 lados?", "¡\"Penta\" significa 5!", ["cuadrado", "Triangulo", "Pentágono", "Hexágono"], "Un pentágono tiene exactamente 5 lados. ¡Penta significa cinco!"],
  "TSR57_3_20": ["Si un reloj marca las 3 en punto, ¿qué forma tienen las dos manecillas?", "A las 3 en punto, una mano apunta hacia arriba y la otra hacia la derecha.", ["una linea recta", "un circulo", "un triangulo", "Una forma de L"], "A las 3 en punto, una aguja apunta hacia arriba y la otra hacia la derecha, ¡formando una L!"],

  // ==========================================================================
  // PROBLEMAS MATEMÁTICOS — Nivel 1 (TMP57_1_01 – TMP57_1_20)
  // ==========================================================================

  "TMP57_1_01": ["¿Cuánto es 1 + 1?", "Levante 1 dedo. Ahora sube 1 más. ¿Cuántos dedos se levantan?", ["2", "3", "1", "4"], "1 + 1 = 2. ¡Un dedo más uno más forman dos dedos!"],
  "TMP57_1_02": ["¿Cuánto es 2 + 1?", "Comience con 2 dedos. Recoge 1 más. ¡Cuéntalos!", ["2", "3", "4", "1"], "2 + 1 = 3. ¡Dos más uno son tres!"],
  "TMP57_1_03": ["¿Cuánto es 2 + 2?", "Levante 2 dedos de cada mano. ¿Cuantos hay en total?", ["3", "2", "4", "5"], "2 + 2 = 4. ¡Dos en un lado más dos en el otro son cuatro!"],
  "TMP57_1_04": ["¿Cuánto es 3 + 1?", "Comienza en 3 y cuenta 1 más.", ["3", "2", "5", "4"], "3 + 1 = 4. ¡Tres más uno son cuatro!"],
  "TMP57_1_05": ["¿Cuánto es 1 + 2?", "Comience con 1 dedo. Añade 2 más. ¡Cuéntalos todos!", ["3", "4", "2", "5"], "1 + 2 = 3. ¡Uno más dos son tres!"],
  "TMP57_1_06": ["¿Cuánto es 2 + 3?", "Levanta 2 dedos y luego 3 más. ¿Cuantos hay en total?", ["4", "5", "6", "3"], "2 + 3 = 5. ¡Dos más tres son cinco!"],
  "TMP57_1_07": ["Tienes 3 manzanas y obtienes 2 más. ¿Cuántas manzanas tienes?", "Comienza con 3. Cuenta 2 más: 4, 5.", ["4", "3", "5", "6"], "3 + 2 = 5. ¡Tres manzanas más dos más hacen cinco manzanas!"],
  "TMP57_1_08": ["¿Cuánto es 4 + 1?", "Empieza en 4 y cuenta 1 más. ¿Qué número es el siguiente?", ["4", "6", "3", "5"], "4 + 1 = 5. ¡Cuatro más uno son cinco!"],
  "TMP57_1_09": ["Tienes 5 caramelos y te sale 1 más. ¿Cuantos dulces tienes?", "Comience en 5. Cuente 1 más.", ["6", "5", "7", "4"], "5 + 1 = 6. ¡Cinco caramelos más uno más hacen seis caramelos!"],
  "TMP57_1_10": ["¿Cuánto es 3 + 3?", "Levante 3 dedos de cada mano. ¡Cuéntalos todos!", ["5", "6", "7", "4"], "3 + 3 = 6. ¡Tres más tres son seis!"],
  "TMP57_1_11": ["¿Cuánto es 4 + 2?", "Empiece en 4. Cuente 2 más: 5, 6.", ["5", "7", "6", "8"], "4 + 2 = 6. ¡Cuatro más dos son seis!"],
  "TMP57_1_12": ["Tienes 1 juguete y obtienes 3 más. ¿Cuántos juguetes tienes ahora?", "Comienza con 1. Cuenta 3 más: 2, 3, 4.", ["3", "5", "2", "4"], "1 + 3 = 4. ¡Un juguete más tres más hacen cuatro juguetes!"],
  "TMP57_1_13": ["¿Cuánto es 5 + 2?", "Empiece por 5. Cuente 2 más: 6, 7.", ["7", "6", "8", "5"], "5 + 2 = 7. ¡Cinco más dos son siete!"],
  "TMP57_1_14": ["¿Cuánto es 3 + 4?", "Empiece en 3. Cuente 4 más: 4, 5, 6, 7.", ["6", "7", "8", "5"], "3 + 4 = 7. ¡Tres más cuatro son siete!"],
  "TMP57_1_15": ["Ver 4 pájaros. Luego hay 3 más. ¿Cuantos pájaros hay?", "Comience con 4 pájaros. Cuente 3 más: 5, 6, 7.", ["6", "5", "7", "8"], "4 + 3 = 7. ¡Cuatro pájaros más tres más hacen siete pájaros!"],
  "TMP57_1_16": ["¿Cuánto es 5 + 3?", "Empiece por 5. Cuente 3 más: 6, 7, 8.", ["7", "6", "9", "8"], "5 + 3 = 8. ¡Cinco más tres son ocho!"],
  "TMP57_1_17": ["¿Cuánto es 4 + 4?", "Levante 4 dedos de cada mano. ¡Cuéntalos todos!", ["8", "7", "9", "6"], "4 + 4 = 8. ¡Cuatro más cuatro son ocho!"],
  "TMP57_1_18": ["Tienes 6 lápices y te salen 2 más. ¿Cuántos lápices tienes?", "Empiece en 6. Cuente 2 más: 7, 8.", ["7", "8", "6", "9"], "6 + 2 = 8. ¡Seis lápices más dos más hacen ocho lápices!"],
  "TMP57_1_19": ["¿Cuánto es 5 + 5?", "¡Levanta los 5 dedos de cada mano! ¿Cuantos dedos hay?", ["8", "9", "10", "11"], "5 + 5 = 10. ¡Cinco más cinco son diez!"],
  "TMP57_1_20": ["¿Cuánto es 4 + 3?", "Empiece en 4. Cuente 3 más: 5, 6, 7.", ["6", "8", "5", "7"], "4 + 3 = 7. ¡Cuatro más tres son siete!"],

  // ==========================================================================
  // PROBLEMAS MATEMÁTICOS — Nivel 2 (TMP57_2_01 – TMP57_2_20)
  // ==========================================================================

  "TMP57_2_01": ["¿Cuánto gana 5 - 2?", "Comience con 5 dedos. Deja 2 abajo. ¿Cuántos más se levantan?", ["3", "4", "2", "5"], "5 - 2 = 3. ¡Cinco menos dos son tres!"],
  "TMP57_2_02": ["¿Cuánto gana 7 - 3?", "Comience en 7. Cuente hacia atrás 3: 6, 5, 4.", ["3", "4", "5", "2"], "7 - 3 = 4. ¡Siete menos tres son cuatro!"],
  "TMP57_2_03": ["Tienes 8 galletas y te comes 3. ¿Cuántas te quedan?", "Comienza con 8. Resta 3: 7, 6, 5.", ["4", "6", "5", "3"], "8 - 3 = 5. ¡Ocho galletas menos tres dan cinco galletas!"],
  "TMP57_2_04": ["¿Cuánto gana 6 - 2?", "Comience en 6. Cuente hacia atrás 2: 5, 4.", ["3", "5", "6", "4"], "6 - 2 = 4. ¡Seis menos dos son cuatro!"],
  "TMP57_2_05": ["¿Cuánto gana 10 - 4?", "Comience en 10. Cuente hacia atrás 4: 9, 8, 7, 6.", ["6", "5", "7", "4"], "10 - 4 = 6. ¡Diez menos cuatro son seis!"],
  "TMP57_2_06": ["Tienes 9 stickers y das 3. ¿Cuantos te quedan?", "Comienza con 9. Resta 3: 8, 7, 6.", ["5", "6", "7", "4"], "9 - 3 = 6. ¡Nueve pegatinas menos tres dan seis pegatinas!"],
  "TMP57_2_07": ["¿Cuánto es 8 a 5?", "Comience en 8. Cuente hacia atrás 5: 7, 6, 5, 4, 3.", ["4", "2", "3", "5"], "8 - 5 = 3. ¡Ocho menos cinco son tres!"],
  "TMP57_2_08": ["¿Cuánto es 10 - 7?", "Comience en 10. Cuente hacia atrás 7: 9, 8, 7, 6, 5, 4, 3.", ["4", "2", "5", "3"], "10 - 7 = 3. ¡Diez menos siete son tres!"],
  "TMP57_2_09": ["Tienes 6 globos y 2 reventados. ¿Cuantos quedan?", "Comience con 6. Reste 2: 5, 4.", ["4", "3", "5", "2"], "6 - 2 = 4. ¡Seis globos menos dos hojas, cuatro globos!"],
  "TMP57_2_10": ["¿Cuánto gana de 9 a 5?", "Comience en 9. Cuente hacia atrás 5: 8, 7, 6, 5, 4.", ["3", "4", "5", "6"], "9 - 5 = 4. ¡Nueve menos cinco son cuatro!"],
  "TMP57_2_11": ["¿Cuánto gana 7 - 4?", "Comience en 7. Cuente hacia atrás 4: 6, 5, 4, 3.", ["4", "2", "3", "5"], "7 - 4 = 3. ¡Siete menos cuatro son tres!"],
  "TMP57_2_12": ["Tienes 10 uvas y te comes 6. ¿Cuántas te quedan?", "Comienza con 10. Resta 6: 9, 8, 7, 6, 5, 4.", ["5", "3", "6", "4"], "10 - 6 = 4. ¡Diez uvas menos seis hojas cuatro uvas!"],
  "TMP57_2_13": ["¿Cuánto gana 8 - 4?", "Comience en 8. Cuente hacia atrás 4: 7, 6, 5, 4.", ["4", "3", "5", "2"], "8 - 4 = 4. ¡Ocho menos cuatro son cuatro!"],
  "TMP57_2_14": ["¿Cuánto gana 5 - 3?", "Comience en 5. Cuente hacia atrás 3: 4, 3, 2.", ["3", "2", "1", "4"], "5 - 3 = 2. ¡Cinco menos tres son dos!"],
  "TMP57_2_15": ["Tienes 7 lápices y pierdes 2. ¿Cuántos te quedan?", "Comience con 7. Reste 2: 6, 5.", ["4", "6", "5", "3"], "7 - 2 = 5. ¡Siete lápices menos dos hojas, cinco lápices!"],
  "TMP57_2_16": ["¿Cuánto es de 9 a 6?", "Comience en 9. Cuente hacia atrás 6: 8, 7, 6, 5, 4, 3.", ["4", "2", "5", "3"], "9 - 6 = 3. ¡Nueve menos seis son tres!"],
  "TMP57_2_17": ["¿Cuánto gana 10 - 5?", "Piensa en 10 dedos. Deja 5 abajo. ¿Cuantos quedan?", ["5", "4", "6", "3"], "10 - 5 = 5. ¡Diez menos cinco son cinco!"],
  "TMP57_2_18": ["Tienes 8 bolas y lanzas 2. ¿Cuántas quedan?", "Comience con 8. Reste 2: 7, 6.", ["5", "6", "7", "4"], "8 - 2 = 6. ¡Ocho bolas menos dos dan seis bolas!"],
  "TMP57_2_19": ["¿Cuánto gana 6 - 4?", "Comience en 6. Cuente hacia atrás 4: 5, 4, 3, 2.", ["3", "1", "2", "4"], "6 - 4 = 2. ¡Seis menos cuatro son dos!"],
  "TMP57_2_20": ["¿Cuánto gana 10 - 3?", "Comience en 10. Cuente hacia atrás 3: 9, 8, 7.", ["6", "8", "5", "7"], "10 - 3 = 7. ¡Diez menos tres son siete!"],

  // ==========================================================================
  // PROBLEMAS MATEMÁTICOS — Nivel 3 (TMP57_3_01 – TMP57_3_20)
  // ==========================================================================

  "TMP57_3_01": ["Si 2 autos tienen 4 ruedas cada uno, ¿cuántas ruedas hay en total?", "Cuente de 4 a 4: 4, 8. O sume: 4 + 4.", ["8", "6", "10", "4"], "2 coches de 4 ruedas cada uno: 4 + 4 = 8 ruedas en total!"],
  "TMP57_3_02": ["Si 3 niños tienen 2 manos cada uno, ¿cuántas manos hay en total?", "Cuente de 2 a 2: 2, 4, 6. O sume: 2 + 2 + 2.", ["5", "6", "8", "4"], "3 niños con 2 manos cada uno: 2 + 2 + 2 = ¡6 manos en total!"],
  "TMP57_3_03": ["Tienes 4 bolsas con 2 manzanas en cada una. ¿Cuántas manzanas hay?", "Cuente de 2 a 2: 2, 4, 6, 8. O sume: 2 + 2 + 2 + 2.", ["6", "10", "8", "4"], "4 bolsas con 2 manzanas cada una: 2 + 2 + 2 + 2 = 8 manzanas!"],
  "TMP57_3_04": ["Si 5 pájaros tienen 2 patas cada uno, ¿cuántas patas hay en total?", "Cuente del 2 al 2 cinco veces: 2, 4, 6, 8, 10.", ["8", "12", "6", "10"], "5 pájaros con 2 patas cada uno: 2 + 2 + 2 + 2 + 2 = ¡10 patas!"],
  "TMP57_3_05": ["Si 3 perros tienen 4 patas cada uno, ¿cuántas patas hay en total?", "Cuente de 4 a 4: 4, 8, 12. O sume: 4 + 4 + 4.", ["12", "8", "10", "6"], "3 perros con 4 patas cada uno: 4 + 4 + 4 = ¡12 patas!"],
  "TMP57_3_06": ["Tienes 2 cajas con 5 lápices en cada una. ¿Cuántos lápices hay?", "Recoge los lápices: 5 + 5.", ["8", "10", "12", "6"], "2 cajas con 5 lápices cada una: 5 + 5 = 10 lápices!"],
  "TMP57_3_07": ["Si 4 niños tienen 2 ojos cada uno, ¿cuántos ojos hay en total?", "Cuente de 2 a 2: 2, 4, 6, 8.", ["6", "10", "8", "4"], "4 niños con 2 ojos cada uno: 2 + 2 + 2 + 2 = ¡8 ojos!"],
  "TMP57_3_08": ["Si 2 arañas tienen 8 patas cada una, ¿cuántas patas hay en total?", "Suma las piernas: 8 + 8.", ["12", "14", "10", "16"], "2 arañas con 8 patas cada una: ¡8 + 8 = 16 patas!"],
  "TMP57_3_09": ["Compras 3 paquetes de pegatinas. Cada paquete tiene 3 pegatinas. ¿Cuántas pegatinas hay?", "Cuente de 3 a 3: 3, 6, 9. O sume: 3 + 3 + 3.", ["9", "6", "12", "8"], "3 paquetes de 3 pegatinas cada uno: 3 + 3 + 3 = 9 pegatinas!"],
  "TMP57_3_10": ["Si 5 flores tienen 4 pétalos cada una, ¿cuántos pétalos hay en total?", "Número del 4 al 4: 4, 8, 12, 16, 20.", ["15", "20", "25", "10"], "5 flores de 4 pétalos cada una: 4 + 4 + 4 + 4 + 4 = ¡20 pétalos!"],
  "TMP57_3_11": ["Si 2 bicicletas tienen 2 ruedas cada una, ¿cuántas ruedas hay?", "Añade las ruedas: 2 + 2.", ["6", "2", "4", "8"], "2 bicicletas de 2 ruedas cada una: ¡2 + 2 = 4 ruedas!"],
  "TMP57_3_12": ["Si 4 gatos tienen 4 patas cada uno, ¿cuántas patas hay en total?", "Número del 4 al 4: 4, 8, 12, 16.", ["12", "8", "14", "16"], "4 gatos con 4 patas cada uno: 4 + 4 + 4 + 4 = ¡16 patas!"],
  "TMP57_3_13": ["Tienes 5 platos. Hay 2 galletas en cada plato. ¿Cuántas galletas hay?", "Cuente de 2 en 2: 2, 4, 6, 8, 10.", ["10", "8", "12", "6"], "5 platos con 2 galletas cada uno: 2 + 2 + 2 + 2 + 2 = ¡10 galletas!"],
  "TMP57_3_14": ["Si 3 triciclos tienen 3 ruedas cada uno, ¿cuántas ruedas hay?", "Cuente de 3 a 3: 3, 6, 9.", ["6", "9", "12", "8"], "3 triciclos de 3 ruedas cada uno: 3 + 3 + 3 = ¡9 ruedas!"],
  "TMP57_3_15": ["Si 2 manos tienen 5 dedos cada una ¿cuantos dedos hay?", "Junta los dedos: 5 + 5.", ["8", "12", "10", "5"], "2 manos con 5 dedos cada una: 5 + 5 = 10 dedos!"],
  "TMP57_3_16": ["Tienes 4 amigos. Dale a cada amigo 3 dulces. ¿Cuantos dulces necesitas?", "Cuente de 3 a 3: 3, 6, 9, 12.", ["8", "10", "15", "12"], "4 amigos con 3 caramelos cada uno: 3 + 3 + 3 + 3 = ¡12 caramelos!"],
  "TMP57_3_17": ["Si 3 mesas tienen 4 patas cada una, ¿cuántas patas hay en total?", "Cuente de 4 a 4: 4, 8, 12.", ["12", "8", "10", "16"], "3 mesas de 4 patas cada una: 4 + 4 + 4 = 12 patas!"],
  "TMP57_3_18": ["Si 5 niños reciben 3 globos cada uno, ¿cuántos globos hay?", "Número del 3 al 3: 3, 6, 9, 12, 15.", ["12", "15", "18", "10"], "5 niños con 3 globos cada uno: 3 + 3 + 3 + 3 + 3 = ¡15 globos!"],
  "TMP57_3_19": ["Si 4 nidos tienen 3 huevos cada uno, ¿cuántos huevos hay?", "Cuente de 3 a 3: 3, 6, 9, 12.", ["8", "10", "12", "9"], "4 nidos con 3 huevos cada uno: 3 + 3 + 3 + 3 = ¡12 huevos!"],
  "TMP57_3_20": ["Si 2 dados tienen 6 caras cada uno, ¿cuántas caras hay en total?", "Suma las caras: 6 + 6.", ["8", "10", "6", "12"], "2 dados de 6 caras cada uno: ¡6 + 6 = 12 caras!"],

  }
});
