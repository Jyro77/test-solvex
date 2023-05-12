import { productData } from "./productData";

const ricaProducts = productData.filter(obj => obj.brand === "Rica");

const brandData = [
    {
        id: 1,
        name: "Rica",
        image: "https://bit.ly/3NZNlg9",
        products: [],
    },
];

brandData[0].products.push(ricaProducts);

export default brandData;
