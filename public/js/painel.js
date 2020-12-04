
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            
            nav.classList.toggle('show')
            
            toggle.classList.toggle('bx-x')
            
            bodypd.classList.toggle('body-pd')
            
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

const linkColor = document.querySelectorAll('.nav__link')

// function colorLink(){
//     if(linkColor){
//         linkColor.forEach(l=> l.classList.remove('active'))
//         this.classList.add('active')
//     }
// }
// linkColor.forEach(l=> l.addEventListener('click', colorLink))

$(document).ready( function () {
    $('#table_id').DataTable({
        language: {
            processing:     "Tratamento em curso...",
            search:         "Pesquisar&nbsp;:",
            lengthMenu:    "_MENU_ por página",
            info:           "Total de _TOTAL_ elementos",
            infoEmpty:      "Exibindo de l'&eacute;lement 0 &agrave; 0 certo 0 &eacute;l&eacute;mentiras",
            infoFiltered:   "(filtrado; de _MAX_ &eacute;l&eacute;no total)",
            infoPostFix:    "",
            loadingRecords: "Carregando...",
            zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; exibição",
            emptyTable:     "Nenhum dado disponível na tabela primeiro",
            paginate: {
                first:      "Primeiro",
                previous:   "Voltar",
                next:       "Próximo",
                last:       "Mais recentes"
            },
            aria: {
                sortAscending:  ": ative para classificar a coluna em ordem crescente",
                sortDescending: ": ative para classificar a coluna em ordem decrescente"
            }
        }
    });
} );