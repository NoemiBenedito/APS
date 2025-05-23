$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_sobre').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
       
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        // Sombra no header
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(8, 7, 7, 0.6)');
        }

        // Detectar qual seção está visível i=index
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // quebra o .each()
            }
        });

        // Atualizar classe 'active' nos itens de navegação,ou seja , o tracinho ue fica embaixo
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', { 
        origin:'left',
        duration:2000,
        distance:'20%'

    });

    ScrollReveal().reveal('#sobre', { 
        origin:'left',
        duration:2000,
        distance:'20%'

    });

    ScrollReveal().reveal('#informacoes_planeta', { 
        origin:'left',
        duration:1000,
        distance:'20%'

    });

    ScrollReveal().reveal('.dica', { 
        origin:'right',
        duration:1000,
        distance:'20%'

    });
    ScrollReveal().reveal('#solucoes', { 
        origin:'left',
        duration:2000,
        distance:'20%'

    })

});