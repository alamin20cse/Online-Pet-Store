





const allpet=()=>
{

    
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then(data=>console.log(data.pets))
    // .then(data=>displaycatagoriy(data.categories))
    .catch(error=>console.log(error));

}
allpet();



