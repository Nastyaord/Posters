class Images {
    constructor() {
        this.imagesMass = [];
        this.receiveImages();
        this.addEventListeners();
    }

    receiveImages() {
        let images = document.getElementsByClassName('images');
        for (let i = 0; i < images.length; i++){
            let pathImagesAll = images[i].getAttribute('src');
            this.imagesMass.push(pathImagesAll);
        }
    };

    addEventListeners(){
        $('.wrapImages img').on('click', this.createModalCarousel.bind(this));
        $('#btnMenu').on('click', this.toogleMenu.bind(this));
        $('#btnCancel').on('click', this.toogleMenu.bind(this));
    };

    createModalCarousel(e) {
        let pathImage = $(e.target).attr('src');
        let index = this.imagesMass.indexOf(pathImage);
        $('.active img').attr('src', pathImage);

        for (let i = index + 1; i < this.imagesMass.length; i++) {
            this.appendImage(i);
        }

        for (let i = 0; i < index; i++) {
            this.appendImage(i);
        }

        $('#myModal').modal();
    }

    appendImage(index){
        $( "<div class='carousel-item all'>" +
            `<img class = 'd-block w-100 img-fluid' src=${this.imagesMass[index]}>` +
            "</div>" ).appendTo(".carousel-inner");
    }

    toogleMenu(){
        $("#menu").toggleClass("open");

    }
};


$( document ).ready(function() {
    let images = new Images();
});



