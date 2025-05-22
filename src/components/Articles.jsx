import '../styles/Articles.css';
import Article from './Article';

export default function Articles() {



  
    const articles = [
  {
    id: 1,
    title: "Découverte surprenante sous les abysses océaniques",
    body: "Des chercheurs ont récemment mis au jour une nouvelle espèce de crustacé vivant à plus de 6 000 mètres de profondeur. Cette découverte remet en question nos connaissances sur la biodiversité marine extrême. Les scientifiques prévoient déjà d'autres expéditions pour étudier son écosystème."
  },
  {
    id: 2,
    title: "La renaissance discrète des vinyles en Europe",
    body: "Les ventes de disques vinyles ont dépassé les prévisions des analystes pour la cinquième année consécutive. De jeunes labels misent sur la qualité artisanale et la fidélité sonore pour séduire les audiophiles. Les fabricants anticipent toutefois des pénuries de matière première si la demande continue de croître."
  },
  {
    id: 3,
    title: "Nouvelle batterie recyclable pour véhicules électriques urbains",
    body: "Une start-up lyonnaise annonce une batterie au sodium entièrement recyclable au terme de son cycle de vie. Les premiers tests indiquent une autonomie comparable aux modèles lithium existants. La technologie pourrait réduire l'empreinte environnementale des transports urbains."
  },
  {
    id: 4,
    title: "Start-up française lance satellites pour connectivité polaire",
    body: "La jeune entreprise souhaite offrir un accès internet stable aux chercheurs et navigateurs présents dans l'Arctique. Sa constellation de six nano-satellites sera déployée d'ici la fin de l'année. Le projet a reçu le soutien de l'Agence spatiale européenne et d'investisseurs privés."
  },
  {
    id: 5,
    title: "Festival gastronomique célèbre les algues comestibles innovantes",
    body: "L'événement, organisé à Saint-Malo, met en avant des chefs qui substituent la viande par des variétés d'algues riches en protéines. Des ateliers démontrent comment intégrer ces ingrédients dans une cuisine quotidienne. Les visiteurs repartent convaincus du potentiel culinaire et écologique des algues."
  },
  {
    id: 6,
    title: "Robot paysagiste autonome transforme entretien des parcs",
    body: "Un prototype développé à Montpellier est capable de tondre, tailler et arroser selon des données météo en temps réel. Les municipalités qui l'ont testé rapportent une économie d'eau de 30 %. Les concepteurs visent une commercialisation à grande échelle dès l'an prochain."
  },
  {
    id: 7,
    title: "Réhabilitation créative d'usines désaffectées en logements",
    body: "Plusieurs villes convertissent leurs friches industrielles en appartements lumineux dotés de structures d'époque conservées. Les architectes privilégient des matériaux biosourcés pour minimiser l'empreinte carbone. Les nouveaux quartiers attirent des familles en quête d'espaces atypiques."
  },
  {
    id: 8,
    title: "Championat mondial d'échecs adopte cadence hybride",
    body: "La Fédération internationale introduit une formule mêlant parties classiques et rapides pour dynamiser la compétition. Les joueurs devront adapter leurs préparations à un rythme plus varié. Les amateurs espèrent ainsi des rencontres plus spectaculaires."
  }
];



  return (
    <>
      <h1> Derniers articles disponible</h1>

      <main>
        {articles.map((article)=> <Article key={article.id} id={article.id} title={article.title} text={article.body}/>)}
        
      </main>
    
    
    
    
    </>
  )
}