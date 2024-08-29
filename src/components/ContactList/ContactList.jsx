import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

const ContactList = ({ contacts }) => {
    return (
        <ul className={styles.contactList}>
            {contacts.map(contact => (
                <Contact key={contact.id} name={contact.name} number={contact.number} />
            ))}
        </ul>
    )
}

export default ContactList