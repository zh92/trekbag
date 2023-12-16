export default function Counter({ totalNumOfItems, numOfItemsPacked }) {
    return <p>
        {numOfItemsPacked} / {totalNumOfItems} items packed
    </p>;
}