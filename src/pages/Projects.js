import React, { useEffect, useState } from 'react';
import projectsData from '../projects.json';
import DynamicImage from '../components/DynamicImage';

const ProjectPage = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');
    const [loaded, setLoaded] = useState(false);

    const goToPreviousProject = () => {
        if (currentProjectIndex > 0) {
            setCurrentProjectIndex(currentProjectIndex - 1);
            setSlideDirection('slide-right');
        }
    };

    const goToNextProject = () => {
        if (currentProjectIndex < projectsData.length - 1) {
            setCurrentProjectIndex(currentProjectIndex + 1);
            setSlideDirection('slide-left');
        }
    };

    // get the param #id from the url and set the currentProjectIndex
    if (!loaded) {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('#') + 1);
        // eslint-disable-next-line
        const index = projectsData.findIndex((project) => project.id == id);
        if (index !== -1) {
            setCurrentProjectIndex(index);
            setLoaded(true);
        }
    }

    useEffect(() => {

        if (currentProjectIndex === 0) document.querySelector('.navbar-start .navbar-item').classList.add('is-hidden');
        else document.querySelector('.navbar-start .navbar-item').classList.remove('is-hidden');

        if (currentProjectIndex === projectsData.length - 1) document.querySelector('.navbar-end .navbar-item').classList.add('is-hidden');
        else document.querySelector('.navbar-end .navbar-item').classList.remove('is-hidden');
    }, [currentProjectIndex]);

    const currentProject = projectsData[currentProjectIndex];

    return (
        <>
            <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-menu is-active is-flex is-justify-content-center">
                    <div className="navbar-start">
                        {/*eslint-disable-next-line*/}
                        <a className="navbar-item" onClick={goToPreviousProject}>
                            <i className="fas fa-chevron-left"></i>
                        </a>
                    </div>

                    <div className="navbar-end">
                        {/*eslint-disable-next-line*/}
                        <a className="navbar-item" onClick={goToNextProject}>
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </nav>

            <div id={currentProject.id} className={`container is-fluid project-container ${slideDirection}`}>
                <div className="columns">
                    <div className="column is-three-quarters">
                        <DynamicImage fileName={currentProject.image} alt={currentProject.title} />
                    </div>
                    <div className="column  is-flex is-align-items-center is-flex-direction-column">
                        <h1 className="title">{currentProject.title}</h1>
                        <p className="subtitle">{currentProject.description}</p>
                        <div className="tags">
                            {currentProject.tags.map((tag) => (
                                <span className="tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="buttons">
                            {currentProject.links.map((link) => (
                                <a href={link.url} className="button is-black has-text-white is-small" key={link.name}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="columns mt-5">
                    <div className="column">
                        <h1 className="title">{currentProject.title2}</h1>
                        <p className="subtitle">{currentProject.description2}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
