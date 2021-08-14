import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollToTop from 'react-scroll-to-top';

const ScrollButton = () => {

    return (
        <ScrollToTop style={{ right: 60, borderRadius: "5px", boxShadow: "2px 4px #888888", zIndex: 1, color: "gray" }} showUnder={160} >
            <FontAwesomeIcon className="fa-3x" icon={faArrowAltCircleUp} />
        </ScrollToTop>
    );
}

export default ScrollButton;