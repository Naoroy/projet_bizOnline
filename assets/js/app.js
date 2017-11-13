/**@namespace */
const gestionStock = (function () {
    "use strict";
    var inputName, inputPrice, inputDescription, list;
    var stock = [];
    /**
     * @author Bernard Salah
     * @constructor
     * @description crée un nouveau produit
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
        var newProduct = new Produits(inputName.value, inputPrice.value, inputDescription.value);
        stock.push(newProduct);
        console.log(stock);
        const displayInDOM = function () {
            let i;
            list.innerHTML = "";
            for (i = 0; i < stock.length; i += 1) {
                list.innerHTML += "<li>" + stock[i].nom + "\/" + stock[i].prix + "\/" + stock[i].description + "</li>";
            }
        };
        displayInDOM();
        inputName.value = "";
        inputPrice.value = "";
        inputDescription.value = "";
    };
    /**
     @alias gestionStock.getProductInfo
     *@description Récupère les valeurs (input)
    */
    const getProductInfo = function () {
        inputName = document.querySelector("input#my_name");
        inputPrice = document.querySelector("input#my_price");
        inputDescription = document.querySelector("input#my_description");
        list = document.querySelector("ul");
    };
    window.onload = function init() {
        getProductInfo();
        document.querySelector("button").onclick = createProduct;
    };
}());