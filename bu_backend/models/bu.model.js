module.exports = (sequelize, Sequelize) => {
  const BU = sequelize.define("bu", {
    hash: {
      type: Sequelize.STRING
    },
    secao: {
      type: Sequelize.STRING
    },
    zona: {
      type: Sequelize.STRING
    },
    UF: {
      type: Sequelize.STRING
    }
  });
  return BU;
};