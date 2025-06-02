import green from "../assets/produtores/green.png";
import grow from "../assets/produtores/grow.png";
import jannyJack from "../assets/produtores/jenny-jack.png";
import potager from "../assets/produtores/potager.png";
import salad from "../assets/produtores/salad.png";

const randomResult = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const producers = {
    title: "Produtores",
    list: [
        {
            name: "Green",
            image: green,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Grow",
            image: grow,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Janny Jack Farm",
            image: jannyJack,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Potager",
            image: potager,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Salad",
            image: salad,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
    ]
}

export default producers;