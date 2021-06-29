var instemming = false;
var instemmingDatum = "Maandag 31 mei";
var binnenkortInstemming = `Ja! Op <u> ${instemmingDatum} </u> is er een instemming. Lijkt het jou leuk om in een actief huis te komen wonen? Stuur dan een mailtje naar <a href="mailto:instemming@bolkhuis.ch"> instemming@bolkhuis.ch</a> en vertel daarin waarom jij de volgende actieve Huischbewoner gaat worden en waar je zoal van houdt!`
var geenInstemming = 'Nein, momentan nicht :( Möchtest du aber unbedingt hier Wohnen, sendest dann eines E-Mail nach <a href="mailto:interesselijst@bolkhuis.ch">interesselijst@bolkhuis.ch</a> und wir werden du wissen lassen wann die Nächste Chance ist.'

if(instemming){
    document.getElementById('instemmingsTekst').innerHTML = binnenkortInstemming;
} else {
    document.getElementById('instemmingsTekst').innerHTML = geenInstemming;
}
