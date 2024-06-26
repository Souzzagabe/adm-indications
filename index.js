// document.addEventListener("DOMContentLoaded", function () {
//   const bannerItems = document.querySelectorAll(".banner-item");
//   const bannerItemsContainer = document.querySelector(".banner-items");

//   function closeExpandedItem(expandedItem, callback) {
//     if (expandedItem) {
//       const expandedImage = expandedItem.querySelector(".banner-image img");
//       const isExpanded = expandedItem.classList.contains("expanded");

//       // Verifica se é um item expandido com imagem expandida
//       if (!isExpanded || !expandedImage.dataset.expandedSrc) {
//         if (callback && typeof callback === "function") {
//           callback(); // Chama o callback imediatamente se não houver nada para fechar
//         }
//         return;
//       }

//       const expandedText = expandedItem.querySelector(".banner-text");
//       const expandedCloseBtn = expandedItem.querySelector(".close-btn");
//       const expandedContainerText =
//         expandedItem.querySelector(".container-text");

//       // Adiciona a classe 'fade-out' para a transição de opacidade
//       bannerItemsContainer.classList.add("fade-out");

//       // Remove a classe 'full-width' e adiciona a classe 'close-width' para a animação de fechamento
//       expandedImage.classList.remove("full-width");
//       expandedImage.classList.add("close-width");

//       // Reverte a imagem para a original após a animação de fechamento
//       setTimeout(() => {
//         expandedImage.src = expandedImage.dataset.originalSrc;
//         expandedText.style.display = "block";
//         expandedCloseBtn.style.display = "none";
//         expandedContainerText.style.display = "block";
//         expandedItem.classList.remove("expanded");

//         // Remove a classe 'close-width' da imagem após as animações
//         setTimeout(() => {
//           expandedImage.classList.remove("close-width");

//           // Remove a classe 'fade-out' e adiciona a classe 'fade-in' após a animação de fechamento
//           bannerItemsContainer.classList.remove("fade-out");
//           bannerItemsContainer.classList.add("fade-in");

//           if (callback && typeof callback === "function") {
//             callback(); // Chama o callback após a animação de fechamento
//           }

//           // Remove a classe 'fade-in' após a transição de opacidade
//           setTimeout(() => {
//             bannerItemsContainer.classList.remove("fade-in");
//           }, 1500); // Ajuste a duração conforme necessário
//         }, 0);
//       }, 1900);
//     } else {
//       if (callback && typeof callback === "function") {
//         callback(); // Chama o callback imediatamente se não houver nada para fechar
//       }
//     }
//   }

//   bannerItems.forEach((item) => {
//     const bannerImage = item.querySelector(".banner-image img");
//     const bannerText = item.querySelector(".banner-text");
//     const closeBtn = item.querySelector(".close-btn");
//     const containerText = item.querySelector(".container-text");
//     const originalSrc = bannerImage.src;

//     bannerImage.addEventListener("click", function () {
//       if (!item.classList.contains("expanded")) {
//         closeExpandedItem(
//           document.querySelector(".banner-item.expanded"),
//           () => {
//             // Adiciona a classe 'expanded' ao item
//             item.classList.add("expanded");

//             // Verifica se há uma imagem expandida definida
//             if (bannerImage.dataset.expandedSrc) {
//               bannerImage.dataset.originalSrc = originalSrc;
//               bannerImage.src = bannerImage.dataset.expandedSrc;

//               // Mostra o botão de fechar e oculta o texto do container
//               closeBtn.style.display = "block";
//               containerText.style.display = "none";

//               // Adiciona a classe 'full-width' à imagem com animação de abertura
//               bannerImage.classList.add("full-width");

//               // Desabilita outros itens e oculta seus textos do container
//               bannerItems.forEach((i) => {
//                 if (i !== item) {
//                   i.classList.add("disabled");
//                   i.querySelector(".container-text").style.display = "none";
//                 }
//               });
//             }
//           }
//         );
//       }
//     });

//     closeBtn.addEventListener("click", function (event) {
//       event.stopPropagation();
//       if (item.classList.contains("expanded")) {
//         // Verifica se há uma imagem expandida definida antes de fechar
//         if (bannerImage.dataset.expandedSrc) {
//           closeExpandedItem(item, () => {
//             // Reabilita outros itens e mostra seus textos do container
//             bannerItems.forEach((i) => {
//               i.classList.remove("disabled");
//               i.querySelector(".container-text").style.display = "block";
//             });
//           });
//         }
//       }
//     });
//   });
// });
