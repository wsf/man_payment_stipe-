odoo.define('payment_stripe.stripe', function (require) {
"use strict";

    //var paymentForm = $('.o_payment_form');
    //var r = paymentForm.find('input[name="amount3"]');

    // Averiguo cual es el total que tiene que carrito de compra
    var rr =$("#order_total strong.monetary_field").text();
    console.log(rr);

  // Esta función se ejecuta cuando se presiona el botón con el id=btn_cal_val_cuotas
  $("#btn_cal_val_cuotas").click(function(){
        // paso 1: averiguo cual es la promo que tiene el tilde y le tomo los datos de la promo.
        // 1.1 recorro todos los select que hay

        var datos_promo_seleccionada;
        $('input[type=checkbox]:checked').each(function() {
                  datos_promo_seleccionada = $(this).val()
                  console.log("Checkbox " + $(this).prop("id") +  " (" + datos_promo_seleccionada + ") Seleccionado");
              });

        // 1.2 si el select está tildado le tomo los datos y lo guardo en una variables llamada: datos_promo_seleccionada

        // paso2: con los datos de la promo y el total de la compra calculo los valores de las cuotas y el total que le queda al cliente

        // paso3: muestro los resultados usuario con alguna pantalla


        // ---- pruebas de Ale
        var r_select_promo = $("#promo10").text()
        console.log(" -- Leyendo la ppromo 10 -> " + r_select_promo);

  		alert($("#order_total strong.monetary_field").text());

  		// veo si un checkbox está tildado.
  		var r = $('#rdb_promo10').is(':checked')

  });




});
