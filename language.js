// переключение языка ==================================================
let langs = document.querySelector(".header__langs"),
  link = document.querySelectorAll(".header__lang"),
  book = document.querySelector(".header__button"),
  menuProducts = document.querySelector("#menu__products"),
  menuPrice = document.querySelector("#menu__price"),
  menuContact = document.querySelector("#menu__contact"),
  //======================================================================
  mainDate = document.querySelector(".main__date"),
  titleP = document.querySelector(".title__p"),
  titleOrange = document.querySelector(".title__orange"),
  mainText = document.querySelector(".main__text"),
  //================================================================================
  cutTop = document.querySelector(".cut__top");
let cutSpan1 = document.querySelector(".cut__span_1");
let cutSpan2 = document.querySelector(".cut__span_2");
let cutp1 = document.querySelector(".cut__p_1");
//================================================================================
let shavingTop = document.querySelector(".shaving__top");
let shavingSpan1 = document.querySelector(".shaving__span_1");
let shavingSpan2 = document.querySelector(".shaving__span_2");
let shavingp1 = document.querySelector(".shaving__p_1");
let shavingp2 = document.querySelector(".shaving__p_2");
let popupLink = document.querySelector(".shaving__link-popup");
//================================================================================
let careTop = document.querySelector(".care__top");
let careSpan1 = document.querySelector(".care__span_1");
let careSpan2 = document.querySelector(".care__span_2");
let carep1 = document.querySelector(".care__p_1");
//================================================================================
let productsButton = document.querySelector(".products__button");
//================================================================================
let slide1Title = document.querySelector(".slide1__title");
let slide1item1 = document.querySelector(".slide1__item1");
let slide1item2 = document.querySelector(".slide1__item2");
let slide1item3 = document.querySelector(".slide1__item3");
let slide1item4 = document.querySelector(".slide1__item4");
let slide1item5 = document.querySelector(".slide1__item5");
//================================================================================
let slide2Title = document.querySelector(".slide2__title");
let slide2item1 = document.querySelector(".slide2__item1");
let slide2item2 = document.querySelector(".slide2__item2");
let slide2item3 = document.querySelector(".slide2__item3");
//================================================================================
let slide3Title = document.querySelector(".slide3__title");
let slide3item1 = document.querySelector(".slide3__item1");
let slide3item2 = document.querySelector(".slide3__item2");
let slide3item3 = document.querySelector(".slide3__item3");
let slide3item4 = document.querySelector(".slide3__item4");
let slide3item5 = document.querySelector(".slide3__item5");
let slide3item6 = document.querySelector(".slide3__item6");
//================================================================================
let slide4Title = document.querySelector(".slide4__title");
let slide4item1 = document.querySelector(".slide4__item1");
let slide4item2 = document.querySelector(".slide4__item2");
let slide4item3 = document.querySelector(".slide4__item3");
let slide4item4 = document.querySelector(".slide4__item4");
let slide4item5 = document.querySelector(".slide4__item5");
let slide4item6 = document.querySelector(".slide4__item6");
let slide4item7 = document.querySelector(".slide4__item7");
let slide4item8 = document.querySelector(".slide4__item8");
//================================================================================
let slide5Title = document.querySelector(".slide5__title");
let slide5item1 = document.querySelector(".slide5__item1");
let slide5item2 = document.querySelector(".slide5__item2");
let slide5item3 = document.querySelector(".slide5__item3");
//================================================================================
let slide6Title = document.querySelector(".slide6__title");
let slide6item1 = document.querySelector(".slide6__item1");
let slide6item2 = document.querySelector(".slide6__item2");
let slide6item3 = document.querySelector(".slide6__item3");
let slide6item4 = document.querySelector(".slide6__item4");
//================================================================================
let slide7Title = document.querySelector(".slide7__title");
let slide7item1 = document.querySelector(".slide7__item1");
let slide7item2 = document.querySelector(".slide7__item2");
let slide7item3 = document.querySelector(".slide7__item3");
let slide7item4 = document.querySelector(".slide7__item4");
let slide7item5 = document.querySelector(".slide7__item5");
let slide7item6 = document.querySelector(".slide7__item6");
//================================================================================
let slide8Title = document.querySelector(".slide8__title");
let slide8item1 = document.querySelector(".slide8__item1");
let slide8item2 = document.querySelector(".slide8__item2");
let slide8item3 = document.querySelector(".slide8__item3");
let slide8item4 = document.querySelector(".slide8__item4");
//================================================================================
let slide9Title = document.querySelector(".slide9__title");
let slide9item1 = document.querySelector(".slide9__item1");
let slide9item2 = document.querySelector(".slide9__item2");
//================================================================================
let slide10Title = document.querySelector(".slide10__title");
let slide10item1 = document.querySelector(".slide10__item1");
let slide10item2 = document.querySelector(".slide10__item2");
let slide10item3 = document.querySelector(".slide10__item3");
//====================================================

