import PropTypes from 'prop-types';
export default function SearchHeader({search}) {
  
    const handleSubmitForm = (e) => {
        e.preventDefault();
        search(e.target.arama.value);
    }

  return (
    <div>
      <form onSubmit={handleSubmitForm} className="search-form">
        <label htmlFor="arama">
            ne arion
          <input  id="arama" name="arama" type="text" placeholder="Search..." />
        </label>
        <button type="submit" >submit</button>
      </form>
    </div>
  );
}


SearchHeader.propTypes = {
  search: PropTypes.func.isRequired 
}

