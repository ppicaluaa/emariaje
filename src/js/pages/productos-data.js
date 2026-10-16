// Catálogo editable de EMARIAJES.
// Cambia name, description, price, category, color y available por los datos reales.
// Las rutas de imágenes corresponden a los archivos del ZIP productos.zip.
// category: usa "recamadas", "tela", "lentejuela" o "religiosa".
// color: usa "beige", "rosado", "azul", "negro" o "marron".

export const products = [
  {
    id: "moc-001",
    name: "Mochila Mariana",
    description: "Una pieza artesanal inspirada en la devoción mariana, donde la fe y la tradición se unen en un diseño lleno de significado.",
    price: 160000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "religiosa", // recamadas | tela | lentejuela | religiosa
    color: "beige", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-001-principal.jpg",
      "moc-001-alternativa.jpg",
      "moc-001-modelo.jpg",
    ]
  },
  {
    id: "moc-002",
    name: "Mochila Recamada En Perlas",
    description: "Diseño artesanal recamado con perlas y detalles bordados que hacen de cada pieza una creación única.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "rosado", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-002-principal.jpg",
      "moc-002-alternativa.jpg",
      "moc-002-modelo.jpg",
    ]
  },
  {
    id: "moc-003",
    name: "Mochila En Tela Lentejuela",
    description: "Diseño artesanal en tela con lentejuelas, perfecto para destacar con elegancia y personalidad.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "lentejuela", // recamadas | tela | lentejuela | religiosa
    color: "beige", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-003-principal.jpg",
      "moc-003-alternativa.jpg",
      "moc-003-modelo.jpg",
    ]
  },
  {
    id: "moc-004",
    name: "Mochila Recamada En Perla",
    description: "Diseño artesanal recamado con perlas y delicados detalles que realzan su elegancia.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "beige", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-004-principal.jpg",
      "moc-004-alternativa.jpg",
      "moc-004-modelo.jpg",
    ]
  },
  {
    id: "moc-005",
    name: "Mochila Recamada En Perla",
    description: "Diseño artesanal recamado con perlas y delicados detalles que realzan su elegancia.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "marron", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-005-principal.jpg",
      "moc-005-alternativa.jpg",
      "moc-005-modelo.jpg",
    ]
  },
  {
    id: "moc-006",
    name: "Mochila Recamada En Perla",
    description: "Diseño artesanal recamado con perlas y delicados detalles que realzan su elegancia.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "beige", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-006-principal.jpg",
      "moc-006-alternativa.jpg",
      "moc-006-modelo.jpg",
    ]
  },
  {
    id: "moc-007",
    name: "Mochila Artesanal En Mostacilla",
    description: "Mochila artesanal en mostacilla con un diseño geométrico que combina tonos beige, negro y cobrizo.",
    price: 320000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-007-principal.jpg",
      "moc-007-alternativa.jpg",
      "moc-007-modelo.jpg",
    ]
  },
  {
    id: "moc-008",
    name: "Mochila Artesanal En Mostacilla",
    description: "Mochila artesanal en mostacilla con un diseño geométrico que combina tonos beige, negro y cobrizo.",
    price: 350000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-008-principal.jpg",
      "moc-008-alternativa.jpg",
      "moc-008-modelo.jpg",
    ]
  },
  {
    id: "moc-009",
    name: "Mochila Recamada Con Flores y Perlas",
    description: "Mochila artesanal con delicadas flores recamadas y perlas que aportan elegancia y encanto.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "beige", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-009-principal.jpg",
      "moc-009-alternativa.jpg",
      "moc-009-modelo.jpg",
    ]
  },
  {
    id: "moc-010",
    name: "Mochila Recamada Con Flores y Perlas",
    description: "Mochila artesanal con delicadas flores recamadas y perlas que aportan elegancia y encanto.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "beige", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-010-principal.jpg",
      "moc-010-alternativa.jpg",
      "moc-010-modelo.jpg",
    ]
  },
  {
    id: "moc-011",
    name: "Mochila Recamada Con Flores y Perlas",
    description: "Mochila artesanal con delicadas flores recamadas y perlas que aportan elegancia y encanto.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-011-principal.jpg",
      "moc-011-alternativa.jpg",
      "moc-011-modelo.jpg",
    ]
  },
  {
    id: "moc-012",
    name: "Mochila Recamada Con Flores y Perlas",
    description: "Mochila artesanal con delicadas flores recamadas y perlas que aportan elegancia y encanto.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-012-principal.jpg",
      "moc-012-alternativa.jpg",
      "moc-012-modelo.jpg",
    ]
  },
  {
    id: "moc-013",
    name: "Mochila Recamada Con Flores y Perlas",
    description: "Mochila artesanal con delicadas flores recamadas y perlas que aportan elegancia y encanto.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-013-principal.jpg",
      "moc-013-modelo.jpg",
    ]
  },
  {
    id: "moc-014",
    name: "Mochila Con Argollas",
    description: "Mochila artesanal en tono gris topo, con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 160000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "marron", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-014-principal.png",
      "moc-014-alternativa.png",
      "moc-014-modelo.jpg",
    ]
  },
  {
    id: "moc-015",
    name: "Mochila Con Argollas",
    description: "Mochila artesanal en tono gris topo, con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 160000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-015-principal.jpg",
      "moc-015-alternativa.jpg",
      "moc-015-modelo.jpg",
    ]
  },
  {
    id: "moc-016",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "beige", // recamadas | tela | lentejuela | religiosa
    color: "beige", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-016-alternativa.jpg",
      "moc-016-modelo1.jpg",
      "moc-016-modelo2.jpg",
    ]
  },
  {
    id: "moc-017",
    name: "Mochila En Mostacilla Mini",
    description: "Mochila mini en mostacilla con diseño geométrico en tonos beige, negro y cobrizo.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-017-principal.jpg",
      "moc-017-alternativa.jpg",
      "moc-017-modelo.jpg",
    ]
  },
  {
    id: "moc-018",
    name: "Mochila En Cuero",
    description: "Mochila artesanal en cuero azul oscuro con detalles marrones y herrajes dorados que aportan un estilo moderno y elegante.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "azul", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-018-principal.jpg",
      "moc-018-alternativa.jpg",
      "moc-018-contexto.jpg",
      "moc-018-modelo.jpg",
    ]
  },
  {
    id: "moc-019",
    name: "Mochila En Cuero",
    description: "Mochila artesanal en cuero color miel, con bordes tejidos y delicados flecos decorativos que resaltan su estilo natural y elegante.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "marron", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-019-principal.jpg",
      "moc-019-alternativa.jpg",
      "moc-019-modelo.jpg",
    ]
  },
  {
    id: "moc-020",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "negro", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-020-principal.jpg",
      "moc-020-alternativa.jpg",
      "moc-020-modelo1.jpg",
      "moc-020-modelo2.png",
      "moc-020-modelo3.png",
    ]
  },
  {
    id: "moc-021",
    name: "Mochila En Mostacilla Mini",
    description: "Mochila mini en mostacilla con diseño geométrico en tonos beige, negro y cobrizo.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-021-principal.jpg",
      "moc-021-alternativa.jpg",
      "moc-021-modelo1.jpg",
    ]
  },
  {
    id: "moc-022",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 220000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "", // recamadas | tela | lentejuela | religiosa
    color: "", // beige | rosado | azul | negro | marron
    available: true,
    images: [
      "moc-022-principal.jpg",
      "moc-022-alternativa.jpg",
      "moc-022-modelo1.jpg",
      "moc-022-modelo2.jpg",
    ]
  },
];
