function loadPage(page) {
    document.getElementById("contentFrame").src = page;
}

function togglePanel(panelId) {
    var panel = document.getElementById(panelId);
    panel.classList.toggle("show");
}

function toggleSubPage(subPanelId) {
    var allSubPanels = document.querySelectorAll(".nested-items");
    allSubPanels.forEach(panel => {
        if (panel.id === subPanelId) {
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        } else {
            panel.style.display = "none";
        }
    });
}