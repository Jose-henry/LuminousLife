import styles from "./impact.module.css"; // Import CSS module

const Impact: React.FC = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.text_div}>
                <h2 className={styles.our_impact}>Our Impact</h2>
                <p className={styles.impact_text}>We are proud of the positive changes we bring to communities. Here are some of our key achievements in empowering lives through sustainable solar energy solutions.</p>
            </div>
            <div className={styles.main_div}>
                <div className={styles.impacts_div}>
                    <div className={styles.impact_div1}>
                        <h3 className={styles.installed}>Solar Panels Installed</h3>
                        <h2 className={styles.value1}>10,000<sup>+</sup></h2>
                        <p className={styles.installed_text}>More than 10,000 solar panels have been installed, bringing sustainable energy to homes, schools, and healthcare facilities.</p>
                    </div>
                    <div className={styles.impact_div2}>
                        <h3 className={styles.reached}>Communities Reached</h3>
                        <h2 className={styles.value2}>50<sup>+</sup></h2>
                        <p className={styles.reached_text}>We have provided solar energy solutions to over 50 communities across Nigeria, improving access to electricity and quality of life.</p>
                    </div>
                    <div className={styles.impact_div3}>
                        <h3 className={styles.reduction}>Reduction in Carbon Footprints</h3>
                        <h2 className={styles.value3}>20,000 Tons</h2>
                        <p className={styles.reduction_text}>We have helped reduce carbon emissions by 20,000 tons annually through our solar energy initiatives.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Impact;
