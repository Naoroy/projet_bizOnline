/**@namespace */
const gestionStock = (function() {
    var stock = [];
    var inputName, inputPrice, inputDescription;
    window.onload = function init() {
        getProductInfo();
        document.querySelector("button").onclick = createProduct;
    };
    /**
     * @author Bernard Salah
     * @constructor
     * @alias gestionStock.Produits
     * @param {string} nom
     * @param {number} prix
     * @param {string} description
     */
    const Produits = function(nom, prix, description) {
        this.nom = nom;
        this.prix = prix;
        this.description = description;
    };

    /**
     * @author Fégan PIERRE
     * @alias gestionStock.createProduct
     * @description Crée un nouveau produits avec les valeurs (input)
     */
    const createProduct = function () {
        let newProduct = new Produits(inputName, inputPrice, inputDescription);
        stock.push(newProduct);
        console.log(stock);
    };
    /**
     *@description Récupère les valeurs (input)
     @alias gestionStock.getProductInfo
    */
    const getProductInfo = function () {
        inputName = document.querySelector("input#my_name").value;
        inputPrice = document.querySelector("input#my_price").value;
        inputDescription = document.querySelector("input#my_description").value;
    };
}());