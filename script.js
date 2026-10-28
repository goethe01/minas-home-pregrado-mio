// =============================================
// ABRIR MODAL
// =============================================

function openModal(id) {

  const modal = document.getElementById(id);

  if (!modal) {
    return;
  }

  modal.classList.add("active");

  document.body.style.overflow = "hidden";

}


// =============================================
// CERRAR MODAL
// =============================================

function closeModal(id) {

  const modal = document.getElementById(id);

  if (!modal) {
    return;
  }

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


// =============================================
// CERRAR MODAL CON ESC
// =============================================

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      const modals =
        document.querySelectorAll(".modal.active");

      modals.forEach(function(modal) {

        modal.classList.remove("active");

      });

      document.body.style.overflow = "";

    }

  }
);


// =============================================
// CAMBIAR ICONO + / - EN FAQ
// =============================================

const details =
  document.querySelectorAll("details");


details.forEach(function(item) {

  item.addEventListener(
    "toggle",
    function() {

      const icon =
        item.querySelector("summary i");

      if (!icon) {
        return;
      }

      if (item.open) {

        icon.classList.remove("fa-plus");

        icon.classList.add("fa-minus");

      } else {

        icon.classList.remove("fa-minus");

        icon.classList.add("fa-plus");

      }

    }
  );

});