
function addItem() {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
    <img src="${item.src}" alt="${item.title}">
    <div class="details">
      <div class="title">${item.title}</div>
      <div class="price-qty">
        <div class="price">R$${item.price}</div>
        <div class="qty">
          <button class="sub">
            <i class="ph ph-minus"></i>
          </button>
          <span>1</span>
          <button class="add">
            <i class="ph ph-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  item.src = "./assets/product-image-monitor.jpg";
  item.title = "Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, ";
  item.price = 859990;
  document.querySelector("#app").appendChild(item);
}

function removeItem(event) {
  const item = event.target.parentElement;
  item.parentElement.removeChild(item);
}

function handleAddToCart(event) {
  const item = event.target.parentElement;
  const quantity = parseInt(item.querySelector(".qty span").textContent);
  // Atualize o total do carrinho com base na quantidade do item.
}

function handleSubtractQuantity(event) {
  const item = event.target.parentElement;
  const currentQuantity = parseInt(item.querySelector(".qty span").textContent);
  const newQuantity = currentQuantity - 1;
  item.querySelector(".qty span").textContent = newQuantity;
}

function handleAddQuantity(event) {
  const item = event.target.parentElement;
  const currentQuantity = parseInt(item.querySelector(".qty span").textContent);
  const newQuantity = currentQuantity + 1;
  item.querySelector(".qty span").textContent = newQuantity;
}


// Adicione os manipuladores de eventos para adicionar, remover e atualizar itens.
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.querySelector(".add").addEventListener("click", handleAddToCart);
  item.querySelector(".sub").addEventListener("click", handleSubtractQuantity);
  item.querySelector(".add").addEventListener("click", handleAddQuantity);
  item.querySelector(".qty span").addEventListener("click", removeItem);
});
