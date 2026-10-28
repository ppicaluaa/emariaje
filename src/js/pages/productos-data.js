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
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "religiosa", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "rosado", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "lentejuela", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "marron", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    category: "mostacilla", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "marron", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    category: "mostacilla", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | cuero | argollas
    color: "blanco", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "marron", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "amarillo", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "amarillo", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-013-principal.jpg",
      "moc-013-modelo.jpg",
    ]
  },
  {
    id: "moc-014",
    name: "Mochila Con Argollas",
    description: "Mochila artesanal en tono plateado, con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "argollas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "plateado", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    description: "Mochila artesanal en tono verde olivo, con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "argollas", // recamadas | tela | lentejuela | religiosa | arahuacas | mostacilla | cuero | argollas
    color: "verde", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | cuero | argollas
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-016-principal.jpg",
      "moc-016-alternativa.jpg",
      "moc-016-modelo1.jpg",
      "moc-016-modelo2.jpg",      
    ]
  },
  {
    id: "moc-017",
    name: "Mochila En Mostacilla Mini",
    description: "Mochila mini en mostacilla con diseño geométrico en tonos beige, negro y cobrizo.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "mostacilla", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "multicolor", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "cuero", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "azul", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "cuero", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "miel", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "negro", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-020-principal.jpg",
      "moc-020-alternativa.jpg",
      "moc-020-modelo1.jpg",
      "moc-020-modelo2.png",
    ]
  },
  {
    id: "moc-021",
    name: "Mochila En Mostacilla Mini",
    description: "Mochila mini en mostacilla con diseño geométrico en tonos beige, negro y cobrizo.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "mostacilla", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "blanco", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
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
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "multicolor", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-022-principal.jpg",
      "moc-022-alternativa.jpg",
      "moc-022-modelo1.jpg",
      "moc-022-modelo2.jpg",
    ]
  },
  {
    id: "moc-023",
    name: "Mochila En Cuero",
    description: "Mochila artesanal en cuero color marron, con bordes tejidos y delicados flecos decorativos que resaltan su estilo natural y elegante.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "cuero", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "marron", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-023-principal.png",
      "moc-023-alternativa.png",
      "moc-023-modelo.png",
    ]
  },
  {
    id: "moc-024",
    name: "Mochila En Cuero",
    description: "Mochila artesanal en cuero color negro, con bordes tejidos y delicados flecos decorativos que resaltan su estilo natural y elegante.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "cuero", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "negro", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-024-principal.png",
      "moc-024-alternativa.png",
      "moc-024-modelo.png",
    ]
  },
  {
    id: "moc-025",
    name: "Mochila Artesanal En Mostacilla",
    description: "Mochila artesanal en mostacilla, con diseños geométricos multicolores, detalles únicos, elegancia y tradición colombiana.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "mostacilla", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-025-principal.png",
      "moc-025-alternativa.png",
      "moc-025-modelo.png",
    ]
  },
  {
    id: "moc-026",
    name: "Mochila Con Argollas",
    description: "Mochila artesanal en tono beige, con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "argollas", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-026-principal.png",
      "moc-026-alternativa.png",
      "moc-026-modelo.png",
    ]
  },
  {
    id: "moc-027",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "multicolor", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-027-principal.png",
      "moc-027-alternativa.png",
      "moc-027-modelo1.png",
      "moc-027-modelo2.png",
    ]
  },
   {
    id: "moc-028",
    name: "Mochila En Tela Lentejuela",
    description: "Diseño artesanal en tela con lentejuelas, perfecto para destacar con elegancia y personalidad.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "lentejuela", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "rosado", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-028-principal.png",
      "moc-028-alternativa.png",
      "moc-028-modelo.png",
    ]
  },
  {
    id: "moc-029",
    name: "Mochila Mariana",
    description: "Una pieza artesanal inspirada en la devoción mariana, donde la fe y la tradición se unen en un diseño lleno de significado.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "religiosa", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "blanco", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-029-principal.png",
      "moc-029-alternativa.png",
      "moc-029-modelo.png",
    ]
  },
  {
    id: "moc-030",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "gris", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-030-principal.png",
      "moc-030-alternativa.png",
      "moc-030-modelo1.png",
      "moc-030-modelo2.png",
    ]
  },
  {
    id: "moc-031",
    name: "Mochila Con Argollas",
    description: "Mochila artesanal con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "argollas", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-031-principal.png",
      "moc-031-alternativa.png",
      "moc-031-modelo.png",
    ]
  },
  {
    id: "moc-032",
    name: "Mochila Recamada Con Flores y Perlas",
    description: "Mochila artesanal con delicadas flores recamadas y perlas que aportan elegancia y encanto.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-032-principal.png",
      "moc-032-alternativa.png",
      "moc-032-modelo.png",
    ]
  },
  {
    id: "moc-033",
    name: "Mochila Recamada Con Flores y Perlas",
    description: "Mochila artesanal con delicadas flores recamadas y perlas que aportan elegancia y encanto.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "recamadas", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "miel", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-033-principal.png",
      "moc-033-alternativa.png",      
    ]
  },
  {
    id: "moc-034",
    name: "Mochila Con Argollas",
    description: "Mochila artesanal con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "argollas", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "multicolor", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-034-principal.png",
      "moc-034-alternativa.png", 
      "moc-034-modelo.png",     
    ]
  },
  {
    id: "moc-035",
    name: "Mochila Bailarina En Mostacilla",
    description: "La Mochila Bailarina en Mostacilla cautiva con sus cascadas de flecos artesanales que imitan el movimiento.",
    price: 450000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "mostacilla", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "negro", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel
    available: true,
    images: [
      "moc-035-principal.png",
      "moc-035-alternativa.png", 
      "moc-035-modelo.png",     
    ]
  },
  {
    id: "moc-036",
    name: "Mochila Bailarina En Mostacilla",
    description: "La Mochila Bailarina en Mostacilla cautiva con sus cascadas de flecos artesanales que imitan el movimiento.",
    price: 450000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "mostacilla", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "plateado", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-036-principal.png",
      "moc-036-alternativa.png", 
      "moc-036-modelo.png",     
    ]
  },
  {
    id: "moc-037",
    name: "Mochila En Cuero",
    description: "Mochila artesanal en cuero color vinotinto, con bordes tejidos y delicados flecos decorativos que resaltan su estilo natural y elegante.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "cuero", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "vinotinto", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-037-principal.png",
      "moc-037-alternativa.png", 
      "moc-037-modelo.png",     
    ]
  },
  {
    id: "moc-038",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "multicolor", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-038-principal.png",
      "moc-038-alternativa.png", 
      "moc-038-modelo1.png",
      "moc-038-modelo2.png",     
    ]
  },
  {
    id: "moc-039",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "multicolor", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-039-principal.png",
      "moc-039-alternativa.png", 
      "moc-039-modelo1.png",
      "moc-039-modelo2.png",     
    ]
  },
  {
    id: "moc-040",
    name: "Mochila Arahuaca Con Cuero",
    description: "Mochila arahuaca con detalles en cuero que combinan tradición artesanal, resistencia y estilo auténtico.",
    price: 225000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "arahuaca", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "multicolor", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-040-principal.png",
      "moc-040-alternativa.png", 
      "moc-040-modelo1.png",
      "moc-040-modelo2.png",     
    ]
  },
  {
    id: "moc-041",
    name: "Mochila Con Argollas",
    description: "Mochila artesanal con tejido detallado y argollas decorativas que aportan un estilo moderno y original.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "argollas", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "verde", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-041-principal.png",
      "moc-041-alternativa.png", 
      "moc-041-modelo.png",    
    ]
  },
  {
    id: "moc-042",
    name: "Mochila Mariana",
    description: "Una pieza artesanal inspirada en la devoción mariana, donde la fe y la tradición se unen en un diseño lleno de significado.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "religiosa", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-042-principal.png",
      "moc-042-alternativa.png", 
      "moc-042-modelo.png",    
    ]
  },
  {
    id: "moc-043",
    name: "Mochila Mariana",
    description: "Una pieza artesanal inspirada en la devoción mariana, donde la fe y la tradición se unen en un diseño lleno de significado.",
    price: 165000, // Escribe el precio en pesos colombianos, por ejemplo: 250000
    category: "religiosa", // recamadas | tela | lentejuela | religiosa | arahuaca | mostacilla | argollas | cuero
    color: "beige", // beige | rosado | azul | negro | marron | blanco | gris | verde | amarillo | plateado | multicolor | miel | vinotinto
    available: true,
    images: [
      "moc-043-principal.png",
      "moc-043-alternativa.png", 
      "moc-043-modelo.png",    
    ]
  },
];
