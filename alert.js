$(document).ready(function(){

  $("#titulo").click(function(){
    $("#titulo").addClass("arriba")
    setTimeout(()=>{
      $("#survey-form").css("display","flex")
      $("#titulo").css("display","none")
      $("#survey-form").addClass("sube")
    },1500)

  })
  
  
    
  $("form").on("submit",function(){
          
    Swal.fire(
      'Formulario Completado',
      'Se envío la solicitud',
      'success'
    )
                 
    $("#name").val("");
    $("#surname").val("");
    $("#email").val("");
    $("#email").val("");
    $("#number").val("");
    $("#dropdown").val("");
    $("#mensaje").val("");
    if($("#radioIp")[0].checked){
      $("#radioIp")[0].checked = false;
    }
    if($("#radioMo")[0].checked){
      $("#radioMo")[0].checked = false;
    }
    if($("#radioSa")[0].checked){
      $("#radioSa")[0].checked = false;
    }
    if($("#checkCa")[0].checked){
      $("#checkCa")[0].checked = false;
    }
    if($("#checkSe")[0].checked){
      $("#checkSe")[0].checked = false;
    }
    if($("#checkGp")[0].checked){
      $("#checkGp")[0].checked = false;
    }
    if($("#checkRa")[0].checked){
      $("#checkRa")[0].checked = false;
    }
    $(".swal2-confirm").click(()=>{
      setTimeout(()=>{
        window.location.reload();
      },1000)
    })

    
    return false;


  });            
});