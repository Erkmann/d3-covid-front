# Mateus Erkmann - Covid Predict
Predict de casos de covid em X dias futuros

[Exemplo rodando do projeto](https://covid-erkmann.netlify.app/)

[Repositório do Backend](https://github.com/Erkmann/d3-covid)


## O Projeto
O sistema deve receber um numero N de dias, e devolver uma previsão de novos casos de COVID-19 para cada um dos dias em N dias

### Método
Dado o [CSV](https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/new_cases.csv) de fonte de dados (atualizado diariamente), o sistema pega os casos de COVID,
por dia, dos últimos N dias, faz a média aritmética dos casos, e projeta para o primeiro dia, depois refaz a lista de dias base, utilizando os casos previstos,
 para refazer a média, e projetar ao dia seguinte, sempre utilizando N dias atrás (ou o total de dias disponíveis) como parâmetro para a média. Assim faz sucessivamente
 N vezes, e retorna cada dia e seu respectivo valor previsto de casos.

## Instalação
### Requer:
- NodeJS > 12
- `npm install`
- `cp .env.example .env`
- Edite `.env` para variaveis desejadas, com a URL padrão para o backend rodando em `https://hpx08.pythonanywhere.com/api/v1/predict/`

## Execução (venv ativada)
- `npm run dev`
