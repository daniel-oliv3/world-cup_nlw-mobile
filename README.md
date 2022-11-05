
##
### Mobile
##

### Pré-Requisitos.

React.js, React Native, Node.js, JavaScript, TypeScript.

**Node.js**
- Site: https://nodejs.org/en/

**React.js**
- Site: https://pt-br.reactjs.org/

**Next.js**
- Site: https://nextjs.org/

**TypeScript**
- Site: https://www.typescriptlang.org/

**React Native**
- Site: https://reactnative.dev/

**Expo**
- Site: https://expo.dev/

**Expo Go**
- Site: https://expo.dev/client

**Android Studio**
- Site: https://developer.android.com/studio

### Ferramentas do programador.

**Visual Studio Code**
- Site: https://code.visualstudio.com/download
- Extenção
    - `Prisma`

### React Native

- O que é **React Native**
- O que é o Expo (Documentação)
- Expo Go vs Dispositivo Fisico (Documentação)
- Criar o projeto

**React Native**
- Site: https://reactnative.dev/

**Expo**
- Site: https://expo.dev/

**Expo Go**
- Site: https://expo.dev/client

**Android Studio**
- Site: https://developer.android.com/studio

- Instalar o Expo
- Instalar o Android Studio para fazer a emulação do dispositivo mobile
- Configurar ...
- More Action/Virtual device menager/Create virtual device/
- Criar uma pasta para o projeto `mobile`
- Criar o projeto
- As semelhaças com o React para web
- Importar os Assets 
- Configurar a Splash Screen (Template do figma)
- Nativebase
- Instalar o NativeBase
- Customizar o tema do NativeBase (Tokens)
- Instalar fontes personalizadas
- Garantir o carregamento das fontes
- Criar o componente de Loading
- Criar a tela de SignIn


**Criação do projeto**
- Criar o projeto `mobile`
```
npx create-expo-app mobile
```
- Mudar a extenção do arquivo `app.js` para `app.tsx`
- Criar o arquivo `tsconfig.json` na raiz do projeto 

**Roda o projeto**
- Terminal, QRCode, Emulator(Android Studio), Web
```
npx expo start
```

**NativeBse**
- Site: https://nativebase.io/

- Instalar o NativeBase
- Existing Project
- https://docs.nativebase.io/install-expo
- NPM
```
npm install native-base
```
- SVG 
```
npx expo install react-native-svg@12.1.1
```
- Safe-Area-Context (Iphone X)
```
expo install react-native-safe-area-context@3.3.2
```
- Configurar o arquivo `package.json` adicionando trecho de codigo
- Ultima versão do react
```json
  "overrides": {
    "react": "18.0.0"
  },
```

- Customizar o tema do NativeBase (Tokens)
- https://docs.nativebase.io/default-theme
- Criar a pasta `styles` dentro de `src`
- Criar o arquivo `themes.ts` dentro de `styles`
- Colar o trecho de codigo no aquivo `themes.ts`
- Tokens de tema para o Native Base
```ts
//Themes
import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      950: '#09090A',
      900: '#121214',
      800: '#202024',
      600: '#323238',
      300: '#8D8D99',
      200: '#C4C4CC',
    },
    green: {
      500: '#047C3F'
    },
    yellow: {
      500: '#F7DD43',
      600: '#BBA317',
    },
    red: {
      500: '#DB4437',
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    medium: 'Roboto_500Medium'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56
  }
});
```

- Instalar fontes personalizadas
- Google Fonts
- Site: https://fonts.google.com/
- Fonte Rodoto
- Roboto: https://fonts.google.com/specimen/Roboto

- Expo-font, fonte-roboto
```
npx expo install expo-font @expo-google-fonts/roboto
```
- Criar a pasta `components` dentro da pasta `src`
- Criar o arquivo `Loading.tsx` dentro da pasta `components`
- Criar a pasta `screens` dentro da pasta `src`
- Criar o arquivo `SignIn.tsx` dentro da pasta `screens`















##
### Settings.json
##

