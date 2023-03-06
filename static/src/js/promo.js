odoo.define('payment_stripe.stripe', function (require) {
"use strict";

    //var paymentForm = $('.o_payment_form');
    //var r = paymentForm.find('input[name="amount3"]');

    // Averiguo cual es el total que tiene que carrito de compra
    var rr =$("#order_total strong.monetary_field").text();
    console.log("---- El total del carrito de compra es " + rr);

    var select = $('#promos_select');
    $('#insercion_select').append(select);

  // Esta función se ejecuta cuando se presiona el botón con el id=btn_cal_val_cuotas
  $("#btn_cal_val_cuotas").click(function(){


        // paso 1: averiguo cual es la promo que tiene el tilde y le tomo los datos de la promo.
        // 1.1 recorro todos los select que hay

//        var datos_promo_seleccionada;
//        $('input[type=checkbox]:checked').each(function() {
//                  datos_promo_seleccionada = $(this).val();
//
//                  var due = parseFloat(datos_promo_seleccionada.split(",")[0].split(":")[1]);
//                  var tax = parseFloat(datos_promo_seleccionada.split(",")[1].split(":")[1]).toFixed(2);
//                  var total_carrito  = $("#order_total strong.monetary_field").text();
//                  var total = parseFloat(total_carrito.replace("$","").replace(",",".")).toFixed(2);
//
//                  // calculamos las cuotas según los intereses
//                  // calculamos las cuotas según los intereses
//                var ttotal, importe_cuotas = 0;
//
//                ttotal = (total * ((tax / 100) + 1)).toFixed(2);
//                importe_cuotas = (ttotal / due).toFixed(2).toString().replace(".",",");
//                ttotal = ttotal.toString().replace(".",",")
//
//                $("#cuota").text("> Cantidad de cuotas: " + due)
//                $("#importe").text("> Pago mensual: $ " + importe_cuotas)
//                $("#total").text("> Total a pagar: $ " + ttotal)
//
//                  console.log("Checkbox " + $(this).prop("id") +  " (" + datos_promo_seleccionada + ") Seleccionado");
//              });

        // 1.2 si el select está tildado le tomo los datos y lo guardo en una variables llamada: datos_promo_seleccionada

        // paso2: con los datos de la promo y el total de la compra calculo los valores de las cuotas y el total que le queda al cliente

        // paso3: muestro los resultados usuario con alguna pantalla


        // ---- pruebas de Ale
//        var r_select_promo = $("#promo10").text()
//        console.log(" -- Leyendo la promo 10 -> " + r_select_promo);

  		//alert($("#order_total strong.monetary_field").text());

  		// veo si un checkbox está tildado.
//  		var r = $('#rdb_promo10').is(':checked')

  });


    //Pruebas JR

    //ONCHANGE EN SELECT PROMOS
    $("#promos_select").change(function(){
        let option = $('select option:selected').val();
        console.log(option)

        if(option != 0){
            var due = parseFloat(option.split(",")[0].split(":")[1]);
              console.log('Cuotas', due)
              var tax = parseFloat(option.split(",")[1].split(":")[1]).toFixed(2);
              console.log('Impuesto', tax)
              var total_carrito  = $("#order_total strong.monetary_field").text();
              console.log('Total del Carrito', total_carrito)
              var total = parseFloat(total_carrito.replace("$","").replace(".","")).toFixed(2);
              console.log('Total', total)

              // calculamos las cuotas según los intereses
              // calculamos las cuotas según los intereses
            var ttotal, importe_cuotas = 0;

            ttotal = (total * ((tax / 100) + 1)).toFixed(2);
            console.log("ttotal 1", ttotal)
            importe_cuotas = (ttotal / due).toFixed(2).toString().replace(".",",");
            ttotal = ttotal.toString().replace(".",",")

            console.log(ttotal)

            $("#cuota").text("> Cantidad de cuotas: " + due)
            $("#importe").text("> Pago mensual: $ " + importe_cuotas)
            $("#total").text("> Total a pagar: $ " + ttotal)
        }else{
            console.log("la opcion es 0:", option)


            $("#cuota").text("> Cantidad de cuotas: " + "")
            $("#importe").text("> Pago mensual: $ " + "")
            $("#total").text("> Total a pagar: $ " + "")

        }


        })


    console.log(option)




});
