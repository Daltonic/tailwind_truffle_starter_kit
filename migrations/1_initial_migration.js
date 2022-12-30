// truffle blockchaine uygulamayı entegre edebilmek için bu dosyayı kullanır
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
