function diceroll(){
    const numb_dice = document.getElementById('dice_numb').value;
    const dice_value = document.getElementById('dice_value');
    const dice_img = document.getElementById('dice_img');
    const values = [];
    const images = [];

    for(let i = 0; i < numb_dice; i++){
        const value = Math.round(Math.random() * 5) + 1
        values.push(value);
        images.push(`<img src = "Dice Images/${value}.png" alt="Dice ${value}">`)}
    
    dice_value.textContent = `Dice: ${values.join(', ')}`;
    dice_img.innerHTML = images.join('')}