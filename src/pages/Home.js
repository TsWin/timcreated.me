import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Typewriter from '../components/TypeWriter';
// import backgroundVideo from '../assets/videos/Background.mp4';
import cpiSgpoImage from '../assets/images/cpi_sgpo.png';
import labortImage from '../assets/images/labort.png';
import tvceImage from '../assets/images/TVCE.png';
import pinglyImage from '../assets/images/pingly.png';
import discguardImage from '../assets/images/DiscGuard.png'
import tokeylicImage from '../assets/images/tokeylic.png'

const Home = () => {
        
    const text = `Boonjour, Je m'appelle Tim, étudiant de 19 ans, je suis ravi de partager avec vous un aperçu de mes compétences tant dans le monde scolaire que professionnel. Fort d'une passion inébranlable pour les technologies du futur et d'une détermination à atteindre l'objectif, je suis constamment à la recherche de défis stimulants qui me permettent d'exploiter pleinement mes capacités, mais d'en découvrir également des nouvelles.
    Mon approche orientée vers la résolution de problèmes concrets, associée à ma capacité à innover et à collaborer efficacement, m'a conduit à la réalisation de projets significatifs, que ce soit dans le domaine des pompiers ou en répondant aux besoins de communautés qui me tiennent à cœur. Au fil des années, j'ai développé une expertise solide en programmation web et en interconnexion d'outils numériques. Actuellement, je suis à la recherche d'opportunités au sein d'entreprises confrontées à des enjeux importants, partageant des valeurs qui me caractérisent, et où mes compétences peuvent contribuer à améliorer l'avenir.
    À travers ce portfolio, je souhaite vous offrir un aperçu de mes réalisations et des compétences qui font de moi un professionnel dévoué et compétent dans mon domaine. Merci de prendre le temps de découvrir mon travail. Je suis impatient de discuter des opportunités de collaboration futures.`;
    return (
        <>
            <section className="hero is-fullheight has-background-dark-black bg">
                <Header />
                <div className="hero-body">
                    <div className="container">
                        <div className="box is-box-transparent">
                            <h1 className="title has-text-white">Tim Suykerbuyk</h1>
                            <h2 className="subtitle has-text-white">Bienvenue sur mon site personnel qui présente mes différents projets.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="apropos" className="hero is-fullheight is-transparent has-background-dark-black">
                <div className="hero-body">
                    <div className="container is-fluid is-flex is-justify-content-center ">
                        <div className="box is-box-transparent">
                            <Typewriter text={text} speed={40} />
                        </div>
                    </div>
                </div>
                            {/* <span className="bouncing-arrow">
                            <i class="fas fa-chevron-down"></i>
                            </span> */}
            </section>
            <section
                className="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity1"
            >
                <div className="activity1 activity-responsive right">
                    <div className="container-text right">
                        <h2 className="title has-text-white">Pompier</h2>
                        <p className="has-text-white">
                        C'est une aventure qui a pris forme au fil du temps, alimentée par ma curiosité inextinguible. Tout a commencé lorsque je me suis inscrit aux Jeunes Sapeurs Pompiers, attiré par l'idée de participer à un programme de sport intensif.
                        Cependant, les manœuvres m'ont rapidement captivé, et aujourd'hui, en tant que membre d'une caserne, je réalise que ce parcours n'est qu'une introduction à un monde passionnant. 
                        Chaque étape franchie ouvre la voie à des découvertes toujours plus captivantes.
                        </p>
                    </div>
                </div>
            </section>
            <section
                className="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity2"
            >
                <div className="activity2 activity-responsive">
                    <div className="container-text">
                        <h2 className="title has-text-white">Son</h2>
                        <p className="has-text-white">
                        Depuis ma petite enfance jusqu'à mes 15 ans, j'ai joué le rôle de technicien son avec mon père lors de spectales de démonstration de talents. Mon job consistait à installer et configurer les équipements son et lumières pour assurer un spectacle réussi. Bien que je continue d'apporter mon aide de temps à autre, je m'assure qu'ils n'aient pas besoin de faire appel à un professionnel lorsque ce n'est pas vraiment nécessaire. C'est ma façon de contribuer à la réussite de ces événements tout en gardant une ambiance légère et plaisante.
                        </p>
                    </div>
                </div>
            </section>
            <section
                className="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity3"
            >
                <div className="activity3 activity-responsive right">
                    <div className="container-text right">
                        <h2 className="title has-text-white">JavaScript</h2>
                        <p className="has-text-white">
                            Depuis 2019 j’ai passé la majorité de mon temps à programmer des applications web/serveur et faire du scripting sur tout et rien. 
                            Contrairement à installer des équipements sons, le plaisir de programmer ne fut pas toujours présent
                            notamment lorsque rien ne marchait lors de mes débuts dans la programmation. Heureusement, cela fut de courte
                            durée.
                        </p>
                    </div>
                </div>
            </section>
            <section
                className="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity4"
            >
                <div className="activity4 activity-responsive">
                    <div className="container-text">
                        <h2 className="title has-text-white">Reseau</h2>
                        <p className="has-text-white">
                            En 2020, j’ai rejoint une association qui faisait de la vente de services d’hébergement web. J’étais
                            responsable du département support clientèle mais également développeur de logiciels internes grâce à mes
                            connaissances en JavaScript. Cela m’a permis de découvrir le monde des réseaux et des machines en plus de la
                            relation support client. Ce qui me mena à la découverte des études en Réseaux, Informatiques et Télécoms.
                        </p>
                    </div>
                </div>
            </section>

            <section id="projets" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor responsive-project-section is-flex-desktop">
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    <img className='image' src={tvceImage} alt="TVCE" style={{maxHeight: 70+'vh'}} />
                                </div>
                            </div>
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical project-text is-align-items-center is-justify-content-center">
                                <div className="tile is-child ">
                                    <h1 className="title is-1 has-text-white">TVCE</h1>
                                    <p className="paragraph has-text-white">Terminal de Vente de Consommations Evènementielle -- En cours de réalisation</p>
                                </div>
                                <div className="tile is-child">
                                        <a href="https://labort.timcreated.me" className="button is-small is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>En savoir plus</span>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section1" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor responsive-project-section is-flex-desktop">
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical project-text is-align-items-center is-justify-content-center">
                                <div className="tile is-child">
                                    <h1 className="title is-1 has-text-white">OASIS</h1>
                                    <p className="paragraph has-text-white">Outil d'Administration des Services d'Incendie et de Secours {/* | Est un logiciel d'administration qui permet la création de rapports d'interventions, la gestion du personnel et des vacations.*/}</p>
                                </div>
                                <div className="tile is-child">
                                        <a href="https://sgpo.timcreated.me" className="button is-small is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>En savoir plus</span>
                                        </a>
                                </div>
                            </div>
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    <img className='image' src={cpiSgpoImage} alt="CPI SGPO" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor responsive-project-section is-flex-desktop">
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    <img className='image' src={labortImage} alt="Labo RT" />
                                </div>
                            </div>
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical project-text is-align-items-center is-justify-content-center">
                                <div className="tile is-child ">
                                    <h1 className="title is-1 has-text-white">Labo RT</h1>
                                    <p className="paragraph has-text-white">Le site web du Labo RT de l'IUT Annecy</p>
                                </div>
                                <div className="tile is-child">
                                        <a href="https://labort.timcreated.me" className="button is-small is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>En savoir plus</span>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section3" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor responsive-project-section is-flex-desktop">
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical project-text is-align-items-center is-justify-content-center">
                                <div className="tile is-child">
                                    <h1 className="title is-1 has-text-white">Pingly</h1>
                                    <p className="paragraph has-text-white">Api qui permet de ping et connaitre le statut des sites web.</p>
                                </div>
                                <div className="tile is-child">
                                        <a href="https://pingly.app" className="button is-small is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>En savoir plus</span>
                                        </a>
                                </div>
                            </div>
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    <img className='image' src={pinglyImage} alt="Pingly" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section4" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor responsive-project-section is-flex-desktop">
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    <img className='image' src={discguardImage} alt="Disc'Guard" />
                                </div>
                            </div>
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical project-text is-align-items-center is-justify-content-center">
                                <div className="tile is-child ">
                                    <h1 className="title is-1 has-text-white">Disc'Guard</h1>
                                    <p className="paragraph has-text-white">Un bot discord qui assure la sécurité des serveurs des communautés. Siteweb, Api, Application NodeJs (Bot) constituent ce service.</p>
                                </div>
                                <div className="tile is-child">
                                        <a href="https://discguard.xyz" className="button is-small is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>En savoir plus</span>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section5" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor responsive-project-section is-flex-desktop">
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical project-text is-align-items-center is-justify-content-center">
                                <div className="tile is-child">
                                    <h1 className="title is-1 has-text-white">ToKeyLic-gen</h1>
                                    <p className="paragraph has-text-white">Un module NPM qui facilite la génération de tokens, clés et licenses.</p>
                                </div>
                                <div className="tile is-child">
                                        <a href="https://www.npmjs.com/package/tokeylic-gen" className="button is-small is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>En savoir plus</span>
                                        </a>
                                </div>
                            </div>
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    <img className='image' src={tokeylicImage} alt="ToKeyLic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </>
    );
};

export default Home;
