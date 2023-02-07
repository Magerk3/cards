import { Card } from "./components/Card";
import "./App.css";
import { useState } from "react";

function App() {
    const [cards, setCards] = useState([
        {
            img: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
            title: "Card Title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            buttonName: "Go somewhere",
            buttonRef: "#",
        },
    ]);

    return (
        <div className="App">
            {cards.map((card) => (
                <Card
                    
                    title={card.title}
                    text={card.text}
                    buttonName={card.buttonName}
                    buttonRef={card.buttonRef}
                >
                {card.img}

                </Card>
            ))}
        </div>
    );
}

export default App;
