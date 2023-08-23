let radio = document.getElementsByName('color');
for(let i = 0; i<radio.length;i++){
    radio[i].onclick = () => {
        let target = document.body;
        target.style.background = radio[i].value;
    }
}