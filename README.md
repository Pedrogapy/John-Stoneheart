# Ficha automatizada de John Stoneheart

Site estático pronto para GitHub Pages, feito para a ficha de John Stoneheart: anão feiticeiro de Magia Selvagem com sonho de minerador.

## Arquivos

- `index.html`: estrutura da ficha.
- `style.css`: visual estilizado com tema de runas, pedra, ouro e magia selvagem.
- `script.js`: automações, cálculos, rolagens, salvamento local, exportação e importação da ficha.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo: `john-stoneheart-ficha`.
2. Envie os arquivos `index.html`, `style.css`, `script.js` e `README.md` para a raiz do repositório.
3. Abra `Settings` no repositório.
4. Entre em `Pages`.
5. Em `Build and deployment`, selecione `Deploy from a branch`.
6. Em `Branch`, escolha `main` e a pasta `/root`.
7. Salve e aguarde o GitHub gerar o link do site.

## Como usar

- A ficha salva sozinha no navegador usando `localStorage`.
- Use `Exportar JSON` para baixar um backup da ficha.
- Use `Importar JSON` para restaurar o backup em outro navegador.
- Os atributos recalculam modificadores, salvaguardas, perícias, CD de magia, ataque mágico e percepção passiva.
- Magias consomem espaços automaticamente quando você clica em `Usar`.
- A área de rolagem aceita expressões como `1d20+5`, `2d12`, `3d8+3`.

## Observação

Este site não precisa de servidor, banco de dados ou instalação. Ele funciona apenas com HTML, CSS e JavaScript.
