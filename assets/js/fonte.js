$(document).ready(function(){
    let fonte = 14

    $('.aumentar').click(function(){
        if(fonte<26){ 
            fonte = fonte + 2
            $('body').css({'font-size': fonte + 'px'})
        }
    })

    $('.diminuir').click(function(){
        if(fonte>14){
            fonte = fonte -2
            $('body').css({'font-size': fonte + 'px'})
        }
    })

})
