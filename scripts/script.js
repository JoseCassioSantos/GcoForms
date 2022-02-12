



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


   document.getElementById('res1').innerHTML = "<h3>"+formcont.ferramenta+"</h3><br>Nome :"+formcont.nome+ "<br> Matricula: "+formcont.matricula+"<br> E-mail: " +formcont.email+ "<br> Telefone: " +formcont.ramal+ "<br> Andar: "  +formcont.site+ "<br> Site: " +formcont.andar+ "<br> Opreração: " +formcont.op+ "<br> Ferramenta Afetada: " +formcont.ferramenta+
   "<br>Maquinas Afetadas: " +formcont.maquinas1+ " de " +formcont.maquinas2+ "<br> Descrição:<pre>" +formcont.descricao+ "<pre><br>Inicio em: "  +formcont.horario+ "<br> Chamado: "+formcont.chamado+ "."
    

let content = res1.innerText

localStorage.setItem(formcont.chamado, content)

document.getElementById("titulo").innerText = formcont.chamado

document.getElementById("notes").innerHTML = localStorage.getItem(formcont.chamado)



console.log(content)
 

} 

onload= function() {
  
  
  
    lista = localStorage.length
  
    for(let i = 0; i < lista; i++ ){
  
      let name = localStorage.key(i)
      let onclick = document.createAttribute('onclick')
      let sclass = document.createAttribute('class')
      let btn = document.createElement('button')
      onclick.value ="backlist("+i+")"
      sclass.value = "btn2"
      btn.innerHTML = name
      btn.setAttributeNode(sclass)
      btn.setAttributeNode(onclick)
      document.getElementById('minhaLista').appendChild(btn)
     
    }
    
    
   
  }
  
  function copy() {
  
    var copyText = document.getElementById("notes");
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
  
    navigator.clipboard.writeText(copyText.value);
    
    
  }

   function backlist(x){
    let rnota = document.getElementById('notes')
    let rtitulo = document.getElementById('titulo')
  
    rtitulo.innerHTML = localStorage.key(x)
    rnota.innerHTML = localStorage.getItem(localStorage.key(x))
  
    
    
  }