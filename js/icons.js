let canvasLogo = document.getElementById("canvasLogo"),
    canvasClean = document.getElementById("canvasClean"),
    canvasPP = document.getElementById("canvasPP"),
    canvasMO = document.getElementById("canvasMO"),
    canvasRR = document.getElementById("canvasRR"),
    canvasResponsive  = document.getElementById("canvasResponsive"),
    canvasXD = document.getElementById("canvasXD");

    if(canvasLogo){
        let ctx = canvasLogo.getContext("2d"),
            ejeX = canvasLogo.width / 2,
            ejeY = canvasLogo.height / 2;
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.strokeStyle = "rgba(255,255,255,1)";
        ctx.lineWidth = 4;
        //InnerArc
        ctx.beginPath();
        ctx.arc(20,20,10, 0, 2*Math.PI);
        ctx.stroke();
        //OutArc
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(20,20,15,0,2*Math.PI);
        ctx.stroke();
        //Text            
        ctx.font = "bold 18px Open Sans";
        ctx.fillText("Stellar",45, 25);
    }else{
        console.log("Fallo el canvas Logo");
    }

    if(canvasClean){
        let ctx = canvasClean.getContext("2d"),
            ejeX = canvasClean.width / 2,
            ejeY = canvasClean.height / 2,
            pColor = "#6633CC",
            sColor = "#40C4FF";
            lineWidth = 3;
            ctx.fillStyle = pColor;
            ctx.strokeStyle = pColor;
            ctx.lineWidth = lineWidth;
            //Circulo
            ctx.beginPath();
            ctx.arc(ejeX, ejeY, ejeX-lineWidth, 0, 1.75*Math.PI);
            ctx.stroke();
            //Checked
            ctx.strokeStyle = sColor;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(ejeX-10,ejeY-4);
            ctx.lineTo(ejeX, ejeY+8);
            ctx.lineTo(ejeX*2-lineWidth, ejeY-15);
            ctx.stroke();
            
    }else{
        console.log("Fallo el canvas Clean")
    }

    if(canvasPP){
        let ctx = canvasPP.getContext("2d"),
            ejeX = canvasPP.width / 2,
            ejeY = canvasPP.height / 2,
            pColor = "#6633CC",
            sColor = "#40C4FF";
            lineWidth = 3;
            ctx.fillStyle = "white";
            ctx.strokeStyle = pColor;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "square";
            //Cuadrado
            let intervalo = 10;
            //Base
            ctx.strokeRect(intervalo,intervalo,canvasPP.width - intervalo*2, canvasPP.height - intervalo*2);
            //Top-left
            ctx.fillRect(0+lineWidth,0+lineWidth,intervalo*1.2,intervalo*1.2)
            ctx.strokeRect(0+lineWidth,0+lineWidth,intervalo*1.2,intervalo*1.2);
            //Top-Right;
            ctx.fillRect((canvasPP.width-lineWidth*2)-intervalo,0+lineWidth,intervalo*1.2,intervalo*1.2);
            ctx.strokeRect((canvasPP.width-lineWidth*2)-intervalo,0+lineWidth,intervalo*1.2,intervalo*1.2);
            //Bottom-left
            ctx.fillRect(0+lineWidth,(canvasPP.height-lineWidth*2)-intervalo,intervalo*1.2,intervalo*1.2)
            ctx.strokeRect(0+lineWidth,(canvasPP.height-lineWidth*2)-intervalo,intervalo*1.2,intervalo*1.2);
            //Bottom-Right
            ctx.strokeStyle = sColor;
            ctx.fillRect((canvasPP.width-lineWidth*2)-intervalo,(canvasPP.height-lineWidth*2)-intervalo,intervalo*1.2,intervalo*1.2);
            ctx.strokeRect((canvasPP.width-lineWidth*2)-intervalo,(canvasPP.height-lineWidth*2)-intervalo,intervalo*1.2,intervalo*1.2);        
    }else{
        console.log("Fallo el canvas Clean")
    }

    if(canvasMO){
        let ctx = canvasMO.getContext("2d"),
            ejeX = canvasPP.width / 2,
            ejeY = canvasPP.height / 2,
            pColor = "#6633CC",
            sColor = "#40C4FF";
            lineWidth = 3;
            ctx.fillStyle = "white";
            ctx.strokeStyle = pColor;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "square";

            ctx.beginPath();
            ctx.strokeStyle = sColor;
            ctx.moveTo(ejeX/2,0+lineWidth);
            ctx.lineTo(ejeX+ejeX/2,0+lineWidth);          
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = sColor;
            ctx.moveTo(0+lineWidth*2.5,0+lineWidth*3);
            ctx.lineTo(canvasMO.width-lineWidth*2.5,0+lineWidth*3); 
            ctx.stroke();

            ctx.strokeStyle = pColor;                       
            //ctx.fillRect(lineWidth,ejeY-ejeY/2+lineWidth,canvasMO.width-lineWidth*2,canvasMO.height-ejeY+lineWidth*2);
            ctx.strokeRect(lineWidth,lineWidth*5,canvasMO.width-lineWidth*2,canvasMO.height-ejeY+lineWidth*3);
    }else{
        console.log("Fallo el canvas Multiple Options")
    }

    if(canvasRR){
        let ctx = canvasRR.getContext("2d"),
            ejeX = canvasRR.width / 2,
            ejeY = canvasRR.height / 2,
            pColor = "#6633CC",
            sColor = "#40C4FF";
            lineWidth = 3;
            ctx.fillStyle = sColor;
            ctx.strokeStyle = pColor;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "sqaure";
            ctx.lineJoin = "round";
            let r = 15;
            //Cuadro
            ctx.beginPath();
            ctx.moveTo(lineWidth,lineWidth);
            ctx.lineTo(canvasRR.width - lineWidth, lineWidth);
            ctx.lineTo(canvasRR.width - lineWidth, canvasRR.height - ejeY/2);
            ctx.lineTo(lineWidth, canvasRR.height - ejeY/2);
            ctx.lineTo(lineWidth, lineWidth);
            ctx.closePath();       
            ctx.stroke();
            //Linea de division
            ctx.beginPath();
            ctx.moveTo(lineWidth, canvasRR.height - ejeY/2-lineWidth*4);
            ctx.lineTo(canvasRR.width - lineWidth, canvasRR.height - ejeY/2-lineWidth*4);
            ctx.stroke();
            //Base left
            ctx.beginPath();
            ctx.moveTo(ejeX-lineWidth*2, canvasRR.height - ejeY/2);
            ctx.lineTo(ejeX-lineWidth*2, canvasRR.height - ejeY/2 + lineWidth*3);
            ctx.stroke();
            //base right
            ctx.beginPath();
            ctx.moveTo(ejeX+lineWidth*2, canvasRR.height - ejeY/2);
            ctx.lineTo(ejeX+lineWidth*2, canvasRR.height - ejeY/2 + lineWidth*3);
            ctx.stroke();
            //base
            ctx.beginPath();
            ctx.moveTo(ejeX-ejeX/2, canvasRR.height - ejeY/2+lineWidth*3);
            ctx.lineTo(ejeX+ejeX/2, canvasRR.height - ejeY/2 + lineWidth*3);
            ctx.stroke();

            //Texto
            let tamano = 18;
            ctx.font = "bold " + tamano + "px Open Sans";
            ctx.fillText("2x",ejeX-tamano/2, ejeY-lineWidth*2);

    }else{
        console.log("Fallo el canvas Retina Ready")
    }

    if(canvasResponsive){
        let ctx = canvasResponsive.getContext("2d"),
        ejeX = canvasResponsive.width / 2,
        ejeY = canvasResponsive.height / 2,
        pColor = "#6633CC",
        sColor = "#40C4FF";
        lineWidth = 3;
        ctx.fillStyle = "white";
        ctx.strokeStyle = pColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "sqaure";
        ctx.lineJoin = "round";
        
        ctx.beginPath();
        ctx.moveTo(lineWidth,lineWidth);
        ctx.lineTo(canvasResponsive.width - ejeX/2, lineWidth);
        ctx.lineTo(canvasResponsive.width - ejeX/2, canvasResponsive.height - lineWidth*2);
        ctx.lineTo(lineWidth, canvasResponsive.height - lineWidth*2);
        ctx.lineTo(lineWidth, lineWidth);
        ctx.closePath();       
        ctx.stroke();
        //Linea de division
        ctx.beginPath();
        ctx.moveTo(
            lineWidth,
             canvasResponsive.height - (ejeY/2+lineWidth));
        ctx.lineTo(
            canvasResponsive.width - ejeX/2, canvasResponsive.height - (ejeY/2+lineWidth));
        ctx.stroke();
        //Punto en el cell
        ctx.strokeRect(
            ejeX-lineWidth*2,
            canvasResponsive.height - ejeY/2+lineWidth/2,
            lineWidth,
            lineWidth);

        //cell pequeño        
        ctx.fillRect(
            ejeX+ejeX/4,
            ejeY-ejeY/2,
            ejeX/2+lineWidth*2,
            ejeY+lineWidth*3
        );
        ctx.strokeStyle = sColor;
        ctx.strokeRect(
            ejeX+ejeX/4,
            ejeY-ejeY/2,
            ejeX/2+lineWidth*2,
            ejeY+lineWidth*3
        );
        //lineas top del celular
        ctx.beginPath();
        ctx.moveTo(
            ejeX+ejeX/4,
            (ejeY-ejeY/2)+lineWidth*3
        );
        ctx.lineTo(canvasResponsive.width,
            (ejeY-ejeY/2)+lineWidth*3);
        ctx.stroke();
        
        //lineas bot del celular
        ctx.beginPath();
        ctx.moveTo(
            ejeX+ejeX/4,
            ejeY+ejeY/2
        );
        ctx.lineTo(
            canvasResponsive.width,
            ejeY+ejeY/2);
        ctx.stroke();
    }else{
        console.log("Fallo el canvas Responsive")
    }

    if(canvasXD){
        let ctx = canvasXD.getContext("2d"),
        ejeX = canvasXD.width / 2,
        ejeY = canvasXD.height / 2,
        pColor = "#6633CC",
        sColor = "#40C4FF";
        lineWidth = 3;
        ctx.fillStyle = "white";
        ctx.strokeStyle = pColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "sqaure";
        ctx.lineJoin = "round";
        //marco
        ctx.strokeRect(lineWidth,lineWidth,canvasXD.width-lineWidth*2,canvasXD.height-lineWidth*2);
        //texto
        let tamano = 24;
        ctx.fillStyle = sColor;
        ctx.font = "bold " + tamano + "px Open Sans";
        ctx.fillText("Xd",ejeX-tamano/2, ejeY+tamano/3);
    }else{
        console.log("Fallo el canvas XD");
    }