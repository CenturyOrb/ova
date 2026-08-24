import styles from "@/app/ui/button.module.css";
import { sono } from "@/app/ui/fonts";

const Button = ({children, className, ...rest}: ButtonProps) => { 
    return(
        <button className={`${styles.button}  ${className ?? ""}`} {...rest}>
            {children}
        </button>
    );
}
 
export default Button;
