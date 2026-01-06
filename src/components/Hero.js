export class Hero {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.lineDistance = 150;
        this.mouse = { x: null, y: null, radius: 200 };

        this.init();
    }

    init() {
        this.container.appendChild(this.canvas);
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles(); // Recreate on resize for better distribution
    }

    createParticles() {
        this.particles = [];
        const numberOfParticles = (this.canvas.width * this.canvas.height) / 9000;

        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 2 + 1;
            const x = Math.random() * (this.canvas.width - size * 2) + size * 2;
            const y = Math.random() * (this.canvas.height - size * 2) + size * 2;
            const directionX = (Math.random() * 2) - 1;
            const directionY = (Math.random() * 2) - 1;
            const color = Math.random() > 0.5 ? '#ffffff' : '#888888'; // White or Grey

            this.particles.push({
                x, y, directionX, directionY, size, color
            });
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            // Movement
            p.x += p.directionX;
            p.y += p.directionY;

            // Check collision
            if (p.x + p.size > this.canvas.width || p.x - p.size < 0) {
                p.directionX = -p.directionX;
            }
            if (p.y + p.size > this.canvas.height || p.y - p.size < 0) {
                p.directionY = -p.directionY;
            }

            // Mouse interaction
            if (this.mouse.x != null) {
                let dx = this.mouse.x - p.x;
                let dy = this.mouse.y - p.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    if (this.mouse.x < p.x && p.x < this.canvas.width - p.size * 10) p.x += 2;
                    if (this.mouse.x > p.x && p.x > p.size * 10) p.x -= 2;
                    if (this.mouse.y < p.y && p.y < this.canvas.height - p.size * 10) p.y += 2;
                    if (this.mouse.y > p.y && p.y > p.size * 10) p.y -= 2;
                }
            }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            // Connect particles
            this.connect(i, this.particles);
        }
    }

    connect(index, particles) {
        let p1 = particles[index];
        for (let j = index; j < particles.length; j++) {
            let p2 = particles[j];
            let distance = ((p1.x - p2.x) * (p1.x - p2.x)) + ((p1.y - p2.y) * (p1.y - p2.y));

            if (distance < (this.lineDistance * this.lineDistance)) {
                let opacity = 1 - (distance / (20000));
                this.ctx.strokeStyle = `rgba(140, 140, 140, ${opacity})`;
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.stroke();
            }
        }
    }
}
