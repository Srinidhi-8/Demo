let movieTitle:string="Baahubali: The Beginning";
let releaseYear:number=2015;
let isBlockbuster:boolean=true;

function getMovieStatus(title:string,year:number):string{
    return '${title}was a massive hit released in ${year}.';
}

let leadActors :string[]=["Prabhas","Rana Daggubati","Anushka Shetty","Tamannaah"];

const summary:string=getMovieStatus(movieTitle,releaseYear);

console.log(summary);
console.log('Starring:${leadActors.join(",")}');
console.log('Is it a blockbuster?${Is Blockbuster?"Yes,Jai Mahishmati!":"No"}');