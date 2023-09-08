
$("#submit").click(() => {

        let array = $('form').serializeArray();
        if (array[0]['value'] != false & array[1]['value'] != false & array[2]['value'] != false) {

                console.log("done");
                let a = array[0]['value'];
                let h = array[1]['value'];
                let w = array[2]['value'];
                h = h / 100;
                let b = w / (h * h);
                let para = $("#result-info");
                $("#result-title").text("Your BMI is " + b);
                console.log(a);

                if (a == 2) {
                        if (b > 0 & b <= 13.11) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 13.11 & b <= 17.91) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 17.91 & b <= 19.23) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 3) {
                        if (b > 0 & b <= 13.14) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 13.14 & b <= 18.42) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 18.42 & b <= 19.90) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 4) {
                        if (b > 0 & b <= 13.20) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 13.20 & b <= 19.01) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 19.01 & b <= 20.65) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 5) {
                        if (b > 0 & b <= 13.32) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 13.32 & b <= 19.71) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 19.71 & b <= 21.52) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 6) {
                        if (b > 0 & b <= 13.50) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 13.50 & b <= 20.53) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 20.53 & b <= 22.52) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 7) {
                        if (b > 0 & b <= 13.78) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 13.78 & b <= 21.49) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 21.49 & b <= 23.70) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 8) {
                        if (b > 0 & b <= 14.14) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 14.14 & b <= 22.60) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 22.60 & b <= 25.03) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 9) {
                        if (b > 0 & b <= 14.61) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 14.61 & b <= 23.86) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 23.86 & b <= 26.51) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 10) {
                        if (b > 0 & b <= 15.18) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 15.18 & b <= 25.29) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 25.29 & b <= 28.18) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 11) {
                        if (b > 0 & b <= 15.82) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 15.82 & b <= 26.81) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 26.81 & b <= 29.96) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 12) {
                        if (b > 0 & b <= 16.46) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 16.46 & b <= 28.30) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 28.30 & b <= 31.70) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 13) {
                        if (b > 0 & b <= 17.03) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 17.03 & b <= 29.64) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 29.64 & b <= 33.26) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 14) {
                        if (b > 0 & b <= 17.48) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 17.48 & b <= 30.74) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 30.74 & b <= 34.55) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 15) {
                        if (b > 0 & b <= 17.83) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 17.83 & b <= 31.63) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 31.63 & b <= 35.58) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 16) {
                        if (b > 0 & b <= 18.10) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 18.10 & b <= 32.34) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 32.34 & b <= 36.42) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 17) {
                        if (b > 0 & b <= 18.33) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 18.33 & b <= 32.96) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 32.96 & b <= 37.14) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else {
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else if (a == 18) {
                        if (b > 0 & b <= 18.57) {
                                para.html("According to your height you are <strong>underweight</strong>, You need to gain some weight to have healthy weight.");
                        }
                        else if (b > 18.57 & b <= 33.57) {
                                para.html("According to your height you have <strong>healthy weight</strong> which is great!");
                        }
                        else if (b > 33.57 & b <= 37.84) {
                                para.html("According to your height you are <strong>at risk of overweight</strong>,you have to lose some weight and you will have healthy weight.");
                        }
                        else{
                                para.html("According to your height you are <strong>overweight</strong>, and need to lose weight.");
                        }
                }
                else {
                        if (a > 18) {
                                if (b < 16) {
                
                                        para.html("According to your height you are <strong>Sever Thinness</strong> you need to gain some weight to have normal weight.");
                                }
                
                                else if (b >= 16 && b < 17) {
                
                                        para.html("According to your height you are <strong>Moderate Thinness</strong> you need to gain some weight to have normal weight.");
                                }
                
                                else if (b >= 17 && b < 18.5) {
                
                                        para.html("According to your height you are <strong>Mild Thinness</strong> you need to gain some weight to have normal weight.");
                                }
                
                                else if (b >= 18.5 && b < 25) {
                
                                        $("#result-info").html("According to your height you are <strong>Normal</strong> and that's great!");
                                }
                
                                else if (b >= 25 && b < 30) {
                
                                        para.html("According to your height you are <strong>Overweight</strong> you need to lose some weight to have normal weight.");
                                }
                
                                else if (b >= 30 && b < 35) {
                
                                        para.html("According to your height you are <strong>Obese Class I</strong> you need to lose weight to have normal weight.");
                                }
                
                                else if (b >= 35 && b < 40) {
                
                                        para.html("According to your height you are <strong>Obese Class II</strong> you need to lose weight to have normal weight.");
                                }
                
                                else if (b >= 40) {
                
                                        para.html("According to your height you are <strong>Obese Class III</strong> you need to lose weight to have normal weight.");
                                }
                
                                else { 
                                        console.log("sorry");
                                }
                                
                        }
                }
        }
        else {
                alert("please enter data first");
        }
});


