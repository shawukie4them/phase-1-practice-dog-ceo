document.addEventListener('DOMContentLoaded', function(){
     fetchDogImages();
     fetchDogBreeds();
});

function fetchDogImages(){
    var imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
     fetch(imgUrl)
     .then(function(response){
        return response.json();
    })
    .then(function(data){
        renderImages(data.message);
    });
}

function renderImages(images){
    var container = document.getElementById('dog-image-container');
    images.forEach(function(imageUrl){
        var img = document.createElement('img');
        img.src = imageUrl;
        container.appendChild(img);
    });
}

function fetchDogBreeds(){
    var breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        renderBreeds(Object.keys(data.message));
    });
}

function renderBreeds(breeds){
    var ul = document.getElementById('dog-breeds');
    ul.innerHTML = '';
    breeds.forEach(function(breed){
        var li = document.createElement('li');
        li.textContent = breed;
        li.addEventListener('click', function(){
            li.style.color = 'blue'; 
        });
        ul.appendChild(li);
    });
}

document.getElementById('breed-dropdown').addEventListener('change', function(event){
    var selectedLetter = event.target.value;
    var allBreeds = document.querySelectorAll('#dog-breeds li');
    allBreeds.forEach(function(li){
        if(li.textContent.startsWith(selectedLetter)){
            li.style.display = '';
        }else{
            li.style.display = 'none';
        }
    });
});
