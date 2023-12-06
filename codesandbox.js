<DOCTYPE html
    <html>
        <body>
            function adicionarLista(cadastro){
                var itemLista=document.createElement("li");
                itemlista.appendChild(document.createTextNode(cadastro.nome+'_'+ cadastro.formadepagamento));
                document.getElementaryById("listaCadastros").appendChild(itemdalista);

                var cadastrosExistentes = localStorage.getitem('cadastros');
                var cadastros = cadastrosExistentes? JSON.parse(cadastrosExistentes).[];
                 cadastros.push(cadastro);
                 localStorage.setItem ('cadastros', JSON.stringfy(cadastros));
            }



            function adicionarCadastro(){
                var: nome = document. getElememtById("nome").value
                var: endereco = document. getElememtById("endereço").value
                var: teleefone/zap = document.getElememtById("telephone/zap").value 
                var: email = document.getElementById("email").value 
                var: forma de pagamento = document.getElememtById("formadepagamento").value 
               if (nome.trim()===''||endereco.trim()===''||telefone/zap.trim()===''||email.trim()===''||formadepagamento.trim()===''){
                alert('por favor preencha todos os campos')
                return;
               }
               var cadastro={
                nome: nome,
                endereco: endereco,
                telefone/zap: telefone/zap,
                email: email,
                formadepagamento: forma de pagamento
               };

                adicionarLista(cadastro);
                document.getElementaryById("nome").value='';
                document.getElementaryById("endereç").value='';
                document.getElementaryByI("telefone/za").value='';
                document.getElementaryById("emai").value='';
                document.getElementaryById("formadepagament").value='';

function carregarcadastros(){
    var cadastrosexistentes =localstorage.getitem('cadastr');
    
    if(cadastrosexistentes);{
    var cadstros=JSON.parse(cadastrosexistentes)
     cadastros.forearch (function (cadstro){
        adicionarlista(cadstro);
     });

} 

            
           
           
           
           
           }
            <!-- conteúdo da página -->
              