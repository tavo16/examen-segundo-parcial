
    const $canvas = document.querySelector(".canvas");
    const context = $canvas.getContext('2d');
    

    $canvas.addEventListener('mousemove', e =>{
        if (e.buttons !== 1) return;

        const {top, left} = $canvas.getBoundingClientRect();
        const y = e.pageY - top
        const x = e.pageX - left

        context.strokeStyle = "blue"
        context.lineWidth = 5
        context.beginPath()
        context.moveTo(x, y)
        context.lineTo(x + 1, y + 1)
        context.stroke()
        console.log(x, y)
    })
