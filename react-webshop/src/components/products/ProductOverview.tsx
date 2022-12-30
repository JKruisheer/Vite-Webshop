import {Button} from "@chakra-ui/react";
import {FC} from "react";

interface ProductOverviewInput {
    increaseItemsOrdered: (value: number) => void,
    test: string
}

const ProductOverview: FC<ProductOverviewInput>  = ({increaseItemsOrdered, test}) => {

    function updateNoteBook() {
        increaseItemsOrdered(5);
    }

    return (
        <div>
            <p>I am the product overview</p>
            <p>value : {test}</p>
            <Button onClick={() => updateNoteBook()}>Update number in basket</Button>
        </div>

    )
}

export default ProductOverview;