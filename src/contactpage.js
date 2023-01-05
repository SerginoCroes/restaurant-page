export function contactPage() {

    let content = ['Neem contact op met de friettent via:','Email: contact@defriettent.nl.','Telefoon: 0123-456789.', 'Adres: Frietstraat 123', '1234FR Frietstad', 'FRIETLAND'];

    let output = document.createElement('div');

    for(let sentence of content){

        let temp = document.createElement('p');
        
        temp.innerText = sentence;

        output.appendChild(temp);
    }

    return output;

}