teste = prompt("Quer entrar em testes ou deseja ir para os exercicios?, 1 para sim.");
if (teste = 1) {


    console.log(5 > 2)
    console.log(true && true)
    console.log(true && false);
    console.log(false || false)
    console.log(!true);
    let idade = prompt('Qual sua idade?');
    console.log(idade)
    alert('main cot la mola se ta veio em')
    let maiorNumero = Math.max(1, idade, 5, 20, 54)
    alert('maior numero e ' + maiorNumero)
    if (idade >= 18) {
        alert('Se maior de idade enton se pode entrar nessa bagaca tendeu')
    }
    else {
        alert('Ou vagabundo pode nao pode nao')
    }
    let potencia = Math.pow(5, 2);
    alert(potencia);
    let seila = 0;
    while (seila <= 5) {
        console.log(seila);
        seila++;
    }
    for (let numero = 2; numero < 100; numero *= 2) {
        console.log("O numero e: " + numero);
    }
}
else {
    let idade = prompt("Para entrar na balada voce precisa ser maior de idade, Diga qual sua idade:");
    if (idade >= 18) {
        console.log("Voce e maior de idade portanto pode entrar na baladita");
    }
    else {
        console.log("você é menor de idade");
    }
    const nome = 'ilan';
    let verificanNome = prompt("diga o nome como senha para poder entrar na balada:");
    if (verificanNome == nome) {
        console.log("Nome correto, pode entrar.");
    }
    let base = prompt("Mostre que voce e bom em matematica e ganhe um whisky. Para o programa, diga um numero para a base da potencia");
    let expoente = prompt("Agora o expoente: ");
    let resulExpoente = Math.pow(base, expoente);
    console.log("Muito bem, o resultado foi" + resulExpoente + ", Parabens, Voce ganhou um whisky!");
    let velocidade = prompt("Agora, diga a velocidade na qual voce veio hoje no seu honda civic na BR 277 as 22:40");
    if (velocidade > 80) {
        console.log("Parece que voce estava acima da velocidade permitida: 80.");
    }
    else {
        console.log("Parabéns, você está dentro do limite de velocidade.");
    }
    let cnh = prompt("Afinal, voce possui a carteira nacional de habilitacao ? 1 para sim");
    if (cnh == 1) {
        if (idade >= 18) {
            let usuario = alert("Parabens, voce esta certinho diante da lei das estradas atualmente.");
        }
        else {
            if (idade >= 18) {
                let naoUsuario = alert("Cuidado, voce esta andando em uma rodovia sem cnh?, maluco, voce tem " + idade + "anos, ja esta na hora de ir atras da cnh em!.");

            }
            else {
                let malUsuario = alert("maluco memo");
                let x = 0;
                while (x < 10) {
                    console.log("Voce esta a " + x + " passos de ir pro badalo");
                }
            }
        }
    }
    alert("4 e par hoje?, qual a quantidade de pares q vc vai pegar hj? haha");
    for (let i = 0; i <= 50; i++) {
        if (i % 2 == 0)
            console.log("O " + i + " e par pra hoje em haha");
        else
            console.log("O " + i + " nem rola pra hoje :( ");
    }
    alert("Cuidado seu sagas, pra nao ficar incesto lugar hoje em....");
    let incesto = prompt("Me pergunte antes se aquela e prim@ ou nao...");
    function primo(num) {
        if (num <= 1) {
            return false;
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    console.log(primo(incesto));


}