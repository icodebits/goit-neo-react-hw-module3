import styles from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    const handleInputChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className={styles.searchBox}>
            <label htmlFor="search" className={styles.searchLabel}>Find contacts by name</label>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className={styles.searchInput}
            />
        </div>
    )
}

export default SearchBox
