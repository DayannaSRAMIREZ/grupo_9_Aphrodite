'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Products', [
      {
         name: "Fiorever",
         materialId: 1,
         sizeId: 1,
         description: "Anillo Fiorever en oro blanco de 18 qt con un diamante redondo talla brillante central y pavé de diamantes.",
         categoryId: 1,
         price: 5500,
         units: 2200,
         discount: 10, 
         createdAt: new Date
      },
      {
        
         name: "Sunshine",
         materialId: 1,
         sizeId: 2,
         description: "Anillo Sunshine es encantador e ideal para llevar a diario. Una piedra de color azul claro tallada con destreza brilla intensamente rodeada por pétalos de flores. Este anillo es un complemento fantástico tanto para looks en tonos claros o pastel, tanto para el trabajo como para ocasiones informales. Combina especialmente bien con accesorios similares y diseños florales",
         categoryId: 1,
         price: 3000,
         units: 15,
         discount: 10, 
         createdAt: new Date
      },
      {
         name: "Diamond Fire",
         materialId: 1,
         sizeId:1,
         description: "Anillo de de Plata con Zirconia redonda y Zorconitas en sus laterales Diamonfire. Caracteristicas: 1 piedra Diamonfire 6,5 mm. 14 piedras de Diamonfire, 1,5 mm. Total ca. 1,21 ct. Altura 6,6 mm, banda anular 1,68 mm Ancho 6,5 mm. Profundidad 6,5 mm, banda de anillo 1,9 mm. Talle - 6: DiamonFire 16 mm de diámetro. Talle - 7: DiamonFire 17 mm de diámetro. Talle - 8: DiamonFire 18 mm de diámetro. Talle - 9: DiamonFire 19 mm de diámetro. 925 plata esterlina. Diamonfire zirconia grabada con láser, revestimiento Premium de tres capas, Certificado individual, la garantía cubre el diamante",
         categoryId: 1,
         price: 3500,
         units: 23,
         discount: 20, 
         createdAt: new Date
      },
      {
         
         name: "Diva's Dream",
         materialId: 1,
         sizeId: 4,
         description: "Inspirado en la elegancia femenina y el encantador atractivo de la Ciudad Eterna, el collar DIVAS'DREAM rinde homenaje a las divas más glamurosas con un estilo inconfundiblemente romano. Quintaesencia de la feminidad y la delicadeza, el collar está esculpido de un modo que captura la magnificencia del mármol de las Termas de Caracalla y las curvas sensuales de sus mosaicos en forma de abanico, reflejando la verdadera esencia de la belleza italiana. Collar DIVAS' DREAM en oro amarillo de 18 qt con colgante con un diamante y madreperla engarzados",
         categoryId: 2,
         price: 2800,
         units: 12,
         discount: 30, 
         createdAt: new Date
      },
      {
      
         name: "Fiorever Collar",
         materialId: 1,
         sizeId: 2,
         description: "Floreciendo entre las maravillas de la Ciudad Eterna, Fiorever se inspira en la belleza de la flor de cuatro pétalos venerada por los romanos como símbolo de felicidad y alegría. En una combinación de elegancia natural y espontaneidad desenfadada, el singular collar con colgante de flor brilla delicadamente con la exquisitez de su diseño calado, aportando un toque de resplandor y feminidad elegante a la vida cotidiana.Collar Fiorever en oro blanco de 18 qt con un diamante talla brillante (0,10 qt) y pavé de diamantes (0,06 qt).",
         categoryId: 2,
         price: 3800,
         units: 14,
         discount: 10, 
         createdAt: new Date
      },
      {
        
         name: "Cuadrado Brillantes",
         materialId: 2,
         sizeId: 3,
         description: "Este delicado Collar Círculo y Cuadrado Brillantes es un clásico moderno que aguantará el paso del tiempo. Acabado a mano en plata de primera ley, el collar incluye un colgante embellecido con brillantes circonitas cúbicas con dos tallas y tamaños distintos: una gema redonda sobre una gema cuadrada, que se sujetan a la cadena con puntas largas. La longitud del collar es ajustable, lo que convierte esta versátil joya en el toque final ideal para cualquier outfit",
         categoryId: 2,
         price: 2100,
         units: 12,
         discount: 0, 
         createdAt: new Date
      },
      {
         
         name: "Estrella Plata Collar",
         materialId: 1,
         sizeId:5,
         description: "Crea un estilo estelar con el Collar en plata de ley Estrella Asimétrica en Pavé. Acabado a mano en plata de primera ley y decorado con circonitas cúbicas, se trata de un diseño sutil de formas delicadas con detalles exclusivos. El collar se ha embellecido con el colgante de una estrella brillante asimétrica con una gema y una mini estrella giratoria en el centro. Inspirado en las brillantes estrellas, este collar de temática celestial es perfecto para cualquiera que desee llevar en su look la magia del cielo nocturno",
         categoryId: 2,
         price: 2200,
         units: 15,
         discount: 0, 
         createdAt: new Date
      },
   
      {
        
         name: "Fiorever Pulsera",
         materialId: 1,
         sizeId: 1,
         description: "Floreciendo entre las maravillas de la Ciudad Eterna, Fiorever se inspira en la belleza de la flor de cuatro pétalos venerada por los romanos como símbolo de felicidad y alegría. Fiorever combina dos palabras cargadas de sentido: fiore, \"flor\" en italiano, y forever, \"siempre\" en inglés, para celebrar el amor de Roma por la vida con un diseño sorprendente y apasionado. Diseñado para brillar con luminosidad eterna, el precioso icono floral de Bvlgari está elaborado con un diamante central rodeado por cuatro pétalos de diamante que se inclinan hacia delante, un guiño a la predilección de la firma por los volúmenes sensuales. Pulsera Fiorever en oro blanco de 18 qt con dos diamantes centrales y pavé de diamantes",
         categoryId: 3,
         price: 2500,
         units: 18,
         discount: 0, 
         createdAt: new Date
      },
      {
        
         name: "Brisa Azul Pulsera",
         materialId: 2,
         sizeId: 2,
         description: "Sube de nivel tu look tu pulsera Brisa Azul. Acabado a mano en plata esterlina, este diseño está inspirado en una pieza del archivo de Aphrodite. Con barras rígidas decoradas con piedras transparentes más pequeñas colocadas entre las azules más grandes, este brazalete incluye un cierre de mosquetón con una etiqueta colgante de piedra al final. De tamaño ajustable, contrarresta los tonos fríos de este brazalete con piezas terminadas a mano en Recubrimiento en Oro Rosa de 14k (mezcla única con baño de oro rosa de 14k)",
         categoryId: 3,
         price: 1800,
         units: 22,
         discount: 10, 
         createdAt: new Date
      },
      {

         name: "Estrella Brillante Pulsera",
         materialId: 2,
         sizeId:1,
         description: "Lleva el brillo celestial a tu look con pulsera Estrella Brillante. Acabada a mano en plata de primera ley, el cierre con forma de estrella está cubierto de brillantes circonitas cúbicas transparentes por ambos lados. Se puede embellecer con hasta 16-18 charms y clips. Llévala sola para crear un look sencillo y sutil o combínala con otros diseños de inspiración celestial si lo que quieres es look de otro mundo",
         categoryId: 3,
         price: 1200,
         units: 12,
         discount: 10, 
         createdAt: new Date
      },
      {
      
         name: "Eterno Lazo",
         materialId: 1,
         sizeId: 4,
         description: "Fina pulsera de oro 18ql cubierta de brillantes de primera calidad, en forma de lazos eternos    entrecruzados que mezclan categoría y finesa. Por su forma de cadena eslabonada es posible ajustar su tamaño con finos agregados extras",
         categoryId: 3,
         price: 2800,
         units: 9,
         discount: 0, 
         createdAt: new Date
      },
      {
         
         name: "Diva's Dream Aros",
         materialId: 1,
         sizeId: 4,
         description: "Inspirados en la elegancia femenina y el encantador atractivo de la Ciudad Eterna, los pendientes DIVAS' DREAM rinden homenaje a las divas más glamurosas con un estilo inconfundiblemente romano. Quintaesencia de la feminidad y la delicadeza, los pendientes están esculpidos para capturar la majestuosidad de los mármoles de las Termas de Caracalla y las curvas sensuales de sus mosaicos en forma de abanico, reflejando la verdadera esencia de la belleza italiana. Pendientes DIVAS' DREAM en oro rosa con madreperla y pavé de diamantes",
         categoryId: 5,
         price: 2500,
         units: 12,
         discount: 0, 
         createdAt: new Date
      },
      {
       
         name: "Fiorever Aros",
         materialId: 1,
         sizeId: 3,
         description: "Floreciendo entre las maravillas de la Ciudad Eterna, Fiorever se inspira en la belleza de la flor de cuatro pétalos venerada desde siempre por los romanos como símbolo de felicidad y alegría. Fiorever combina dos palabras cargadas de sentido: fiore, \"flor\" en italiano, y forever, \"siempre\" en inglés, para celebrar el amor de Roma por la vida con un diseño sorprendente y apasionado. Diseñados para brillar con luminosidad eterna, estos modernos pendientes ostentan una deslumbrante flor en oro blanco y diamante que corona las preciosas tiras colgantes. Pendientes Fiorever en oro blanco de 18 qt con dos diamantes y pavé de diamantes",
         categoryId: 5,
         price: 3200,
         units: 15,
         discount: 0, 
         createdAt: new Date
      },
      {
        
         name: "Halo Corazón Aros",
         materialId: 1,
         sizeId: 2,
         description: "Un regalo de amor para una mamá elegante, los aretes de aro Corazón con halo resplandeciente tienen una circonia cúbica colgante rosa en forma de corazón rodeada por un halo de pavé. El pavé en el aro está acentuado con una circonia cúbica redonda. Combínalo con el collar o anillo a juego para causar un impacto lleno de color adecuado para toda ocasión",
         categoryId: 5,
         price: 2100,
         units: 14,
         discount: 0, 
         createdAt: new Date
      },
      {
     
         name: "Ninfa de Oro Aros",
         materialId: 1,
         sizeId: 1,
         description: "Aros elaborados en Oro rosa 18k con siete piedras Cubic Swarovski transparentes: tres Navette de 4mm x 2mm y cuatro redondas talla brillante de 1.5mm. Una pieza inspirada en las formas más oníricas de la naturaleza",
         categoryId: 5,
         price: 3100,
         units: 12,
         discount: 0, 
         createdAt: new Date
      },
      {
        
         name: "Tu Brillo Aros",
         materialId: 1,
         sizeId: 2,
         description: "Delicados aros de Oro Blanco en 18ql con contorno de diamantes y cierre cerrado. ¡Ideales para tus fiestas más sofisticadas!",
         categoryId: 5,
         price: 3100,
         units: 24,
         discount: 0, 
         createdAt: new Date
      },
      {
         
         name: "Reloj Diva's Dream",
         materialId: 1,
         sizeId: 4,
         description: "Esta nueva edición del reloj DIVAS' DREAM FINISSIMA, creada en 2018 para homenajear el centenario de la extraordinaria maestría relojera y joyera de Bvlgari, reinterpreta los cautivadores mosaicos en forma de abanico de las Termas romanas de Caracalla en una brillante esfera de diamantes. Este reloj, el repetidor de minutos de mujer más fino del mundo, cuenta con un calibre fabricado en los talleres de Bvlgari que ha batido récords, el repetidor de minutos más fino del mercado, además de un pequeño y precioso secreto: el charm con la emblemática forma de abanico del lateral sirve para activar el carrillón. Una obra maestra de ensueño que fusiona la inspiración romana, el arte de la joyería y el saber hacer relojero en una pieza inimitable.Reloj DIVAS' DREAM Finissima Mosaica con movimiento mecánico de manufactura extrafino con repetición de minutos, 2 martillos (carga manual), calibre BVL 362. Caja de 37 mm en oro blanco de 18 ct con engaste integral en pavé efecto nieve y diamantes talla baguette, corona en oro blanco de 18 ct con un zafiro talla cabujón engastado, esfera con diamantes talla baguette y talla brillante engastados, pequeño segundero descentrado con diamantes engastados, agujas azules, fondo transparente, correa en piel de aligátor azul y cierre desplegable en oro blanco de 18 ct con diamantes engarzados",
         categoryId: 4,
         price: 6500,
         units: 4,
         discount: 0, 
         createdAt: new Date
      },
      {
   
         name: "Reloj Serpenti",
         materialId: 1,
         sizeId: 2,
         description: "El reloj Serpenti Tubogas da una vuelta en oro rosa de 18 qt y acero inoxidable, que fusiona dos de los emblemas más icónicos del diseño de Bulgari, aúna la sinuosidad de la serpiente con el espíritu contemporáneo del diseño Tubogas. Elaborado con una ligereza flexible y tubular, el reloj evoca tanto el poder seductor de la serpiente como la forma fluida de su cuerpo enroscado, fusionando el glamour irresistible y el diseño joyero distintivo. Reloj Serpenti Tubogas con movimiento de cuarzo, caja de 35 mm en acero inoxidable, bisel en oro rosa de 18 qt, corona en oro rosa de 18 qt con cabujón de rubelita rosa engastado, esfera blanca opalescente con grabado guilloché soleil, brazalete de una vuelta en oro rosa de 18 qt y acero inoxidable. Hermético hasta 30 metros.",
         categoryId: 4,
         price: 5200,
         units: 6,
         discount: 0, 
         createdAt: new Date
      },
      {
         
         name: "Reloj Serpenti Seductori",
         materialId: 1,
         sizeId: 3,
         description: "El reloj Serpenti Seduttori, diseñado para deslumbrar, hace del tiempo un bien aún más preciado. Este reloj, que reinterpreta el incuestionable icono de seducción de Bvlgari con un diseño sin precedentes, luce la icónica cabeza de reloj en forma de gota, más fina que nunca, y un brazalete de gran sensualidad y flexibilidad con un motivo hexagonal inspirado en las escamas. Estética seductora y un guiño al glamour de la joyería: el reloj lanza un nuevo hechizo de seducción al mundo de la serpiente. Reloj Serpenti Seduttori con movimiento de cuarzo. Caja de 33 mm en oro blanco de 18 qt, bisel en oro blanco de 18 qt con diamantes engastados, corona en oro blanco de 18 qt con cabujón en zafiro engastado, esfera plateada opalescente blanca, brazalete en oro blanco de 18 qt y cierre desplegable",
         categoryId: 4,
         price: 5100,
         units: 6,
         discount: 0, 
         createdAt: new Date
      },
      {
       
         name: "Reloj LVCEA",
         materialId: 1,
         sizeId: 1,
         description: "LVCEA ilumina el tiempo y aporta glamour a la vida diaria y a cualquier estilo: se trata de un reloj concebido para la mujer. Elegante y poética, esta exclusiva interpretación presenta un look en venturina azul con un brillo especial que evoca un cielo estrellado romano. Un reloj joya de ensueño inspirado en la belleza atemporal de la Ciudad Eterna, con su inquebrantable simetría y pureza de líneas, reinterpretado a través de un diseño contemporáneo, audaz y riguroso. Reloj LVCEA con movimiento mecánico de carga mecánica, caja de 33 mm en oro rosa de 18 qt pulida (10,07 mm de grosor) con diamantes redondos talla brillante engastados, corona en oro rosa de 18 qt con un zafiro azul talla cabujón y un diamante engastados, esfera en venturina azul. Correa en piel de aligátor azul con eslabones en oro rosa de 18 qt engastados con diamantes y hebilla de pasador en oro rosa de 18 qt. Hermético hasta 50 metros.",
         categoryId: 4,
         price: 5200,
         units: 6,
         discount: 0, 
         createdAt: new Date
      },
      {
        
         name: "Reloj Crystal Flower",
         materialId: 1,
         sizeId: 3,
         description: "Este reloj de Swarovski exhibe una brillante integración de formas naturales en un diseño moderno. De inspiración floral, el bisel incorpora dos hileras entrelazadas de revestimiento de PVD en tono oro rosa, una de ellas adornada con resplandecientes cristales. Enmarcada por estas brillantes líneas se encuentra una esfera iridiscente plateada adornada con marcadores de índice de cristal y con el logotipo de Swarovski a las 12 en punto. Las líneas de la pulsera con revestimiento de PVD en tono oro rosa, que fluyen con delicadeza, son una prolongación del atractivo floral del bisel y añaden un toque delicado a este reloj con denominación Swiss Made. Añade elegancia a tu estilo con este reloj floral que aporta un romanticismo extraordinario a tu día a día",
         categoryId: 4,
         price: 4200,
         units: 9,
         discount: 10, 
         createdAt: new Date
     
      },
    
   ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
