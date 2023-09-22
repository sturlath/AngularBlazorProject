
window.showMyPowerBIReport = async function (reportContainer, accessToken, embedUrl, embedReportId) {
  // Get models. models contains enums that can be used.
  var models = window['powerbi-client'].models;
  var config = {
    type: 'report',
    id: embedReportId,
    tokenType: models.TokenType.Embed,
    accessToken: accessToken,
    embedUrl: embedUrl,
    permissions: models.Permissions.All,
    settings: {
      filterPaneEnabled: true,
      navContentPaneEnabled: true,
      useCustomSaveAsDialog: true
    }
  };

  try {
      var reportContainer1 = document.getElementById(reportContainer);
      console.log(reportContainer1);
      // Embed the report and display it within the div container.
      powerbi.embed(reportContainer1, config);
  }
  catch (e) {
    console.error("Error embedding report:", e);
  }
}
