const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Apollo", (m) => {
    const apollo = m.contract("priceFeedContract", [["0xe7656e23fE8077D438aEfbec2fAbDf2D8e070C4f", "0x1896522f28bF5912dbA483AC38D7eE4c920fDB6E", "0xF0d50568e3A7e8259E16663972b11910F89BD8e7", "0xa73B1C149CB4a0bf27e36dE347CBcfbe88F65DB2", "0x408D97c89c141e60872C0835e18Dd1E670CD8781", "0xc2e2848e28B9fE430Ab44F55a8437a33802a219C"]]);
    m.call(apollo, "getPrices", []);

    return { apollo };
});