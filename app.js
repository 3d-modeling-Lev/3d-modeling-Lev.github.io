class Lightbox{
    constructor(){
     this.init()
    }
  
    init(){
     this.container = document.createElement('div');
     this.container.id = 'lightbox';
     document.body.appendChild(this.container);
  
     this.lightboxImg = document.createElement('img');
     this.container.appendChild(this.lightboxImg);
  
     this.h2text = document.createElement('h2');
     this.h2text.innerHTML = 'Ebobaniy';
     this.container.appendChild(this.h2text);

    //  this.h3text = document.createElement('h3');
    //  this.h3text.innerHTML = 'kozel';
    //  this.container.appendChild(this.h3text);

     this.addListeners();
    }
  
    addListeners(){
     const images = document.querySelectorAll('.grid_one img');
     images.forEach(img => {
      img.addEventListener('click', ()=> this.galleryImgClicked(img))
     })
  
    this.container.addEventListener('click', ()=>{
      this.hideLightbox()
     })
  
     document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') this.hideLightbox()
     })
    }
  
    hideLightbox(){
     this.container.classList.remove('active')
    }
  
    galleryImgClicked = (img) => {
      this.lightboxImg.src = img.src;
      this.container.classList.add('active')
    }
  }
  
  const lightbox = new Lightbox()