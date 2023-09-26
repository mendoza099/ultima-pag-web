import React, { useLayoutEffect } from 'react';
import '../../styles/division.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Division() {
    useLayoutEffect(() => {
        // Deshabilitar el scrolling mientras la animación está en curso
        const disableScroll = () => {
            document.body.style.overflowY = 'hidden';
        };

        // Habilitar el scrolling una vez que la animación ha terminado
        const enableScroll = () => {
            document.body.style.overflowY = 'auto';
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                id: 'scroll-trigger-section',
                trigger: ".scroll-trigger-section",
                scrub: 0.5,
                pin: true,
                start: "top top",
                end: "+=150%",
                // Se invoca al inicio de la animación
                onStart: disableScroll,
                // Se invoca al finalizar la animación
                onComplete: enableScroll,
            },
        });

        tl.to(".scroll-box", {
            force3D: true,
            duration: 1,
            xPercent: 100,
            ease: "power1.inOut",
            stagger: { amount: 1 },
        })
            .to(".scroll-box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
            .to(".scroll-box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

        return () => {
            tl.kill();
            ScrollTrigger.getById('scroll-trigger-section').kill();
            enableScroll(); // En caso de que el componente se desmonte antes de que la animación termine, reestablece el scroll.
        };
    }, []);
    return (
        <section className="scroll-trigger-section">
            <span className="scroll-direction-indicator down">Procesos Clásicos <p style={{ color: 'white', fontSize: '11px', fontFamily: 'Satoshi', width: '65%', margin: '60px 20px 20px 160px' }}>Un algoritmo es una secuencia de pasos o instrucciones bien definidas que resuelven un problema o realizan una tarea específica. En el contexto de la informática, los algoritmos son fundamentales para el procesamiento de datos y la toma de decisiones en diferentes aplicaciones. Podemos distinguir dos tipos de algoritmos: los algoritmos clásicos, que son aquellos diseñados para ejecutarse en computadoras tradicionales basadas en bits clásicos y utilizan operaciones lógicas y aritméticas para realizar cálculos, siendo ampliamente utilizados en todas las áreas de la informática, desde cálculos matemáticos hasta búsquedas en bases de datos y algoritmos de ordenamiento; y los algoritmos cuánticos, que se basan en los principios de la mecánica cuántica y utilizan qubits, que son la unidad básica de información cuántica, aprovechan las propiedades únicas de los qubits, como la superposición y el entrelazamiento, para realizar cálculos de manera más eficiente en ciertos problemas específicos. Los algoritmos cuánticos tienen el potencial de resolver problemas complejos, como la factorización de números grandes y la búsqueda en grandes conjuntos de datos, de manera más rápida que los algoritmos clásicos. </p></span>
            <span className="scroll-direction-indicator up">Procesos Neurocuáticos <p style={{ color: 'white', fontSize: '11px', fontFamily: 'Satoshi', width: '65%', margin: '60px 20px 20px 160px' }}>Un algoritmo es una secuencia de pasos o instrucciones bien definidas que resuelven un problema o realizan una tarea específica. En el contexto de la informática, los algoritmos son fundamentales para el procesamiento de datos y la toma de decisiones en diferentes aplicaciones. Podemos distinguir dos tipos de algoritmos: los algoritmos clásicos, que son aquellos diseñados para ejecutarse en computadoras tradicionales basadas en bits clásicos y utilizan operaciones lógicas y aritméticas para realizar cálculos, siendo ampliamente utilizados en todas las áreas de la informática, desde cálculos matemáticos hasta búsquedas en bases de datos y algoritmos de ordenamiento; y los algoritmos cuánticos, que se basan en los principios de la mecánica cuántica y utilizan qubits, que son la unidad básica de información cuántica, aprovechan las propiedades únicas de los qubits, como la superposición y el entrelazamiento, para realizar cálculos de manera más eficiente en ciertos problemas específicos. Los algoritmos cuánticos tienen el potencial de resolver problemas complejos, como la factorización de números grandes y la búsqueda en grandes conjuntos de datos, de manera más rápida que los algoritmos clásicos. </p></span>
            {[...Array(100)].map((_, index) => (
                <div className="scroll-box" key={index}></div>
            ))}
        </section>
    );
}

export default Division;
