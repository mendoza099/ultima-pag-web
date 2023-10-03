import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import Footer from "../component/Footer.jsx";
import imagen1 from "/workspace/ultima-pag-web/src/img/annie-spratt-vGgn0xLdy8s-unsplash (1).jpg";
import imagen2 from "/workspace/ultima-pag-web/src/img/ryoji-iwata-IBaVuZsJJTo-unsplash (2).jpg";
import Division from "../component/Division.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		const body = document.querySelector("body");

		const nav = document.querySelector("header nav");

		const navNavigationBarLi = document.querySelectorAll(
			"header nav .navigation-bar li"
		);
		const headerText = document.querySelector("header .text");
		const headerSection = document.querySelector("header");
		const aboutSection = document.querySelector(".about-us");

		const dots = document.querySelectorAll(".dots > div");
		const svgDown = document.querySelector("header .arrow-down");
		const svgUp = document.querySelector(".copyright .arrow-up");
		const menuImgs = document.querySelectorAll(
			".menu .menu-image-container img"
		);
		const boxModel = document.querySelector(".menu .box-model");
		const menuImageContainer = document.querySelector(".menu-image-container");
		const boxModelArrow = document.querySelector(".menu .box-model .arrow");
		const boxModelImage = document.querySelector(".menu .box-model img");
		const pageTitle = document.querySelector("title");

		// remove loader

		// prevent links click hash

		// toggle hamburger menu button

		// show active navigationbar li
		navNavigationBarLi.forEach((li) =>
			li.addEventListener("click", () => {
				const arr = Array.from(li.parentElement.children);
				arr.forEach((li) => li.classList.remove("active"));
				li.classList.add("active");
			})
		);

		// svg-up smooth scroll
		svgUp.addEventListener("click", () => {
			window.scroll({
				top: 0,
				behavior: "smooth",
			});
		});

		window.onscroll = function () {
			if (window.pageYOffset > headerSection.offsetHeight - 75) {
				nav.classList.add("active");
				// Cambiar el color del texto a negro
			} else {
				nav.classList.remove("active");
				// Restablecer el color del texto
			}

			// header welcome fade out and in
			if (window.pageYOffset > 0) {
				headerText.style.opacity = -window.pageYOffset / 300 + 1;
			}
			// home page JS
		};

		// home page JS
		if (pageTitle.text === "CriptoSasun") {
			// svg-down smooth scroll
			svgDown.addEventListener("click", () => {
				window.scroll({
					top: aboutSection.offsetTop - 30,
					behavior: "smooth",
				});
			});

			// dots smooth scroll
			dots.forEach((dot) =>
				dot.addEventListener("click", function () {
					window.scrollTo({
						top: document.querySelector(this.dataset.x).offsetTop - 100,
						behavior: "smooth",
					});
				})
			);

			// show box model
			menuImgs.forEach((img) =>
				img.addEventListener("click", function () {
					const arr = Array.from(this.parentElement.parentElement.children);

					arr.forEach((div) => div.classList.remove("active"));

					this.parentElement.classList.add("active");
					boxModel.classList.add("active");
					boxModelImage.src = this.src;
					boxModelImage.classList.add("active");
					body.classList.add("hide-scroll");
				})
			);

			// box model functions
			function boxModelFun(e) {
				// close box model
				if (
					e.code === "Escape" ||
					(e.target.tagName === "DIV" &&
						!e.target.classList.contains("arrow")) ||
					e.target.classList.contains("close")
				) {
					boxModel.classList.remove("active");
					body.classList.remove("hide-scroll");
				}

				if (boxModel.classList.contains("active")) {
					if (
						e.code === "ArrowRight" ||
						e.code === "ArrowLeft" ||
						e.target.classList.contains("arrow-right") ||
						e.target.classList.contains("arrow-left")
					) {
						const arr = Array.from(menuImageContainer.children);
						const active = arr.find((div) => div.classList.contains("active"));

						// change box model image
						if (
							e.target.classList.contains("arrow-right") ||
							e.code === "ArrowRight"
						) {
							if (active.nextElementSibling === null) {
								active.parentElement.firstElementChild.classList.add("active");
								boxModelImage.src =
									active.parentElement.firstElementChild.firstElementChild.src;
							} else {
								active.nextElementSibling.classList.add("active");
								boxModelImage.src =
									active.nextElementSibling.firstElementChild.src;
							}
						}

						// change box model image
						else if (
							e.target.classList.contains("arrow-left") ||
							e.code === "ArrowLeft"
						) {
							if (active.previousElementSibling === null) {
								active.parentElement.lastElementChild.classList.add("active");
								boxModelImage.src =
									active.parentElement.lastElementChild.lastElementChild.src;
							} else {
								active.previousElementSibling.classList.add("active");
								boxModelImage.src =
									active.previousElementSibling.firstElementChild.src;
							}
						}
						active.classList.remove("active");
					}
				}
			}

			window.addEventListener("keydown", boxModelFun);
			window.addEventListener("click", boxModelFun);
			boxModelArrow.addEventListener("click", boxModelFun);
		}
	}, []);
	return (
		<>


			<header className="header-primera-pagina">
				<nav>
					<div className="logo">
						<Link to="/">
							<h4
								style={{
									color: "black",
									fontSize: "259%",
									fontFamily: "'Satoshi', sans-serif",
								}}
							>
								Criptosasun
							</h4>
						</Link>
					</div>
					<div className="toggle">
						<span className="first"></span>
						<span className="middle"></span>
						<span className="last"></span>
					</div>
					<div
						className="navigation-bar"
						style={{ fontSize: "20px", marginLeft: "6.5cm" }}
					>
						<ul>
							<li className="active">
								<Link to="/">
									Home<span className="underline"></span>
								</Link>
							</li>
							<li>
								<Link to="/noticias">
									Noticias<span className="underline"></span>
								</Link>
							</li>

							<li>
								<Link to="/contactanos">
									Contáctanos<span className="underline"></span>
								</Link>
							</li>
							<li>
								<Link to="/criptosasun">
									Criptosasun<span className="underline"></span>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className="text" style={{ marginTop: "5%" }}>
					<h2>Welcome</h2>
					<h1>CRIPTOSASUN</h1>
					<div className="arrow">
						<span className="left"></span>
						<i className="fas fa-asterisk"></i>
						<span className="right"></span>
					</div>
					<span>¿Listo para formar parte de nuestra familia?</span>
					<div className="button">
						<button>Explore</button>
					</div>
				</div>

				<svg
					className="svg-down"
					width="192"
					height="61"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					viewBox="0 0 160.7 61.5"
					enableBackground="new 0 0 160.7 61.5"
					xmlSpace="preserve"
				>
					<path
						fill="currentColor"
						d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
					></path>
				</svg>
				<div className="arrow-down"></div>
			</header>

			<div className="menu">
				<div className="box-model">
					<i className="fas fa-times fa-2x close"></i>
					<div className="arrow">
						<div className="arrow arrow-right"></div>
						<div className="arrow arrow-left"></div>
					</div>
					<div className="box-image-container">
						<div className="box-image">
							<img src="" alt="Food Photo" />
						</div>
					</div>
				</div>
				<div className="menu-image-container" style={{ marginTop: "150px", marginLeft: "120px" }}>
					<div className="card" style={{ margin: "5px" }}>
						<img
							src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687777747/DreamShaper_v5_A_closeup_of_a_complex_FPGA_chip_illuminated_by_0_1_dc6fej.jpg"
							className="card-image"
						/>
						<div className="card-body">
							<h1 className="card-titule">Materiales</h1>

							<p className="card-info" style={{ color: "white" }}>
								Materiales cada vez mas potentes y avanzados como los FPGA y
								placas base superpotentes que transforman la industria con
								flexibilidad y rendimiento excepcional. Impulsan avances en
								inteligencia artificial, computación de alto rendimiento y
								robótica, abriendonos posibilidades innovadoras en múltiples
								campos.
							</p>
						</div>
					</div>

					<div className="card" style={{ margin: "5px" }}>
						<img
							src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687777748/kanchanara-5hcV51EeeWc-unsplash_1_cg4kpb.jpg"
							className="card-image"
						/>
						<div className="card-body">
							<h1 className="card-titule">Finanzas</h1>

							<p className="card-info" style={{ color: "white" }}>
								Brindanmos soluciones innovadoras para maximizar tus activos y
								proteger tu futuro. Con enfoque centrado en el cliente,
								ofrecemos productos personalizados y estrategias de inversión
								inteligentes. Únete a nosotros para alcanzar tus metas
								financieras y descubre cómo transformamos la manera en que
								gestionas tu dinero.
							</p>
						</div>
					</div>

					<div className="card" style={{ margin: "5px" }}>
						<img
							src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687777747/DreamShaper_v5_Una_escena_de_ciberespacio_digital_con_estructu_1_1_f6xg5k.jpg"
							className="card-image"
						/>
						<div className="card-body">
							<h1 className="card-titule" style={{ marginTop: "1cm" }}>
								Criptología y Ciberseguridad
							</h1>

							<p className="card-info" style={{ color: "white" }}>
								Ofrecemos y estudiamos soluciones innovadoras para proteger tus
								datos confidenciales. Con tecnologías de cifrado avanzadas y
								protocolos de protección robustos, garantizamos la seguridad de
								tus comunicaciones digitales. Únete a nosotros y descubre cómo
								revolucionamos la protección de la información en el mundo
								digital.
							</p>
						</div>
					</div>

					<div className="card" style={{ margin: "5px" }}>
						<img
							src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687777747/DreamShaper_v5_Big_Data_e_Inteligencia_Artificial_0_1_kmsqyw.jpg"
							className="card-image"
						/>
						<div className="card-body">
							<h1 className="card-titule" style={{ marginTop: "1cm" }}>
								Big Data e Inteligencia Artificial
							</h1>

							<p className="card-info" style={{ color: "white" }}>
								Big Data y la IA revolucionan empresas. Big Data analiza grandes
								volúmenes de datos para predecir, personalizar y optimizar. La
								IA automatiza tareas y asiste con chatbots. Juntas, impulsan
								aplicaciones revolucionarias como detección de fraudes y
								recomendaciones personalizadas.
							</p>
						</div>
					</div>
				</div>

			</div>

			<div className="menu">
				<div className="box-model">
					<i className="fas fa-times fa-2x "></i>
					<div className="arrow">
						<div className="arrow arrow-right"></div>
						<div className="arrow arrow-left"></div>
					</div>
					<div className="box-image-container">
						<div className="box-image">
							<img src="" alt="Food Photo" />
						</div>
					</div>
				</div>

				<div className="text" style={{ marginRight: "2.5cm", marginBottom: "130px", marginTop: "40px" }}>
					<h2 style={{ fontSize: "70px" }}>Descubre</h2>
					<h3 style={{ color: "#7B8FA1", fontSize: "35px", marginTop: "30px" }}>
						Que te ofrecemos
					</h3>
					<div>
						<i className="fas fa-asterisk"></i>
					</div>
					<p>
						En CriptoSasun, ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades de nuestros clientes. Desde soluciones tecnológicas innovadoras hasta atención personalizada. nos esforzamos por brindar la
						mejor experiencia posible. Uno de nuestros objetivos principales es ayudar a nuestros clientes a alcanzar sus metas,
						superar sus expectativas, poder ahorrar... Para obtener más información sobre lo que ofrecemos y cómo podemos ayudarle, lo invitamos a explorar nuestro sitio web, donde encontrará
						detalles sobre nuestros procuctos y recursos informativos. No pierda la oportunidad de descubrir como podemos ayudarle a mejorar su vida o negocio.
						¡Déjenos ser su socio de

						confianza en el camino hacia el éxito!
					</p>
				</div>
			</div>







			<div className="recipes">
				<div className="image"></div>
				<div className="text">
					<h2 style={{ marginLeft: "1.5cm", fontSize: "130%" }}>
						¿Necesitas ayuda?{" "}
					</h2>
					<h3 style={{ fontSize: "180%", marginLeft: "1cm" }}>
						¡Qué podemos hacer!
					</h3>
				</div>
			</div>


			<div className="about-us">
				<div className="text" style={{ marginTop: "7%" }}>
					<h2>Aprende</h2>
					<h3 style={{ color: "#7B8FA1" }}>algo sobre nosotros </h3>
					<div>
						<i className="fas fa-asterisk"></i>
					</div>
					<p>
						En CryptoSasun Energía, nos enorgullecemos de ser reconocidos como una entidad altamente competente y dinámica en el paisaje energético actual. Nos dedicamos incansablemente a innovar y a redefinir los estándares de excelencia en nuestro campo, posicionándonos como líderes revolucionarios en la industria. Nuestro enfoque fresco e innovador no solo nos capacita para desarrollar soluciones vanguardistas, sino que también nos permite transformar radicalmente la industria, redefiniendo lo que es posible. Nos esforzamos por mantenernos un paso adelante, anticipándonos a las tendencias emergentes y adaptándonos proactivamente a las demandas cambiantes del mercado. Esta perspectiva progresiva es lo que cataliza nuestro continuo éxito y crecimiento.
					</p>
					<hr></hr>
				</div>
				<div className="image-container">
					<div className="image image1">
						<img
							src={imagen2}
							alt="Food Photo"
							style={{ height: "643px", width: "422px" }}
						/>
					</div>
					<div className="image image2">
						<img
							src={imagen1}
							alt="Food Photo"
							style={{ height: "643px", width: "422px" }}
						/>
					</div>
				</div>
			</div>
			<div className="fixed-image">
				<div className="text">
					<h2>La combinación</h2>
					<h3 style={{ marginBottom: "3cm" }}>Perfecta</h3>
				</div>
			</div>


			<Division />

			<Footer />
			<div className="copyright">
				<svg
					className="svg-up"
					width="192"
					height="61"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					viewBox="0 0 160.7 61.5"
					enableBackground="new 0 0 160.7 61.5"
					xmlSpace="preserve"
				>
					<path
						fill="#262526"
						d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
					></path>
				</svg>
				<i className="fas fa-angle-double-up arrow-up"></i>
			</div>
		</>
	);
};
