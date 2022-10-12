"use strict"; 

const section = document.querySelector('section'),
		overlay = document.querySelector('.overlay'),
		showModal = document.querySelector('.show-modal'),
		closeBtn = document.querySelector('.close-btn');

		showModal.addEventListener('click', ()=> section.classList.add('active'));
		overlay.addEventListener('click', ()=> section.classList.remove('active'));

		closeBtn.addEventListener('click', ()=> section.classList.remove('active'));