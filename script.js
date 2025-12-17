let urlChocolat = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json";

const hero = document.getElementsByClassName("section-hero");
const why = document.getElementsByClassName("section-why");
const collection = document.getElementsByClassName("section-collection");
const services = document.getElementsByClassName("section-services");


fetch (urlChocolat)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        

        let divHero = document.createElement("div");
        divHero.classList.add("div-hero");

        let titleSectionHero = document.createElement("h1");
        titleSectionHero.classList.add("title-section-hero");
        titleSectionHero.textContent = data.nomEntreprise;

        let paraSectionHero = document.createElement("p");
        paraSectionHero.classList.add("para-section-hero");
        paraSectionHero.textContent = data.slogan;

        let 




        data.produits.forEach(produit => {
            
        });
    })
    .catch(error => console.error("ntm sa marsh pa: ", error));


