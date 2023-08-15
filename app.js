const modalsBtn = document.querySelectorAll(".modal-item");
const modals = document.querySelectorAll(".modal-box");
const closeModals = document.querySelectorAll(".close__modal");


modalsBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        const targetId = btn.dataset.target;
        const modalBody = document.querySelector(`[data-id= "${targetId}"`);
        modalBody.classList.add("active");
    });
});

closeModals.forEach(clos =>{
    clos.addEventListener("click", () =>{
        const parent = clos.closest(".modal-box");
        parent.classList.remove("active"); 
    });
});
