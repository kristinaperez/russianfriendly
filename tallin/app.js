(function () {
  const TALLINN_CENTER = [59.4370, 24.7536];

  const map = L.map("map", { scrollWheelZoom: false }).setView(TALLINN_CENTER, 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const markers = [];

  function iconFor(place) {
    const verified = place.verified === "full";
    return L.divIcon({
      className: "",
      html: `<div class="pin ${verified ? "pin-verified" : "pin-partial"}"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
  }

  function popupHtml(place) {
    const badge = place.verified === "full"
      ? '<span class="badge badge-ok">✅ проверено</span>'
      : '<span class="badge badge-warn">⚠️ уточняется</span>';
    return `
      <div class="popup">
        <strong>${place.name}</strong> ${badge}
        <p>${place.address}</p>
        ${place.phone ? `<p>📞 ${place.phone}</p>` : ""}
        ${place.site ? `<p><a href="${place.site}" target="_blank" rel="noopener">Сайт →</a></p>` : ""}
        ${place.note ? `<p class="popup-note">${place.note}</p>` : ""}
      </div>`;
  }

  PLACES.forEach((place) => {
    const m = L.marker([place.lat, place.lng], { icon: iconFor(place) })
      .addTo(map)
      .bindPopup(popupHtml(place));
    m.placeData = place;
    markers.push(m);
  });

  // ---- Filters ----
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.dataset.cat;
      markers.forEach((m) => {
        const show = cat === "all" || m.placeData.cat === cat;
        if (show) {
          if (!map.hasLayer(m)) m.addTo(map);
        } else {
          map.removeLayer(m);
        }
      });
      renderListing(cat);
    });
  });

  // ---- Listing ----
  function renderListing(filterCat) {
    const grid = document.getElementById("listing-grid");
    grid.innerHTML = "";

    const cats = filterCat && filterCat !== "all" ? [filterCat] : Object.keys(CATEGORY_LABELS);

    cats.forEach((cat) => {
      const items = PLACES.filter((p) => p.cat === cat);
      const section = document.createElement("div");
      section.className = "listing-section";

      const heading = document.createElement("h3");
      heading.textContent = CATEGORY_LABELS[cat] || cat;
      section.appendChild(heading);

      if (items.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-note";
        empty.innerHTML = `Пока нет проверенных точек в этой категории.
          <a href="https://t.me/RussianFriendlyFeedbackbot" target="_blank" rel="noopener">Предложите точку в бот →</a>`;
        section.appendChild(empty);
      } else {
        items.forEach((p) => {
          const card = document.createElement("div");
          card.className = "place-card";
          card.innerHTML = `
            <strong>${p.name}</strong>
            <span class="badge ${p.verified === "full" ? "badge-ok" : "badge-warn"}">
              ${p.verified === "full" ? "✅ проверено" : "⚠️ уточняется"}
            </span>
            <p>${p.address}</p>
            ${p.site ? `<a href="${p.site}" target="_blank" rel="noopener">Сайт →</a>` : ""}
          `;
          section.appendChild(card);
        });
      }
      grid.appendChild(section);
    });
  }

  renderListing("all");
})();
