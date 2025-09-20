import Animate from '../animation/Animate';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <div className="mb-30">
                    <h2>Contact Information</h2>
                    <p>
                        Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties.
                    </p>
                </div>
                <ul>
                    <Animate className="animate__animated animate__fadeInUp">
                        <li>
                            <div className="icon">
                                <i className="fas fa-phone-alt" />
                            </div>
                            <div className="content">
                                <h4 className="title">Hotline</h4>
                                <a href="tel:+4733378901">+4733378901</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-map-marker-alt" />
                            </div>
                            <div className="info">
                                <h4 className="title">Our Location</h4>
                                <p>
                                    55 Main Street, The Grand Avenue 2nd Block, New York City
                                </p>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-envelope-open-text" />
                            </div>
                            <div className="info">
                                <h4 className="title">Official Email</h4>
                                <a href="mailto:info@digital.com.com">info@digital.com</a>
                            </div>
                        </li>
                    </Animate>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;