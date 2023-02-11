const btn = document.getElementById("generate");
btn.addEventListener('click', calculateDay);

let text = document.getElementById("dag");


function calculateDay() {
    text.textContent = showDay();
 
}

function showDay() {
    let num = Math.floor(Math.random() * 6) +1;
switch (num) {
    case 1:
        return 'måndag';
        break;
        case 2:
            return 'tisdag';
            break;
            case 3:
                return 'onsdag';
                break;
                case 4:
                    return 'torsdag';
                    break;
                    case 5:
                        return 'fredag';
                        break;
                        case 6:
                            return 'lördag';
                            break;
                            case 7:
                                return 'söndag';
                                break;

}

}