**Configurações**
- Vscode `Settings.json`
```js
{
  "emmet.syntaxProfiles" : {
    "javascript" : "jsx"
  },
  "workbench.startupEditor" : "newUntitledFile",
  "editor.fontSize" : 16,
  "javascript.suggest.autoImports" : true,
  "javascript.updateImportsOnFileMove.enabled" : "always",
  "editor.rulers" : [
    80,
    120
  ],
  "extensions.ignoreRecommendations" : true,
  "typescript.tsserver.log" : "off",
  "files.associations" : {
    ".sequelizerc" : "javascript",
    ".stylelintrc" : "json",
    "*.tsx" : "typescriptreact",
    ".env.*" : "dotenv",
    ".prettierrc" : "json"
  },
  "screencastMode.onlyKeyboardShortcuts" : true,
  "cSpell.userWords" : [
    "chakra",
    "IUGU",
    "middlewares",
    "mixpanel",
    "Onboarded",
    "prefetch",
    "rocketseat",
    "upsert"
  ],
  "editor.parameterHints.enabled" : false,
  "editor.renderLineHighlight" : "gutter",
  "cSpell.language" : "en,pt",
  "editor.lineHeight" : 26,
  "material-icon-theme.languages.associations" : {
    "dotenv" : "tune"
  },
  "typescript.updateImportsOnFileMove.enabled" : "never",
  "workbench.colorTheme" : "Omni",
  "material-icon-theme.files.associations" : {
    "tsconfig.json" : "tune",
    "*.webpack.js" : "webpack",
    "*.proto" : "3d",
    "ormconfig.json" : "database"
  },
  "material-icon-theme.activeIconPack" : "nest",
  "editor.suggestSelection" : "first",
  "explorer.confirmDelete" : false,
  "gitlens.codeLens.recentChange.enabled" : false,
  "terminal.integrated.showExitAlert" : false,
  
  "[prisma]" : {
    "editor.formatOnSave" : true
  },
    
  "typescript.suggest.autoImports" : true,
  "terminal.integrated.env.osx" : {
    "FIG_NEW_SESSION": "1"
  },
  "workbench.editor.labelFormat" : "short",
  "editor.fontLigatures" : true,
  "emmet.includeLanguages" : {
    "javascript" : "javascriptreact"
  },
  "liveshare.featureSet" : "insiders",
  "material-icon-theme.folders.associations" : {
    "adapters" : "contract",
    "grpc" : "pipe",
    "kube" : "kubernetes",
    "main" : "lib",
    "websockets" : "pipe",
    "implementations" : "core",
    "protos" : "pipe",
    "entities" : "class",
    "kafka" : "pipe",
    "use-cases" : "functions",
    "migrations" : "tools",
    "schemas" : "class",
    "useCases" : "functions",
    "eslint-config" : "tools",
    "typeorm" : "database",
    "_shared" : "shared",
    "mappers" : "meta",
    "fakes" : "mock",
    "modules" : "components",
    "subscribers" : "messages",
    "domain" : "class",
    "protocols" : "contract",
    "infra" : "app",
    "view-models" : "views",
    "presentation" : "template",
    "dtos" : "typescript",
    "http" : "container",
    "providers" : "include",
    "factories" : "class",
    "repositories" : "mappings"
  },
  "cSpell.enableFiletypes" : [
    "!asciidoc",
    "!c",
    "!cpp",
    "!csharp",
    "!go",
    "!handlebars",
    "!haskell",
    "!jade",
    "!java",
    "!latex",
    "!php",
    "!pug",
    "!python",
    "!restructuredtext",
    "!rust",
    "!scala",
    "!scss"
  ],
  "editor.acceptSuggestionOnCommitCharacter" : false,
  "explorer.compactFolders" : false,
  "git.enableSmartCommit" : true,
  "editor.accessibilitySupport" : "off",
  "explorer.confirmDragAndDrop" : false,
  "terminal.integrated.fontSize" : 14,
  "editor.codeActionsOnSave" : {
    "source.fixAll.eslint" : true,
    // "source.organizeImports": true
  },
  "editor.semanticHighlighting.enabled" : false,
  "breadcrumbs.enabled" : true,
  "workbench.productIconTheme" : "fluent-icons",
  "editor.fontFamily" : "JetBrains Mono",
  "gitlens.codeLens.authors.enabled" : false,
  "editor.tabSize" : 2,
  "security.workspace.trust.untrustedFiles" : "newWindow",
  "files.exclude" : {
    "**\/CVS" : true,
    "**\/.DS_Store" : true,
    "**\/.hg" : true,
    "**\/.svn" : true,
    "**\/.git" : true
  },
  "tabnine.experimentalAutoImports" : true,
  "gitlens.codeLens.enabled": false,
  "workbench.iconTheme": "material-icon-theme"
}
```






##
### 
##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

  ##