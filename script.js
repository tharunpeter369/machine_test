


//change option values with selection
$(document).ready(function(){
    $('select').on('change', function(event ) {
        //restore previously selected value
        var prevValue = $(this).data('previous');
        $('select').not(this).find('option[value="'+prevValue+'"]').show();
        //hide option selected                
        var value = $(this).val();
        //update previously selected data
        $(this).data('previous',value);
        $('select').not(this).find('option[value="'+value+'"]').hide();
    });
 });
 
 //form validation while submit
 function validateform(){
     val1=$('#option1').val()
     val2=$('#option2').val()
     val3=$('#option3').val()
     if(val1 == ""|| val2 == "" || val3 === ""){
         alert('Please select dropdown')
         console.log("Please select dropdown");
         return false;
     }else{
        console.log("form submitted");
         alert("form submited")
         return true;
     }
 }
 