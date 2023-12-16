import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumOfItems, numOfItemsPacked }) {
    return <header>
        <Logo />
        <Counter totalNumOfItems={totalNumOfItems}
            numOfItemsPacked={numOfItemsPacked}/>
    </header>;
}