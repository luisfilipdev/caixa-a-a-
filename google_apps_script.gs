/**
 * CAIXA AÇAÍTERIA -> GOOGLE PLANILHAS
 * Planilha: use a aba "Lançamentos".
 *
 * Implantação:
 * 1) Abra sua planilha > Extensões > Apps Script.
 * 2) Apague o conteúdo e cole este código.
 * 3) Implantar > Nova implantação > Aplicativo da Web.
 * 4) Executar como: você.
 * 5) Quem tem acesso: Qualquer pessoa.
 * 6) Copie a URL /exec e cole no campo "Planilha" do app.
 */
const ABA = "Lançamentos";

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const rows = body.rows || [];
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA);
    if (!sh) throw new Error('Aba "' + ABA + '" não encontrada.');

    if (!rows.length) return json({ok:true, inserted:0});

    const values = rows.map(r => [
      new Date(r.data),
      Number(r.valor),
      String(r.pagamento || ""),
      String(r.produto || ""),
      Number(r.quantidade_litros || 0)
    ]);

    // Append after existing content, preserving the current columns A:E.
    sh.getRange(sh.getLastRow()+1, 1, values.length, 5).setValues(values);
    return json({ok:true, inserted:values.length});
  } catch(err) {
    return json({ok:false, error:String(err)});
  }
}

function doGet() {
  return json({ok:true, message:"Caixa Açaíteria conectado."});
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
