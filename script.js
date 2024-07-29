const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
document.getElementById('read-more-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('skills-content').classList.toggle('expanded');
});