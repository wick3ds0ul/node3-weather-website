// import {
//     response
// } from "express";
const weatherform = document.querySelector('form');
const search = document.querySelector('input');
let m1 = document.querySelector('.m1')
m1.textContent = '';
let m2 = document.querySelector('.m2')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault();
    m1.textContent = 'Loading...'
    m2.textContent = '';

    const location = search.value;
    console.log('Client Side JS Loaded');
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error);
                m1.textContent = 'Loading...';
            } else {
                // console.log(data.loacation);
                // console.log(data.message);
                m1.textContent = `${data.loacation}`;
                m2.textContent = `${data.message}`
            }
        });
    });
});