// import PropTypes from 'prop-types'
import PropTypes from 'prop-types';

function Contact(props) {
    console.log(props);
    return (
        <div>
            {props.contact_name}
            <p>{props.parag}</p>
        </div>
    )
}

Contact.propTypes = {
    contact_name: PropTypes.string.isRequired,
    parag: PropTypes.string.isRequired
}

export default Contact