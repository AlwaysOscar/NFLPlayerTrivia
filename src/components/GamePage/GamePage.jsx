import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GamePage.module.css';
import { Link } from 'react-router-dom';
import homeIcon from "../../assets/game/home_icon.png";
import nflLogo from "../../assets/game/nfl_logo.png";
import dolphinsLogo from "../../assets/game/team_logos/dolphins_logo.png";
import lionsLogo from "../../assets/game/team_logos/lions_logo.png";
import billsLogo from "../../assets/game/team_logos/bills_logo.png";
import saintsLogo from "../../assets/game/team_logos/saints_logo.png";
import raidersLogo from "../../assets/game/team_logos/raiders_logo.png";
import ravensLogo from "../../assets/game/team_logos/ravens_logo.png";
import texansLogo from "../../assets/game/team_logos/texans_logo.png";
import eaglesLogo from "../../assets/game/team_logos/eagles_logo.png";
import broncosLogo from "../../assets/game/team_logos/broncos_logo.png";
import ramsLogo from "../../assets/game/team_logos/rams_logo.png";
import tuaTagovailoaImg from "../../assets/game/players_images/tua_tagovailoa.png";
import jaredGoffImg from "../../assets/game/players_images/jared_goff.png";
import joshAllenImg from "../../assets/game/players_images/josh_allen.png";
import derekCarrImg from "../../assets/game/players_images/derek_carr.png";
import jimmyGaroppoloImg from "../../assets/game/players_images/jimmy_garoppolo.png";
import lamarJacksonImg from "../../assets/game/players_images/lamar_jackson.png";
import cjStroudImg from "../../assets/game/players_images/cj_stroud.png";
import jalenHurtsImg from "../../assets/game/players_images/jalen_hurts.png";
import russellWilsonImg from "../../assets/game/players_images/russell_wilson.png";
import matthewStaffordImg from "../../assets/game/players_images/matthew_stafford.png";

const questionsData = [
    {
        id: 1,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Tua Tagovailoa", team: "dolphins", position: "Quarterback", pass_yrds: 4624, isCorrect: true, img: tuaTagovailoaImg, logo: dolphinsLogo },
            { id: 2, name: "Jared Goff", team: "lions", position: "Quarterback", pass_yrds: 4575, isCorrect: false, img: jaredGoffImg, logo: lionsLogo }
        ]
    },
    {
        id: 2,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Josh Allen", team: "bills", position: "Quarterback", pass_yrds: 4306, isCorrect: true, img: joshAllenImg, logo: billsLogo },
            { id: 2, name: "Derek Carr", team: "saints", position: "Quarterback", pass_yrds: 3878, isCorrect: false, img: derekCarrImg, logo: saintsLogo }
        ]
    },
    {
        id: 3,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Jimmy Garoppolo", team: "raiders", position: "Quarterback", pass_yrds: 1205, isCorrect: false, img: jimmyGaroppoloImg, logo: raidersLogo },
            { id: 2, name: "Lamar Jackson", team: "ravens", position: "Quarterback", pass_yrds: 3678, isCorrect: true, img: lamarJacksonImg, logo: ravensLogo }
        ]
    },
    {
        id: 4,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "CJ Stroud", team: "texans", position: "Quarterback", pass_yrds: 4108, isCorrect: true, img: cjStroudImg, logo: texansLogo },
            { id: 2, name: "Jalen Hurts", team: "eagles", position: "Quarterback", pass_yrds: 3858, isCorrect: false, img: jalenHurtsImg, logo: eaglesLogo }
        ]
    },
    {
        id: 5,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Russell Wilson", team: "broncos", position: "Quarterback", pass_yrds: 3070, isCorrect: false, img: russellWilsonImg, logo: broncosLogo },
            { id: 2, name: "Matthew Stafford", team: "rams", position: "Quarterback", pass_yrds: 3965, isCorrect: true, img: matthewStaffordImg, logo: ramsLogo }
        ]
    }
];

const GamePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setShowResult(false);
        setSelectedOption(null);
    }, [currentQuestionIndex]);

    const handleOptionClick = (option) => {
        if (showResult) {
            navigateToNextQuestion();
        } else {
            if (option.isCorrect) {
                setScore((prevScore) => prevScore + 1);
            }
            setShowResult(true);
            setSelectedOption(option);
        }
    };

    const navigateToNextQuestion = () => {
        if (currentQuestionIndex < questionsData.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            navigate('/end', { state: { score } });
        }
    };

    const shuffleOptions = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    const currentQuestion = questionsData[currentQuestionIndex];

    return (
        <section className={styles.mainContainer}>
            <nav id="navbar" className={styles.nav}>
                <Link to="/">
                    <img src={homeIcon} alt="Home Icon" className={styles.homeImg} />
                </Link>
                <img src={nflLogo} alt="NFL Logo" className={styles.logoImg} />
                <div className={styles.scoreBoard}>
                    <h1>{currentQuestionIndex + 1} / {questionsData.length}</h1>
                </div>
            </nav>

            <h1>Question #{currentQuestionIndex + 1}</h1>
            <p>{currentQuestion.question}</p>

            <div className={styles.body}>
                {shuffleOptions(currentQuestion.options).map((option) => (
                    <div
                        key={option.id}
                        className={`${styles.choice} 
                        ${showResult && option.isCorrect ? styles.correct : ''} 
                        ${showResult && selectedOption && !option.isCorrect && option === selectedOption ? styles.wrong : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        <img
                            src={option.logo}
                            alt="Team Logo Image"
                            className={styles.teamLogoImg}
                        />
                        <img
                            src={option.img}
                            alt="Player Image"
                            className={option.id % 2 ? styles.leftPlayerImg : styles.rightPlayerImg}
                        />
                        <h1>{option.name}</h1>
                    </div>
                ))}
                <div className={styles.orIcon}> OR </div>
            </div>
        </section>
    );
};

export default GamePage;