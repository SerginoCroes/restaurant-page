export function homePage() {

    let content = ['Welkom!', 'Welkom op de website van de beste friettent van het land.','U kunt hier informatie vinden over ons menu en ook kunt u hier contactinformatie vinden.','Selecteer hiervoor de respectivelijke tabbladen.'];

    let output = document.createElement('div');

    for(let sentence of content){

        let temp = document.createElement('p');

        temp.innerText = sentence;

        output.appendChild(temp);
    }

    return output;

}