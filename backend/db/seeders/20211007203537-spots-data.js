'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Spots', [
        {
          location: "outdoors",
          category: "hidden-gems",
          imageUrl: 'https://i.ibb.co/FstjPSn/abandoned-hospital-bed.jpg'
        },
        {
          location: "outdoors",
          category: "hidden-gems",
          imageUrl: 'https://i.ibb.co/vq2pYCf/bbb-three.jpg'
        },
        {
          location: "outdoors",
          category: "scenic",
          imageUrl: 'https://i.ibb.co/VpSZFvv/dirty-seaside-mattress.jpg'
        },
        {
          location: "indoors",
          category: "abondoned",
          imageUrl: 'https://i.ibb.co/cNhtkk7/green-park-bench.jpg'
        },
        {
          location: "outdoors",
          category: "convenience",
          imageUrl: 'https://i.ibb.co/d02Y5qC/ikea-mattresses-1.jpg'
        },
        {
          location: "outdoors",
          category: "convenience",
          imageUrl: 'https://i.ibb.co/2cXxbjr/outdoor-nice-hanging-bed.jpg'
        },
        {
          location: "outdoors",
          category: "convenience",
          imageUrl: "https://i.ibb.co/drGrXPP/outdoor-park-bench.png"
        },
        {
          location: "outdoors",
          category: "convenience",
          imageUrl: 'https://i.ibb.co/J7DqxbY/outdoor-path-mattress.jpg'
        },
        {
          location: "outdoors",
          category: "convenience",
          imageUrl: "https://i.ibb.co/0YJfvpQ/A-mattress-and-couch-placed-outside-by-the-curb-on-garbage-day.jpg"
        },

        {
          location: "indoors",
          category: "cozy",
          imageUrl: 'https://i.ibb.co/BGDHgnf/nice-day-bed-indoor.jpg'
        },
        {
          location: "outdoors",
          category: "cozy",
          imageUrl: 'https://i.ibb.co/7J5b9LF/nice-outdoor-day-bed.png'
        },
        {
          location: "indoors",
          category: "cozy",
          imageUrl: 'https://i.ibb.co/02YqgBC/nice-indoor-bed.png'
        },
        {
          location: "outdoors",
          category: "cozy",
          imageUrl: "https://i.ibb.co/L5jKHJn/day-bed-couch-nice.jpg"
        },
        {
          location: "outdoors",
          category: "scenic",
          imageUrl: 'https://i.ibb.co/DY8d4bg/lakeside-hammock.jpg'
        },
        {
          location: "outdoors",
          category: "scenic",
          imageUrl: "https://i.ibb.co/XZvgtbg/outdoor-hammock.jpg"
        },
        {
          location: "outdoors",
          category: "scenic",
          imageUrl: "https://i.ibb.co/2hPP4Zh/seaside-hammock.jpg"
        },

      ], {});



  },

  down: async (queryInterface, Sequelize) => {

      return await queryInterface.bulkDelete('Spots');

  }
};
