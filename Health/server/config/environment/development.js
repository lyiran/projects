'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    // uri: 'sqlite://',
    uri: 'mysql://walker:hiwangchi@localhost:3306/health',
    options: {
      logging: false,
      // storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  // Seed database on startup
  seedDB: true

};
