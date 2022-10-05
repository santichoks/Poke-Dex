import './search-box.css';

const SearchBox = ({ onSearchChange, placeholder, className }) => {   
    return (
        <div>
            <input 
                className={className} 
                type='search' 
                placeholder={placeholder}
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox