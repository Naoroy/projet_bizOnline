
/**
 * @author Bernard Salah
 * @param {string} nom
 * @param {number} prix
 * @param {string} description
 */
const produits = function(nom, prix, description){
  this.nom = nom;
  this.prix = prix;
  this.description = description;
}

/**
 * @author Fégan PIERRE
 * @param {string} nom
 * @param {number} prix
 * @param {string} description
 * @returns {object} stock
 */
const createProduct = function (nom, prix, description) {
    let newProduct = new produits(nom, prix, description);
    stock.push(newProduct);
    console.log(stock);
    return stock;
}
