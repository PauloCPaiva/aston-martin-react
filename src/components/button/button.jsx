import styles from "../button/button.module.css"

const Button = (props, link) => {
    return(
        <div className={styles.WrapperButton}>
            <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    )
}
export default Button;