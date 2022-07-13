const containerDom = document.getElementById('container');

//evento click crea gliglia
document.getElementById('play').addEventListener('click',
        function(){

            //ciclo per creare 100 box nella griglia
            for (let i = 1; i <= 100; i++){


                let element = griglia(i);
                
                //evento click cambio colore red
                element.addEventListener('click',
                     function(){
                        this.style.backgroundColor = 'red';
                        console.log(i);

                    }
                );
               
                containerDom.append(element);
            }

        
        }
);


//funzione per creare la griglia

function griglia (numeroInternoAlBox){
    //creazione box compongono la griglia
    let element = document.createElement('div');
    element.classList.add('box');

    //creazione numero che è all'interno del box
    let numeroInterno = document.createElement('div');
    numeroInterno.classList.add('numeroInterno');
    numeroInterno.append(numeroInternoAlBox);

    element.append(numeroInterno);
    return element;
}