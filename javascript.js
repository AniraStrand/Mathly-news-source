const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${}px`);
    target.style.setProperty("--mouse-y", `${}px`);
}

for(const grid-item of document.querySelectorAll(".grid-item")) {
    grid-item.onmousemove = e => handleOnMouseMove(e);

}