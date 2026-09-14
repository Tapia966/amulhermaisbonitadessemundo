# Rafael & Sammi — Presente Digital de Namoro

Uma experiência romântica, elegante, cinematográfica e moderna desenvolvida sob medida para celebrar o amor, funcionando totalmente sem backend (estática).

---

## 📂 Estrutura de Pastas

```text
/
├── index.html          # Página principal estruturada em HTML5 semântico
├── style.css           # Estilos avançados, variáveis :root e design responsivo
├── script.js           # Lógica centralizada, contador em tempo real, carrossel e lightbox
└── assets/
    ├── photos/         # Suas fotos em alta qualidade
    │   ├── foto01.jpg
    │   ├── foto02.jpg
    │   └── foto03.jpg
    │
    ├── music/          # Música de fundo romântica
    │   └── musica.mp3
    │
    └── icons/          # Ícones e elementos visuais opcionais
```

---

## ⚙️ Guia de Configuração (Tudo em um só lugar)

Todas as informações pessoais, datas, frases e fotos estão centralizadas no início do arquivo `script.js` dentro do objeto `CONFIG`.

### 1. Como alterar os nomes
Abra o arquivo `script.js` e edite as propriedades:
```javascript
const CONFIG = {
    herName: "Sammi",
    hisName: "Rafael",
    ...
```

### 2. Como alterar a data de início do relacionamento
No arquivo `script.js`, altere a propriedade `relationshipStart` mantendo o formato ISO (Ano-Mês-DiaTHH:MM:SS):
```javascript
relationshipStart: "2026-10-24T00:00:00",
```
O contador em tempo real calculará automaticamente os dias, horas, minutos e segundos decorridos.

### 3. Como adicionar e trocar fotos
1. Adicione suas fotos em formato JPG ou PNG dentro da pasta `assets/photos/`.
2. Nomeie-as de forma organizada (ex: `foto01.jpg`, `foto02.jpg`, etc.).
3. No arquivo `script.js`, atualize as listas `carouselPhotos`, `mosaicPhotos` e `timelineEvents` apontando para os caminhos corretos das imagens.

### 4. Como trocar a música
1. Converta sua música favorita para o formato `.mp3`.
2. Substitua o arquivo existente em `assets/music/musica.mp3` (ou adicione seu arquivo e atualize o caminho no `<source>` do `index.html` se necessário).
*Nota:* Devido às políticas de segurança dos navegadores modernos contra autoplay com áudio, o site conta com uma elegante tela inicial de entrada ("Tenho uma coisa pra te mostrar. [ Entrar ]") que inicia a trilha sonora perfeitamente ao primeiro toque.

### 5. Como alterar textos e frases
Todos os textos do Hero, da citação central, dos momentos especiais e da seção final estão localizados no objeto `CONFIG` no topo de `script.js`.

---

## 🚀 Como Executar Localmente

Como o projeto é 100% estático (HTML, CSS e JS puro), você pode testá-lo instantaneamente:
1. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador.
2. (Recomendado) Para uma melhor experiência de desenvolvimento, utilize a extensão **Live Server** no Visual Studio Code.

---

## 🌐 Como Publicar Gratuitamente no GitHub Pages

1. Crie um repositório público no [GitHub](https://github.com).
2. Faça o upload de todos os arquivos do projeto (`index.html`, `style.css`, `script.js`, `README.md` e a pasta `assets/`).
3. No seu repositório do GitHub, vá em **Settings** > **Pages**.
4. Na seção **Build and deployment**, em **Branch**, selecione `main` (ou `master`) e `/ (root)`, e clique em **Save**.
5. Em alguns minutos, o GitHub fornecerá o link público onde o seu site estará rodando online e acessível de qualquer celular ou computador!

---

## 📱 Recomendações para as Fotos
* **Formato:** JPG otimizado ou WebP para carregamento ultrarrápido.
* **Proporção:** Fotos verticais e horizontais funcionam perfeitamente graças ao design responsivo do carrossel e da galeria.
* **Tamanho ideal:** Resolução sugerida entre 1200px e 1920px de largura para garantir alta definição em telas Retina sem pesar o carregamento.
