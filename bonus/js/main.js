const containerDom = document.getElementById('container');
let selectDom = document.getElementById('select');


//evento click crea gliglia
document.getElementById('play').addEventListener('click',
        function(){

            containerDom.innerHTML = '';

            if( selectDom.value == 'hard' ){

                for (let i = 1; i <= 100; i++){

                    let element = griglia(i);
                    
                    //evento click cambio colore red
                    element.addEventListener('click',
                         function(){
                            this.style.backgroundColor = 'red';
                            this.style.color = 'white';
                            console.log(i);
    
                        }
                    );
                    containerDom.append(element);
                }  
            }else if ( selectDom.value == 'normale' ){
                for (let i = 1; i <= 81; i++){

                    let element = griglia(i);
                    element.style.height = 'calc(100% / 9)'
                    element.style.width = 'calc(100% / 9)'
                    
                    //evento click cambio colore red
                    element.addEventListener('click',
                         function(){
                            this.style.backgroundColor = 'red';
                            this.style.color = 'white';
                            console.log(i);
    
                        }
                    );
                    containerDom.append(element);
                }  
            }else{
                for (let i = 1; i <= 49; i++){

                    let element = griglia(i);
                    element.style.height = 'calc(100% / 7)'
                    element.style.width = 'calc(100% / 7)'

                    
                    //evento click cambio colore red
                    element.addEventListener('click',
                         function(){
                            this.style.backgroundColor = 'red';
                            this.style.color = 'white';
                            console.log(i);
    
                        }
                    );
                    containerDom.append(element);
                }  
            }

            
            //ciclo per creare 100 box nella griglia
                  
        }
);


//funzione per creare la griglia

function griglia (numeroInternoAlBox){
    //creazione box compongono la griglia
    let element = document.createElement('div');
    element.classList.add('box');


    element.append(numeroInternoAlBox);
    return element;
}