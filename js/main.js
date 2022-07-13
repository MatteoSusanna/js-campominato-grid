const containerDom = document.getElementById('container');


for (let i = 0; i < 100; i++){


    let element = document.createElement('div');
    element.classList.add('box');

    containerDom.append(element);

}