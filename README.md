# Formulário em React Native (Desafio da DIO)

## 📖 Descrição

Tive o desafio de desenvolver um formulário com React Native, TypeScript e tema personalizado de minha escolha. O app possui uma tela padrão com um botão que manda o usuário para a tela de formulário. O design do formulário foi feito 100% vanilla (sem bibliotecas externas). O usuário consegue navegar de um campo para o outro clicando em "next" até o último campo e pode submeter o formulário (apenas aparece uma mensagem na tela com as informações fornecidas nos campos).

Esse projeto me fez reformçar meus conhecimentos em TypeScript para tipar todas as propriedades da forma correta, sem ficar espalhando `any` por todo os lados 🤓. Também aprendi a imitar um estilo parecido com `grid layout` para variar o design de alguns campos. Além disso, aprendi a como navegar entre telas e a me acostumar a ler a [documentação do react native](reactnative.dev) 🎉.

## 📦 Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-lambda-form.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-lambda-form/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```bash
code .
```

4. Instale as dependências:

```bash
npm install
```

5. Rode o projeto com o script (padrão):

```bash
npm run start
```

## 📜 Scripts disponíveis

| Script     | Comando                 | Descrição                             |
| ---------- | ----------------------- | ------------------------------------- |
| `start`    | `expo start`            | Inicia o projeto no modo padrão       |
| `android`  | `expo start --android`  | Inicia o projeto no emulador Android  |
| `ios`      | `expo start --ios`      | Inicia o projeto no simulador iOS     |
| `web`      | `expo start --web`      | Inicia o projeto no navegador web     |

## 🗂️ Estrutura do projeto

```
📁 assets/ -> contém os assets (imagens) do projeto.
📁 src/
  📁 components/ -> armazena os components separados em pastas.
  📁 screens/ -> guarda as telas que serão compostas com os componentes.
  📁 routes/ -> inclui as rotas de navegação.
  📁 utils/ -> armazena recursos utilitários.
  📄 app.json -> armazena as configurações do app.
  📄 App.tsx -> entry point do app (componente principal).
```

Os componentes são organizados em pastas com seu devido nome. O componente principal possui a palavra `component` em seu nome, enquanto os estilos incluem a palavra `style`:

```
📁 components/
  📁 TextField/
    📄 TextField.component.tsx -> componente principal
    📄 TextField.style.tsx -> arquivo de estilos
    📄 types.ts -> tipagem de props
```

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=react,ts,nodejs,npm,vscode,bash)](https://skillicons.dev)

- Desenvolvido com `React Native` para criar aplicativos móveis nativos.
- Utiliza `Expo` para facilitar o desenvolvimento e a gestão do projeto.
- Usa `react` para construir a interface do usuário.
- Desenvolvido com `TypeScript` para garantir tipagem forte e maior segurança.
- Ferramentas de desenvolvimento com suporte a tipagens do React.
- Uso de pacotes nativos para o desenvolvimento das telas.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [Expo Docs](https://docs.expo.dev/)
- [React Native: Navigation](https://reactnative.dev/docs/navigation)
- [React Native Navigation Tutorial](https://reactnavigation.org/docs/hello-react-navigation)
- [React Native Type Checking](https://reactnavigation.org/docs/typescript/?config=static#annotating-usenavigation)
- [KeyboardAvoidingView Component](KeyboardAvoidingView)
- [How to Select Next TextInput](https://dev.to/sharmaprash/how-to-select-the-next-textinput-after-pressing-the-next-keyboard-button-in-react-native-525h)
- [Getting Started with React Navigation and TypeScript](https://jscrambler.com/blog/getting-started-with-react-navigation-v6-and-typescript-in-react-native)
- [Why a "type" is valid but not an "interface"](https://www.reddit.com/r/typescript/comments/r9e75x/confusion_in_why_a_type_is_valid_but_not_an/)
- [Lambda Icon](https://www.svgrepo.com/svg/448267/aws-lambda)

## 🧑🏻‍💻 Autor

| [<img src="https://avatars.githubusercontent.com/u/72778164?s=96&v=4"><br><sub>GracilianoOG</sub>](https://github.com/GracilianoOG) |
| :---------------------------------------------------------------------------------------------------------------------------------: |
|                                       [Linkedin](https://www.linkedin.com/in/gabrielgmbarros)                                       |

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