let contactTop = document.querySelector(".contact__top");
let contactTitle = document.querySelector(".contact__title");

link.forEach((el) => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language");

    book.textContent = data[attr].book;
    menuProducts.textContent = data[attr].menuProducts;
    menuPrice.textContent = data[attr].menuPrice;
    menuContact.textContent = data[attr].menuContact;
    //================================================================================
    mainDate.textContent = data[attr].mainDate;
    titleP.textContent = data[attr].titleP;
    titleOrange.textContent = data[attr].titleOrange;
    mainText.textContent = data[attr].mainText;
    //================================================================================
    cutTop.textContent = data[attr].cutTop;
    cutSpan1.textContent = data[attr].cutSpan1;
    cutSpan2.textContent = data[attr].cutSpan2;
    cutp1.textContent = data[attr].cutp1;
    //================================================================================
    shavingTop.textContent = data[attr].shavingTop;
    shavingSpan1.textContent = data[attr].shavingSpan1;
    shavingSpan2.textContent = data[attr].shavingSpan2;
    shavingp1.textContent = data[attr].shavingp1;
    shavingp2.textContent = data[attr].shavingp2;
    popupLink.textContent = data[attr].popupLink;
    //================================================================================
    careTop.textContent = data[attr].careTop;
    careSpan1.textContent = data[attr].careSpan1;
    careSpan2.textContent = data[attr].careSpan2;
    carep1.textContent = data[attr].carep1;
    //================================================================================
    productsButton.textContent = data[attr].productsButton;
    //================================================================================
    slide1Title.textContent = data[attr].slide1Title;
    slide1item1.textContent = data[attr].slide1item1;
    slide1item2.textContent = data[attr].slide1item2;
    slide1item3.textContent = data[attr].slide1item3;
    slide1item4.textContent = data[attr].slide1item4;
    slide1item5.textContent = data[attr].slide1item5;
    //================================================================================
    slide2Title.textContent = data[attr].slide2Title;
    slide2item1.textContent = data[attr].slide2item1;
    slide2item2.textContent = data[attr].slide2item2;
    slide2item3.textContent = data[attr].slide2item3;
    //================================================================================
    slide3Title.textContent = data[attr].slide3Title;
    slide3item1.textContent = data[attr].slide3item1;
    slide3item2.textContent = data[attr].slide3item2;
    slide3item3.textContent = data[attr].slide3item3;
    slide3item4.textContent = data[attr].slide3item4;
    slide3item5.textContent = data[attr].slide3item5;
    slide3item6.textContent = data[attr].slide3item6;
    //================================================================================
    slide4Title.textContent = data[attr].slide4Title;
    slide4item1.textContent = data[attr].slide4item1;
    slide4item2.textContent = data[attr].slide4item2;
    slide4item3.textContent = data[attr].slide4item3;
    slide4item4.textContent = data[attr].slide4item4;
    slide4item5.textContent = data[attr].slide4item5;
    slide4item6.textContent = data[attr].slide4item6;
    slide4item7.textContent = data[attr].slide4item7;
    slide4item8.textContent = data[attr].slide4item8;
    //====================================================================
    slide5Title.textContent = data[attr].slide5Title;
    slide5item1.textContent = data[attr].slide5item1;
    slide5item2.textContent = data[attr].slide5item2;
    slide5item3.textContent = data[attr].slide5item3;
    //====================================================================
    slide6Title.textContent = data[attr].slide6Title;
    slide6item1.textContent = data[attr].slide6item1;
    slide6item2.textContent = data[attr].slide6item2;
    slide6item3.textContent = data[attr].slide6item3;
    slide6item4.textContent = data[attr].slide6item4;
    //====================================================================
    slide7Title.textContent = data[attr].slide7Title;
    slide7item1.textContent = data[attr].slide7item1;
    slide7item2.textContent = data[attr].slide7item2;
    slide7item3.textContent = data[attr].slide7item3;
    slide7item4.textContent = data[attr].slide7item4;
    slide7item5.textContent = data[attr].slide7item5;
    slide7item6.textContent = data[attr].slide7item6;
    //====================================================================
    slide8Title.textContent = data[attr].slide8Title;
    slide8item1.textContent = data[attr].slide8item1;
    slide8item2.textContent = data[attr].slide8item2;
    slide8item3.textContent = data[attr].slide8item3;
    slide8item4.textContent = data[attr].slide8item4;
    //====================================================================
    slide9Title.textContent = data[attr].slide9Title;
    slide9item1.textContent = data[attr].slide9item1;
    slide9item2.textContent = data[attr].slide9item2;
    //====================================================================
    slide10Title.textContent = data[attr].slide10Title;
    slide10item1.textContent = data[attr].slide10item1;
    slide10item2.textContent = data[attr].slide10item2;
    slide10item3.textContent = data[attr].slide10item3;
    //====================================================================
    contactTop.textContent = data[attr].contactTop;
    contactTitle.textContent = data[attr].contactTitle;
    //====================================================================
  });
});

