'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [
      {

         name: "daiana",
         surname: "ramirez",
         email: "daichu@gmail.com",
         password: "$2a$10$lW05BE4kTnp6kbsJWjmBV.iSTgG/XlN7VOsHD6ufdJbx3hVKdAA52",
         dob: "2022-06-29",
         country: "br",
         gender: "femenino",
         image: "noimage.png",
         rol: "admin",
         createdAt: new Date
      },
      {
       
         name: "Paula",
         surname: "Burgos",
         email: "pauli@gmail.com",
         password: "$2a$10$GiPJClmKAsP0zTXsnPgMhuDwUGVxhPtcxFiRPKHkGlIRCRzg7IVf2",
         dob: "2022-06-14",
         country: "ar",
         gender: "femenino",
         image: "noimage.png",
         rol: "admin",
         createdAt: new Date
      },
      {
       
         name: "Dayanna",
         surname: "Ramírez vallejos",
         email: "Casafamiliass2877@gmail.com",
         password: "$2a$10$lEX6EWfAfx4yVX5X40Vrku1RXnRVNreEVETnVY7AoFO.FnOq9UJ2a",
         dob: "2022-06-06",
         country: "ar",
         gender: "masculino",
         image: "noimage.png",
         rol: "guest",
         createdAt: new Date
      },
      {
        
         name: "Dayanna",
         surname: "Ramírez vallejos",
         email: "maria@gmail.com",
         password: "$2a$10$yiMf8J31vuAypM4cRYUEKeREdiDsuMrp.UpMrtCRlepshB3TrnkWa",
         dob: "2022-06-17",
        country: "ar",
         gender: "femenino",
         image: "noimage.png",
         rol: "guest",
         createdAt: new Date
      },
      {
      
         name: "Dayanna",
         surname: "Ramírez vallejos",
         email: "day@gmail.com",
         password: "$2a$10$iZfjTaXIUd3cuUbEZEM0OOA7MAUjuJ/zvdjNYBjl/abkkkCBJWRfy",
         dob: "2022-06-21",
         country: "br",
         gender: "femenino",
         image: "noimage.png",
         rol: "admin",
         createdAt: new Date
      },
      {
         
         name: "Dayanna",
         surname: "Ramírez vallejos",
         email: "Casafamilia2877@gmail.com",
         password: "$2a$10$0Oi6k123UP7dv7BB/QAdIewx.rwS68JT2iODON5XdmTVP0m.rGp86",
         dob: "2022-06-13",
         country: "ar",
         gender: "femenino",
         image: "noimage.png",
         rol: "guest",
         createdAt: new Date
      },
    
      {
     
         name: "Dayanna",
         surname: "Ramírez vallejos",
         email: "user@gmail.com",
         password: "$2a$10$fkBA1K.KIfE5hn3ZLDeCpu1xd8caXR7G05paNyn4duCU3dqc6bmn2",
         dob: "2022-06-05",
         country: "mx",
         gender: "femenino",
         image: "noimage.png",
         rol: "guest",
         createdAt: new Date
      },
      {
   
         name: "maria",
         surname: "masdsad",
         email: "Casa4@gmail.com",
         password: "$2a$10$NVYeKyiVgtGZTOj29RsdHOKEb/ULyfzh6lWmJdm.SCLY1G0ycumB.",
         dob: "2022-06-05",
         country: "br",
         gender: "masculino",
         image: "image-1654651886012.jpeg",
         rol: "guest",
         createdAt: new Date
      },
      {
     
         name: "dara",
         surname: "ramirezv",
         email: "Casa5@gmail.com",
         password: "$2a$10$MSdB3syBsyzVnav7/uvr2uHgcSy5vU.OXDkDVRH8DRmlQYmxYc3eO",
         dob: "2022-06-08",
         country: "uy",
         gender: "femenino",
         image: "image-1654654799310.jpg",
         rol: "admin",
         createdAt: new Date
      },
      {
      
         name: "Daniela",
         surname: "Orbes",
         email: "danielaorbes73@gmail.com",
         password: "$2a$10$wm1eXd8IjyyOXOLmmXg04eZRskOFKC.58UIRg6egm3VUfoiFJFk8G",
         dob: "2022-06-08",
         country: "uy",
         gender: "nodice",
         image: "noimage.png",
         rol: "guest",
         createdAt: new Date
      }], {});
    
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
