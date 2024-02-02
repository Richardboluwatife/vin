import PropTypes from 'prop-types'

function About(props) {
    console.log(props);
    return (
        <div>
            {props.title_name}
            <p>{props.paragraph}</p>
        </div>
    )
}

About.propTypes = {
    title_name: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
}

export default About