function sumario() {
    window.scrollTo(0, 0);

    // codigo do site do bootstrap
    const collapseElementList = document.querySelectorAll('#asideCol');
    return [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));
}