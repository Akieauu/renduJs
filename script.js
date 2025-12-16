let urlChocolat = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json";


fetch (urlChocolat)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        

        data.produits.forEach(produit => {
            
        });
    })
    .catch(error => console.error("ntm sa marsh pa: ", error));



const hero = document.getElementsByClassName("section-hero");
const why = document.getElementsByClassName("section-why");
const collection = document.getElementsByClassName("section-collection");
const services = document.getElementsByClassName("section-services");