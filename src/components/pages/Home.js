import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>

      <div className="container">
        <div className="cont-box ">
          

          <div className="inside ">
            <h1>Vaara-Kainuun taidekansallispuisto</h1>
            <div className="wbox">
              <p>
                Suunnitelma uudesta kansallispuistosta, joka sijoittuisi
                Hyrynsalmen ja Puolangan kuntien alueelle Ylä-Kainuuseen.
              </p>
            </div>
            <hr />
            <div className="sbox">
              <p>
                Millainen kansallispuisto? <br />
                Kansallispuisto sijoittuisi vaarajaksolle, joka koostuu
                vanhoista kuusikoista, rehevistä korpilehdoista, virtaavista
                vaarapuroista ja soiden mosaiikista.
              </p>
            </div>
            <div>
              <p className="green">
                Alueella on Kainuun toiseksi korkein vaara, Paljakanvaara
                (360m), sekä useita muita vaaralakia, joilta avautuu huikaisevat
                näköalat Kainuun maisemiin. Vaarajakson luonto on erityisen
                monimuotoista ja onnekas voi kuulla siellä sinipyrstön laulun
                tai nähdä jokihelmisimpukan, liito-oravan tai tammukan.
                <br />
                <br />
                Vaara-Kainuun alueelle on suunniteltu kansallispuistoa useampaan
                otteeseen, aiempia suunnitelmia ovat olleet Vaarojen puisto
                (2000) sekä Vaara-Kainuun kansallispuisto (2012).
                <hr />
              </p>
            </div>
            <div className="sbox">
              <p>
                Mitä tarkoittaa taidekansallispuisto?
                <br /> Taidekansallispuisto tarkoittaa täysin uudenlaista
                matkailukohdetta, jossa monipuolinen taide- ja kulttuurisisältö
                rakennetaan osaksi kansallispuiston toimintoja.
              </p>
            </div>
            <div>
              <p className="green">
                Taidekansallispuiston ohjelma ammentaa alueen
                kulttuuriperinnöstä ja loisi näkymiä tulevaisuuteen esimerkiksi
                näyttelyiden, tapahtumien ja uniikkien kokemusten kautta.
                Taidekansallispuisto tarjoaa paikan rakentaa luontosuhdetta ja
                kestävää hyvinvointia. Taide- ja kulttuuriohjelma rakennetaan
                paikallisten toimijoiden sekä valtakunnallisten instituutioiden
                yhteistyöllä.
                <hr />
              </p>
            </div>
            <div className="sbox">
              <p>
                Millainen alue?
                <br />
                Ehdotusta kansallispuiston alustavaksi aluerajaukseksi tehdään
                tällä hetkellä yhdessä useiden paikallisten toimijoiden kanssa.
              </p>
            </div>
            <div>
              <p className="green">
                Alue sijoittuu Kainuun maakuntakaavaan merkitylle
                luontomatkailun kehittämisalueelle ja valtion maille, kuten
                kansallispuistojen perusmissäädöksissä on määritelty.
                <hr />
              </p>
            </div>
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