let data = {
  slovenian: {
    book: "naročite se",
    menuProducts: "izdelki",
    menuPrice: "cenik",
    menuContact: "kontakti",
    //================================================================================
    mainDate: "Delamo od 2020",
    titleP: "moŠki prostor za ",
    titleOrange: "lepoto",
    mainText: "Kjer je moška brutalnost in individualnost na prvem mestu.",
    //==============================================================================
    cutTop: "striženje",
    cutSpan1: "izbor ",
    cutSpan2: "frizur",
    cutp1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.",
    //================================================================================
    shavingTop: "britje",
    shavingSpan1: "kaj delamo z ",
    shavingSpan2: "brado",
    shavingp1: "Vikingova brada - gosta in lepa!",
    shavingp2:
      "Za brado imamo dva načina urejanja: navadno urejanje z mašincami, britvicami in škarjami in kraljevo britje na turški način!",
    popupLink: "Več o tem...",
    //================================================================================
    careTop: "nega",
    careSpan1: "izdelki",
    careSpan2: " za nego",
    carep1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,porttitor rhoncus dolor purus non.",
    //================================================================================
    productsButton: "Prikaži več",
    //================================================================================
    slide1Title: "Mašinca + Škarje + Styling",
    slide1item1: "Klasično ali moderno moško striženje.",
    slide1item2: "Striženje “Fade”.",
    slide1item3: "Feniranje las.",
    slide1item4: "Styling z visoko-kakovostno kozmetiko.",
    slide1item5: "Nasveti za oblikovanje frizure doma.",
    //================================================================================
    slide2Title: "Striženje z mašinco: bascut",
    slide2item1: "Moderno moško striženje.",
    slide2item2: "Striženje “Fade”.",
    slide2item3: "Oblikovanje linij obraza.",
    //================================================================================
    slide3Title: "Kombo: Striženje + Urejanje brade + Styling",
    slide3item1: "Klasično ali moderno striženje.",
    slide3item2: "Striženje “Fade”.",
    slide3item3: "Urejanje brade.",
    slide3item4: "Vključuje Feniranje las in brade.",
    slide3item5: "Styling z visoko-kakovostno kozmetiko.",
    slide3item6: "Nasveti za oblikovanje frizure in brade doma.",
    //================================================================================
    slide4Title:
      "👑Kombo Premium: Striženje + Urejanje brade po turško + Styling",
    slide4item1: "Klasično ali moderno striženje.",
    slide4item2: "Striženje “Fade”.",
    slide4item3: 'Royal/Turkish shaving with a "danger razor".',
    slide4item4: "Face massage.",
    slide4item5: "Styling with high-quality cosmetics.",
    slide4item6: "Vključuje Feniranje las in brade.",
    slide4item7: "Styling z visoko-kakovostno kozmetiko.",
    slide4item8: "Nasveti za oblikovanje frizure in brade doma.",
    //================================================================================
    slide5Title: "Urejanje Brade + Styling",
    slide5item1: "Urejanje brade.",
    slide5item2: "Feniranje brade.",
    slide5item3: "Styling z visoko-kakovostno kozmetiko.",
    //================================================================================
    slide6Title: "Barvanje brade",
    slide6item1: "Sprememba pigmenta brade",
    slide6item2: "Barvanje sivih dlak.",
    slide6item3: "Poudarek pigmenta brade.",
    slide6item4:
      "Pri delu se uporablja visoko-kakovostni materjal in kozmetika.",
    //================================================================================
    slide7Title: "Urejanje brade + Barvanje brade",
    slide7item1: "Urejanje brade.",
    slide7item2: "Feniranje brade.",
    slide7item3: "Styling z visoko-kakovostno kozmetiko.",
    slide7item4: "Sprememba pigmenta brade",
    slide7item5: "Barvanje sivih dlak.",
    slide7item6: "Poudarek pigmenta brade.",

    //================================================================================

    slide8Title: "Vroče britje po turško",
    slide8item1:
      "Britje brade na gladko nulo z britvico z uporabo vročih brisač.",
    slide8item2: "Masiranje obraza z uporabo električnih masažerjev.",
    slide8item3: "Mehčanje kože s pomočjo naprave, ki izpušča vročo paro.",
    slide8item4:
      "Temu sledi krema za obraz, ki pomiri kožo in kolonska, da kožo razkuži.",
    //================================================================================
    slide9Title: "Hladno Britje",
    slide9item1:
      "Britje brade na gladko nulo z električnim brivnikom z uporabo praha.",
    slide9item2:
      "Temu sledi krema za obraz, ki pomiri kožo in kolonska, da kožo razkuži.",
    //================================================================================
    slide10Title: "Odstranjevanje dlak z voskom",
    slide10item1: "Odstranjevanje dlak na ušesih.",
    slide10item2: "Odstranjevanje dlak v nosu.",
    slide10item3: "Odstranjevanje dlak med obrvi.",
    //================================================================================
    contactTop: "naši kontakti",
    contactTitle: "Kje se nahajamo",

    //================================================================================
  },
  english: {
    book: "book now",
    menuProducts: "products",
    menuPrice: "prices",
    menuContact: "contacts",
    //================================================================================
    mainDate: "Since 2020",
    titleP: "the men's place of ",
    titleOrange: "beauty",
    mainText: "Where male brutality and individuality come first.",
    //================================================================================
    cutTop: "haircuts",
    cutSpan1: "wide range of ",
    cutSpan2: "haircuts",
    cutp1: "TRANSLATE",
    //================================================================================
    shavingSpan1: "real men's ",
    shavingSpan2: "beard",
    shavingp1: "Viking's beard - thick and beautiful!",
    shavingp2:
      "For the beard, we have two methods of trimming: regular trimming with trimmers, razors and scissors and royal shaving in the Turkish way!",
    popupLink: "Read more...",
    //================================================================================
    careTop: "Care",
    careSpan1: "care",
    careSpan2: " products",
    carep1: "TRANSLATE",
    //================================================================================
    productsButton: "Show more",
    //================================================================================
    slide1Title: "Clipper + Scissors + Styling",
    slide1item1: "Classic or modern men's haircut.",
    slide1item2: '"Fade" haircut.',
    slide1item3: "Hair drying.",
    slide1item4: "Styling with high-quality cosmetics.",
    slide1item5: "Tips for styling your hair at home.",
    //================================================================================
    slide2Title: "Bascut haircut",
    slide2item1: "Modern men's haircut.",
    slide2item2: '"Fade" haircut.',
    slide2item3: "Shaping face lines.",
    //================================================================================
    slide3Title: "Combo: Haircut + Beard Treatment + Styling",
    slide3item1: "Classir or modern haircut",
    slide3item2: '"Fade" haircut.',
    slide3item3: "Beard treatment.",
    slide3item4: "Hair & beard blow dry.",
    slide3item5: "Styling with high-quality cosmetics.",
    slide3item6: "Tips for styling your hair at home.",
    //================================================================================
    slide4Title: "Combo Premium: Haircut + Royal/Turkish shaving + Styling",
    slide4item1: "Classir or modern haircut",
    slide4item2: '"Fade" haircut.',
    slide4item3: "Beard treatment.",
    slide4item4: 'Royal/Turkish shaving with a "danger razor".',
    slide4item5: "Face massage.",
    slide4item6: "Hair & beard blow dry.",
    slide4item7: "Styling with high-quality cosmetics.",
    slide4item8: "Tips for styling your hair at home.",
    //================================================================================
    slide5Title: "Beard Treatment + Styling",
    slide5item1: "Beard treatment.",
    slide5item2: "Beard blow dry.",
    slide5item3: "Styling with high-quality cosmetics.",
    //================================================================================
    slide6Title: "Beard coloring",
    slide6item1: "Changing beard pigment",
    slide6item2: "Coloring gray hair.",
    slide6item3: "Beard pigment accent.",
    slide6item4: "High-quality materials and cosmetics are used in the work.",
    //==================================================================
    slide7Title: "Combo: Beard coloring + Beard Treatment + Styling",
    slide7item1: "Beard treatment.",
    slide7item2: "Beard blow dry.",
    slide7item3: "Styling with high-quality cosmetics.",
    slide7item4: "Changing beard pigment",
    slide7item5: "Coloring gray hair.",
    slide7item6: "Beard pigment accent.",
    //==================================================================
    slide8Title: "Turkish Hot Shaving",
    slide8item1:
      "Shaving your beard to a smooth finish with a razor using hot towels.",
    slide8item2: "Massaging the face using electric massagers.",
    slide8item3: "Skin softening using a device that emits hot steam.",
    slide8item4:
      "This is followed by a face cream to soothe the skin and a cologne to disinfect the skin.",
    //==================================================================
    slide9Title: "Cold Shaving",
    slide9item1:
      "Shaving your beard to a smooth finish with an electric shaver using powder.",
    slide9item2:
      "This is followed by a face cream to soothe the skin and a cologne to disinfect the skin.",
    //==================================================================

    slide10Title: "Waxing hair removal",
    slide10item1: "Removing ear hair.",
    slide10item2: "Nose hair removal.",
    slide10item3: "Hair removal between the eyebrows.",
    //================================================================
    contactTop: "our contacts",
    contactTitle: "Where we are",
    //================================================================
  },
};
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  changeLanguage(savedLanguage);
}
