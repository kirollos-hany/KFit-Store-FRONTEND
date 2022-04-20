// data-toggle-target attribute is required on the element that toggles the targeted element
// data-toggle-target attribute value has to be the id of the element to toggle

const togglers = $("[data-toggle-target]").toArray();

togglers.forEach((toggler) =>
  $(toggler).click((_) => {
    const toggleElementId = $(toggler).attr("data-toggle-target");
    $(`#${toggleElementId}`).toggleClass("d-none");
  })
);
