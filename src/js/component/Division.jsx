import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/division.scss';

function Division() {
    const triggerRef = useRef(null);
    const boxRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!triggerRef.current || boxRefs.current.length === 0) return;

        const boxes = boxRefs.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: 0.5,
                pin: true,
                start: "top top",
                end: "+=150%"
            }
        });

        timeline
            .to(boxes, { force3D: true, duration: 1, xPercent: 100, ease: "power1.inOut", stagger: { amount: 1 } })
            .to(boxes, { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
            .to(boxes, { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

        return () => {
            if (timeline.scrollTrigger) {
                timeline.scrollTrigger.disable();
                timeline.scrollTrigger.kill();
            }
            timeline.kill();
        };
    }, []);

    const boxesArray = new Array(100).fill(null);

    return (
        <section className="trigger" ref={triggerRef}>
            <span className="down">Scroll<br />Down</span>
            <span className="up">Scroll<br />Up</span>
            {boxesArray.map((_, index) => (
                <div key={`box-${index}`} ref={(el) => boxRefs.current[index] = el} className="box"></div>
            ))}
        </section>
    );
}

export default Division;
