import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
    // const [text, setText] = useState('');
    // const [isTyping, setIsTyping] = useState(true);

    // useEffect(() => {
    //     const aboutText = "Bonjour, Je m’appelle Tim et j’aime beaucoup de choses dans la vie, comme vous pouvez le voir grâce aux images, plusieurs choses particulières définissent mon caractère. Tout d’abord commençons par les bases. Je suis quelqu’un qui a toujours adoré découvrir, aider les gens et résoudre des problèmes.";
    //     let i = 0;
      
    //     const typeWriter = () => {
    //       if (i < aboutText.length) {
    //         setText(prevText => prevText + aboutText.charAt(i));
    //         i++;
    //         setTimeout(typeWriter, 50);
    //       } else {
    //         setIsTyping(false);
    //       }
    //     };
      
    //     typeWriter();
    //   }, []);
    return (
        <>
            <section className="hero is-fullheight has-background-dark-black bg">
                <Header />
                <div className="hero-body">
                    <div className="container">
                        <div className="box is-box-transparent">
                            <h1 className="title has-text-white">Tim Suykerbuyk</h1>
                            <h2 className="subtitle has-text-white">This is a portfolio about all my projects.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="hero is-fullheight has-background-dark-black">
                <div className="hero-body">
                    <div className="container is-fluid is-flex is-justify-content-center">
                        <div className="box is-box-transparent">
                            <h1 className="title has-text-white">About me</h1>
                            {/* <p className={`has-text-white ${isTyping ? 'typing' : ''}`}>{text}</p> */}
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity1"
            >
                <div class="activity1">
                    <div class="container-text mr-6">
                        <h2 class="title has-text-white">Pompier</h2>
                        <p class="has-text-white">
                            Cela est venu avec le temps et curiosité. Tout d’abord je me suis inscrit aux Jeunes Sapeurs Pompiers car je
                            souhaitais pouvoir faire du sport intensif, mais en suivi les manœuvres et tout devint un peu plus intéressant
                            jusqu'à aujourd'hui où j'intègre une caserne. Ce parcours n’est qu’un début à un monde gigantesque.
                        </p>
                    </div>
                </div>
            </section>
            <section
                class="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity2"
            >
                <div class="activity2">
                    <div class="container-text ml-6">
                        <h2 class="title has-text-white">Son</h2>
                        <p class="has-text-white">
                            Depuis tout petit et jusqu’à mes 15 ans j’ai participé à des évènements de démonstration de talents en tant que
                            technicien son. J’ai installé des équipements et je les ai configurés pour que l'événement se passe bien niveau
                            son. Dorénavant, j’aide encore quelques fois quand ils ont besoin d’aide et pour qu’ils évitent de demander un
                            vrai ingénieur son alors que ce n’est pas forcément nécessaire.
                        </p>
                    </div>
                </div>
            </section>
            <section
                class="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity3"
            >
                <div class="activity3">
                    <div class="container-text mr-6">
                        <h2 class="title has-text-white">JavaScript</h2>
                        <p class="has-text-white">
                            Pendant les 4 dernières années j’ai passé la majorité de mon temps à programmer des robots et des scripts pour
                            site web. Contrairement à installer des équipements sons, le plaisir de programmer ne fut pas toujours présent
                            notamment lorsque rien ne marchait lors de mes débuts dans la programmation. Heureusement, cela fut de courte
                            durée.
                        </p>
                    </div>
                </div>
            </section>
            <section
                class="activity-container is-fullheight has-background-dark-black is-align-items-center is-justify-content-center"
                id="activity4"
            >
                <div class="activity4">
                    <div class="container-text ml-6">
                        <h2 class="title has-text-white">Reseau</h2>
                        <p class="has-text-white">
                            Il y a 3 ans, j’ai rejoint une association qui faisait de la vente de services d’hébergement web. J’étais
                            responsable du département support clientèle mais également développeur de logiciels internes grâce à mes
                            connaissances en JavaScript. Cela m’a permis de découvrir le monde des réseaux et des machines en plus de la
                            relation support client.
                        </p>
                    </div>
                </div>
            </section>

            <section id="section1" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor is-flex-mobile is-flex-tablet">
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical">
                                <div className="tile is-child">
                                    <h1 className="title is-1 has-text-white">Some title</h1>
                                    <p className="paragraph has-text-white">Some text</p>
                                </div>
                                <div className="tile is-child">
                                    <div className="buttons">
                                        <a href="/somelink" className="button is-medium is-gay1 is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>Some title</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    {/* <img className='image' src={SomeImage} alt="Some Image" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2" className="hero has-background-dark-black">
                <div className="hero-body">
                    <div className="container">
                        <div className="tile is-ancestor is-flex-mobile is-flex-tablet">
                            {/* Image section */}
                            <div className="tile is-parent">
                                <div className="tile is-child homeImage">
                                    {/* <img className='image' src={SomeImage} alt="Some Image" /> */}
                                </div>
                            </div>
                            {/* Text or buttons section */}
                            <div className="tile is-parent is-3 is-vertical">
                                <div className="tile is-child">
                                    <h1 className="title is-1 has-text-white">Some title</h1>
                                    <p className="paragraph has-text-white">Some text</p>
                                </div>
                                <div className="tile is-child">
                                    <div className="buttons">
                                        <a href="/somelink" className="button is-medium is-gay1 is-outlined">
                                            <span className="icon">
                                                <i className="fas fa-question-circle"></i>
                                            </span>
                                            <span>Some title</span>
                                        </a>
                                    </div>
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
