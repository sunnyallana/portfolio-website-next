
const FooterComponent = () => {
    return (
        <section id="footer-section" className="footer-section-container">
            <div className="footer-text-container">    
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} This website was developed by Sunny Shaban Ali. All rights reserved.
                </p>
            </div>
        </section>
    );
}

export default FooterComponent;
