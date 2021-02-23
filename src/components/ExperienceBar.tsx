export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div> 
                {/* On a laissé le style ici, parce que c'est une variable qui va changer, contrairement aux styles dans le fichier css */}
                <div style={{ width: '50%'}}/>

                <span className="current-experience" style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}