export function menuPage() {

    let content = ['MENU:', 'Friet €5.','Frikandel €3.','kroket €3.'];

    let output = document.createElement('div');

    for(let sentence of content){

        let temp = document.createElement('p');

        temp.innerText = sentence;

        output.appendChild(temp);
    }

    return output;

}