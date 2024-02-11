import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      <div className="container-navigation">
        <div className="navigation-box">
          <div className="navigator" >
            <div className="news">
              <Link to="/Uutiset" style={{ textDecoration: "none" }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth' })} >
                <p style={ { paddingBottom: '5px' }}>Uutiset</p>
              </Link>
            </div>
            <div className="faq">
              {currentHash === "#faq" && (
                <a href="#koti" style={{ textDecoration: "none" }}>
                  <p>{"Koti"}&nbsp;&#8628;</p>
                </a>
              )}
              {currentHash === "#koti" && (
                <a href="#faq" style={{ textDecoration: "none" }}>
                  <p>{"FAQ"}&nbsp;&#8628;</p>
                </a>
              )}
              {currentHash === "" && (
                <a href="#faq" style={{ textDecoration: "none" }}>
                  <p>{"FAQ"}&nbsp;&#8628;</p>
                </a>
              )}
            </div>
            <a href="https://www.instagram.com/taidekansallispuisto/">
              <div className="soc-i">
                <img src="/images/icons/icon-instagram.svg" alt="instagram" />
              </div>
            </a>{" "}
            <a href="https://www.facebook.com/taidekansallispuisto/">
              <div className="soc-i">
                <img src="/images/icons/icon-facebook.svg" alt="instagram" />
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
      <div id="koti" className="container">
        <div className="cont-box ">
          <div className="inside ">
            <div className="heroicon">
              <img src="/images/logo-black.png" alt="instagram" />
            </div>
            <hr />

            <h1>Vaara-Kainuun taidekansallispuisto</h1>
            <div className="wbox">
              <p>
                Suunnitelma uudesta kansallispuistosta, joka sijoittuisi
                Hyrynsalmen ja Puolangan kuntien alueelle Ylä-Kainuuseen.
              </p>
            </div>
            <hr />
            <div className="sbox">
              <p>Mikä</p>
            </div>
            <div>
              <p className="base">
                Nämä taidekansallispuistosivut esittelevät uuden,
                Vaara-Kainuuseen sijoittuvan kansallispuiston suunnitelman.{" "}
                <br />
                Puisto sijoittuisi{" "}
                <a href="https://www.puolanka.fi">Puolangan</a> ja
                <a href="https://www.hyrynsalmi.fi"> Hyrynsalmen</a> kuntien
                alueelle.
                <br />
                <br />
                Tutustu ja tule mukaan!
                <br />
                <br />
                Sivut täydentyvät projektin edetessä.
                <hr />
              </p>
            </div>
            <div className="sbox">
              <p>Missä</p>
            </div>
            <div>
              <p className="base">
                Uusi kansallispuisto sijoittuisi Kainuun maakuntakaavan
                luontomatkailun kehittämisalueelle.
                <br />
                <p>
                  Alueelta löytyy Vaara-Kainuun vetovoimaisimpia nähtävyyksiä,
                  kuten Retkipaikan yleisöäänestyksessä Vuoden 2022
                  retkikohteeksi valittu Puolangan Hepoköngäs, joka on yksi
                  Suomen korkeimmista luonnonvaraisista putouksista.
                  Hyrynsalmelta löytyvät esimerkiksi monelle vielä tuntematon
                  helmi, Komulanköngäs ja Vorlokin hieno rotkolaakso.
                </p>
                <br />
                <p>
                  ”Heponköngäs lukeutuu Suomen ehdottomasti näyttävimpiin
                  vesiputouksiin ja on siitä erityisen hieno retkikohde, että
                  sen luokse pääsee myös esteettömästi.” -{" "}
                  <a href="https://www.retkipaikka.fi"> Retkipaikka.fi</a>
                </p>
                <br />
                <p>
                  Alueella on jo vireää luontomatkailuliiketoimintaa: hotelleja,
                  vuokramökkejä ja ohjelmapalveluita moneen makuun, niin
                  hiljaisuutta kuin toimintaa rakastaville.
                </p>
                <br />
                <p>
                  Paljakan majesteettinen luonnonpuisto kytkeytyisi
                  kansallispuistoon, mutta se säilyisi jatkossakin nykyisessä
                  tarkoituksessaan, luontoreservaattina, jossa voi kulkea vain
                  tarkoituksen osoitetuilla poluilla. Myös Natura2000-alueet ja
                  muut jo suojellut alueet tulisivat luonnollisesti osaksi
                  puistoa.
                </p>
                <br />
                <p>
                  Lue lisää Paljakan luonnonpuistosta{" "}
                  <a href="https://www.luontoon.fi/paljakka">tästä.</a>
                </p>
                <br />
                <p>
                  Kansallispuistossa reitit kulkisivat pohjoisesta Siikavaraalta
                  Paljakan kautta Hyrynsalmelle. Aluetta halkoo UKK-reitti ja
                  sekä monta muuta pienempää luontoreittiä. Kansallispuisto
                  koostuisi useasta osasta.
                </p>
                <hr />
              </p>
            </div>
            <div className="sbox">
              <p>Milloin</p>
            </div>
            <div>
              <p className="base">
                <p>
                  Tavoitteenamme on, että jo seuraava eduskunta voisi päättää
                  Vaara-Kainuun taidekansallispuiston perustamisesta
                  hallituskaudella 2023-2027.
                </p>
                <br />
                <p>
                  Kansallispuiston kehittely on jo pitkällä, koska suunnitelman
                  pohjana on ollut aiempi Vaara-Kainuun kansallispuistoesitys.
                  Täysin uutta on idea taiteen yhdistämisestä kansallispuistoon.
                </p>
                <br />
                <p>
                  Voit lukea noin 10 vuoden takaisesta, aiemmasta esityksestä{" "}
                  <a href="https://metsablogi.files.wordpress.com/2012/06/vaara-kainuun-kansallispuisto-sosioekonomisessa-tarkastelussa_antti-majava-12-7-2012.pdf">
                    tästä
                  </a>{" "}
                  ja{" "}
                  <a href="https://nuortenluonto.fi/tag/vaara-kainuun-kansallispuisto/">
                    tästä.
                  </a>
                </p>
                <hr />
              </p>
              <div className="sbox">
                <p>Tule mukaan!</p>
                <p className="base">
                  <p>
                    Jokainen on tervetullut edistämään hanketta ja auttamaan
                    Vaara-Kainuun taidekansallispuiston luomisessa. Kaikki
                    hoituu tällä hetkellä vapaaehtoisvoimin.
                  </p>
                  <br />
                  <p>
                    Tukijoiksi on liittynyt jo useita tahoja,
                    yksityishenkilöitä, paikallisia matkailuyrityksiä ja
                    järjestöjä. Tukijoiden ajatuksia ja visioita esitellään
                    näillä sivuilla hankkeen edetessä.
                  </p>
                  <br />
                  <p>
                    Voit ilmoittautua mukaan työryhmään esimerkiksi ottamalla
                    meihin yhteyttä sähköpostilla tai
                    Facebookissa / Messengerissä / Instragramissa.
                  </p>
                  <br />
                  <p>
                    Voit myös edistää hanketta tykkäämällä, kommentoimalla ja
                    jakamalla postauksiamme ja verkkosivuamme.
                  </p>
                  <br />
                  <p>
                    On tärkeää kertoa puisto-suunnitelmasta mahdollisimman
                    monelle. Voit tuoda ilmi päättäjille, että kansallispuistot
                    ylipäänsä ovat suomalaisille tärkeitä ja Vaara-Kainuun
                    ainutlaatuinen luonto ja maisemat ansaitsevat oman
                    kansallispuistonsa, jollaista ei vielä ole.
                  </p>
                  <br />
                  <p>
                    Puisto täydentäisi kansallispuistojen verkostoa, ja
                    taidepainotus tekisi siitä maailman mittakaavassa täysin
                    uniikin!
                  </p>
                  <br />
                  <p>
                    Adressi taidekansallispuistolle avataan myöhemmin näillä
                    sivuilla.
                  </p>
                  <br />
                </p>
              </div>
            </div>
            <hr />

            <h1 id="faq">FAQ &#8595;</h1>
            <br />

            <div className="sbox">
              <p> Mikä on kansallispuisto?</p>
            </div>
            <div className="base">
              {" "}
              <p>
                Suomessa on 41 kansallispuistoa. Kansallispuistot ovat laajoja
                luonnonsuojelualueita, joiden tehtävä on turvata luonnon
                monimuotoisuus ja antaa samalla ihmisille mahdollisuus tutustua
                luontoon ja nauttia siitä.
                <br />
                <br />
                Kansallispuistot perustetaan valtion maille, kukin omalla
                erityislaillaan.
                <br />
                <br />
                Lue lisää kansallispuistoista Metsähallituksen
                <a href="https://www.hyrynsalmi.fi"> luontoon.fi</a>
                -sivulta ja Ympäristöministeriön Kansallis- ja
                <a href="https://www.hyrynsalmi.fi"> luonnonpuistot</a>
                -sivulta.
                <br />
                <br />
                Kansallispuistot on merkittäviä piristysruiskeita
                aluetaloudelle, ja siksi kunnat kilpailevat, että saisivat niitä
                omalle alueelleen.
                <br />
                <br />
                <a
                  href="https://www.metsa.fi/wp-content/uploads/2023/01/ptvaikutukset_2022.pdf
                  "
                >
                  {" "}
                  Tästä
                </a>{" "}
                näet, paljonko kansallispuistot toivat Metsähallituksen
                Luontopalveluiden mukaan kävijöitä ja tuloja
                paikallistalouksiin.
              </p>
            </div>
            <hr />
            <div className="sbox">
              <p>
                Miksi juuri Vaara-Kainuuseen pitäisi perustaa kansallispuisto?
              </p>
            </div>
            <div className="base">
              <p>
                Vaara-Kainuun ainutlaatuista luontoa ei voi suojella missään
                muualla kuin Vaara-Kainuussa.
                <br />
                <br />
                Vaarajakso on geologisesti erityislaatuinen. Kainuun korkein
                kohta, Iso Tuomivaara Hyrynsalmella, kohoaa 387 metrin
                korkeuteen. Paljakka puolestaan on 384 metriä merenpinnan
                yläpuolella.
                <br />
                <br />
                Kainuu tunnetaan etenkin laajoista, korkeiden vaarojen
                kuusikoistaan ja vaarojen välisissä olevista pienipiirteisistä
                vesistöistä ja soista. Alueen luonnonkirjo on laaja. Kainuussa
                on yksi maamme letto- ja lehtokeskuksista, jotka ovat maakunnan
                arvokkain ja luonnoltaan monipuolisin alue.
                <br />
                <br />
                Vuosi vuodelta uhanalaisemmaksi käyviä lajeja, kuten
                sinipyrstöjä, maakotkia, hömötiaisia, ahmoja, metsäpeuroja ja
                raakkuja, elää Vaara-Kainuussa.
                <br />
                <br />
                <a
                  href="https://www.ymparisto.fi/fi-FI/Luonto/Lajit/Lajit__Kainuu(49460)
                  "
                >
                  {" "}
                  Tästä
                </a>{" "}
                voit lukea pohjanharmoyökkösestä (Xestia borealis). Se uskottiin
                esiintyvän vain Keski-Lapin paksusammalkuusikoissa, kunnes
                lajista tehtiin havainto yli 450 kilometrin päässä Puolangan
                Paljakassa! Somessa esittelemme alueen muita
                luontoharvinaisuuksia ja tärppejä puiston alueelta. <br />
                <br />
                Lehtoja on enää pari prosenttia Suomen metsistä, joten etenkin
                niiden suojelulla on kiire. Lehtojen vähäisyydestä johtuen harva
                on päässyt retkeilemään reheviin, lajeja pursuaviin lehtoihin ja
                lehtokorpiin, joten kansallispuisto tarjoaisi uusia elämyksiä
                monille kävijöille.
                <br />
                <br />
                Kainuu on jo vuosia kärsinyt asukasmäärän vähentymisestä.
                Vaara-Kainuussa luontomatkailu on tärkeä tulevaisuuden
                elinkeino, jota toivomme valtion tukevan perustamalla
                taidekansallispuiston, joka auttaisi samalla vastaamaan myös
                aikamme suuriin ympäristöhaasteisiin, kuten luontokadon
                torjuntaan.
                <br />
                <br />
                Vaara-Kainuussa on myös suuri määrä muinaisjäännöksiä.
                Arkeologisesti ja kulttuurihistoriallisesti se on hyvin
                kiinnostavaa aluetta, johon liittyy paljon tarinoita
                jälkipolville siirrettäväksi.
              </p>
              <br />
              <p>
                Lue{" "}
                <a
                  href="https://www.ymparisto.fi/fi-FI/Luonto/Lajit/Lajit__Kainuu(49460)
                  "
                >
                  {" "}
                  Tästä
                </a>{" "}
                Mustarindan toiminnanjohtajan{" "}
                <b style={{ textDecoration: "dotted underline" }}>
                  Miina Kaartisen
                </b>{" "}
                kirjoitus Ylä-Kainuu -lehdestä ja tästä mielipidekirjoitus
                Kainuun Sanomissa.
              </p>
              <br />
              <p>
                ”Alueella piilee valtava potentiaali, jota ei ole pystytty vielä
                kokonaisvaltaisesti hyödyntämään.” - Miina Kaartinen,
              </p>
              <p>Ylä-Kainuussa 10.1.2023</p>
            </div>
            <hr />
            <p className="sbox">
              Kuka päättää perustetaanko uusi kansallispuisto?
            </p>
            <div className="base">
              <p>
                Kansallispuistot perustetaan aina erillislailla. Jos hallitus ja
                sen ministerit niin haluavat, ympäristöministeriö valmistelee
                kansallispuisto-hankkeet ja esitysten hyväksymisestä päättää
                Suomen eduskunta.
              </p>
              <p>Metsähallitus hallinnoi kansallispuistoja.</p>
            </div>
            <hr />
            <p className="sbox"> Miten taidekansallispuistokampanja etenee?</p>
            <div className="base">
              {" "}
              <p>
                Kampanja etenee luonnollisella painollaan ja aikataulullaan.
                Kampanjatiimi on tässä vaiheessa täysin vapaaehtoisista
                koostuva.{" "}
              </p>
              <br />
              <p>
                Mustarinda-seura ry, jolla on runsaasti kokemusta erilaisten
                projektien parista, on koordinoinut vapaaehtoisten toimintaa.
                Tässä vaiheessa tavoitteena on tehdä asiaa tutuksi
                mahdollisimman laajalle joukolle ihmisiä ja kasvattaa tukijoiden
                joukkoa.
              </p>
            </div>
            <hr />
            <p className="sbox">
              Mitä “taide” tarkoittaa taidekansallispuistossa?
            </p>
            <div className="base">
              <p>
                Taide voi tarkoittaa monia asioita. Se tulee ymmärtää laajasti
                kulttuurina, niin perinteisenä kuin uutta luovana.
              </p>
              <br />
              <p>
                Kansallispuistot tekevät yhteistyötä alueen
                luontomatkailuyritysten kanssa. Taidekansallispuistossa
                yhteistyötahoja voisivat olla lisäksi esimerkiksi
                kansanperinteen vaalijat, kulttuuriyhdistykset, taidealan
                organisaatiot ja vapaan kentän taiteilijat.
              </p>
              <br />
              <p>
                Kansallispuisto voi synnyttää myös uutta ja erilaista, ihmisen
                ja luonnon suhteesta kumpuavaa tapahtumatuotantoa ja
                taideteoksia alueelle.
              </p>
              <br />
              <p>
                Yksi tunnetuista Kainuun taide-nähtävyyksistä on Reijo Kelan
                Hiljainen kansa, joka on mainio esimerkki siitä, miten taide
                luonnossa kiinnostaa ja edistää myös matkailua. Voit lukea siitä{" "}
                <a
                  className=" font-bold text-geraniumSylvaticum underline"
                  href="https://niittykahvila.fi/hiljainen-kansa/
                  "
                >
                  tästä
                </a>
                .
              </p>
            </div>
            <hr />
            <p className="sbox">
              Miten kansallispuisto ja tuulivoiman rakentaminen on
              yhteensovitettavissa?
            </p>
            <div className="base">
              <p>
                Kainuuseen suunnitellaan parasta aikaa useita uusia
                tuulivoimapuistoja, jotka mahdollistavat irtautumista
                fossiilisista polttoaineista. Vihreä siirtymä ja
                ilmastonmuutoksen torjunta ovat Suomelle tärkeitä, ja Kainuussa
                kunnat ovat halukkaita saamaan myös tuulimyllyjä.
              </p>
              <br />
              <p>
                Koska luonto hupenee rakentamisen myötä jatkuvasti, olisi
                tärkeää määritellä tässä vaiheessa ne alueet, jotka pyhitetään
                luonnonsuojelulle ja luontomatkailulle. Vaara-Kainuussa matkailu
                on jo nyt tärkeä elinkeino ja työn takaaja myös tulevaisuudessa.
                Vapaa-ajan asukkaiden määrä on suuri, ja heidän viihtymisensä on
                aluetaloudelle merkittävä asia.
              </p>
              <br />
              <p>
                Matkailulle ja luonnonsuojelulle arvokkaimmat rakentamattomat
                alueet tulisi säästää Kainuun vaarajaksolla
                tuulivoimarakentamiselta. Uskomme, että hyvällä suunnittelulla,
                lakeja noudattaen ja eri osapuolia kuullen erilaiset intressit
                ovat yhteensovitettavissa.
              </p>
            </div>
            <hr />
            <p className="sbox">
              Miten kansallispuisto ja metsätalous on yhteensovitettavissa?
            </p>
            <div className="base">
              {" "}
              <p>
                Kansallispuistot perustetaan valtion maille, ja puiston
                minimikoko on tuhat hehtaaria. Lisäksi puisto tulisi perustaa
                alueelle, jossa on suojeltavia luontoarvoja. Puiston tulisi
                täydentää olemassa olevaa kansallispuistoverkostoa.
              </p>
              <br />
              <p>
                Vaara-Kainuussa suojelemattomia luonnontilaisia metsiä ei ole
                enää suuria määriä. Vielä jäljellä olevat luonnontilaisten
                metsien rippeet olisi hyvä saada mukaan puistoon.
              </p>
              <br />
              <p>
                Lehdot ovat kaikkein uhanalaisin metsäluontotyyppimme, eikä
                niitä tulisi enää ensinkään ottaa metsätalouskäyttöön.
                Uhanalaisista lajeistamme 17 prosenttia elää ensisijaisesti
                lehdoissa. Lue lisää lehdoista{" "}
                <a
                  className=" font-bold text-geraniumSylvaticum underline"
                  href="https://www.ymparisto.fi/fi-FI/Luonto/Luontotyypit/Luontotyyppien_uhanalaisuus/Metsat/Lehdot"
                >
                  {" "}
                  tästä
                </a>
                .
              </p>
              <br />
              <p>
                Vaara-Kainuun taidekansallispuistossa jouduttaisiin
                todennäköisesti liittämään mukaan myös puustoltaan nuorempia
                metsiä, jotka kuitenkin ovat tulevaisuuden vanhoja metsiä. Nämä
                olisivat toki pois metsätalouskäytöstä, mutta Suomi on
                sitoutunut EU:n jäsenenä{" "}
              </p>
              <br />
              <p>
                biodiversiteettistrategiaan, jonka tavoitteena on pysäyttää
                luontokato ja kääntää luonnon monimuotoisuuden kehitys
                myönteiseksi vuoteen 2030 mennessä.
              </p>
              <br />
              <p>
                Toivomme, että Metsähallitus ottaa uutta luonnonvarastrategiaa
                laatiessaan ja toteuttaessaan huomioon paikallisten toiveen
                kansallispuiston perustamisesta luontomatkailun
                kehittämisalueelle.
              </p>
              <br />
              <p>
                Jos kansallispuistoksi kaavaillulla alueella tehdään hakkuita
                (mitä emme Metsähallitukselta tietenkään toivo) pyydämme, että
                monikäyttömetsien käsittely tapahtuu luontoa kunnioittaen ja
                ainoastaan aidon jatkuvan kasvatuksen menetelmillä, ilman isoja
                tai pieniä avohakkuita ja alaharvennuksia sekä lahopuut ja
                lehtipuut säästäen. Myös metsälain suojelemat kohteet tulisi
                kaikki huolellisesti säästää.
              </p>
              <br />
              <p>
                Näin toimien valtio voisi antaa retkeilyreittien maisemien
                säilyä puustoisina ja turvata metsäluonnon monimuotoisuuden ja
                eliöille tärkeät ekologiset käytävät myös odotusaikana.
              </p>
            </div>
            <hr />
            <p className="sbox">
              Kuka on perustanut taidekansallispuisto-kampanjan ja nämä
              nettisivut?
            </p>
            <div className="base">
              <p>
                Hyrynsalmelainen{" "}
                <a
                  className=" font-bold text-geraniumSylvaticum underline"
                  href="https://www.ymparisto.fi/fi-FI/Luonto/Luontotyypit/Luontotyyppien_uhanalaisuus/Metsat/Lehdot"
                >
                  {" "}
                  Mustarinda-seura ry
                </a>
                , joka oli mukana myös aiemmassa 10 vuoden takaisessa
                kansallispuisto-työryhmässä, on hankkeen käynnistäjä ja
                tunnustelija.
              </p>
              <br />
              <p>
                Mustarinda käynnisti kampanjan kesällä 2022 ja kutsui eri tahoja
                miettimään ja jalostamaan hanketta. Vapaaehtoisista ja
                Mustarindan työntekijöistä sekä harjoittelijoista koostuva tiimi
                on luonut nämä nettisivut.
              </p>
            </div>
            <hr />
            <p className="sbox">
              Miten juuri minä voin osallistua kansallispuistokampanjaan?
            </p>
            <div className="base">
              {" "}
              <p>
                Ensinnäkin, jos käytät somea, ota seurantaan
                Taidekansallipuiston somekanavat! Löydät meidät Instagramista ja{" "}
                <a
                  className=" font-bold text-geraniumSylvaticum underline"
                  href="https://www.facebook.com/taidekansallispuisto"
                >
                  Facebookista
                </a>
                . Tykkää, kommentoi ja jaa postauksia.
              </p>
              <br />
              <p>
                Jos haluat, ilmoittaudu mukaan kampanjatiimiin tekemään
                esimerkiksi viestintää.
              </p>
              <br />
              <p>
                Kerro Vaara-Kainuun taidekansallispuistosta mahdollisimman
                monelle: kavereille, paikallispoliitikoille, medialle,
                somekansalle, kantapöydälle, äidille, kansanedustajille,
                ministereille, presidentille - kenelle tahansa. Sitä parempi,
                mitä useampi tietää, että Vaara-Kainuussa on innostus suojella
                luontoa myös ihmisten virkistäytymistä varten.
              </p>
              <br />
              <p>
                Voit auttaa kansallispuistohanketta myös vierailemalla alueen
                luontokohteissa ja jakamalla kuviasi alueelta someen. Olemme
                iloisia, jos liität aihetunnisteeksi #taidekansallispuisto
                #vaarakainuu ja #kansallispuistoesitys
              </p>
            </div>
            <hr />
            <div className="wboxg">
              <p>
                Taidekansallispuistoa ovat suunnittelemassa useat paikalliset
                toimijat ja yksityiset henkilöt. Ota yhteyttä:
                taidekansallispuisto@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
