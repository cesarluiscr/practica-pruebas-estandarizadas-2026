export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface SubjectQuiz {
  id: string;
  name: string;
  description: string;
  color: string;
  questions: Question[];
}

export const quizData: SubjectQuiz[] = [
  {
    id: "espanol",
    name: "Español",
    description: "Comprensión de lectura, ideas principales, personajes y más.",
    color: "bg-blue-500",
    questions: [
      {
        id: "esp1",
        text: "¿Cuál es la característica principal de la idea principal en un texto?",
        options: [
          "Es la información más importante sin la cual el texto no se entendería.",
          "Brinda detalles secundarios sobre el tema.",
          "Siempre se encuentra al inicio del párrafo.",
          "Son notas al pie de página."
        ],
        correctAnswer: 0,
        explanation: "La idea principal es el contenido más importante, sin la cual el texto perdería su valor."
      },
      {
        id: "esp2",
        text: "¿Qué son las ideas complementarias?",
        options: [
          "Son las que no tienen relación con el tema.",
          "Son ideas que reafirman, dan soporte o agregan información a la idea principal.",
          "Es el resumen total del libro.",
          "Son los nombres de los autores."
        ],
        correctAnswer: 1
      },
      {
        id: "esp3",
        text: "¿Qué es la información implícita?",
        options: [
          "La que está escrita de forma directa y clara.",
          "La que el autor dice con palabras exactas.",
          "Aquella que no está escrita directamente pero se puede deducir o inferir.",
          "Los dibujos que acompañan al texto."
        ],
        correctAnswer: 2
      },
      {
        id: "esp4",
        text: "En una relación de causa y efecto, un conector de EFECTO es:",
        options: [
          "Porque",
          "Ya que",
          "Por eso",
          "Debido a"
        ],
        correctAnswer: 2,
        explanation: "Conectores de efecto incluyen 'por eso', 'entonces', 'así que', 'como resultado'."
      },
      {
        id: "esp5",
        text: "¿Qué define la posición ideológica de un personaje?",
        options: [
          "Su vestimenta y altura.",
          "Su conjunto de ideas, valores y creencias sobre temas importantes.",
          "El lugar donde vive.",
          "El número de veces que aparece en la historia."
        ],
        correctAnswer: 1
      },
      {
        id: "esp6",
        text: "¿Qué es el conflicto de un personaje?",
        options: [
          "Cuando el personaje no tiene nada que hacer.",
          "Una situación donde no puede lograr lo que desea debido a obstáculos o acciones de otros.",
          "El momento en que termina la historia.",
          "La descripción física del personaje."
        ],
        correctAnswer: 1
      },
      {
        id: "esp7",
        text: "¿Dónde se puede encontrar la idea principal de un párrafo?",
        options: [
          "Solo al final del párrafo.",
          "Solo al inicio del párrafo.",
          "Al inicio, al final o puede estar implícita.",
          "Solo en el título."
        ],
        correctAnswer: 2
      },
      {
        id: "esp8",
        text: "¿Qué es un eje temático?",
        options: [
          "Un tipo de letra.",
          "Una especie de 'hilo conductor' donde se encuentran los temas del texto.",
          "La biografía del autor.",
          "El número de páginas por capítulo."
        ],
        correctAnswer: 1
      },
      {
        id: "esp9",
        text: "Para comprender el tema de un texto literario debemos preguntarnos:",
        options: [
          "¿Cuánto cuesta el libro?",
          "¿De qué trata realmente este texto?",
          "¿Cuántos personajes secundarios hay?",
          "¿Quién imprimió el libro?"
        ],
        correctAnswer: 1
      },
      {
        id: "esp10",
        text: "¿Cómo se nota la posición ideológica en un texto?",
        options: [
          "Por lo que el personaje dice y las decisiones que toma.",
          "Por el color de los ojos del personaje.",
          "Por la cantidad de diálogos.",
          "Por la editorial del libro."
        ],
        correctAnswer: 0
      },
      {
        id: "esp11",
        text: "Si una idea afirma lo importante e imprescindible, y si se elimina el párrafo queda incompleto, hablamos de:",
        options: ["Idea secundaria", "Idea fundamental o principal", "Ejemplo", "Resumen"],
        correctAnswer: 1
      },
      {
        id: "esp12",
        text: "¿Qué es la personalidad de un personaje?",
        options: [
          "Su conjunto de características emocionales y actuar en su entorno.",
          "Su nombre completo.",
          "El tiempo que dura la obra.",
          "Su dirección de casa."
        ],
        correctAnswer: 0
      },
      {
        id: "esp13",
        text: "¿Cuál es un conector de CAUSA?",
        options: ["Por eso", "Ya que", "Entonces", "Así que"],
        correctAnswer: 1
      },
      {
        id: "esp14",
        text: "Para encontrar información implícita debemos:",
        options: ["Solo mirar los dibujos", "Hacer inferencias usando pistas del texto", "Preguntar al profesor", "Leer saltando líneas"],
        correctAnswer: 1
      },
      {
        id: "esp15",
        text: "¿Qué ayuda a entender mejor las acciones de un personaje?",
        options: ["Saber su edad", "Conocer su posición ideológica", "Saber cuántas páginas tiene el libro", "Conocer el nombre del autor"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "ciencias",
    name: "Ciencias",
    description: "Células, sistemas del cuerpo, biodiversidad y energía.",
    color: "bg-green-500",
    questions: [
      {
        id: "cie1",
        text: "¿Qué parte de la célula controla la actividad celular y guarda el material genético (ADN)?",
        options: [
          "Membrana celular",
          "Citoplasma",
          "Núcleo celular",
          "Mitocondria"
        ],
        correctAnswer: 2
      },
      {
        id: "cie2",
        text: "¿Cuál es el orden correcto de los niveles de organización del cuerpo humano?",
        options: [
          "Tejido -> Célula -> Órgano -> Sistema -> Organismo",
          "Célula -> Tejido -> Órgano -> Sistema -> Organismo",
          "Organismo -> Sistema -> Órgano -> Tejido -> Célula",
          "Célula -> Órgano -> Tejido -> Sistema -> Organismo"
        ],
        correctAnswer: 1
      },
      {
        id: "cie3",
        text: "¿Qué componente de la sangre interviene en la coagulación?",
        options: [
          "Glóbulos rojos",
          "Plasma",
          "Glóbulos blancos",
          "Plaquetas"
        ],
        correctAnswer: 3
      },
      {
        id: "cie4",
        text: "¿Cuál es la función principal de los glóbulos blancos?",
        options: [
          "Transportar oxígeno",
          "Defender al organismo contra enfermedades",
          "Dar color a la sangre",
          "Transportar nutrientes"
        ],
        correctAnswer: 1
      },
      {
        id: "cie5",
        text: "¿Qué sistema se encarga de transformar los alimentos en sustancias simples para la sangre?",
        options: [
          "Sistema Respiratorio",
          "Sistema Circulatorio",
          "Sistema Digestivo",
          "Sistema Excretor"
        ],
        correctAnswer: 2
      },
      {
        id: "cie6",
        text: "¿Qué órgano produce la bilis?",
        options: [
          "Estómago",
          "Hígado",
          "Páncreas",
          "Intestino Delgado"
        ],
        correctAnswer: 1
      },
      {
        id: "cie7",
        text: "En la fotosíntesis, ¿qué pigmento da el color verde a las plantas?",
        options: [
          "Hemoglobina",
          "Clorofila",
          "Melanina",
          "Caroteno"
        ],
        correctAnswer: 1
      },
      {
        id: "cie8",
        text: "¿A qué reino pertenecen los organismos unicelulares conocidos como bacterias?",
        options: [
          "Reino Protista",
          "Reino Fungi",
          "Reino Plantae",
          "Reino Monera"
        ],
        correctAnswer: 3
      },
      {
        id: "cie9",
        text: "¿Se llaman organismos autótrofos a aquellos que?",
        options: [
          "Se alimentan de otros seres vivos.",
          "Fabrican su propio alimento mediante fotosíntesis.",
          "Solo viven en el agua.",
          "No pueden moverse."
        ],
        correctAnswer: 1
      },
      {
        id: "cie10",
        text: "¿Qué tipo de relación simbiótica ocurre cuando ambos seres vivos se benefician?",
        options: [
          "Parasitismo",
          "Comensalismo",
          "Mutualismo",
          "Depredación"
        ],
        correctAnswer: 2
      },
      {
        id: "cie11",
        text: "¿Cuál es la fuente de energía eléctrica más utilizada en Costa Rica?",
        options: [
          "Energía Solar",
          "Energía Eólica",
          "Energía Hidroeléctrica",
          "Energía Geotérmica"
        ],
        correctAnswer: 2
      },
      {
        id: "cie12",
        text: "¿Qué es la energía cinética?",
        options: [
          "La energía guardada en un cuerpo en reposo.",
          "La energía que tiene un cuerpo cuando está en movimiento.",
          "La energía que proviene del calor.",
          "La energía almacenada en las baterías."
        ],
        correctAnswer: 1
      },
      {
        id: "cie13",
        text: "¿Cuál es la unidad básica y funcional de todos los seres vivos?",
        options: ["El tejido", "La célula", "El órgano", "El sistema"],
        correctAnswer: 1
      },
      {
        id: "cie14",
        text: "¿Qué nombre recibe el movimiento del corazón cuando se contrae?",
        options: ["Diástole", "Relajación", "Sístole", "Pulso"],
        correctAnswer: 2
      },
      {
        id: "cie15",
        text: "¿Qué vasos sanguíneos llevan la sangre con oxígeno desde el corazón?",
        options: ["Venas", "Capilares", "Arterias", "Ventrículos"],
        correctAnswer: 2
      },
      {
        id: "cie16",
        text: "¿Qué sistema se encarga de eliminar las sustancias nocivas a través de la orina?",
        options: ["Sistema Digestivo", "Sistema Renal", "Sistema Endocrino", "Sistema Nervioso"],
        correctAnswer: 1
      },
      {
        id: "cie17",
        text: "¿Qué órgano controla el equilibrio de agua y sales en el cuerpo?",
        options: ["Los pulmones", "El hígado", "Los riñones", "Los intestinos"],
        correctAnswer: 2
      },
      {
        id: "cie18",
        text: "¿Cuál es el centro de control que coordina los actos reflejos?",
        options: ["El cerebro", "El cerebelo", "La médula espinal", "El bulbo raquídeo"],
        correctAnswer: 2
      },
      {
        id: "cie19",
        text: "¿Qué tipo de reproducción genera descendientes idénticos al progenitor?",
        options: ["Reproducción sexual", "Reproducción por gametos", "Reproducción asexual", "Reproducción cruzada"],
        correctAnswer: 2
      },
      {
        id: "cie20",
        text: "¿Cómo se llama la adaptación donde un animal entra en un estado de sueño profundo para sobrevivir al invierno?",
        options: ["Migración", "Camuflaje", "Hibernación", "Mimetismo"],
        correctAnswer: 2
      },
      {
        id: "cie21",
        text: "¿Cuál es la característica principal de los animales vertebrados?",
        options: ["Tienen exoesqueleto", "No tienen huesos", "Tienen columna vertebral", "Viven solo en el agua"],
        correctAnswer: 2
      },
      {
        id: "cie22",
        text: "En una cadena alimentaria, ¿qué seres vivos ocupan el primer nivel trófico?",
        options: ["Consumidores primarios", "Descomponedores", "Productores (plantas)", "Carnívoros"],
        correctAnswer: 2
      },
      {
        id: "cie23",
        text: "¿Cómo se transmite el calor a través de objetos sólidos como una cuchara de metal?",
        options: ["Convección", "Radiación", "Conducción", "Reflexión"],
        correctAnswer: 2
      },
      {
        id: "cie24",
        text: "¿Qué fenómeno ocurre cuando la luz rebota sobre un objeto, permitiéndonos verlo?",
        options: ["Refracción", "Absorción", "Reflexión", "Descomposición"],
        correctAnswer: 2
      },
      {
        id: "cie25",
        text: "¿Cuál es la capa interna más profunda y sólida de la Tierra?",
        options: ["Corteza", "Manto", "Núcleo interno", "Litosfera"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "sociales",
    name: "Estudios Sociales",
    description: "Historia de Costa Rica, geografía y educación cívica.",
    color: "bg-orange-500",
    questions: [
      {
        id: "soc1",
        text: "¿En qué año llegó Cristóbal Colón por primera vez a las costas de Costa Rica?",
        options: [
          "1492",
          "1502",
          "1575",
          "1821"
        ],
        correctAnswer: 1
      },
      {
        id: "soc2",
        text: "¿Cuál fue la capital de Costa Rica durante la época colonial?",
        options: [
          "San José",
          "Alajuela",
          "Cartago",
          "Heredia"
        ],
        correctAnswer: 2
      },
      {
        id: "soc3",
        text: "¿Qué grupo indígena se asienta principalmente en la zona de Matambú?",
        options: [
          "Huetares",
          "Chorotegas",
          "Bribris",
          "Cabécares"
        ],
        correctAnswer: 1
      },
      {
        id: "soc4",
        text: "¿Qué batalla ocurrió el 20 de marzo de 1856 durante la Campaña Nacional?",
        options: [
          "Batalla de Rivas",
          "Batalla de Sardinal",
          "Batalla de Santa Rosa",
          "Batalla de La Trinidad"
        ],
        correctAnswer: 2
      },
      {
        id: "soc5",
        text: "¿Quién es el héroe nacional que incendió el Mesón de Guerra en la Batalla de Rivas?",
        options: [
          "Juan Rafael Mora Porras",
          "Juan Santamaría",
          "José María Cañas",
          "Pancha Carrasco"
        ],
        correctAnswer: 1
      },
      {
        id: "soc6",
        text: "¿Cuál es el nombre de la primera Constitución Política (1821)?",
        options: [
          "Constitución de 1871",
          "Pacto de Concordia",
          "Ley Fundamental",
          "Constitución de 1949"
        ],
        correctAnswer: 1
      },
      {
        id: "soc7",
        text: "¿Qué institución se creó en 1941 para proteger la salud de los trabajadores?",
        options: [
          "IMAS",
          "CCSS (Caja Costarricense de Seguro Social)",
          "UCR",
          "PANI"
        ],
        correctAnswer: 1
      },
      {
        id: "soc8",
        text: "¿Qué ventaja tiene la posición geográfica de Costa Rica como puente biológico?",
        options: [
          "Que tiene muchos volcanes.",
          "Permite que se encuentren especies de flora y fauna del norte y del sur del continente.",
          "Que siempre hay huracanes.",
          "Que es un país muy ancho."
        ],
        correctAnswer: 1
      },
      {
        id: "soc9",
        text: "¿Qué es el relieve de llanura?",
        options: [
          "Cadenas de montañas unidas entre sí.",
          "Terrenos bajos entre montañas o colinas.",
          "Tierras planas y bajas cerca del nivel del mar.",
          "Lugar donde el mar toca la tierra."
        ],
        correctAnswer: 2
      },
      {
        id: "soc10",
        text: "¿Cuál fue una consecuencia de la colonización española en Costa Rica?",
        options: [
          "Aumento de la población indígena.",
          "Introducción del idioma español y la religión católica.",
          "Desaparición de los animales de granja.",
          "Independencia inmediata de España."
        ],
        correctAnswer: 1
      },
      {
        id: "soc11",
        text: "¿Cuál es la función de la Educación Cívica?",
        options: ["Enseñar matemáticas", "Enseñar cómo funciona la sociedad y orientar sobre la convivencia", "Enseñar a pintar", "Enseñar historia mundial"],
        correctAnswer: 1
      },
      {
        id: "soc12",
        text: "¿Qué fenómeno atmosférico afecta las costas costarricenses con vientos de más de 250 km/h?",
        options: ["Terremotos", "Sequías", "Huracanes", "Tsunamis"],
        correctAnswer: 2
      },
      {
        id: "soc13",
        text: "¿Qué tipo de relieve son terrenos bajos por donde suelen pasar ríos y están entre montañas?",
        options: ["Cordilleras", "Llanuras", "Valles", "Costas"],
        correctAnswer: 2
      },
      {
        id: "soc14",
        text: "¿Cómo vivían los primeros pobladores llamados 'Cazadores y Recolectores'?",
        options: ["En grandes ciudades", "En bandas de 20 a 30 individuos", "En edificios de piedra", "Solos en el bosque"],
        correctAnswer: 1
      },
      {
        id: "soc15",
        text: "¿Qué material utilizaban los Chorotegas para destacar su arte con figuras antropomorfas?",
        options: ["Oro", "Jade", "Cerámica", "Hierro"],
        correctAnswer: 2
      },
      {
        id: "soc16",
        text: "¿Cuál es el dios creador según la cosmovisión de Bribris y Cabécares?",
        options: ["El Sol", "El Jaguar", "Sibó", "Nicorare"],
        correctAnswer: 2
      },
      {
        id: "soc17",
        text: "¿Qué manifestación cultural de los Bruncas se realiza cada 31 de diciembre?",
        options: ["Danza del Sorbón", "Baile de los Diablitos", "Festival del Maíz", "Canto a la Luna"],
        correctAnswer: 1
      },
      {
        id: "soc18",
        text: "¿Cuál fue una causa externa de la Independencia de Costa Rica?",
        options: ["La Guerra de 1856", "Las ideas de la Ilustración", "La construcción de la CCSS", "La creación del MEP"],
        correctAnswer: 1
      },
      {
        id: "soc19",
        text: "¿En qué fecha se celebra la Anexión del Partido de Nicoya?",
        options: ["15 de setiembre", "11 de abril", "25 de julio", "12 de octubre"],
        correctAnswer: 2
      },
      {
        id: "soc20",
        text: "¿Cuál es el símbolo nacional que representa el grano de oro (café) en su marco?",
        options: ["La Bandera", "El Escudo Nacional", "El Himno Nacional", "La Guaria Morada"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "matematicas",
    name: "Matemáticas",
    description: "Aritmética, geometría, estadística y álgebra básica.",
    color: "bg-red-500",
    questions: [
      {
        id: "mat1",
        text: "¿Cómo se lee el número 340 817 846?",
        options: [
          "Trescientos cuarenta millones ochocientos diecisiete mil ochocientos cuarenta y seis",
          "Trescientos cuarenta mil ochocientos diecisiete ochocientos cuarenta y seis",
          "Treinta y cuatro millones ochocientos diecisiete mil ochocientos cuarenta y seis",
          "Trescientos cuarenta billones ochocientos diecisiete mil ochocientos cuarenta y seis"
        ],
        correctAnswer: 0
      },
      {
        id: "mat2",
        text: "¿Cuál es el resultado de la potencia 3⁴?",
        options: [
          "12",
          "27",
          "81",
          "64"
        ],
        correctAnswer: 2
      },
      {
        id: "mat3",
        text: "¿Cuáles son los números que solamente son divisibles por ellos mismos y por uno?",
        options: [
          "Números pares",
          "Números compuestos",
          "Números impares",
          "Números primos"
        ],
        correctAnswer: 3
      },
      {
        id: "mat4",
        text: "¿Cuál es la fórmula para calcular el área de un triángulo?",
        options: [
          "base x altura",
          "lado x lado",
          "(base x altura) / 2",
          "lado + lado + lado"
        ],
        correctAnswer: 2
      },
      {
        id: "mat5",
        text: "¿Qué medida se utiliza para calcular el volumen?",
        options: [
          "Metro cuadrado (m²)",
          "Metro lineal (m)",
          "Metro cúbico (m³)",
          "Kilogramo (kg)"
        ],
        correctAnswer: 2
      },
      {
        id: "mat6",
        text: "¿Cuál es la regla de divisibilidad por 3?",
        options: [
          "Si el número termina en 0.",
          "Si el número es par.",
          "Si la suma de sus cifras es un múltiplo de 3.",
          "Si el número termina en 5."
        ],
        correctAnswer: 2
      },
      {
        id: "mat7",
        text: "En estadística, ¿cómo se llama al valor que más se repite en un conjunto de datos?",
        options: [
          "Máximo",
          "Mínimo",
          "Promedio",
          "Moda"
        ],
        correctAnswer: 3
      },
      {
        id: "mat8",
        text: "¿Cuál es el resultado de 3,14 x 2?",
        options: [
          "6,28",
          "5,28",
          "6,14",
          "3,28"
        ],
        correctAnswer: 0
      },
      {
        id: "mat9",
        text: "¿Qué es el diámetro de una circunferencia?",
        options: [
          "La mitad del radio.",
          "Un segmento que pasa por el centro y mide el doble que el radio.",
          "La línea curva que forma el círculo.",
          "El espacio dentro del círculo."
        ],
        correctAnswer: 1
      },
      {
        id: "mat10",
        text: "¿A cuánto equivale 1 Kilolitro (kl) en Litros?",
        options: [
          "10 L",
          "100 L",
          "1 000 L",
          "10 000 L"
        ],
        correctAnswer: 2
      },
      {
        id: "mat11",
        text: "¿Qué número representa tres unidades con sesenta y dos diezmilésimas?",
        options: ["3,62", "3,062", "3,0062", "39,0062"],
        correctAnswer: 2
      },
      {
        id: "mat12",
        text: "Para redondear 4,67 a la unidad más próxima, el resultado es:",
        options: ["4", "4,6", "4,7", "5"],
        correctAnswer: 3
      },
      {
        id: "mat13",
        text: "¿Cómo se llama el polígono que tiene seis lados?",
        options: ["Pentágono", "Hexágono", "Heptágono", "Octágono"],
        correctAnswer: 1
      },
      {
        id: "mat14",
        text: "¿Cuál es el resultado de 10²?",
        options: ["20", "100", "200", "10"],
        correctAnswer: 1
      },
      {
        id: "mat15",
        text: "¿Cómo se llama la proporción donde si una magnitud aumenta, la otra también lo hace?",
        options: ["Proporcionalidad inversa", "Proporcionalidad directa", "Igualdad", "Sucesión"],
        correctAnswer: 1
      }
    ]
  }
];
