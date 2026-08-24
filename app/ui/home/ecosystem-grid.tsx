import styles from "./ecosystemgrid.module.css";

const EcosystemGrid = () => { 
    return(
        <div className={styles.grid}>
            <div>
                <h1>Management</h1>
                <p>Strategic career architecture for artists who refuse to be a flash in the pan.</p>
            </div>
            <div>
                <h1>Distribution</h1>
                <p>Global reach with local context. We put your sound exactly where it needs to land.</p>
            </div>
            <div>
                <h1>Sync</h1>
                <p>Connecting your sonic identity with visual storytellers worldwide.</p>
            </div>
            <div>
                <h1>Booking</h1>
                <p>Securing stages that matter. No vanity gigs, only strategic market growth.</p>
            </div>
            <div>
                <h1>Live Events</h1>
                <p>Proprietary touring models and unique venue experiences designed for connection, not just consumption.</p>
            </div>
            <div>
                <h1>Marketing</h1>
                <p>Lorem Ipsum</p>
            </div>
        </div>
    );
}

export default EcosystemGrid;
