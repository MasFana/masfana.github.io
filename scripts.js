// Particles.js configuration
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
const links = ["https://github.com/tandpfun/skill-icons/raw/main/icons/CS.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Dark.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/PostgreSQL-Dark.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/NodeJS-Dark.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg","https://github.com/tandpfun/skill-icons/raw/main/icons/Linux-Dark.svg",]
    // JavaScript to dynamically generate list items
    const skillsList = document.getElementById('skills-list');

    // Loop through links array and create list items
    links.forEach(link => {
        const listItem = document.createElement('li');
        const iconImg = document.createElement('img');

        // Set icon image source and alt text
        iconImg.src = link;
        iconImg.alt = "Icon";

        // Append icon to list item
        listItem.appendChild(iconImg);

        // Append list item to skills list
        skillsList.appendChild(listItem);

    });
