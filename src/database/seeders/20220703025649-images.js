'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Images', [{
        name: "Fiorever1.jpeg",
        primary: true,
        productId: 1,
        createdAt: new Date
      },
      {
        name: "Fiorever2.jpeg",
        primary: false,
        productId: 1,
        createdAt: new Date
      },
      {
        name: "Fiorever3.jpeg",
        primary: false,
        productId: 1,
        createdAt: new Date
      },
      {
        name: "Sunshine1.jpeg",
        primary: true,
        productId: 2,
        createdAt: new Date
      },
      {
        name: "Sunshine2.jpeg",
        primary: false,
        productId: 2,
        createdAt: new Date
      },
      {
        name: "noimage.png",
        primary: false,
        productId: 2,
        createdAt: new Date
      },
      {
        name: "DiamondFire1.jpeg",
        primary: true,
        productId: 3,
        createdAt: new Date
      },
      {
        name: "DiamondFire2.jpeg",
        primary: false,
        productId: 3,
        createdAt: new Date
      },
      {
        name: "DiamondFire3.jpeg",
        primary: false,
        productId: 3,
        createdAt: new Date
      },
  
      {
        name: "DivasDreamCollar1.jpeg",
        primary: true,
        productId: 4,
        createdAt: new Date
      },
      {
        name: "DivasDreamCollar2.jpeg",
        primary: false,
        productId: 4,
        createdAt: new Date
      },
      {
        name: "DivasDreamCollar3.jpeg",
        primary: false,
        productId: 4,
        createdAt: new Date
      },
  
      {
        name: "FioreverCollar1.jpeg",
        primary: true,
        productId: 5,
        createdAt: new Date
      },
      {
        name: "FioreverCollar2.jpeg",
        primary: false,
        productId: 5,
        createdAt: new Date
      },
      {
        name: "FioreverCollar3.jpeg",
        primary: false,
        productId: 5,
        createdAt: new Date
      },
  
      {
        name:  "CirculoCuadradoCollar1.jpeg",
        primary: true,
        productId: 6,
        createdAt: new Date
      },
      {
        name:  "CirculoCuadradoCollar2.jpeg",
        primary: false,
        productId: 6,
        createdAt: new Date
      },
      {
        name:  "CirculoCuadradoCollar3.jpeg",
        primary: false,
        productId: 6,
        createdAt: new Date
      },
  
      {
        name:  "EstrellaPlataCollar1.jpeg",
        primary: true,
        productId: 7,
        createdAt: new Date
      },
      {
        name:  "EstrellaPlataCollar2.jpeg",
        primary: false,
        productId: 7,
        createdAt: new Date
      },
      {
        name: "EstrellaPlataCollar3.jpeg",
        primary: false,
        productId: 7,
        createdAt: new Date
      },
      {
        name: "FioreverPulsera1.jpeg",
        primary: true,
        productId: 8,
        createdAt: new Date
      },
      {
        name:  "FioreverPulsera2.jpeg",
        primary: false,
        productId: 8,
        createdAt: new Date
      },
      {
        name: "FioreverPulsera3.jpeg",
        primary: false,
        productId: 8,
        createdAt: new Date
      },
      {
        name: "PulseraBrisaAzul1.jpeg",
        primary: true,
        productId: 9,
        createdAt: new Date
      },
      {
        name:  "PulseraBrisaAzul2.jpeg",
        primary: false,
        productId: 9,
        createdAt: new Date
      },
      {
        name: "PulseraBrisaAzul3.jpeg",
        primary: false,
        productId: 9,
        createdAt: new Date
      }
      ,
      {
        name: "EstrellaBrillante1.jpeg",
        primary: true,
        productId: 10,
        createdAt: new Date
      },
      {
        name:  "EstrellaBrillante2.jpeg",
        primary: false,
        productId: 10,
        createdAt: new Date
      },
      {
        name: "EstrellaBrillante3.jpeg",
        primary: false,
        productId: 10,
        createdAt: new Date
      }
      ,
      {
        name: "EternoLazo1.jpeg",
        primary: true,
        productId: 11,
        createdAt: new Date
      },
      {
        name:  "EternoLazo2.jpeg",
        primary: false,
        productId: 11,
        createdAt: new Date
      },
      {
        name: "EternoLazo3.jpeg",
        primary: false,
        productId: 11,
        createdAt: new Date
      }
      ,
      {
        name: "DivasDreamAros1.jpeg",
        primary: true,
        productId: 12,
        createdAt: new Date
      },
      {
        name:  "DivasDreamAros2.jpeg",
        primary: false,
        productId: 12,
        createdAt: new Date
      },
      {
        name: "DivasDreamAros3.jpeg",
        primary: false,
        productId: 12,
        createdAt: new Date
      }
      ,
      {
        name: "FioreverAros1.jpeg",
        primary: true,
        productId: 13,
        createdAt: new Date
      },
      {
        name:  "FioreverAros2.jpeg",
        primary: false,
        productId: 13,
        createdAt: new Date
      },
      {
        name: "FioreverAros3.jpeg",
        primary: false,
        productId: 13,
        createdAt: new Date
      }
      ,
      {
        name:  "HaloCorazon1.jpeg",
        primary: true,
        productId: 14,
        createdAt: new Date
      },
      {
        name:   "HaloCorazon2.jpeg",
        primary: false,
        productId: 14,
        createdAt: new Date
      },
      {
        name:  "HaloCorazon3.jpeg",
        primary: false,
        productId: 14,
        createdAt: new Date
      }
      ,
      {
        name: "NinfadeOro1.jpeg",
        primary: true,
        productId: 15,
        createdAt: new Date
      },
      {
        name:  "NinfadeOro2.jpeg",
        primary: false,
        productId: 15,
        createdAt: new Date
      },
      {
        name:  "NinfadeOro3.jpeg",
        primary: false,
        productId: 15,
        createdAt: new Date
      }
      ,
      {
        name:"ArosTuBrillo1.jpeg",
        primary: true,
        productId: 16,
        createdAt: new Date
      },
      {
        name:  "ArosTuBrillo2.jpeg",
        primary: false,
        productId: 16,
        createdAt: new Date
      },
      {
        name:  "ArosTuBrillo3.jpeg",
        primary: false,
        productId: 16,
        createdAt: new Date
      },
      {
        name:"DivasDreamReloj1.jpeg",
        primary: true,
        productId: 17,
        createdAt: new Date
      },
      {
        name:"DivasDreamReloj2.jpeg",
        primary: false,
        productId: 17,
        createdAt: new Date
      },
      {
        name: "DivasDreamReloj3.jpeg",
        primary: false,
        productId: 17,
        createdAt: new Date
      }
      ,
      {
        name:"SerpentiSeductori1.jpeg",
        primary: true,
        productId: 18,
        createdAt: new Date
      },
      {
        name:"SerpentiSeductori2.jpeg",
        primary: false,
        productId: 18,
        createdAt: new Date
      },
      {
        name:"SerpentiSeductori3.jpeg",
        primary: false,
        productId: 18,
        createdAt: new Date
      }
      ,
      {
        name: "LuceaReloj1.jpeg",
        primary: true,
        productId: 19,
        createdAt: new Date
      },
      {
        name: "LuceaReloj2.jpeg",
        primary: false,
        productId: 19,
        createdAt: new Date
      },
      {
        name: "LuceaReloj3.jpeg",
        primary: false,
        productId: 19,
        createdAt: new Date
      }
      ,
      {
        name: "CrystalFlower1.jpeg",
        primary: true,
        productId: 20,
        createdAt: new Date
      },
      {
        name: "CrystalFlower2.jpeg",
        primary: false,
        productId: 20,
        createdAt: new Date
      },
      {
        name: "CrystalFlower3.jpeg",
        primary: false,
        productId: 20,
        createdAt: new Date
      }


    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};