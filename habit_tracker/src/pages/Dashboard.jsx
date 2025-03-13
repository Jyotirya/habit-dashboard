import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../MyComponents/navBar.jsx';
import Profile from './profile.jsx';
import Habits from '../myComponents/habits.jsx';
import { FaBeer } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import Week from '../MyComponents/week.jsx'


const userName = "User";

function getDay() {
    const today = new Date();
    const day = today.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

function getDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${(day<10 ? '0'+day : day)}/${(month<10 ? '0'+month : month)}/${year}`;
}
const quotes = [
    "We first make our habits, and then our habits make us. - John Dryden",
    "Good habits formed at youth make all the difference. - Aristotle",
    "The people you surround yourself with influence your behaviors, so choose friends who have healthy habits. - Dan Buettner",
    "If you are going to achieve excellence in big things, you develop the habit in little matters. - Colin Powell",
    "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun",
    "Chains of habit are too light to be felt until they are too heavy to be broken. - Warren Buffett",
    "We become what we repeatedly do. - Sean Covey",
    "It is easier to prevent bad habits than to break them. - Benjamin Franklin",
    "A habit cannot be tossed out the window; it must be coaxed down the stairs a step at a time. - Mark Twain",
    "Discipline is choosing between what you want now and what you want most. - Abraham Lincoln",
    "First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. - Octavia Butler",
    "Feeling sorry for yourself, and your present condition is not only a waste of energy but the worst habit you could possibly have. - Dale Carnegie",
    "Without struggle, no progress and no result. Every breaking of habit produces a change in the machine. - George Gurdjieff",
    "Habit is a cable; we weave a thread of it each day, and at last we cannot break it. - Horace Mann",
    "Sow an act and you reap a habit. Sow a habit and you reap a character. Sow a character and you reap a destiny. - Charles Reade",
    "We can do anything we want to if we stick to it long enough. - Helen Keller",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Your beliefs become your thoughts, your thoughts become your words, your words become your actions, your actions become your habits, your habits become your values, your values become your destiny. - Mahatma Gandhi",
    "If your habits don't line up with your dream, you either need to change your habits or change your dream. - John Maxwell",
    "Daily deeds determine destiny. - Barney Matthews",
    "Quality is not an act, it is a habit. - Aristotle",
    "Winning is not a sometime thing; it's an all the time thing. You don't win once in a while... you don't do things right once in a while... you do them right all the time. Winning is habit. - Vince Lombardi",
    "Laziness is nothing more than the habit of resting before you get tired. - Jules Renard",
    "Winners make a habit of manufacturing their own positive expectations in advance of the event. - Brian Tracy",
    "The secret to permanently breaking any bad habit is to love something greater than the habit. - Bryant McGill",
    "You leave old habits behind by starting out with the thought, 'I release the need for this in my life.' - Wayne Dyer",
    "I can predict the long-term outcome of your success if you show me your daily habits. - John Maxwell",
    "You cannot expect to attain success if you are not prepared. Life has a habit of giving back rewards in proportion to the effort we expend. - Catherine Pulsifer",
    "Every choice you make is creating your future. Choose wisely. - Joe Tichio",
    "You can't stop the future, you can't rewind the past. The only way to learn the secret is to press play. - Jay Asher",
    "Every action you take is a vote for the type of person you wish to become. - James Clear",
    "You should be far more concerned with your current trajectory than with your current results. - James Clear",
    "Success is the product of daily habits—not once-in-a-lifetime transformations. - James Clear",
    "All big things come from small beginnings. The seed of every habit is a single, tiny decision. - James Clear",
    "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become. - James Clear",
    "Goals are good for setting a direction, but systems are best for making progress. - James Clear",
    "You do not rise to the level of your goals. You fall to the level of your systems. - James Clear",
    "Be the designer of your world and not merely the consumer of it. - James Clear"
]

function Dashboard() {
    

    const [currentDate, setCurrentDate] = useState(getDate());
    return (

        <div className={styles.divmain} >
            {/* navbar-start */}
            <div className={styles.topbar}>
                <Navbar input="dashboard"/>
            </div>
            {/* navbar - end */}
            <div className={styles.mainContent}>
                {/* sidebar - start */}
                <div className={styles.sideBar}>
                    <Habits/>
                </div>
                {/* sidebar - end */}

                {/* right div -start */}
                <div className={styles.rightDiv}>
                    {/* right above bar- start */}
                    <div className={styles.rightTopBar}>
                        <div className={styles.date}>
                            <div className={styles.secDiv}>
                                <h1>{currentDate}</h1>
                                <h2>{getDay()}</h2>
                            </div>
                        </div>
                        <div className={styles.streak}>
                            <div className={styles.average}></div>
                            <div className={styles.currStreak}></div>
                            <div className={styles.bestHabit}></div>
                        </div>
                    </div>
                    {/* right above bar- end */}
                    <div className={styles.rightBottomMain}>
                        {/* this code below is for analysis of week. */}
                            <Week />
                    </div>
                </div>
                {/* right div - end */}
            </div>
            
        </div >
    );
}

export default Dashboard;