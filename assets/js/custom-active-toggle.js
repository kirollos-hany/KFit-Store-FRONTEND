// data-list-active attribute is required on the container of the list items
// data-list-active attribute value has to be the class name representing active list item style
$("[data-list-active]").toArray().forEach(element => {
    const items = $(element).children().toArray();
    items.forEach(item => {
        $(item).click(_ => {
            items.forEach(i => $(i).removeClass(`${$(element).attr('data-list-active')}`));
            $(item).addClass(`${$(element).attr('data-list-active')}`);
        });
    });
});