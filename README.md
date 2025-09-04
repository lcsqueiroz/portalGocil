# Portal Gocil - Ponto de Acesso Central

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Visão Geral

O Portal Gocil é uma interface web moderna e responsiva, projetada para ser o ponto de acesso para colaboradores da Gocil. A plataforma centraliza o acesso a sistemas internos, oferece informações sobre programas de capacitação e facilita o contato com a empresa, tudo em um ambiente visualmente coeso e alinhado à identidade da marca.

Este projeto foi desenvolvido com foco em manutenibilidade e escalabilidade, utilizando uma arquitetura de CSS modular e Design Tokens para garantir consistência e facilitar futuras atualizações.

## ✨ Funcionalidades Principais

- **Design Responsivo:** Experiência de usuário otimizada para desktops, tablets e dispositivos móveis.
- **Navegação Intuitiva:** Acesso rápido às seções principais através de um cabeçalho fixo e menu hambúrguer em telas menores.
- **Acesso a Sistemas:** Links diretos para os sistemas essenciais, como CRM, GLPI, Projuris, entre outros.
- **Universidade Corporativa:** Seção dedicada à divulgação de cursos e programas de desenvolvimento profissional.
- **Carrossel de Parceiros:** Componente dinâmico que exibe os parceiros da Gocil de forma contínua e interativa.
- **Informações de Contato:** Acesso fácil a endereços, telefones e e-mails importantes.

## 🚀 Começando

Para visualizar o projeto, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/portal-gocil.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd portal-gocil
    ```
3.  **Abra o arquivo principal no navegador:**
    Abra o arquivo `web/index.html` em seu navegador de preferência (Google Chrome, Firefox, etc.).

O projeto é totalmente estático e não requer um servidor web para ser executado.

## 📂 Estrutura de Arquivos

A estrutura de arquivos foi organizada de forma a separar as responsabilidades, facilitando a manutenção:

```
/portalGocil
|-- web/
|   |-- assets/               # Imagens, ícones e logos
|   |-- js/                   # Scripts JavaScript
|   |   `-- main.js
|   |-- style/                # Arquivos de estilização
|   |   |-- base/             # Reset, variáveis (Design Tokens) e estilos base
|   |   |-- components/       # Estilos para componentes reutilizáveis (botões, cards)
|   |   |-- layout/           # Estilos de layout (header, footer, grid)
|   |   |-- sections/         # Estilos para seções específicas da página
|   |   `-- main.css          # Ponto de entrada que importa todos os outros arquivos CSS
|   `-- index.html            # Arquivo principal HTML
|-- .gitignore
|-- LICENSE
`-- README.md
```

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões para melhorar o projeto, sinta-se à vontade para forkar o repositório e abrir um pull request. Para grandes mudanças, por favor, abra uma issue primeiro para discutirmos o que você gostaria de mudar.

1.  Fork o projeto
2.  Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Push para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.