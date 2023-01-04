export function contactPage() {

    let content = ['Zevende zin.','Achtste zin.','Negende zin.'];

    let output = document.createElement('div');

    for(let sentence of content){

        let temp = document.createElement('p');

        temp.innerText = sentence;

        output.appendChild(temp);
    }

    return output;

}