import React from "react";
import "./Uutiset.css";
  
import { Link } from "react-router-dom";

const Uutiset = () => {
  return (
    <div>
      <div className="container-navigation">
        <div className="navigation-box">
          <div className="navigator2">
            <div className="news">
              <Link to="/" style={{ textDecoration: "none" }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth' })}>
                <p>{"Koti"}&nbsp;&#8628;</p>
              </Link>
            </div>
            <div className="faq" style={{ visibility: "hidden", }}>
              <a href="#koti" style={{ textDecoration: "none" }}>
                <p>{"Koti"}&nbsp;&#8628;</p>
              </a>

              <a href="#faq" style={{ textDecoration: "none" }}>
                <p>{"FAQ"}&nbsp;&#8628;</p>
              </a>

              <a href="#faq" style={{ textDecoration: "none" }}>
                <p>{"FAQ"}&nbsp;&#8628;</p>
              </a>
            </div>
            <a
              href="https://www.instagram.com/taidekansallispuisto/"
              style={{ visibility: "hidden" }}
            >
              <div className="soc-i">
                <img src="/images/icons/icon-instagram.svg" alt="instagram" />
              </div>
            </a>{" "}
            <a
              href="https://www.facebook.com/taidekansallispuisto/"
              style={{ visibility: "hidden" }}
            >
              <div className="soc-i">
                <img src="/images/icons/icon-facebook.svg" alt="instagram" />
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cont-box ">
          <div className="inside ">
            <h2>
              Haussa projektikoordinaattori (50%) kolmivuotiseen Vaara-Kainuun
              taidekansallispuistohankkeeseen
            </h2>
            <hr />
            <img
              src="/images/rekry_koordinaattori_3 (reduced2).webp"
              alt="rekry_koordinaattori"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <hr />

            <p>
              Etsimme luovaa ja toimeen tarttuvaa taiteesta ja ympäristöasioista
              innostuvaa projektihallinnan ammattilaista luotsaamaan maailman
              ensimmäistä Taidekansallispuistoa valmistelevaa hanketta.
              Taidekansallispuisto on Mustarinda-seuran vuonna 2022 alullepanema
              kampanja.
            </p>
            <br />
            <p>
              Projektikoordinaattorin työ tarjoaa näköalapaikan Paljakanvaaran
              huipulta Vaara-Kainuun upeisiin maisemiin, kuten myös
              valtakunnallisesti ja historiallisesti merkittävään
              kansallispuistoehdotuksen valmisteluun. Inspiroivan ja
              kunnianhimoisen työn lisäksi pääset viettämään aikaa
              Mustarinda-talolla ja sitä ympäröivissä ikimetsissä. Monialainen
              ja -lajinen yhteisömme tarjoaa sinulle runsaasti kiinnostavia
              kohtaamisia, sekä mahdollisuuden kasvattaa verkostojasi ja oppia
              uutta. Lupaamme myös paljastaa parhaat marja- ja sieniapajamme.
            </p>
            <br />
            <p>
              Vaara-Kainuun taidekansallispuiston valmisteluhankkeen (2024-2026)
              tarkoitus on edistää Taidekansallispuiston perustamista, rakentaa
              Taidekansallispuiston konseptia ja toimijaverkostoa sekä kokeilla
              mitä Taidekansallispuisto voisi käytännössä tarkoittaa. Hankkeen
              tavoitteena on samalla lisätä tietoa ja ymmärrystä taiteen
              merkityksestä ekologisessa siirtymässä sekä tehdä
              yhteiskunnallista vaikuttamistyötä taiteen keinoin ja äärellä.
              Hanke on osa Oulu2026-kulttuuriohjelmaa.
            </p>
            <br />
            <p>
              Projektikoordinaattorina vastaat valmisteluhankkeen etenemisestä.
              Työtehtäviin kuuluu paikallista ja valtakunnallista vaikuttamista,
              sidosryhmätyötä, tekstien tuottamista, julkista puhumista ja
              edustamista, tapahtumien järjestämistä, taiteellisten
              yhteistyökumppaneiden tuotannollista tukemista, sekä Mustarindan
              muiden projektien ja kansallispuistohankkeen välistä
              koordinointia. Työnkuvaa on mahdollista muokata ammatillisten
              kiinnostuksen kohteidesi ja osaamisesi kautta.
            </p>
            <br />
            <p>
              Toivomme sinulta rohkeutta ja intohimoa edistää taiteen asemaa
              yhteiskunnassa, kokemusta projektien koordinoinnista sekä
              valtakunnallisen taide- ja kulttuurikentän tuntemusta. Työtehtävät
              edellyttävät hyviä vuorovaikutustaitoja, itseohjautuvuutta,
              sujuvaa suomen ja englannin kielen taitoa sekä ajokorttia.
              Työskentelet yhteistyössä Mustarinda-seuran toiminnanjohtajan,
              muun henkilökunnan, vapaaehtoisten sekä vaihtuvien taiteellisten
              yhteistyökumppaneiden kanssa. Hankkeelle kootaan taiteen ja
              ympäristöalan ammattilaisista koostuva ohjausryhmä, joka tukee
              sinua työssäsi. Mustarindassa työskennellään pääosin
              monipaikkaisesti, mutta projektikoordinaattorin työ edellyttää
              myös pidempiä ajanjaksoja Kainuussa.
            </p>
            <br />
            <p>
              Projektikoordinaattorin palkka on 1700€/kk ja työaika 50%
              (18,75h/vko), työtä on 9kk vuonna 2024, 10kk vuosina 2025-2026.
              Lisärahoituksesta riippuen työaikaa on mahdollista kasvattaa.
              Työtä voidaan jaksottaa tarpeen mukaan, mutta toivomme sinun
              aloittavan huhtikuun 2024 aikana ja työskentelevän Mustarindan
              tulevan kesäohjelman parissa.
            </p>
            <br />
            <p>
              Lähetä vapaamuotoinen hakemuksesi (max. 1 liuska tai 5 min) ja
              ansioluettelosi 11.2.2024 mennessä osoitteeseen
              miina.kaartinen@mustarinda.fi. Kaksikieliset (suomi+englanti)
              haastattelut järjestetään zoom-yhteydellä viikolla 10.
            </p>
            <br />
            <p>
              Lisätietoja Mustarindan toiminnanjohtaja Miina Kaartiselta
              sähköpostitse tai puhelimitse +358 45 6740 667 seuraavina aikoina:
              23.-26.1. klo 10-12.
            </p>
            <hr />
            <p>
              Lue lisää Taidekansallispuistosta:{" "}
              <a href="https://taidekansallispuisto.fi">
                taidekansallispuisto.fi
              </a>
            </p>

            <p>
              Lue lisää Mustarinda-seurasta:{" "}
              <a href="https://mustarinda.fi">
                mustarinda.fi
              </a>
            </p>
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
            >

            <img
              src="/images/Oulu2026_logo_black_RGB_FIN_horizontal.png"
              alt="rekry_koordinaattori_3.png"
              style={{
                
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uutiset;
