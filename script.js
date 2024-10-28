const furniture = [];

function showMenu() {
  let option;
  do {
    option = prompt(
      `\nQuantidade de imóveis cadastrados: ${furniture.length}
      \nEscolha uma opção:
      \n1. Cadastrar novo imóvel
      \n2. Listar imóveis cadastrados
      \n3. Sair`
    );

    switch (option) {
      case '1':
        registerProperty();
        break;
      case '2':
        listProperties();
        break;
      case '3':
        alert("O JS foi dormir");
        break;
      default:
        alert("Voce escolheu um numero que não é um dos que foi pedido. tente novamente");
    }
  } while (option !== '3');
}

function registerProperty() {
  const property = {
    owner: prompt("Informe o nome do proprietário:"),
    room: prompt("Informe a quantidade de quartos:"),
    bathroom: prompt("Informe a quantidade de banheiros:"),
    garage: confirm("O imóvel possui garagem?") ? "Sim" : "Não"
  };

  const confirm = confirm(
    `Deseja salvar este imóvel?\n
    Proprietário: ${property.owner}
    Quartos: ${property.room}
    Banheiros: ${property.bathroom}
    Garagem: ${property.garage}`
  );

  if (confirm) {
    property.push(property);
    alert("Imóvel foi cadastrado com sucesso!");
  } else {
    alert("Cadastro foi cancelado.");
  }
}

function listProperties() {
  if (property.length === 0) {
    alert("Nenhum imóvel foi cadastrado.");
    return;
  }

  let list = "Imóveis cadastrados:\n\n";
  property.forEach(property, index) => {
    list += `Imóvel ${index + 1}:
    Proprietário: ${imovel.owner}
    Quartos: ${imovel.room}
    Banheiros: ${imovel.bathroom}
    Garagem: ${imovel.garage}\n\n`;
  };

  alert(list);
}
showMenu();
