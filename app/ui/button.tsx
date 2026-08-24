import styles from "@/app/ui/button.module.css";
import { sono } from "@/app/ui/fonts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({children, className, ...rest}: ButtonProps) => { 
    return(
        <button className={`${styles.button}  ${className ?? ""}`} {...rest}>
            {children}
        </button>
    );
}
 
export default Button;
