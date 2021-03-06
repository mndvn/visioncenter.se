import React from 'react';
import logo from '../../Assests/logo.png';

const OmVisionCenter = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h4>
          VISION CENTER SWEDEN
          <br />
          Arbetar i Brottsförebyggande Syfte
        </h4>
        <h5>Ungdomar</h5>
        <br />
        <p>
          Vi kämpar för att vara en god resurs för ungdomar och deras föräldrar. Vi SER ungdomarna
          som kommer till vår verksamhet eller våra aktiviteter. Respekten måste vara ömsesidig för
          att få ungdomarnas förtroende.
        </p>
        <p>
          Vi har kunskapen att se vilka ungdomar som är i gråzonen. De fångas upp av våra unga
          ledare i samarbete med ungdomsledaren. Genom att ta med dem i olika aktiviteter och där
          låta dem ta ansvar så leder vi dem mot stärkt självkänsla. Vi ger dem också möjligheten
          till arbetsträning/anställning.
        </p>
      </div>
      <div className="col-lg-5">
        <img src={logo} className="img-fluid" alt="pic" />
      </div>
      <p className="container">
        Många av dessa ungdomar har även via oss fått Ledarutbildning, HLR-utbildning (hjärt- och
        lungräddning), Miljöutbildning samt Säkerhetsutbildning. Vi har klart sett hur vårt arbete
        med dessa ungdomar har lyckats. De har blivit ansvarstagande starka individer.
      </p>
    </div>

    <p>
      För de unga som redan har hamnat i kriminalitet och missbruk men som vill börja ett nytt
      ”rent” liv, har vi olika former av hjälp att ge. Vi erbjuder kontaktmannaskap eller Stödboende
      där kontaktmannaskap ingår. Beslutet om vilken hjälp individen behöver tas ihop med
      Socialtjänsten. Målet är att när avtalet har upphört så är ungdomen ute i arbetslivet men
      också kvar hos oss som Ung Ledare med styrka och vilja att hjälpa andra ungdomar att ta rätt
      beslut i livet.
    </p>

    <h5>Vuxna</h5>
    <p>
      Vi har uppsökande verksamhet på anstalter, behandlingshem m.m. där vi ger föreläsningar om
      missbrukets baksidor samt ger information om den hjälp vi kan ge för att de ska kunna bygga
      upp ett nytt liv utan droger och kriminalitet. Vårt mål är att kunna motivera de intagna till
      att livet är för värdefullt för att slängas bort. Vi är en av många organisationer som kan
      hjälpa dem till att få styrkan att leva enligt samhällets normer och även känna att de trivs
      där. Vi erbjuder kontaktmannaskap och stödboende samt gruppträffar där deltagarna är i samma
      situation.
    </p>
  </div>
);

export default OmVisionCenter;
