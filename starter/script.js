'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////////////////////
//Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });
//1.Add event listener to common parent element
//2.Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//section--2---
//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //stop click outside of tab
  //Guard clause
  console.log(clicked);
  if (!clicked) return;
  //active tab
  tabs.forEach(ele => {
    ele.classList.remove('opearations__tab--active');
  });
  clicked.classList.add('opearations__tab--active');

  //Active content area
  document
    .querySelector(`operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////
//////////////////////////////
/*
//Selecting elements
//1.direct using document
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

//querySelector
const header = document.querySelector('.header');
const allselections = document.querySelectorAll('.section'); //provides nodelist
console.log(allselections);

//byId(tagName)
console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //provides the html list and not node

//By className
console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//.insertAdjacentHtml

//using CreateElement
const message = document.createElement('div');
// message.classList.add('cookie-message');
message.textContent =
  'we use cookies for improving functionality and analaytics';
message.innerHTML =
  'we use cookies for improving functionality and analaytics.  <button class="btn btn--close-cookie">Got it</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

//outside of header
// header.before(message)
header.after(message);

//delete the element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //also delete child element as well
    message.parentElement.removeChild(message);
  });

//Styles(inline style)
message.style.backgroundColor = '#37383d';
message.style.color = 'white';
message.style.display = 'flex';
message.style.alignItems = 'center';
message.style.justifyContent = 'space-evenly';
message.style.width = '110%';
message.style.fontSize = '1.5rem';
message.style.fontWeight = '400';

//
console.log(message.style.height);
console.log(message.style.width);
console.log(message.style.backgroundColor);

//
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).fontSize);

//
// console.log(typeof getComputedStyle(message).height);
//to parse number from string we use parseInt or parseFloat method
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(getComputedStyle(message).height);

//
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
//access
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//alter them
logo.alt = 'beautiful minimalist logo';
console.log(logo.alt);

//NonStandard attribute
//access them
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

//alter them
//define them
logo.setAttribute('company', 'bankist');

//
console.log(logo.src);
console.log(logo.getAttribute('src'));

//href works as same as src
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const show = document.querySelector('.btn--show-modal');
console.log(show.href);
console.log(show.getAttribute('href'));

//Data
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c,d,e');
logo.classList.remove('c,d');
logo.classList.toggle('e');
logo.classList.contains('e');

//dont use(it overrides all existing classes)
logo.className = 'yogesh';

//Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
    );
  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavi
    or: 'smooth' });
});

//Type of events and events handlers
//events is a signal generate by dom node to perform a task

//
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener:Great You are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};
//(newer ways)++-
h1.addEventListener('mouseenter', alertH1);

//another way(older ways)
// h1.onmouseenter = function (e) {
  //   alert('addEventListener:Great You are reading the heading :D');
  // };
  
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//what i have done today is about the javascript and its DOM manipulation
//how to select elements,how 

//Selecting element
//1.
console.log(document);
console.log(document.head);
console.log(document.body);
//2.querySelector
console.log(document.querySelector('.header'));
console.log(document.querySelectorAll('section'));
//
const header = document.querySelector('.header');
//3.
//only one element
const section1 = document.getElementById('section--1');
console.log(section1);
//all elements
const allBtn = document.getElementsByTagName('button');
console.log(allBtn);
const sectionAll = document.getElementsByClassName('section');
console.log(sectionAll);

//insert element
let newDiv = document.createElement('div');
newDiv.innerHTML = '<p>Hello</p>';
header.insertAdjacentElement('afterbegin', newDiv);
//remove element using dom
newDiv.remove();
// newDiv.removeChild();

//CreateElement work
const newList = document.createElement('ul');
newList.innerHTML = '<li>ThankYou For scrolling</li>';
newList.classList.add('list');
section1.insertAdjacentElement('afterbegin', newList);

//remove
const list = document.getElementsByClassName('list');
console.log(list);
// newList.parentElement.removeChild();

//Styling
newList.style.textAlign = 'center';
newList.style.textDecoration = 'none';
newList.style.listStyle = 'none';
newList.style.fontSize = '20px';
newList.style.textEmphasis = '10px';
newList.style.marginTop = '-100px';
newList.style.padding = '0px';
newList.style.color = 'var(--color-primary)';

//how to retrieve styles of an html element
console.log(newList.style.color);
console.log(getComputedStyle(newList).color);

//
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const nav = document.querySelector('.nav__logo');
console.log(nav.src);
console.log(nav.alt);
console.log(nav.id);
console.log(nav.className); //not only class
console.log(nav.designer);
// console.log(nav.data - version - number);

//Play with classes
// console.log(newList)
newList.classList.add('a');
newList.classList.add('b');
newList.classList.remove('b');
newList.classList.toggle('c'); //add
console.log(newList.classList.contains('a'));

//another way
newList.className = 'overrideAllOtherClassesDontUseIt';

//Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //finding a section or an element x(left) and y(top) position from the screen viewport
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //it  does the same
  console.log(e.target.getBoundingClientRect());

  //tells x and y position of scrolled of viewport
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //it tells height and width of viewport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//rgb(255,255,255)
const randomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
`rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

//Event propogation
document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  //stop propogation(not good idea)
  // e.stopPropagation();
});
//
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  e.preventDefault();
  console.log('container', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});
//
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    e.preventDefault();
    console.log('nav', e.target, e.currentTarget);
    // console.log(e.currentTarget === this);
  },
  false
  );
  */

//EVENT DELEGATION:IMPLEMENTING PAGE NAVIGATION
