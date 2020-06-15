let bigimg = {
    photo: "../Images/img1.jpg",
    title: 'Moby Dick',
    description: 'Huge whale jumps out of the water near reefs as lonely girl watches'
  };



let img2 = {
      photo: "../Images/img2.jpg",
      title: "Rebirth",
      description: "Tree comes to life in the middle of a huge field full of chopped tree trunks. Water flows through the field as creator of life."
  };

let img3 = {
    photo: "../Images/img3.jpg",
    title: "Great Discovery",
    description: "Man climbs to peak of ridge just to realize the hardest part is still undone. The breathtaking view challenges the pioneer to venture further as birds show how life can bloom in places like this."
};

let img4 = {
    photo: "../Images/img4.jpg",
    title: "Unexpected enemy",
    description: "Darth Vader faces swarms of Xenomorphs in unknown location but shows no fear as he is the Chosen One. The alien bodies reflect the shining of the red lightsaber."
};

let img5 = {
    photo: "../Images/img5.jpg",
    title: "Lone soldier",
    description: "Soldier in full armor stand in front of massive legion, pointing with his sword as huge stone faces staring on battlefield."
};

let img6 = {
    photo: "../Images/img6.jpg",
    title: "Forlorn rail",
    description: "Lone railroad shows the way in snow covered landscape as pinkish trees embrace the path. Clouds moving in the sky predicting darker times."
};

let img7 = {
    photo: "../Images/img7.jpg",
    title: "Aurora borealis",
    description: "Survivor stand on crashed ark with flares in hand. She is admiring the Northern Lights as they run over the sky showing unforgettable views."
};

let img8 = {
    photo: "../Images/img8.jpg",
    title: "The End",
    description: "Fire burns through the field destroying everything in its path. Lone tree is still standing but soon to be deleted from the face of the Earth. Nothing can survive."
};

let currentPhoto = 0;
let imagesData = [ bigimg , img2 , img3 , img4 , img5 , img6 , img7 , img8 ];


$('#first').attr('src', imagesData[currentPhoto].photo);
document.getElementById('title').innerHTML = imagesData[currentPhoto].title;
document.getElementById('desc').innerHTML = imagesData[currentPhoto].description; 


let loadPhoto = (photoNumber) => {
    $('#first').attr('src', imagesData[photoNumber].photo);
    document.getElementById('title').innerHTML = imagesData[currentPhoto].title;
    document.getElementById('desc').innerHTML = imagesData[currentPhoto].description; 
  }
  
  loadPhoto(currentPhoto);
  
  $('.right-a').click(() => {
    currentPhoto++;
    loadPhoto(currentPhoto);
  })

  $('.left-a').click(() => {
    currentPhoto--;
    loadPhoto(currentPhoto);
  })

imagesData.forEach((item) => {
  $('#thumb').append("<img class='thumbnails' src='../Images/img8.jpg'>");
 
});

   