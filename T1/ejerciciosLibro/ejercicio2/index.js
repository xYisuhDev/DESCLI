
        const images = [
            "images/image.jpg",
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg"
        ];

        let nImage = 0;

        const image = document.getElementById("image");

        if (image) {
            image.addEventListener("click", function () {
                nImage = (nImage + 1) % images.length;
                image.src = images[nImage];
            });
        }
