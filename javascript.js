const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncriment = document.getElementById('subhanAllahIncriment');
const subhanAllahDecriment = document.getElementById('subhanAllahDecriment');

const AlhamdulillahDisplay = document.getElementById('AlhamdulillahDisplay');
const AlhamdulillahIncriment = document.getElementById('AlhamdulillahIncriment');
const AlhamdulillahDecriment = document.getElementById('AlhamdulillahDecriment');

const AllahuAkbarDisplay = document.getElementById('AllahuAkbarDisplay');
const AllahuAkbarIncriment = document.getElementById('AllahuAkbarIncriment');
const AllahuAkbarDecriment = document.getElementById('AllahuAkbarDecriment');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;

// for subhan allah
subhanAllahIncriment.addEventListener('click',function(){
    if(subhanAllahInitialValue === 100){
        return alert('You cannot add value.')
    }

    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
subhanAllahDecriment.addEventListener('click',function(){
    if(subhanAllahInitialValue === 0){
        return alert('You cannot add negative value.')
    }

    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

// for alhamdulillah
AlhamdulillahIncriment.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 100){
        return alert('You cannot add value.')
    }

    alhamdulillahInitialValue += 1;
    AlhamdulillahDisplay.innerText  = alhamdulillahInitialValue;
})
AlhamdulillahDecriment.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 0){
        return alert('You cannot add negative value.')
    }

    alhamdulillahInitialValue -= 1;
    AlhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

// for Allahu Akbar
AllahuAkbarIncriment.addEventListener('click',function(){
    if(allahuAkbarInitialValue === 100){
        return alert('You cannot add value.')
    }

    allahuAkbarInitialValue += 1;
    AllahuAkbarDisplay.innerText  = allahuAkbarInitialValue;
})
AllahuAkbarDecriment.addEventListener('click',function(){
    if(allahuAkbarInitialValue === 0){
        return alert('You cannot add negative value.')
    }

    allahuAkbarInitialValue -= 1;
    AllahuAkbarDisplay.innerText = allahuAkbarInitialValue;
})

resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText = 0;
    AlhamdulillahDisplay.innerText = 0;
    AllahuAkbarDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
})