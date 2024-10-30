import PropTypes from 'prop-types'

const Title = (props) => {
  const { title, subtitle } = props

  const formatLastWord = (text) => {
    const words = text.split(' ')
    const lastWord = words.pop()
    return (
      <>
        {words.join(' ')} <span className="text-primary">{lastWord}</span>
      </>
    )
  }

  return (
    <div className='py-20'>
      <h2 className="text-4xl font-bold text-center">{formatLastWord(title)}</h2>
      <p className="text-center">{subtitle}</p>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Title