$(document).ready(function () {
    // menu
    $('.header__burger').click(function () {
        $(this).toggleClass("active");
        $('.header__menu').toggleClass("active");
        $('body').toggleClass("lock");
    });

    // drop mobile
    $('.header-menu__item--drop').click(function () {
        $(this).toggleClass("active-mobyle");
    });

    // list-data
    const listItemHead = document.querySelectorAll('.list-data__item-head');
    listItemHead.forEach(element => {
        element.addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    })

    //select
    const select = new Choices('.select-default', {
        maxItemCount: 2,
        searchEnabled: false,
        itemSelectText: '',
        classNames: {
            containerOuter: 'choices select-choices',
        },
    });

    //validate
    let formReg = $("#form-registration");
    formReg.validate({
        highlight: function ( element, errorClass, validClass ) {
            $( element )
                .parents( ".holder-input" )
                .addClass( "error-item" )
                .removeClass( "valid-item" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element )
                .parents( ".holder-input" )
                .addClass( "valid-item" )
                .removeClass( "error-item" );
        },
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            password: {
                required: true,
                minlength: 8
            },
            confirmpassword: {
                required: true,
                equalTo: '#password',
            }
        },
        messages: {
            name: "пожалуйста заполните поле",
            email: "введите корректную почту",
            phone: "error",
            password: "error",
            confirmpassword: "error"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

});
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 200,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#amount1" ).text(ui.values[ 0 ]);
        $( "#amount2" ).text(ui.values[ 1 ]);
      }
    });
    $( "#amount1" ).text($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).text($( "#slider-range" ).slider( "values", 1 ));
} );

$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    if (scroll) {
        $(".header").addClass("darkHeader");
    } else {
        $(".header").removeClass("darkHeader");
    }
});

// popap
(function ($) {
	'use strict';

	$(document).ready(function () {
		initPopup();
	}); // ready

	// functions
	function initPopup() {
		$(document).on('click', '.modal__content', function(e) {
			e.stopPropagation();
		});

		
		let data_modal = document.querySelectorAll("[data-modal]");
		if(data_modal.length > 0){
			for(let i = 0; i < data_modal.length; i++){
				var target;
				data_modal[i].addEventListener("click", () =>
				{
					if(target !== undefined){
						target.classList.remove("modal--show");
					}
					
					target = document.querySelector(`.modal${data_modal[i].getAttribute("data-modal")}`);
					target.classList.add("modal--show");
				})
			}
		}

		$(document).on('click', '[data-close-modal], .modal', function(e) {
			e.preventDefault();
			$('.modal').removeClass('modal--show');
			$('body').removeClass('lock');
		});
	}
})(this.jQuery);