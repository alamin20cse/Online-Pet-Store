const allpet = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then(data => displayallpet(data.categories))
        .catch(error => console.log(error));
};
allpet();

const displayallpet = (data) => {
    const buttonContainar = document.getElementById('button-section');
   
    data.forEach(element => {
        const button = document.createElement('button');
        button.classList = 'btn py-10 flex flex-col justify-center items-center gap-2 rounded-[120px] border-2 border-solid';
        button.id = `btn-${element.category}`;

        button.innerHTML = `
            <img src="${element.category_icon}" alt="${element.category}" class="icon-class mb-2 ">
            ${element.category}
        `;

        button.onclick = () => fourCatagory(element.category); 
       
        buttonContainar.append(button);
    });
};

const fourCatagory = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then((res) => res.json())
        .then(data => displayfourcatagory(data.data)) 
        .catch(error => console.log(error));
};

const displayfourcatagory = (pets) => {
    const videoContainar = document.getElementById('three-card');
    videoContainar.innerHTML = ''; 
    
    if (pets.length === 0) {
        const messageContainer = document.createElement('div');
        messageContainer.classList = "flex flex-col items-center justify-center h-full";
        
      
        messageContainer.innerHTML = `
            <p class="text-[20px] font-bold">OPSSS BIRD IS NOT HERE</p>
            <img src="images/error.webp" alt="No Birds" class="mt-4 h-[250px] w-auto">
        `;
        messageContainer.classList="justify-center";
        
        videoContainar.append(messageContainer);
        return; 
    }

    pets.forEach(element => {
        const cardContainar = document.createElement('div');

        cardContainar.innerHTML = `
            <div class="border border-red-300 rounded-2xl">
                <figure class="p-2">
                    <img class="w-full h-auto object-cover rounded-2xl" src="${element.image}" />
                </figure>
                <div class="card-body">
                    <h2 class="text-[20px] font-bold">${element.pet_name ? element.pet_name : "Not available"}</h2>
                    <p><i class="fa-solid fa-table-cells-large"></i> Breed: ${element.breed ? element.breed : "Not available"}</p>
                    <p><i class="fa-solid fa-cake-candles"></i> Birth: ${element.date_of_birth ? element.date_of_birth : "Not available"}</p>
                    <p><i class="fa-solid fa-mercury"></i> Gender: ${element.gender ? element.gender : "Not available"}</p>
                    <p><i class="fa-solid fa-dollar-sign"></i> Price: ${element.price ? element.price : "Not available"}\$</p>
                    <div class="flex justify-between"> 
                        <button onclick="lilkadd('${element.image}')" class="btn px-1 border border-red-300">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button onclick="adpofunction()" class="btn px-1 border border-red-300">Adopt</button>
                        <button onclick="modaladd('${element.petId}')" class="btn px-1 border border-red-300">Details</button>
                    </div>
                </div>
            </div>
        `;

        videoContainar.append(cardContainar);
    });
};

const allcatagory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then(data => displayallcatagory(data.pets)) 
        .catch(error => console.log(error));
};
allcatagory();

const displayallcatagory = (data) => {
    const videoContainar = document.getElementById('three-card');

    data.forEach(element => {
        const cardContainar = document.createElement('div');

        cardContainar.innerHTML = `
            <div class="border border-red-300 rounded-2xl">
                <figure class="p-2">
                    <img class="w-full h-auto object-cover rounded-2xl" src="${element.image}" />
                </figure>
                <div class="card-body">
                    <h2 class="text-[20px] font-bold">${element.pet_name ? element.pet_name : "Not available"}</h2>
                    <p><i class="fa-solid fa-table-cells-large"></i> Breed: ${element.breed ? element.breed : "Not available"}</p>
                    <p><i class="fa-solid fa-cake-candles"></i> Birth: ${element.date_of_birth ? element.date_of_birth : "Not available"}</p>
                    <p><i class="fa-solid fa-mercury"></i> Gender: ${element.gender ? element.gender : "Not available"}</p>
                    <p><i class="fa-solid fa-dollar-sign"></i> Price: ${element.price ? element.price : "Not available"}\$</p>
                    <div class="flex justify-between"> 
                        <button onclick="lilkadd('${element.image}')" class="btn px-1 border border-red-300">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button onclick="adpofunction()" class="btn px-1 border border-red-300">Adopt</button>
                        <button onclick="modaladd('${element.petId}')" class="btn px-1 border border-red-300">Details</button>
                    </div>
                </div>
            </div>
        `;
        videoContainar.append(cardContainar);
    });
};

const lilkadd = (pto) => {
    const photoDiv = document.getElementById('photo-id');
  
    const img = document.createElement('img');
    img.src = pto; 
    img.classList = "h-[100px] my-2";
   
    photoDiv.appendChild(img);
};

// Details
const modaladd = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then((res) => res.json())
        .then(data => displaymodal(data.petData)) 
        .catch(error => console.log(error));
};

const displaymodal = (petData) => {
    const modal = document.getElementById('my_modal_1');
    modal.innerHTML = '';

    const modalContent = `
        <div class="modal-box">
            <img class="mx-auto h-[250px] w-full" src="${petData.image}" alt="${petData.pet_name}">
            <h3 class="text-[18px] font-bold py-3">${petData.pet_name}</h3>
            <div class="flex gap-4 justify-between">
                <div>
                    <p class="text-[10px]"><i class="fa-solid fa-table-cells-large"></i> Breed: ${petData.breed ? petData.breed : "Not available"}</p>
                    <p class="text-[10px]"><i class="fa-solid fa-mercury"></i> Gender: ${petData.gender ? petData.gender : "Not available"}</p>
                    <p class="text-[10px]"><i class="fa-solid fa-mercury"></i> Vaccinated: ${petData.vaccinated_status ? petData.vaccinated_status : "Not available"}</p>
                </div>
                <div>
                    <p class="text-[10px]"><i class="fa-solid fa-cake-candles"></i> Birth: ${petData.date_of_birth ? petData.date_of_birth : "Not available"}</p>
                    <p class="text-[10px]"><i class="fa-solid fa-dollar-sign"></i> Price: ${petData.price ? petData.price : "Not available"}\$</p>
                </div>
            </div>
            <h1 class="font-bold text-[18px]">Details information</h1>
            <p class="text-[10px]">${petData.pet_details ? petData.pet_details : "Not available"}</p>
            <div class="flex justify-center">
                <form method="dialog">
                    <button id="continue-button" class="btn">Cancel</button>
                </form>
            </div>
        </div>
    `;

    modal.innerHTML = modalContent;

   
    modal.showModal();
};
