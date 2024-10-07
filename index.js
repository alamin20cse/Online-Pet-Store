

/*
{
    "petId": 2,
    "breed": "Siamese",
    "category": "Cat",
    "date_of_birth": "2022-09-05",
    "price": 800,
    "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
    "gender": "Female",
    "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
    "vaccinated_status": "Fully",
    "pet_name": "Mia"
}


*/
const allpet = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then(data => displayallpet(data.categories)) 
        .catch(error => console.log(error));
}
allpet();


/*

{
    "id": 1,
    "category": "Cat",
    "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
}

*/



const displayallpet = (data) => {
    const buttoncontainar = document.getElementById('button-section');
   
    data.forEach(element => {
        console.log(element);
        
        // Create the button
        const button = document.createElement('button');
        button.classList = 'btn py-10  flex flex-col justify-center items-center gap-2 rounded-[120px] border-2 border-solid'; // 
        button.id = `btn-${element.category}`;

        
        button.innerHTML = `
            <img src="${element.category_icon}" alt="${element.category}" class="icon-class mb-2 ">
            ${element.category}
        `;

        // Append the button to the container
        buttoncontainar.append(button);
    });
}

