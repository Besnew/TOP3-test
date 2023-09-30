function render(route) {
    const appContainer = document.getElementById('app');

    switch (route) {
        case '/':
            appContainer.innerHTML = defaultContent;
            initializeHomePage(); 
            break;
        case '/blog':
            appContainer.innerHTML = '<h1>Blog Article</h1>';
            break;
        default:
            appContainer.innerHTML = '<h1>Not Found</h1>';
    }
}

function handleRouteChange() {
    const currentRoute = window.location.hash.slice(1) || '/';
    render(currentRoute);
}

const defaultContent = document.getElementById('app').innerHTML;
window.addEventListener('hashchange', handleRouteChange);
handleRouteChange();
