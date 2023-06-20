import Kuhar from '../Slike/kuhar.jpg'

function ONama() {
  return (
    <div className="o-nama" id="o-nama">
      <div className="txt">
        <h3>o nama</h3>
        <h1>naša priča</h1>
        <p>
          Restoran "Gušt" je ugledni restoran koji nudi vrhunsko iskustvo uživanja u hrani i piću. Naš restoran je posvećen pružanju izvrsne kuhinje, vrhunske usluge i ugodne atmosfere kako bismo stvorili nezaboravno iskustvo za naše goste.
          Naša kuhinja se temelji na svježim i visokokvalitetnim sastojcima, te pažljivo pripremljenim jelima koja naglašavaju autentične okuse i gastronomske tradicije. Naši kreativni kuhari strastveno eksperimentiraju s kombinacijama okusa i tehnika kako bi svako jelo bilo pravo gastronomsko remek-djelo.
        </p>
        <p>
          Naša ponuda jela obuhvaća širok izbor internacionalnih i lokalnih specijaliteta, prilagođenih različitim prehrambenim preferencijama i dijetetskim potrebama. Bilo da se radi o mesnim jelima, ribi, vegetarijanskim ili veganskim opcijama, naši jelovnici su raznoliki i bogati okusima.
        </p>
        <button>pročitaj više</button>
      </div>
      <div className="img">
        <img src={Kuhar} alt="" />
      </div>
    </div>
  );
}

export default ONama;
