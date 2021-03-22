var clientes = [
    [nome = "Bruno",
    código = "123",
    senha = "123",
    saldo = 100],
    [nome = "Joaozinho",
    código = "456",
    senha = "456",
    saldo = 10],
]

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")

function procura_cliente(cliente) {
    return cliente[1] == codigo && cliente[2] == senha 
}

var cliente_localizado = (clientes.find(procura_cliente))

if (cliente_localizado == null) {
    alert("Cliente não localizado")
}

else{
  var saldo = cliente_localizado[3]
  if(saldo == 0){
    alert("Você não tem saldo suficiente para realizar a operação")
  }
  else{
    var continuar = true
    while(continuar){
    var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))
    switch(operacao){
      case(1):
        var saque = Number(window.prompt("Qual o valor do saque que deseja realizar?"))
        if(saque <= saldo && saque > 0){
          saldo = saldo - saque
        alert(`O saque foi realizado com sucesso. Seu novo saldo é de R$${saldo}`)
        }
        else{
          alert("Você não pode realizar o saque.")
        }
        break
        case(2):
        var dep = Number(window.prompt("Qual o valor a ser depositado?"))
        saldo = saldo + dep
        alert(`O depósito foi realizado com sucesso. Seu novo saldo é de R$${saldo}`)
        break
        case(3):
        var codigoT = window.prompt("Digite o código da conta a ser efetuada a transferência.")
        var senhaT = window.prompt("Digite a senha da conta a ser efetuada a transferência.")
        function clienteTRF(clienteT) {
        return clienteT[1] == codigoT && clienteT[2] == senhaT 
        }
        var contaTrf = (clientes.find(clienteTRF))
        if(contaTrf == cliente_localizado){
          alert("Não é possível realizar a transferência")
        }
        else if(cliente_localizado[3] == 0){
          alert("Não é possível realizar a transferência.")
        }
        else if(contaTrf[1] == codigoT && contaTrf[2] == senhaT){
          var saldoContaTrf = contaTrf[3]
          var Trf = Number(window.prompt("Qual o valor da transferência a ser realizada?"))
          saldoContaTrf = saldoContaTrf + Trf
          saldo = saldo - Trf
          alert(`Transferência realizada com sucesso. O novo saldo da conta que recebeu a transferência é de R$${saldoContaTrf}. O novo saldo da sua conta é de R$${saldo}`)
        }
    }
    while(true){
        let escolha = window.prompt("Dseja fazer mais uma operação?")
        
        if(escolha == "Sim") {
           break
        }else if(escolha == 'Não'){
           continuar = false
           break
        }
        
        alert("digite Sim ou Não")
        }
  }
    


}
}
