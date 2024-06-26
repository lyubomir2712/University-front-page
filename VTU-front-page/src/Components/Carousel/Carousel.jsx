import './Carousel.module.css'
import Logo from './../../assets/Logo.png'
import styles from './Carousel.module.css'

function Carousel() {

    return(
        <>
            <form>

                <input type="radio" name="fancy" autoFocus value="clubs" id="clubs"/>
                <input type="radio" name="fancy" value="hearts" id="hearts"/>
                <input type="radio" name="fancy" value="spades" id="spades"/>
                <input type="radio" name="fancy" value="diamonds" id="diamonds"/>
                <label htmlFor="clubs"></label><label htmlFor="hearts"></label><label
                htmlFor="spades"></label><label htmlFor="diamonds"></label>
            </form>
        </>
    )
}

export default Carousel