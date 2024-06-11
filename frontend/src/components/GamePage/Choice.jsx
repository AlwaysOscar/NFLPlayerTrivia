import styles from './Choice.module.css';

// Import team logos
import Bills from "../../assets/game/team_logos/bills_logo.png";
import Dolphins from "../../assets/game/team_logos/dolphins_logo.png";
import Patriots from "../../assets/game/team_logos/patriots_logo.png";
import Jets from "../../assets/game/team_logos/jets_logo.png";
import Ravens from "../../assets/game/team_logos/ravens_logo.png";
import Bengals from "../../assets/game/team_logos/bengals_logo.png";
import Browns from "../../assets/game/team_logos/browns_logo.png";
import Steelers from "../../assets/game/team_logos/steelers_logo.png";
import Texans from "../../assets/game/team_logos/texans_logo.png";
import Colts from "../../assets/game/team_logos/colts_logo.png";
import Jaguars from "../../assets/game/team_logos/jaguars_logo.png";
import Titans from "../../assets/game/team_logos/titans_logo.png";
import Broncos from "../../assets/game/team_logos/broncos_logo.png";
import Chiefs from "../../assets/game/team_logos/chiefs_logo.png";
import Raiders from "../../assets/game/team_logos/raiders_logo.png";
import Chargers from "../../assets/game/team_logos/chargers_logo.png";
import Cowboys from "../../assets/game/team_logos/cowboys_logo.png";
import Giants from "../../assets/game/team_logos/giants_logo.png";
import Eagles from "../../assets/game/team_logos/eagles_logo.png";
import Commanders  from "../../assets/game/team_logos/commanders_logo.png";
import Bears from "../../assets/game/team_logos/bears_logo.png";
import Lions  from "../../assets/game/team_logos/lions_logo.png";
import Packers  from "../../assets/game/team_logos/packers_logo.png";
import Vikings from "../../assets/game/team_logos/vikings_logo.png";
import Falcons from "../../assets/game/team_logos/falcons_logo.png";
import Panthers from "../../assets/game/team_logos/panthers_logo.png";
import Saints from "../../assets/game/team_logos/saints_logo.png";
import Buccaneers from "../../assets/game/team_logos/buccaneers_logo.png";
import Cardinals from "../../assets/game/team_logos/cardinals_logo.png";
import Rams from "../../assets/game/team_logos/rams_logo.png";
import Francisco from "../../assets/game/team_logos/49ers_logo.png";
import Seahawks from "../../assets/game/team_logos/seahawks_logo.png";


const Choice = ({ options, showResult, selectedOption, handleOptionClick }) => {
    // Mapping object for team names to logo paths
    const teamLogoMap = {
        "Buffalo Bills": Bills,
        "Miami Dolphins": Dolphins,
        "New England Patriots": Patriots, 
        "New York Jets": Jets, 
        "Baltimore Ravens": Ravens, 
        "Cincinnati Bengals": Bengals, 
        "Cleveland Browns": Browns, 
        "Pittsburgh Steelers": Steelers, 
        "Houston Texans": Texans, 
        "Indianapolis Colts": Colts, 
        "Jacksonville Jaguars": Jaguars, 
        "Tennessee Titans": Titans, 
        "Denver Broncos": Broncos,
        "Kansas City Chiefs": Chiefs, 
        "Las Vegas Raiders": Raiders, 
        "Los Angeles Chargers": Chargers, 
        "Dallas Cowboys": Cowboys,
        "New York Giants": Giants, 
        "Philadelphia Eagles": Eagles, 
        "Washington Commanders": Commanders, 
        "Chicago Bears": Bears,
        "Detroit Lions": Lions, 
        "Green Bay Packers": Packers, 
        "Minnesota Vikings": Vikings, 
        "Atlanta Falcons": Falcons,
        "Carolina Panthers": Panthers, 
        "New Orleans Saints": Saints, 
        "Tampa Bay Buccaneers": Buccaneers,
        "Arizona Cardinals": Cardinals, 
        "Los Angeles Rams": Rams, 
        "San Francisco 49ers": Francisco, 
        "Seattle Seahawks": Seahawks,
    };

    return (
        <div className={styles.body}>
            {options.map((option) => (
                <div
                    key={option.id}
                    className={`${styles.choice} 
                    ${showResult && option.isCorrect ? styles.correct : ''} 
                    ${showResult && selectedOption && !option.isCorrect && option === selectedOption ? styles.wrong : ''}`}
                    onClick={() => handleOptionClick(option)}
                >
                    <img
                        src={teamLogoMap[option.team]} // Dynamically select the logo based on the team name
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
    );
};

export default Choice;