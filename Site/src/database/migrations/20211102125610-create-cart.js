'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        allowNull: false,
=======
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
        references: {
          model: {
            tableName : 'Users'
          },
          key : 'id'
        }
      },
      orderId: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        allowNull: false,
=======
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
        references : {
          model : {
            tableName: 'Orders'
          },
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        allowNull: false,
=======
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
        references: {
          model: {
            tableName: 'Products'
          },
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carts');
  }
};