const canvas = document.getElementById("graphic");
const context = canvas.getContext('2d');

height = 600;

context.globalAlpha = 0.5;
context.fillStyle = "blue";
context.fillRect(height / 2, height / 2, height / 5, 2 * height / 5);
context.beginPath();
context.moveTo(height / 2, height / 2);
context.lineTo(height / 2, height / 2 + height / 5);
context.lineTo(height / 2 - height / 5, height / 2);
context.lineTo(height / 2, height / 2);
context.fill();
context.beginPath();
context.arc(height / 2, height / 2, height / 5, Math.PI, 3*Math.PI/2);
context.moveTo(height / 2, height / 2);
context.lineTo(height / 2, height / 2 - height / 5);
context.lineTo(height / 2 - height / 5, height / 2);
context.lineTo(height / 2, height / 2);
context.fill();

context.globalAlpha = 0.75;
context.fillStyle = 'grey';
context.fillRect(0, 0, height, height);
context.fillStyle = 'black';
context.globalAlpha = 1;
context.beginPath();
context.moveTo(0, height / 2);
context.lineTo(height, height / 2);
context.moveTo(height / 2, 0);
context.lineTo(height / 2, height);
context.stroke();

context.moveTo(height / 10, height / 2 - height / 100);
context.lineTo(height / 10, height / 2 + height / 100);
context.moveTo(height / 10 + height / 5, height / 2 - height / 100);
context.lineTo(height / 10 + height / 5, height / 2 + height / 100);
context.moveTo(height / 10 + 3 * height / 5, height / 2 - height / 100);
context.lineTo(height / 10 + 3 * height / 5, height / 2 + height / 100);
context.moveTo(height / 10 + 4 * height / 5, height / 2 - height / 100);
context.lineTo(height / 10 + 4 * height / 5, height / 2 + height / 100);
context.moveTo(height / 2 - height / 100, height / 10);
context.lineTo(height / 2 + height / 100, height / 10);
context.moveTo(height / 2 - height / 100, height / 10 + height / 5);
context.lineTo(height / 2 + height / 100, height / 10 + height / 5);
context.moveTo(height / 2 - height / 100, height / 10 + 3 * height / 5);
context.lineTo(height / 2 + height / 100, height / 10 + 3 * height / 5);
context.moveTo(height / 2 - height / 100, height / 10 + 4 * height / 5);
context.lineTo(height / 2 + height / 100, height / 10 + 4 * height / 5);
context.stroke();

context.font = '18px monospace'
context.fillText('-R', height / 10, height / 2 - height / 50);
context.fillText('-R/2', height / 10 + height / 5, height / 2 - height / 50);
context.fillText('R', height / 2 + height / 50, height / 10);
context.fillText('R/2', height / 2 + height / 50, height / 10 + height / 5);
context.fillText('R/2', height / 10 + 3 * height / 5, height / 2 - height / 50);
context.fillText('R', height / 10 + 4 * height /5, height / 2 - height / 50);
context.fillText('-R/2', height / 2 + height / 50, height / 10 + 3 * height / 5);
context.fillText('-R', height / 2 + height / 50,  height / 10 + 4 * height /5);