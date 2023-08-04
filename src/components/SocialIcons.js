import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const SocialIcons = () => {
    return (
        <div className="social-icon">
            <a href="https://linkedin.com/in/liam-kenneth-maeder" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="https://github.com/liammaeder" target="_blank"><img src={navIcon2} alt="Github" /></a>
            <a href="https://facebook.com/Monarkle98" target="_blank"><img src={navIcon3} alt="Facebook" /></a>
        </div>
    )
}