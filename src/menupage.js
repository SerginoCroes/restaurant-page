export function menuPage() {

    let content = ['Vierde.','Vijfde zin.','Zesde zin.'];

    let output = document.createElement('div');

    for(let sentence of content){

        let temp = document.createElement('p');

        temp.innerText = sentence;

        output.appendChild(temp);
    }

    return output;

}