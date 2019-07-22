# job-search
Aplicação que através de WebScrapping retorna vagas do Ifood, Sympla, Wavy e Vagas.com.

# job-search
Stack: Javascript no Node com pacotes Cheerio e Request-Promise.

# Objetivos
Aprender a fazer WebScrapping e aplicá-lo em algum site de verdade para se acostumar com o cheerio também.

# Utilização
1.Necessita ter instalado NodeJS

2.Baixar job-search

3.Abra script.js e escolha a vaga que deseja procurar:
3.1. Na variável search adicione entre aspas a vaga que deseja buscar no site vagas.com
     Exemplo: const search = 'desenvolvedor python' ou search = 'motorista'
3.2. Por padrão em Ifood, Wavy e Sympla será mostrado as vagas na área de tecnologia
3.2.1. Por padrão também mostrará vagas no estado de SP, no entanto pode modificar com a sigla de outro estado
       Exemplo: $(this).attr('data-state') === 'MG' nos ifs

4.Na linha de comando quando dentro da pasta efetuar os seguintes passos:
4.1 npm start or yarn start para fazer download dos pacotes necessário (no caso, cheerio e request-promise)
4.2 node script.js para rodar a aplicação
