import '../App.css'
import '../styles/About.css';
import me from '../images/me.jpg';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/icofont/icofont.min.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/venobox/venobox.css';
{/* <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'> */}

function About() {

    const colors = {
        blue: 'var(--blue)',
        green: 'var(--teal)',
        red: 'var(--red)',
        yellow: 'var(--yellow)',
    }

    return (
        <>
            <section id="about" className="about section_show">
                {/* <h1>ABOUT</h1> */}

                <div className="about_me container">
                    <div className="section_title">
                        <h2>About</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade_right"> 
                            <img src={me} className="img_fluid" alt="My image" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">  
                            <p>Hello, my name is João Paulo, Im Junior Developer in a learning process focused on systems development.</p>

                            <div className="social_links">
                                <a href="https://www.github.com/vortexzjs" target="_blank" className="github">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox='0 0 24 24'><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z" fill="currentColor"></path></svg>
                                </a>
                                <a href="mailto:jpumberto@gmail.com" target="_blank" className="google">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox='0 0 24 24'><path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
                                </a>
                                <a href="https://www.x.com/joaoandrexz" target="_blank" className="github">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox='0 0 24 24'><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="interests container">
                    <div className="section_title">
                        <h2>Interests</h2>
                    </div>

                    <div className='row'>
                        <div className="col-lg-3 col-md-4"> 
                            <div className="icon_box">
                                <svg className='ri_global_line' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill={colors.yellow} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.008 8.008 0 0 0 4.062 11m5.969 0h3.938A15.905 15.905 0 0 0 12 4.248A15.905 15.905 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667"></path></svg>
                                {/* <i className="ri-global-line" style="color: #ffbb2c;"></i> */}
                                <h3>Back-end</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon_box">
                                <svg className='ri-global-line' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill={colors.blue} d="M12 21q-3.775 0-6.387-1.162T3 17V7q0-1.65 2.638-2.825T12 3t6.363 1.175T21 7v10q0 1.675-2.613 2.838T12 21m0-11.975q2.225 0 4.475-.638T19 7.025q-.275-.725-2.512-1.375T12 5q-2.275 0-4.462.638T5 7.025q.35.75 2.538 1.375T12 9.025M12 14q1.05 0 2.025-.1t1.863-.288t1.675-.462T19 12.525v-3q-.65.35-1.437.625t-1.675.463t-1.863.287T12 11t-2.05-.1t-1.888-.288T6.4 10.15T5 9.525v3q.625.35 1.4.625t1.663.463t1.887.287T12 14m0 5q1.15 0 2.338-.175t2.187-.462t1.675-.65t.8-.738v-2.45q-.65.35-1.437.625t-1.675.463t-1.863.287T12 16t-2.05-.1t-1.888-.288T6.4 15.15T5 14.525V17q.125.375.788.725t1.662.638t2.2.462T12 19"></path></svg>
                                {/* <i className="ri-database-2-line" style="color: #5578ff;"></i> */}
                                <h3>Databases</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon_box">
                                <svg className='ri-global-line' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill={colors.green} d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path></svg>
                                {/* <i className="ri-image-line" style="color: #ffc107;"></i> */}
                                <h3>Front-end</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About