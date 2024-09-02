"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

const musicFilePath = '/music/music.mp3';

const BannerComponent = () => {
    const [settingsClicked, setSettingsClicked] = useState(false);
    const [musicPlaying, setMusicPlaying] = useState(false);

    // Memoize the audio object to avoid re-creating it on every render
    const audioRef = useMemo(() => {
        if (typeof window !== 'undefined') {
            return new Audio(musicFilePath);
        }
        return null;
    }, []);

    const handleMusicClick = useCallback(() => {
        if (!audioRef) return;

        if (musicPlaying) {
            audioRef.pause();
            audioRef.currentTime = 0;
        } else {
            audioRef.play();
        }
        setMusicPlaying(prev => !prev);
    }, [musicPlaying, audioRef]);

    const handleSettingsClick = useCallback(() => {
        setSettingsClicked(prev => !prev);
    }, []);

    useEffect(() => {
        // Cleanup audio when component unmounts
        return () => {
            if (audioRef) {
                audioRef.pause();
                audioRef.currentTime = 0;
            }
        };
    }, [audioRef]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={8} xl={9}>
                        <h2>
                            <span className="word-jelly">
                                <p className="jelly-effect">H</p>
                                <p className="jelly-effect">e</p>
                                <p className="jelly-effect">l</p>
                                <p className="jelly-effect">l</p>
                                <p className="jelly-effect">o</p>
                                <p className="jelly-effect">!</p>
                            </span>
                            &nbsp;
                            <span className="word-jelly">
                                <p className="jelly-effect">I</p>
                                <p className="jelly-effect">&apos;</p>
                                <p className="jelly-effect">m</p>
                            </span>
                            &nbsp;
                        </h2>
                        <h1 className="flowing-linear-gradient">
                            <span className="word-jelly">
                                <p className="jelly-effect">S</p>
                                <p className="jelly-effect">u</p>
                                <p className="jelly-effect">n</p>
                                <p className="jelly-effect">n</p>
                                <p className="jelly-effect">y</p>
                            </span>
                            &nbsp;
                            <span className="word-jelly">
                                <p className="jelly-effect">S</p>
                                <p className="jelly-effect">h</p>
                                <p className="jelly-effect">a</p>
                                <p className="jelly-effect">b</p>
                                <p className="jelly-effect">a</p>
                                <p className="jelly-effect">n</p>
                            </span>
                            &nbsp;
                            <span className="word-jelly">
                                <p className="jelly-effect">A</p>
                                <p className="jelly-effect">l</p>
                                <p className="jelly-effect">i</p>
                            </span>
                        </h1>
                        <h1>
                            <span className="word-jelly">
                                <p className="jelly-effect">W</p>
                                <p className="jelly-effect">e</p>
                                <p className="jelly-effect">b</p>
                            </span>
                            &nbsp;
                            <span className="word-jelly">
                                <p className="jelly-effect">D</p>
                                <p className="jelly-effect">e</p>
                                <p className="jelly-effect">v</p>
                                <p className="jelly-effect">e</p>
                                <p className="jelly-effect">l</p>
                                <p className="jelly-effect">o</p>
                                <p className="jelly-effect">p</p>
                                <p className="jelly-effect">e</p>
                                <p className="jelly-effect">r</p>
                            </span>
                            &nbsp;
                            <p className="jelly-effect">&amp;</p>
                            &nbsp;
                            <span className="word-jelly">
                                <p className="jelly-effect">A</p>
                                <p className="jelly-effect">I</p>
                            </span>
                            &nbsp;
                            <span className="word-jelly">
                                <p className="jelly-effect">E</p>
                                <p className="jelly-effect">n</p>
                                <p className="jelly-effect">g</p>
                                <p className="jelly-effect">i</p>
                                <p className="jelly-effect">n</p>
                                <p className="jelly-effect">e</p>
                                <p className="jelly-effect">e</p>
                                <p className="jelly-effect">r</p>
                            </span>
                        </h1>
                        <button 
                            className="glass-morphism-button" 
                            onClick={() => window.open('mailto:study.sunnyallana@gmail.com')}
                            aria-label="Send an email"
                        >
                            <strong>Let&rsquo;s Chat</strong>
                        </button>
                        
                        <span 
                            id="settings-button" 
                            onClick={handleSettingsClick}
                            className={`settings-button ${settingsClicked ? 'settings-button-rotate' : ''}`}
                            aria-label={settingsClicked ? "Close settings" : "Open settings"}
                        >  
                            <SettingsRoundedIcon fontSize="large"/>
                        </span>
                        
                        <div className={`music-theme-container ${settingsClicked ? 'music-theme-container-slide' : ''}`}>
                            <span 
                                onClick={handleMusicClick} 
                                className="music-icon"
                                aria-label={musicPlaying ? "Pause music" : "Play music"}
                            >  
                                {musicPlaying ? <MusicNoteIcon fontSize="large"/> : <MusicOffIcon fontSize="large"/>}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BannerComponent;