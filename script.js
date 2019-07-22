const request = require('request-promise');
const cheerio = require('cheerio');

let URL1 = 'https://www.vagas.com.br/vagas-de';

//ADICIONE VAGA que deseja procurar no site vagas.com 
//Exemplo abaixo:
const search = 'desenvolvedor Java';

const buscar = search.split(" ");

buscar.map((i)=>{
    URL1 = URL1 + "-" + i;
    console.log(URL1);
    console.log('\n')
})

URL1 = URL1 + "?";

async function vagas(){

    const response = await request(URL1);
    let $ = cheerio.load(response);
    let jon = [];

    console.log("-----------VAGAS-----------");
    
    $('.vaga a').each(function (i, e) {
        console.log('\n')
        console.log('https://www.vagas.com.br'+$(this).attr('href'));
        console.log($(this).attr('title'));
    });

    console.log(jon);
}

const URL3 = 'https://jobs.kenoby.com/ifood/position';

async function ifood() {

    const response = await request(URL3);
    let $ = cheerio.load(response);
    let hon = [];

    console.log("-----------IFOOD-----------");

    $('[data-segment=Technology] a').each(function (i, e) {
        console.log($(this).attr('href'));
        hon[i] = $(this).attr('data-title');
    });

    console.log(hon);
}

const URL4 = 'https://jobs.kenoby.com/sympla/position';

async function sympla(){

    const response = await request(URL4);
    let $ = cheerio.load(response);
    let fon = [];

    console.log("-----------SYMPLA-----------");

    $('[data-segment=Technology] a').each(function (i, e) {
        //INDIQUE O ESTADO QUE PREFERIR COM SUA SIGLA
        if($(this).attr('data-state') === 'SP'){
            console.log($(this).attr('href'));
            fon[fon.length] = $(this).attr('data-title');
        }
    })

    console.log(fon);
}

const URL5 = 'https://jobs.kenoby.com/Wavy/position';

async function wavy(){
    const response = await request(URL5);
    let $ = cheerio.load(response);
    let won = [];

    console.log("-----------WAVY-----------");

    $('[data-segment="Technology"] a').each(function(i, e) {
        //INDIQUE O ESTADO QUE PREFERIR COM SUA SIGLA
        if($(this).attr('data-state') === 'SP' && $(this).attr('data-city') !== 'São Carlos'){
            console.log($(this).attr('href'));
            won[won.length] = $(this).attr('data-title')
        }
    })

    console.log(won);
}

vagas();
ifood();
sympla();
wavy();

