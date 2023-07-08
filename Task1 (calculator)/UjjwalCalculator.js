{/* <script> */}

for (var item of document.querySelectorAll(".style")) {
    item.addEventListener("mousedown", function (evt) {
    evt.target.classList.add("styleOnClick");
    }, false);
    }
    
    document.getElementById('clear').addEventListener("mousedown", function () {
    document.querySelector(".style").classList.add("styleOnClick");
    });
    
    document.addEventListener("mouseup", function () {
    for (var item of document.querySelectorAll(".style")) {
    item.classList.remove("styleOnClick");
    }
    document.querySelector(".style").classList.remove("styleOnClick");
    });
    
    const result = document.getElementById('resultText');
    const calculation = document.getElementById('calculationText');
    
    function formula() {
    var calMath = '';
    calculation.textContent.split('').map(element => {
    if (element === 'x') {
    calMath += '*';
    } else {
    calMath += element;
    }
    });
    return calMath;
    }
    
    function calc(formula) {
    if (['+', '-', "x", '/'].includes(formula[formula.length - 1])) {
    formula = formula.slice(0, formula.length - 1);
    }
    return eval(formula);
    }
    
    function wrightNum(num) {
    calculation.textContent += num;
    }
    
    function op(btn) {
    if (calculation.textContent.length !== 0) {
    if (!['+', '-', "x", '/'].includes(calculation.textContent[calculation.textContent.length - 1])) {
    result.textContent = calc(formula());
    calculation.textContent += btn;
    } else {
    calculation.textContent = calculation.textContent.slice(0, formula.length - 1);
    calculation.textContent += btn;
    }
    }
    }
    
    document.getElementById('num0').addEventListener('click', function () {
    wrightNum(0)
    }); +
    document.getElementById('num1').addEventListener('click', function () {
    wrightNum(1)
    });
    document.getElementById('num2').addEventListener('click', function () {
    wrightNum(2)
    });
    document.getElementById('num3').addEventListener('click', function () {
    wrightNum(3)
    });
    document.getElementById('num4').addEventListener('click', function () {
    wrightNum(4)
    });
    document.getElementById('num5').addEventListener('click', function () {
    wrightNum(5)
    });
    document.getElementById('num6').addEventListener('click', function () {
    wrightNum(6)
    });
    document.getElementById('num7').addEventListener('click', function () {
    wrightNum(7)
    });
    document.getElementById('num8').addEventListener('click', function () {
    wrightNum(8)
    });
    document.getElementById('num9').addEventListener('click', function () {
    wrightNum(9)
    });
    
    
    document.getElementById('addition').addEventListener('click', function () {
    op('+')
    });
    document.getElementById('subtraction').addEventListener('click', function () {
    op('-')
    });
    document.getElementById('division').addEventListener('click', function () {
    op('/')
    });
    document.getElementById('multiplication').addEventListener('click', function () {
    op('x')
    });
    
    
    document.getElementById('clear').addEventListener('click', function () {
    calculation.textContent = '';
    result.textContent = 0;
});
    document.getElementById('clearOne').addEventListener('click', function () {
    calculation.textContent = calculation.textContent.substring(0,calculation.textContent.length-1);
    result.textContent = 0;
    });
    
    document.getElementById('dot').addEventListener('click', function () {
    op('.')
    });
    
    document.getElementById('equal').addEventListener('click', function () {
    result.textContent = (calc(formula()).length !== 0) ? calc(formula()) : result.textContent;
    calculation.textContent = result.textContent;
    });
    
    // </script>