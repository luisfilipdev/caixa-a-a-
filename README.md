# Caixa Açaíteria — Capacitor + Google Planilhas

Este projeto usa o seu caixa HTML e envia as vendas para a aba `Lançamentos` da sua planilha.

## Colunas usadas
A: Data
B: Valor da venda
C: Pagamento
D: Produto
E: Quantidade (L)

## Configurar a integração
1. Abra a sua planilha no Google Planilhas.
2. Vá em Extensões → Apps Script.
3. Cole o conteúdo de `google_apps_script.gs`.
4. Implantar → Nova implantação → Aplicativo da Web.
5. Executar como: você.
6. Quem tem acesso: Qualquer pessoa.
7. Copie a URL terminada em `/exec`.
8. Abra o Caixa Açaíteria, cole a URL em "Planilha" e toque em "ENVIAR VENDAS DE HOJE PARA A PLANILHA".

O app envia os lançamentos para a aba `Lançamentos`, que já possui as colunas Data, Valor da venda, Pagamento, Produto e Quantidade (L).
