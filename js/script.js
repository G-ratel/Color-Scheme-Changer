let button = document.querySelectorAll('button');
let body = document.querySelector('body');

console.log(button);

button.forEach(function(button){
    button.addEventListener('click', function(circle){
        console.log(circle.target);
        if (circle.target.id === 'green'){
            body.style.backgroundColor = circle.target.id;
        }
        if (circle.target.id === 'purple'){
            body.style.backgroundColor = circle.target.id;
        }
        if (circle.target.id === 'orange'){
            body.style.backgroundColor = circle.target.id;
        }
        if (circle.target.id === 'red'){
            body.style.backgroundColor = circle.target.id;
        }
        if (circle.target.id === 'blue'){
            body.style.backgroundColor = circle.target.id;
        }
        if (circle.target.id === 'yellow'){
            body.style.backgroundColor = circle.target.id;
        }
    })
})
