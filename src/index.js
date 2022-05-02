import {navbar} from '../components/navbar'
console.log(navbar);

import '../styles/navbar.css';

let navbar_div = document.getElementById('navbar')
navbar_div.innerHTML = navbar();