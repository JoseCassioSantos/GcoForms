function gerar(){

    let tnome = document.getElementById('nome')
    let tmatricula = document.getElementById('matricula')
    let temail = document.getElementById('email')
    let ttelefone = document.getElementById('telefone')
    let tsite = document.getElementById('site')
    let tandar = document.getElementById('andar')
    let top = document.getElementById('op')
    let tferramenta = document.getElementById('assunto')
    let tqtd1 = document.getElementById('qtd1')
    let tqtd2 = document.getElementById('qtd2')
    let tdescricao = document.getElementById('descricao')
    let tincio = document.getElementById('incio')
    let tticket = document.getElementById('ticket')

    let formcont = {
        nome:"",
        matricula:"",
        email:"",
        ramal:"",
        site:"",
        andar:"",
        op:"",
        ferramenta:"",
        maquinas1:"",
        maquinas2:"",
        descricao:"",
        horario:"",
        chamado:""

    }


formcont.nome = tnome.value
formcont.matricula = tmatricula.value
formcont.email = temail.value
formcont.ramal = ttelefone.value
formcont.site = tsite.value
formcont.andar = tandar.value
formcont.op = top.value
formcont.ferramenta = tferramenta.value
formcont.maquinas1 = tqtd1.value
formcont.maquinas2 = tqtd2.value
formcont.descricao = tdescricao.value
formcont.horario = tincio.value
formcont.chamado = tticket.value


   document.getElementById('res').innerHTML = "<h3>"+formcont.ferramenta+"</h3><br>Nome :"+formcont.nome+ "<br> Matricula: "+formcont.matricula+"<br> E-mail: " +formcont.email+ "<br> Telefone: " +formcont.ramal+ "<br> Andar: "  +formcont.site+ "<br> Site: " +formcont.andar+ "<br> Opreração: " +formcont.op+ "<br> Ferramenta Afetada: " +formcont.ferramenta+
   "<br>Maquinas Afetadas: " +formcont.maquinas1+ " de " +formcont.maquinas2+ "<br> Descrição:<pre>" +formcont.descricao+ "<pre><br>Inicio em: "  +formcont.horario+ "<br> Chamado: "+formcont.chamado+ "."
    

    console.log(formcont)
    
}


