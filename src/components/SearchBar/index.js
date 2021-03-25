import "./SearchBar.scss";

const SearchBar = ({ ...rest }) => {
  return (

    <div className="searchbar_container">
      <h1>Search a currency</h1>
      <input { ...rest }/>
    </div>
  );
};
export default SearchBar;
