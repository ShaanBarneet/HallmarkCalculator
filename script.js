let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const gold_cost = parseFloat(document.getElementById('gold_cost').value);
    const making = parseFloat(document.getElementById('making').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const hallmarking = parseFloat(document.getElementById('hallmarking').value);
    const gst = parseFloat(document.getElementById('gst').value);
    const result = document.getElementById('output');
    let gold_cost_status=false, making_status=false, weight_status=false,gst_status=false;

    if(gold_cost === '' || isNaN(gold_cost) || (gold_cost <= 0)){
        document.getElementById('gold_cost_error').innerHTML = 'Please provide a valid amount';
    }else{
        document.getElementById('gold_cost_error').innerHTML = '';
        gold_cost_status=true;
    }

    if(making === '' || isNaN(making) || (making <= 0)){
        document.getElementById('making_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('making_error').innerHTML = '';
        making_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(gst === '' || isNaN(gst) || (gst <= 0)){
        document.getElementById('gst_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('gst_error').innerHTML = '';
        gst_status=true;
    }


    if(gold_cost_status && making_status && weight_status && gst_status){
        var raw_cost = ((gold_cost+making)*(weight))
        if(hallmarking === '' || hallmarking === '0' || isNaN(hallmarking)){
            var final_cost = ((raw_cost)+((gst/100)*raw_cost)).toFixed(2);
        }else{
            raw_cost = raw_cost + hallmarking
            var final_cost = ((raw_cost)+((gst/100)*raw_cost)).toFixed(2);
        }
        result.innerHTML = 'RS : ' + final_cost;

    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});