//doc
const button = document.querySelector('#compare');
const textArea = document.querySelector('.textArea');
const word = document.querySelector('.inputWord');
const resBox = document.querySelector('.resBox');

//event
button.addEventListener('click',compare);


//func
function compare(){
    let arr = textArea.value.split('');
    if(arr.length <=  0 || !word.value ) return alert("Please, enter a valid word or sentence.");;
    let wordLength = word.value.length;

    let result = 0;
    let check = 0;
    
    for(let a=0;a<arr.length;a++){
        let check = 0;
        if(textArea.value.toLowerCase().charCodeAt(a) === word.value.toLowerCase().charCodeAt(0)){
            for(let b=1;b<wordLength;b++){
                if(textArea.value.toLowerCase().charCodeAt(a + b) != word.value.toLowerCase().charCodeAt(b)){
                    check = 1;
                    break;
                }else{
                    check = 0;
                }
            }
            if(check === 0){
                result = 1 + result;
            }
        }
    }

    //result
    if(result <= 0){
        resBox.innerText = `No matching word.` ;
    }
    else if(result > 0 && result == 1){
        resBox.innerText = `${result} word matched.` ;
    }else{
        resBox.innerText = `${result} words matched.` ;
    }
}
