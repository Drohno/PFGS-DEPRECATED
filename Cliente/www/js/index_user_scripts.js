/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
    
function register_event_handlers()
 {
     
    /* button  #navBPrinci */
    $(document).on("click", "#navBPrinci", function(evt)
    {    
        uib_sb.toggle_sidebar($("#sbPrin")); 
        
    });

        /* button  Button */


        /* button  #navBtiendas */


        /* button  #navBtiendas */
    $(document).on("click", "#navBtiendas", function(evt)
    {
        registrado();
        uib_sb.toggle_sidebar($(".uib_w_10"));
       
    });

        
        /* button  Botigues */


        /* button  Promos */


        /* button  #bTp */


        /* button  #bTp */


        /* button  #bPp */


        /* button  #bTp */
    

        /* button  #bPt */
    $(document).on("click", "#bPt", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
    });

        /* button  #navBpromos */
    $(document).on("click", "#navBpromos", function(evt)
    {
        registrado();
        uib_sb.toggle_sidebar($("#sbpromos"));
    });

        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* listitem  Fotografía e Informática */


        /* button  #navB */
    $(document).on("click", "#navB", function(evt)
    {
        registrado();
        uib_sb.toggle_sidebar($("#sb"));
    });

        /* listitem  Fotografía e Informática */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#a20cmstudio");
    });

        /* listitem  Librerías, papelerías */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#abacus");
    });

        /* listitem  Informática Sant Boi */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* listitem  Informática Sant Boi */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#informaticastboi");
    });

        /* button  #navRegistro */
    $(document).on("click", "#navRegistro", function(evt)
    {
        registrado();
        uib_sb.toggle_sidebar($("#sbRegistro"));
    });

        /* button  #bPp */


        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */


        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });
     
        /* listitem  .uib_w_21 */


        /* listitem  El Fogon de Sant Boi */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fogonstboi");
    });

        /* listitem  Fotografía e Informática */


        /* listitem  Fotografía e Informática */
    $(document).on("click", ".uib_w_26", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#a20cmstudio");
    });

        /* listitem  Librerías, papelerías */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#abacus");
    });

        /* listitem  Informática Sant Boi */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#informaticastboi");
    });

        /* listitem  .uib_w_34 */
    $(document).on("click", ".uib_w_34", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#quiroteresa");
    });

        /* listitem  El Fogon de Sant Boi */
    $(document).on("click", ".uib_w_35", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fogonstboi");
    })

        /* button  #register */
    $(document).on("click", "#register", function(evt)
    {
        $.ajax({
                type:'POST',
                url:'http://appserv.hol.es/appservice.php',
                data: $("#form_registro").serialize(),
                dataType: 'json',
                success: function (data) {
                    if(data.resultat.localeCompare("ok") == 0){
                        alert("Correctamente registrado");
                        //GUARDAR DATOS DEL FORMULARIO EN EL LOCALSTORAGE Y PONEMOS REGISTRADO A TRUE
                        localStorage.setItem("email",jQuery('input[name="email"]').val());   
                        localStorage.setItem("nom",jQuery('input[name="nom"]').val());                        
                        localStorage.setItem("ape",jQuery('input[name="ape"]').val());
                        localStorage.setItem("edad",jQuery('input[name="edad"]').val());
                        localStorage.setItem("registrado","true");
                        
                    }else{
                        var fallo = data.error;
                        fallo = fallo.match(/Duplicate entry/i);
                        if(fallo[0].localeCompare("Duplicate entry") == 0){
                            alert("Ya se ha registrado ese email");
                        }else{
                            alert("Error de conexión con el servidor");
                        }
                    }
                },
                error: function(xhr, textStatus, errorThrown, data){
                    console.log("xhr.status: " + xhr.status);
                    console.log("xhr.statusText: " + xhr.statusText);
                    console.log("xhr.readyState: " + xhr.readyState);
                    console.log("xhr.responseText: " + xhr.responseText);
                    console.log("errorThrown: " + errorThrown);
                    
                }
            });
        evt.preventDefault();   
    });
    
        /* button  #bPc */
    $(document).on("click", "#bPc", function(evt)
    {
         /*global activate_page */
         activate_page("#cuenta"); 
    });
    
        /* button  #navBCuenta */
    $(document).on("click", "#navBCuenta", function(evt)
    {
         registrado();
         uib_sb.toggle_sidebar($("#sbCuenta"));  
    });
    
        /* button  #SliderBarBotonRegistro */
    
    
        /* button  #bTp */
    $(document).on("click", "#bTp", function(evt)
    {
         /*global activate_page */
         activate_page("#tiendas"); 
    });
    
        /* button  #SliderBarBotonRegistro */
    $(document).on("click", "#SliderBarBotonRegistro", function(evt)
    {
         /*global activate_page */
         activate_page("#registro"); 
    });
    
        /* button  #SliderBarBotonCuenta */
    $(document).on("click", "#SliderBarBotonCuenta", function(evt)
    {
         /*global activate_page */
         activate_page("#cuenta"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
