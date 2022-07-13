const containerDom = document.getElementById('container');

document.getElementById('play').addEventListener('click',
        function(){

            for (let i = 0; i < 100; i++){

                let element = griglia();
            
                element.addEventListener('click',
                     function(){
                        this.style.backgroundColor = 'red';

                    }
                );

            
            
            
               
                containerDom.append(element);
            }

        
        }
);












function griglia (){
    //creazione box compongono la griglia
    let element = document.createElement('div');
    element.classList.add('box');

    //creazione numero che è all'interno del box
    let numero = document.createElement('div');
    numero.classList.add('numeroInterno');
    element.append(numero);

    return element;
}