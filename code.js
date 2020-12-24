let offset = 0;

figma.showUI(__html__);
figma.ui.hide();
figma.loadFontAsync({ family: "Roboto", style: "Regular" }).then(() => {
  figma.ui.onmessage = ({ message, value }) => {
    if (message === "chat") {
      const nodes = [];
      const text = figma.createText();
      text.characters = value;
      text.fontSize = 16;
      text.x = 0;
      text.y = offset;
      figma.currentPage.appendChild(text);
      offset = offset + 20;
      //figma.viewport.scrollAndZoomIntoView(text);
    }
    //figma.closePlugin();
  };
});
