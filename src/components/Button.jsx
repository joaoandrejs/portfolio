import PropTypes from 'prop-types';

function Button({ href, Svg, text, style, SecondarySVg }) { 
    return (
            <a className='button hover click' href={href} style={style} target='_blank' rel='noreferrer'>
                <div className='contents'>
                    
                    <div className='align-left svg-content'>
                        <Svg className='icon' />
                    </div>

                    <p>{text}</p>

                    <div className='right-align'>
                        {SecondarySVg ?? <svg className='align-right' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="var(--text-color)" strokeWidth="1.5"/>
                        </svg>}

                    </div>
                </div>
            </a>
    )
}

Button.propTypes = {
    href: PropTypes.string.isRequired,
    Svg: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    SecondarySVg: PropTypes.element,
};

export default Button;