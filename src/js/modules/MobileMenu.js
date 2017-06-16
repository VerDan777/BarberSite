import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.mainMenu = $('.main-menu');
        this.menuIcon = $('.main-nav__menu-icon');
        this.Logo = $('.main-nav__logo--logo');
        this.menuLinks = $('.main-menu__list a');
        this.menuBlock =  $('.main-nav__block');
        this.events();
    }

    events() {
        this.menuIcon.click(
            this.toggleTheMenu.bind(this)
           
            
        );
        // this.menuIcon.click(
        //     this.menuBlock.hide()
        // );
    

        this.menuLinks.click(
            this.toggleTheMenu.bind(this)
        );

        this.menuLinks.on('tap', 
            this.toggleTheMenu.bind(this)
        );

        // this.menuIcon.click(
        //     this.menuBlock.hide()
        // )
        
        
    }
   

    toggleTheMenu() {
        this.mainMenu.toggleClass('main-menu--shown');
        this.Logo.toggleClass('main-nav__logo--logo--shown');
        this.menuIcon.toggleClass('main-nav__menu-icon--close-x');
       
        
    }
    // hide() {
    //     this.menuBlock.hide('.main-nav__block');
    // }
}

export default MobileMenu;