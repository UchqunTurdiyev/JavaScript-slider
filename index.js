"use strict"; 
 window.addEventListener('DOMContentLoaded', () =>{
     const slider = document.querySelector('.slider'),
     active = document.querySelector('#active'),
     line1 = document.querySelector('#line1'),
     line2 = document.querySelector('#line2'),
     line3 = document.querySelector('#line3'),
     line4 = document.querySelector('#line4'),
     container = document.querySelector('.container');

     line1.addEventListener('click', function () {
         slider.style.display = 'none';
     })
 })