/* =========================================
   GÉNESIS NAILS
   SCRIPT.JS
========================================= */


/* =========================================
   NAVEGACIÓN SUAVE
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const destino = this.getAttribute("href");

        if (destino === "#") {
            return;
        }

        const elemento = document.querySelector(destino);

        if (elemento) {

            event.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



/* =========================================
   NÚMERO DE CONTACTO
========================================= */

/*
    CUANDO ME DES EL NÚMERO DE GÉNESIS,
    LO COLOCAREMOS AQUÍ.

    EJEMPLO:

    const telefono = "573001234567";

    IMPORTANTE:
    Para WhatsApp se utiliza el número
    con código de país.

    Colombia = 57
*/


const telefono = "";



/* =========================================
   BOTÓN WHATSAPP
========================================= */

const whatsappButton =
    document.getElementById("whatsappButton");


if (whatsappButton) {

    whatsappButton.addEventListener(
        "click",
        function (event) {

            if (telefono === "") {

                event.preventDefault();

                alert(
                    "El número de WhatsApp todavía no ha sido configurado."
                );

                return;

            }


            const mensaje =
                "Hola Génesis 💅🏻. Vi tu catálogo de diseños de uñas y me gustaría consultar disponibilidad y precios.";


            const url =
                "https://wa.me/" +
                telefono +
                "?text=" +
                encodeURIComponent(mensaje);


            this.href = url;

        }
    );

}



/* =========================================
   BOTÓN LLAMAR
========================================= */

const phoneButton =
    document.getElementById("phoneButton");


if (phoneButton) {

    phoneButton.addEventListener(
        "click",
        function (event) {

            if (telefono === "") {

                event.preventDefault();

                alert(
                    "El número de teléfono todavía no ha sido configurado."
                );

                return;

            }


            this.href =
                "tel:+" +
                telefono;

        }
    );

}



/* =========================================
   ANIMACIÓN DE TARJETAS
========================================= */

const tarjetas =
    document.querySelectorAll(".design-card");


const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );



tarjetas.forEach(function (tarjeta) {

    tarjeta.style.opacity = "0";

    tarjeta.style.transform =
        "translateY(30px)";

    tarjeta.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observador.observe(tarjeta);

});



/* =========================================
   MENÚ AL HACER SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function () {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 8px 25px rgba(70, 40, 50, 0.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);



/* =========================================
   MENSAJE DE CARGA
========================================= */

window.addEventListener(
    "load",
    function () {

        console.log(
            "Génesis Nails — catálogo cargado correctamente 💅🏻"
        );

    }
);
