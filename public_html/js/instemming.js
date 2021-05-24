var instemming = true;
var instemmingDatum = "Maandag 31 mei";
var binnenkortInstemming = `Ja! Op <u> ${instemmingDatum} </u> is er een instemming. Lijkt het jou leuk om in een actief huis te komen wonen? Stuur dan een mailtje naar <a href="mailto:instemming@bolkhuis.ch"> instemming@bolkhuis.ch</a> en vertel daarin waarom jij de volgende actieve Huischbewoner gaat worden en waar je zoal van houdt!`
var geenInstemming = 'Nee, helaas nog niet :( op het moment hebben wij geen instemming op de planning staan. Maar als jij denkt "ik pas in dit leuke huis" stuur dan alvast een mailtje naar <a href="mailto:interesselijst@bolkhuis.ch">interesselijst@bolkhuis.ch</a> en dan houden we je op de hoogte wanneer er weer een instemming komt!'

if(instemming){
    document.getElementById('instemmingsTekst').innerHTML = binnenkortInstemming;
} else {
    document.getElementById('instemmingsTekst').innerHTML = geenInstemming;
}
