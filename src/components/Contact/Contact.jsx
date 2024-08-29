import { FaUser, FaPhone } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <FaUser className={styles.icon} />
          <span className={styles.contactName}>{name}</span>
        </div>
        <div className={styles.contactInfo}>
          <FaPhone className={styles.icon} />
          <span className={styles.contactNumber}>{number}</span>
        </div>
      </div>
      <div className={styles.deleteButtonContainer}>
        <button
          className={styles.deleteButton}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Contact