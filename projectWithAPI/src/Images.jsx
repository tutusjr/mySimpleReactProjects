import PropTypes from 'prop-types'
export default function Images({results}) {
  return (

    <div>
        {
            results.map((result,index) => (
                <div className="image-container" key={index}>
                    <img src={result.urls.regular} alt={result.alt_description} />
                </div>
            ))
        }
    </div>

  )
}
Images.propTypes = {
  results: PropTypes.array.isRequired
}