function checkKey(event){
    if(event.key=="Enter"){
        addItem();
    }
}

function addItem(){
    let inputBx = document.getElementById('inputBx');
    if(inputBx.value != ''){
        let list = document.createElement('li');
        list.textContent = inputBx.value;
        list.addEventListener( 'click' , function(){
            this.remove();
        });
        inputBx.value = '';
        document.getElementById('list').appendChild(list);
    }

}
window.addEventListener('keydown', checkKey);