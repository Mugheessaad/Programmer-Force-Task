    var canvas = {
        element: document.getElementById('canvas'),
        
        width: window.innerWidth,
        height: window.innerHeight,
        initialize: function () {
            this.element.style.width = this.width + 'px';
            this.element.style.height = this.height + 'px';
            
            document.body.appendChild(this.element);
        }
    };

    var colors = ["blue", "red", "green"];
    canvas.element.addEventListener('click', function (e) {
        var xCoordinate = e.x-(window.innerWidth - canvas.width)/2;
        var yCoordinate = e.y-(window.innerHeight - canvas.height)/2;
        var randomNumber = Math.floor(Math.random() * 3);
        var selectedColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");


        Ball.create(selectedColor, 4, 3).draw(xCoordinate, yCoordinate);
    });	

    var Ball = {
        create: function (color, dx, dy) {
            var newBall = Object.create(this);
            newBall.dx = dx;
            newBall.dy = dy;
            newBall.width = 40;
            newBall.height = 40;
            newBall.element = document.createElement('div');
            newBall.element.style.backgroundColor = color;
            newBall.element.style.width = newBall.width + 'px';
            newBall.element.style.height = newBall.height + 'px';
            newBall.element.className += ' ball';
            newBall.width = parseInt(newBall.element.style.width);
            newBall.height = parseInt(newBall.element.style.height);
            canvas.element.appendChild(newBall.element);
            return newBall;
        },
        moveTo: function (x, y) {
            this.element.style.left = x + 'px';
            this.element.style.top = y + 'px';
        },
        changeDirectionIfNecessary: function (x, y) {
            if (x < 0 || x > canvas.width - this.width) {
                this.dx = -this.dx;
                this.element.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            }
            if (y < 0 || y > canvas.height - this.height) {
                this.dy = -this.dy;
                this.element.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            }
        },
        changeColorIfNeccesary : function (x , y) {
            if( x == canvas.width || x == 0){
                
            }
        },
        draw: function (x, y) {
            this.moveTo(x, y);
            var ball = this;
            setTimeout(function () {
                ball.changeDirectionIfNecessary(x, y);
                ball.draw(x + ball.dx, y + ball.dy);
                ball.changeColorIfNeccesary;
            }, 1000 / 60);
        }
    };
    canvas.initialize();
    var ball1 = Ball.create("#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"), 4, 3);
    ball1.draw(70, 0);