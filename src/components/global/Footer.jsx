import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import gmail from '../../assets/gmail-footer.svg';
import '../../styles/footer.css';
const Footer = () => {
    return (
        <>
        <div>
        <footer class="d-flex justify-content-around">
        <p class="text-right">@2020 by Salomé Kuitca</p>
        <div>
            <a href="https://github.com/salokuitca" target="_blank"><img src={github} alt="logo de github"
                    title="logo-github"/></a>
            <a href="https://www.linkedin.com/in/salomekuitca/" target="_blank"><img src={linkedin}
                    alt="logo de linkedin" title="logo-linkedin"/></a>
            <a href="mailto:salokuitca@gmail.com" target="_blank"><img src={gmail} alt="logo de gmail"
                    title="logo-gmail"/></a>
        </div>

    </footer>
        </div>
        </>
    )
}

export default Footer;