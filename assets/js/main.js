$(document).ready(function(){

    $('.modal__body').click(function(){
        $(".modal__body").removeClass('show')
    })

    $(".js__modal__show").click(function(){

      $(".modal__body").addClass('show')
    });


    $('.modal-content').click(function(event){
        event.stopPropagation();
    })

    $(".js__modal__close").click(function(){
        $(".modal__body").removeClass('show')
    })
  });