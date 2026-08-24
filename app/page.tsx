import Image from "next/image";
import styles from "@/app/home.module.css";
import Button from "@/app/ui/button";
import Map from "@/public/map.png";
import EcosystemGrid from "@/app/ui/home/ecosystem-grid";

export default function Home() {
  return (
    <main className={styles.homepage}>
        <section className={styles.hero}>
            <h1>Build where you stand.</h1>
            <p className={styles.hero_descDesk}>OYA Entertainment is the architectural infrastructure for the creative economy. We represent the disruptive power of talent that isn't confined by geography, redefining entertainment industry for a grounded, global future.</p>
            <p className={styles.hero_descMob}>OYA Entertainment powers a global creative economy, connecting bold talent beyond borders.</p>
        <div className={styles.hero_buttons}>
            <Button className={styles.work_button}>Work with us</Button>
            <Button className={styles.cities_button}>See our cities</Button>
        </div>
        </section>
        <section className={styles.systemic_friction}>
            <div className={styles.geo_tax}>
                <p >THE SYSTEMIC FRICTION</p>
                <h1> The Geography Tax</h1>
                <Image
                    src="/map.png"
                    width={767}
                    height={444}
                    alt="Map"
                    className={styles.mapMobile}
                />
                <p>Talent is everywhere. But for too long, the industry has dictated that opportunity is limited to four specific zip codes. This is the "Geography Tax"—the invisible cost paid by creatives born in overlooked markets.</p>
                <p>We believe the next global movement is already happening in your hometown. We provide the tools to build it without leaving your roots.</p> 
            </div>
            <Image
                src="/map.png"
                width={767}
                height={444}
                alt="Map"
                className={styles.mapDesktop}
            />
        </section>
        <section className={styles.ecosystem}>
            <div className={styles.ecosystem_header}>
                <p>OUR ECOSYSTEM</p> 
                <h1>Infrastructure for <br />Creators.</h1>
                <p>BUILT TO LAST</p>
            </div>
            <EcosystemGrid />
        </section>
        <section className={styles.storms}> 
            <div>
            <h1>Storms don't ask permission.</h1>
            <h1>Neither should you.</h1>
            </div>
            <Button className={styles.storms_button}>JOIN THE MOVEMENT</Button>
        </section>
        <section className={styles.services}>
            <h1>OYA Services</h1>
            <div className={styles.service_section}>
            <p className={styles.service}>DIRECTION <span className={styles.description}>Know your next move before you make it.</span></p>
            <div className={styles.divider}>
                <div>
                <p className={styles.item}>Strategy Consult <span className={styles.priceMob}>$150</span></p>
                <p className={styles.item_description}>One focused session on your release or your next ove. You leave with a plan.</p>
                </div>
                <div className={styles.pricing}>
                    <p className={styles.priceDesk}>$150</p>
                    <p>PER SECTION | 60 TO 90 MIN</p>
                </div>
            </div>
            <div className={styles.divider}>
                <div>
                <p className={styles.item}>Artist Development Roadmap <span className={styles.priceMob}>$300</span></p>
                <p className={styles.item_description}>Your full 12 month path, mapped end to end and sequenced.</p>
                </div>
                 <div className={styles.pricing}>
                    <p className={styles.priceDesk}>$300</p>
                    <p>FOR 12 MONTHS | ONE WEEK</p>
                </div>   
            </div>
            </div>
            <div className={styles.service_section}>
                <p className={styles.service}>RELEASE <span className={styles.description}>Get the music out, and out right.</span></p>
                <div className={styles.divider}>
                <div>
                <p className={styles.item}>Release Rollout Plan <span className={styles.priceMob}>$500</span></p>
                <p className={styles.item_description}>Timeline, assets, and targets for your single EP. You run it.</p>
                </div>
                <div className={styles.pricing}>
                    <p className={styles.priceDesk}>$500</p>
                    <p>PER PLAN | 3 TO 5 DAYS</p>
                </div>
                </div>
                 <div className={styles.divider}>
                <div>
                <p className={styles.item}>Release Management <span className={styles.priceMob}>$900</span></p>
                <p className={styles.item_description}>We run the whole rollout for you. you stay on the music.</p>
                </div>
                <div className={styles.pricing}>
                    <p className={styles.priceDesk}>$900</p>
                    <p>PER RELEASE | FULL CYCLE</p>
                </div>
                </div>
            </div>
            <div className={styles.service_section}>
                <p className={styles.service}>LIVE <span className={styles.description}>Make the room real.</span></p>
                <div className={styles.divider}>
                <div>
                <p className={styles.item}>Event Curation Consult <span className={styles.priceMob}>$200</span></p>
                <p className={styles.item_description}>Bring your idea. Leave witha  plan to fill a room and run the night.</p>
                </div>
                <div className={styles.pricing}>
                    <p className={styles.priceDesk}>$200</p>
                    <p>PER SESSION | 60 TO 90 MIN</p>
                </div>
                </div>
                <div className={styles.divider}>
                <div>
                <p className={styles.item}>Release Party or Show Curation <span className={styles.priceMob}>$1200</span></p>
                <p className={styles.item_description}>Venue, lineup, run of show, promo plan. Handed to you ready to run.</p>
                </div>
                <div className={styles.pricing}>
                    <p className={styles.priceDesk}>$1200</p>
                    <p>PER EVENT | ABOUT ONE WEEK</p>
                </div>
                </div> 
                <div className={styles.divider}>
                <div>
                <p className={styles.item}>FULL EVENT PRODUCTION <span className={styles.priceMob}>$3000</span></p>
                <p className={styles.item_description}>We build it and run it, down to the day of. Flat, or flat plus the door.</p>
                </div>
                <div className={styles.pricing}>
                    <p className={styles.priceDesk}>from $3000</p>
                    <p>PLUS VENUE COSTS | 2 TO 4 WEEKS</p>
                </div>
                </div>
            </div>
            <div className={styles.service_section}>
                <p className={styles.service}>PACKAGES</p>
                <div className={styles.divider}>
                    <p className={styles.package}>The Setup <span>| Consult + Rollout Plan</span></p>
                    <p className={styles.package_price}>$550</p>
                </div>
                <hr />
                <div className={styles.divider}>
                    <p className={styles.package}>The Rollout <span>| Roadmap + Release Magagement</span></p>
                    <p className={styles.package_price}>$1000</p>
                </div>
                <hr />
                <div className={styles.divider}>
                    <p className={styles.package}>The Moment <span>| Roadmap + Release Management + Release Party</span></p>
                    <p className={styles.package_price}>$2400</p>
                </div>
                <hr />
                <div className={styles.divider}>
                    <p className={styles.package}>The Storm <span>| Roadmap + Release Management + Full Production</span></p>
                    <p className={styles.package_price}>from $3900</p>
                </div>
            </div>
        </section>
    </main>
  );
}
