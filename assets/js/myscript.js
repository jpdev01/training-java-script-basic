var valor, observacao, data;
var ipganho=0, ipdespesa=0;
var ganhos = new Array (), despesas = new Array();

function fncadganho(){
  valor=document.cadganho.getElementsByClassName('inputvalor')[0].value;
  observacao=document.cadganho.getElementsByClassName('inputobs')[0].value;
  data=document.cadganho.getElementsByClassName('inputdata')[0].value;
  if(isNaN(valor)){
    alert("Preencha o campo valor corretamente")
    document.cadganho.getElementsByClassName('inputvalor')[0].focus();
  }
  else if (valor==""){
    alert("Preencha o campo valor");
    document.cadganho.getElementsByClassName('inputvalor')[0].focus();
  }
  else if (observacao==""){
    alert("Preencha o campo Observação");
    document.cadganho.getElementsByClassName('inputobs')[0].focus();
  }
  else if (data==""){
    alert("Preencha o campo Data");
    document.cadganho.getElementsByClassName('inputdata')[0].focus();
  }
  else{
    ipganho++
    ganhos[ipganho] = valor;
    ipganho++
    ganhos[ipganho] = observacao;
    ipganho++
    ganhos[ipganho] = data;
    alert("Ganho Cadastrado");
    document.cadganho.getElementsByClassName('inputvalor')[0].value="";
    document.cadganho.getElementsByClassName('inputobs')[0].value="";
    document.cadganho.getElementsByClassName('inputdata')[0].value="";
    return fnexibeval();

  }
}

function fncaddespesa(){
  valor=document.caddespesa.getElementsByClassName('inputvalor')[0].value;
  observacao=document.caddespesa.getElementsByClassName('inputobs')[0].value;
  data=document.caddespesa.getElementsByClassName('inputdata')[0].value;
  if(isNaN(valor)){
    alert("Preencha o campo valor corretamente")
    document.caddespesa.getElementsByClassName('inputvalor')[0].focus();
  }
  else if (valor==""){
    alert("Preencha o campo valor");
    document.caddespesa.getElementsByClassName('inputvalor')[0].focus();
  }
  else if (observacao==""){
    alert("Preencha o campo Observação");
    document.caddespesa.getElementsByClassName('inputobs')[0].focus();
  }
  else if (data==""){
    alert("Preencha o campo Data");
    document.caddespesa.getElementsByClassName('inputdata')[0].focus();
  }
  else{
    ipdespesa++
    despesas[ipdespesa] = valor;
    ipdespesa++
    despesas[ipdespesa] = observacao;
    ipdespesa++
    despesas[ipdespesa] = data;
    alert("Despesa Cadastrada");
    document.caddespesa.getElementsByClassName('inputvalor')[0].value="";
    document.caddespesa.getElementsByClassName('inputobs')[0].value="";
    document.caddespesa.getElementsByClassName('inputdata')[0].value="";
    return fnexibeval();
  }
}

function fnbalanco(){
  var balancovar=0;
  for(i=1 ; i <= ipganho; i){
    ganhos[i] = parseFloat(ganhos[i]);
    balancovar = parseFloat(balancovar) + ganhos[i];
    i=i+3;
  }
  for(i=1 ; i <= ipdespesa; i){
    despesas[i] = parseFloat(despesas[i]);
    balancovar = parseFloat(balancovar) - despesas[i];
    i=i+3;
  }
  alert("Valor do balanço geral: R$" + balancovar);
}

function fnzerarganhos(){
  for(i=1 ; i <= ipganho; i++){
    ganhos[i] = "";
  }
  ipganho=0;
  alert("Todos os ganhos foram apagados do sistema");
  return fnexibeval();
}

function fnzerardespesas(){
  for(i=1 ; i <= ipdespesa; i++){
    despesas[i] = "";
  }
  ipdespesa=0;
  alert("Todos as despesas foram apagadas do sistema");
  return fnexibeval();
}
function fnzerartudo(){
  for(i=1 ; i <= ipganho; i++){
    ganhos[i] = "";
  }
  ipganho=0;
  for(i=1 ; i <= ipdespesa; i++){
    despesas[i] = "";
  }
  ipdespesa=0;
  alert("Todos os valores foram apagados do sistema");
  return fnexibeval();
}

function fnexibeval(){
  var texto = "";
  for(i=1 ; i <= ipganho; i){
    if (i%2==0){
      texto = texto + "<tr class='corLinha'><td>" + ganhos[i] + "</td><td>" + ganhos[i+1] + "</td><td>" + ganhos[i+2] + "</td></tr>"
      i=i+3;
    }
    else{
      var texto = texto + "<tr><td>" + ganhos[i] + "</td><td>" + ganhos[i+1] + "</td><td>" + ganhos[i+2] + "</td></tr>"
      i=i+3;
    }
  }
  document.getElementsByClassName('infoGD')[0].innerHTML=texto;
  texto="";
  for(i=1 ; i <= ipdespesa; i){
    if (i%2==0){
      texto = texto + "<tr class='corLinha'><td>" + despesas[i] + "</td><td>" + despesas[i+1] + "</td><td>" + despesas[i+2] + "</td></tr>"
      i=i+3;
    }
    else{
      texto = texto + "<tr><td>" + despesas[i] + "</td><td>" + despesas[i+1] + "</td><td>" + despesas[i+2] + "</td></tr>"
      i=i+3;
    }
  }
  document.getElementsByClassName('infoGD')[1].innerHTML=texto;
}
