import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
    {
        id: 1,
        text: "When I began looking for the best center for Max I chose Medicol. You are the best. Many thanks to you and your warm,concerned staff for providing a safe haven for Max and giving me much needed respite. We will see how his nasty disease progresses and if possible will send him again next summer ...",
        name: "Reta Schmidt",
        role: "Patient",
        image: "./images/test-1.png",
    },
    {
        id: 2,
        text: "Three and a half months ago, my family lost someone that meant the world to us: my father. We made many trips to Medicol with my father for comfort care. We did have a few star employees that deserve recognition. We will never take that from him, but he adored two employees and they were great to him.",
        name: "Katlynn Pouros",
        role: "Patient's family",
        image: "./images/test-2.png",
    },
    {
        id: 3,
        text: "When I began looking for the best center for Max I chose Medicol. You are the best. Many thanks to you and your warm,concerned staff for providing a safe haven for Max and giving me much needed respite. We will see how his nasty disease progresses and if possible will send him again next summer ...",
        name: "John Smith",
        role: "Patient",
        image: "./images/test-1.png",
    },
    {
        id: 4,
        text: "Three and a half months ago, my family lost someone that meant the world to us: my father. We made many trips to Medicol with my father for comfort care. We did have a few star employees that deserve recognition. We will never take that from him, but he adored two employees and they were great to him.",
        name: "Sarah Wilson",
        role: "Patient",
        image: "./images/test-2.png",
    },
];

const clientImg = [
    {
        id: 1,
        name: "client",
        image: "./images/client-hm-1.jpg"
    },
    {
        id: 2,
        name: "client",
        image: "./images/client-hm-2.jpg"
    },
    {
        id: 3,
        name: "client",
        image: "./images/client-hm-3.jpg"
    },
    {
        id: 4,
        name: "client",
        image: "./images/client-hm-4.jpg"
    },
]

const Slider = () => {
    const [index, setIndex] = useState(0);




    const nextSlide = () => {
        if (index < testimonials.length - 2) {
            setIndex(index + 1);
        }
    };
    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const sliderData = {
        title: "What",
        subtitle: "Client Say",
    }
    return (
        <div className="best-doctors" style={{ background: "white" }}>
            <div className="row">
                <div className="col3">
                    <div className="heading">
                        <h1>
                            {sliderData.title}
                            <span>{sliderData.subtitle}</span>
                        </h1>
                        <div className="arrow-btns">
                            <button className="btn-right" onClick={prevSlide}>
                                <ChevronLeft size={18} />
                            </button>

                            <button className="btn-right" onClick={nextSlide}>
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="slider-container">
                    <div className="slider-wrapper">
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${index * 50}%)`,
                            }}
                        >
                            {testimonials.map((item) => (
                                <div className="testimonial-card" key={item.id}>
                                    <p>{item.text}</p>

                                    <div className="client-info">
                                        <img src={item.image} alt={item.name} />

                                        <div>
                                            <h3>{item.name}</h3>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="item">
                        {clientImg.map((feild) => (
                            <img
                                key={feild.id}
                                src={feild.image}
                                alt={feild.name}
                                className="client-img"
                            />
                        ))}
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Slider