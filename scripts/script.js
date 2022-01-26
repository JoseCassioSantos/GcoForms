function gerar(){

    let tnome = document.getElementById('nome')
    let tmatricula = document.getElementById('matricula')
    let temail = document.getElementById('email')

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



   
    
    

    console.log(formcont)
    
}


