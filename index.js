




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
        // console.log(element);
        
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

// ==========================


/*
{
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
}

*/
const allcatagory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then(data => displayallcatagory(data.pets)) 
        .catch(error => console.log(error));
}
allcatagory();
const displayallcatagory=(data)=>{
    // console.log(data);
    const videoContainar=document.getElementById('three-card');

    data.forEach(element=>{
        // console.log(element);
        const cardContainar=document.createElement('div');

        cardContainar.innerHTML=`
        <div class="">
  <figure class="h-[200px]">
    <img class="w-full h-full object-cover"
      src=${element.image} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `;
        videoContainar.append(cardContainar);

    });


};